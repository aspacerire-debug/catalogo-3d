# Catálogo 3D Interactivo (Plantilla)

## 🚀 Cómo iniciar
```bash
npm install
npm run dev
```
o si usas pnpm:
```bash
pnpm i
pnpm dev
```

## ✏️ Cambiar diseño por plantilla
- **Colores / marca**: `src/theme/tokens.ts` y variables CSS en `src/theme/styles.css`.
- **Tipografías**: añade @import de Google Fonts en `index.html` y usa clases Tailwind.
- **Componentes UI**: `src/lib/ui.tsx`.

## 🧩 Cambiar contenido
- Edita `src/data/catalog.ts` → portada, productos, contraportada.
- Cambia `modelUrl` a tus `.glb/.gltf` (asegura CORS).

## 📦 Publicar
- Conecta el repo a **Vercel** y despliega.
