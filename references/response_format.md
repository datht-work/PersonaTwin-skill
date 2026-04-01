<template id="response-formats">
# PersonaTwin Response Formats

## 1. `@summarize` — Truth Summary Format

```markdown
## 📋 Truth Summary

**Source**: [Brief description of input data]

### ✅ Extracted Truths (KEEP)
| # | Behavior (KEEP) | Evidence |
|---|-----------------|----------|
| 1 | [What user IS doing] | "[Direct quote or paraphrase]" |
| 2 | [What user HAS done] | "[Direct quote or paraphrase]" |

### 🚫 Filtered Out (DISCARDED)
| # | Statement | Type | Reason |
|---|-----------|------|--------|
| 1 | "[Statement]" | Compliment | Praise — not evidence |
| 2 | "[Statement]" | Fluff | Generic claim / no specific instance |
| 3 | "[Statement]" | Hypothetical | Future-tense — describes intent, not behavior |

### 💡 Idea Signals (INVESTIGATE)
| # | Suggestion Made | Root Problem (Hypothesized) | Next Question |
|---|-----------------|---------------------------|--------------|
| 1 | "[Feature they asked for]" | [Underlying pain this might point to] | "[Digging question to ask next]" |

### Pain Summary
- **Primary Pain**: [Most significant pain, grounded in behavior]
- **Commitment Level**: [None / Low / Medium / High] — based on time/money/reputation already spent
- **Status Quo**: [Current solution they use]
```

## 2. `@build-persona` — Persona Card Format

See `references/5p_framework_template.md` for the full Persona Card template and example.

## 3. `@momtest` — Simulation Feedback Format

```markdown
## 💬 PersonaTwin Response

**Persona**: [Active Persona Name]
**Industry**: [Vertical, if applicable]
**Region**: [Country / Region, if applicable]

> "[Persona's response in first person — max 150 words, slightly impatient, grounded in status quo]"

---

### 📊 Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | [Does the pitch address a real pain?] ✅/❌ |
| **Status Quo Disruption** | [Is the switching cost justified?] ✅/❌ |
| **Bad Data Detected** | [Compliment / Fluff / Idea Signal / None] |
| **Anti-Pattern Detected** | [Any PM anti-patterns?] None / [Pattern Name] |
| **Regional Context Applied** | [Country/region-specific behavior triggered?] Yes / No |
| **Commitment Signal** | 💰 Money / ⏱️ Time / 🤝 Reputation / 👋 None |
| **Advancement Signal** | ✅ Clear next step proposed / ❌ "Let me think about it" |

### 🏁 Verdict

- **Accept / Pivot / Reject**: [Decision]
- **Reasoning**: [1-2 sentence explanation]
- **Next Step for PM**: [What the PM should do next]
- **Commitment ask**: [What commitment to seek from real users: time / money / referral]
```

## 4. `@final-summary` — Validation Summary Table Format

Use this at the end of a session (after testing 1+ personas) to consolidate ALL findings
into a single actionable table the PM can use immediately.

```markdown
## 📊 PersonaTwin — Validation Summary

**Product / Feature Tested**: [Name of idea or feature]
**Date**: [YYYY-MM-DD]
**Total Personas Tested**: [N]

---

### 🗂️ Persona Overview

| Persona | Industry | Region | Pain Alignment | Switching Cost | Commitment Signal | Verdict |
|---------|----------|--------|:--------------:|:--------------:|:-----------------:|:-------:|
| [Name] | [Vertical] | [Country] | ✅ Strong / ⚠️ Partial / ❌ None | 🟢 Low / 🟡 Medium / 🔴 High | 💰 Paid / ⏱️ Time / 👋 None | Accept / Pivot / Reject |

---

### 🔍 Key Findings

| # | Finding | Source Persona | PM Implication |
|---|---------|---------------|----------------|
| 1 | [What was discovered] | [Persona name] | [What PM should do next] |
| 2 | | | |

---

### ⚠️ Anti-Patterns Detected

| Anti-Pattern | Appeared In | Recommended Fix |
|-------------|-------------|-----------------|
| [Pattern name or "None detected"] | [Persona / Pitch moment] | [Specific PM action] |

---

### 🎯 Strategic Recommendation

| Dimension | Assessment |
|-----------|------------|
| **Primary Target Segment** | [Who is the clearest Yes?] |
| **Segment to Avoid** | [Who is a clear No, and why?] |
| **Feature to Build First** | [Most validated pain point] |
| **Feature to Drop / Deprioritize** | [Lowest demand or highest friction] |
| **Minimum Success Signal** | [What counts as "validated"? e.g., 3 LOIs, 5 paid pilots] |

---

### 📋 Raw Verdict Log

| Persona | Feature Tested | Verdict | Key Objection (direct quote) |
|---------|---------------|---------|------------------------------|
| [Name] | [Idea tested] | Accept / Pivot / Reject | "[Exact quote or paraphrase]" |
```

