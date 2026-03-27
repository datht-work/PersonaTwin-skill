# PersonaTwin: User Guide (English)

This guide provides a detailed reference on how to use the **PersonaTwin** skill to simulate users and validate product ideas using "The Mom Test" principles.

---

## ⚡ Quick Command Cheat Sheet

| Command | Action / Behavior |
|---|---|
| `/build-persona [info]` | **Build Persona**: Create a high-fidelity synthetic user using the 5P Framework. |
| `/momtest [idea/feature]` | **Mom Test Simulation**: Pit your idea against the persona for ruthless, honest feedback. |
| `/summarize [content]` | **Truth Filter**: Extract real-world pains and honors from interview transcripts. |
| `/safeai lang [Language]` | **Multilingual**: Switch response language (defaults to auto-detection). |

---

## 🟢 1. Core Workflow

### Step 1: Data Ingestion & Truth Filter
Use the `/summarize` command when you have raw interview notes. PersonaTwin will strip away polite compliments and keep only what the user is **currently doing** or **has done**.
> `/summarize "User says: Your product is great, I would buy it if it had feature X. Currently I use Excel to manage this."`
> **Output**: PersonaTwin will highlight that "feature X" is just a hypothetical want, while the real behavior is "using Excel."

### Step 2: Persona Building (5P Framework)
Use the `/build-persona` command to create a synthetic user. Provide basic demographics for better results.
> `/build-persona SME Owner in Vietnam, 45 years old, not tech-savvy.`

### Step 3: Simulation Mode (Mom Test Feedback)
Use the `/momtest` command to test your feature idea.
> `/momtest "I want to build a 5-step digital loyalty app for your shop."`
> **PersonaTwin**: "I don't have time for 5 steps. I'm busy managing my shop. Right now I just remember my customers' faces and give them a small discount manually."

---

## 🟡 2. Advanced Customization

### Injecting Custom Rules
If you have specific internal team standards, you can force PersonaTwin to remember them:
> *"Rule: Always assume this user only uses Zalo for work communication."*

### Automated Testing (Dev/QA)
If you are an AI engineer, you can run the test suite to ensure the persona stays on track:
```bash
npm run test
```
This runs `promptfoo` to check if the persona accidentally "compliments" a PM's idea.

---

## 🔴 3. Important Notes
- **Never Trust Compliments**: PersonaTwin is designed to **never compliment** your idea. If it does, check the `knowledge/mom_test_rules.md` configuration.
- **Focus on the Past**: Always ask about what has happened, not the future ("Would you..." is the wrong question).

---
<small>Powered by PersonaTwin Team · Version 1.3.0 · March 2026</small>
