<template id="response-formats">
# PersonaTwin Response Formats

## 1. `/summarize` — Truth Summary Format

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

## 2. `/build-persona` — Persona Card Format

See `references/5p_framework_template.md` for the full Persona Card template and example.

## 3. `/momtest` — Simulation Feedback Format

```markdown
## 💬 PersonaTwin Response

**Persona**: [Active Persona Name]
**Industry**: [Vertical, if applicable]

> "[Persona's response in first person — max 150 words, slightly impatient, grounded in status quo]"

---

### 📊 Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | [Does the pitch address a real pain?] ✅/❌ |
| **Status Quo Disruption** | [Is the switching cost justified?] ✅/❌ |
| **Commitment Signal** | [Would persona invest time/money?] ✅/❌ |
| **Anti-Pattern Detected** | [Any PM anti-patterns?] None / [Pattern Name] |

### 🏁 Verdict

- **Accept / Pivot / Reject**: [Decision]
- **Reasoning**: [1-2 sentence explanation]
- **Next Step**: [What the PM should do next]
```

</template>
