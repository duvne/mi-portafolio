# Portafolio personal

Portafolio web de Duvan Hernandez Villarreal, desarrollado con React, TypeScript y Vite. Presenta el perfil, habilidades, experiencia, proyectos y medios de contacto.

## Secciones

- **Perfil:** introducción y presentación personal.
- **Proyectos:** incluye VOLT, un marketplace en desarrollo para explorar, alquilar y publicar patinetas eléctricas.
- **Habilidades:** tecnologías, metodologías y herramientas.
- **Experiencia:** trayectoria y objetivos profesionales.
- **Contacto:** correo electrónico y teléfono.
- **Sobre mí:** intereses, objetivos, fortalezas e idiomas.

VOLT utiliza Java 17, Jakarta Servlet 6, Maven, Gson y JavaScript nativo. Su catálogo y publicación básica se conectan a una API Java; otros flujos, como reservas y pagos, son demostrativos y todavía no cuentan con persistencia. [Ver el repositorio de VOLT](https://github.com/duvne/volt-netbeans).

## Requisitos

- Node.js y npm.

## Desarrollo local

Instala las dependencias y ejecuta el servidor de desarrollo:

```sh
npm install
npm run dev
```

## Comprobaciones y compilación

```sh
npm run lint
npm run build
npm run preview
```

La compilación de producción queda en `dist/`.

## Publicación

El sitio puede desplegarse en Vercel conectando este repositorio de GitHub. Configura:

- Framework: **Vite**
- Comando de compilación: `npm run build`
- Directorio de salida: `dist`

## Personalización

- Edita `src/components/sections/Hero.tsx` y `src/components/sections/Contact.tsx` para cambiar la presentación y los datos de contacto.
- Modifica `src/data/projects.ts` para actualizar los proyectos.
- Edita `src/components/sections/About.tsx` y `src/data/skills.ts` para personalizar el perfil y las habilidades.
- Guarda imágenes de proyectos en `public/images/projects/` y actualiza sus rutas en los datos correspondientes.
