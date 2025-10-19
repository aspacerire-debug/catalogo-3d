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
