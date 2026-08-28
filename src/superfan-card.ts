import { LitElement, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { SuperfanCardConfig } from './types';
import { styles } from './styles';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'superfan-card',
  name: 'Superfan Card',
  description: 'A premium Lovelace fan card for the Superfan integration.',
  preview: true,
});

@customElement('superfan-card')
export class SuperfanCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SuperfanCardConfig;
  @state() private _expanded: boolean = false;
  @state() private _ghDropdown: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this._handleWindowClick);
    super.disconnectedCallback();
  }

  private _handleWindowClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if (this._ghDropdown && !path.includes(this)) {
      this._ghDropdown = null;
    }
  };


  static get styles() { return styles; }

  /* ── Native visual editor ── */
  static getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          required: true,
          label: 'Fan Entity',
          selector: { entity: { domain: 'fan', integration: 'superfan_ir' } },
        },
        { name: 'name', label: 'Custom Title', selector: { text: {} } },
        {
          name: 'theme',
          label: 'Theme',
          selector: {
            select: {
              options: [
                { label: 'Default HA Theme', value: 'default' },
                { label: 'Material You', value: 'material_you' },
              ],
            },
          },
        },
        {
          name: 'layout',
          label: 'Card Layout',
          selector: {
            select: {
              options: [
                { label: 'Default (Full)', value: 'default' },
                { label: 'Compact (Expandable)', value: 'compact' },
              ],
            },
          },
        },
        {
          name: 'full_layout',
          label: 'Full View Style',
          selector: {
            select: {
              options: [
                { label: 'Classic', value: 'default' },
                { label: 'Google Home', value: 'google_home' },
              ],
            },
          },
        },
        {
          name: '',
          type: 'expandable',
          title: 'Theming & Colors',
          icon: 'mdi:palette',
          schema: [
            { name: 'accent_color', label: 'Accent Color', selector: { ui_color: {} } },
            { name: 'main_color', label: 'Background Color', selector: { ui_color: {} } },
          ],
        },
        {
          name: '',
          type: 'expandable',
          title: 'Companion Entities (Auto-Discovered if blank)',
          icon: 'mdi:link-variant',
          schema: [
            {
              name: 'control_source_sensor',
              label: 'Control Source Sensor',
              selector: { entity: { domain: 'sensor', integration: 'superfan_ir' } },
            },
            {
              name: 'ir_blaster_sensor',
              label: 'IR Blaster Sensor',
              selector: { entity: { domain: ['binary_sensor', 'infrared', 'remote'] } },
            },
          ],
        },
      ],
    };
  }

  static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]) {
    const fanEntity = entities.find((e) => e.startsWith('fan.')) || '';
    return { type: 'custom:superfan-card', entity: fanEntity };
  }

  public setConfig(config: SuperfanCardConfig): void {
    if (!config || !config.entity) {
      throw new Error('Please define a valid fan entity');
    }
    this._config = { ...config };
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

  public getCardSize(): number {
    return this._config?.layout === 'compact' && !this._expanded ? 2 : 4;
  }

  /* ── Haptics & Feedback ── */
  private _haptic(type: 'light' | 'medium' | 'selection' | 'warning' = 'light'): void {
    window.dispatchEvent(new CustomEvent('haptic', { detail: type }));
  }

    private _sourceIcon(source: string): string {
    const s = (source || '').toLowerCase();
    if (s.includes('remote')) return 'mdi:remote';
    if (s.includes('switch')) return 'mdi:toggle-switch';
    if (s.includes('blaster') || s.includes('failover') || s === 'ir') return 'mdi:remote-desktop';
    if (s.includes('cloud') || s === 'mqtt') return 'mdi:cloud-check';
    return 'mdi:remote-desktop';
  }

private _showToast(message: string): void {
    this._haptic('warning');
    this.dispatchEvent(
      new CustomEvent('hass-notification', {
        bubbles: true,
        composed: true,
        detail: { message },
      })
    );
  }

  private _setSpeed(percentage: number): void {
    this._haptic('selection');
    this.hass.callService('fan', 'set_percentage', {
      entity_id: this._config.entity,
      percentage,
    });
  }

  private _toggle(): void {
    if (!this.hass || !this._config) return;
    this._haptic('medium');
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return;

    if (stateObj.state === 'off') {
      this.hass.callService('fan', 'turn_on', {
        entity_id: this._config.entity,
      });
    } else {
      this.hass.callService('fan', 'turn_off', {
        entity_id: this._config.entity,
      });
    }
  }

  private _setPreset(preset: string): void {
    this._haptic('light');
    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this._config.entity,
      preset_mode: preset,
    });
  }

  private _formatPresetName(preset: string): string {
    if (!preset) return '';
    return preset.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private _getPresetIcon(preset: string): string {
    const p = preset.toLowerCase();
    if (p.includes('breeze')) return 'mdi:weather-windy';
    if (p.includes('nature')) return 'mdi:nature';
    if (p.includes('smart')) return 'mdi:brain';
    if (p.includes('speed')) return 'mdi:swap-vertical';
    if (p.includes('eco')) return 'mdi:leaf';
    if (p.includes('wellness')) return 'mdi:heart-pulse';
    if (p.includes('ac')) return 'mdi:air-conditioner';
    if (p.includes('reverse')) return 'mdi:rotate-left';
    if (p.includes('sleep')) return 'mdi:bed-clock';
    if (p.includes('led') || p.includes('light')) return 'mdi:lightbulb-outline';
    if (p.includes('boost')) return 'mdi:rocket-launch-outline';
    if (p.includes('timer') || p.includes('hr') || p.includes('hour')) return 'mdi:timer-outline';
    return 'mdi:fan';
  }

  protected render(): TemplateResult | null {
    if (!this._config || !this.hass) return null;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`
        <ha-card style="padding: 20px; text-align: center;">
          <div style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">Superfan Card</div>
          <div style="font-size: 13px; color: var(--error-color, #e53935); margin-top: 6px;">
            Entity not found: <code>${this._config.entity}</code>
          </div>
        </ha-card>
      `;
    }

    const name = this._config.name || stateObj.attributes.friendly_name || 'Superfan';
    const isOnline = stateObj.state !== 'unavailable' && stateObj.state !== 'unknown';
    const isOn = stateObj.state === 'on' && isOnline;
    const percentage = stateObj.attributes.percentage || 0;
    const presetMode = stateObj.attributes.preset_mode;
    const presetModes = stateObj.attributes.preset_modes || [];

    const percentageStep = stateObj.attributes.percentage_step || 100;
    const speedCount = Math.round(100 / percentageStep);

    const baseId = this._config.entity.replace(/^fan\./, '');
    const controlSource = this._config.control_source_sensor 
      ? this.hass.states[this._config.control_source_sensor]
      : (this.hass.states[`sensor.${baseId}_last_controlled_via`] || Object.values(this.hass.states).find(s => s.entity_id.startsWith('sensor.') && s.entity_id.includes(baseId) && s.entity_id.includes('last_controlled_via')));

    const irBlaster = this._config.ir_blaster_sensor
      ? this.hass.states[this._config.ir_blaster_sensor]
      : (this.hass.states[`binary_sensor.${baseId}_ir_blaster_available`] || Object.values(this.hass.states).find(s => s.entity_id.startsWith('binary_sensor.') && s.entity_id.includes(baseId) && s.entity_id.includes('ir_blaster_available')));

    const isBlasterOnline = irBlaster ? irBlaster.state === 'on' : isOnline;
    const lastControlledText = controlSource ? controlSource.state : null;

    // Split presets between modes and timers
    const modes = presetModes.filter(
      (p: string) =>
        !p.toLowerCase().includes('timer') &&
        !p.toLowerCase().includes('hr') &&
        !p.toLowerCase().includes('hour')
    );
    const timers = presetModes.filter(
      (p: string) =>
        p.toLowerCase().includes('timer') ||
        p.toLowerCase().includes('hr') ||
        p.toLowerCase().includes('hour')
    );

    /* Custom accent and main colors applied as CSS vars via inline style */
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

    let mainStyle = '';
    if (this._config.main_color) {
      if (Array.isArray(this._config.main_color)) {
        mainStyle = `rgb(${this._config.main_color.join(',')})`;
      } else if (typeof this._config.main_color === 'string') {
        const c = this._config.main_color.toLowerCase();
        if (c === 'primary') mainStyle = 'var(--primary-color)';
        else if (c === 'accent') mainStyle = 'var(--accent-color)';
        else if (/^[a-z-]+$/.test(c)) mainStyle = `var(--${c}-color, ${c})`;
        else mainStyle = c;
      }
    }

    const cardStyle = `${accentStyle ? `--sf-accent: ${accentStyle}; ` : ''}${mainStyle ? `--sf-bg: ${mainStyle}; ` : ''}`;

    if (this._config.layout === 'compact' && !this._expanded) {
      return this._renderCompact(stateObj, name, isOn, isOnline, percentage, presetMode, speedCount, cardStyle);
    }

    if (this._config.full_layout === 'google_home') {
      return this._renderGoogleHomeFull(
        stateObj,
        name,
        isOn,
        isOnline,
        percentage,
        presetMode,
        speedCount,
        modes,
        timers,
        cardStyle,
        controlSource,
        irBlaster
      );
    }

    return html`
      <ha-card style="${cardStyle}">
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <ha-icon class="header-icon" icon="mdi:fan"></ha-icon>
              <div class="title">${name}</div>
            </div>
            <div class="subtitle">Fan: ${isOn ? (presetMode ? this._formatPresetName(presetMode) : `${percentage}%`) : (isOnline ? 'Off' : 'Offline')}</div>
          </div>
          <div class="header-right">
            ${this._config.layout === 'compact' ? html`
              <button
                class="collapse-btn"
                title="Collapse card"
                @click=${() => (this._expanded = false)}
              >
                <ha-icon icon="mdi:chevron-up"></ha-icon>
              </button>
            ` : ''}
            <button
              class="power-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
              title="${!isOnline ? 'Device is offline' : 'Toggle Power'}"
              @click=${() => {
                if (!isOnline) {
                  this._showToast('Device is offline');
                } else {
                  this._toggle();
                }
              }}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <div class="body-container">
          <!-- Left Column: Speed Selector -->
          <div class="vertical-selector">
            ${speedCount === 5 ? html`
              <button
                class="speed-btn ${isOn && percentage > 80 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Speed 5 (100%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(100); } }}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>5</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 60 && percentage <= 80 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Speed 4 (80%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(80); } }}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>4</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 40 && percentage <= 60 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Speed 3 (60%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(60); } }}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>3</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 20 && percentage <= 40 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Speed 2 (40%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(40); } }}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>2</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 0 && percentage <= 20 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Speed 1 (20%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(20); } }}
              >
                <ha-icon icon="mdi:fan"></ha-icon>
                <span>1</span>
              </button>
            ` : speedCount === 3 ? html`
              <button
                class="speed-btn ${isOn && percentage > 66 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'High Speed (100%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(100); } }}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 33 && percentage <= 66 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Medium Speed (66%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(66); } }}
              >
                <ha-icon icon="mdi:fan-speed-2"></ha-icon>
                <span>Medium</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 0 && percentage <= 33 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Low Speed (33%)'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(33); } }}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            ` : html`
              <button
                class="speed-btn ${isOn && percentage > 50 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'High Speed'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(100); } }}
              >
                <ha-icon icon="mdi:fan-speed-3"></ha-icon>
                <span>High</span>
              </button>
              <button
                class="speed-btn ${isOn && percentage > 0 && percentage <= 50 && !presetMode ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to adjust speed' : 'Low Speed'}"
                @click=${() => { if (!isOnline) { this._showToast("Device is offline"); } else if (!isOn) { this._showToast("Turn on the fan to adjust speed"); } else { this._setSpeed(50); } }}
              >
                <ha-icon icon="mdi:fan-speed-1"></ha-icon>
                <span>Low</span>
              </button>
            `}
          </div>

          <!-- Right Column: Presets -->
          <div class="presets-container">
            ${modes.length > 0 ? html`
              <div class="section-label">Modes</div>
              <div class="pill-grid">
                ${modes.map((preset: string) => {
                  const isSpeedAdjust = preset.toLowerCase().includes('speed adjust');
                  const isRealPresetActive = Boolean(
                    presetMode &&
                      presetMode !== 'none' &&
                      !presetMode.toLowerCase().includes('speed adjust')
                  );
                  return html`
                    <button
                      class="pill-btn ${presetMode === preset ? 'active' : ''} ${!isOn || (isSpeedAdjust && isRealPresetActive) ? 'disabled' : ''}"
                      title="${!isOn ? 'Turn on the fan to select modes' : preset}"
                      @click=${() => {
                        if (!isOn) {
                          this._showToast('Turn on the fan to select modes');
                        } else {
                          this._setPreset(preset);
                        }
                      }}
                    >
                      <ha-icon icon="${this._getPresetIcon(preset)}"></ha-icon>
                      <span>${preset}</span>
                    </button>
                  `;
                })}
              </div>
            ` : ''}

            ${timers.length > 0 ? html`
              <div class="section-label" style="margin-top: 4px;">Timers</div>
              <div class="pill-grid">
                ${timers.map((preset: string) => html`
                  <button
                    class="pill-btn ${presetMode === preset ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                    title="${!isOn ? 'Turn on the fan to activate timers' : preset}"
                    @click=${() => {
                      if (!isOn) {
                        this._showToast('Turn on the fan to activate timers');
                      } else {
                        this._setPreset(preset);
                      }
                    }}
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

        <!-- Telemetry & Connection Footer -->
        <div class="footer-telemetry-row">
          <div class="connection-status-pill">
            <div class="status-dot ${isBlasterOnline ? 'online' : ''}"></div>
            <span>IR Blaster</span>
          </div>
          ${lastControlledText ? html`
            <div class="connection-status-pill">
              <ha-icon icon="${lastControlledText === 'IR Remote' ? 'mdi:remote' : (lastControlledText === 'Mains Switch' ? 'mdi:toggle-switch' : 'mdi:remote-desktop')}" style="--mdc-icon-size: 14px;"></ha-icon>
              <span>Last controlled by: ${lastControlledText}</span>
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  private _renderGoogleHomeFull(
    stateObj: any,
    name: string,
    isOn: boolean,
    isOnline: boolean,
    percentage: number,
    presetMode: string,
    speedCount: number,
    modes: string[],
    timers: string[],
    cardStyle: string,
    controlSource?: any,
    irBlaster?: any
  ): TemplateResult {
    const displayValue = isOn ? (presetMode ? this._formatPresetName(presetMode) : `${percentage}%`) : 'Off';

    // Calculate discrete speed steps based on fan model speed count
    let speedSteps: { label: string; pct: number }[] = [];
    if (speedCount === 3) {
      speedSteps = [
        { label: 'Low', pct: 33 },
        { label: 'Med', pct: 66 },
        { label: 'High', pct: 100 },
      ];
    } else if (speedCount === 5) {
      speedSteps = [
        { label: '1', pct: 20 },
        { label: '2', pct: 40 },
        { label: '3', pct: 60 },
        { label: '4', pct: 80 },
        { label: '5', pct: 100 },
      ];
    } else if (speedCount === 6) {
      speedSteps = [
        { label: '1', pct: 17 },
        { label: '2', pct: 33 },
        { label: '3', pct: 50 },
        { label: '4', pct: 67 },
        { label: '5', pct: 83 },
        { label: '6', pct: 100 },
      ];
    } else {
      const count = speedCount > 0 ? speedCount : 3;
      const step = 100 / count;
      for (let i = 1; i <= count; i++) {
        speedSteps.push({ label: `${i}`, pct: Math.round(i * step) });
      }
    }

    const currentStepIndex = !isOn
      ? -1
      : speedSteps.findIndex(
          (s, idx) =>
            Math.abs(s.pct - percentage) <= 10 ||
            (idx === speedSteps.length - 1 && percentage >= s.pct - 10)
        );

    // Active speed label
    const activeSpeedLabel = currentStepIndex >= 0 ? speedSteps[currentStepIndex].label : `${percentage}%`;

    // Active timer if any
    const activeTimer = timers.find((t) => presetMode === t);
    const activeNonTimerPreset = presetMode && !activeTimer ? presetMode : null;

    const isBlasterOnline = irBlaster ? irBlaster.state === 'on' : isOnline;
    const lastControlledText = controlSource ? controlSource.state : null;

    return html`
      <ha-card style="${cardStyle}" class="gh-full-card" @click=${() => (this._ghDropdown = null)}>
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:fan"></ha-icon>
            <div class="gh-title">${name}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            ${this._config.layout === 'compact'
              ? html`
                  <button
                    class="gh-power-btn"
                    title="Collapse card"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._expanded = false;
                    }}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `
              : ''}
            <button
              class="gh-power-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
              title="${!isOnline ? 'Device is offline' : 'Toggle Power'}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOnline) {
                  this._showToast('Device is offline');
                } else {
                  this._toggle();
                }
              }}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <!-- Hero Value -->
        <div class="gh-center">
          <div class="gh-value-large">${displayValue}</div>
          <div class="gh-subtitle-large">Fan Speed</div>
        </div>

        <!-- Google Home Dual Stepper Action Row -->
        <div class="gh-action-row">
          <button
            class="gh-circular-btn ${!isOn || !isOnline ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : (!isOn ? 'Turn on the fan to decrease speed' : (currentStepIndex <= 0 ? 'Turn fan off' : 'Decrease speed'))}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (!isOnline) {
                this._showToast('Device is offline');
              } else if (!isOn) {
                this._showToast('Turn on the fan to decrease speed');
              } else if (currentStepIndex <= 0) {
                this._toggle();
              } else {
                this._setSpeed(speedSteps[currentStepIndex - 1].pct);
              }
            }}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <button
            class="gh-circular-btn ${!isOnline || (isOn && currentStepIndex >= speedSteps.length - 1) ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : (!isOn ? 'Turn on fan at low speed' : (currentStepIndex >= speedSteps.length - 1 ? 'Maximum speed reached' : 'Increase speed'))}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (!isOnline) {
                this._showToast('Device is offline');
              } else if (!isOn) {
                this._setSpeed(speedSteps[0].pct);
              } else if (currentStepIndex >= speedSteps.length - 1) {
                this._showToast('Maximum speed reached');
              } else {
                this._setSpeed(speedSteps[currentStepIndex + 1].pct);
              }
            }}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>

        <!-- Dropdowns Container: Speed, Preset, Timer -->
        <div class="gh-select-container">
          <!-- Speed Dropdown -->
          <div class="gh-select-wrapper ${this._ghDropdown === 'speed' ? 'active' : ''}">
            <button
              class="gh-custom-select ${!isOn ? 'disabled' : ''}"
              title="${!isOn ? 'Turn on the fan to select speed' : 'Select Speed'}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOn) {
                  this._showToast('Turn on the fan to select speed');
                } else {
                  this._haptic('selection');
                  this._ghDropdown = this._ghDropdown === 'speed' ? null : 'speed';
                }
              }}
            >
              <span>Speed: ${isOn ? activeSpeedLabel : 'Off'}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._ghDropdown === 'speed' ? html`
              <div class="gh-dropdown-menu">
                ${speedSteps.map((step, idx) => html`
                  <button
                    class="gh-dropdown-item ${isOn && currentStepIndex === idx ? 'active' : ''}"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._ghDropdown = null;
                      this._setSpeed(step.pct);
                    }}
                  >
                    Speed ${step.label} (${step.pct}%)
                  </button>
                `)}
              </div>
            ` : ''}
          </div>

          <!-- Preset Dropdown -->
          ${modes.length > 0 ? html`
            <div class="gh-select-wrapper ${this._ghDropdown === 'preset' ? 'active' : ''}">
              <button
                class="gh-custom-select ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to select presets' : 'Select Preset Mode'}"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  if (!isOn) {
                    this._showToast('Turn on the fan to select presets');
                  } else {
                    this._haptic('selection');
                    this._ghDropdown = this._ghDropdown === 'preset' ? null : 'preset';
                  }
                }}
              >
                <span>Preset: ${activeNonTimerPreset ? this._formatPresetName(activeNonTimerPreset) : 'None'}</span>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
              </button>
              ${this._ghDropdown === 'preset' ? html`
                <div class="gh-dropdown-menu">
                  <button
                    class="gh-dropdown-item ${!activeNonTimerPreset ? 'active' : ''}"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._ghDropdown = null;
                      this._setSpeed(percentage || speedSteps[0].pct);
                    }}
                  >
                    None
                  </button>
                  ${modes.map((p) => html`
                    <button
                      class="gh-dropdown-item ${presetMode === p ? 'active' : ''}"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        this._ghDropdown = null;
                        this._setPreset(p);
                      }}
                    >
                      ${this._formatPresetName(p)}
                    </button>
                  `)}
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Timer Dropdown -->
          ${timers.length > 0 ? html`
            <div class="gh-select-wrapper ${this._ghDropdown === 'timer' ? 'active' : ''}">
              <button
                class="gh-custom-select ${!isOn ? 'disabled' : ''}"
                title="${!isOn ? 'Turn on the fan to set timers' : 'Select Timer'}"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  if (!isOn) {
                    this._showToast('Turn on the fan to set timers');
                  } else {
                    this._haptic('selection');
                    this._ghDropdown = this._ghDropdown === 'timer' ? null : 'timer';
                  }
                }}
              >
                <span>Timer: ${activeTimer ? this._formatPresetName(activeTimer) : 'None'}</span>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
              </button>
              ${this._ghDropdown === 'timer' ? html`
                <div class="gh-dropdown-menu">
                  <button
                    class="gh-dropdown-item ${!activeTimer ? 'active' : ''}"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._ghDropdown = null;
                      this._setSpeed(percentage || speedSteps[0].pct);
                    }}
                  >
                    None (Off)
                  </button>
                  ${timers.map((t) => html`
                    <button
                      class="gh-dropdown-item ${presetMode === t ? 'active' : ''}"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        this._ghDropdown = null;
                        this._setPreset(t);
                      }}
                    >
                      ${this._formatPresetName(t)}
                    </button>
                  `)}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>

        <!-- Auxiliary Action Chips (LED Light if present) -->
        ${modes.filter((m) => m.toLowerCase().includes('light') || m.toLowerCase().includes('led')).length > 0
          ? html`
              <div class="gh-extra-chips">
                ${modes
                  .filter((m) => m.toLowerCase().includes('light') || m.toLowerCase().includes('led'))
                  .map(
                    (chip) => html`
                      <button
                        class="gh-chip ${presetMode === chip ? 'active' : ''} ${!isOn ? 'disabled' : ''}"
                        title="${!isOn ? 'Turn on the fan to activate' : chip}"
                        @click=${(e: Event) => {
                          e.stopPropagation();
                          if (!isOn) {
                            this._showToast('Turn on the fan to activate');
                          } else {
                            this._setPreset(chip);
                          }
                        }}
                      >
                        <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                        <span>${this._formatPresetName(chip)}</span>
                      </button>
                    `
                  )}
              </div>
            `
          : ''}

        <!-- Footer Telemetry Status Row -->
        <div class="footer-telemetry-row">
          <div class="connection-status-pill">
            <div class="status-dot ${isBlasterOnline ? 'online' : ''}"></div>
            <span>IR Blaster</span>
          </div>
          ${lastControlledText
            ? html`
                <div class="connection-status-pill">
                  <ha-icon
                    icon="${this._sourceIcon(lastControlledText)}"
                    style="--mdc-icon-size: 14px;"
                  ></ha-icon>
                  <span>Last controlled by: ${lastControlledText}</span>
                </div>
              `
            : ''}
        </div>
      </ha-card>
    `;
  }

  private _renderCompact(
    stateObj: any,
    name: string,
    isOn: boolean,
    isOnline: boolean,
    percentage: number,
    presetMode: string,
    speedCount: number,
    cardStyle: string
  ): TemplateResult {
    const displayValue = isOn ? (presetMode ? this._formatPresetName(presetMode) : `${percentage}%`) : (isOnline ? 'Off' : 'Offline');
    const isGoogleHome = this._config.full_layout === 'google_home';
    return html`
      <ha-card
        style="${cardStyle}"
        class="compact-card ${isGoogleHome ? 'google-home' : 'classic'}"
        title="Click to expand Superfan controls"
        @click=${() => {
          this._haptic('selection');
          this._expanded = true;
        }}
      >
        <div class="compact-header">
          <button
            class="compact-icon-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : 'Toggle Power'}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (!isOnline) {
                this._showToast('Device is offline');
              } else {
                this._toggle();
              }
            }}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${name}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="compact-center">
          <div
            class="compact-value"
            style="${displayValue.length > 4 ? 'font-size: 1.8rem;' : ''}"
          >
            ${displayValue}
          </div>
        </div>

        <div class="compact-footer">
          <button
            class="compact-action-btn ${!isOn || !isOnline ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : (!isOn ? 'Turn on the fan to adjust speed' : (percentage <= 1 ? 'Turn fan off' : 'Decrease Speed'))}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (!isOnline) {
                this._showToast('Device is offline');
              } else if (!isOn) {
                this._showToast('Turn on the fan to adjust speed');
              } else {
                this._cycleSpeed(percentage, speedCount, -1);
              }
            }}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="compact-subtitle">Speed</div>
          <button
            class="compact-action-btn ${!isOn || !isOnline || (isOn && percentage >= 100) ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : (!isOn ? 'Turn on the fan to adjust speed' : (percentage >= 100 ? 'Maximum speed reached' : 'Increase Speed'))}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (!isOnline) {
                this._showToast('Device is offline');
              } else if (!isOn) {
                this._showToast('Turn on the fan to adjust speed');
              } else if (percentage >= 100) {
                this._showToast('Maximum speed reached');
              } else {
                this._cycleSpeed(percentage, speedCount, 1);
              }
            }}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </ha-card>
    `;
  }

  private _cycleSpeed(currentPct: number, speedCount: number, direction: number): void {
    this._haptic('light');
    if (speedCount === 3) {
      const speeds = [0, 33, 66, 100];
      let currentStep = speeds.findIndex((s) => Math.abs(s - currentPct) <= 2);
      if (currentStep === -1) currentStep = 0;
      let nextStep = currentStep + direction;
      if (nextStep > 3) nextStep = 3;
      if (nextStep < 0) nextStep = 0;
      this._setSpeed(speeds[nextStep]);
      return;
    } else if (speedCount === 5) {
      const speeds = [0, 20, 40, 60, 80, 100];
      let currentStep = speeds.findIndex((s) => Math.abs(s - currentPct) <= 2);
      if (currentStep === -1) currentStep = 0;
      let nextStep = currentStep + direction;
      if (nextStep > 5) nextStep = 5;
      if (nextStep < 0) nextStep = 0;
      this._setSpeed(speeds[nextStep]);
      return;
    } else if (speedCount === 6) {
      const speeds = [0, 17, 33, 50, 67, 83, 100];
      let currentStep = speeds.findIndex((s) => Math.abs(s - currentPct) <= 2);
      if (currentStep === -1) currentStep = 0;
      let nextStep = currentStep + direction;
      if (nextStep > 6) nextStep = 6;
      if (nextStep < 0) nextStep = 0;
      this._setSpeed(speeds[nextStep]);
      return;
    }

    const step = 100 / speedCount;
    let nextPct = currentPct + step * direction;
    if (nextPct > 100) nextPct = 100;
    if (nextPct < 0) nextPct = 0;
    this._setSpeed(Math.round(nextPct));
  }
}
