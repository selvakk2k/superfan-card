import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { SuperfanCardConfig } from './types';
import { styles } from './styles';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'superfan-card',
  name: 'Superfan Card',
  description: 'A premium custom card for the Superfan integration.',
  preview: true,
});

/* ── Main Card ── */
@customElement('superfan-card')
export class SuperfanCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SuperfanCardConfig;
  @state() private _expanded: boolean = false;

  static get styles() { return styles; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'entity', required: true, selector: { entity: { domain: 'fan' } } },
        { name: 'name', selector: { text: {} } },
        { name: 'theme', selector: { select: { options: [{ label: 'Default HA Theme', value: 'default' }, { label: 'Material You', value: 'material_you' }] } } },
        { name: 'layout', selector: { select: { options: [{ label: 'Default (Full)', value: 'default' }, { label: 'Compact (Expandable)', value: 'compact' }] } } },
        { name: 'accent_color', selector: { ui_color: {} } }
      ]
    };
  }

  static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]) {
    const fanEntity = entities.find((e) => e.startsWith('fan.')) || '';
    return { type: 'custom:superfan-card', entity: fanEntity };
  }

  setConfig(config: SuperfanCardConfig) {
    this._config = config;
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (changedProps.has('_config')) {
      const theme = this._config?.theme || 'default';
      if (this.getAttribute('theme') !== theme) {
        this.setAttribute('theme', theme);
      }
    }
  }

  getCardSize() { return this._config?.layout === 'compact' && !this._expanded ? 2 : 4; }

  private _setSpeed(percentage: number) {
    this.hass.callService('fan', 'set_percentage', {
      entity_id: this._config.entity,
      percentage: percentage
    });
  }

  private _toggle() {
    this.hass.callService('fan', 'toggle', { entity_id: this._config.entity });
  }

  private _setPreset(preset: string) {
    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this._config.entity,
      preset_mode: preset
    });
  }

  private _getPresetIcon(preset: string): string {
    const p = preset.toLowerCase();
    if (p.includes('breeze')) return 'mdi:weather-windy';
    if (p.includes('speed')) return 'mdi:swap-vertical';
    if (p.includes('eco')) return 'mdi:leaf';
    if (p.includes('wellness')) return 'mdi:heart-pulse';
    if (p.includes('ac')) return 'mdi:air-conditioner';
    return 'mdi:auto-fix';
  }

  render() {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`<ha-card><div class="not-found">Entity not found</div></ha-card>`;
    }

    const name = this._config.name || stateObj.attributes.friendly_name || 'Superfan';
    const isOn = stateObj.state === 'on';
    const percentage = stateObj.attributes.percentage || 0;
    const presetMode = stateObj.attributes.preset_mode;
    const presetModes = stateObj.attributes.preset_modes || [];
    
    // Dynamically determine speed count from percentage_step
    const percentageStep = stateObj.attributes.percentage_step || 100;
    const speedCount = Math.round(100 / percentageStep);

    // Split presets between modes and timers
    const modes = presetModes.filter((p: string) => !p.toLowerCase().includes('timer') && !p.toLowerCase().includes('hr') && !p.toLowerCase().includes('hour'));
    const timers = presetModes.filter((p: string) => p.toLowerCase().includes('timer') || p.toLowerCase().includes('hr') || p.toLowerCase().includes('hour'));

    /* Custom accent color applied as CSS var via inline style */
    let accentStyle = '';
    if (this._config.accent_color) {
      if (Array.isArray(this._config.accent_color)) {
        accentStyle = `rgb(${this._config.accent_color.join(',')})`;
      } else if (typeof this._config.accent_color === 'string') {
        const c = this._config.accent_color.toLowerCase();
        if (c === 'primary') accentStyle = 'var(--primary-color)';
        else if (c === 'accent') accentStyle = 'var(--accent-color)';
        else if (/^[a-z-]+$/.test(c)) accentStyle = `var(--${c}-color, ${c})`;
        else accentStyle = c;
      }
    }
    const cardStyle = accentStyle ? `--miraie-accent: ${accentStyle};` : '';

    if (this._config.layout === 'compact' && !this._expanded) {
      return this._renderCompact(stateObj, name, isOn, percentage, presetMode, speedCount);
    }

    return html`
      <ha-card style="${cardStyle}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${isOn ? 'online' : ''}"></div>
              <div class="title">${name}</div>
            </div>
            <div class="subtitle">Fan: ${isOn ? (presetMode || (percentage + '%')) : 'off'}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${this._config.layout === 'compact' ? html`
              <button class="power-btn" style="background: transparent;" @click=${() => this._expanded = false}>
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            ` : ''}
            <button class="power-btn ${isOn ? 'on' : ''}" @click=${this._toggle}>
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${speedCount === 5 ? html`
              <button class="speed-btn ${isOn && percentage > 80 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(100)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 60 && percentage <= 80 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(80)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 40 && percentage <= 60 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(60)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 20 && percentage <= 40 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(40)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 0 && percentage <= 20 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(20)}>
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            ` : speedCount === 3 ? html`
              <button class="speed-btn ${isOn && percentage > 66 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 33 && percentage <= 66 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(66)}>
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 0 && percentage <= 33 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(33)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            ` : html`
              <!-- Fallback -->
              <button class="speed-btn ${isOn && percentage > 50 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(100)}>
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button class="speed-btn ${isOn && percentage > 0 && percentage <= 50 && !presetMode ? 'active' : ''}" @click=${() => this._setSpeed(50)}>
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container" style="display: flex; flex-direction: column; gap: 12px;">
            ${modes.length > 0 ? html`
              <div class="section-label">Modes</div>
              <div class="pill-grid">
                ${modes.map((preset: string) => html`
                  <button 
                    class="pill-btn ${presetMode === preset ? 'active' : ''}" 
                    @click=${() => this._setPreset(preset)}
                  >
                    <ha-icon icon="${this._getPresetIcon(preset)}"></ha-icon>
                    <span>${preset}</span>
                  </button>
                `)}
              </div>
            ` : ''}

            ${timers.length > 0 ? html`
              <div class="section-label" style="margin-top: 4px;">Timers</div>
              <div class="pill-grid">
                ${timers.map((preset: string) => html`
                  <button 
                    class="pill-btn ${presetMode === preset ? 'active' : ''}" 
                    @click=${() => this._setPreset(preset)}
                  >
                    <ha-icon icon="mdi:timer-outline"></ha-icon>
                    <span>${preset}</span>
                  </button>
                `)}
              </div>
            ` : ''}

            ${presetModes.length === 0 ? html`
              <div class="section-label">No Presets Available</div>
            ` : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderCompact(stateObj: any, name: string, isOn: boolean, percentage: number, presetMode: string, speedCount: number) {
    const displayValue = isOn ? (presetMode || `${percentage}%`) : 'Off';
    return html`
      <ha-card class="compact-card" @click=${() => this._expanded = true}>
        <div class="compact-header">
          <button class="compact-icon-btn ${isOn ? 'on' : ''}" @click=${(e: Event) => { e.stopPropagation(); this._toggle(); }}>
            <ha-icon icon="${isOn ? 'mdi:fan' : 'mdi:power'}"></ha-icon>
          </button>
          <div class="compact-title">${name}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        
        <div class="compact-center">
          <div class="compact-value" style="${displayValue.length > 4 ? 'font-size: 1.8rem;' : ''}">${displayValue}</div>
        </div>

        <div class="compact-footer">
          <button class="compact-action-btn" ?disabled=${!isOn || presetMode} @click=${(e: Event) => { e.stopPropagation(); this._cycleSpeed(percentage, speedCount, -1); }}>
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="compact-subtitle">Speed</div>
          <button class="compact-action-btn" ?disabled=${!isOn || presetMode} @click=${(e: Event) => { e.stopPropagation(); this._cycleSpeed(percentage, speedCount, 1); }}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </ha-card>
    `;
  }

  private _cycleSpeed(currentPct: number, speedCount: number, direction: number) {
    const step = 100 / speedCount;
    let nextPct = currentPct + (step * direction);
    if (nextPct > 100) nextPct = 100;
    if (nextPct < 0) nextPct = 0;
    this._setSpeed(Math.round(nextPct));
  }
}
