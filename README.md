# Mi portafolio

Plantilla de portafolio personal hecha con React, TypeScript y Vite.

## Empezar

```sh
npm install
npm run dev
```

Para comprobar el proyecto antes de publicar:

```sh
npm run lint
npm run build
```

## Estructura

- `public/images/`: imágenes servidas directamente; añade aquí `profile.jpg` y las imágenes de proyectos.
- `public/resume.pdf`: coloca aquí el CV que enlaza la sección de presentación.
- `src/assets/`: recursos que se importan desde componentes, como iconos o fuentes.
- `src/components/common/`: componentes reutilizables.
- `src/components/layout/`: navegación, contenedores y pie de página.
- `src/components/sections/`: secciones ensambladas en `src/App.tsx`.
- `src/data/`: contenido tipado para proyectos, habilidades y experiencia.
- `src/hooks/`: hooks reutilizables, incluido el tema claro/oscuro.
- `src/styles/globals.css`: estilos globales, componentes y reglas adaptables.
- `src/types/`: tipos compartidos de TypeScript.

## Personalización

1. Edita `src/components/sections/Hero.tsx` y `Contact.tsx` con tus datos y enlaces.
2. Actualiza los elementos en `src/data/`.
3. Guarda las imágenes como `public/images/projects/project-1.webp` y `project-2.webp` o modifica las rutas en `src/data/projects.ts`.
4. Añade tu CV en `public/resume.pdf`.
