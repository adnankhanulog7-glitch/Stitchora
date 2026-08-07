---
name: Preview registration
description: Local preview behavior for cloned web artifacts in Replit
---

Cloned web projects may serve successfully from a manually configured workflow while still showing a blank editor preview. The Replit preview pane depends on the artifact being registered and its managed web workflow running.

**Why:** The preview router attaches to registered artifact metadata, not merely to any process listening on a supported port.

**How to apply:** Start or restart the exact managed workflow for the registered web artifact before diagnosing app rendering. Keep any temporary fallback workflow separate and stop it once registration is available.