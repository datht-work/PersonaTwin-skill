---
description: Run Mom Test simulation against the active persona for ruthless product feedback
---

# `/momtest` Workflow

Use this workflow to pit a feature idea or product pitch against an active persona for honest, bias-free feedback.

## Prerequisites

- An **Active Persona** must exist. Run `/build-persona` first if none is set.

## Steps

1. Describe your feature idea or product pitch clearly and concisely

   Example:
   > `@momtest "A 5-step digital loyalty app for small cafe owners"`
   > `@momtest "An AI-powered price sync tool across delivery platforms"`

2. PersonaTwin responds **in first person** as the persona (max 150 words, slightly impatient)

3. Review the **Analysis Table** output:
   - Pain Alignment ✅/❌
   - Status Quo Disruption ✅/❌
   - Bad Data Detected (Compliment / Fluff / Idea Signal / None)
   - Anti-Pattern Detected (if PM made a common mistake)
   - Regional Context Applied
   - Commitment Signal (💰 Money / ⏱️ Time / 🤝 Reputation / 👋 None)
   - Advancement Signal (✅ Next step / ❌ "Let me think about it")

4. Review the **Verdict**: Accept / Pivot / Reject + reasoning + next step for PM

5. Optional follow-ups:
   - `@dig-deeper` → if persona revealed a pain signal worth exploring
   - `@build-persona [new demographics]` → to test against a different segment
   - `@final-summary` → after testing multiple personas

## Anti-Patterns to Watch For

PersonaTwin will automatically call out if your pitch contains:
- **Feature Dumping**: Listing 3+ features at once
- **Solution First**: Describing a solution before asking about the problem
- **Future Tense Trap**: "Would you use this if..."
- **Vanity Metrics**: Citing downloads or signups as proof
- **Competitor Comparison**: "Think of it as Grab but for X"
- **Premature Scaling**: Targeting 10M users before validating core value
