# Mobile Productivity Starter

Plantilla mínima para iniciar aplicaciones de productividad y automatización en Android y iPhone con Expo, React Native y TypeScript. Incluye navegación funcional, comandos repetibles, documentación para trabajar con o sin Codex y diagnóstico móvil guiado. No incluye backend, autenticación, pagos ni una aplicación de negocio concreta.

## Base técnica

- Expo SDK 57 (estable), React Native 0.86 y React 19.2.
- Expo Router para navegación basada en archivos.
- TypeScript estricto.
- npm con dependencias fijadas en `package-lock.json`.
- Continuous Native Generation: `ios/` y `android/` se generan cuando hacen falta y no se versionan.

Requisitos: Node.js 22.13 o superior y npm. Para compilaciones locales necesitas Xcode y CocoaPods en macOS y/o Android Studio con Android SDK y un JDK compatible.

## Instalación y primer arranque

```bash
npm ci
npm start
```

En la terminal de Expo, pulsa `i` para iOS o `a` para Android. También puedes iniciar directamente:

```bash
npm run ios
npm run android
```

En la pantalla inicial toca **Comprobar navegación**. Debe abrirse la pantalla “La navegación funciona”; vuelve con el botón de la pantalla o la cabecera.

El arranque intenta usar el puerto estándar 8081 y, si está ocupado, selecciona el siguiente disponible. También puedes elegir uno sin editar archivos, por ejemplo: `npm start -- --port 8083`.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm start` | Inicia Metro y muestra el menú de Expo. |
| `npm run ios` | Inicia Expo y abre el simulador iOS. |
| `npm run android` | Inicia Expo y abre Android. |
| `npm test` | Ejecuta la prueba de integración de navegación. |
| `npm run validate` | Ejecuta lint, TypeScript y tests; es la comprobación cotidiana. |
| `npm run doctor` | Ejecuta Expo Doctor y conserva sus fallos reales. |
| `npm run validate:full` | Ejecuta la validación cotidiana, Expo Doctor y exporta bundles de Android, iOS y web. |
| `npm run diagnose` | En macOS/Linux, guarda evidencia opcional del entorno en `.artifacts/diagnostics/`. |
| `npm run ios:dev-build` | Genera, compila e instala un build nativo de desarrollo iOS. |
| `npm run android:dev-build` | Genera, compila e instala un build nativo de desarrollo Android. |

Los dos últimos comandos son más lentos y generan `ios/` o `android/`. Úsalos al cerrar una función que dependa de código nativo o cuando Expo Go no sea suficiente. La primera compilación puede descargar herramientas de Gradle o dependencias de Apple.

Los comandos principales son portables y reenvían argumentos de Expo. En macOS, el build Android completa rutas habituales del SDK y JDK cuando no están configuradas. Por ejemplo: `npm run android:dev-build -- --device` o `npm run ios:dev-build -- --device "iPhone 17 Pro"`.

## Crear una app desde esta plantilla

1. Copia el repositorio a una carpeta nueva y conserva `package-lock.json`.
2. Ejecuta `npm ci`.
3. Cambia `name`, `slug`, `scheme`, `ios.bundleIdentifier` y `android.package` en `app.json`. Los identificadores deben ser únicos y no deben conservar `com.example...` antes de distribuir la app.
4. Reemplaza las pantallas de ejemplo bajo `src/app/` y añade componentes fuera de esa carpeta.
5. Ejecuta `npm run validate` y comprueba la navegación en las plataformas afectadas.

No se ha configurado publicación ni una release para tiendas. Las cuentas, firmas y perfiles de Apple o Google solo serán necesarios cuando decidas distribuir una aplicación real.

## Estructura útil

- `src/app/`: rutas y pantallas.
- `scripts/`: comandos utilizados tanto por consola como por Codex.
- `.codex/environments/environment.toml`: Actions visibles de Codex.
- `.agents/skills/mobile-diagnostics/`: skill explícita `$mobile-diagnostics`.
- `__tests__/`: pruebas de integración fuera de las rutas de Expo Router.
- `.github/workflows/validate.yml`: validación rápida y comprobación completa en Linux con Node.js 22.
- `USER_GUIDE.md`: guía paso a paso para personas con poca experiencia técnica.
- `PROJECT_STATUS.md`: estado actual y decisiones duraderas.
- `AGENTS.md`: convenciones breves para agentes de código.

Consulta [USER_GUIDE.md](USER_GUIDE.md) para el flujo cotidiano y [PROJECT_STATUS.md](PROJECT_STATUS.md) para saber qué se ha comprobado realmente.
