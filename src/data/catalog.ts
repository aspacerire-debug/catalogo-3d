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
