# Guía de uso

Esta guía sirve aunque no conozcas React Native. Trabaja con una tarea de Codex por objetivo: una funcionalidad y sus correcciones pueden vivir en la misma tarea; abre otra cuando cambie el objetivo o la conversación se vuelva larga y confusa.

## Empezar una app

1. Duplica esta carpeta para no modificar tu plantilla original.
2. Abre la nueva carpeta como proyecto local en Codex o en tu editor.
3. Abre una terminal dentro de la carpeta y ejecuta:

   ```bash
   npm ci
   npm start
   ```

4. Pulsa `i` para abrir iOS o `a` para Android. La primera apertura puede tardar.
5. Toca **Comprobar navegación**. Si aparece la segunda pantalla, el starter está funcionando.

Antes de convertirla en una app real, pide a Codex que cambie los nombres e identificadores de `app.json` por los de tu producto.

## Pedir una funcionalidad nueva

Úsalo cuando el resultado sea un único objetivo claro. Copia este texto y reemplaza lo que está entre corchetes:

```text
Quiero añadir [funcionalidad] a esta app. El resultado esperado es [qué debe poder hacer la persona]. Mantén Expo, React Native y TypeScript, no añadas backend ni servicios externos salvo que sean imprescindibles y me lo expliques antes. Implementa el cambio, ejecuta las comprobaciones pertinentes y pruébalo en [Android/iOS/ambos] si el cambio afecta a esa plataforma. Actualiza PROJECT_STATUS.md solo si cambia una decisión duradera o el estado verificable del proyecto.
```

Mantén en esa misma tarea los ajustes y bugs de esa funcionalidad. Para cambios normales basta `npm run validate`; pide una compilación nativa cuando se añada código nativo, permisos o integración con el sistema.

## Continuar en una tarea nueva de Codex

Úsalo al cambiar de objetivo, cuando la tarea anterior sea demasiado larga o cuando Codex empiece a mezclar temas. Confirma primero que los cambios útiles están guardados o comprometidos en Git. Copia:

```text
Continúa el trabajo de este repositorio como una tarea nueva. Lee README.md, AGENTS.md y PROJECT_STATUS.md; revisa git status y los cambios sin confirmar. Mi único objetivo ahora es [objetivo]. Conserva las decisiones vigentes, no repitas trabajo ya validado y deja en PROJECT_STATUS.md solo los cambios de estado o decisiones duraderas. Ejecuta únicamente las comprobaciones relacionadas con este objetivo.
```

Si la tarea anterior dejó un traspaso específico, añade: `Lee también [nombre-del-archivo-de-traspaso].`

## Solicitar una revisión

Úsalo antes de compartir una versión, después de una funcionalidad importante o si quieres una segunda mirada real; no hace falta después de cada retoque. Copia:

```text
Revisa los cambios actuales de este repositorio como una revisión de código. Busca primero errores funcionales, regresiones, problemas de Android/iOS, accesibilidad y pruebas que falten. No modifiques archivos. Ordena los hallazgos por gravedad, cita archivo y línea, y explica cómo reproducirlos. Si no encuentras problemas, dilo y menciona cualquier riesgo o validación pendiente.
```

## Activar el diagnóstico de un fallo difícil

Úsalo cuando un error persista después de una corrección sencilla, solo ocurra en Android/iOS, falle una compilación nativa o los logs sean confusos. Invoca la skill explícitamente:

```text
Usa $mobile-diagnostics para investigar este fallo: [qué ocurre]. Esperaba [resultado]. Ocurre en [Android/iOS, emulador/dispositivo] al hacer [pasos mínimos]. Reproduce el problema, guarda los logs completos en .artifacts/diagnostics, prueba hipótesis concretas, corrige la causa y valida el arreglo. Resume solo la evidencia pertinente.
```

También puedes recoger un informe básico tú mismo:

```bash
npm run diagnose
```

El resultado queda ignorado por Git. Revísalo antes de compartirlo por si contiene rutas, nombres de dispositivos u otros datos privados.

## Probar y entender el resultado

- `npm run validate`: comprobación habitual y rápida; ejecuta lint, TypeScript y tests.
- `npm run doctor`: comprueba dependencias y configuración de Expo; puede necesitar Internet.
- `npm run validate:full`: ejecuta todo lo anterior y comprueba que Expo puede generar los bundles de Android, iOS y web.
- `npm run ios` o `npm run android`: abre la app en un simulador/emulador.
- `npm run ios:dev-build` o `npm run android:dev-build`: compila e instala código nativo.

Pide a Codex que distinga siempre entre “pasó validaciones automáticas”, “se abrió y comprobó en Android”, “se abrió y comprobó en iOS” y “no se pudo comprobar”. Un build correcto no demuestra por sí solo que una interacción visual funcione.

## Volver a un estado anterior

Git permite regresar sin depender del historial de chat. Antes de una función importante, pide a Codex: `Comprueba el estado, crea un commit descriptivo y dime su identificador.`

Para ver puntos guardados:

```bash
git log --oneline --decorate -10
```

Si hay cambios que quieres conservar, no ejecutes comandos de restauración todavía. Pide:

```text
Quiero volver al commit [identificador]. Primero muéstrame qué cambios actuales se perderían y propón la opción recuperable más segura. No borres ni restaures nada hasta que yo confirme.
```

Así Codex puede recomendar un commit nuevo, una rama o `git revert` según el caso. Evita copiar comandos destructivos de Internet como `git reset --hard`.

## Pedir ayuda cuando algo falle

Incluye qué intentabas hacer, qué esperabas, qué viste y la plataforma. Copia:

```text
Necesito ayuda con este fallo. Intentaba [acción], esperaba [resultado] y ocurrió [mensaje o comportamiento]. Estoy usando [Android/iOS y emulador/dispositivo]. Reproduce primero con el comando más pequeño, consulta solo los logs pertinentes y dime qué está comprobado, qué es una hipótesis y qué acción humana necesitas de mí. No borres datos ni cambies versiones a ciegas.
```

Si Codex te pide una acción física, debería indicarte exactamente qué abrir, pulsar o aceptar. Puedes hacer esa acción y responder `listo`; el resto del diagnóstico puede continuar en la misma tarea.
