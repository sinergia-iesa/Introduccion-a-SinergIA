// Vite resuelve `import.meta.env.BASE_URL` a partir del `base` configurado en
// vite.config.js (que en producción llega como VITE_BASE_PATH desde el
// workflow, ej. "/sinergia-site/", y en local es simplemente "/").
//
// Cualquier href o src que apunte a algo dentro del sitio (imágenes propias,
// rutas a otras presentaciones, etc.) debe pasar por acá en vez de escribirse
// como ruta absoluta ("/algo"), o se rompe apenas el sitio vive bajo una
// subruta como pasa en GitHub Pages.
const BASE_URL = import.meta.env.BASE_URL

export function withBase(path) {
  return `${BASE_URL}${String(path).replace(/^\/+/, '')}`
}
