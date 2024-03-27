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

- [x] create neon project
- [x] copy connection string as DATABASE_URL to .env
- [x] "npm i drizzle-orm @neondatabase/serverless"
- [x] "npm i -D drizzle-kit pg"
- [x] add "studio": "npx drizzle-kit studio", and "push": "npx drizzle-kit push:pg" to package.json scripts
- [x] create /db/drizzle.ts
- [x] create /db/schema.ts and create schemas
- [x] "npm i dotenv" and create /drizzle.config.ts
- [x] "npm i -g tsx" and add "seed": "tsx ./scripts/seed.ts" and run npm run seed to seed database

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, clerk, neon, drizzle-orm
- secondary stack: bun
- ui: font = nunito, icons = lucide
- extensions:

---

- .next içindeki dosyalar app folderının içine page.tsx dışında bir file oluşturunca açılıyor
- sayfa ile alakalı componentleri app klasörü içinde components folderı olmadan tanımladı
- gamish tarzda assetler için: https://kenney.nl/
- bayrak paketi: https://flagpack.xyz/
- microsoft emoji paketi: https://github.com/microsoft/fluentui-emoji
- react cache ile basit düzey caching yapabiliyoruz
- drizzle schema'daki elemanları typeof kullanarak alabiliyoruz
- rid-cols-[repeat(auto-fill,minmax(210px,1fr))] ile auto grid yapabiliyoruz
- lucide icon kalınlığını stroke-[] vererek ayarlayabiliyosun
