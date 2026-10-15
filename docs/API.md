# Nas API

`Nas.init(root = document)` binds accessible tabs, dialogs, command search, notifications, and optional magnetic controls. It returns a cleanup function. Repeated initialization of a root reuses its existing binding.

| Method | Purpose |
|---|---|
| `Nas.configure(options)` | Apply personality, theme, density, and motion |
| `Nas.configuration()` | Read the effective preset options |
| `Nas.presetCSS(options)` | Export semantic CSS overrides |
| `Nas.download(name, content, type)` | Download an exported file |
| `Nas.toast(text, {duration})` | Show a dismissible status message |
| `Nas.openDialog(id, trigger)` | Open a native modal and restore trigger focus |
| `Nas.celebrate(element)` | Brief pixel confetti, respecting reduced motion |
| `Nas.orbi(canvas, options)` | Create a mascot managed by motion preferences |
| `Nas.motion.reveal(root)` | Bind entrance reveals |
| `Nas.motion.replay(element)` | Replay a reveal when motion is enabled |
| `Nas.motion.enabled()` | Check current motion eligibility |

Options: personality `orbit`, `studio`, `workshop`; theme `dark`, `light`, `system`; density `comfortable`, `compact`, `airy`; motion `quiet`, `expressive`, `off`.

Tabs use `data-n-tabs` and native ARIA tab roles. Dialog triggers use `data-n-open="id"`; close buttons use `data-n-close`. Commands use `data-n-command`, `data-n-filter`, `data-n-item`, and `data-n-empty`. Toast triggers use `data-n-toast`. Source examples are under `components`.

Semantic color roles include `--background`, `--text`, `--text-secondary`, `--raised`, `--action`, and `--on-action`. Layout uses `--space-*`, `--radius`, `--radius-card`, and `--page-max`. The catalog exports the active preset without changing the base kit.
