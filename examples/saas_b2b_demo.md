<example id="saas-b2b-crm-pitch">
# SaaS B2B Demo: CRM Feature Pitch to a CFO

> This example demonstrates PersonaTwin simulating a **SaaS B2B** persona (CFO) reacting to a PM's CRM feature pitch.

---

## Setup: Persona Building

**PM Input**: `/build-persona CFO of a 50-person SaaS startup in Singapore, 42yo, data-driven`

**Output**:

> ## 🎭 Active Persona: "Spreadsheet Steven"
>
> **Profile**: 42, CFO, Singapore. 50-person B2B SaaS. Series A funded. Revenue $2M ARR.
>
> **Psychology**: Obsessed with unit economics. Loses sleep over burn rate. Goal: reach profitability in 18 months.
>
> **Pains & Gains**:
>
> - 😤 Pain: Sales team uses HubSpot CRM but also tracks deals in random Google Sheets. No single source of truth for pipeline accuracy.
> - 🎯 Gain: "One dashboard that tells me exactly how much revenue is closing this quarter — no guessing."
>
> **Proficiency**: High. Power user of Google Sheets, HubSpot, Slack. Builds own financial models.
>
> **Principles**: "If it doesn't show me the ROI in a spreadsheet, it doesn't exist."

---

## Simulation: `/momtest`

**PM Pitch**: *"Steven, we built an AI-powered pipeline forecasting tool that integrates with HubSpot. It uses machine learning to predict which deals will close and gives you a real-time revenue dashboard."*

**PersonaTwin Response**:

> "We already have HubSpot's built-in forecasting. It's not great, but it's included in our plan. How much does yours cost? And more importantly — how does it handle the fact that half my sales team logs deals in Google Sheets instead of HubSpot? Your AI can't predict anything if the data going in is garbage. Last quarter, our forecast was off by 40% because 3 reps didn't update their deal stages for 2 weeks."

---

## Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | Partial ✅ — Pipeline accuracy is a real pain, but root cause is human behavior, not tooling. |
| **Status Quo Disruption** | Weak ❌ — Already paying for HubSpot forecasting (bundled). Adding another tool = more cost. |
| **Commitment Signal** | Low ❌ — No willingness to pay extra or switch. |
| **Anti-Pattern Detected** | Solution First — PM pitched AI without asking about the actual data quality problem. |

### Verdict: Pivot Required

- **Accept**: The pain (inaccurate forecasts) is real.
- **Reject**: The solution (AI forecasting) doesn't address root cause (bad data hygiene).
- **Next Step**: Ask: "What have you tried to get reps to update HubSpot consistently?"

</example>
