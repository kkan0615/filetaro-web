This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/example-page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Next js 13 + Tailwind CSS

## Getting Started
### Install
```bash
yarn install
```
### Dev mode
```bash
yarn dev
```

## Packages
- [negotiator](https://www.npmjs.com/package/negotiator): An HTTP content negotiator for Node.js
  - [@types/negotiator](https://www.npmjs.com/package/@types/negotiator)
- [@formatjs/intl-localematcher](https://github.com/formatjs/formatjs)
- [tailwindcss]()
- [postcss]()
- [autoprefixer]()
- [react-icons](https://react-icons.github.io/react-icons): Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
- [contentlayer](https://www.contentlayer.dev/): Content made easy for developers

## File Path
```text
├─ .next/                       # Next.js build file for development
├─ app/                         # Components
│  ├─ components/               # Sever components
│  │  ├─ layouts/               # Layout sever components 
├─ components/                  # Components
├─ contents/                    # Content ( .md, .mdx ...)
├─ components/                  # Client Components
│  ├─ layouts/                  # Layout client components 
├─ node_modules/                # node modules
├─ pages/                       # Pages
├─ public/                      # Assets (images ...)
├─ types/                       # Type directory (interfaces, classes, const values ...)
├─ .eslintrc.js                 # Eslint.
├─ .gitignore                   # gitignore.
├─ app.config.ts                # App config
├─ i18n.config.ts               # i18n config
├─ middleware.ts                # Middleware handler
├─ next.config.mjs               # Next.js config file
├─ next.env.d.js                # type for Next.js env module 
├─ package.json                 # Package.json
├─ README.md                    # README.md
├─ tailwind.config.js           # Tailwind CSS config
├─ tsconfig.json                # Typescript config
├─ turbo.json                   # Turbopack config
```
