/**
 * All landing-page copy lives here so we can swap in a PL translation
 * by adding a second object with the same shape and selecting on locale.
 */

export type Locale = "en" | "pl";

const en = {
  nav: {
    logoLabel: "webscan",
    langEN: "EN",
    langPL: "PL",
    login: "Log in",
  },

  hero: {
    badge: "FREE WEBSITE AUDIT · Results in 60 seconds",
    titleTop: "Your site looks fine.",
    titleBottom: "Are you sure?",
    description:
      "Enter your URL. Get a full audit — SSL, speed, SEO, mobile, security. Plain language. Real fixes.",
    bullets: [
      "Know exactly what's broken and why it matters.",
      "Get step-by-step fixes written in a way that actually makes sense.",
      "One-time payment — not another monthly subscription.",
    ],
    form: {
      label: "Your website URL",
      placeholder: "https://yourwebsite.com",
      submit: "Scan my website",
      trust: ["Free scan", "No account required", "60 seconds"],
    },
  },

  preview: {
    step1: {
      stepLabel: "Step 1",
      heading: "Enter your website",
      subhead: "We'll do the rest.",
      domain: "coffeeshop-berlin.com",
      cta: "Scan",
    },
    step2: {
      stepLabel: "Step 2",
      heading: "Scanning...",
      progressNote: "4 of 6 checks complete",
      checks: [
        { label: "SSL certificate", time: "0.4s", state: "done" },
        { label: "Page speed", time: "2.1s", state: "done" },
        { label: "Mobile responsive", time: "3.6s", state: "done" },
        { label: "SEO basics", time: "4.2s", state: "done" },
        { label: "Security headers", time: "running", state: "running" },
        { label: "Redirects & canonicals", time: "queued", state: "queued" },
      ],
    },
    step3: {
      stepLabel: "STEP 3",
      browserUrl: "webscan.co/r/coffeeshop-berlin.com",
      reportLabel: "Audit report",
      domain: "coffeeshop-berlin.com",
      meta: "Scanned just now · 6 critical checks · EN",
      statusBadge: "Needs work",
      score: 46,
      summaryTitle: "Overall health score",
      summaryBody:
        "5 issues found, 2 critical. Most of these are quick fixes — your site is losing customers right now.",
      counts: { critical: 2, warning: 3, passing: 11 },
      countLabels: { critical: "Critical", warning: "Warning", passing: "Passing" },
      issues: [
        {
          severity: "critical",
          icon: "shield-alert",
          title: "SSL certificate expires in 12 days",
          body: "Visitors will see a big red \"Not Secure\" warning.",
          badge: "Critical",
        },
        {
          severity: "critical",
          icon: "credit-card",
          title: "Checkout form blocks half of visitors",
          body: "Mixed content breaks card payments on mobile.",
          badge: "Critical",
        },
        {
          severity: "warning",
          icon: "zap",
          title: "Pages load in 4.1 seconds",
          body: "Slower than 78% of sites. Visitors leave at 3s.",
          badge: "Slow",
        },
        {
          severity: "warning",
          icon: "smartphone",
          title: "Menu overflows on iPhone screens",
          body: "60% of your visitors can't tap the booking link.",
          badge: "Mobile",
        },
        {
          severity: "seo",
          icon: "search",
          title: "Missing description on 8 pages",
          body: "Google has nothing to show in search results.",
          badge: "SEO",
        },
      ],
      fixLink: "How to fix",
    },
  },

  socialProof: {
    domainsScannedNumber: "1,200+",
    domainsScannedLabel: "domains scanned",
    criticalStat: "47% of scanned sites have critical issues",
  },

  howItWorks: {
    eyebrow: "How it works",
    titleLead: "From URL to action plan ",
    titleAccent: "in 60 seconds.",
    body: "No install. No technical setup. Enter your URL, go get a coffee, and come back for your finished report.",
    steps: [
      {
        number: "01",
        title: "Enter your website address",
        body: "Paste your domain and hit Scan. That's it.",
      },
      {
        number: "02",
        title: "We scan everything",
        body: "SSL, speed, SEO, mobile, security and redirects — analyzed using only publicly available data. No login. No server access required.",
      },
      {
        number: "03",
        title: "Get your report",
        body: "See every issue found on your site — and exactly how to fix each one.",
      },
    ],
  },

  whatWeCheck: {
    eyebrow: "What we check",
    titleLead: "Six things customers and Google ",
    titleAccent: "judge you",
    titleTail: " on.",
    body: "Plain-English findings. We translate every technical issue into \"why this matters to your business\" — so you know what to fix first, and what can wait.",
    cards: [
      {
        icon: "shield-check",
        title: "Security",
        tagline: "Whether the padlock stays green.",
        items: [
          "SSL certificate health",
          "Mixed content blocking",
          "Exposed admin paths",
        ],
        more: "+ 8 more checks",
      },
      {
        icon: "gauge",
        title: "Performance",
        tagline: "How fast visitors give up.",
        items: [
          "Core Web Vitals (LCP, INP, CLS)",
          "Image weight & format",
          "Render-blocking scripts",
        ],
        more: "+ 7 more checks",
      },
      {
        icon: "smartphone",
        title: "Mobile",
        tagline: "60–70% of your visitors.",
        items: [
          "Tap targets & legibility",
          "Viewport & horizontal scroll",
          "Mobile menu functionality",
        ],
        more: "+ 5 more checks",
      },
      {
        icon: "search",
        title: "SEO & visibility",
        tagline: "Whether Google can find you.",
        items: [
          "Title, meta, headings",
          "Structured data & sitemap",
          "Broken links & redirects",
        ],
        more: "+ 9 more checks",
      },
      {
        icon: "badge-check",
        title: "Trust & credibility",
        tagline: "Whether visitors believe you.",
        items: [
          "Contact & opening hours visible",
          "Privacy policy & cookie banner",
          "Social proof signals",
        ],
        more: "+ 6 more checks",
      },
      {
        icon: "server",
        title: "Domain & infrastructure",
        tagline: "Things that quietly break.",
        items: [
          "DNS, MX, redirect chains",
          "Email deliverability (SPF/DKIM/DMARC)",
          "Server response & uptime",
        ],
        more: "+ 4 more checks",
      },
    ],
  },

  pricing: {
    eyebrow: "What you get",
    titleLead: "See what's broken. ",
    titleAccent: "Then fix it.",
    body: "Start free to see every issue and how bad it is. Unlock the step-by-step fixes — and the PDF — when you're ready to act.",
    free: {
      label: "Free report",
      title: "The diagnosis.",
      price: "$0",
      priceUnit: "always",
      body: "How many problems your site has, in which areas, and why each one costs you money. Enough to decide whether to act — not enough to act.",
      included: [
        "Total problem count detected on your site",
        "Issues grouped into 4 business areas (Security, Performance, Mobile, SEO)",
        "Plain-English explanation of what each area is costing you",
      ],
      excluded: [
        "Specific list of issues",
        "Severity per issue",
        "Step-by-step fix instructions",
        "Screenshots & code snippets",
        "Downloadable PDF for your developer",
        "Verification re-scan",
      ],
      cta: "Start free scan",
    },
    full: {
      badge: "Most chosen",
      label: "Full report",
      title: "Every issue, every fix.",
      price: "$29",
      priceUnit: "one-time",
      priceNote: "one-time · per site · no subscription",
      body: "Step-by-step fixes for every issue — follow them yourself or hand the PDF to a developer.",
      included: [
        "Everything in Free",
        "Full list of every detected issue with severity (CRITICAL / WARNING / INFO)",
        "\"What we found\" — exact metrics (load time in seconds, image weight, affected pages)",
        "Step-by-step \"Fix it myself\" instructions",
        "Screenshots where captured",
        "Per-issue dev brief PDF",
        "Full-report PDF for your developer",
        "1 free re-scan to verify your fixes",
        "Report in your website's language",
      ],
      cta: "Get full report",
    },
    monitoring: "Need ongoing monitoring?",
    monitoringCta: "Contact us",
  },

  whyItMatters: {
    eyebrow: "Why it matters",
    titleLead: "What a broken site is ",
    titleAccent: "quietly costing you.",
    body: "Every broken thing = a customer walking out the door. Here's the math.",
    leadStat: {
      big: "40",
      unit: "%",
      categoryIcon: "shield-off",
      category: "Security · trust",
      lineOne: "Nearly half of visitors leave the moment Chrome flags your site as",
      lineOneEmphasis: "Not Secure",
      lineOneTail: ".",
      lineTwo: "Before they ever see your offer.",
      note: "One expired certificate. One mixed-content warning. That's the cost of doing nothing this quarter.",
    },
    minor: [
      {
        icon: "gauge",
        category: "Speed",
        prefix: "−",
        big: "7",
        unit: "%",
        suffix: "/ sec",
        boldLead: "Fewer sales per second of load.",
        rest: " A 4-second site loses a third of conversions.",
      },
      {
        icon: "smartphone",
        category: "Mobile",
        prefix: null,
        big: "60",
        unit: "%",
        suffix: "on phones",
        boldLead: "Most visitors are on a phone.",
        rest: " A broken mobile menu hides your booking link from the majority.",
      },
      {
        icon: "search",
        category: "SEO",
        prefix: null,
        big: "1",
        unit: "st",
        suffix: "on Google",
        boldLead: "Fast, secure sites rank first.",
        rest: " Speed, SSL and mobile are direct Google ranking signals.",
      },
    ],
  },

  whoItsFor: {
    eyebrow: "Who it's for",
    titleLead: "One scan. ",
    titleAccent: "Three kinds of peace of mind.",
    body: "Whether it's your own site, your guests' first impression, or your clients' trust on the line — Webscan catches the problems before they catch you.",
    personas: [
      {
        icon: "store",
        forLabel: "For",
        title: "Small business owners",
        body: "Salons, clinics, law offices — you run the site yourself.",
        pains: [
          {
            icon: "smartphone",
            boldLead: "Your site doesn't work on phones",
            rest: " — 7 in 10 customers visit from mobile and can't tap \"Call\" or book.",
          },
          {
            icon: "search-x",
            boldLead: "You're invisible on Google",
            rest: " — people search for your service and never find you.",
          },
          {
            icon: "mail-warning",
            boldLead: "Your emails land in spam",
            rest: " — booking confirmations and replies never reach the customer.",
          },
        ],
      },
      {
        icon: "bed-double",
        forLabel: "For",
        title: "Hotel & restaurant managers",
        body: "Every empty table or room is lost revenue.",
        pains: [
          {
            icon: "calendar-x",
            boldLead: "Guests can't book on mobile",
            rest: " — most reservations come from phones, and yours rejects them.",
          },
          {
            icon: "timer-off",
            boldLead: "Your site loads too slow",
            rest: " — guests leave before they see your menu or rooms.",
          },
          {
            icon: "shield-alert",
            boldLead: "\"Not secure\" warning scares guests off",
            rest: " — right when they're about to pay.",
          },
        ],
      },
      {
        icon: "briefcase",
        forLabel: "For",
        title: "Freelancers managing client sites",
        body: "Protect your reputation across every domain.",
        pains: [
          {
            icon: "clock-alert",
            boldLead: "SSL & domain expiry, caught early",
            rest: " — flagged weeks ahead, not at 10 PM Saturday when the client calls.",
          },
          {
            icon: "file-warning",
            boldLead: "Exposed .env, .git & version leaks",
            rest: " — credential and CVE risks your client will blame on you.",
          },
          {
            icon: "activity",
            boldLead: "Core Web Vitals + regression alerts",
            rest: " — real metrics for your reports, plus a ping when a deploy breaks performance.",
          },
        ],
      },
    ],
  },

  finalCta: {
    badge: "60-second free audit",
    titleLead: "Find out what's broken ",
    titleAccent: "before your customers do.",
    body: "Free scan. 60 seconds. No signup required.",
  },

  footer: {
    tagline:
      "The 60-second website audit, written in plain language. Built for people who run their own site.",
    domainsBadge: "domains scanned",
    domainsCount: "1,200+",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "How it works", href: "#how" },
          { label: "Pricing", href: "#pricing" },
          { label: "Sample report", href: "#sample" },
          { label: "Monitoring", href: "#monitoring", badge: "New" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Blog", href: "#blog" },
          { label: "FAQ", href: "#faq" },
          { label: "Support", href: "#support" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Contact", href: "mailto:hi@webscan.co" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "#privacy" },
          { label: "Terms", href: "#terms" },
          { label: "Cookies", href: "#cookies" },
          { label: "Security", href: "#security" },
          { label: "DPA & GDPR", href: "#dpa" },
        ],
      },
    ],
    status: "All systems operational",
    copyright: "© 2026 Webscan. Built with care in Warsaw.",
    languageLabel: "Language",
  },
} as const;

export type Content = typeof en;

const dictionaries: Record<Locale, Content> = {
  en,
  // pl: ... fill in when ready
  pl: en,
};

export function getContent(locale: Locale = "en"): Content {
  return dictionaries[locale] ?? dictionaries.en;
}
