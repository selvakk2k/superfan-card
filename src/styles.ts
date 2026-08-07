import { css } from 'lit';

export const styles = css`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant)
     ────────────────────────────────────────────────────────── */
  :host {
    --miraie-accent:        var(--primary-color, #03a9f4);

    /* Surfaces */
    --m-bg:                 var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --m-surface:            var(--secondary-background-color, rgba(128,128,128,0.08));
    --m-surface-hover:      color-mix(in srgb, var(--m-text) 8%, var(--m-surface));
    --m-border:             var(--divider-color, rgba(128,128,128,0.14));

    /* Text */
    --m-text:               var(--primary-text-color);
    --m-text-2:             var(--secondary-text-color);
    --m-on-accent:          var(--text-primary-color, #fff);

    /* Active state */
    --m-active-bg:          color-mix(in srgb, var(--miraie-accent) 15%, transparent);
    --m-active-border:      color-mix(in srgb, var(--miraie-accent) 50%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --miraie-accent:        var(--md-sys-color-primary, var(--primary-color, #03a9f4));

    /* Surfaces - using surface-variant or surface-container for better contrast against background */
    --m-bg:                 var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background)))));
    --m-surface:            var(--md-sys-color-surface, var(--secondary-background-color, rgba(128,128,128,0.08)));
    --m-surface-hover:      color-mix(in srgb, var(--md-sys-color-on-surface, var(--m-text)) 8%, var(--m-surface));
    --m-border:             var(--md-sys-color-outline-variant, var(--md-sys-color-outline, var(--divider-color, rgba(128,128,128,0.14))));

    /* Text */
    --m-text:               var(--md-sys-color-on-surface, var(--primary-text-color));
    --m-text-2:             var(--md-sys-color-on-surface-variant, var(--secondary-text-color));
    --m-on-accent:          var(--md-sys-color-on-primary, var(--text-primary-color, #fff));

    /* Active state */
    --m-active-bg:          var(--md-sys-color-secondary-container, color-mix(in srgb, var(--miraie-accent) 15%, transparent));
    --m-active-border:      var(--md-sys-color-secondary, color-mix(in srgb, var(--miraie-accent) 50%, transparent));
  }

  ha-card {
    background: var(--m-bg);
    border-radius: 18px;
    padding: 20px 18px 18px;
    color: var(--m-text);
    font-family: inherit;
    overflow: hidden;
  }

  /* ── Header ── */
  .header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 24px;
  }
  .header-left { display: flex; flex-direction: column; gap: 3px; }
  .title-row   { display: flex; align-items: center; gap: 7px; }

  .status-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--m-text-2); flex-shrink: 0;
  }
  .status-dot.online { background: var(--success-color, #2ecc71); }

  .title   { font-size: 1.05rem; font-weight: 700; }
  .subtitle { font-size: 0.75rem; color: var(--m-text-2); }

  .power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--m-surface); color: var(--m-text);
    transition: all 0.2s ease;
  }
  .power-btn:hover { background: var(--m-surface-hover); }
  .power-btn.on { background: var(--miraie-accent); color: var(--m-on-accent); }

  /* ── Body Layout (Side by Side) ── */
  .body-container {
    display: flex;
    gap: 24px;
    align-items: stretch;
  }

  /* Left: Vertical Selector */
  .vertical-selector {
    display: flex;
    flex-direction: column;
    background: var(--m-surface);
    border-radius: 28px;
    padding: 6px;
    width: 72px;
    flex-shrink: 0;
    align-self: center;
  }

  .speed-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background: transparent;
    color: var(--m-text-2);
  }

  .speed-btn ha-icon {
    --mdc-icon-size: 24px;
    margin-bottom: 2px;
  }
  
  .speed-btn span {
    font-size: 0.75rem;
    font-weight: 600;
  }

  .speed-btn:hover {
    background: var(--m-surface-hover);
  }

  .speed-btn.active {
    background: var(--miraie-accent);
    color: var(--m-on-accent);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--miraie-accent) 40%, transparent);
  }

  /* Right: Presets */
  .presets-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-label {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
    color: var(--m-text-2); text-transform: uppercase;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }

  .pill-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    border: 1px solid var(--m-border); border-radius: 20px;
    padding: 10px 16px; background: transparent; color: var(--m-text-2);
    font-size: 0.85rem; font-weight: 500; cursor: pointer;
    transition: all 0.2s; white-space: nowrap; flex: 1 1 calc(50% - 10px);
  }
  .pill-btn:hover { background: var(--m-surface); }
  .pill-btn.active {
    background: var(--m-active-bg);
    border-color: var(--m-active-border);
    color: var(--miraie-accent);
  }
  .pill-btn ha-icon { --mdc-icon-size: 18px; }

  /* ──────────────────────────────────────────────────────────
     Compact View (Google Home Style)
     ────────────────────────────────────────────────────────── */
  .compact-card {
    cursor: pointer;
    transition: background 0.2s;
    background: var(--m-bg);
    border-radius: 28px;
    padding: 4px;
    box-sizing: border-box;
  }
  .compact-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 12px 0 12px;
  }
  .compact-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--m-border);
    color: var(--m-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .compact-icon-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .compact-icon-btn.on {
    background: var(--m-active-bg);
    border-color: var(--m-active-border);
    color: var(--miraie-accent);
  }
  .compact-title {
    font-weight: 500;
    font-size: 1rem;
    flex: 1;
    margin-left: 4px;
    color: var(--m-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-chevron {
    color: var(--m-text-2);
    opacity: 0.5;
  }
  .compact-center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
  .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--m-text);
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 12px 12px;
  }
  .compact-action-btn {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid var(--m-border);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--m-text);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .compact-action-btn:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }
  .compact-action-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .compact-subtitle {
    color: var(--m-text-2);
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* ──────────────────────────────────────────────────────────
     Google Home Full View
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--m-bg);
    border-radius: 28px;
    padding: 16px;
    box-sizing: border-box;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gh-icon {
    color: var(--m-text-2);
    --mdc-icon-size: 20px;
  }
  .gh-title {
    font-weight: 500;
    font-size: 1.05rem;
    color: var(--m-text);
  }
  .gh-power-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--m-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
  }
  .gh-power-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-power-btn.on {
    background: var(--m-active-bg);
    color: var(--miraie-accent);
  }
  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0 40px 0;
  }
  .gh-value-large {
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.1;
    color: var(--m-text);
  }
  .gh-subtitle-large {
    font-size: 1rem;
    font-weight: 500;
    color: var(--m-text-2);
    margin-top: 8px;
  }
  .gh-slider-container {
    padding: 0 16px 32px 16px;
  }
  .gh-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 64px;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 32px;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    margin: 0;
  }
  .gh-slider::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 100%;
    background: transparent;
  }
  .gh-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1px;
    height: 64px;
    background: transparent;
    border: none;
    box-shadow: -2000px 0 0 2000px var(--m-active-bg);
  }
  .gh-slider::-moz-range-track {
    height: 100%;
    background: transparent;
  }
  .gh-slider::-moz-range-thumb {
    appearance: none;
    width: 1px;
    height: 64px;
    background: transparent;
    border: none;
    box-shadow: -2000px 0 0 2000px var(--m-active-bg);
  }
  .gh-slider:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .gh-pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .gh-pill {
    flex: 1 1 calc(50% - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--m-text);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
  }
  .gh-pill:hover {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-pill.active {
    background: var(--m-active-bg);
    color: var(--miraie-accent);
  }
`;
