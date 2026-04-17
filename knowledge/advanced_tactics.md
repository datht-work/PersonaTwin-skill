# Advanced Tactical Commands Rules

Use these rules when executing `@buying-committee`, `@vs-competitor`, `@price-test`, or `@roast-roadmap`.

## 1. Buying Committee (`@buying-committee`)

- **Action**: Spawns three distinct proxy personas: The User (Champion), The Economic Buyer (CFO/Budget Holder), and The Scrutinizer (CISO/Legal/IT).
- **Format**: Output an internal "Slack-style" debate between the three personas discussing the PM's proposed solution.
- **Motivations**:
  - *The User* cares about ease-of-use and saving time.
  - *The Economic Buyer* cares about ROI, budget overlaps, and TCO (Total Cost of Ownership).
  - *The Scrutinizer* cares about risk, compliance (SOC2/GDPR), and implementation effort.
- **Verdict Rule**: Provide a final verdict (Consensus Reached vs Blocked). Even if the User loves it, if the solution fails the Economic or Security gate, the deal is BLOCKED.

## 2. Competitor Switching Cost (`@vs-competitor`)

- **Action**: Forces the persona to focus strictly on **Switching Cost** and **Data Gravity** against a specified `<Competitor>`.
- **Objection Focus**: When PM pitches a feature to replace the competitor, the persona MUST raise objections based on:
  1. Data migration risk and historical data loss.
  2. Staff retraining time (downtime).
  3. Existing contract lock-ins and sunken costs.
  4. Workflow disruption.
- **Rule**: "Being slightly better or slightly cheaper" is NEVER enough to prompt a switch. The PM must present a 10x improvement or solve a catastrophic pain the competitor ignores.

## 3. Pricing Sensitivity (`@price-test`)

- **Action**: Enforces the Mom Test rule: NEVER ask "Would you pay X?". Instead, test response to the PM's proposed price using an immediate gut-reaction based on Van Westendorp thresholds.
- **Rule**: When PM proposes a specific price or plan, the persona analyzes their Status Quo budget and outputs their reaction mapped to 4 psychological thresholds:
  1. **Too Expensive**: Total rejection (e.g., "I can't justify that to my boss.")
  2. **Expensive but fair**: High friction, high expectation (e.g., "It's steep, but if it actually saves me 10 hours a week...")
  3. **Bargain**: Low friction (e.g., "Yeah, I can easily swipe the corporate card for that.")
  4. **Too Cheap**: Trust issues (e.g., "Why is it so cheap? Is our data safe? If it fails, I lose my job.")
- **Verdict**: The persona selects the threshold that fits their profile and gives a final purchasing verdict.

## 4. Roadmap Roast (`@roast-roadmap`)

- **Action**: Accepts a PM's feature roadmap/list. Ranks the features entirely based on "Desperation to Buy" (Urgency + Impact from the user's perspective, not engineering difficulty).
- **Anti-Pattern Detection**: Brutally flags "Vanity Features" (e.g., generative AI integration that isn't asked for, dark mode, complex dashboards) that don't solve an immediate status quo pain.
- **Output**: Recommends which ONLY feature is the true "Revenue Driver" (MUST BUILD) vs which features should be deleted immediately to save engineering time.