</template>

## 5. `@coach` — Question Scorecard Format

Use after PM submits a list of planned customer interview questions. PersonaTwin grades each question vs Mom Test rules.

```markdown
## 🎓 PersonaTwin Coach — Question Scorecard

**PM's Interview Goal**: [What they're trying to learn]
**Persona Context**: [Industry / Region if specified]

### 📋 Question Analysis

| # | PM's Question | Grade | Problem | Rewrite |
|:-:|:-------------|:-----:|:--------|:--------|
| 1 | "[Original question]" | ✅ Pass / ⚠️ Risky / ❌ Fail | [Why it breaks Mom Test, if any] | "[Better version]" |

### 🔴 Critical Violations Found

| Violation Type | Question # | Explanation |
|:--------------|:----------:|:------------|
| Future Tense Trap | #2 | "Would you use..." leads to hypothetical answers |
| Opinion Mining | #3 | "Do you think..." invites polite encouragement |
| Solution Pitch | #5 | Describes the product before uncovering the pain |

### ✅ Your 3 Best Questions (Keep These)

1. "[Question that passes the Mom Test]" — *Why it works: asks about past behavior*
2. ...

### 💡 Suggested Opening Question

> "[A Mom Test–compliant opener that surfaces real behavior without pitching the idea]"

### 📌 Coach Summary

- **Readiness**: [Not Ready / Needs Work / Ready to Interview]
- **Biggest Risk**: [The one mistake most likely to contaminate your data]
- **Next Step**: [What to fix before the first real conversation]
```

---

## 6. `@dig-deeper` — Root Cause Excavation Format

Use immediately after `@momtest` when a pain signal surfaced and you want to drill into the root cause.

```markdown
## 🔬 PersonaTwin — Root Cause Excavation

**Continuing from**: [Last @momtest — pain signal identified]
**Pain Signal**: "[What the persona revealed]"

### 🪛 Digging Session

**PersonaTwin**: "[Round 1 — First digging question to probe the pain]"

> *PM answers or continues the conversation...*

**PersonaTwin**: "[Round 2 — Follow-up anchoring to specifics or asking Why]"

> *Continue until root cause is clear or persona hits a wall...*

### 🏁 Root Cause Summary

| Layer | Finding |
|:------|:--------|
| **Surface complaint** | [What the persona said initially] |
| **Real behavior** | [What they actually do / have done] |
| **Root cause** | [The underlying reason this is painful] |
| **Workaround they use** | [Current status quo patch] |
| **Cost of inaction** | [Time/money/reputation lost if not solved] |

### 💡 PM Implication

- **Problem worth solving?**: [Yes / Borderline / No] — based on cost of inaction
- **Who suffers most?**: [Most affected persona slice]
- **Prototype test suggestion**: [What minimal thing to show to validate root cause]
```

---

## 7. `@interview-plan` — Interview Plan Generator Format

Generate 5 Mom Test–compliant interview questions tailored to the active persona. PM uses these before going into a real conversation.

