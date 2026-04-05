# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 2026-04-01

### Added

- **4 New Industry Verticals** (`knowledge/industry_verticals.md`): Healthcare, Real Estate, Logistics/Supply Chain, AgTech — each with 8-point mindset/tools/behavior/objection profiles.
- **3 New Regional Contexts** (`knowledge/regional_context.md`): Japan/Korea (*nemawashi*, consensus, KakaoTalk), LATAM (Brazil/Mexico/Colombia/Argentina — WhatsApp-first, PIX/OXXO, LGPD), Africa/Middle East (M-Pesa, Gulf vs. Sub-Saharan split, Vision 2030, offline-first).
- **`@interview-plan` command** (`SKILL.md`, `references/response_format.md`): Generates 5 Mom Test–compliant interview questions for the active persona, complete with a questions-to-avoid list, commitment ask options, and pre-interview reminders.
- **`@learning-log` command** (`SKILL.md`, `references/response_format.md`): Post-interview insight organizer. Structures learnings by theme (not by person), tracks validated/killed assumptions, idea signals, commitment signals, open questions, and next action decision.
- **GitHub Actions CI/CD** (`.github/workflows/ci.yml`): Automated pipeline on push/PR to `main`. Runs markdown lint first, then prompt evaluation tests. Uploads test artifacts.
- **8 New Test Cases** (`tests/promptfooconfig.yaml`): Tests 13-20 — covering Healthcare vertical, Logistics SLA fear, AgTech offline requirement, Japan/Korea consensus, LATAM WhatsApp dependency, Bad Data Ideas redirect, @interview-plan format validation, @learning-log theme organization. **Total: 20 test cases.**
- **`knowledge/regional_context.md`** added to agent subfolder with all 7 regional rule blocks.

### Changed

- Command table now has 9 commands. Mermaid diagram updated with `@interview-plan` and `@learning-log` flows.
- `references/response_format.md` expanded with sections 4 (`@interview-plan`), 5 (`@learning-log`), 6 (`@final-summary`).
- Version bumped to 3.0.0 across SKILL.md, package.json.

## [2.3.0] - 2026-04-01

### Added

- **`@coach` command** (`SKILL.md`, `references/response_format.md`, embedded): New command that grades PM interview questions vs Mom Test rules. Outputs Pass/Fail/Risky per question, violation types, rewrites, and a Readiness verdict. Full demo in `examples/coach_dig_deeper_demo.md`.
- **`@dig-deeper` command** (`SKILL.md`, embedded): New command to continue drilling into a pain signal discovered in `@momtest`. Uses Digging techniques and 5-Whys chain. Outputs Root Cause Summary table + PM implication + prototype test suggestion.
- **Early Adopter Classification** (embedded in agent): `@build-persona` now classifies each persona as 🟢 Early Adopter / 🟡 Mainstream / 🔴 Laggard based on three criteria (Has problem? / Knows it? / Actively seeking?).
- **Customer Slicing Gate** (`references/5p_framework_template.md`): `@build-persona` now pushes back when persona input is too broad, suggesting 3 specific slices.
- **New example file** (`examples/coach_dig_deeper_demo.md`): Full worked demo of `@coach` and `@dig-deeper` for an F&B PM use case.

### Changed

- Command table updated with `@coach`, `@dig-deeper`. Mermaid diagram updated with new flows.
- USER_GUIDE.md and USER_GUIDE-vi.md updated with @coach and @dig-deeper documentation.

## [2.2.0] - 2026-04-01

### Added

- **Bad Data Taxonomy** (`knowledge/mom_test_rules.md`): Added `bad-data-taxonomy` rule covering all 3 types of worthless data from *The Mom Test*: Compliments (praise), Fluff (generic claims), and Ideas (feature suggestions).
- **Commitment & Advancement Framework** (`knowledge/mom_test_rules.md`): Full `commitment-and-advancement` rule block — Rob Fitzpatrick's core principle, three commitment currencies (Time/Money/Reputation), Advancement tracking.
- **Digging Tactic** (`knowledge/conversation_tactics.md`): Persona now anchors fluff by demanding specific past instances instead of accepting generic claims.
- **Idea Unpacking Tactic** (`knowledge/conversation_tactics.md`): Redirect feature suggestions to root pain.
- **4 New Test Cases** (`tests/promptfooconfig.yaml`): Tests 9-12 covering `@summarize` truth-filter, Fluff detection, Vietnam regional context, and Escalation logic. **Total: 12 test cases.**

### Changed

- `@summarize` output format: Added Idea Signals section, typed Filtered Out rows (Compliment/Fluff/Hypothetical).
- `@momtest` Analysis table: Added Bad Data Detected, 4-type Commitment Signal, Advancement Signal rows.

## [2.1.0] - 2026-03-30

### Added

- **Regional Context Rules**: Added `knowledge/regional_context.md` covering behavior for Vietnam, Southeast Asia, USA, and Europe markets.
- **`@final-summary` Command**: Generate structured end-of-session validation summary table across multiple personas.
- **Embedded Agent Knowledge**: IDE agent version of `SKILL.md` is now fully self-contained with embedded rules to resolve pathing issues.
- **Regional Workflow Guides**: Advanced workflow instructions for country-specific market validation in User Guides (EN/VI).

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
- Command System: `@build-persona`, `@momtest`, `@summarize`, `@safeai lang`
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
