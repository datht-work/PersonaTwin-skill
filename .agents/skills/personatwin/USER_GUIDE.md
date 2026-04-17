# PersonaTwin: User Guide & Strategic Playbook

This document is not just a command reference; it is a **Strategic Playbook**. You will learn how to use PersonaTwin to: (A) Avoid coding the wrong features, and most importantly, (B) **Find the perfect Product-Market Fit (PMF) for an existing app/product.**

---

## 💡 How to Invoke PersonaTwin

Since PersonaTwin is an AI skill, how you run it depends on your environment:

- **AI IDEs (Cursor, Windsurf, Copilot, etc.)**: Tag the agent and use the command (e.g., `@personatwin @build-persona ...`).
- **CLI Agents (Claude Code, Cline, etc.)**: Use natural language (e.g., "Use personatwin to `@build-persona`...").
- **ChatGPT / Claude Web**: Paste the `SKILL.md` file into your chat context and type the command.

---

## ⚡ Quick Command Cheat Sheet

| Command | Primary Use Case |
|---|---|
| `@build-persona [info]` | Create a user, classify Early Adopter status. Forces you to slice broad audiences. |
| `@momtest [idea/app]` | Pitch a feature/app to receive "complex, rejecting, or demanding" feedback. |
| `@summarize [content]` | Filter the truth from meeting notes. Strips away compliments (Fluff). |
| `@coach [questions]` | Grade your sales/interview script to catch leading questions. |
| `@interview-plan` | Auto-generate 5 Mom Test-compliant questions for the active persona. |
| `@dig-deeper` | Drill down (5-Whys) after `@momtest` finds a scratch to uncover the Root Pain. |
| `@final-summary` | Consolidate data into a Strategic Dashboard (Drop segment A, target segment B). |
| `@learning-log` | Post-interview learning log (grouped by theme, not by person). |

---

## 🎯 PLAYBOOK 1: Finding the Target Audience for an "Existing App" (Product-Market Fit)

*Your app is coded, it has great features, but nobody is using it. The problem? You're targeting the wrong segment. Use this 5-step process to hunt down your lucrative "Niche Market":*

### Step 1: Audience Slicing

Don't test with the general public. Create 3 wildly different personas within the same vertical.

1. `@build-persona Young Cafe Owner, 28, tech-savvy, Downtown, Vietnam`
2. `@build-persona Traditional Grocery Owner, 50, Zalo-only, Suburbs, Vietnam`
3. `@build-persona F&B Chain Manager of 10 locations, cash-flow focused`

### Step 2: The Core Pitch

Throw the core feature of your existing app at all three personas using `@momtest`:
> `@momtest "We have a barcode scanning feature on our app that generates an inventory report in 3 seconds."`

### Step 3: Reading the Switching Cost

PersonaTwin will return their real reactions. You are NOT looking for someone who says "Great app". You are looking for a **Pain Alignment = ✅** AND a **Switching Cost = 🟢 (Low)**.

- *Persona 2 (50yo)* will object: "I just use my notebook. My eyes are too bad for scanning barcodes." (Drop this segment).
- *Persona 3 (Chain Manager)* will object: "We use Oracle. Can your app bi-directionally sync with our database?" (This segment is too demanding/expensive to acquire right now).

### Step 4: Digging for Marketing Content

Let's say Persona 1 (Young Cafe Owner) says: "That's okay, at the end of the day my inventory rarely matches my cash register." Drill down immediately:
> `@dig-deeper`

PersonaTwin will use the 5-Whys technique to uncover that the owner spends 2 hours every night manually cross-referencing Excel sheets. **That is your new Ad Headline!**

### Step 5: Strategic Consolidation

Run the closing command:
> `@final-summary`

The system will generate a table declaring: The absolute best target is "Young, single-location cafe owners". You just saved thousands of dollars in misdirected ad spend.

---

## 🛠 PLAYBOOK 2: Validating New Features (Before Coding)

*You have a new idea. Don't code it yet. Validate it.*

### Step 1: Extract Truth from Old Data

If you just grabbed coffee with a user and they praised your idea, feed the transcript to the AI:
> `@summarize "[Transcript where user praises the idea]"`
> PersonaTwin will expose it: The user praised it out of politeness, but their actual past behavior shows they've never spent money solving this problem before.

### Step 2: Prep the Interview Script

To avoid bias when talking to humans, let AI write the script:
> `@build-persona CFO, 45, B2B SaaS`
> `@interview-plan`
> This generates 5 questions anchoring on Past Pain, completely avoiding "Would you buy this?"

### Step 3: Rehearsal & Grading

If you write your own questions, get them graded:
> `@coach [Your list of questions]`
> Get a scorecard highlighting exactly which questions lead the witness.

---

## 💼 PLAYBOOK 3: Advanced Enterprise & Strategy Testing (New in v4.0.0)

