# Design rules

Rules every page and component of HighRound follows — site and Windows app alike.
See [CONTRIBUTING.md](CONTRIBUTING.md) for code, content and security rules.

## Usage

1. **Three contexts.** Phone, PC window on a second screen (1280×720 to 1920×1080) and large screen. Every page works in all three.
2. **Readable mid-game.** One action per step, starting with a verb. Body text at least 17 px. Images stay small in the flow and open large on click.
3. **Always know where you are.** Breadcrumb, current page highlighted, "Step 3 of 9".
4. **Any guide in 3 clicks** from the home page. Search is available on every page.

## Visual

5. **Restraint.** One accent color, two typefaces maximum, motion only in response to a user action.
6. **Consistency.** The same icon always means the same thing. Colors, sizes and spacing only come from the design tokens in `src/styles/global.css` — never hard-coded.
7. **Accessibility.** Text contrast of at least 4.5:1, everything usable with the keyboard, visible focus, touch targets of at least 44 px, `prefers-reduced-motion` respected.
8. **The Windows app behaves like an app.** It remembers its window size and position, has a sensible minimum size and offers keyboard shortcuts.

## Working method

9. **Mockup first.** A visual mockup is approved before any interface is built or reworked.
10. **Real content.** An interface is validated with real guides, not only the example template.
11. **Checked at three widths.** Every interface change is checked at 390 px, 1280 px and 1920 px before merging.

## Layout decisions

- **Navigation:** a top bar (logo, games menu, search, language) on every page. On map and guide pages only, a side bar listing that map's categories and guides.
- **Guide display:** the classic page (all steps, progress panel) to read and prepare, plus a **Play mode** that shows one step at a time, large, with keyboard controls. Both share the same progress.
- **Style:** follow the shared conventions of established guide sites (dark neutral surfaces, map imagery, icons, badges) rather than an experimental look.
- **Colors:** the default palette is **Blood red** (charcoal greys, red accent). **Aether** (night blue, violet accent) can be chosen in the settings panel; the choice is stored on the device only. Filled buttons use the darker `--accent-fill` so white text keeps 4.5:1 contrast.
