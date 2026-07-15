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

  static get styles() { return styles; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'entity', required: true, selector: { entity: { domain: 'fan' } } },
        { name: 'name', selector: { text: {} } },
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

  getCardSize() { return 4; }

  private _setSpeed(percentage: number) {
    this.hass.callService('fan', 'set_percentage', {
      entity_id: this._config.entity,
      percentage: percentage
    });
  }

  private _turnOff() {
    this.hass.callService('fan', 'turn_off', { entity_id: this._config.entity });
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

    return html`
      <ha-card style="${this._config.accent_color ? `--miraie-accent: ${this._config.accent_color};` : ''}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="status-dot ${isOn ? 'online' : ''}"></div>
              <div class="title">${name}</div>
            </div>
            <div class="subtitle">Fan: ${isOn ? (presetMode || (percentage + '%')) : 'off'}</div>
          </div>
          <button class="power-btn ${isOn ? 'on' : ''}" @click=${this._turnOff}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
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
}
