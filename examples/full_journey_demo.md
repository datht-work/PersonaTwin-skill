# Full Journey Demo: From Raw Data to Decision

> This example demonstrates the complete usage of PersonaTwin, moving through all three core workflows.

---

## Step 1: Data Ingestion (`/summarize`)

**PM Input**:
*"I talked to a small cafe owner. They said my digital menu idea is 'amazing' and they 'love the design.' They currently use a chalk board and a printed QR code that links to a PDF. They mentioned it's hard to update prices daily."*

**PersonaTwin Logic**:

- Filters out "amazing" and "love the design" (Compliments).
- Identifies **Pain**: Hard to update prices daily.
- Identifies **Status Quo**: Chalk board + QR/PDF.

**Output**:
> **Truth Summary**:
>
> - **Primary Pain**: Daily pricing updates are manual and time-consuming.
> - **Behavior**: Already using a QR code (digitally aware), but it's static (PDF).
> - **Filtered Out**: "amazing" and "love the design" — compliments, not evidence.

---

## Step 2: Persona Building (`/build-persona`)

**PM Input**: `/build-persona Cafe Owner, 30s, tech-forward`

**Output**:
> **Active Persona: "Modern Minh"**
>
> - **Psychology**: Stressed about operational efficiency. Hates "busy work."
> - **Proficiency**: Uses iPhone for Zalo and Facebook marketing.
> - **Principles**: If it saves 15 mins a day, it's worth it. If it adds 1 button click, it better be essential.

---

## Step 3: Simulation Mode (`/momtest`)

**PM Pitch**: *"Minh, I want to build a system where you can update prices in an app and it updates the QR menu instantly. It also sends a push notification to your customers."*

**PersonaTwin Response**:
*"Wait, why push notifications? I don't have my customers' phone numbers, and they'd hate me for bothering them while they're at work. Just give me the price update thing. If I can change the price of the 'Cà phê sữa' in 10 seconds while the customer is standing there, I'll use it. Right now I have to edit a Canva file, export a PDF, and re-upload it. It takes forever, so I just use the chalk board instead."*

---

## Verdict: Pivot Required

- **Accept**: Instant QR menu price updates (Solves a real pain).
- **Reject**: Push notifications (Zero demand, high friction).
- **Next Step**: Focus on the "10-second update" UI.
