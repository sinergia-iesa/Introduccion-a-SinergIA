// Textos generales del sitio. Cambia aquí el nombre del proyecto, el
// eslogan del hero y el contenido de "Quiénes somos" sin tocar componentes.

export const site = {
  name: 'Sinerg[IA]²', // TODO: confirmar/ajustar el nombre real del proyecto
  tagline: 'Presentaciones de la Carrera de Informática Empresarial',
  heroSubtitle:
    'Un solo lugar para consultar el material de clase: instalación de herramientas, arquitectura de proyectos y todo lo que se presenta en el curso.',
}

export const about = {
  title: 'Quiénes somos',
  intro:
    'Somos parte de la Carrera de Informática Empresarial de la Sede del Atlántico, Universidad de Costa Rica.',
  blocks: [
    {
      heading: 'Material construido para el curso',
      text:
        'Cada presentación nace de una clase real: instalación de herramientas, arquitectura de proyectos, buenas prácticas. Nada genérico, todo pensado para lo que se necesita resolver en el semestre.',
      image: '/thumbnails/preparacion-ambiente.png',
    },
  ],
  stats: [
    { value: '1', label: 'presentación publicada' },
    { value: '100%', label: 'accesible desde el navegador' },
    { value: '0', label: 'instalaciones necesarias para verlas' },
  ],
}
