# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-03-29

### Added

- **SKILL.md Open Standard Compliance**: Restructured frontmatter with `license`, `metadata` (version, author, tags), and agent-trigger-optimized `description`
- **Knowledge Engine Expansion (x4 modules)**:
  - `knowledge/industry_verticals.md` — SaaS B2B, F&B/Retail, FinTech, EdTech, Consumer App, Security persona behaviors
  - `knowledge/anti_patterns.md` — 6 common PM anti-patterns with detection + counter-responses
  - `knowledge/conversation_tactics.md` — 5 advanced conversation techniques (Awkward Silence, Redirect to Status Quo, Specificity Anchor, Commitment Probe, Emotional Anchoring)
- **Expanded Core Rules**: Added Escalation Logic, Commitment Test, Status Quo Anchor, Truth Filter Summarize rules to `mom_test_rules.md`
- **References Directory** (replaces `resources/`):
  - `references/response_format.md` — Structured output templates for all 3 commands
  - Enhanced `references/5p_framework_template.md` with inference guidance and worked example
- **New Examples**:
  - `examples/saas_b2b_demo.md` — SaaS B2B CFO persona demo
  - `examples/multi_persona_demo.md` — Same pitch, 2 different personas comparison
- **Test Suite Expansion (x8)**: From 1 test to 8 tests covering No Compliment, Status Quo Anchor, Past Tense Focus, Commitment Test, Brevity, Anti-Feature-Dump, SaaS Consistency, Language Switch
- **Compatibility Section**: Documented support for Claude Code, Cursor, Codex, and any SKILL.md-compatible agent
- **Architecture Diagram**: Added mermaid diagram showing skill architecture in README
- Constraints section (MUST/MUST NOT) in SKILL.md for reliable agent behavior

### Changed

- Renamed `resources/` directory to `references/` to follow SKILL.md Open Standard
- Restructured SKILL.md body: Core Identity → Prerequisites → Command Workflow → Decision Logic → Constraints → References
- Moved version history from SKILL.md to CHANGELOG.md (body stays under 5,000 tokens)
- Enhanced `examples/full_journey_demo.md` with WHY analysis and structured output
- User Guides now include Industry Presets, Anti-Pattern Detection, and Multi-Persona sections

### Removed

- `resources/` directory (replaced by `references/`)

## [1.3.0] - 2026-03-27

### Added

- `LICENSE` (MIT) file for legal compliance
- `CHANGELOG.md` for tracking version history
- `CONTRIBUTING.md` for community contribution guidelines

### Fixed

- Synced version strings across all 6 documentation files (was v1.1.0 in README/Guide)
- Corrected content error in `examples/full_journey_demo.md` Step 1 output

## [1.2.0] - 2026-03-27

### Added

- Full journey demo use case (`examples/full_journey_demo.md`)
- "Good vs Bad" Mom Test question contrast table in `SKILL.md`

### Fixed

- Resolved 20+ markdown lint errors across all documentation files

## [1.1.0] - 2026-03-27

### Added

- Modular Knowledge Engine with XML-tag support (`<rule>`, `<template>`, `<example>`)
- Command System: `/build-persona`, `/momtest`, `/summarize`, `/safeai lang`
- `<thinking>` tag enforcement for persona logic
- Mermaid workflow diagram
- `package.json` with `lint` and `test` scripts
- `.markdownlint.json` for documentation quality
- `promptfoo` test configuration
- README and User Guide in English and Vietnamese

## [1.0.0] - 2026-03-26

### Added

- Initial release with basic Mom Test simulation
- 5P Persona Framework template
- Core persona behavior rules
