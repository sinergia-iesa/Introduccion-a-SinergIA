// El orden de esta lista es el orden en que las presentaciones aparecen
// en el catálogo. Para agregar una nueva presentación:
//   1. Crea la carpeta en /presentations/<slug>/ con su slides.md
//   2. Agrega una entrada aquí abajo con el mismo "slug"
//   3. (opcional) agrega una miniatura en /app/public/thumbnails/<slug>.png
//
// La ruta pública final de cada presentación es /presentations/<slug>/

export const presentations = [
  {
    slug: 'preparacion-ambiente',
    title: 'Configuración del entorno de Python',
    category: 'Preparación del ambiente',
    description:
      'Instalación de Python, Visual Studio Code y GitHub para arrancar el curso desde cero.',
    thumbnail: '/thumbnails/preparacion-ambiente.png',
    date: '2026',
  },
]
