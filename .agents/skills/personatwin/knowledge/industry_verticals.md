<rule id="industry-saas-b2b">
  <logic>
    1. **Mindset**: CFO / Ops Manager. Every tool is evaluated as a line item.
    2. **Default Objection**: "What's the TCO? We already pay for [Salesforce/HubSpot/Slack]."
    3. **Status Quo Tools**: Salesforce, HubSpot, Google Sheets, Slack, Notion.
    4. **Key Metrics**: ROI, TCO, time-to-value, churn rate reduction.
    5. **Behavior**: Will NOT adopt unless integration with existing stack is seamless.
    6. **Switching Cost**: "Last time we switched CRM, it took 3 months and $20k in consulting."
  </logic>
</rule>

<rule id="industry-fnb-retail">
  <logic>
    1. **Mindset**: Shop owner. Cash is king. Time is measured in "customers served per hour."
    2. **Default Objection**: "I don't have time to learn new software. My staff can barely use the POS."
    3. **Status Quo Tools**: Cash register, chalk board, Zalo groups, Excel on phone, paper notebook.
    4. **Key Metrics**: Daily revenue, foot traffic, repeat customers (by face, not data).
    5. **Behavior**: Prefers tools that work offline, require zero training, and cost under $10/month.
    6. **Trust Signal**: "My neighbor's shop uses [X] and it works" > any marketing material.
  </logic>
</rule>

<rule id="industry-fintech">
  <logic>
    1. **Mindset**: Risk-averse. "If it touches money, it better not break."
    2. **Default Objection**: "Is it compliant? What happens when the audit comes?"
    3. **Status Quo Tools**: Core banking system, Excel for reconciliation, WhatsApp for approvals.
    4. **Key Metrics**: Compliance rate, error rate, audit trail completeness.
    5. **Behavior**: Will NOT try anything without seeing a SOC2/ISO cert or regulatory approval.
    6. **Decision Process**: "Even if I like it, the compliance team has to approve it. That takes 6 months."
  </logic>
</rule>

<rule id="industry-edtech">
  <logic>
    1. **Mindset**: Overworked teacher / Academic admin. "I have 40 students and 5 hours of grading tonight."
    2. **Default Objection**: "I've seen 10 apps like this. They all die after the grant money runs out."
    3. **Status Quo Tools**: Google Classroom, PowerPoint, printed worksheets, Facebook group for parents.
    4. **Key Metrics**: Student engagement, time saved on admin, parent satisfaction.
    5. **Behavior**: Will try free tools but abandons anything that adds prep time.
    6. **Cynicism**: "The last school 'innovation' was a projector that nobody uses because the bulb costs $200."
  </logic>
</rule>

<rule id="industry-consumer-app">
  <logic>
    1. **Mindset**: End user / Daily consumer. Attention span = 3 seconds. "If it's not obvious, I'm deleting it."
    2. **Default Objection**: "I already have an app for that. Why would I download another one?"
    3. **Status Quo Tools**: Instagram, TikTok, Zalo, Grab, Shopee, MoMo, built-in phone apps.
    4. **Key Metrics**: Time saved, fun factor, social proof ("Do my friends use it?"), free vs. paid.
    5. **Behavior**: Downloads on impulse, uninstalls within 48 hours if onboarding takes more than 2 taps. Will NOT create an account unless forced. Prefers "Login with Google/Facebook."
    6. **Loyalty Trigger**: "I only keep apps I use every day. If I forget about it for a week, it's gone."
    7. **Price Sensitivity**: "Pay monthly? For an app? I barely pay for Netflix. It better be free with no annoying ads."
  </logic>
</rule>

<rule id="industry-security">
  <logic>
    1. **Mindset**: CISO / IT Security Lead / Compliance Officer. "Assume breach. Trust nothing."
    2. **Default Objection**: "Where is the data stored? Who has access? Show me the SOC2 Type II report."
    3. **Status Quo Tools**: CrowdStrike, Splunk/SIEM, Okta, VPN, Microsoft Defender, internal scripts, spreadsheet-based risk registers.
    4. **Key Metrics**: Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), compliance coverage %, false positive rate, attack surface reduction.
    5. **Behavior**: Will NOT trial anything that requires admin privileges or cloud access without a full security review. Procurement cycle = 3-9 months. Needs sign-off from Legal, IT, and the board.
    6. **Trust Barrier**: "Last year we evaluated 15 vendors. We picked 1. The other 14 couldn't answer basic questions about data residency and incident response SLA."
    7. **Zero-Trust Principle**: "If your product requires us to open a port, whitelist an IP, or disable MFA for setup — we're done talking."
  </logic>
</rule>

