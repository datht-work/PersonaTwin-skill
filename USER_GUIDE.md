# PersonaTwin: User Guide (English)

This guide provides a detailed reference on how to use the **PersonaTwin** skill to simulate users and validate product ideas using "The Mom Test" principles.

---

## 💡 How to Invoke PersonaTwin

Since PersonaTwin is an AI skill, how you run it depends on your environment:

- **AI IDEs (Cursor, Windsurf, Copilot, etc.)**: Tag the agent and use the command (e.g., `@personatwin @build-persona ...`).
- **CLI Agents (Claude Code, Amp, Cline, etc.)**: Use natural language (e.g., "Use personatwin to `@build-persona`...").
- **ChatGPT / Claude Web**: Paste the `SKILL.md` file into your chat context and type the command directly (e.g., `@build-persona ...`).

---

## ⚡ Quick Command Cheat Sheet

| Command | Action / Behavior |
|---|---|
| `@build-persona [info]` | **Build Persona**: Create a high-fidelity synthetic user using the 5P Framework. |
| `@momtest [idea/feature]` | **Mom Test Simulation**: Pit your idea against the persona for ruthless, honest feedback. |
| `@summarize [content]` | **Truth Filter**: Extract real-world pains and behaviors from interview transcripts. |
| `@final-summary` | **Validation Report**: Generate an end-of-session summary table with all verdicts, findings, and strategic recommendations. |
| `@safeai lang [Language]` | **Multilingual**: Switch response language (defaults to auto-detection). |

---

## 🟢 1. Core Workflow

### Step 1: Data Ingestion & Truth Filter

Use the `@summarize` command when you have raw interview notes. PersonaTwin will strip away polite compliments and keep only what the user is **currently doing** or **has done**.

> `@summarize "User says: Your product is great, I would buy it if it had feature X. Currently I use Excel to manage this."`
> **Output**: PersonaTwin will highlight that "feature X" is just a hypothetical want, while the real behavior is "using Excel."

### Step 2: Persona Building (5P Framework)

Use the `@build-persona` command to create a synthetic user. Provide basic demographics for better results.

> `@build-persona SME Owner in Vietnam, 45 years old, not tech-savvy.`

PersonaTwin outputs a structured **Persona Card** with Profile, Psychology, Pains & Gains, Proficiency, and Principles.

### Step 3: Simulation Mode (Mom Test Feedback)

Use the `@momtest` command to test your feature idea.

> `@momtest "I want to build a 5-step digital loyalty app for your shop."`
> **PersonaTwin**: "I don't have time for 5 steps. I'm busy managing my shop. Right now I just remember my customers' faces and give them a small discount manually."

---

## 🟡 2. Industry Presets

PersonaTwin includes pre-configured persona behaviors for 6 industry verticals. When you build a persona from a specific industry, the skill automatically loads the appropriate behavior rules.

| Industry | Persona Mindset | Default Objection Style |
|----------|----------------|------------------------|
| **SaaS B2B** | CFO / Ops Manager. ROI-focused. | "What's the TCO? We already pay for HubSpot." |
| **F&B / Retail** | Shop owner. Cash-flow focused. | "I don't have time to learn new software." |
| **FinTech** | Risk-averse. Compliance-first. | "Is it compliant? What about the audit?" |
| **EdTech** | Overworked teacher. Skeptical. | "I've seen 10 apps like this. They all die." |
| **Consumer App** | End user. 3-second attention span. | "I already have an app for that. Why another one?" |
| **Security** | CISO. Zero-trust mindset. | "Where is the data stored? Show me the SOC2 report." |

### Example: SaaS B2B Persona

> `@build-persona CFO of a 50-person SaaS startup, Singapore, data-driven`
> Then: `@momtest "An AI-powered sales forecasting tool"`
> PersonaTwin will respond with ROI/TCO objections and references to existing tools like HubSpot.

---

## 🔴 3. Anti-Pattern Detection

PersonaTwin automatically detects when your pitch contains common PM mistakes:

| Anti-Pattern | What It Looks Like | PersonaTwin Reaction |
|-------------|-------------------|---------------------|
| **Feature Dumping** | Listing 3+ features at once | "You lost me at feature #2. Just tell me about the one that helps me." |
| **Solution First** | Describing a solution without asking about the problem | "Wait — what problem are you solving?" |
| **Future Tense Trap** | "Would you use this if..." | "I can't tell you what I'd do. But last week I..." |
| **Vanity Metrics** | "We have 50,000 downloads" | "Downloads mean nothing. How many paid?" |
| **Competitor Comparison** | "Like Grab but for X" | "I don't use Grab for X. I call Chị Tư." |
| **Premature Scaling** | "Targeting 10M users in SEA" | "Great. But does it work for MY shop?" |

