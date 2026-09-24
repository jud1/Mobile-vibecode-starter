# Convenciones del repositorio

- Lee `README.md` y `PROJECT_STATUS.md` antes de cambios amplios. Mantén una tarea por objetivo.
- Este proyecto usa Expo SDK 57, Expo Router y TypeScript estricto. Comprueba documentación versionada antes de usar APIs de Expo o React Native.
- Las rutas viven en `src/app/`; coloca lógica y componentes reutilizables fuera de esa carpeta.
- Instala módulos de Expo con `npx expo install <paquete>` y conserva `package-lock.json`.
- `ios/` y `android/` son generados: configura comportamiento nativo en `app.json` o plugins, no edites esas carpetas manualmente.
- No añadas backend, autenticación, pagos, analítica ni proveedores externos sin un requisito explícito.
- Guarda logs y resultados extensos en `.artifacts/`; comparte resúmenes breves y sin datos sensibles.
- No uses subagentes por rutina. Considéralos solo para investigaciones realmente independientes con una ventaja concreta.
- No fijes modelos ni Fast mode. Aumenta el esfuerzo solo para arquitectura compleja, fallos difíciles, seguridad o revisiones de hitos.

## Criterio de finalización

- El cambio cumple el objetivo sin ampliar el alcance.
- `npm run validate` pasa; usa `npm run validate:full` para hitos o cambios de configuración/bundling.
- Prueba solo las plataformas afectadas y declara por separado qué se comprobó en Android, iOS y por validaciones automáticas.
- Actualiza documentación y `PROJECT_STATUS.md` únicamente cuando cambien comandos, uso, estado verificable o decisiones duraderas.
- Revisa el diff antes de entregar. Solicita una segunda revisión al cerrar funciones importantes o antes de compartir una versión, no tras cada retoque.
