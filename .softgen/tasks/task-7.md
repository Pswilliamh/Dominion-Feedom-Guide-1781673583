---
title: Native TTS, Multi-Variation Phrases, Maps & YouTube
status: in_progress
priority: high
type: feature
tags: [tts, speech, phrases, maps, youtube, integration]
created_by: agent
created_at: 2026-06-17T04:48:00Z
position: 7
---

## Notes
Ensure Web Speech API (window.speechSynthesis) is fully functional for offline TTS. Expand card clicks to show 4 natural phrase variations based on relationship mode. Add Google Maps and YouTube integration views accessible from sidebar.

## Checklist
- [ ] Verify TTS uses window.speechSynthesis.speak() correctly
- [ ] Ensure TTS works offline with system default voice
- [ ] Add TTS functionality to all matrix card items
- [ ] Implement 4-variation phrase expansion on card click
- [ ] Generate variations with relationship modifiers (sir/ma'am, honey, please)
- [ ] Create Google Maps embedded view component
- [ ] Create YouTube integration view component
- [ ] Add Google Maps button to sidebar navigation
- [ ] Add YouTube button to sidebar navigation
- [ ] Wire sidebar buttons to switch central view
- [ ] Test TTS plays audio immediately offline
- [ ] Ensure all variations appear in chat feed

## Acceptance
- Clicking SPEAK or any matrix item triggers native browser TTS
- Audio plays offline using system voice
- Clicking a card item shows 4 phrase variations
- Google Maps view opens from sidebar
- YouTube integration view opens from sidebar