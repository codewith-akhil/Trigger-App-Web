# Trigger App — Web

Official marketing & legal website for **Trigger**, an 18+ Android app for chat, calls, live streaming, creator earnings, and global community.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, **Tailwind CSS 4**, and **shadcn/ui**.

## Sections

- Sticky header with TRIGGER logo + nav
- Hero with three overlapping phone mockups
- 9-card features grid
- Live Streaming (Free / Paid / Schedule) section
- Creator Payouts (Same-Day, 6 PM IST) section
- Chat Freely, Share Securely section
- Privacy & Security section (profile, vault, account deletion)
- Download on Google Play section
- Footer (4-column with social icons)
- Privacy Policy page (`/?page=privacy-policy`) with URL-based pagination across 10 pages

## Local Development

```bash
# Install dependencies (Bun recommended)
bun install

# Start dev server on http://localhost:3000
bun run dev

# Lint
bun run lint
```

## Build

```bash
bun run build
```

## Deploy on AWS Amplify

This repository is configured for AWS Amplify Hosting.

1. Connect the GitHub repo `codewith-akhil/Trigger-App-Web` in the AWS Amplify console.
2. Amplify will auto-detect the `amplify.yml` build spec at the repo root.
3. The build runs `npm install` then `npx next build`.
4. Amplify hosts the Next.js app as an SSR app using its native Next.js adapter.

### Required Files

- `amplify.yml` — Amplify build specification
- `.nvmrc` — pins Node.js to v20
- `next.config.ts` — Next.js config (already has `output: "standalone"`)

## Tech Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom brand tokens |
| UI Components | shadcn/ui (New York) |
| Icons | Inline SVG (no icon library) |
| Fonts | Inter (body), Caveat (handwritten accents) |

## Brand Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Brand | `#00C853` | Primary CTAs, accents |
| Brand Dark | `#059669` | Headlines, emphasis |
| Brand Deepest | `#062E21` | Footer background |
| Mint BG | `#F0FDF4` | Soft section backgrounds |
| Ink | `#0F172A` | Headlines |
| Body | `#475569` | Body text |

## License

© 2026 Trigger App. All rights reserved. Powered by Metric Flux Solutions.
