<example id="full-journey">
# Full Journey Demo: From Raw Data to Decision

> This example demonstrates the complete PersonaTwin workflow, moving through all three core commands. Each step includes analysis explaining WHY the persona responds the way it does.

---

## Step 1: Data Ingestion (`/summarize`)

**PM Input**:
*"I talked to a small cafe owner. They said my digital menu idea is 'amazing' and they 'love the design.' They currently use a chalk board and a printed QR code that links to a PDF. They mentioned it's hard to update prices daily."*

**PersonaTwin Output**:

> ## 📋 Truth Summary
>
> **Source**: PM interview notes — small cafe owner
>
> ### Extracted Truths
>
> | # | Behavior (KEEP) | Evidence |
> |---|-----------------|----------|
> | 1 | Uses chalk board for in-store menu | Direct observation |
> | 2 | Has QR code linking to PDF menu | Already digitally aware |
> | 3 | Struggles with daily price updates | "Hard to update prices daily" |
>
> ### Filtered Out (DISCARDED)
>
> | # | Statement | Reason |
> |---|-----------|--------|
> | 1 | "amazing" | Compliment — not evidence |
> | 2 | "love the design" | Compliment — polite reaction to being shown something |
>
> ### Pain Summary
>
> - **Primary Pain**: Daily pricing updates are manual and time-consuming.
> - **Commitment Level**: Medium — They already invested in QR code (shows willingness to go digital).
> - **Status Quo**: Chalk board (offline) + QR → PDF (static digital).

**Why this matters**: The PM might walk away feeling validated ("They said it's amazing!"). But the Truth Filter reveals that the only REAL signal is the daily price update pain. The compliments are noise.

---

## Step 2: Persona Building (`/build-persona`)

**PM Input**: `/build-persona Cafe Owner, 30s, Ho Chi Minh City, tech-forward`

**PersonaTwin Output**:

> ## 🎭 Active Persona: "Modern Minh"
>
> **Profile**: 32, Cafe Owner, Ho Chi Minh City. 1 location, 4 staff. Revenue ~$3000/mo.
>
> **Psychology**: Stressed about operational efficiency. Hates "busy work." Wants to appear modern to young customer base.
>
> **Pains & Gains**:
>
> - 😤 Pain: Updating menu prices across QR code, Grab, ShopeeFood takes 2 hours. Currently edits Canva file → exports PDF → re-uploads.
> - 🎯 Gain: "One change, updates everywhere in 10 seconds."
>
> **Proficiency**: High for age group. Uses iPhone, Zalo for team chat, Canva for menus, basic Google Sheets for expenses.
>
> **Principles**: "If it saves me 15 minutes a day, it's worth it. If it adds even 1 extra step, it better be essential."

**Why these details**: The persona's tech proficiency is inferred from age + "tech-forward" demographic. The specific pain (Canva → PDF → re-upload) is grounded in realistic F&B owner behavior. The principle ("15 min/day") gives the PM a concrete benchmark to design against.

---

## Step 3: Simulation Mode (`/momtest`)

**PM Pitch**: *"Minh, I want to build a system where you can update prices in an app and it updates the QR menu instantly. It also sends a push notification to your customers."*

**PersonaTwin Response**:

> "Wait, why push notifications? I don't have my customers' phone numbers, and they'd hate me for bothering them while they're at work. Just give me the price update thing. If I can change the price of the 'Cà phê sữa' in 10 seconds while the customer is standing there, I'll use it. Right now I have to edit a Canva file, export a PDF, and re-upload it. It takes forever — so I just use the chalk board instead."

**Why this response**: The persona applies multiple rules simultaneously:

- **Anti-Pattern: Feature Dumping** — PM pitched 2 features. Persona ignores the weak one.
- **Status Quo Anchor** — Mentions current process (Canva → PDF → re-upload) before evaluating new solution.
- **Specificity Anchor** — Cites exact product name ("Cà phê sữa"), exact time goal ("10 seconds").
- **Impatience** — Dismisses push notifications in one sentence. Doesn't waste time on irrelevant features.

---

## Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | Strong ✅ — Daily price updates are a real, active pain |
| **Status Quo Disruption** | Justified ✅ — Current Canva workflow is painful enough to switch |
| **Commitment Signal** | Medium ✅ — Already invested in QR code; willing if time payoff is clear |
| **Anti-Pattern Detected** | Feature Dumping — Push notifications had zero demand |

## Verdict: Pivot Required

- **Accept**: Instant QR menu price updates (solves a real pain with clear time savings).
- **Reject**: Push notifications (zero demand, high friction, no phone numbers).
- **Next Step**: Build a prototype of the "10-second update" UI. Test with 3 more cafe owners to validate.

</example>
