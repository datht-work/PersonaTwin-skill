# Enterprise Deployment Guide

PersonaTwin is designed to be easily deployed securely within enterprise environments. 

## 1. LLM Provider Setup (Zero Retention)

For enterprise usage, we strongly recommend using LLM providers that guarantee zero data retention (i.e., they do not use your data for training).
- **Azure OpenAI**: Deploy an instance in your VNet.
- **Anthropic via AWS Bedrock**: Secure, private endpoint integration.
- **Google Cloud Vertex AI**: Ensures enterprise-grade data governance.

## 2. PII Redaction

Before submitting interview transcripts to `@summarize` or `@learning-log`, implement a PII redaction layer.
- Mask customer names, emails, phone numbers.
- Strip internal project codenames if strictly confidential.
You can use lightweight open-source NLP libraries (like Presidio) to filter the input before it hits the PersonaTwin prompt.

## 3. On-Premises & Open-Source LLMs

If you have strict data locality requirements, you can run PersonaTwin entirely on-premise using open-weights models (e.g., Llama 3 70B, Mixtral) hosted via vLLM or Ollama. 
Simply point your `PROVIDER` in the CLI or Agent setup to your local API base URL.

## SOC2 Compliance Checklist

- [ ] Ensure API keys are stored in a secure secret manager (e.g., HashiCorp Vault, AWS Secrets Manager).
- [ ] Confirm LLM vendor agreement includes a non-training clause.
- [ ] Enable audit logging on the infrastructure running the PersonaTwin CLI or agent.
- [ ] Implement a data-masking middleware for user inputs if dealing with healthcare or financial data.
