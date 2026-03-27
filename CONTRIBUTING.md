# Contributing to PersonaTwin

Thank you for your interest in contributing! This guide will help you get started.

## How to Contribute

### 1. Knowledge Base Contributions

The most valuable contributions are to the `knowledge/` directory. We need:

- **Industry-specific persona rules** (e.g., SaaS, FinTech, Healthcare)
- **Anti-pattern libraries** (common "bad questions" PMs ask)
- **Localized persona behaviors** (cultural context for different markets)

**Format**: All knowledge files must use XML-tag schema:

```markdown
<rule id="unique-rule-id">
  <logic>
    1. **Rule Name**: Description of the rule.
  </logic>
</rule>
```

### 2. Example Contributions

Add new simulation examples to `examples/` using:

```markdown
<example id="unique-example-id">
# Example Title

**Trigger**: [What the PM says]
**PersonaTwin**: [The ruthless response]

**Analysis**:

- **Truth**: [What was revealed]
- **Pain**: [The real pain point]
- **Verdict**: [Accept/Reject]

</example>
```

### 3. Bug Reports & Improvements

- Open an issue on GitHub with the `bug` or `enhancement` label
- Include the prompt you used and the unexpected output

## Quality Standards

- All markdown files must pass `npm run lint`
- New rules must include at least one test case in `tests/promptfooconfig.yaml`
- Version strings must be consistent across all files

## Code of Conduct

Be respectful. Focus on the work. Keep it professional.
