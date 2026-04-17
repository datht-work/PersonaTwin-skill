# PersonaTwin: The Mom Test Simulation Skill 🤖

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)

**Protect your Product Team from "polite lies" by simulating ruthless, real-world users.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/personatwin-skill)
[![Version](https://img.shields.io/badge/version-4.0.0-blue.svg)](SKILL.md)
[![Testing: promptfoo](https://img.shields.io/badge/testing-promptfoo-orange.svg)](tests/promptfooconfig.yaml)
[![Standard: SKILL.md](https://img.shields.io/badge/standard-SKILL.md-purple.svg)](SKILL.md)

---

## 🛑 Why Do 90% of New Features Fail?

Because customers lie to be polite. They say *"Great idea!"*, *"I would definitely use that!"*... to make you happy. The team spends 2 months coding, you launch the product, and... **nobody opens their wallet**.

That is the catastrophic cost of being misled by compliments.

**PersonaTwin** acts as a "Truth Filter". By strictly enforcing **The Mom Test** principles, this AI system will break apart your hypothetical ideas *before* the first line of code is ever written.

## 🥊 1-Minute Reality Check: Polite User vs. PersonaTwin

*Pitch: "I'm building a QR-code loyalty app for your cafe."*

| Real User (Trying to please the PM) | PersonaTwin (Ruthless Mom Test calibration) |
|---|---|
| *"Awesome, great idea! Customers ask about memberships sometimes. If the UI is nice, I’d definitely have my staff use it."* | *"Morning rushes are packed. Scanning a QR takes 5 extra seconds per order. Is this faster than me punching a calculator? If not, I'd rather just give them a 50-cent discount manually."* |
| ❌ Strokes your ego.<br>❌ Uses future tense: "would use".<br>❌ Feeds you **Bad Data**. | ✅ Exposes hidden switching costs.<br>✅ Grounds you in the **Status Quo**.<br>✅ Feeds you **Real Signals** to pivot. |

---

## 🎯 De-risk Development for the Entire Squad

PersonaTwin forces hard truths directly into your development workflow:

- **📈 Business & Strategy Leaders**: Validate market demand and willingness-to-pay *instantly*. Stop burning runway on "nice-to-have" features that don’t drive revenue.
- **🧠 Product Managers (PM) & POs**: Weaponize hard evidence to kill bad roadmap requests. Generate structured interview learning logs (`@learning-log`) in 5 seconds.
- **🎨 UI/UX Designers**: Test workflows against a "Non-tech-savvy" persona. Uncover fatal learning curves before committing to high-fidelity designs.
- **🌍 Cross-Border Market Validation**: Switch your persona's context to the USA (demanding SOC2 compliance) or Japan (requiring Nemawashi consensus) with a single attribute.

---

## 🏗️ Architecture

```mermaid
graph LR
    subgraph Skill Core
        A[SKILL.md] --> B[Command System]
    end
    subgraph Knowledge Engine
        C[mom_test_rules.md]
        D[industry_verticals.md]
        E[anti_patterns.md]
        F[regional_context.md]
        M[conversation_tactics.md]
    end
    subgraph References
        G[5p_framework_template.md]
        H[response_format.md]
    end
    B --> C & D & E & F & M
    B --> G & H
```

### Directory Structure

```
personatwin-skill/
├── SKILL.md                          # Core skill definition (Open Standard)
├── knowledge/                        # Modular Knowledge Engine
│   ├── mom_test_rules.md             # Core Mom Test rules + Truth Filter
│   ├── industry_verticals.md         # SaaS, F&B, FinTech, EdTech, Consumer, Security
│   ├── regional_context.md           # Localized behaviors (Vietnam, SEA, USA, EU)
│   ├── anti_patterns.md              # PM anti-pattern detection library
│   └── conversation_tactics.md       # Realistic conversation techniques
├── references/                       # Templates & format specifications
│   ├── 5p_framework_template.md      # 5P Persona building template
│   └── response_format.md            # Output format: Summaries, Dashboards, Cards
├── examples/                         # Gold-standard simulation demos
├── tests/                            # Automated QA (promptfoo suite)
├── README.md / README-vi.md          # Documentation (EN/VI)
├── USER_GUIDE.md / USER_GUIDE-vi.md  # Step-by-step User guides (EN/VI)
├── CHANGELOG.md                      # Version history
└── package.json                      # Project metadata
```

---

## 🛠️ Key Features

### 1. The Command System

Since PersonaTwin is an AI skill, you trigger commands right inside your AI environment:

| Command | Action for the Squad |
| --- | --- |
| `@build-persona [demographics]` | Generate high-fidelity 5P personas for your UX targeting |
| `@momtest [idea]` | Pit a feature idea against the ruthless persona to find the "No" |
| `@summarize [transcript]` | Extract the "ugly truth" from user interview recordings |
| `@final-summary` | Export a **Validation Dashboard** detailing strategic recommendations |

### 2. Multi-Market / Industry Personas

Test your designs against 6 industry verticals (SaaS B2B, F&B, FinTech, etc.) layered over deep regional contexts (Vietnam's Zalo-first SMEs vs. USA's compliance-heavy enterprises).

### 3. Anti-Pattern Detection for Teams

Protects the team by automatically flagging PM/Biz mistakes during pitches: Feature Dumping, Solution First, Future Tense Trap, Vanity Metrics, Competitor Comparison, and Premature Scaling.

---

## 🚀 Quick Start

### Installation (via CLI)

```bash
npx skills add datht-work/personatwin-skill
```

### Manual Setup for your IDE / Agent

1. Copy **[SKILL.md](SKILL.md)** content into your AI assistant. (*Note: The `.agents/skills/personatwin/SKILL.md` version is fully self-contained with all embedded rules for local agents.*)
2. Follow the commands in the [User Guide](USER_GUIDE.md).

---

## 🌐 Compatibility

PersonaTwin follows the **SKILL.md Open Standard** and is compatible with:

- **Claude Code** (Anthropic)
- **Cursor** (AI Code Editor)
- **Windsurf** / **Copilot**
- **ChatGPT / Claude Web UIs**

---

## 📋 Version History

| Version | Date | Highlights |
| --- | --- | --- |
| **v4.0.0** | 2026-04-17 | **Advanced Enterprise Suite**. Introduced `@buying-committee`, `@vs-competitor`, `@price-test`, and `@roast-roadmap` for deeper B2B and strategic alignment. Active sync enforcement. |
| **v3.0.0** | 2026-04-01 | **Strategic Expansion**. 4 new industry verticals (Healthcare/Real Estate/Logistics/AgTech). 3 new regions (JP/KR, LATAM, Africa/ME). `@interview-plan`, `@learning-log`. GitHub Actions CI. 20 test cases. |
| **v2.3.0** | 2026-04-01 | **Coaching & Intelligence**. `@coach`, `@dig-deeper`, Early Adopter classification, Customer Slicing, Rob Fitzpatrick attribution. |
| **v2.2.0** | 2026-04-01 | **Mom Test Compliance++**. Bad Data Taxonomy. Commitment & Advancement. Digging tactics. 12 test cases. |
| **v2.1.0** | 2026-03-30 | **Prod Ready**. Added Regional Context Rules. Added Validation Summary Table (`@final-summary`). Self-contained embedded agents. |
| **v2.0.0** | 2026-03-29 | **Major Upgrade**. SKILL.md compliance. Knowledge Engine x4. Test suite x8. Industry verticals. |
| **v1.3.0** | 2026-03-27 | **Housekeeping & Consistency**. Added LICENSE, CHANGELOG, CONTRIBUTING. |
| **v1.2.0** | 2026-03-27 | **Quality & Integration**. Full journey demo, Good vs Bad table. |
| **v1.1.0** | 2026-03-27 | **Skill AI Safe Standard Upgrade**. Modular Knowledge Engine. |

---

## 📚 Intellectual Foundation

PersonaTwin is built on the ideas and methodology of **"The Mom Test"** by **Rob Fitzpatrick**.

> *"The Mom Test is a set of simple rules for crafting good questions that even your mother couldn't lie to you about."*
> — Rob Fitzpatrick

The Mom Test teaches entrepreneurs and product teams how to talk to customers and learn if a business idea is good — even when everyone is lying to be polite. It is the definitive guide for bias-free customer discovery.

| | |
|:---|:---|
| **Book** | [The Mom Test](https://www.momtestbook.com/) — Rob Fitzpatrick |
| **Buy Paperback** | [Amazon (geni.us/momtest)](https://geni.us/momtest) |
| **Buy PDF** | [Gumroad](https://gumroad.com/l/momtest) |
| **Online Course** | [Practical Customer Development on Udemy](https://www.udemy.com/practical-customer-development/) |
| **Author** | [robfitz.com](http://robfitz.com/) |

> **Disclaimer:** PersonaTwin is an independent AI skill **inspired by** The Mom Test methodology. It is not affiliated with, endorsed by, or officially connected to Rob Fitzpatrick or his work. We strongly encourage you to read the original book — the real thing is far richer than any simulation.

---

## 📄 License & Disclaimer

MIT License — see [LICENSE](LICENSE) for details.

> ⚠️ **Disclaimer:** This skill provides world-class simulation to protect development budgets and refine hypotheses. It is *not* a total substitute for talking to real, paying human users.

*Built with ❤️ by PersonaTwin Team · Version 4.0.0 · April 2026*
