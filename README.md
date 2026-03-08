# The 5-Minute Manager

A production-ready Next.js site for The 5-Minute Manager—a leadership newsletter and professional portfolio by Don Long.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navigation + Footer
│   ├── page.tsx            # Homepage
│   ├── articles/
│   │   ├── page.tsx        # Articles archive
│   │   └── [slug]/page.tsx # Individual article pages
│   ├── about/page.tsx      # About page
│   ├── subscribe/page.tsx  # Subscribe page
│   └── api/subscribe/      # Newsletter signup API
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── articles/           # Article card components
│   ├── mdx/                # MDX custom components
│   └── newsletter/         # Newsletter signup form
├── content/
│   └── articles/           # MDX article files
└── lib/
    ├── articles.ts          # Article parsing utilities
    └── newsletter/          # Newsletter provider adapters
```

## Adding New Articles

Create a new `.mdx` file in `src/content/articles/`:

```mdx
---
title: "Your Article Title"
date: "2025-03-01"
excerpt: "A one or two sentence summary."
tags: ["Leadership", "Management Systems"]
featured: false
---

Article content here...
```

### Available MDX Components

```mdx
<Callout type="insight">Key insight text.</Callout>
<PullQuote attribution="Optional">A memorable quote.</PullQuote>
<Divider />
```

## Newsletter Integration

By default the form uses a placeholder adapter. To connect Beehiiv:

1. Copy `.env.example` to `.env.local`
2. Fill in values:

```env
NEWSLETTER_PROVIDER=beehiiv
BEEHIIV_API_KEY=your_key_here
BEEHIIV_PUBLICATION_ID=your_pub_id_here
```

## Deployment to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy
