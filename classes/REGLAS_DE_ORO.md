# Las 15 Reglas de Oro para el Currículum de Nauticode

Este documento establece el **estándar de calidad pedagógica y técnica** para la creación de unidades, lecciones y retos en **Nauticode** (Nautilus 4010).

El objetivo es transformar la plataforma en una experiencia de aprendizaje rigurosa, inmersiva y de nivel universitario (inspirada en la pedagogía de **CS50 de Harvard** y aplicada a la **robótica de competencia FRC**).

---

## Índice

1. [Pilar I: Filosofía y Tono Pedagógico](#pilar-i-filosofía-y-tono-pedagógico)
   - [Regla 1: Cero Emojis y Tono de Ingeniería](#regla-1-cero-emojis-y-tono-de-ingeniería)
   - [Regla 2: Analogías de Alto Impacto (CS50 + Robótica FRC)](#regla-2-analogías-de-alto-impacto-cs50--robótica-frc)
   - [Regla 3: El Modelo Mental Antes que la Sintaxis](#regla-3-el-modelo-mental-antes-que-la-sintaxis)
   - [Regla 4: Andamiaje Cognitivo Estricto](#regla-4-andamiaje-cognitivo-estricto)
2. [Pilar II: Estructura y Dinámica de la Lección](#pilar-ii-estructura-y-dinámica-de-la-lección)
   - [Regla 5: La Estructura 1 + 5 Obligatoria](#regla-5-la-estructura-1--5-obligatoria)
   - [Regla 6: Reto Teórico Exhaustivo y Sustancioso](#regla-6-reto-teórico-exhaustivo-y-sustancioso)
   - [Regla 7: Diversidad de Tipos de Retos Interactivos](#regla-7-diversidad-de-tipos-de-retos-interactivos)
   - [Regla 8: Determinismo y Secuencia Irrefutable en CODE_ORDER](#regla-8-determinismo-y-secuencia-irrefutable-en-code_order)
3. [Pilar III: Diseño de Preguntas y Distractores](#pilar-iii-diseño-de-preguntas-y-distractores)
   - [Regla 9: Prohibidas las Opciones de Broma (Distractores Pedagógicos)](#regla-9-prohibidas-las-opciones-de-broma-distractores-pedagógicos)
   - [Regla 10: Rastreo Mental de Ejecución (Code Tracing en CODE_TEST)](#regla-10-rastreo-mental-de-ejecución-code-tracing-en-code_test)
   - [Regla 11: Precisión Milimétrica en Nombres y Sintaxis (CODE_FILL)](#regla-11-precisión-milimétrica-en-nombres-y-sintaxis-code_fill)
   - [Regla 12: Desafíos de Diagnóstico de Fallos y Causa Raíz](#regla-12-desafíos-de-diagnóstico-de-fallos-y-causa-raíz)
4. [Pilar IV: Calidad Técnica, Formato e Integración](#pilar-iv-calidad-técnica-formato-e-integración)
   - [Regla 13: Saltos de Línea Reales (`\n`) y Formateo Impecable](#regla-13-saltos-de-línea-reales-n-y-formateo-impecable)
   - [Regla 14: Código Neutral y Transferible](#regla-14-código-neutral-y-transferible)
   - [Regla 15: Cero Ambigüedad en Preguntas y Soluciones](#regla-15-cero-ambigüedad-en-preguntas-y-soluciones)
5. [Guía Rápida de Tipos de Reto y Esquemas JSON](#guía-rápida-de-tipos-de-reto-y-esquemas-json)

---

## Pilar I: Filosofía y Tono Pedagógico

### Regla 1: Cero Emojis y Tono de Ingeniería
- **Principio**: La sobriedad visual y textual transmite profesionalismo técnico. Los emojis generan distracción, abaratan la percepción del contenido y no pertenecen a la documentación de ingeniería.
- **En la práctica**:
  - ❌ *Incorrecto*: `"¡Hola amigos! 🚀🤖 Hoy veremos qué es una variable 🎉✨"`
  - ✅ *Correcto*: `"# Arquitectura de Variables y Memoria\n\nEn ciencias de la computación, una variable es una dirección de memoria RAM reservada..."`
- **Ámbito**: Aplica a títulos, textos de teoría (`lessonText`), enunciados de preguntas (`question`), opciones de respuesta (`options`) y fragmentos de código (`codeSnippet`).

---

### Regla 2: Analogías de Alto Impacto (CS50 + Robótica FRC)
- **Principio**: La mente humana comprende lo abstracto comparándolo con sistemas físicos conocidos.
- **En la práctica**:
  - Combina siempre **dos niveles de anclaje**:
    1. *Analogía cotidiana intuitiva*: El experimento de hacer un sándwich de mantequilla de maní (precisión literal), una receta de cocina (algoritmos), un casillero con etiqueta (variables).
    2. *Aplicación en ingeniería de competencia (FRC)*: Sensores de ultrasonido, cámaras Limelight para Vision Tracking, controladores de motor SparkMax/TalonFX, secuencias de disparo en la rutina autónoma de 15 segundos.
  - ❌ *Incorrecto*: `"Un bucle while repite código mientras una condición sea verdadera."`
  - ✅ *Correcto*: `"Imagina la rutina de seguridad de un robot: 'Mientras el sensor de presión marque menos de 120 PSI, mantén encendido el compresor neumático'. Si la presión alcanza 120 PSI, el bucle se detiene inmediatamente para evitar una explosión."`

---

### Regla 3: El Modelo Mental Antes que la Sintaxis
- **Principio**: La sintaxis es pasajera (cambia entre Python, Java, C++ o Rust); el modelo mental de computación es universal y permanente.
- **En la práctica**:
  - Antes de escribir `for (int i = 0; i < 10; i++)`, enseña por qué una máquina necesita un contador, una condición de salida y un paso incremental.
  - Asegura que el estudiante pueda verbalizar el flujo lógico en español antes de escribir símbolos extraños como llaves `{}` o punto y coma `;`.

---

### Regla 4: Andamiaje Cognitivo Estricto
- **Principio**: Cada lección debe introducir **un único concepto nuevo a la vez**, apoyándose firmemente en lo aprendido en las lecciones previas sin dar saltos gigantes.
- **En la práctica**:
  - Si una clase enseña *Condicionales simples (`if`)*, no introduzcas de golpe operadores ternarios o estructuras `switch-case`.
  - Asegúrate de que los ejemplos no usen librerías externas o sintaxis críptica que el estudiante no haya visto aún.

---

## Pilar II: Estructura y Dinámica de la Lección

### Regla 5: La Estructura 1 + 5 Obligatoria
- **Principio**: Una clase completa debe ofrecer suficiente teoría para comprender a fondo, seguida de una batería balanceada de retos para consolidar el conocimiento.
- **Estructura fija por lección**:
  1. **Reto 1: `THEORY`**: Lectura profunda con modelo mental, analogías y síntesis.
  2. **Reto 2: `MATCHING` o `SELECT`**: Verificación de conceptos y vocabulario técnico.
  3. **Reto 3: `CODE_ORDER`**: Razonamiento algorítmico y secuencia temporal de ejecución.
  4. **Reto 4: `CODE_FILL`**: Precisión de sintaxis, nombres de variables y llamadas a funciones.
  5. **Reto 5: `SELECT` o `DEBUG`**: Diagnóstico de errores reales o toma de decisiones arquitectónicas.
  6. **Reto 6: `CODE_TEST`**: Rastreo de código línea por línea y predicción de output.

---

### Regla 6: Reto Teórico Exhaustivo y Sustancioso
- **Principio**: La pantalla teórica no es un resumen de 2 líneas; es una clase magistral compacta en formato Markdown.
- **Elementos indispensables en el `lessonText`**:
  - **Título H1** impactante (`# ...`).
  - **El Problema**: ¿Por qué inventamos esto? ¿Qué problema resuelve?
  - **La Analogía**: Comparativa con la vida cotidiana y con FRC.
  - **Casos de Estudio**: Diferenciación entre acierto y fallo común.
  - **La Regla de Oro**: Un resumen de 1 oración que el alumno jamás olvidará.

---

### Regla 7: Diversidad de Tipos de Retos Interactivos
- **Principio**: Resolver 5 preguntas de opción múltiple seguidas aburre al estudiante y fomenta que adivine por descarte.
- **En la práctica**:
  - Alterna entre retos que exigen **clasificar** (`MATCHING`), **ordenar en el tiempo** (`CODE_ORDER`), **escribir/completar** (`CODE_FILL`), **diagnosticar fallos** (`DEBUG`) y **calcular salidas** (`CODE_TEST`).

---

### Regla 8: Determinismo y Secuencia Irrefutable en `CODE_ORDER`
- **Principio**: En un ejercicio de ordenar código, no puede haber dos interpretaciones válidas. La física o la lógica de la máquina deben dictar un orden irrefutable.
- **Implementación técnica**:
  - Todas las opciones deben tener `correct: true`.
  - Deben incluir el atributo `audioSrc` indicando el orden: `"1"`, `"2"`, `"3"`, `"4"`.
  - El primer elemento de la secuencia es el que evalúa la corrección en el frontend.
  - Ejemplo físico:
    1. `abrirPinza()`
    2. `bajarBrazoAPosicionSuelo()`
    3. `cerrarPinzaSobrePieza()`
    4. `subirBrazoAPosicionTransporte()`

---

## Pilar III: Diseño de Preguntas y Distractores

### Regla 9: Prohibidas las Opciones de Broma (Distractores Pedagógicos)
- **Principio**: Las opciones incorrectas deben obligar al estudiante a pensar críticamente. Si una opción dice *"Porque el robot odia a los humanos"*, el estudiante descarta sin razonar y no aprende nada.
- **Cómo construir distractores pedagógicos de calidad**:
  - **Distractor 1 (Error de Concepto Cruzado)**: Confundir dos conceptos parecidos (ej. confundir un Error de Sintaxis con un Error de Lógica).
  - **Distractor 2 (Falsa Intuición Humana)**: Suponer que la máquina hace cosas por sentido común (ej. *"La computadora dedujo que debía frenar porque vio la pared"*).
  - **Distractor 3 (Mito Técnico de Principiante)**: Una creencia errónea común (ej. *"El nombre de la variable no importa porque el compilador lee la intención"* o *"Un bucle while siempre ejecuta al menos una vez"*).

---

### Regla 10: Rastreo Mental de Ejecución (`CODE_TEST`)
- **Principio**: Un programador competente debe ser capaz de simular mentalmente el ciclo de instrucción de la CPU (Fetch-Decode-Execute).
- **En la práctica**:
  - Diseña retos donde variables cambien de valor progresivamente.
  - El estudiante debe seguir el estado de la memoria paso a paso:
    ```python
    x = 10
    x = x + 5
    x = 2
    print(x)
    ```
  - Las opciones deben incluir los resultados intermedios (`15`, `17`, `10`) para atrapar a quien no leyó secuencialmente.

---

### Regla 11: Precisión Milimétrica en Nombres y Sintaxis (`CODE_FILL`)
- **Principio**: El compilador es implacable con las mayúsculas, minúsculas y caracteres especiales. El currículum debe entrenar el ojo clínico del alumno.
- **En la práctica**:
  - Si la función se llama `activarCompresor()`, las opciones del fill deben contrastar:
    - `activarCompresor` (Correcta)
    - `ActivarCompresor` (Error de mayúscula inicial)
    - `activar_compresor` (Confusión de convención snake_case vs camelCase)
    - `activarcompresor` (Falta de separación visual)

---

### Regla 12: Desafíos de Diagnóstico de Fallos y Causa Raíz
- **Principio**: En la vida real, el 80% del tiempo de un desarrollador se invierte depurando (*debugging*).
- **En la práctica**:
  - Plantea escenarios donde el código compila perfectamente pero el comportamiento del robot es desastroso.
  - Pregunta: *"¿Por qué ocurrió esto?"* para que el alumno aprenda a rastrear la falla lógica en vez de culpar al hardware.

---

## Pilar IV: Calidad Técnica, Formato e Integración

### Regla 13: Saltos de Línea Reales (`\n`) y Formateo Impecable
- **Principio**: Los componentes visuales de la plataforma (`CodeFillCard`, `CodeTestCard`, `DebugCard`) requieren que los snippets de código preserven la estructura vertical para ser legibles.
- **En la práctica**:
  - Usa siempre `\n` explícito en las cadenas JSON o template strings multilínea en TypeScript.
  - Mantén sangría uniforme de 4 espacios.
  - ❌ *Snippet roto*: `"x = 1 if x > 0: print('ok')"`
  - ✅ *Snippet correcto*: `"x = 1\nif (x > 0):\n    print('ok')"`

---

### Regla 14: Código Neutral y Transferible
- **Principio**: En el bloque *Basics of Code*, el alumno no debe frustrarse por la parafernalia sintáctica de un lenguaje específico (como `public static void main(String[] args)`).
- **En la práctica**:
  - Utiliza sintaxis clara, expresiva y limpia (estilo Python / Pseudocódigo estructurado).
  - La lógica aprendida debe transferirse inmediatamente cuando pasen a las unidades de Java o C++ de WPILib.

---

### Regla 15: Cero Ambigüedad en Preguntas y Soluciones
- **Principio**: Nunca debe existir duda de cuál es la respuesta correcta. No uses preguntas capciosas donde dos opciones puedan ser válidas según la interpretación filosófica.
- **Criterio de Validación**:
  - Si un ingeniero senior o mentor de robótica lee la pregunta y las 4 opciones, debe señalar la respuesta correcta en menos de 3 segundos sin vacilar.

---

## Guía Rápida de Tipos de Reto y Esquemas JSON

### 1. THEORY
```json
{
  "type": "THEORY",
  "question": "¿Por qué las computadoras son estrictamente literales?",
  "lessonText": "# Título\n\nTexto explicativo con **énfasis** y listas:\n- Punto 1\n- Punto 2",
  "options": [
    { "text": "Respuesta correcta bien fundamentada", "correct": true },
    { "text": "Distractor técnico 1", "correct": false },
    { "text": "Distractor técnico 2", "correct": false },
    { "text": "Distractor técnico 3", "correct": false }
  ]
}
```

### 2. MATCHING
*Todas las opciones llevan `correct: true` y el separador `|||`.*
```json
{
  "type": "MATCHING",
  "question": "Clasifica cómo reacciona una computadora ante cada situación:",
  "options": [
    { "text": "Escribir 'imprimir' en vez de 'print'|||Error de Sintaxis", "correct": true },
    { "text": "Girar motor al revés|||Error de Lógica", "correct": true },
    { "text": "Asumir que sabe cuándo frenar|||Falsa Intuición", "correct": true },
    { "text": "Mismo código, idéntico resultado|||Determinismo", "correct": true }
  ]
}
```

### 3. CODE_ORDER
*Todas las opciones llevan `correct: true` y `audioSrc` indicando el orden 1-based.*
```json
{
  "type": "CODE_ORDER",
  "question": "Ordena la secuencia estricta que la máquina debe seguir:",
  "options": [
    { "text": "abrirPinza()", "correct": true, "audioSrc": "1" },
    { "text": "bajarBrazoAPosicionSuelo()", "correct": true, "audioSrc": "2" },
    { "text": "cerrarPinzaSobrePieza()", "correct": true, "audioSrc": "3" },
    { "text": "subirBrazoAPosicionTransporte()", "correct": true, "audioSrc": "4" }
  ]
}
```

### 4. CODE_FILL
*Requiere `codeSnippet` con `_____` marcando el espacio vacío.*
```json
{
  "type": "CODE_FILL",
  "question": "Completa la llamada respetando el nombre exacto de la función:",
  "codeSnippet": "def activarCompresor():\n    return 120\n\nestado = _____()",
  "options": [
    { "text": "activarCompresor", "correct": true },
    { "text": "ActivarCompresor", "correct": false },
    { "text": "activar_compresor", "correct": false },
    { "text": "activarcompresor", "correct": false }
  ]
}
```

### 5. SELECT
*Opción múltiple clásica con distractores conceptuales profundos.*
```json
{
  "type": "SELECT",
  "question": "El robot avanzó 30 metros en vez de 3 y chocó, sin marcar error rojo. ¿Qué ocurrió?",
  "options": [
    { "text": "Error de Lógica: La computadora ejecutó obedientemente la instrucción matemática errónea", "correct": true },
    { "text": "Error de Sintaxis: El procesador no reconoció la palabra metros", "correct": false },
    { "text": "Fallo de intuición: La computadora decidió explorar por su cuenta", "correct": false },
    { "text": "El sistema operativo borró el código por sobrecalentamiento", "correct": false }
  ]
}
```

### 6. CODE_TEST
*Rastreo secuencial paso a paso con visualización de código.*
```json
{
  "type": "CODE_TEST",
  "question": "¿Cuál será el valor impreso en consola tras ejecutar este código?",
  "codeSnippet": "velocidad = 0\nvelocidad = velocidad + 50\nvelocidad = 10\nprint(velocidad)",
  "options": [
    { "text": "10", "correct": true },
    { "text": "50", "correct": false },
    { "text": "60", "correct": false },
    { "text": "0", "correct": false }
  ]
}
```

---

## Flujo de Trabajo para Publicar Lecciones

Una vez editada una lección en TypeScript (`scripts/curriculum/block-X.ts`) o directamente en JSON (`classes/.../lesson-X.json`):

1. **Compilar los archivos JSON** (si editaste en TypeScript):
   ```bash
   npx tsx scripts/curriculum/generate-all.ts
   ```
2. **Sembrar en la base de datos Neon**:
   ```bash
   npm run db:prod
   ```
3. **Confirmar y enviar cambios a GitHub**:
   ```bash
   git add .
   git commit -m "feat(curriculum): upgrade Unit X Lesson Y following golden rules"
   git push
   ```
