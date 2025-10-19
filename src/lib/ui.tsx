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
