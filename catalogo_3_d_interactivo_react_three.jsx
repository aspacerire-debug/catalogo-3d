// Catálogo 3D Interactivo — PLANTILLA LISTA PARA COPIAR
// ======================================================
// Este repo base funciona en WEB (Vite + React + Tailwind + Three Fiber + Drei + Framer Motion)
// Solo cambias diseño y contenido en /src/theme y /src/data/catalog.
//
// 📦 Estructura del proyecto
// ├─ package.json
// ├─ vite.config.ts
// ├─ index.html
// ├─ postcss.config.cjs
// ├─ tailwind.config.cjs
// ├─ src/
// │  ├─ main.tsx
// │  ├─ App.tsx
// │  ├─ data/
// │  │  └─ catalog.ts
// │  ├─ theme/
// │  │  ├─ tokens.ts
// │  │  └─ styles.css
// │  ├─ components/
// │  │  ├─ Book.tsx
// │  │  ├─ Page.tsx
// │  │  ├─ ProductPage.tsx
// │  │  ├─ CoverPage.tsx
// │  │  ├─ BackPage.tsx
// │  │  ├─ ThreeViewer.tsx
// │  │  └─ LazyGLTF.tsx
// │  └─ lib/
// │     └─ ui.tsx (botones/cards simples sin librerías externas)
// └─ README.md
//
// =============== package.json =================
{
  "name": "catalogo-3d-interactivo",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^9.114.6",
    "@react-three/fiber": "^8.15.16",
    "framer-motion": "^11.3.23",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.168.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}

// =============== vite.config.ts =================
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()] });

// =============== index.html =================
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Catálogo 3D — Vitalízate Fit</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// =============== postcss.config.cjs =================
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };

// =============== tailwind.config.cjs =================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

// =============== src/main.tsx =================
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/styles.css';
const root = createRoot(document.getElementById('root')!);
root.render(<App />);

