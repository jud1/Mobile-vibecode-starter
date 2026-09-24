# Estado del proyecto

Actualizado: 2026-09-23.

## Estado actual

- Starter creado desde `expo-template-default@sdk-57` con npm y lockfile.
- App mínima con dos pantallas y navegación mediante Expo Router.
- Scripts comunes, Actions de Codex y skill explícita de diagnóstico añadidos.
- Validaciones automáticas, Android e iOS completadas en este Mac.

## Decisiones duraderas

- Mantener Expo SDK 57 y las versiones compatibles generadas por la plantilla oficial hasta que una actualización se decida y valide expresamente.
- Usar Expo Router, TypeScript estricto y Continuous Native Generation. No versionar ni editar directamente `ios/` y `android/`.
- Mantener el starter neutral: sin backend, autenticación, pagos ni proveedor de servicios predeterminado.
- Usar npm y `package-lock.json`; instalar librerías Expo mediante `npx expo install` para resolver versiones compatibles.
- Los comandos de consola son la fuente de verdad; las Actions de Codex solo los invocan.
- Guardar evidencia técnica extensa en `.artifacts/`, ignorado por Git.
- No fijar un modelo de Codex ni Fast mode en el repositorio.
- Usar el puerto 8083 por defecto en los scripts, porque el 8081 está ocupado por un servicio del sistema en este Mac; permitir sobrescribirlo con `EXPO_PORT` o `--port`.

## Verificación

| Área | Estado | Evidencia |
| --- | --- | --- |
| Lint, TypeScript y Expo Doctor | Comprobado | `npm run validate`; Expo Doctor 21/21 |
| Bundles Expo | Comprobado | `npm run validate:full`; exportación Android, iOS y web |
| Tests unitarios | No aplican todavía | El starter no contiene lógica de negocio; no se inventó una suite vacía |
| Android | Comprobado | Build debug, instalación, render y navegación en Pixel 10a virtual con Android 37 |
| iOS | Comprobado | Build debug con 0 errores/advertencias, instalación, render, navegación y regreso en iPhone 17 Pro simulado con iOS 26.5 |
| Dispositivos físicos | Pendiente | Requiere conectar y autorizar un teléfono o iPhone |
| Distribución en tiendas | Fuera de alcance | Sin cuentas, firma de distribución ni configuración de release |

Entorno comprobado: macOS arm64, Node 24.14.1, npm 11.11.0, Xcode 27.0, CocoaPods 1.17.0, Android SDK 36/37, emulador Android 37 y JDK 17. `npm audit` informa 14 vulnerabilidades moderadas transitivas; las correcciones propuestas fuerzan versiones incompatibles de Expo, por lo que no se aplicaron sin una actualización validada del SDK.

Actualiza este archivo cuando cambie una decisión de la sección anterior o el estado verificable. No registres aquí cada conversación ni cada retoque.
