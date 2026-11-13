# Blog Application Design

## Goal

Build a polished, responsive, reader-focused blog that demonstrates Next.js server rendering, dynamic post routes, mock API usage, searchable content, accessibility, and SEO. Prepare it for public submission with a GitHub repository, a Vercel deployment, screenshots, and setup documentation.

## Scope

The app is a public editorial blog. Readers can browse the homepage, search the available posts, and open individual posts. It does not include author accounts, post editing, comments, or newsletter signup; these are outside the supplied evaluation criteria.

## Design

Use a warm, restrained editorial style with clear display typography, a distinctive featured story, readable post cards, and a responsive layout. Include keyboard-visible focus states, semantic landmarks and headings, accessible search labeling, descriptive image text, and reduced-motion support where motion is used. The visual direction is original because the supplied brief did not include a Dribbble URL.

## Architecture and data flow

Use the current stable Next.js release with the App Router and Tailwind CSS. Seed a small set of complete sample posts in the project so the app works immediately. A single server data module reads a configured MockAPI-compatible endpoint when available and falls back to the seed content when it is not configured or unavailable. Validate records at this external-data boundary and handle missing posts as not found.

Render `/` on the server with the initial post list. Prefetch and dehydrate that list into TanStack React Query so the client can use its cache; search filters the hydrated list immediately without another request. Add `/api/posts` and `/api/posts/[slug]` as app API routes backed by the same data module. Render `/posts/[slug]` on the server with the requested article and per-post metadata. Use a not-found page for unknown slugs.

## SEO and accessibility

Set site-wide title templates, descriptions, canonical metadata, Open Graph metadata, and per-post metadata. Use semantic HTML, descriptive links, accessible controls, responsive behavior, and visible focus styling. No login or private content is present.

## Submission and delivery

Include a README with local setup, mock API environment configuration, architecture notes, and Vercel deployment steps. Capture key screenshots of the homepage and an individual post in the workspace `outputs/` directory. Create a public GitHub repository and deploy the app to Vercel using the connected accounts; report the resulting repository and deployment links. If either account connection or required credentials are unavailable, leave the app deployment-ready and state exactly what remains for the user to connect.

## Verification

Run the production build and inspect the homepage, search behavior, one post route, an unknown post route, and a narrow viewport in a browser. Check that the app still renders from seed data without a configured external API. Capture screenshots only after these checks. Do not add a separate test framework for this first version.
