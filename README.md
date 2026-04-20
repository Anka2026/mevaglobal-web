Production-ready website foundation for **Meva Global Certification B.V.** built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

Key features:
- Locale-based routing: `/en`, `/tr`, `/nl` (+ all required sub-routes)
- Premium corporate UI with brand design tokens (see `src/app/globals.css`)
- Component-based structure (`src/components/**`)
- Statement Search mock system with local dataset (`src/data/statements.ts`)

## Getting Started

Install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The root route redirects to `/en`. Main pages live under `src/app/[locale]/...`.

## Build

```bash
npm run build
npm run start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
