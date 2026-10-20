# Portafolio personal

Portafolio web de Duvan Hernández Villarreal, desarrollado con React, TypeScript y Vite. Incluye perfil profesional, experiencia, proyectos, habilidades y contacto.

## Inicio rápido

```sh
npm install
npm run dev
```

## Scripts

```sh
npm run lint
npm run build
npm run preview
```

## Despliegue

Se puede publicar en Vercel con la configuración estándar de Vite:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

El archivo `vercel.json` ya incluye la configuración para rutas SPA en React.

## Personalización

- `src/components/sections/*`: textos, habilidades y contenido principal
- `src/data/projects.ts`: proyectos mostrados
- `src/data/skills.ts`: stack y competencias
- `src/data/experience.ts`: experiencia laboral
