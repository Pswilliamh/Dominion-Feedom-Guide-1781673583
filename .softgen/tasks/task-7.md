---
title: Native TTS, Multi-Variation Phrases, Maps & YouTube
status: done
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
- [x] Verify TTS uses window.speechSynthesis.speak() correctly
- [x] Ensure TTS works offline with system default voice
- [x] Add TTS functionality to all matrix card items
- [x] Implement 4-variation phrase expansion on card click
- [x] Generate variations with relationship modifiers (sir/ma'am, honey, please)
- [x] Create Google Maps embedded view component
- [x] Create YouTube integration view component
- [x] Add Google Maps button to sidebar navigation
- [x] Add YouTube button to sidebar navigation
- [x] Wire sidebar buttons to switch central view
- [x] Test TTS plays audio immediately offline
- [x] Ensure all variations appear in chat feed

## Acceptance
- Clicking SPEAK or any matrix item triggers native browser TTS
- Audio plays offline using system voice
- Clicking a card item shows 4 phrase variations
- Google Maps view opens from sidebar
- YouTube integration view opens from sidebar