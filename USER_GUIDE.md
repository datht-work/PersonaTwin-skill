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
| `@build-persona [info]` | **Build Persona**: Create a 5P persona with Customer Slicing guidance + Early Adopter classification. |
| `@momtest [idea/feature]` | **Mom Test Simulation**: Pit your idea against the persona for ruthless feedback + Commitment Score. |
| `@summarize [content]` | **Truth Filter**: Extract behaviors from transcripts. Types all bad data: Compliments, Fluff, Hypotheticals. Flags Idea Signals. |
| `@coach [questions]` | **Interview Coach**: Submit your planned interview questions. Get a Pass/Fail scorecard + rewrites. |
| `@dig-deeper` | **Root Cause Excavation**: Continue drilling after `@momtest` surfaces a pain signal. 5-Whys depth. |
| `@final-summary` | **Validation Report**: End-of-session summary with verdicts, findings, and strategic recommendations. |
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

## 🌏 4. Regional & Country Context (Step-by-Step)

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

This runs `promptfoo` with **20 test cases** checking: No Compliment, Status Quo Anchor, Past Tense Focus, Commitment Test, Brevity, Anti-Feature-Dump, SaaS Consistency, Language Switch, Truth Filter, Fluff Detection, Regional Context, Escalation Logic, Healthcare Vertical, Logistics Vertical, AgTech Vertical, Japan/Korea Region, LATAM Region, Bad Data Ideas, @interview-plan Format, and @learning-log Theme Organization.

---

## 🟢 6. Phase 2 Commands: Coaching & Deep Research

### `@coach` — Interview Question Grader

Use **before** your real customer interviews. Submit your planned questions and get a Mom Test scorecard.

**When to use**: You have a list of interview questions and want to catch bias before you contaminate your data.

```
@coach
Persona: [target segment]
My planned questions:
1. [Question 1]
2. [Question 2]
3. [Question 3]
```

**Output**: PersonaTwin grades each question as ✅ Pass / ⚠️ Risky / ❌ Fail, explains *why* it fails the Mom Test, and rewrites it into a valid version. Includes a readiness verdict and the single biggest risk in your current question set.

> See [examples/coach\_dig\_deeper\_demo.md](examples/coach_dig_deeper_demo.md) for a full worked example.

---

### `@dig-deeper` — Root Cause Excavation

Use **immediately after** `@momtest` when the persona reveals an interesting pain signal. Drill down to root cause using Digging techniques and a 5-Whys chain.

**When to use**: The persona said something like *"Yeah, that's annoying, I lost a customer last month because…"* and you want to understand the depth and root of that pain.

```
@momtest "A price sync tool for delivery platforms"
... [persona reveals a pain about 60-minute manual updates] ...
@dig-deeper
```

**Output**: PersonaTwin runs 3-4 rounds of digging questions, then synthesizes a Root Cause Summary table showing surface complaint → real behavior → root cause → workaround → cost of inaction. Ends with a PM implication and a prototype test suggestion.

---

## ⚠️ 8. Important Notes

- **Never Trust Compliments**: PersonaTwin never compliments your idea. If it does, check `knowledge/mom_test_rules.md`.
- **3 Types of Bad Data to Ignore**: Compliments, Fluff (generic claims), and Ideas (feature suggestions). All three corrupt your signal.
- **Focus on the Past**: Always ask about what has happened. "Would you..." is the wrong question every time.
- **Status Quo is the Competition**: The biggest competitor is never another product — it's doing nothing (or using Excel).
- **Commitment > Interest**: "That sounds nice" = 0. "I'd pay $20/month" = signal. "I already paid $20 for a broken solution" = gold.
- **No advancement = learning wasted**: If the conversation ends with "let me think about it," you didn't get a commitment. Push for a next step.

---
<small>Powered by PersonaTwin Team · Version 3.0.0 · April 2026</small>