// =============== src/theme/styles.css =================
@tailwind base;@tailwind components;@tailwind utilities;
:root{ --bg: #f7f7f7; --fg: #0a0a0a; --primary: #111111; --accent: #00C2A8; }
body{ background: var(--bg); color: var(--fg); }

// =============== src/theme/tokens.ts =================
export const theme = {
  brand: { name: 'Vitalízate Fit', logoMark: '#111111', accent: 'var(--accent)' },
  layout: { maxW: '72rem' },
  cta: { radius: '1rem' },
};

// =============== src/data/catalog.ts =================
export type ProductPage = {
  id: string;
  type: 'product';
  name: string;
  price?: string;
  features?: string[];
  modelUrl?: string;
  rotation?: [number, number, number];
  zoom?: number;
  color?: string;
};
export type Cover = { id: string; type: 'cover'; title: string; subtitle?: string; tagline?: string };
export type Back = { id: string; type: 'back'; title: string; subtitle?: string };
export type Page = ProductPage | Cover | Back;

export const CATALOG_PAGES: Page[] = [
  { id: 'cover', type: 'cover', title: 'Vitalízate Fit', subtitle: 'Catálogo 3D — Línea Activa 2025', tagline: 'Bienestar, rendimiento y naturaleza en movimiento.' },
  { id: 'p1', type: 'product', name: 'Proteína Vital Bio+', price: '$119.900', features: ['24g proteína vegetal','Aminoácidos esenciales','Cero azúcar añadida'], modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', rotation: [0,0.6,0], zoom: 1.2, color: '#00C2A8' },
  { id: 'p2', type: 'product', name: 'Pre-Workout Selva+', price: '$69.900', features: ['Energía limpia','Extractos botánicos','Cafeína moderada'], modelUrl: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb', rotation: [0.1,-0.6,0], zoom: 1.15, color: '#68D391' },
  { id: 'p3', type: 'product', name: 'Vitaminas ADN Vital', price: '$49.900', features: ['Complejo B','Zinc + Magnesio','Vitamina D3'], modelUrl: 'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb', rotation: [0,0.4,0], zoom: 1.1, color: '#7C3AED' },
  { id: 'back', type: 'back', title: 'Gracias por explorar', subtitle: 'Escanéa el QR o visita vitalizatefit.com' },
];

// =============== src/lib/ui.tsx =================
import React from 'react';
export function Button({ children, variant = 'solid', disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid'|'outline' }){
  const base = 'px-4 py-2 rounded-2xl text-sm transition shadow';
  const solid = 'bg-black text-white hover:shadow-lg disabled:opacity-40';
  const outline = 'border border-black/15 hover:shadow-lg disabled:opacity-40';
  return <button className={`${base} ${variant==='solid'?solid:outline}`} disabled={disabled} {...props}>{children}</button>;
}
export function Card({ children, className='' }:{children: React.ReactNode; className?: string}){
  return <div className={`p-6 rounded-2xl bg-white border border-black/5 shadow ${className}`}>{children}</div>;
}

// =============== src/components/LazyGLTF.tsx =================
import React from 'react';
import { useGLTF } from '@react-three/drei';
export default function LazyGLTF({ url }:{url:string}){ const { scene } = useGLTF(url, true, true); return <primitive object={scene} /> }

// =============== src/components/ThreeViewer.tsx =================
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Html } from '@react-three/drei';
import LazyGLTF from './LazyGLTF';

function Wobble({ children, speed = 1, amplitude = 0.02 }:{children:React.ReactNode; speed?:number; amplitude?:number}){
  const ref = useRef<any>(null);
  useFrame((state)=>{ const t = state.clock.getElapsedTime()*speed; if(ref.current){ ref.current.rotation.y += Math.sin(t)*amplitude*0.05; ref.current.position.y = Math.sin(t*0.8)*amplitude; } });
  return <group ref={ref}>{children}</group>;
}

export function ThreeViewer({ url, rotation=[0,0,0], zoom=1 }:{url?:string; rotation?:[number,number,number]; zoom?:number}){
  return (
    <Canvas camera={{ position: [0,0,3/zoom], fov:45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3,5,2]} intensity={1.2} />
      <Wobble speed={1} amplitude={0.03}>
        <group rotation={rotation as any}>
          <Suspense fallback={<Html center><div className="px-4 py-2 rounded-xl bg-black/70 text-white text-sm">Cargando modelo…</div></Html>}>
            {url ? <LazyGLTF url={url} /> : <mesh><boxGeometry args={[1,1,1]} /><meshStandardMaterial /></mesh>}
          </Suspense>
        </group>
      </Wobble>
      <Environment preset="studio" />
      <ContactShadows position={[0,-1.1,0]} opacity={0.35} blur={2} far={5} />
      <OrbitControls enablePan={false} minDistance={1.5} maxDistance={4} />
    </Canvas>
  );
}

// =============== src/components/Page.tsx =================
import React from 'react';
export default function Page({ children }:{children:React.ReactNode}){
  return <div className="h-full w-full bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden">{children}</div>;
}

// =============== src/components/CoverPage.tsx =================
import React from 'react';
export default function CoverPage({ data }:{data:any}){
  return (
    <div className="relative h-full w-full grid place-items-center">
      <div className="text-center px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{data.title}</h1>
        {data.subtitle && <p className="mt-3 text-lg opacity-80">{data.subtitle}</p>}
        {data.tagline && <p className="mt-6 text-xl md:text-2xl italic opacity-90">{data.tagline}</p>}
      </div>
    </div>
  );
}

// =============== src/components/BackPage.tsx =================
import React from 'react';
export default function BackPage({ data }:{data:any}){
  return (
    <div className="relative h-full w-full grid place-items-center">
      <div className="text-center px-8">
        <h2 className="text-3xl md:text-4xl font-semibold">{data.title}</h2>
        {data.subtitle && <p className="mt-3 opacity-80">{data.subtitle}</p>}
      </div>
    </div>
  );
}

// =============== src/components/ProductPage.tsx =================
import React from 'react';
import { ThreeViewer } from './ThreeViewer';
import { Button, Card } from '../lib/ui';
export default function ProductPage({ data }:{data:any}){
  return (
    <div className="grid md:grid-cols-2 h-full w-full">
      <div className="relative"><ThreeViewer url={data.modelUrl} rotation={data.rotation} zoom={data.zoom} /></div>
      <div className="relative p-6 md:p-10">
        <div className="md:sticky md:top-10">
          <h3 className="text-2xl md:text-3xl font-semibold">{data.name}</h3>
          {data.price && <p className="mt-1 text-xl font-medium">{data.price}</p>}
          {data.features && <ul className="mt-4 space-y-2">{data.features.map((f:string,i:number)=> (
            <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{background: data.color || '#0ea5e9'}}></span><span className="opacity-90">{f}</span></li>
          ))}</ul>}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Comprar</Button>
            <Button variant="outline">Agregar al carrito</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== src/components/Book.tsx =================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Page from './Page';
import CoverPage from './CoverPage';
import ProductPage from './ProductPage';
import BackPage from './BackPage';

export default function Book({ pages }:{pages:any[]}){
  const [pageIndex, setPageIndex] = useState(0);
  const total = pages.length; const canPrev = pageIndex>0; const canNext = pageIndex<total-1;
  const variants:any = { enter:(d:number)=>({ rotateY: d>0?-10:10, x:d>0?40:-40, opacity:0 }), center:{ rotateY:0, x:0, opacity:1 }, exit:(d:number)=>({ rotateY: d>0?10:-10, x:d>0?-40:40, opacity:0 }) };
  const [direction,setDirection]=useState(0);
  const go=(d:number)=>{ setDirection(d); setPageIndex(i=> Math.min(Math.max(i+d,0), total-1)); };
  const page = pages[pageIndex];
  return (
    <div className="relative w-full max-w-6xl aspect-[16/10] mx-auto">
      <div className="absolute inset-0 grid grid-cols-1">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div key={page.id} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ type:'spring', stiffness:180, damping:20, mass:0.7 }} className="[transform-style:preserve-3d]">
            <Page>
              {page.type==='cover' && <CoverPage data={page} />}
              {page.type==='product' && <ProductPage data={page} />}
              {page.type==='back' && <BackPage data={page} />}
            </Page>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute -bottom-14 left-0 right-0 flex items-center justify-between">
        <button onClick={()=>go(-1)} disabled={!canPrev} className={`px-4 py-2 rounded-2xl border border-black/10 bg-white shadow ${!canPrev? 'opacity-40 cursor-not-allowed':'hover:shadow-lg'}`}>← Anterior</button>
        <div className="flex items-center gap-2">{pages.map((p:any,i:number)=> (
          <button key={p.id} onClick={()=>setPageIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i===pageIndex?'bg-black':'bg-black/20'}`} aria-label={`Ir a página ${i+1}`} />
        ))}</div>
        <button onClick={()=>go(1)} disabled={!canNext} className={`px-4 py-2 rounded-2xl border border-black/10 bg-white shadow ${!canNext? 'opacity-40 cursor-not-allowed':'hover:shadow-lg'}`}>Siguiente →</button>
      </div>
    </div>
  );
}

// =============== src/App.tsx =================
import React from 'react';
import { theme } from './theme/tokens';
import { CATALOG_PAGES } from './data/catalog';
import Book from './components/Book';

export default function App(){
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-50 to-neutral-200 text-neutral-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto px-4 py-3 flex items-center justify-between" style={{ maxWidth: theme.layout.maxW }}>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl" style={{ background: theme.brand.logoMark }} />
            <span className="font-semibold">{theme.brand.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100">Inicio</a>
            <a href="#" className="hover:opacity-100">Productos</a>
            <a href="#" className="hover:opacity-100">Nosotros</a>
            <a href="#" className="hover:opacity-100">Contacto</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto px-4 py-12 md:py-16" style={{ maxWidth: theme.layout.maxW }}>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Catálogo 3D Interactivo</h1>
        <p className="mb-10 opacity-80 max-w-3xl">Explora productos en 3D con animaciones sutiles. Pasa las páginas como en un libro, mira los detalles y compra en un clic.</p>
        <Book pages={CATALOG_PAGES as any[]} />
        <section className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow">
            <h3 className="font-semibold mb-2">Cambiar modelos</h3>
            <p className="opacity-80 text-sm">Sube tus .glb/.gltf a un hosting con CORS y pega la URL en <code>modelUrl</code> de cada página.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow">
            <h3 className="font-semibold mb-2">Rendimiento</h3>
            <p className="opacity-80 text-sm">Optimiza modelos (menos polígonos, texturas comprimidas). GLB/GLTF + Draco recomendado.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow">
            <h3 className="font-semibold mb-2">Publicación</h3>
            <p className="opacity-80 text-sm">Usa Vercel o Netlify: Importa repo, deploy y comparte el link.</p>
          </div>
        </section>
      </main>
      <footer className="mt-16 pb-20 text-center opacity-60 text-sm">© {new Date().getFullYear()} {theme.brand.name}</footer>
    </div>
  );
}

// =============== README.md =================
# Catálogo 3D Interactivo (Plantilla)

## 🚀 Cómo iniciar
```bash
pnpm i # o npm i / yarn
dev: pnpm dev
build: pnpm build && pnpm preview
```

## ✏️ Cambiar diseño por plantilla
- **Colores / marca**: `src/theme/tokens.ts` y variables CSS en `src/theme/styles.css`.
- **Tipografías**: añade @import de Google Fonts en `index.html` y usa clases Tailwind.
- **Componentes UI**: `src/lib/ui.tsx` (botones/cards) — ajusta radios, sombras, etc.

## 🧩 Cambiar contenido
- Edita `src/data/catalog.ts` → páginas del libro (portada, productos, contraportada).
- Cambia `modelUrl` a tus `.glb/.gltf` (asegura CORS). Recomendado subir a un CDN.

## 📦 Exportar
- Publica en Vercel/Netlify. Copia el enlace y compártelo como tu catálogo.

## 📱 ¿App móvil?
Para **app** con Expo:
1. `npx create-expo-app` y añade `expo-three` + `three`. 
2. Usa un visor 3D con `expo-three` o `<GLView>` + Three; el libro se puede replicar con `react-native-reanimated`.
3. Te puedo pasar un **mini starter Expo** si lo quieres.

## ✅ Licencia
Uso comercial permitido para tu marca.
