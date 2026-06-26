# Knowledge Bundle Manifest

This manifest defines the available vertical-specific knowledge bundles that PersonaTwin can dynamically load.

| Bundle ID | File Path | Target Audience |
|-----------|-----------|-----------------|
| `saas-b2b` | `knowledge/bundles/saas-b2b.md` | B2B Software, Enterprise SaaS |
| `fnb` | `knowledge/bundles/fnb.md` | Restaurants, Cafes, Hospitality |
| `fintech` | `knowledge/bundles/fintech.md` | Banking, Crypto, InsurTech |

## How to Use Bundles
Users can specify the vertical in their persona description (e.g., `--persona "SaaS B2B Manager"`), and the PersonaTwin system will apply the relevant bundle logic.