<rule id="industry-healthcare">
  <logic>
    1. **Mindset**: Clinic owner / Hospital department head / Healthcare admin. "First do no harm. If this system goes down, a patient could be hurt."
    2. **Default Objection**: "Is it HIPAA compliant? What's the uptime guarantee? Who is liable if there's a data breach?"
    3. **Status Quo Tools**: Legacy EMR/EHR systems (Epic, Cerner), paper patient files (clinics), WhatsApp for doctor-to-nurse comms (SEA), Excel for scheduling, printed prescription pads.
    4. **Key Metrics**: Patient wait time, medication error rate, billing accuracy, bed utilization, compliance audit results.
    5. **Behavior**: Change-averse. Even if the current system is terrible, switching risks patient safety. Adoption requires clinical champions (doctors who evangelize internally) AND administrator sign-off.
    6. **Trust Barrier**: "The last software company promised to 'revolutionize care.' They went bankrupt in year two. We were stuck migrating 50,000 patient records manually."
    7. **Regulatory Sensitivity**: HIPAA (USA), PDPA (Thailand), PCIDSS for patient billing, MHLW guidelines (Japan). Compliance documentation must exist before any pilot.
    8. **Price Model Expectation**: Enterprise contract, annual billing, multi-year commitment expected. No credit card sign-ups. "We don't do freemium for clinical systems."
  </logic>
</rule>

<rule id="industry-real-estate">
  <logic>
    1. **Mindset**: Property agent / Developer sales team / Property manager. "Commission-driven. Every hour not closing is money lost."
    2. **Default Objection**: "I've tried PropTech before. It promised leads, delivered nothing. Show me a live deal that closed because of your platform."
    3. **Status Quo Tools**: Facebook/Zalo groups for listings (SEA), Excel for lead tracking, WhatsApp for client chasing, physical site visits, paper contracts, PropertyGuru/Zillow for listings.
    4. **Key Metrics**: Lead conversion rate, days on market, commission per closed deal, client follow-up speed.
    5. **Behavior**: Hyper-mobile. Does everything on phone. Will NOT use tools that require desktop-only flows. Attention span for new software = 5 minutes. If the value isn't obvious in 1 listing cycle, it's abandoned.
    6. **Trust Barrier**: "My colleague tried that app. It was great for 3 months, then they changed the pricing and we all left."
    7. **Client Relationship Core**: "This is a relationship business. My clients trust ME, not my software. Any tool that gets between me and the client relationship is a threat."
    8. **SEA-Specific**: Developer pre-sales are huge in VN/TH/PH. Agents manage multiple projects simultaneously. Commission splits with team leads create alignment problems.
  </logic>
</rule>

<rule id="industry-logistics">
  <logic>
    1. **Mindset**: Logistics ops manager / Fleet owner / Warehouse lead. "I live by the SLA. If the truck is late, I get the call at 2am."
    2. **Default Objection**: "Does it integrate with our WMS? Can it handle 10,000 SKUs? What happens at peak season when volume triples?"
    3. **Status Quo Tools**: WhatsApp for driver coordination, Excel for route planning, printed manifests, legacy TMS (SAP TM, Oracle), paper POD (proof of delivery), hand-tallied inventory.
    4. **Key Metrics**: On-time delivery rate, cost per shipment, fleet utilization %, damage rate, POD collection speed.
    5. **Behavior**: Ops-driven, not tech-driven. Will only adopt tools that reduce daily firefighting. ROI must be measurable within first 30 days. Multi-vendor workflows mean all parties must be on the same system.
    6. **Peak Season Fear**: "We ran a last-mile startup pilot during Tet. Their system crashed on Day 2. We lost 3 major clients. I will never try an 'innovative' system during peak again."
    7. **Labor Dependency**: Drivers and warehouse staff are the actual users. Any tool that adds steps for frontline workers will be abandoned or faked.
    8. **SEA Context**: Cross-border logistics (VN-TH-MY) adds customs complexity. Gig drivers vs. owned fleet creates different incentive structures.
  </logic>
</rule>

<rule id="industry-agtech">
  <logic>
    1. **Mindset**: Farm owner / Cooperative manager / Agricultural extension officer. "I plant, I harvest, I sell. Technology has to work between those three things."
    2. **Default Objection**: "Does it work without internet? My fields have zero signal. And my workers are not going to use an app in their hands while they're carrying a 30kg sack."
    3. **Status Quo Tools**: Paper log books, phone calls to market brokers, physical contracts, WhatsApp voice notes (SEA), government prescribed price boards, local cooperative announcements.
    4. **Key Metrics**: Yield per hectare, crop loss rate, market price vs. cost of production, time from harvest to sale, input cost (seed, fertilizer, water).
    5. **Behavior**: Conservative adopters. Trust only comes from government agencies, local cooperatives, or respected neighbors who've already used it. Piloting must happen on a small plot first — not the whole farm.
    6. **Connectivity Reality**: Rural connectivity is severely limited. Offline-first, SMS-compatible, or field-agent-mediated tools only. Battery life and device durability matter.
    7. **Seasonal Risk Aversion**: "If this app tells me to plant differently and the crop fails, I lose my entire income for the year. I cannot afford a mistake at scale."
    8. **SEA/LATAM Context**: Small to medium family farms dominate. Cooperative structures are the trust gatekeepers. Penetrating a cooperative = access to hundreds of farmers. Bypassing it = zero access.
  </logic>
</rule>
