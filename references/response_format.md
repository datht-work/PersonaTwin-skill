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
**Region**: [Country / Region, if applicable]

> "[Persona's response in first person — max 150 words, slightly impatient, grounded in status quo]"

---

### 📊 Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | [Does the pitch address a real pain?] ✅/❌ |
| **Status Quo Disruption** | [Is the switching cost justified?] ✅/❌ |
| **Commitment Signal** | [Would persona invest time/money?] ✅/❌ |
| **Anti-Pattern Detected** | [Any PM anti-patterns?] None / [Pattern Name] |
| **Regional Context Applied** | [Country/region-specific behavior triggered?] Yes / No |

### 🏁 Verdict

- **Accept / Pivot / Reject**: [Decision]
- **Reasoning**: [1-2 sentence explanation]
- **Next Step**: [What the PM should do next]
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