*Moving from validating ideas to closing deals and refining pricing.*

### 🏛️ B2B Syndicate Debate (`@buying-committee`)
Pitch a B2B product to simulate the internal debate of a buying committee:
> `@buying-committee "We offer a $50k/yr cybersecurity training platform"`
The system spawns The User, The CFO, and The CISO to debate. Even if the User loves it, if the ROI or Security compliance fails, the deal is BLOCKED.

### ⚔️ Switching Cost Engine (`@vs-competitor`)
Want to unseat an incumbent? Force the persona to ignore "cool features" and focus entirely on the friction of migrating:
> `@vs-competitor "Salesforce" "Our CRM is 20% cheaper and has a nicer UI"`
The persona will violently critique data gravity, contract lock-ins, and staff retraining downtime to prove 20% cheaper isn't enough.

### 💰 Van Westendorp Pricing (`@price-test`)
Never ask "Would you pay for this?" Instead, pitch a price and let the persona react based on psychological thresholds:
> `@price-test "$49/month for unlimited exports"`
Receive unfiltered reactions indicating if the price is a bargain, offensively expensive, or suspiciously cheap.

### 🔥 Roast My Roadmap (`@roast-roadmap`)
Stop building what users don't need:
> `@roast-roadmap "1. GenAI integration 2. Dark mode 3. One-click Excel export"`
The persona will brutally rank these features based on *Desperation to Buy*, flagging Vanity Features and highlighting the true Revenue Driver.

---

## 🚨 Fixing a "Dead App": Spotting 5 Fatal Anti-Patterns

If your app isn't selling, run `@momtest` and pitch it exactly the way your Sales team does. If the system flags any of these errors, you know why you're failing:

1. **Feature Dumping**: Throwing 5 features at the customer (Persona will snap: "Too confusing, just tell me what helps me.")
2. **Future Tense Trap**: "Will you use this feature?" (A fundamentally flawed leading question).
3. **Vanity Metrics**: "We have 100k downloads." (Persona responds: "How many of them actually paid?")
4. **Solution First**: Opening with "Our product uses AI..." before even asking where it hurts.

---

## 🌏 Advanced Config: Conquering Cross-Border Markets (Regional Rules)

PersonaTwin carries the DNA of **7 regions** and **6 industry verticals**. When bringing an existing app to a new country, set the Region to test international Product-Market Fit.

| Region/Industry | Setup in Persona | Consequence when running `@momtest` |
|---|---|---|
| **Vietnam 🇻🇳** | `Vietnam` | Hyper price-sensitive, Zalo-first, demands free trials. |
| **Japan/Korea 🇯🇵** | `Japan` | Demands Consensus (nemawashi) - takes 6 months to close, requires local office. |
| **LATAM 🌎** | `Brazil` / `LATAM` | All business happens on WhatsApp. High inflation risk. |
| **Europe 🇪🇺** | `Europe` / `Germany`| Asks for GDPR compliance immediately. 12-week legal review. |
| **SaaS B2B 💻**| `SaaS B2B` | Obsessed with TCO (Total Cost of Ownership) and ROI. Compares everything to HubSpot. |
| **FinTech 🏦** | `FinTech` | Zero-trust. Demands SOC2 and Pen-test reports before taking a meeting. |

**Example of Cross-Border Testing:**

1. `@build-persona Cafe Owner, 32, Bangkok, Thailand`  → Pitch App.
2. `@build-persona Cafe Owner, 32, Jakarta, Indonesia` → Pitch App.
3. `@final-summary` → Identify the friction difference between Thailand and Indo to adjust your pitch.

---

## ⚙️ Technical Customization (For Dev/QA)

If you are an AI engineer integrating this into internal workflows:

1. **Custom Rules**: Inject `Rule: Always assume this user relies heavily on SAP` into the context before running commands.
2. **Automated Validation**: Benchmark your modifications using Promptfoo.

   ```bash
   npm run test
   ```

   (Runs 20 test cases covering: Anti-compliment, Hard Commitments, Regional Objections, Past Tense Focus, etc.)

---

## ⚠️ 8 Survival Rules Every Product/Biz Lead Must Know

1. **NEVER BE SATISFIED WITH PRAISE**: PersonaTwin is coded to never stroke your ego. Compliments = Bad Data.
2. **The Status Quo is Death**: Your competitor isn't another app; your competitor is an Excel spreadsheet and a notebook.
3. **Value = Switching Cost Overcome**: Customers only use your app if the joy of the solution outweighs the laziness of learning how to use it.
4. **The Only Valid Timeline is the PAST**: "How long did it take you to do this last week?" >> "Do you think this feature will save you time?".

*Use PersonaTwin like a punching bag. Throw your craziest ideas at it, and let it violently punch back with the truth.*

---
<small>PersonaTwin Team · Playbook Version 4.0.0 · April 2026</small>
