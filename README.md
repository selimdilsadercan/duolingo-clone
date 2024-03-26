- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [x] add .prettierrc
- [x] connect to remote github repo

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css

- [x] "npm i @clerk/nextjs"
- [x] create clerk project
- [x] add .env keys
- [x] add providers/clerk-provider.tsx and add wrap layout.tsx's children
- [x] add middleware.ts
- [x] make the signin button mode to modal

- [ ] "npm i convex"
- [ ] "npx convex dev" to run convex, change .env.local to .env
- [ ] create /convex/auth.config.js and add issuer url as domain
- [ ] add providers/convex-provider.tsx, combine clerk and convex providers and wrap {children} with ConvexProvider

- [ ] enable organizations in clerk
- [ ] add org_role and org_id to jwt template

- [ ] create liveblocks project and rename it
- [ ] "npm i @liveblocks/client @liveblocks/react"
- [ ] "npx create-liveblocks-app@latest --init --framework react" and add key to .env as LIVEBLOCKS_SECRET_KEY
- [ ] add Room.tsx
- [ ] "npm i @liveblocks/node"
- [ ] create /app/api/liveblocks-auth

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, convex, clerk-withorg, liveblocks
- secondary stack: zustand, date-fns, use-hooks, react-contenteditable, perfect-freehand
- ui: font = poppins-inter-kalam, icons = lucide
- extensions: color-highligt, error-lens, svg-preview, tailwind-intellisense, react-snippets

---

- .next içindeki dosyalar app folderının içine page.tsx dışında bir file oluşturunca açılıyor
- sayfa ile alakalı componentleri app klasörü içinde components folderı olmadan tanımladı
- gamish tarzda assetler için: https://kenney.nl/
