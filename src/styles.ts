import { css } from 'lit';

export const styles = css`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant)
     ────────────────────────────────────────────────────────── */
  :host {
    --sf-accent:            var(--primary-color, #03a9f4);

    /* Surfaces */
    --sf-bg:                var(--ha-card-background, var(--card-background-color, var(--lovelace-background)));
    --sf-surface:           var(--secondary-background-color, rgba(128,128,128,0.08));
    --sf-surface-hover:     color-mix(in srgb, var(--sf-text) 8%, var(--sf-surface));
    --sf-border:            var(--divider-color, rgba(128,128,128,0.14));

    /* Text */
    --sf-text:              var(--primary-text-color);
    --sf-text-2:            var(--secondary-text-color);
    --sf-on-accent:         var(--text-primary-color, #fff);

    /* Active state */
    --sf-active-bg:         color-mix(in srgb, var(--sf-accent) 15%, transparent);
    --sf-active-border:     color-mix(in srgb, var(--sf-accent) 50%, transparent);

    /* Backward compatibility aliases */
    --miraie-accent:        var(--sf-accent);
    --m-bg:                 var(--sf-bg);
    --m-surface:            var(--sf-surface);
    --m-surface-hover:      var(--sf-surface-hover);
    --m-border:             var(--sf-border);
    --m-text:               var(--sf-text);
    --m-text-2:             var(--sf-text-2);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --sf-accent:            var(--md-sys-color-primary, var(--primary-color, #03a9f4));
    --sf-bg:                var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, var(--lovelace-background)))));
    --sf-surface:           var(--md-sys-color-surface, var(--secondary-background-color, rgba(128,128,128,0.08)));
    --sf-surface-hover:     color-mix(in srgb, var(--md-sys-color-on-surface, var(--sf-text)) 8%, var(--sf-surface));
    --sf-border:            var(--md-sys-color-outline-variant, var(--md-sys-color-outline, var(--divider-color, rgba(128,128,128,0.14))));
    --sf-text:              var(--md-sys-color-on-surface, var(--primary-text-color));
    --sf-text-2:            var(--md-sys-color-on-surface-variant, var(--secondary-text-color));
    --sf-on-accent:         var(--md-sys-color-on-primary, var(--text-primary-color, #fff));
    --sf-active-bg:         var(--md-sys-color-secondary-container, color-mix(in srgb, var(--sf-accent) 15%, transparent));
    --sf-active-border:     var(--md-sys-color-secondary, color-mix(in srgb, var(--sf-accent) 50%, transparent));
  }

  ha-card {
    background: var(--sf-bg);
    border-radius: 18px;
    padding: 20px 18px 18px;
    color: var(--sf-text);
    font-family: inherit;
    overflow: hidden;
    box-sizing: border-box;
  }

  /* ── Header ── */
  .header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px;
  }
  .header-left { display: flex; flex-direction: column; gap: 4px; }
  .title-row   { display: flex; align-items: center; gap: 8px; }

  .status-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--sf-text-2); flex-shrink: 0;
  }
  .status-dot.online { background: var(--success-color, #2ecc71); }

  .title   { font-size: 1.1rem; font-weight: 700; color: var(--sf-text); line-height: 1.2; }
  .subtitle { font-size: 0.78rem; font-weight: 600; color: var(--sf-text-2); }

  .power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .power-btn:hover { background: var(--sf-surface-hover); }
  .power-btn.disabled { opacity: 0.5; pointer-events: none; }
  .power-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 45%, transparent);
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
    gap: 8px;
    width: 70px;
    flex-shrink: 0;
  }

  .speed-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 8px;
    border-radius: 12px;
    border: 1px solid var(--sf-border);
    background: var(--sf-surface);
    color: var(--sf-text);
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .speed-btn:hover { background: var(--sf-surface-hover); }
  .speed-btn.disabled { opacity: 0.5; pointer-events: none; }
  .speed-btn ha-icon { --mdc-icon-size: 16px; }

  .speed-btn.active {
    background: var(--sf-active-bg);
    border-color: var(--sf-active-border);
    color: var(--sf-accent);
    box-shadow: 0 0 10px color-mix(in srgb, var(--sf-accent) 25%, transparent);
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
    background: var(--sf-active-bg);
    border-color: var(--sf-active-border);
    color: var(--sf-accent);
    font-weight: 700;
  }

  /* ── Google Home Full Layout ── */
  .gh-full-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    color: var(--sf-accent);
  }
  .gh-title {
    font-size: 1.15rem;
    font-weight: 700;
  }
  .gh-power-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.25s ease;
  }
  .gh-power-btn:hover { background: var(--sf-surface-hover); }
  .gh-power-btn.disabled { opacity: 0.5; pointer-events: none; }
  .gh-power-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
    box-shadow: 0 0 16px color-mix(in srgb, var(--sf-accent) 45%, transparent);
  }

  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }
  .gh-value-large {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--sf-text);
    line-height: 1.1;
  }
  .gh-subtitle-large {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--sf-text-2);
    margin-top: 4px;
  }

  .gh-slider-container {
    padding: 0 8px;
  }
  .gh-slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    accent-color: var(--sf-accent);
    outline: none;
    cursor: pointer;
  }

  .gh-pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }
  .gh-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid var(--sf-border);
    background: var(--sf-surface);
    color: var(--sf-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .gh-pill:hover { background: var(--sf-surface-hover); }
  .gh-pill.disabled { opacity: 0.5; pointer-events: none; }
  .gh-pill.active {
    background: var(--sf-active-bg);
    border-color: var(--sf-active-border);
    color: var(--sf-accent);
    font-weight: 700;
  }

  /* ── Compact View ── */
  .compact-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
  }
  .compact-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .compact-icon-btn {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-icon-btn:hover { background: var(--sf-surface-hover); }
  .compact-icon-btn.disabled { opacity: 0.5; pointer-events: none; }
  .compact-icon-btn.on {
    background: var(--sf-accent);
    color: var(--sf-on-accent);
    border-color: var(--sf-accent);
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 700;
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
  .compact-value {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--sf-text);
  }

  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-action-btn {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--sf-border); cursor: pointer; display: flex; align-items: center; justify-content: center;
    background: var(--sf-surface); color: var(--sf-text);
    transition: all 0.2s ease;
  }
  .compact-action-btn:hover { background: var(--sf-surface-hover); }
  .compact-action-btn:disabled, .compact-action-btn.disabled { opacity: 0.4; pointer-events: none; }
  .compact-subtitle {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--sf-text-2);
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background: var(--sf-surface);
    color: var(--sf-text-2);
    border: 1px solid var(--sf-border);
    margin-top: 4px;
    transition: all 0.2s ease;
  }
  .status-pill .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--error-color, #e53935);
  }
  .status-pill.online .dot {
    background: var(--success-color, #4caf50);
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }
  .status-pill.offline {
    color: var(--error-color, #e53935);
  }
`;
