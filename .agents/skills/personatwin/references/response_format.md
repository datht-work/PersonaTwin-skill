<template id="response-formats">
# PersonaTwin Response Formats

## 1. `@summarize` — Truth Summary Format

```markdown
## 📋 Truth Summary

**Source**: [Brief description of input data]

### Extracted Truths
| # | Behavior (KEEP) | Evidence |
|---|-----------------|----------|
| 1 | [What user IS doing] | "[Direct quote or paraphrase]" |
| 2 | [What user HAS done] | "[Direct quote or paraphrase]" |

### Filtered Out (DISCARDED)
| # | Statement | Reason |
|---|-----------|--------|
| 1 | "[Compliment or hypothetical]" | Compliment / Hypothetical / Future-tense |

### 💡 Idea Signals (INVESTIGATE)
| # | Suggestion | Root Pain to Excavate |
|---|------------|-----------------------|
| 1 | "[Feature they suggested]" | "[Ask: what were you trying to do when you thought of this?]" |

### Pain Summary
- **Primary Pain**: [Most significant pain, grounded in behavior]
- **Commitment Level**: [None / Low / Medium / High] — based on time/money already spent
- **Status Quo**: [Current solution they use]
```

## 2. `@build-persona` — Persona Card Format

See `references/5p_framework_template.md` for the full Persona Card template and example.

## 3. `@momtest` — Simulation Feedback Format

```markdown
## 💬 PersonaTwin Response

**Persona**: [Active Persona Name]
**Industry**: [Vertical, if applicable]
**Region**: [Country / Region]

> "[Persona's response in first person — max 150 words, slightly impatient, grounded in status quo]"

---

### 📊 Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | [Does the pitch address a real pain?] ✅/❌ |
| **Status Quo Disruption** | [Is the switching cost justified?] ✅/❌ |
| **Bad Data Detected** | Compliment / Fluff / Idea Signal / None |
| **Anti-Pattern Detected** | None / [Pattern Name] |
| **Regional Context Applied** | Yes / No |
| **Commitment Signal** | 💰 Money / ⏱️ Time / 🤝 Reputation / 👋 None |
| **Advancement Signal** | ✅ Clear next step / ❌ "Let me think about it" |

### 🏁 Verdict

- **Accept / Pivot / Reject**: [Decision]
- **Reasoning**: [1-2 sentence explanation]
- **Next Step for PM**: [What PM should do next]
- **Commitment Ask**: [time / money / referral]
```

## 4. `@interview-plan` — Interview Plan Format

```markdown
## 📋 Interview Plan for [Persona Name]

**Target Segment**: [Persona description]
**Objective**: [What hypothesis are you testing?]

### ✅ 5 Mom Test–Compliant Questions

| # | Question | Why It's Valid |
|---|----------|----------------|
| 1 | "[Past-tense, behavior-focused question]" | Asks about past behavior, not opinion |
| 2 | "[Specificity anchor question]" | Forces concrete example, not generic claim |
| 3 | "[Status quo question]" | Reveals current workaround and switching cost |
| 4 | "[Pain depth question]" | Uncovers how much this problem costs them |
| 5 | "[Commitment probe question]" | Tests whether they've already invested in solving it |

### 🔔 Commitment Ask Options (choose ONE at end)
- **Time**: "[Ask to schedule a 15-min trial with real data]"
- **Money**: "[Ask for deposit or pre-order]"
- **Reputation**: "[Ask for a warm intro to someone with the same problem]"

### ❌ Questions to Avoid
| Bad Question | Why It Fails | Better Version |
|---|---|---|
| "[Hypothetical / opinion question]" | Future Tense Trap / Opinion Mining | "[Past-behavior version]" |

### 📌 Pre-Interview Reminders
- Talk less than 30% of the time. Let them fill silence.
- If they say "I would..." → redirect: "When was the last time you actually did X?"
- If they compliment → ignore and ask about current behavior.
- Meeting success = Commitment or Advancement. Not "that sounds cool."
```

## 5. `@learning-log` — Post-Interview Learning Log Format

```markdown
## 📓 Learning Log — [Session Name / Date]

**Personas Interviewed**: [N] | **Product Tested**: [Name] | **Date**: [YYYY-MM-DD]

---

### 🔍 Themes Discovered (Organized by Theme, NOT by Person)

#### Theme 1: [Theme Name, e.g., "Pain around manual price updates"]
- **Evidence**: [Persona A] — "[Direct quote or behavior]"
- **Evidence**: [Persona B] — "[Supporting behavior]"
- **Pattern**: [What does this repeat tell us?]
- **Status**: 🟢 Validated / 🟡 Partial Signal / 🔴 Noise

#### Theme 2: [Theme Name]
- **Evidence**: [...]
- **Pattern**: [...]
- **Status**: [...]

---

### ✅ Validated Assumptions
| Assumption | Evidence | Confidence |
|------------|----------|------------|
| [What we thought was true] | "[Behavior-based proof]" | High / Medium / Low |

### ❌ Killed Assumptions
| Assumption | Why It Failed | Action |
|------------|---------------|--------|
| [What we thought was true] | "[Evidence that disproved it]" | Drop / Pivot |

### 💡 Idea Signals (Do NOT treat as specs — investigate root pain)
| Signal | Source Persona | Root Pain to Excavate |
|--------|---------------|----------------------|
| "[Feature suggestion]" | [Persona] | "[What underlying problem caused this?]" |

### 🤝 Commitment Signals Collected
| Persona | Commitment Type | Details |
|---------|----------------|---------|
| [Name] | 💰 Money / ⏱️ Time / 🤝 Reputation | "[What they agreed to]" |

### ❓ Open Questions for Next Round
1. [Unresolved question]
2. [Gap in understanding]

### 🎯 Next Action Decision
- **Continue Interviewing?** Yes / No — [Reason]
- **Hypothesis to Test Next**: [Updated hypothesis based on learnings]
- **Segment to Focus On**: [Who showed strongest signal]
```

## 6. `@final-summary` — Validation Summary Table Format

```markdown
## 📊 PersonaTwin — Validation Summary

**Product Tested**: [Name]  **Date**: [YYYY-MM-DD]  **Personas Tested**: [N]

### 🗂️ Persona Overview
| Persona | Industry | Region | Pain Alignment | Switching Cost | Commitment | Verdict |
|---------|----------|--------|:--------------:|:--------------:|:----------:|:-------:|
| [Name] | [Vertical] | [Country] | ✅/⚠️/❌ | 🟢/🟡/🔴 | 💰/⏱️/👋 | Accept/Pivot/Reject |

### 🔍 Key Findings
| # | Finding | Source Persona | PM Implication |
|---|---------|---------------|----------------|
| 1 | [Discovery] | [Persona] | [Action] |

### ⚠️ Anti-Patterns Detected
| Anti-Pattern | Appeared In | Recommended Fix |
|-------------|-------------|-----------------|
| [Name or "None"] | [Context] | [PM Action] |

### 🎯 Strategic Recommendation
| Dimension | Assessment |
|-----------|------------|
| Primary Target Segment | [Clearest Yes persona] |
| Segment to Avoid | [Clear No + reason] |
| Feature to Build First | [Most validated pain] |
| Feature to Drop | [Lowest demand / highest friction] |
| Minimum Success Signal | [e.g., 3 LOIs, 5 paid pilots] |

### 📋 Raw Verdict Log
| Persona | Feature Tested | Verdict | Key Objection |
|---------|---------------|---------|---------------|
| [Name] | [Idea] | Accept/Pivot/Reject | "[Quote]" |
```

</template>