---

## 🌏 5. Regional & Country Context (Step-by-Step)

PersonaTwin can load country- and region-specific behavior overlays to make your personas realistic for local markets. Different countries have different tools, trust signals, and price sensitivities.

### Step 1: Specify Country or Region in `@build-persona`

Add the country or region to your persona demographics:

> `@build-persona SME Owner, 40, Vietnam, F&B, not tech-savvy`
> `@build-persona CFO, 45, Singapore, SaaS B2B, data-driven`
> `@build-persona Pharmacy manager, 50, Germany, FinTech-adjacent`

### Step 2: PersonaTwin Loads Regional Rules

Regional context is automatically applied:

| Region | Key Behavior Loaded |
|--------|--------------------|
| **Vietnam 🇻🇳** | Zalo-first tools, extreme price sensitivity, peer-referral trust, cash-to-digital context |
| **Southeast Asia 🌏** | Super-app dominance, local e-wallets, fragmented regulations per country |
| **USA 🇺🇸** | High willingness-to-pay if ROI proven, SOC2/compliance expected, multi-stakeholder buying |
| **Europe 🇪🇺** | GDPR-first, data localization critical, 6-12 week legal review for new tools |

### Step 3: Run `@momtest` — Region-Aware Feedback

The simulation will now include regional-specific objections and tool references:

> `@momtest "A SaaS analytics dashboard for your sales team"`
>
> — A **Vietnam** persona might respond: *"How much? 500 nghìn/tháng? That's too much. Our team just uses Zalo polls to track daily targets."*
> — A **Singapore** persona might respond: *"Is this SOC2 certified? Our compliance team needs to sign off before we trial anything that touches revenue data."*

### Step 4: Run Multiple Countries for Market Validation

Test the same idea across regions to find your best-fit market:

1. `@build-persona Cafe Owner, 32, Ho Chi Minh City, Vietnam`
2. `@momtest "A digital loyalty app for your cafe"`
3. `@build-persona Cafe Owner, 32, Bangkok, Thailand`
4. `@momtest "A digital loyalty app for your cafe"`
5. `@build-persona Cafe Owner, 32, Jakarta, Indonesia`
6. `@momtest "A digital loyalty app for your cafe"`

### Step 5: Generate Final Summary Table

After testing all regions, use `@final-summary` to consolidate:

> `@final-summary`

PersonaTwin will output a **Validation Summary Table** showing:

- Pain Alignment per persona/region
- Switching Cost & Commitment Signal
- Accept / Pivot / Reject verdicts
- Strategic Recommendation: which market to prioritize

---

## 🔵 4. Advanced: Multi-Persona Comparison

Test the same feature against multiple personas to validate market segments:

1. `@build-persona Young cafe owner, 28, tech-savvy`
2. `@momtest "Digital receipt system"` — note the reaction
3. `@build-persona Pharmacy owner, 55, traditional, Hanoi`
4. `@momtest "Digital receipt system"` — compare reactions

When two personas react very differently, you've discovered a **segment boundary**. See [multi_persona_demo.md](examples/multi_persona_demo.md) for a full example.

---

## 🟡 5. Customization

### Injecting Custom Rules

If you have specific internal team standards, you can force PersonaTwin to remember them:

> *"Rule: Always assume this user only uses Zalo for work communication."*

### Automated Testing (Dev/QA)

If you are an AI engineer, you can run the test suite to ensure the persona stays on track:

```bash
npm run test
```

This runs `promptfoo` with 8 test cases checking: No Compliment, Status Quo Anchor, Past Tense Focus, Commitment Test, Brevity, Anti-Feature-Dump, SaaS Consistency, and Language Switch.

---

## ⚠️ 6. Important Notes

- **Never Trust Compliments**: PersonaTwin is designed to **never compliment** your idea. If it does, check the `knowledge/mom_test_rules.md` configuration.
- **Focus on the Past**: Always ask about what has happened, not the future ("Would you..." is the wrong question).
- **Status Quo is the Competition**: The biggest competitor is never another product — it's doing nothing (or using Excel).
- **Commitment > Interest**: "That sounds nice" means nothing. "I'd pay $20/month" means something. "I already paid $20/month for a half-solution" means everything.

---
<small>Powered by PersonaTwin Team · Version 2.1.0 · March 2026</small>
