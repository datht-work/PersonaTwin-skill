---
description: Grade your planned interview questions vs Mom Test rules and get rewrites
---

# `/coach` Workflow

Use this workflow **before** real customer interviews to catch biased questions and fix them.

## Steps

1. Build your active persona first (or specify target segment inline):

   > `@build-persona [segment]` ← run first if not set

2. Submit your planned interview questions:

   ```
   @coach
   Persona: [target segment description]
   My planned questions:
   1. [Question 1]
   2. [Question 2]
   3. [Question 3]
   ```

3. PersonaTwin grades each question as:
   - ✅ **Pass** — Valid Mom Test question
   - ⚠️ **Risky** — May generate fluff or generic answers
   - ❌ **Fail** — Violates Mom Test rules

4. For each ❌ Fail question, PersonaTwin explains the violation and rewrites it

   **Common violations detected:**
   - `"Would you use..."` → Future Tense Trap ❌
   - `"Do you like..."` → Opinion Mining ❌
   - `"If we built X, would you..."` → Solution Pitch + Future Tense ❌
   - `"How often do you..."` (no recent anchor) → Generic ⚠️

5. Review the **Coach Summary**:
   - Readiness Rating: **Not Ready** / **Needs Work** / **Ready to Interview**
   - Biggest Risk in your current question set
   - Suggested opening question

## After Coaching

- Revise your questions based on the feedback
- Resubmit with `@coach` to confirm all pass
- Then conduct the real interview
- Debrief with `@learning-log` after the session

## See Also

- [coach_dig_deeper_demo.md](../skills/personatwin/examples/coach_dig_deeper_demo.md) — Full worked example
