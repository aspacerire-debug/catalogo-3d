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
