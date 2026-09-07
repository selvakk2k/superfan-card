# Superfan Custom Lovelace Card (`superfan-card`)

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
[![Stable](https://img.shields.io/github/v/release/selvakk2k/superfan-card?label=Stable&style=flat-square)](https://github.com/selvakk2k/superfan-card/releases/latest)
[![Beta](https://img.shields.io/github/v/release/selvakk2k/superfan-card?include_prereleases&label=Beta&color=orange&style=flat-square)](https://github.com/selvakk2k/superfan-card/releases)
[![AI-Assisted](https://img.shields.io/badge/AI%20Assisted-Antigravity%20%7C%20Claude-blueviolet?style=flat-square&logo=google)](https://github.com/selvakk2k)
[![AI Attribution](https://img.shields.io/badge/AI%20Attribution-AIA%20PAI%20Nc%20Hin-orange?style=flat-square)](https://aiattribution.github.io/interpret-attribution)

A custom Lovelace card for the [Superfan IR integration](https://github.com/selvakk2k/superfan_ir).

## Features

- **Auto-detects fan speed count** — shows a 5-button selector for the T10 and a 3-button (High / Medium / Low) selector for the T12/T6
- **Preset buttons** — dynamically lists all preset modes exposed by the integration (Breeze Mode, Speed Adjust, Timer modes, etc.)
- **Side-by-side layout** — vertical speed selector on the left, presets on the right
- **Visual config editor** — entity picker, custom name, and accent colour — no YAML required
- **Accent colour** — override your HA theme's primary colour per card
- **Follows HA theme** — works in both light and dark mode

## Screenshots

| T10 (5-speed) | T12 (3-speed) |
|---|---|
| <img src="images/card_t10.png" width="300" alt="T10 Card"/> | <img src="images/card_t12.png" width="300" alt="T12 Card"/> |
| <img src="images/remote_t10.png" width="150" alt="T10 Remote"/> | <img src="images/remote_t12_6.png" width="150" alt="T12 Remote"/> |

## Installation

### HACS (recommended)

1. Open HACS → Frontend → ⋮ → Custom repositories
2. Add `https://github.com/selvakk2k/superfan-card` with category **Dashboard**
3. Install **Superfan Card**

### Manual

1. Download `superfan-card.js` from the [latest release](https://github.com/selvakk2k/superfan-card/releases/latest)
2. Copy it to `config/www/superfan-card.js`
3. In Home Assistant: **Settings → Dashboards → Resources** → Add `/local/superfan-card.js` as a **JavaScript Module**

## Usage

Add via the visual editor (search for **Superfan Card**), or paste manually.

> [!TIP]
> Under the **Layout** tab in the card editor, it is recommended to set:
> - **Width (Columns)**: **9** for the T10 remote.
> - **Width (Columns)**: **12** for the T12/6 remote.
>
> This ensures that the buttons and panels scale to their optimal, intended proportions.

Add via the card picker or paste manually:

```yaml
type: custom:superfan-card
entity: fan.superfan
name: Superfan T10        # optional
accent_color: "#03a9f4"   # optional, overrides theme accent
```

## Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | The `fan.*` entity from the Superfan IR integration |
| `name` | string | Friendly name | Override the card title |
| `accent_color` | string | Theme primary | Hex colour for active state highlight |

## Requirements

- Home Assistant 2024.x or later
- [Superfan IR integration](https://github.com/selvakk2k/superfan_ir) installed and configured

## Credits & License

### Project Contributors & AI Attribution
* **Lead Architecture & Hardware Validation**: [@selvakk2k](https://github.com/selvakk2k) — physical testing on Superfan remotes, Lovelace UX requirements, and theme design.
* **Code Implementation & Engineering**: **Antigravity** (Google DeepMind) — custom Lovelace card implementation, dynamic remote scaling, responsive speed selectors, and HACS packaging.
* **Pre-Release Code Review & Auditing**: **Claude** (Anthropic) — independent code review, CSS architecture audits, and edge-case verification.

Licensed under the **MIT License**. See the `LICENSE` file for the full license text.
