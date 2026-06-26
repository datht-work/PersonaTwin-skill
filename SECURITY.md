# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within PersonaTwin, please send an e-mail to the maintainers rather than creating a public issue. We will review and address vulnerabilities promptly.

## Data Handling & PII

PersonaTwin operates as an LLM prompt/skill. It does not store or process data itself, but the inputs you provide will be sent to the configured LLM provider (e.g., OpenAI, Anthropic). 

**IMPORTANT**: Do not send Personally Identifiable Information (PII), sensitive customer data, or internal trade secrets into the prompt unless you are using an enterprise LLM agreement with zero data retention. See our Enterprise Deployment guide for on-prem or secure deployment strategies.