```markdown
## 🗺️ PersonaTwin — Interview Plan

**Persona**: [Active Persona Name]
**Your Hypothesis**: [What you believe is true about their problem]
**Goal of this interview**: [What you need to learn to validate or kill the hypothesis]

---

### 📋 Your 5 Interview Questions

> ⚠️ Rule: Never show these questions to the interviewee. Ask them naturally in conversation.

| # | Question | Why it works | Watch for |
|:-:|:---------|:-------------|:----------|
| 1 | "[Opening question about their current workflow / day]" | Status quo exploration — no pitch | Signs of daily friction or workarounds |
| 2 | "[Past behavior anchor — specific recent event]" | Grounds conversation in real data | Frequency and severity of the pain |
| 3 | "[Dig into current solution / workaround]" | Uncovers status quo and switching cost | Emotional signals: frustration or resignation |
| 4 | "[Cost of inaction — what happens if unsolved]" | Reveals real priority vs. nice-to-have | Willingness to pay / time spent |
| 5 | "[Network / referral probe — who else has this problem]" | Expands learning + tests social proof viability | If they suggest 3+ names, problem is widespread |

---

### 🚫 Questions to AVOID (and why)

| Avoid | Because |
|:------|:--------|
| "Would you use/pay for X?" | Future tense — hypothetical answer |
| "Do you think this is a good idea?" | Invites politeness, not truth |
| "What features would you want?" | Leads to wish-list, not root problem |
| "How often do you usually...?" | Generic — demand last specific instance |

---

### 🎯 Commitment Ask (End of Interview)

If the conversation reveals genuine pain, close with ONE commitment ask:

> "[Time ask]: Would you be willing to be a beta tester for 2 weeks? Just 30 minutes a week."
> "[Money ask]: We're offering early access for $X. Does that work for solving what you described?"
> "[Reputation ask]: Who else in your network has this exact problem? Could you intro us?"

### 📝 Pre-Interview Reminder

- Ask about THEIR life. Not YOUR idea.
- Shut up after asking. Silence = gold.
- Take notes live or within 5 minutes after.
- If they compliment the idea, redirect: "That's kind. Help me understand the problem better."
```

---

## 8. `@learning-log` — Post-Interview Learning Log Format

Use after completing a real or simulated interview session to organize insights by learning, not by person.

```markdown
## 📓 Learning Log — Session [Date/Number]

**Session type**: [Real interview / PersonaTwin simulation]
**Personas / People spoken to**: [Name or ID]
**Duration**: [Total time]

---

### 🔑 Key Learnings (Organized by theme, NOT by person)

> Tip from The Mom Test: Organize around *what you learned*, not *who you talked to*.

| Learning | Evidence | Source | Confidence |
|:---------|:---------|:-------|:----------:|
| [Insight 1] | "[Direct quote or specific behavior observed]" | [Persona A / Real user B] | High / Medium / Low |
| [Insight 2] | "[Direct quote or specific behavior observed]" | [Persona C] | High / Medium / Low |

---

### ✅ Validated Assumptions

| Assumption | Status | Evidence |
|:-----------|:------:|:---------|
| [Thing you believed] | ✅ Confirmed | [Quote/behavior that confirms it] |
| [Thing you believed] | ❌ Killed | [Quote/behavior that disproves it] |
| [Thing you believed] | ⚠️ Unclear | [Needs more data] |

---

### 💡 Idea Signals (Features/Ideas Mentioned)

> DO NOT build these. Investigate the root problem behind each.

| Suggestion | Mentioned by | Root Problem (Hypothesized) | Next Question |
|:-----------|:-------------:|:---------------------------|:-------------|
| "[Feature they asked for]" | [N] people | [What underlying pain causes this request?] | "[Question to dig into it]" |

---

### 🎯 Commitment & Advancement Signals

| Person / Persona | Signal Type | Details |
|:----------------|:-----------:|:--------|
| [Name] | 💰 Money | Offered to pay $X for early access |
| [Name] | ⏱️ Time | Agreed to 2-week beta trial |
| [Name] | 🤝 Reputation | Offered to intro to 3 colleagues |
| [Name] | 👋 None | "Sounds interesting, let me think about it" |

---

### ❓ Open Questions (For Next Session)

1. [What we still don't know — ground in specific uncertainty]
2. [...]

### 📌 Decision

- **Continue / Pivot / Stop**: [Based on the aggregate learnings]
- **Next action**: [Concrete next step with owner and deadline]
```
