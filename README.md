# Sitio de presentaciones

Portal en React + Vite que cataloga presentaciones hechas en Slidev, publicado
en GitHub Pages con GitHub Actions.

## URLs en producción

⚠️ Este repo se llama `Introduccion-a-SinergIA`, así que GitHub Pages **siempre**
sirve el sitio bajo esa subruta — nunca en la raíz de `sinergia-iesa.github.io`.
Esto no es configurable desde el código: así funciona GitHub Pages para
cualquier repo de proyecto que no se llame exactamente `sinergia-iesa.github.io`.

- Portal: https://sinergia-iesa.github.io/Introduccion-a-SinergIA/
- Presentación "Configuración del entorno de Python":
  https://sinergia-iesa.github.io/Introduccion-a-SinergIA/presentations/preparacion-ambiente/

Si algún día quieren una URL sin el nombre del repo (ej. directo en
`sinergia-iesa.github.io/`), la única forma es renombrar este repositorio a
`sinergia-iesa.github.io`, convirtiéndolo en el sitio de usuario/organización
de GitHub — pero eso implica que solo puede haber **un** sitio así por cuenta
(no podrían tener otro repo con Pages aparte de este).

## Estructura

```
presentation-site/
├── app/                      → portal React (hero, quiénes somos, catálogo)
│   ├── public/
│   │   └── hero.png          → fondo del hero (reemplázalo a tu gusto)
│   └── src/
│       ├── data/
│       │   ├── site.js       → nombre del proyecto, textos del hero y "quiénes somos"
│       │   └── presentations.js → lista de presentaciones (el orden aquí = el orden visible)
│       └── components/
│           ├── Hero.jsx
│           ├── AboutUs.jsx
│           └── PresentationsSection.jsx
│
├── presentations/
│   └── preparacion-ambiente/ → una presentación Slidev independiente
│       └── public/
│           └── portada.png   → fondo de la portada de esa presentación
│
└── .github/workflows/deploy.yml
```

## Cómo correr en local

```bash
npm install --ignore-scripts   # una sola instalación para todo el workspace
npm run dev                    # portal en http://localhost:5173
```

Para correr una presentación individual:

```bash
cd presentations/preparacion-ambiente
npx slidev --open
```

## Agregar una nueva presentación

1. Crea `presentations/<slug>/` con su `slides.md` (puedes copiar la
   estructura de `preparacion-ambiente/` como plantilla).
2. Agrega una entrada en `app/src/data/presentations.js` con el mismo `slug`.
3. Agrega una miniatura en `app/public/thumbnails/<slug>.png` (opcional).
4. Haz commit y push a `main` — GitHub Actions detecta la carpeta nueva
   automáticamente y la construye sin tocar el workflow.

## Imágenes pendientes de reemplazar

- `app/public/hero.png` — fondo del hero de la página principal.
- `presentations/preparacion-ambiente/public/portada.png` — fondo de la
  portada de esa presentación (la diapositiva ya está configurada para usarla).

Ambas están de momento como placeholders con gradiente en los tonos celeste
del proyecto, solo para que nada se vea roto mientras las reemplazas.

## Pendiente / decisiones a confirmar

- El nombre del proyecto en el hero está como `"Sinergia"` en
  `app/src/data/site.js` — es un placeholder, cámbialo por el nombre real.
- El `base` de cada build (portal y presentaciones) se pasa en el workflow
  como `/<nombre-del-repo>/`, así que **no hace falta editarlo a mano**: solo
  asegúrate de que el repo en GitHub se llame como esperas, o ajusta esa línea
  en `deploy.yml` si prefieres una ruta distinta.
