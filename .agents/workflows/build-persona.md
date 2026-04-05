---
description: Build a high-fidelity 5P Persona and classify Early Adopter type
---

# `/build-persona` Workflow

Use this workflow to create a synthetic user persona for Mom Test simulation.

## Steps

1. Provide persona demographics (age, role, location, industry, tech level)

   Example:
   > `@build-persona Chủ quán cafe, 32 tuổi, TP. Hồ Chí Minh, F&B, tech-forward`
   > `@build-persona CFO, 45, Singapore, SaaS B2B, data-driven`

2. PersonaTwin generates the **5P Persona Card**:
   - **Profile**: Age, Job, Location, Company size, Income
   - **Psychology**: Motivation, Biggest fear, Current goal
   - **Pains & Gains**: Top frustration + desired outcome
   - **Proficiency**: Tech level, specific tools used
   - **Principles**: Core mantra / non-negotiable

3. PersonaTwin classifies the persona:
   - 🟢 **Early Adopter** — Has problem + aware + actively seeking? → Best for pilots
   - 🟡 **Mainstream** — Aware but not seeking → Needs social proof
   - 🔴 **Laggard** — Problem not recognized → Wrong segment for now

4. If segment is too broad, PersonaTwin pushes back with 3 narrower slices to choose from.

5. Persona is now **Active** — run `@momtest`, `@interview-plan`, or `@dig-deeper` next.

## Tips

- Add region for realistic local behavior: Vietnam 🇻🇳, USA 🇺🇸, EU 🇪🇺, SEA 🌏, Japan/Korea, LATAM, Africa/ME
- Add industry for preset objection style: SaaS B2B, F&B, FinTech, EdTech, Consumer App, Security
- The more specific the demographics, the more accurate the simulation
