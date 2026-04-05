---
description: Generate a Mom Test-compliant interview plan for the active persona
---

# `/interview-plan` Workflow

Use this workflow to auto-generate a ready-to-use interview plan for your active persona.

## Prerequisites

- An **Active Persona** must exist. Run `/build-persona` first.

## Steps

1. Ensure you have an active persona:

   > `@build-persona [segment]`

2. Generate the interview plan:

   > `@interview-plan`

3. PersonaTwin outputs:

   **5 Mom Test–Compliant Questions** — each structured around:
   - Past behavior (not future hypotheticals)
   - Status quo (what they're doing today)
   - Pain depth (how much it costs them)
   - Commitment signals (have they already invested in solving it?)

   **Commitment Ask Options** (choose ONE for end of interview):
   - Time: Schedule a 15-min trial with real data
   - Money: Ask for deposit / pre-order
   - Reputation: Ask for a warm intro

   **Questions to Avoid** — common violations rewritten as valid alternatives

   **Pre-Interview Reminders** — behavioral rules for the interviewer

4. Use this plan in your actual customer interview

5. After the interview, run `@learning-log` to structure your findings

## Tips

- Customize by adding context: `@interview-plan focus on pricing pain`
- Run `@coach` on your own questions first, then compare with `@interview-plan` output
- Use this alongside `@dig-deeper` if follow-up interviews are needed
