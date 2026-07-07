# Amoris SEO + Analytics Checklist

Last updated: 2026-07-07

---

## Code tasks — DONE ✅

- [x] `@astrojs/sitemap` installed and generating `sitemap-index.xml` at `https://amoris.in/sitemap-index.xml`
- [x] `public/robots.txt` — allows all crawlers
- [x] `public/llms.txt` — AI crawler-friendly summary with updated pricing and agent names
- [x] BreadcrumbList JSON-LD auto-generated in `Base.astro` from URL path
- [x] WebSite + Organization JSON-LD in `Base.astro` head
- [x] FAQPage JSON-LD on all agent pages via `AgentPage.astro`
- [x] GA4 placeholder script in `Base.astro` — replace `G-XXXXXXXXXX` with real ID
- [x] Microsoft Clarity placeholder script in `Base.astro` — replace `XXXXXXXXXX` with real ID
- [x] `<title>` and `<meta description>` set per page from frontmatter
- [x] OG meta tags (`og:title`, `og:description`, `og:url`) in `Base.astro`

---

## Code tasks — PENDING ⏳

- [ ] Replace `G-XXXXXXXXXX` in `src/layouts/Base.astro` with real GA4 Measurement ID
  - Get ID from: https://analytics.google.com → Admin → Data Streams → Web stream → Measurement ID
  - Line: search for `G-XXXXXXXXXX` in Base.astro

- [ ] Replace `XXXXXXXXXX` in `src/layouts/Base.astro` with real Clarity Project ID
  - Get ID from: https://clarity.microsoft.com → your project → Settings → Overview → Project ID
  - Line: search for Clarity script block in Base.astro

- [ ] Add OG image (`/og/og-default.png`) to `public/og/` — 1200×630px, dark gold brand image
  - Wired up in Base.astro already as `<meta property="og:image">` but needs the actual file

---

## Your manual tasks — in order

### 1. Google Analytics 4
1. Go to https://analytics.google.com
2. Create Account → Account name: `Amoris` → Property name: `amoris.in`
3. Platform: Web → URL: `amoris.in` → Stream name: `Amoris Website`
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Tell Claude: "GA4 ID is G-XXXXXXXXXX" → I'll update Base.astro, build, deploy

### 2. Microsoft Clarity
1. Go to https://clarity.microsoft.com
2. New Project → Name: `Amoris` → URL: `https://amoris.in`
3. Copy the **Project ID** (10-char alphanumeric shown on overview page)
4. Tell Claude: "Clarity ID is XXXXXXXXXX" → I'll update Base.astro, build, deploy

### 3. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → **URL prefix** → `https://amoris.in`
3. Verify via **DNS TXT record** (easiest if you have domain access):
   - Copy the TXT record value shown
   - Add it in your domain registrar (wherever amoris.in is registered) → DNS → TXT record
   - Value: `google-site-verification=XXXX`
   - Wait 10–15 min → click Verify
4. After verified: **Sitemaps** → Add sitemap → `https://amoris.in/sitemap-index.xml` → Submit

### 4. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Import from Google Search Console → Sign in with Google → Select amoris.in
3. Done — Bing imports all your GSC data and submits sitemap automatically

### 5. Google Business Profile *(optional but good for local India SEO)*
1. Go to https://business.google.com
2. Add business → Name: `Amoris` → Category: `Software company` or `Artificial intelligence company`
3. Website: `https://amoris.in` → Phone: your number → Service area: India
4. Verify (usually postcard or phone call)

### 6. AI directory listings *(AEO — helps ChatGPT/Perplexity cite Amoris)*
- https://theresanaiforthat.com → Submit tool → Category: `Business`
- https://futurepedia.io → Submit → Category: `AI Agents` or `Automation`
- https://www.producthunt.com → Launch Amoris as a product
- https://www.g2.com → Create free listing (helps B2B trust signals)

---

## Verification commands (run after each deploy)

```bash
# Site live
curl -s -o /dev/null -w "%{http_code}" https://amoris.in/

# Sitemap live
curl -s -o /dev/null -w "%{http_code}" https://amoris.in/sitemap-index.xml

# Intel Echo not overwritten
curl -s -o /dev/null -w "%{http_code}" https://amoris.in/intel-echo/

# llms.txt updated
curl -s https://amoris.in/llms.txt | head -3

# GA4 ID wired (after replacement)
curl -s https://amoris.in/ | grep "G-"

# FAQPage schema on an agent page
curl -s https://amoris.in/agents/voice/ai-receptionist/ | grep "FAQPage"
```

---

## What's auto-handled by the site

- Sitemap regenerates every build — all 53 pages included
- BreadcrumbList JSON-LD on every page automatically
- FAQPage JSON-LD on every agent page (from frontmatter `faqs:` field)
- `llms.txt` served at `/llms.txt` for AI crawlers (ChatGPT, Perplexity, Gemini)
- `robots.txt` allows all crawlers including Googlebot
