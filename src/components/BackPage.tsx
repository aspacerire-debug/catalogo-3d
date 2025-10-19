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
