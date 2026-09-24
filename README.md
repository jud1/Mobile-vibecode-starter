# Mobile Productivity Starter

Plantilla mínima para iniciar aplicaciones de productividad y automatización en Android y iPhone con Expo, React Native y TypeScript. Incluye navegación funcional, comandos repetibles, documentación para trabajar con o sin Codex y diagnóstico móvil guiado. No incluye backend, autenticación, pagos ni una aplicación de negocio concreta.

## Base técnica

- Expo SDK 57 (estable), React Native 0.86 y React 19.2.
- Expo Router para navegación basada en archivos.
- TypeScript estricto.
- npm con dependencias fijadas en `package-lock.json`.
- Continuous Native Generation: `ios/` y `android/` se generan cuando hacen falta y no se versionan.

Requisitos: Node.js 22.13 o superior, npm y, para simuladores o compilaciones locales, Xcode en macOS y/o Android Studio con Android SDK. iOS también requiere CocoaPods; Expo intentará instalarlo si falta. Los scripts detectan las rutas predeterminadas de Android Studio y prefieren JDK 17 en macOS.

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

Los scripts usan el puerto 8083 porque en algunos Mac el 8081 ya pertenece a un servicio del sistema. Puedes elegir otro sin editar archivos, por ejemplo: `EXPO_PORT=8090 npm start`.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm start` | Inicia Metro y muestra el menú de Expo. |
| `npm run ios` | Inicia Expo y abre el simulador iOS. |
| `npm run android` | Inicia Expo y abre Android. |
| `npm run validate` | Ejecuta lint, TypeScript y Expo Doctor. |
| `npm run validate:full` | Añade una exportación de bundles para todas las plataformas. |
| `npm run diagnose` | Guarda evidencia del entorno en `.artifacts/diagnostics/`. |
| `npm run ios:dev-build` | Genera, compila e instala un build nativo de desarrollo iOS. |
| `npm run android:dev-build` | Genera, compila e instala un build nativo de desarrollo Android. |

Los dos últimos comandos son más lentos y generan `ios/` o `android/`. Úsalos al cerrar una función que dependa de código nativo o cuando Expo Go no sea suficiente. La primera compilación puede descargar herramientas de Gradle o dependencias de Apple.

Para escoger un destino concreto puedes reenviar argumentos de Expo, por ejemplo `npm run android:dev-build -- --device` o `npm run ios:dev-build -- --device "iPhone 17 Pro"`.

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
- `USER_GUIDE.md`: guía paso a paso para personas con poca experiencia técnica.
- `PROJECT_STATUS.md`: estado actual y decisiones duraderas.
- `AGENTS.md`: convenciones breves para agentes de código.

Consulta [USER_GUIDE.md](USER_GUIDE.md) para el flujo cotidiano y [PROJECT_STATUS.md](PROJECT_STATUS.md) para saber qué se ha comprobado realmente.
