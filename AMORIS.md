# Amoris — AI Agency Reference

## What is Amoris

Amoris is an Indian AI agency that builds and deploys **named AI employees** for businesses. Not generic "AI solutions" — specific, scoped agents with defined roles, deployed in 3–4 weeks, operating 24/7.

Founded and run by Praveen Shahi. India-built, globally deployable. Target markets: India, Southeast Asia, Middle East.

---

## The Product Catalogue

### 18 AI Employees across 5 divisions

**Voice (4)**
- AI Receptionist — answers calls, books appointments, 6 languages
- AI Booking Assistant — inbound scheduling and confirmations
- AI Voice Sales Agent — outbound lead calling and qualification
- AI Collections Caller — payment reminders and follow-ups

**Chat (4)**
- AI WhatsApp Assistant — orders, support, payments on WhatsApp
- AI Support Assistant — website/chat support, 80% query resolution
- AI Lead Qualifier — instant inbound lead scoring
- AI Social Responder — Instagram DM and social inbox automation

**Knowledge (4)**
- AI Company Brain — company-wide knowledge base, SOPs, policies
- AI Document Analyst — contract and document intelligence
- AI Help Desk — internal IT/HR helpdesk
- AI Compliance Assistant — regulatory and compliance Q&A

**Sales (3)**
- AI Prospector — lead research and list building
- AI Outreach Rep — personalised outreach sequences
- AI Sales Coordinator — CRM updates, pipeline management

**Operations (3)**
- AI Business Analyst — reporting and data analysis
- AI Back-Office Clerk — invoice data entry, document processing
- AI Recruiter — JD writing, screening, scheduling

### Flagship: AIOS (AI Operating System)
All 18 employees with shared memory, cross-agent workflows, one command centre. Custom-scoped per company size.

---

## Pricing Model

- **Chat agents**: ₹20k–50k setup (simple, bounded scope)
- **Voice / Knowledge / Sales / Operations**: Custom pricing (scoped on audit call)
- **AIOS**: Custom (full team deployment)
- Structure: one-time setup fee + optional monthly support retainer
- No "contact for pricing" black holes — clear number given on audit call

---

## Tech Stack

- **Website**: Astro 4.15.0, static output, deployed to GCP VM `34.61.195.181` at `/var/www/amoris/`
- **Design tokens**: `--bg: #0A0A0B`, `--gold: #F0A824`, `--font-display: 'Space Grotesk'`
- **CSS**: `public/styles/tokens.css` (NOT src/styles — Astro serves from public/)
- **Layout**: `src/layouts/Base.astro` — all global nav, footer, scripts
- **Agent pages**: `src/components/AgentPage.astro`
- **CTA component**: `src/components/BookAuditCTA.astro`
- **GitHub repo**: `praveenshahi/amorisaiagency` (new site code only)
- **Deploy command**: `scp -i ~/.ssh/google_compute_engine -r dist/. amorisprana@34.61.195.181:/var/www/amoris/`
- **DO NOT touch**: `/intel-echo/` and `/intel-echo-gtm/` directories on the server

---

## Key URLs

- Live site: `https://amoris.in`
- GitHub: `https://github.com/praveenshahi/amorisaiagency`
- Audit booking: `https://amoris.in/contact`
- WhatsApp: `https://wa.me/919100933191`

---

## Brand Voice

- Direct, numbers-first
- No "passionate about AI" language
- Active voice
- Specificity over cleverness: "AI Receptionist answers calls in 6 languages" not "AI-powered communication solution"

---

## Products Built by Amoris (separate from the agency site)

- **Intel Echo** — reasoning observability tool for AI agents (`/intel-echo/`)
- **Intel Echo GTM** — GTM messaging loop tool (`/intel-echo-gtm/`)
- Both live on the same server, different paths, must never be overwritten by site deploys

---

## Workflow Notes

- Always edit `src/` files, then `npm run build`, then SCP `dist/.` to server
- **CSS edits go to `public/styles/tokens.css`** — this is the file Astro serves directly
- Verify deploy: `curl -s https://amoris.in/styles/tokens.css | grep "keyword"`
- SSH key: `~/.ssh/google_compute_engine`
