---
title: Sovereign Header and Scrollable Sidebar
status: done
priority: high
type: feature
tags: [header, navigation, layout, scrollable]
created_by: agent
created_at: 2026-06-17T03:54:00Z
position: 3
---

## Notes
Add full-width top header with Sovereign Embassy branding and upgrade the navigation sidebar to be vertically scrollable. Header should display logo, main title "Dominion Freedom Guide", and subtitle "Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance".

## Checklist
- [x] Create SovereignHeader component with logo and branding
- [x] Add shield logo icon to header
- [x] Display main title in bold authoritative font
- [x] Add subtitle with ministry information
- [x] Make NavigationDock scrollable (overflow-y: auto)
- [x] Style scrollbar subtly or hide it
- [x] Verify all menu items appear in sidebar (8 items total)
- [x] Update index.tsx layout to include header
- [x] Test scrolling behavior on 16:9 tablet layout
- [x] Ensure header stays fixed at top while sidebar scrolls

## Acceptance
- Top header displays logo, title, and subtitle across full width
- Sidebar scrolls vertically when content exceeds viewport height
- All 8 menu items are visible and accessible
- Layout maintains 16:9 tablet optimization