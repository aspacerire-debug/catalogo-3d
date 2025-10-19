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
