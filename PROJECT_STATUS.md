# Estado del proyecto

Última comprobación: 2026-09-24, commit `Stabilize starter workflow and add navigation test` (el commit que contiene este archivo).

## Decisiones duraderas

- Mantener Expo SDK 57, React Native 0.86 y React 19.2 hasta que una actualización mayor se decida y valide expresamente.
- Usar Expo Router, TypeScript estricto y Continuous Native Generation; `ios/` y `android/` no se versionan ni se editan directamente.
- Mantener el starter neutral: sin backend, autenticación, pagos, analítica ni proveedor externo predeterminado.
- Usar npm y `package-lock.json`; alinear paquetes compatibles mediante `npx expo install`.
- Mantener los comandos principales portables. El diagnóstico detallado es una herramienta opcional para macOS/Linux.
- Usar el puerto estándar de Expo y permitir alternativas mediante argumentos como `--port`.
- Guardar bundles, diagnósticos y evidencia extensa en `.artifacts/`, ignorado por Git.
- Conservar soporte web mientras siga validándose, sin presentarlo como plataforma principal.

## Estado verificable

| Área | Estado en la última comprobación |
| --- | --- |
| Instalación limpia | `npm ci` completado |
| Validación rápida | Lint, TypeScript y prueba de navegación completados |
| Expo Doctor | 21/21 comprobaciones |
| Bundles | Android, iOS y web exportados |
| Android nativo | No compilado ni probado visualmente en esta iteración; existe una comprobación visual anterior en `d5bf09d` |
| iOS nativo | No compilado ni probado visualmente en esta iteración; existe una comprobación visual anterior en `d5bf09d` |
| Dispositivos físicos | No comprobados |
| Distribución | Fuera de alcance; no configurada |

Actualiza este archivo solo cuando cambie una decisión duradera o el estado verificable. Conserva detalles de máquinas, rutas, simuladores, dispositivos y logs bajo `.artifacts/`.
