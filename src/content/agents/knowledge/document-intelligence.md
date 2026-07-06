---
title: "Document Intelligence Agent — Extract, Compare & Summarise at Scale | Amoris"
description: "An AI agent that reads contracts, invoices, reports, and documents — extracts key data, flags anomalies, and answers questions across hundreds of files."
name: "Document Intelligence Agent"
slug: "document-intelligence"
category: "knowledge"
setupINR: "₹2.5L–4.5L"
retainerINR: "₹30k/mo"
setupUSD: "$5k–9k"
retainerUSD: "$600/mo"
builtFor: ["Legal & CA firms", "Finance teams", "Real estate", "Procurement", "Healthcare admin"]
languages: ["Hindi", "English"]
integrations: ["Google Drive", "SharePoint", "Zoho Books", "Tally", "Salesforce"]
faqs:
  - q: "What types of documents can it process?"
    a: "Contracts (NDAs, service agreements, vendor contracts), invoices, purchase orders, financial reports, insurance policies, property documents, lab reports. Works with PDFs, Word docs, and scanned documents (with OCR)."
  - q: "Can it compare documents?"
    a: "Yes. 'Compare this NDA with our standard template and highlight deviations' is a typical use case. Outputs a list of differences with section references."
  - q: "How accurate is the data extraction?"
    a: "95–98% accuracy on structured documents (invoices, POs). 85–92% on unstructured documents (contracts, policies). All extractions include a confidence score, and low-confidence fields are flagged for human review."
  - q: "Can it flag unusual clauses in contracts?"
    a: "Yes. You define what 'unusual' means for your business (non-standard payment terms, liability caps below a threshold, IP assignment clauses). The agent flags any contract section matching your risk criteria."
  - q: "What about data security? These are sensitive documents."
    a: "Documents are processed on-premise or in your cloud environment. Nothing leaves your infrastructure. We set up the system on your GCP, AWS, or Azure account — you own the data."
---

A Document Intelligence Agent reads your contracts, invoices, and reports — extracts key fields, answers questions across document sets, flags anomalies, and compares documents against templates. What takes a paralegal 3 hours takes this agent 3 minutes. Starting at ₹2.5L setup + ₹30k/month.

## What it does

Documents are where business information gets trapped. Contracts with non-standard clauses nobody notices. Invoices with amounts that don't match POs. Reports that take 2 hours to manually summarise before every board meeting.

This agent makes document work fast:

- **Data extraction:** Pulls structured fields (vendor name, amount, due date, clause type) from unstructured documents
- **Cross-document search:** "Which of our vendor contracts have payment terms above 45 days?" — searches across 200 contracts
- **Anomaly detection:** Invoice amount doesn't match PO, delivery terms conflict with previous agreement
- **Contract comparison:** Compares submitted contracts against your standard template, highlights deviations
- **Report summarisation:** 80-page financial report → 1-page summary with key metrics highlighted
- **Q&A on your documents:** "What's the penalty clause in the TCS agreement?" — answered with source citation

## How it works

**Step 1 — Document ingestion.** Connect your Google Drive, SharePoint, or shared folder. Or upload documents directly. Agent processes and indexes on setup.

**Step 2 — Extraction rules configured.** You define what fields matter: for invoices (vendor, amount, GST, due date), for contracts (parties, duration, payment terms, liability cap).

**Step 3 — Query or batch process.** Ask a question ("what's the notice period in the Infosys contract?") or run a batch ("extract all vendor names and amounts from this month's invoices").

**Step 4 — Results with citations.** Every extraction cites the document name and page number. Low-confidence extractions flagged for human review.

**Step 5 — Alerts.** Anomaly detected (invoice 15% above PO) → Slack alert to finance team. Contract deviation → flagged in review queue.

## Languages & integrations

**Languages:** Hindi, English (document processing in any Latin-script language)

**Document sources:** Google Drive, SharePoint, Dropbox, direct uploads, email attachments

**Output destinations:** Google Sheets, Zoho Books, Excel, your ERP

**Notifications:** Slack, email for anomalies
