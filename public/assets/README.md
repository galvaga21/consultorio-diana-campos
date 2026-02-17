
# Recursos Visuales del Proyecto

Esta carpeta está diseñada para organizar todos los assets estáticos de tu aplicación. 

## Estructura Recomendada:

- `public/assets/images/`: Para fotografías, fondos, y capturas ilustrativas (JPG, PNG, WEBP).
- `public/assets/icons/`: Para íconos personalizados o SVGs que no estén en librerías (SVG).

## Cómo usarlas en Next.js:

Para usar una imagen guardada en `public/assets/images/foto-perfil.jpg`, simplemente impórtala así en tus componentes:

```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/foto-perfil.jpg" 
  alt="Foto de Perfil" 
  width={500} 
  height={500} 
/>
```

No necesitas importar la ruta relativa completa, Next.js sabe que todo lo que está en `public` es accesible desde la raíz `/`.
