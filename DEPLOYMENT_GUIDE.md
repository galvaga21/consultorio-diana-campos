
# Guía de Despliegue a Producción

Para llevar tu aplicación a producción (Vercel, Netlify, etc.), debes configurar lo siguiente:

## 1. Variables de Entorno (Environment Variables)

En tu plataforma de hosting (ej. Vercel), debes añadir las MISMAS variables que tienes en tu `.env.local`, pero con los valores de tu proyecto de Firebase de **Producción** (si tienes uno separado) o el mismo si usas uno solo.

Además, se recomienda agregar la URL de tu sitio:

```bash
# Variables de Firebase (OBLIGATORIAS)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Recomendado para SEO y Metadata
NEXT_PUBLIC_APP_URL=https://tu-dominio.com
```

> **Nota:** No subas tu archivo `.env.local` al repositorio (GitHub/GitLab). Configura estas variables en el panel de control de tu hosting.

## 2. Configuración en Firebase Console

Para que la autenticación funcione en tu dominio real (ej. `midominio.com`), debes autorizarlo en Firebase:

1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Ve a **Authentication** > **Settings** > **Authorized Domains**.
4. Haz clic en **Add Domain** y escribe tu dominio de producción (ej. `creciendojuntos.vercel.app` o `tu-sitio.com`).

## 3. Reglas de Seguridad (Firestore Rules)

Antes de lanzar, asegúrate de que tus reglas de Firestore sean seguras pero permitan el funcionamiento de la app.

Actualmente estás usando reglas en "Modo Desarrollo" (abiertas). Para producción, deberías restringirlas.

Copia el contenido de `firestore.rules` (ajustado para seguridad) en la consola de Firebase > Firestore > Reglas.

Ejemplo básico seguro:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Regla: Solo usuarios autenticados pueden leer/escribir
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 4. Build y Deploy

Si usas Vercel, simplemente conecta tu repositorio de GitHub. Vercel detectará que es un proyecto Next.js y configurará el build automáticamente (`npm run build`).

¡Listo para despegar! 🚀
