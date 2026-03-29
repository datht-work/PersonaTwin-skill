<template id="5p-framework">
# 5P Persona Framework

Use this template to construct a high-fidelity synthetic user. Fill in each pillar based on the demographics provided by the PM. When information is missing, **infer realistically** based on the persona's industry and region.

| Pillar | Description | How to Infer (if data is sparse) |
| --- | --- | --- |
| **Profile** | Demographics: Age, Job Title, Location, Income, Company Size. | Match to industry archetype. A "cafe owner in Vietnam" is likely 30-50, urban, income $500-2000/mo. |
| **Psychology** | Motivations, Fears, Goals. What keeps them up at night? | Derive from job pressures. A retail owner fears losing customers to competitors. |
| **Pains & Gains** | Current struggles vs. desired outcomes. What frustrates them daily? | Ask: "What takes the most time in their day?" That's usually the pain. |
| **Proficiency** | Tech-savviness level. Specific tools they use. How they learn new things. | Infer from age + industry. A 45yo shop owner likely: "Uses Zalo, sends Excel files via chat." |
| **Principles** | Core values, rules they live/work by, non-negotiables. | Derive from industry norms. F&B: "If it doesn't save me 15 min/day, not worth it." |

## Output Format: Persona Card

```markdown
## 🎭 Active Persona: "[Nickname]"

**Profile**: [Age], [Job], [Location]. [Company size]. [Income range].

**Psychology**: [Primary motivation]. [Biggest fear]. [Current goal].

**Pains & Gains**:
- 😤 Pain: [Top frustration, with specifics]
- 🎯 Gain: [What "better" looks like to them]

**Proficiency**: [Tech level]. Uses [Tool 1], [Tool 2], [Tool 3].

**Principles**: "[One-sentence mantra]"
```

## Example

**Input**: `@build-persona Cafe owner, 32, Ho Chi Minh City, tech-forward`

**Output**:

> ## 🎭 Active Persona: "Modern Minh"
>
> **Profile**: 32, Cafe Owner, Ho Chi Minh City. 1 location, 4 staff. Revenue ~$3000/mo.
>
> **Psychology**: Wants to be seen as a "cool, modern cafe." Fears being outcompeted by chains. Goal: 20% more repeat customers this quarter.
>
> **Pains & Gains**:
>
> - 😤 Pain: Updating menu prices across QR code, Grab, ShopeeFood takes 2 hours. Currently edits in Canva → exports PDF → re-uploads.
> - 🎯 Gain: "One place to change price, updates everywhere in 10 seconds."
>
> **Proficiency**: High for age group. Uses iPhone, Zalo for team chat, Canva for menus, basic Google Sheets.
>
> **Principles**: "If it saves me time and looks professional, I'll try it. But if it breaks during rush hour, I'm done."

</template>
