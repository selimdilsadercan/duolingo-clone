- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [x] add .prettierrc
- [x] connect to remote github repo

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css

- [x] "npx shadcn-ui@latest add sonner"
- [x] add /providers/toast-provider.tsx and add to /layout.tsx

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

- [x] "npm i stripe"
- [x] create /lib/stripe.ts
- [x] create new stripe account
- [x] copy developers -> API Keys -> Secret Key as STRIPE_API_KEY to .env
- [x] "C:\Users\dilsa\Documents\Uygulamalar\stripe_1.19.4_windows_x86_64\stripe.exe" login
- [x] "C:\Users\dilsa\Documents\Uygulamalar\stripe_1.19.4_windows_x86_64\stripe.exe" listen --forward-to localhost:3000/api/webhooks/stripe
- [x] open webook endpoint -> test in local env -> paste this webhooks key to .env as STRIPE_WEBHOOK_SECRET
- [x] create /app/api/webhooks/stripe/route.ts
- [x] add /api/webhooks/stripe to publicRoutes in middleware.ts
- [ ] search for customer portal, activate test link

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, clerk, neon, drizzle-orm, react-admin
- secondary stack: zustand, bun, react-circular-progressbar, react-confetti, react-use
- ui: font = nunito, icons = lucide
- extensions:

---

- .next içindeki dosyalar app folderının içine page.tsx dışında bir file oluşturunca açılıyor
- sayfa ile alakalı componentleri app klasörü içinde components folderı olmadan tanımladı
- gamish tarzda assetler için: https://kenney.nl/
- bayrak paketi: https://flagpack.xyz/
- microsoft emoji paketi: https://github.com/microsoft/fluentui-emoji
- yapay zeka ile ses doyaları için: https://elevenlabs.io/
- react cache ve revalidatePath ile basit düzey caching yapabiliyoruz
- drizzle schema'daki elemanları typeof kullanarak alabiliyoruz
- rid-cols-[repeat(auto-fill,minmax(210px,1fr))] ile auto grid yapabiliyoruz
- lucide icon kalınlığını stroke-[] vererek ayarlayabiliyosun
- ayrı ayrı await eklemek yerine hepsini tek seferde Promise.all diyerek fetchliyo
- normalde .ts dosyasını node ./a.ts diyerek eğer require kullandıysan çalıştırıyosun, ama tsx, tsnode ya da bun kullanabilirsin
- bun daha windows'a çıkmadı
- terminal komutlarını package.json'daki scripts'e ekleyerek kısaltabilirsin
- drizzle'da table ya da sütün isimlerinde conflict yaşandığında sorunu terminalden çözebiliyosun
- react-use useAudio ile ses çalabiliyosun
- react-use useKey ile çok daha kolay şekilde shortcutlar oluşturabiliyosun
- loading state'leri react startTransition ile yapıyor
- stripe account inceleme, hesap deaktive etmek
- react-admin paketi ile hızlı admin paneli yapılıyor
