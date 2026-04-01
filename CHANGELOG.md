# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 2026-04-01

### Added

- **4 New Industry Verticals** (`knowledge/industry_verticals.md`): Healthcare, Real Estate, Logistics/Supply Chain, AgTech — each with 8-point mindset/tools/behavior/objection profiles.
- **3 New Regional Contexts** (`knowledge/regional_context.md`): Japan/Korea (*nemawashi*, consensus, KakaoTalk), LATAM (Brazil/Mexico/Colombia/Argentina — WhatsApp-first, PIX/OXXO, LGPD), Africa/Middle East (M-Pesa, Gulf vs. Sub-Saharan split, Vision 2030, offline-first).
- **`@interview-plan` command** (`SKILL.md`, `references/response_format.md`, agent): Generates 5 Mom Test–compliant interview questions for the active persona, complete with a questions-to-avoid list, commitment ask options, and pre-interview reminders.
- **`@learning-log` command** (`SKILL.md`, `references/response_format.md`, agent): Post-interview insight organizer. Structures learnings by theme (not by person), tracks validated/killed assumptions, idea signals, commitment signals, open questions, and next action decision.
- **GitHub Actions CI/CD** (`.github/workflows/ci.yml`): Automated pipeline on push/PR to `main`. Runs markdown lint first, then prompt evaluation tests. Uploads test artifacts.
- **8 New Gold-Standard Test Cases** (`tests/promptfooconfig.yaml`): Tests 13-20 — covering Healthcare vertical, Logistics SLA fear, AgTech offline requirement, Japan/Korea consensus, LATAM WhatsApp dependency, Bad Data Ideas redirect, @interview-plan format validation, @learning-log theme organization. **Total: 20 test cases.**

### Changed

- **`SKILL.md` (root)**: Command table now has 9 commands. Mermaid diagram updated with `@interview-plan` and `@learning-log` flows. 10 industry verticals, 7 regional contexts now available.
- **`.agents/skills/personatwin/SKILL.md`**: Synced all Phase 3 additions. Version bumped to 3.0.0. `@momtest` embedded output format upgraded with Bad Data + Advancement Signal rows.
- **`USER_GUIDE.md`**: Updated test count to 20.
- **`tests/promptfooconfig.yaml`**: Description updated to reflect 20-case benchmark.

## [2.3.0] - 2026-04-01

### Added

- **`@coach` command** (`SKILL.md`, `references/response_format.md`, embedded in agent): New command that grades PM interview questions vs Mom Test rules. Outputs Pass/Fail/Risky per question, violation types, rewrites, and a Readiness verdict. Full demo in `examples/coach_dig_deeper_demo.md`.
- **`@dig-deeper` command** (`SKILL.md`, `references/response_format.md`, embedded in agent): New command to continue drilling into a pain signal discovered in `@momtest`. Uses Digging techniques and 5-Whys chain. Outputs Root Cause Summary table + PM implication + prototype test suggestion.
- **Early Adopter Classification** (`references/5p_framework_template.md`, embedded in agent): `@build-persona` now classifies each persona as 🟢 Early Adopter / 🟡 Mainstream / 🔴 Laggard based on three criteria (Has problem? / Knows it? / Actively seeking?)
- **Customer Slicing Gate** (`references/5p_framework_template.md`): `@build-persona` now pushes back when persona input is too broad, suggesting 3 specific slices.
- **Mom Test Attribution sections** (`README.md`, `README-vi.md`): Added "Intellectual Foundation" (EN) and "Nền Tảng Tri Thức" (VI) sections crediting Rob Fitzpatrick and The Mom Test with links to book, PDF, course, and author website.
- **New example file** (`examples/coach_dig_deeper_demo.md`): Full worked demo of `@coach` and `@dig-deeper` for an F&B PM use case.

### Changed

- **`USER_GUIDE.md`**: Added `@coach` and `@dig-deeper` to cheat sheet. Added Phase 2 commands section (section 7). Updated Important Notes to cover 3 types of bad data and advancement. Updated test count to 12. Version footer to 2.3.0.
- **`SKILL.md` (root)**: Updated command table with `@coach`, `@dig-deeper`. Updated Mermaid diagram with new flows. Updated Decision Logic step 3 to mention fluff/idea filtering.
- **`.agents/skills/personatwin/SKILL.md`**: Synced all Phase 2 additions. Version bumped to 2.3.0.

## [2.2.0] - 2026-04-01

### Added

- **Bad Data Taxonomy** (`knowledge/mom_test_rules.md`): Added `bad-data-taxonomy` rule covering all 3 types of worthless data from *The Mom Test*: Compliments (praise), Fluff (generic claims), and Ideas (feature suggestions). Each type has detection logic, persona counter-behavior, and example responses.
- **Commitment & Advancement Framework** (`knowledge/mom_test_rules.md`): Replaced the simple `commitment-test` rule with a full `commitment-and-advancement` rule block implementing Rob Fitzpatrick's core principle: *"No meeting went well unless it ended with Commitment or Advancement."* Added Reputation as the third commitment currency (alongside Time and Money). Added Advancement tracking and a Commitment Quadrant reference table.
- **Digging Tactic** (`knowledge/conversation_tactics.md`): Added `tactic-digging` rule — persona now anchors fluff by demanding specific past instances instead of accepting generic claims. Includes trigger phrase detection and 4 digging question templates.
- **Idea Unpacking Tactic** (`knowledge/conversation_tactics.md`): Added `tactic-idea-unpacking` rule — when a user suggests a feature, redirect to the root pain behind the suggestion instead of treating suggestions as specs.
- **4 New Test Cases** (`tests/promptfooconfig.yaml`): Tests 9-12 covering `@summarize` truth-filter verification, Fluff detection, Vietnam regional context activation, and Escalation logic. Total test suite now at **12 test cases**.

### Changed

- **`@summarize` output format** (`references/response_format.md`): Added `💡 Idea Signals (INVESTIGATE)` section. Split "Filtered Out" table into 3 typed rows (Compliment / Fluff / Hypothetical) for clarity. Added `reputation` to Commitment Level.
- **`@momtest` Analysis table** (`references/response_format.md`): Added `Bad Data Detected` row, upgraded `Commitment Signal` from binary to 4-type (Money/Time/Reputation/None), and added `Advancement Signal` row.
- **`USER_GUIDE.md`**: Fixed duplicate section numbering (Regional was erroneously labeled section 5; corrected to section 3, Customization remains section 5).

## [2.1.0] - 2026-03-30

### Added

- **Regional Context Rules**: Added `knowledge/regional_context.md` covering behavior for Vietnam, Southeast Asia, USA, and Europe markets, including local tools and compliance requirements.
- **`@final-summary` Command**: Added a new command to generate a structured end-of-session validation summary table, consolidating findings across multiple personas.
- **Embedded Agent Knowledge**: The IDE agent version of `SKILL.md` (in `.agents/skills/personatwin/`) is now fully self-contained with embedded rules to resolve pathing issues during agent loading.
- **Regional Workflow Guides**: Added advanced workflow instructions for country-specific market validation testing in English and Vietnamese User Guides.

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
