# Website UI/UX & Styling Review

Date: 2026-05-10
Scope: code-level review of templates, Sass, and interaction scripts.

## Executive summary

You have a clean, readable personal site with a clear voice and simple navigation. The structure is solid for a content-first blog. The main risks are accessibility and semantics (focus styles, invalid attributes, heading/list structure), plus a few consistency issues in components and interactions.

If you fix only a few things first, prioritize:
1. Restore visible keyboard focus states.
2. Replace invalid `alt` attributes on non-image elements with proper ARIA labels.
3. Fix heading/list semantics in archive/gallery/taxonomy lists.
4. Improve contrast for subtle link/text colors.
5. Add better feedback states for search and subscription/account flows.

---

## What is working well

- **Strong content-first layout**: narrow reading width and generous spacing support long-form reading.
- **Consistent visual language**: rounded corners, soft palette, simple typography.
- **Responsive basics in place**: breakpoints for layout, nav, and gallery.
- **Image handling strategy is good**: responsive image/thumbnails and resized outputs are in use.

---

## Findings (critical to low priority)

## 1) Accessibility: keyboard focus visibility is weakened (High)

### Evidence
- `input:focus, textarea:focus { outline: none; }` removes default focus ring.
- No strong, consistent custom `:focus-visible` replacement appears across links/buttons/controls.

### Impact
Keyboard users can lose track of focus position. This is a key usability and WCAG issue.

### Recommendation
- Remove global outline reset, or replace with robust visible focus styles.
- Add shared styles for `a:focus-visible`, `button:focus-visible`, `input:focus-visible`, `summary:focus-visible`.

---

## 2) Invalid HTML attributes used for accessibility intent (High)

### Evidence
- `alt` is used on links and details/summary controls in templates.

### Impact
`alt` is invalid for these elements and ignored by assistive tech. This can reduce discoverability for screen reader users.

### Recommendation
- Use `aria-label` for icon-only or ambiguous controls.
- Keep `alt` only on `<img>`.

---

## 3) Heading/list semantics are inconsistent in archive/gallery/taxonomy views (High)

### Evidence
- Headings are placed directly inside `<ul>` in several templates.

### Impact
Invalid/awkward document structure harms screen reader navigation and can create CSS/layout edge cases.

### Recommendation
- Place heading before list, or wrap heading in `<li>` where semantically appropriate.
- Keep list containers for list items only.

---

## 4) Color contrast likely too low for subtle links/text (Medium-High)

### Evidence
- `--subtle-links: #7ec4c9` and `--subtle-text: #777` on `--bg-color: #f8f5f3`.
- Footer/social actions rely on subtle colors.

### Impact
Reduced readability and weaker discoverability of actionable elements, especially on lower-quality displays.

### Recommendation
- Increase contrast of subtle text/link tokens.
- Validate with WCAG AA contrast checks for normal text and interactive controls.

---

## 5) Interaction feedback gaps (Medium)

### Evidence
- Search hides results when none found but shows no explicit “No results” message.
- Subscribe and account actions have minimal success/error feedback in UI.

### Impact
Users can be unsure whether actions succeeded or failed.

### Recommendation
- Add empty/error/success states in search and forms.
- Add inline validation and status messages (`aria-live` where appropriate).

---

## 6) Navigation and control affordance can improve (Medium)

### Evidence
- Search button is emoji-only.
- Overflow menu summary control is visually custom but could be clearer with explicit label.

### Impact
Ambiguity for assistive tech and some users; reduced clarity on first visit.

### Recommendation
- Add visible or screen-reader labels (`aria-label="Search"`, `aria-label="More menu"`).
- Ensure touch target size and focus style are consistent.

---

## 7) Footer layout responsiveness risk (Medium)

### Evidence
- Footer uses `display: flex; justify-content: space-between; align-items: center;` with no dedicated small-screen wrap rule in footer stylesheet.

### Impact
Can become cramped or misaligned on narrow widths (especially with social links + subscribe + copyright).

### Recommendation
- Add a mobile breakpoint to stack/footer-wrap and tune spacing.

---

## 8) Typography rhythm is mostly good, but heading scaling is aggressive on smaller screens (Low-Medium)

### Evidence
- Large heading scale remains prominent on mobile.
- `letter-spacing: 1px` on all headings under 700px can hurt readability for serif body/head fonts.

### Impact
Potentially crowded visual hierarchy and reduced readability on small devices.

### Recommendation
- Reduce mobile heading sizes slightly and remove/reduce forced letter-spacing.

---

## 9) Minor consistency issues in component styling (Low)

### Evidence
- Button styles are duplicated in account and subscribe Sass.
- Utility `ad-warning` uses strong red background with likely poor text contrast.

### Impact
Maintenance friction and inconsistent UI over time.

### Recommendation
- Create shared button component/token styles.
- Rework warning/alert token palette for contrast and consistency.

---

## 10) Analytics strategy overlap (Low)

### Evidence
- Both Plausible and Google tag snippets are present.

### Impact
Potential duplicate pageview tracking, extra script weight, and privacy/compliance complexity.

### Recommendation
- Confirm dual-tracking intent.
- If both are needed, document ownership and deduplication approach.

---

## Suggested 2-week improvement plan

### Week 1 (highest impact)
- Add robust focus-visible styles and remove generic outline suppression.
- Fix invalid `alt` usage; add `aria-label` where needed.
- Correct list/heading semantics in templates.
- Add no-results state for search.

### Week 2 (quality polish)
- Tune color tokens for contrast compliance.
- Make footer responsive stacking behavior explicit.
- Consolidate button styles into shared component rules.
- Add form/account status messaging and accessible live feedback.

---

## Quick QA checklist after updates

- Keyboard-only tab flow is always visible.
- Screen reader announces nav/search/menu controls clearly.
- HTML validation passes for list/heading structures.
- Contrast checks pass for body text, links, and footer controls.
- Search shows clear states: idle, results, no results, error.
- Mobile layout is stable at 320px and 375px widths.

---

## Final note

The site already has a strong base: clear content hierarchy, lightweight structure, and readable long-form layout. Addressing the accessibility/semantics issues will produce the biggest UX gain with relatively small engineering effort.