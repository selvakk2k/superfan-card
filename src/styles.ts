import { css } from 'lit';

export const styles = css`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant)
     ────────────────────────────────────────────────────────── */
  :host {
    display: block;
    --sf-accent:            var(--primary-color, #7c4dff);

    /* Surfaces - color-mix ensures deep contrast in both light & dark themes */
    --sf-bg:                var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --sf-surface:           color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff)));
    --sf-surface-hover:     color-mix(in srgb, var(--primary-text-color, #000) 18%, var(--sf-surface));
    --sf-border:            color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);

    /* Text */
    --sf-text:              var(--primary-text-color, #111111);
    --sf-text-2:            color-mix(in srgb, var(--primary-text-color, #000) 80%, transparent);
    --sf-on-accent:         var(--text-primary-color, var(--sf-bg));

    /* Active state */
    --sf-active-bg:         color-mix(in srgb, var(--sf-accent) 22%, var(--sf-surface));
    --sf-active-border:     color-mix(in srgb, var(--sf-accent) 75%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --sf-accent:            var(--md-sys-color-primary, var(--primary-color, #7c4dff));

    --sf-bg:                var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background)))));
    --sf-surface:           var(--md-sys-color-surface, color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff))));
    --sf-surface-hover:     color-mix(in srgb, var(--md-sys-color-on-surface, var(--sf-text)) 18%, var(--sf-surface));
    --sf-border:            var(--md-sys-color-outline-variant, var(--md-sys-color-outline, color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent)));

    /* Text */
    --sf-text:              var(--md-sys-color-on-surface, var(--primary-text-color, #111111));
    --sf-text-2:            var(--md-sys-color-on-surface-variant, color-mix(in srgb, var(--primary-text-color, #000) 80%, transparent));
    --sf-on-accent:         var(--md-sys-color-on-primary, var(--text-primary-color, var(--sf-bg)));

    /* Active state */
    --sf-active-bg:         var(--md-sys-color-secondary-container, color-mix(in srgb, var(--sf-accent) 22%, var(--sf-surface)));
    --sf-active-border:     var(--md-sys-color-secondary, color-mix(in srgb, var(--sf-accent) 75%, transparent));
  }

  ha-card {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border: 1px solid var(--sf-border);
    border-radius: var(--ha-card-border-radius, 18px);
    padding: 20px 18px 18px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    font-family: var(--paper-font-body1_-_font-family, inherit);
    color: var(--sf-text);
    overflow: hidden;
  }

  /* ── Card Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }
  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-icon {
    --mdc-icon-size: 22px;
    color: var(--sf-accent);
  }
  .title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .subtitle {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--sf-text-2);
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .collapse-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text-2);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .collapse-btn:hover { background: var(--sf-surface-hover); color: var(--sf-text); }

  .power-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .power-btn:hover { background: var(--sf-surface-hover); }
  .power-btn.disabled { opacity: 0.5; pointer-events: none; }
  .power-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    border-color: var(--sf-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sf-accent) 40%, transparent);
  }

  /* ── Body Layout ── */
  .body-container {
    display: flex;
    gap: 16px;
    align-items: stretch;
  }

  /* ── Left Column: Speed Selector ── */
  .vertical-selector {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 76px;
    flex-shrink: 0;
    align-self: flex-start;
    background: rgba(128, 128, 128, 0.08);
    border: 1px solid var(--sf-border);
    border-radius: 16px;
    padding: 4px;
    box-sizing: border-box;
  }

  .speed-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 10px 4px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: var(--sf-text-2);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .speed-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.12);
    color: var(--sf-text);
  }
  .speed-btn.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .speed-btn ha-icon {
    --mdc-icon-size: 18px;
  }
  .speed-btn.active {
    background: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 55%, transparent), 0 2px 8px color-mix(in srgb, var(--sf-accent) 35%, transparent);
  }

  /* ── Right Column: Presets ── */
  .presets-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .section-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--sf-text-2);
  }

  .pill-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .pill-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 8px;
    border-radius: 12px;
    border: 1px solid var(--sf-border);
    background: var(--sf-surface);
    color: var(--sf-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pill-btn:hover { background: var(--sf-surface-hover); }
  .pill-btn.disabled { opacity: 0.5; pointer-events: none; }
  .pill-btn ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }

  .pill-btn.active {
    background: var(--sf-accent);
    border-color: var(--sf-accent);
    color: var(--sf-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 55%, transparent), 0 2px 8px color-mix(in srgb, var(--sf-accent) 35%, transparent);
  }

  /* ── Telemetry & Connection Footer ── */
  .footer-telemetry-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--sf-border);
    font-size: 0.76rem;
    color: var(--sf-text-2);
  }
  .connection-status-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.76rem;
    color: var(--sf-text-2);
  }
  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e74c3c;
    flex-shrink: 0;
  }
  .status-dot.online {
    background: #2ecc71;
    box-shadow: 0 0 6px rgba(46, 204, 113, 0.5);
  }

  /* ──────────────────────────────────────────────────────────
     Google Home / Material Design 3 Full Layout
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border-radius: 28px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .gh-icon {
    --mdc-icon-size: 22px;
    color: var(--sf-text-2);
  }
  .gh-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--sf-text);
  }
  .gh-power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: transparent; border: none; color: var(--sf-text-2);
    cursor: pointer; transition: 0.2s ease; outline: none;
  }
  .gh-power-btn:hover { background: rgba(128, 128, 128, 0.15); }
  .gh-power-btn.disabled { opacity: 0.4; cursor: not-allowed; }
  .gh-power-btn.on {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
  }

  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 6px 0;
  }
  .gh-value-large {
    font-size: 5rem;
    font-weight: 400;
    color: var(--sf-text);
    line-height: 1.1;
  }
  .gh-subtitle-large {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--sf-text-2);
    margin-top: 4px;
  }

  /* ── Google Home Stepper Action Row ── */
  .gh-action-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 6px 0 12px 0;
  }
  .gh-circular-btn {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--sf-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease;
    --mdc-icon-size: 32px;
    outline: none;
  }
  .gh-circular-btn:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-circular-btn:disabled, .gh-circular-btn.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* ── Custom Dropdown Selectors ── */
  .gh-select-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .gh-select-wrapper {
    flex: 1 1 calc(33.3% - 8px);
    min-width: 100px;
    position: relative;
  }
  .gh-select-wrapper.active {
    z-index: 100;
  }
  .gh-custom-select {
    width: 100%;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 20px;
    border: none;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    color: var(--sf-text);
    font-size: 0.88rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: background 0.2s ease;
  }
  .gh-custom-select:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.22);
  }
  .gh-custom-select:disabled, .gh-custom-select.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .gh-custom-select span, .gh-custom-select ha-icon {
    pointer-events: none;
  }
  .gh-custom-select ha-icon {
    color: var(--sf-text-2);
    --mdc-icon-size: 18px;
  }
  .gh-dropdown-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    width: 100%;
    background: var(--sf-surface);
    border: 1px solid var(--sf-border);
    border-radius: 16px;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
  }
  .gh-dropdown-item {
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    font-family: inherit;
    padding: 10px 14px;
    font-size: 0.88rem;
    color: var(--sf-text);
    transition: 0.15s ease;
    cursor: pointer;
    outline: none;
  }
  .gh-dropdown-item:hover {
    background: rgba(128, 128, 128, 0.12);
  }
  .gh-dropdown-item.active {
    color: var(--sf-accent);
    background: var(--sf-active-bg);
    font-weight: 600;
  }

  /* ── Extra Action Chips ── */
  .gh-extra-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding-top: 4px;
  }
  .gh-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 16px;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--sf-text);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s ease;
    --mdc-icon-size: 16px;
    outline: none;
  }
  .gh-chip:hover:not(:disabled), .gh-pill:hover {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-chip.active {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
    font-weight: 600;
  }
  .gh-chip:disabled, .gh-chip.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ── Compact Views: Classic vs Google Home ── */
  .compact-card {
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Classic Compact */
  .compact-card.classic {
    border-radius: 16px;
    border: 1px solid var(--sf-border);
    background: rgba(128, 128, 128, 0.08);
    padding: 16px;
  }
  .compact-card.classic .compact-icon-btn {
    width: 38px; height: 38px; border-radius: 10px;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease; flex-shrink: 0;
  }
  .compact-card.classic .compact-icon-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sf-accent) 40%, transparent);
  }
  .compact-card.classic .compact-action-btn {
    width: 38px; height: 38px; border-radius: 10px;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-card.classic .compact-value {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--sf-text);
  }

  /* Google Home Compact */
  .compact-card.google-home {
    background: var(--sf-bg, var(--ha-card-background, var(--card-background-color, #1e1e24)));
    border-radius: 28px;
    border: 1px solid var(--sf-border);
    padding: 16px;
  }
  .compact-card.google-home .compact-icon-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: rgba(128, 128, 128, 0.15); color: var(--sf-text-2);
    transition: all 0.2s ease; flex-shrink: 0;
  }
  .compact-card.google-home .compact-icon-btn.on {
    background: var(--sf-active-bg);
    color: var(--sf-accent);
  }
  .compact-card.google-home .compact-action-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: rgba(128, 128, 128, 0.15); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-card.google-home .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--sf-text);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-chevron {
    color: var(--sf-text-2);
  }
  .compact-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-icon-btn:hover { background: var(--sf-surface-hover); }
  .compact-icon-btn.disabled { opacity: 0.4; pointer-events: none; }
  .compact-action-btn:hover { background: var(--sf-surface-hover); }
  .compact-action-btn:disabled, .compact-action-btn.disabled { opacity: 0.3; pointer-events: none; }
  .compact-subtitle {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--sf-text-2);
  }
`;
