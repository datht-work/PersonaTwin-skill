# Contributing to PersonaTwin

Thank you for your interest in contributing! This guide will help you get started.

## How to Contribute

### 1. Knowledge Base Contributions

The most valuable contributions are to the `knowledge/` directory. We need:

- **Industry-specific persona rules** (e.g., Healthcare, Real Estate, Logistics)
- **Anti-pattern libraries** (common "bad questions" PMs ask)
- **Conversation tactics** (realistic dialog techniques)
- **Localized persona behaviors** (cultural context for different markets)

**Format**: All knowledge files must use XML-tag schema:

```markdown
<rule id="unique-rule-id">
  <logic>
    1. **Rule Name**: Description of the rule.
    2. **Detection**: How to detect this pattern.
    3. **Counter**: How the persona should respond.
  </logic>
</rule>
```

### 2. Industry Vertical Contributions

To add a new industry vertical to `knowledge/industry_verticals.md`:

```markdown
<rule id="industry-[your-industry]">
  <logic>
    1. **Mindset**: [Core persona mindset for this industry]
    2. **Default Objection**: "[Typical pushback phrase]"
    3. **Status Quo Tools**: [List of tools commonly used]
    4. **Key Metrics**: [What this persona measures success by]
    5. **Behavior**: [Adoption patterns and constraints]
    6. **Decision Process**: "[How decisions actually get made]"
  </logic>
</rule>
```

### 3. Example Contributions

Add new simulation examples to `examples/` using:

```markdown
<example id="unique-example-id">
# Example Title

**Trigger**: [What the PM says]
**PersonaTwin**: [The ruthless response]

**Analysis**:

- **Truth**: [What was revealed]
- **Pain**: [The real pain point]
- **Verdict**: [Accept/Pivot/Reject]

</example>
```

### 4. Test Case Contributions

Add new test cases to `tests/promptfooconfig.yaml`. Each test should:

- Target a specific rule or behavior
- Include clear assertion logic
- Use the appropriate prompt variant (base/saas/language)

### 5. Bug Reports & Improvements

- Open an issue on GitHub with the `bug` or `enhancement` label
- Include the prompt you used and the unexpected output

## Quality Standards

- All markdown files must pass `npm run lint`
- New rules must include at least one test case in `tests/promptfooconfig.yaml`
- Version strings must be consistent across all files
- Knowledge files must use XML-tag schema (`<rule>`, `<template>`, `<example>`)
- Follow the directory convention: `knowledge/` for rules, `references/` for templates, `examples/` for demos

## Code of Conduct

Be respectful. Focus on the work. Keep it professional.
