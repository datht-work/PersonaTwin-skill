<example id="coach-and-dig-deeper-demo">
# Phase 2 Demo: @coach + @dig-deeper Commands

> This example shows how to use the two new Phase 2 commands: `@coach` to prepare better
> interview questions BEFORE talking to customers, and `@dig-deeper` to excavate root cause
> AFTER a pain signal surfaces in `@momtest`.

---

## Part 1: `@coach` — Grading Interview Questions

**Context**: A PM is building a loyalty app for F&B shops. They plan to interview cafe owners
next Tuesday and submit their planned questions for review.

**PM Input**:

```
@coach
Persona: Cafe owner, 30s, Ho Chi Minh City
My planned questions:
1. "Do you think a loyalty app would be useful for your cafe?"
2. "Would you pay for a loyalty feature if it cost $10/month?"
3. "Tell me about the last time a customer came back specifically because of a promotion you ran."
4. "What do you currently do to encourage repeat visits?"
5. "If we built a points system, would your customers use it?"
```

**PersonaTwin Coach Output**:

> ## 🎓 PersonaTwin Coach — Question Scorecard
>
> **PM's Interview Goal**: Validate demand for a loyalty app in F&B
> **Persona Context**: F&B / Vietnam
>
> ### 📋 Question Analysis
>
> | # | PM's Question | Grade | Problem | Rewrite |
> |:-:|:-------------|:-----:|:--------|:--------|
> | 1 | "Do you think a loyalty app would be useful?" | ❌ Fail | Opinion Mining + Future Tense. Invites polite "Yes." | "What do you do today to bring customers back? How often does it work?" |
> | 2 | "Would you pay $10/month for a loyalty feature?" | ❌ Fail | Hypothetical spend + Solution Pitch. Nobody knows what they'd pay until it's real. | "How much did you spend last month on anything to keep regular customers coming back?" |
> | 3 | "Tell me about the last time a customer came back because of a promotion." | ✅ Pass | Specific past behavior. Gets real data. Keep it. | — |
> | 4 | "What do you currently do to encourage repeat visits?" | ✅ Pass | Status-quo exploration. Excellent opener. | — |
> | 5 | "If we built a points system, would customers use it?" | ❌ Fail | Future Tense Trap + Solution Pitch. Neither you nor they can know this hypothetically. | "Have you ever tried any loyalty or points system before, even informally? What happened?" |
>
> ### 🔴 Critical Violations Found
>
> | Violation Type | Question # | Explanation |
> |:--------------|:----------:|:------------|
> | Opinion Mining | #1 | "Do you think..." invites validation, not truth |
> | Hypothetical Spend | #2 | People are terrible at predicting future payments |
> | Solution Pitch | #2, #5 | Describes your idea before uncovering their reality |
> | Future Tense Trap | #5 | "Would customers use it?" = zero signal |
>
> ### ✅ Your 2 Best Questions (Keep These)
>
> 1. **Q3** — "Tell me about the last time a customer came back because of a promotion." *(Past, specific, no pitch)*
> 2. **Q4** — "What do you currently do to encourage repeat visits?" *(Status quo, open-ended)*
>
> ### 💡 Suggested Opening Question
>
> > "Walk me through the last week — did any regular customers come in? How do you know they're regulars? What keeps them coming back vs the new people who never return?"
>
> ### 📌 Coach Summary
>
> - **Readiness**: ⚠️ Needs Work — 3 out of 5 questions will contaminate your data
> - **Biggest Risk**: Q2 and Q5 will generate false positive signals ("Yes I'd pay!" = meaningless)
> - **Next Step**: Replace Q1, Q2, Q5 with the rewrites above. Start every interview with Q4.

---

## Part 2: `@dig-deeper` — Root Cause Excavation

**Context**: After the `@momtest` simulation above, the persona mentioned "I lost a customer
last month because I couldn't update the price fast enough." The PM senses a strong signal
and wants to drill in.

**PM Input**: `@dig-deeper`

**PersonaTwin (Digging Round 1)**:

> "You said you lost a customer because of a price issue last month. Walk me through exactly
> what happened. What was the item? What was the price change? When did you find out you needed
> to change it?"

**PM continues**: *(simulating the persona's response)* "The price of coffee beans went up. I needed
to raise the price from 45k to 55k VND but I forgot to update it on Grab and ShopeeFood."

**PersonaTwin (Digging Round 2)**:

> "So you knew the price needed to change — but updating it on Grab and ShopeeFood takes extra
> steps. How long does that update process take? What exactly are the steps?"

**PM continues**: "It takes about 15-20 minutes for each platform. I have to log in, find the item,
edit the price, save. I have 3 platforms. So 45-60 minutes total."

**PersonaTwin (Digging Round 3)**:

> "45-60 minutes for a price change. How often do your input costs change in a quarter?
> If coffee beans spike, do you just eat the loss or close the app for the day?"

**PersonaTwin — Root Cause Summary**:

> ## 🔬 PersonaTwin — Root Cause Excavation
>
> **Pain Signal**: "Lost a customer because I couldn't update the price fast enough"
>
> ### 🏁 Root Cause Summary
>
> | Layer | Finding |
> |:------|:--------|
> | **Surface complaint** | "It's hard to update prices" |
> | **Real behavior** | Manually logs into 3 delivery platforms separately; 45-60 min per price update |
> | **Root cause** | No unified channel for price sync — 3 separate logins, 3 separate processes |
> | **Workaround they use** | Delay updates; sometimes run at a loss for 1-2 days until finding time |
> | **Cost of inaction** | Revenue loss when costs spike + potential delivery platform penalties for price inconsistency |
>
> ### 💡 PM Implication
>
> - **Problem worth solving?**: ✅ Yes — ~60 min/update × cost spikes = real, recurring, painful loss
> - **Who suffers most?**: Multi-platform F&B owners in Vietnam (Grab + ShopeeFood + own QR)
> - **Prototype test suggestion**: Show them a single input field that syncs price to all 3 platforms.
>   Time them doing the update. If they say "Oh wow, 10 seconds" — you're onto something real.

</example>
