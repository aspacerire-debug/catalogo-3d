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
