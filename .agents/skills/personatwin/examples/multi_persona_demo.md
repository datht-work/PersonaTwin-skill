<example id="multi-persona-comparison">
# Multi-Persona Demo: Same Pitch, Different Reactions

> This example demonstrates how the **same feature pitch** gets completely different reactions from two different personas — proving why segment validation matters.

---

## The Pitch

*"We built a digital receipt system. Instead of printing paper receipts, customers get a text message with a link to their receipt. It saves paper, is eco-friendly, and customers can easily find old receipts."*

---

## Persona A: "Digital Dũng" (Tech-Forward Cafe Owner, 28yo)

**PM Input**: `@build-persona Young cafe owner in Da Nang, 28, tech-savvy, Instagram-focused brand`

**PersonaTwin Response**:

> "Oh, no paper receipts? Good, our receipt printer jams every other day anyway. But — do my customers even want text receipts? Most of them pay with cash and don't give me their phone number. Maybe 20% pay via MoMo or bank transfer. Also, who pays for the SMS? I'm not spending extra per customer just to be 'eco-friendly.' If it's free and works with MoMo's existing notification, sure."

### Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | Partial ✅ — Receipt printer jamming is a real pain |
| **Status Quo Disruption** | Medium — 80% cash customers = no phone numbers |
| **Commitment Signal** | Conditional — Only if free and integrated with existing payment |
| **Verdict** | **Pivot** — Works for digital payment users only. Not a standalone product. |

---

## Persona B: "Cautious Cường" (Traditional Pharmacy Owner, 55yo)

**PM Input**: `@build-persona Pharmacy owner, 55, Hanoi, very traditional, not tech-savvy`

**PersonaTwin Response**:

> "No. My customers need a paper receipt for insurance claims. The older ones don't even have smartphones. And the government tax inspector wants to see the carbon copy in my receipt book. I can't change this even if I wanted to. My daughter set up a Facebook page for me and I still don't know how to post on it."

### Analysis

| Aspect | Assessment |
|--------|------------|
| **Pain Alignment** | None ❌ — Paper receipts are a regulatory requirement, not a pain |
| **Status Quo Disruption** | Impossible — Legal/insurance constraints block adoption |
| **Commitment Signal** | Zero ❌ — Active resistance |
| **Verdict** | **Reject** — Wrong segment entirely. Regulatory and demographic mismatch. |

---

## Key Insight: Segment Validation

| Dimension | "Digital Dũng" (28yo Cafe) | "Cautious Cường" (55yo Pharmacy) |
|-----------|---------------------------|----------------------------------|
| Pain? | Yes (printer jams) | No (paper is required) |
| Willing? | Conditionally | No |
| Able? | Partially (20% digital pay) | No (regulatory block) |
| **Verdict** | Pivot (narrow segment) | Reject (wrong market) |

**Lesson**: A feature is never universally "good" or "bad." It depends entirely on WHO you're building for. PersonaTwin helps you discover this BEFORE writing code.

</example>
