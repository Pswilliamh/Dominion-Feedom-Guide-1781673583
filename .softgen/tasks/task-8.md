---
title: Scenario Navigator and Zoom Integration
status: in_progress
priority: high
type: feature
tags: [scenarios, zoom, integration, tooltip, routing]
created_by: agent
created_at: 2026-06-17T05:10:00Z
position: 8
---

## Notes
Add scenario selector dropdown to header with 3 environment options. Implement Zoom integration mode that shows "Join Zoom Session" button and routes messages to simulated Zoom chat/captions. Add info tooltip explaining connection paths.

## Checklist
- [ ] Add scenario navigator dropdown to header (right side, after language selector)
- [ ] Populate with 3 options: Local Classroom, Special-Needs Class, Home Schooling
- [ ] Add distinct icons for each scenario (🏫 💬 🏡)
- [ ] Create state management for active scenario
- [ ] Show "Join Zoom Session" button when Home Schooling selected
- [ ] Route messages to Zoom chat/captions simulation in Home Schooling mode
- [ ] Add info icon next to scenario selector
- [ ] Create tooltip/modal explaining connection paths
- [ ] Document Local Peer-to-Peer, WhatsApp Web, and Zoom Integration modes
- [ ] Style all components for 16:9 tablet layout

## Acceptance
- Scenario dropdown displays 3 environment options with icons
- Selecting Home Schooling shows Zoom join button
- Messages route to Zoom simulation when in Home Schooling mode
- Info tooltip explains all three connection modes clearly