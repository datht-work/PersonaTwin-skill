# PersonaTwin: The Mom Test Simulation Skill 🤖

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [Actionable User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)

**A specialized AI skill that acts as a synthetic user testing cloud. It applies "The Mom Test" principles to simulate ruthless, real-world user feedback for product managers.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)](SKILL.md)
[![Testing: promptfoo](https://img.shields.io/badge/testing-promptfoo-orange.svg)](tests/promptfooconfig.yaml)

---

## 🎯 The Value for Product Managers

Building products people want is hard because users often lie to be "polite." **PersonaTwin** protects you from your own biases by acting as a "truth filter."

- **🚫 Kill Compliments**: Automatically filters out "That sounds great!" and extracts only hard evidence of user behavior.
- **⚡ Rapid Prototyping**: Test feature ideas against grounded user personas before writing a single line of code.
- **🧪 The Mom Test in a Box**: Built-in logic that strictly follows Rob Fitzpatrick's principles — focusing on past behavior and current pains.
- **🏗️ Structured Personas**: Uses the **5P Framework** (Profile, Psychology, Pains, Proficiency, Principles) for high-fidelity simulations.

---

## 🛠️ Key Features

### 1. Modular Knowledge Engine
Structured using XML tags (`<rule>`, `<template>`, `<example>`) in the `knowledge/` and `resources/` directories for precise AI retrieval and high-consistency logic.

### 2. Command System
Trigger specific behaviors instantly using slash commands:
- `/build-persona`: Create high-fidelity personas from demographics.
- `/momtest`: Pit your feature idea against the ruthless persona.
- `/summarize`: Extract the "ugly truth" from raw interview transcripts.

### 3. Automated QA & Linting
Includes a `promptfoo` testing suite to ensure the AI never breaks the "No Compliment" rule, and `markdownlint` for documentation quality.

---

## 🚀 Quick Start

### Installation (via CLI)
```bash
npx skills add datht-work/personatwin-skill
```

### Manual Setup
1. Copy **[SKILL.md](SKILL.md)** content into your AI assistant's instructions.
2. Provide the **`knowledge/`**, **`resources/`**, and **`examples/`** folders as context/knowledge files.

---

## 📋 Version History

| Version | Date | Highlights |
| --- | --- | --- |
| **v1.3.0** | 2026-03-27 | **Housekeeping & Consistency**. Added LICENSE, CHANGELOG, CONTRIBUTING. Fixed version drift. |
| **v1.2.0** | 2026-03-27 | **Quality & Integration**. Full journey demo, Good vs Bad table, lint fixes. |
| **v1.1.0** | 2026-03-27 | **Skill AI Safe Standard Upgrade**. Modular Knowledge Engine, Command System, XML-tag support. |
| **v1.0.0** | 2026-03-26 | Initial Release - Basic Mom Test simulation. |

---

## 🤝 Contributing
We welcome contributions to the `knowledge/` base, especially new industry-specific personas and "Mom Test" logic improvements.

---

## 📄 License
MIT License — see [LICENSE](LICENSE) for details.

> ⚠️ **Disclaimer:** This skill provides training and simulation guidance. It is not a substitute for talking to real human users.

*Built with ❤️ by PersonaTwin Team · v1.3.0 · March 2026*
