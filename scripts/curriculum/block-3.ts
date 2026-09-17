import { UnitDefinition } from "./types";

export const block3Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 8: BOOLEAN LOGIC & COMPARISONS
  // ==========================================
  {
    order: 8,
    slug: "unit-8",
    title: "Boolean Logic & Comparisons",
    description: "Comparadores y compuertas lógicas: AND, OR y NOT en sensores",
    guidebookText: `# Guía de Estudio: Unit 8 - Boolean Logic & Comparisons

La inteligencia de un robot comienza cuando puede comparar valores y evaluar condiciones lógicas complejas.

### 1. Operadores de Comparación (Relacionales):
Comparan dos valores y siempre devuelven un resultado booleano (\`true\` o \`false\`):
- Igualdad: \`==\` (¡Ojo! Dos signos iguales para comparar, uno solo para asignar).
- Desigualdad: \`!=\` (Diferente de).
- Mayor / Menor que: \`>\`, \`<\`.
- Mayor o igual / Menor o igual: \`>=\`, \`<=\`.

### 2. Operadores Lógicos:
- **AND (\`&&\`):** Da \`true\` SOLAMENTE si **ambas** condiciones son verdaderas.
- **OR (\`||\`):** Da \`true\` si **al menos una** de las condiciones es verdadera.
- **NOT (\`!\`):** Invierte el valor (\`!true\` se convierte en \`false\`).`,
    lessons: [
      {
        title: "Operadores de Comparación",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo compara la computadora dos datos numéricos?",
            lessonText: "# Las Balanzas de la CPU ️\n\nLos **operadores relacionales** comparan dos valores y siempre producen un booleano (`true` o `false`):\n- `==` : ¿Es exactamente igual? (`5 == 5` -> `true`)\n- `!=` : ¿Es diferente? (`5 != 3` -> `true`)\n- `>` y `<` : Mayor que y menor que (`12 > 10` -> `true`)\n- `>=` y `<=` : Mayor o igual, y menor o igual.\n\nEn FIRST Robotics comparamos todo el tiempo:\n`bateria >= 12.0` (¿La batería tiene suficiente carga?)\n`distanciaCM < 30.0` (¿Hay un obstáculo demasiado cerca?).",
            options: [
              { text: "Comparan dos valores y devuelven un booleano (true o false)", correct: true },
              { text: "Cambian el valor del número a cero automáticamente", correct: false },
              { text: "Apagan el motor si el número es negativo", correct: false },
              { text: "Solo funcionan con letras y nunca con números", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué resultado imprimirá la consola?",
            codeSnippet: "voltaje = 11.2\nestaBajo = (voltaje < 12.0)\nprint(estaBajo)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false },
              { text: "11.2", correct: false },
              { text: "12.0", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operador de comparación con su significado:",
            options: [
              { text: "==|||Igual a (compara igualdad)", correct: true },
              { text: "!=|||Diferente de (no es igual)", correct: true },
              { text: ">=|||Mayor o igual que", correct: true },
              { text: "<=|||Menor o igual que", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "¡La trampa más clásica del mundo! Este código asigna en lugar de comparar. ¿Cómo se corrige?",
            codeSnippet: "esCampeon = (puntos = 100)",
            options: [
              { text: "Debe usar '==' para comparar igualdad: (puntos == 100)", correct: true },
              { text: "Debe usar tres signos iguales '==='", correct: false },
              { text: "No se pueden comparar puntos", correct: false },
              { text: "Hay que quitar los paréntesis", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de las siguientes comparaciones evalúa a FALSE?",
            options: [
              { text: "10 != 10", correct: true },
              { text: "10 == 10", correct: false },
              { text: "15 >= 10", correct: false },
              { text: "5 < 8", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico AND (&&)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo funciona el operador lógico AND?",
            lessonText: "# Ambas Condiciones o Nada \n\nEl operador **AND** (en Java/C++ se escribe `&&`, en Python se escribe `and`) exige que **ambas condiciones sean verdaderas simultáneamente** para que el resultado sea `true`.\n\nEjemplo en el robot Nautilus:\n¿Cuándo podemos disparar una pieza al Speaker?\n`shooterListo && robotAlineado`\n- Si el shooter está listo (`true`) PERO el robot no está alineado (`false`)... **NO disparas** (`false`).\n- Si el robot está alineado (`true`) pero el shooter está frío (`false`)... **NO disparas** (`false`).\n- ¡SOLO si ambos son `true` la compuerta AND abre el paso!",
            options: [
              { text: "Devuelve true únicamente si TODAS las condiciones conectadas son verdaderas", correct: true },
              { text: "Devuelve true si al menos una de las dos condiciones es falsa", correct: false },
              { text: "Suma los dos números y saca el promedio", correct: false },
              { text: "Siempre devuelve false sin importar nada", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la evaluación de este sistema de disparo?",
            codeSnippet: "shooterListo = true\nrobotAlineado = false\npuedeDisparar = (shooterListo and robotAlineado)\nprint(puedeDisparar)",
            options: [
              { text: "false (porque una de las condiciones es falsa)", correct: true },
              { text: "true", correct: false },
              { text: "error", correct: false },
              { text: "none", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la condición para que el robot avance solo si está habilitado Y el camino está libre:",
            codeSnippet: "puedeAvanzar = (robotHabilitado _____ caminoLibre)",
            options: [
              { text: "and", correct: true },
              { text: "or", correct: false },
              { text: "not", correct: false },
              { text: "==", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de esta expresión lógica?",
            codeSnippet: "a = (5 > 2) and (10 == 10)\nprint(a)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En una expresión con 3 condiciones unidas por AND (`A and B and C`), ¿qué ocurre si la primera condición (A) es falsa?",
            options: [
              { text: "El resultado final ya es FALSE automáticamente (evaluación de cortocircuito / short-circuit)", correct: true },
              { text: "La computadora explota", correct: false },
              { text: "Se evalúa al revés", correct: false },
              { text: "El resultado se convierte en true", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico OR (||)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo funciona el operador lógico OR?",
            lessonText: "# Basta Con Una Sola Verdad \n\nEl operador **OR** (en Java/C++ se escribe `||`, en Python se escribe `or`) es mucho más flexible que el AND: **devuelve `true` si al menos una de las condiciones es verdadera**.\n\nEjemplo de seguridad en Nautilus:\n¿Cuándo debemos frenar el robot de emergencia?\n`botonEStopPresionado || bateriaPeligrosamenteBaja`\n- Si el botón de E-Stop se presiona (`true`), ¡frenamos de inmediato!\n- Si la batería cae a nivel crítico (`true`), ¡frenamos de inmediato!\n- Solo si NINGUNA de las dos situaciones ocurre (`false || false`), el robot continúa.",
            options: [
              { text: "Devuelve true si al menos UNA de las condiciones es verdadera", correct: true },
              { text: "Exige que todas las condiciones sean falsas obligatoriamente", correct: false },
              { text: "Multiplica los valores booleanos", correct: false },
              { text: "Solo funciona los fines de semana", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este chequeo de seguridad?",
            codeSnippet: "sensorLimite = false\nbotonManual = true\nfrenar = (sensorLimite or botonManual)\nprint(frenar)",
            options: [
              { text: "true (porque botonManual es true)", correct: true },
              { text: "false", correct: false },
              { text: "none", correct: false },
              { text: "error", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja la operación booleana con su resultado final:",
            options: [
              { text: "true and true|||true", correct: true },
              { text: "true and false|||false", correct: true },
              { text: "false or true|||true", correct: true },
              { text: "false or false|||false", correct: true }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de este código?",
            codeSnippet: "alarma = (10 > 20) or (5 == 5)\nprint(alarma)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el único caso donde un operador OR devuelve FALSE?",
            options: [
              { text: "Cuando absolutamente TODAS las condiciones conectadas son falsas", correct: true },
              { text: "Cuando la primera condición es verdadera", correct: false },
              { text: "Cuando hay más de tres condiciones", correct: false },
              { text: "Nunca devuelve false", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico NOT (!)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué hace el operador lógico NOT?",
            lessonText: "# El Inversor de Realidad \n\nEl operador **NOT** (en Java/C++ se escribe `!`, en Python se escribe `not`) es un operador unario que **invierte el valor de cualquier booleano**:\n- `not true` se convierte en `false`.\n- `not false` se convierte en `true`.\n\nEjemplo práctico:\n`hayObstaculo = false`\n`caminoLibre = not hayObstaculo` (¡caminoLibre ahora es `true`!)\n\nEn robótica se usa todo el tiempo con interruptores normalmente cerrados (NC) o para comprobar si una tarea aún no ha terminado.",
            options: [
              { text: "Invierte el valor de verdad: convierte true en false y false en true", correct: true },
              { text: "Borra la variable para siempre", correct: false },
              { text: "Vuelve positivo cualquier número negativo", correct: false },
              { text: "Duplica el valor booleano", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este código con NOT?",
            codeSnippet: "motorEncendido = true\nprint(not motorEncendido)",
            options: [
              { text: "false", correct: true },
              { text: "true", correct: false },
              { text: "motorEncendido", correct: false },
              { text: "none", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la expresión que niega el booleano 'isBlocked':",
            codeSnippet: "// Invierte isBlocked con not",
            options: [
              { text: "not isBlocked", correct: true },
              { text: "!isBlocked", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá una doble negación (`not not true`)?",
            codeSnippet: "print(not (not true))",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿A cuál de las siguientes expresiones equivale exactamente `not (x == 10)`?",
            options: [
              { text: "x != 10", correct: true },
              { text: "x == 10", correct: false },
              { text: "x > 10", correct: false },
              { text: "x < 10", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Lógica de Seguridad del Elevador",
        challenges: [
          {
            type: "THEORY",
            question: "¡Seguridad de alto voltaje en Nautilus 4010!",
            lessonText: "# El Enclavamiento de Seguridad (Interlock) \n\nEl mecanismo de elevación de nuestro robot puede levantar 30 kg a toda velocidad. Para que sea 100% seguro, el software tiene una regla de oro:\n\n**Solo se permite subir el elevador si:**\n1. El limit switch superior NO ha sido alcanzado (`not limiteSuperior`).\n2. Y además, la presión de aire es correcta O el motor está habilitado.\n\nEn este reto final de la Unidad 8, pondrás a prueba tu dominio de comparadores, AND, OR y NOT.",
            options: [
              { text: "¡Vamos a programar el interlock de seguridad!", correct: true },
              { text: "Prefiero que el elevador choque contra el techo", correct: false },
              { text: "No me importa la seguridad mecánica", correct: false },
              { text: "Quiero desconectar los sensores", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Evalúa si el elevador puede subir con estas condiciones:",
            codeSnippet: "limiteAlcanzado = false\nmotorListo = true\npuedeSubir = (not limiteAlcanzado) and motorListo\nprint(puedeSubir)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false },
              { text: "none", correct: false },
              { text: "error", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "El robot alcanzó el límite mecánico superior (`limiteAlcanzado = true`). ¿Qué imprimirá ahora?",
            codeSnippet: "limiteAlcanzado = true\nmotorListo = true\npuedeSubir = (not limiteAlcanzado) and motorListo\nprint(puedeSubir)",
            options: [
              { text: "false", correct: true },
              { text: "true", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la verificación: El robot puede disparar si tiene la pieza Y la mira Limelight está fija:",
            codeSnippet: "listoDisparo = (tienePieza _____ limelightBloqueada)",
            options: [
              { text: "and", correct: true },
              { text: "or", correct: false },
              { text: "not", correct: false },
              { text: "==", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué la lógica booleana es la piedra angular de la autonomía en robótica?",
            options: [
              { text: "Porque permite al robot combinar múltiples señales sensoriales para tomar decisiones certeras y seguras", correct: true },
              { text: "Porque ahorra espacio físico en el chasis de metal", correct: false },
              { text: "Porque hace que las luces del robot brillen más fuerte", correct: false },
              { text: "No es necesaria, basta con mover motores a ciegas", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 9: IF CONDITIONS
  // ==========================================
  {
    order: 9,
    slug: "unit-9",
    title: "If Conditions",
    description: "Toma de decisiones: Ejecutar código solo cuando una condición se cumple",
    guidebookText: `# Guía de Estudio: Unit 9 - If Conditions

Hasta ahora, todos nuestros programas ejecutaban cada línea de arriba hacia abajo sin excepción. La sentencia **\`if\`** introduce por primera vez **caminos y bifurcaciones**: permite que un bloque de código se ejecute **SÓLO SI** una condición es verdadera (\`true\`).

### Estructura Básica:
\`\`\`python
if condicion:
    # Este bloque solo corre si condicion == true
    accion()
\`\`\`

### Reglas Sagradas:
1. **La Condición:** Siempre debe evaluar a un valor booleano (\`true\` o \`false\`).
2. **Indentación / Bloques:** En Python, la indentación (espacios hacia la derecha) define qué líneas pertenecen al \`if\`. En Java y C++, se usan llaves \`{ ... }\`.
3. **\`=\` vs \`==\`:** ¡El error número uno! \`if (x = 5)\` intenta asignar. \`if (x == 5)\` compara.`,
    lessons: [
      {
        title: "La Sentencia If",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es una sentencia 'if' y para qué sirve?",
            lessonText: "# El Guardián del Camino \n\nEn la vida diaria tomas decisiones condicionales:\n*'SI está lloviendo, tomo una sombrilla'*. Si no está lloviendo, simplemente ignoras la sombrilla y sigues caminando.\n\nEn código, la instrucción **`if`** funciona exactamente igual:\n```python\nif distanciaCM < 20:\n    print('¡Frenar! Obstáculo detectado')\n```\n- La computadora evalúa la condición entre el `if` y los dos puntos.\n- **Si es `true`:** Entra y ejecuta el bloque de código indentado.\n- **Si es `false`:** Se salta ese bloque por completo y continúa con lo que sigue.",
            options: [
              { text: "Una estructura de control que ejecuta un bloque de código únicamente si su condición es verdadera", correct: true },
              { text: "Un comando que apaga la computadora si hay un error", correct: false },
              { text: "Una variable que solo guarda números pares", correct: false },
              { text: "Un bucle que se repite para siempre", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este programa?",
            codeSnippet: "bateria = 10.5\nif bateria < 12.0:\n    print('Alerta de Batería Baja')\nprint('Chequeo Finalizado')",
            options: [
              { text: "Alerta de Batería Baja en la primera línea y Chequeo Finalizado en la segunda", correct: true },
              { text: "Solamente 'Chequeo Finalizado'", correct: false },
              { text: "Solamente 'Alerta de Batería Baja'", correct: false },
              { text: "No imprime absolutamente nada", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá la consola si la condición del 'if' es falsa?",
            codeSnippet: "temperatura = 35\nif temperatura > 80:\n    print('¡Motor sobrecalentado!')\nprint('Todo en orden')",
            options: [
              { text: "Todo en orden", correct: true },
              { text: "¡Motor sobrecalentado!\nTodo en orden", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la palabra clave para tomar la decisión condicional:",
            codeSnippet: "_____ targetVisible == true:\n    iniciarApuntadoAutomatico()",
            options: [
              { text: "if", correct: true },
              { text: "when", correct: false },
              { text: "then", correct: false },
              { text: "loop", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En la sentencia `if condicion:` en Python, ¿cómo sabe la computadora qué líneas de código pertenecen al 'if'?",
            options: [
              { text: "Por la indentación (espacios de sangría hacia la derecha)", correct: true },
              { text: "Por el color del texto en el editor", correct: false },
              { text: "Por el tamaño de la letra", correct: false },
              { text: "La computadora no lo sabe y adivina", correct: false }
            ]
          }
        ]
      },
      {
        title: "Indentación y Bloques de Código",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué la indentación es obligatoria en Python y el orden visual en todos los lenguajes?",
            lessonText: "# El Espacio es Estructura \n\nObserva con atención este ejemplo:\n```python\nif robotHabilitado:\n    print('Encendiendo compresor')\n    print('Calibrando encoders')\nprint('Programa activo')\n```\n- Las líneas que tienen **4 espacios de sangría** hacia adentro forman el **cuerpo del `if`**. Solo corren si `robotHabilitado` es `true`.\n- La última línea (`print('Programa activo')`) no tiene sangría: está **afuera del `if`** y se ejecutará SIEMPRE, sin importar la condición.\n\nEn Java y C++ el cuerpo se delimita con llaves `{ ... }`, pero los buenos programadores siempre indentan para que el código sea legible.",
            options: [
              { text: "Porque define los límites de qué instrucciones están dentro de la condición y cuáles están fuera", correct: true },
              { text: "Porque a la CPU le gusta ver márgenes anchos", correct: false },
              { text: "Para que el archivo pese más kilobytes", correct: false },
              { text: "Es solo decorativo y nunca afecta el funcionamiento en ningún lenguaje", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el bug en este bloque en Python (IndentationError):",
            codeSnippet: "if velocidad > 0:\nprint('Robot en movimiento')",
            options: [
              { text: "La línea del print debe estar indentada (con sangría) debajo del 'if'", correct: true },
              { text: "Falta un punto y coma al final", correct: false },
              { text: "No se puede usar la palabra velocidad", correct: false },
              { text: "El signo '>' no existe", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué líneas se ejecutarán si 'sensor' vale 5?",
            codeSnippet: "sensor = 5\nif sensor > 10:\n    print('A')\n    print('B')\nprint('C')",
            options: [
              { text: "Solamente 'C' (porque A y B están dentro del if que dio false)", correct: true },
              { text: "A, B y C", correct: false },
              { text: "A y B solamente", correct: false },
              { text: "Ninguna", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena este bloque condicional correctamente:",
            options: [
              { text: "sensorOptico = true", correct: true, audioSrc: "1" },
              { text: "if sensorOptico == true:", correct: true, audioSrc: "2" },
              { text: "    detenerMotorIntake()", correct: true, audioSrc: "3" },
              { text: "    print('Pieza asegurada')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "En Java y C++, ¿qué símbolos se utilizan para abrir y cerrar el bloque de un if?",
            options: [
              { text: "Llaves { y }", correct: true },
              { text: "Corchetes [ y ]", correct: false },
              { text: "Comillas \" y \"", correct: false },
              { text: "Flechas <- y ->", correct: false }
            ]
          }
        ]
      },
      {
        title: "Condiciones Anidadas (Ifs dentro de Ifs)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un 'if anidado' (nested if)?",
            lessonText: "# Decisiones Dentro de Decisiones \n\nA veces una decisión depende de que una decisión previa ya se haya cumplido.\n\nEjemplo en la arena de FIRST:\n```python\nif robotHabilitado:\n    print('Paso 1: Robot encendido')\n    if botonDisparoPresionado:\n        print('Paso 2: Disparando')\n```\n- Si `robotHabilitado` es `false`, la computadora ni siquiera se molesta en mirar `botonDisparoPresionado`.\n- El código interior solo se alcanza si **ambas compuertas se abrieron sucesivamente**.",
            options: [
              { text: "Una sentencia if colocada dentro del bloque de otra sentencia if previa", correct: true },
              { text: "Un if que se ejecuta hacia atrás", correct: false },
              { text: "Un error que destruye las variables", correct: false },
              { text: "Un if que solo funciona con números primos", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este programa?",
            codeSnippet: "autonomoActivo = true\ntieneNota = false\nif autonomoActivo:\n    if tieneNota:\n        print('Disparar Nota')\nprint('Fin del ciclo')",
            options: [
              { text: "Fin del ciclo (porque tieneNota es false, el if interno no corre)", correct: true },
              { text: "Disparar Nota\nFin del ciclo", correct: false },
              { text: "Disparar Nota solamente", correct: false },
              { text: "No imprime nada", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la telemetría si ambas condiciones son verdaderas?",
            codeSnippet: "visionDetectada = true\ndistanciaCorta = true\nif visionDetectada:\n    if distanciaCorta:\n        print('BLANCO FIJADO')",
            options: [
              { text: "BLANCO FIJADO", correct: true },
              { text: "", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿A cuál de las siguientes expresiones equivale lógicamente un if anidado `if A: if B: accion()`?",
            options: [
              { text: "if (A and B): accion()", correct: true },
              { text: "if (A or B): accion()", correct: false },
              { text: "if (not A): accion()", correct: false },
              { text: "if (A == B): accion()", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el problema de legibilidad: Anidar 8 ifs seguidos hace que el código sea casi imposible de leer. ¿Cómo se llama esa mala práctica?",
            codeSnippet: "if a: if b: if c: if d: if e: if f: print('ok')",
            options: [
              { text: "Código espagueti / Pyramid of Doom (Pirámide de la Muerte)", correct: true },
              { text: "Optimización cuántica de alta velocidad", correct: false },
              { text: "Compilación supersónica", correct: false },
              { text: "Algoritmo de campeonato mundial", correct: false }
            ]
          }
        ]
      },
      {
        title: "La Trampa Mortal: = vs ==",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué confundir '=' con '==' causa desastres en los novatos?",
            lessonText: "# El Error Más Costoso de la Historia \n\nRecuerda la regla de oro:\n- **`=` es ASIGNACIÓN:** Guarda un dato dentro de una variable (`velocidad = 100`).\n- **`==` es COMPARACIÓN:** Pregunta si dos cosas son iguales (`if velocidad == 100:`).\n\nEn lenguajes como C++ y Java, escribir accidentalmente:\n`if (potencia = 0)`\nNo compara si la potencia es 0... ¡**Le asigna 0 a la potencia en ese mismo instante**! Tu robot se detendrá de golpe o se comportará de forma errática sin que el compilador te avise del error lógico.",
            options: [
              { text: "Porque '=' modifica la variable asignándole un valor, mientras que '==' sólo compara sin alterar nada", correct: true },
              { text: "Porque un '=' gasta la mitad de la batería que dos '=='", correct: false },
              { text: "Porque el procesador no sabe leer dos signos juntos", correct: false },
              { text: "No hay diferencia, ambos hacen exactamente lo mismo en todos lados", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la forma correcta de preguntar si el sensor marca exactamente 45 grados?",
            options: [
              { text: "if sensor == 45:", correct: true },
              { text: "if sensor = 45:", correct: false },
              { text: "if sensor === 45::", correct: false },
              { text: "if 45 -> sensor:", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa con el operador de comparación para verificar si la alianza es 'Azul':",
            codeSnippet: "if colorAlianza _____ 'Azul':\n    print('Iniciando en estación Azul')",
            options: [
              { text: "==", correct: true },
              { text: "=", correct: false },
              { text: "+=", correct: false },
              { text: ":=", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige este código para que compare en lugar de reasignar:",
            codeSnippet: "if matchNumero = 1:\n    print('Primer match regional')",
            options: [
              { text: "Cambiar '=' por '==': if matchNumero == 1:", correct: true },
              { text: "Cambiar el 1 por 'primer'", correct: false },
              { text: "Quitar los dos puntos del final", correct: false },
              { text: "No hay nada que corregir", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la condición que verifica si 'estado' es igual al string 'READY':",
            codeSnippet: "// Compara estado con 'READY'",
            options: [
              { text: "estado == 'READY'", correct: true },
              { text: "estado = 'READY'", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Detección y Freno Preventivo",
        challenges: [
          {
            type: "THEORY",
            question: "¡Evitando colisiones en la arena con Teus!",
            lessonText: "# El Sensor de Distancia Láser (LiDAR / ToF) \n\nNautilus 4010 tiene un sensor de distancia Time-of-Flight en el parachoques delantero.\n\nDurante el partido, si el sensor detecta que la distancia a otro robot o a la pared cae por debajo del umbral de seguridad de `25.0` cm:\n¡El software debe aplicar frenado preventivo de inmediato para evitar una tarjeta de penalización!\n\nEn este reto final de la Unidad 9, ensamblarás y verificarás la lógica condicional de frenado.",
            options: [
              { text: "¡Vamos a programar el freno preventivo con Teus!", correct: true },
              { text: "Prefiero chocar a toda velocidad contra la pared", correct: false },
              { text: "No quiero frenar nunca", correct: false },
              { text: "Quiero ignorar el sensor de distancia", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "El sensor mide 18 cm. ¿Qué imprimirá este sistema de frenado?",
            codeSnippet: "distanciaCM = 18.0\nif distanciaCM < 25.0:\n    print('FRENO_PREVENTIVO_ACTIVO')\nprint('MONITOREO_OK')",
            options: [
              { text: "FRENO_PREVENTIVO_ACTIVO\nMONITOREO_OK", correct: true },
              { text: "MONITOREO_OK solamente", correct: false },
              { text: "FRENO_PREVENTIVO_ACTIVO solamente", correct: false },
              { text: "Error", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "Ahora la distancia es segura (60 cm). ¿Qué imprimirá?",
            codeSnippet: "distanciaCM = 60.0\nif distanciaCM < 25.0:\n    print('FRENO_PREVENTIVO_ACTIVO')\nprint('MONITOREO_OK')",
            options: [
              { text: "MONITOREO_OK", correct: true },
              { text: "FRENO_PREVENTIVO_ACTIVO\nMONITOREO_OK", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina de frenado de emergencia completa:",
            options: [
              { text: "distanciaCM = leerSensorToF()", correct: true, audioSrc: "1" },
              { text: "if distanciaCM <= 20.0:", correct: true, audioSrc: "2" },
              { text: "    detenerChasisInmediato()", correct: true, audioSrc: "3" },
              { text: "    print('Freno de emergencia completado')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el aprendizaje central que te llevas de esta Unidad 9 sobre sentencias If?",
            options: [
              { text: "El if es la herramienta que permite a un programa reaccionar al mundo real ejecutando código solo cuando es necesario", correct: true },
              { text: "El if solo se puede usar una vez por programa", correct: false },
              { text: "El if borra las variables después de evaluarlas", correct: false },
              { text: "El if obliga a la computadora a reiniciar el match", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 10: ELSE & ELSE-IF BRANCHES
  // ==========================================
  {
    order: 10,
    slug: "unit-10",
    title: "Else & Else-If Branches",
    description: "Caminos alternativos: else, elif y selectores múltiples",
    guidebookText: `# Guía de Estudio: Unit 10 - Else & Else-If Branches

¿Qué pasa cuando la condición de un \`if\` es falsa y queremos ejecutar una **acción de respaldo**? Para eso existe la sentencia **\`else\`**.

Y cuando tenemos **múltiples alternativas mutuamente excluyentes** (ej: velocidad baja, media o alta), usamos **\`else if\`** (\`elif\` en Python).

### Estructura Completa:
\`\`\`python
if condicionA:
    # Camino 1: Si A es verdadera
    accionA()
elif condicionB:
    # Camino 2: Si A fue falsa pero B es verdadera
    accionB()
else:
    # Camino 3: Plan de respaldo si NINGUNA de las anteriores fue verdadera
    accionPorDefecto()
\`\`\`

### Principio Clave:
En una cadena de \`if-elif-else\`, **SOLO UN CAMINO se ejecuta**. En cuanto una condición se cumple, la computadora ejecuta ese bloque y salta de inmediato al final de toda la estructura.`,
    lessons: [
      {
        title: "El Plan de Respaldo: Sentencia Else",
        challenges: [
          {
            type: "THEORY",
            question: "¿Para qué sirve la cláusula 'else'?",
            lessonText: "# El Plan B ️\n\nImagina un cruce de caminos: o vas por la izquierda, o vas por la derecha. No puedes ir por ambos lados a la vez.\n\nLa sentencia **`else`** define el bloque de código que se ejecutará **cuando la condición del `if` resulte ser `false`**:\n```python\nif sensorOptico == true:\n    print('Pieza detectada: Lista para tirar')\nelse:\n    print('Buscando pieza en la alfombra...')\n```\n- Si el sensor marca `true`: corre el bloque del `if`.\n- Si marca `false`: corre el bloque del `else`.\n¡Uno de los dos caminos se ejecutará siempre de forma garantizada!",
            options: [
              { text: "Define el bloque de código alternativo que se ejecuta cuando la condición del if es falsa", correct: true },
              { text: "Un comando que apaga la consola si hay un error", correct: false },
              { text: "Una instrucción que repite el programa desde el inicio", correct: false },
              { text: "Una variable que solo guarda textos en mayúsculas", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la consola con este valor de batería?",
            codeSnippet: "bateria = 12.8\nif bateria < 12.0:\n    print('Recargar batería')\nelse:\n    print('Voltaje excelente')\nprint('Fin del test')",
            options: [
              { text: "Voltaje excelente\nFin del test", correct: true },
              { text: "Recargar batería\nFin del test", correct: false },
              { text: "Voltaje excelente solamente", correct: false },
              { text: "Recargar batería solamente", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará este chequeo de modo de juego?",
            codeSnippet: "esAutonomo = false\nif esAutonomo:\n    print('MODO AUTO')\nelse:\n    print('MODO TELEOP')",
            options: [
              { text: "MODO TELEOP", correct: true },
              { text: "MODO AUTO", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Puede existir una sentencia `else` sola sin un `if` previo que la acompañe?",
            options: [
              { text: "No, 'else' siempre debe estar ligado obligatoriamente a un 'if' que lo anteceda", correct: true },
              { text: "Sí, puedes poner 'else' en cualquier lugar del código", correct: false },
              { text: "Solo si se escribe con mayúscula 'ELSE'", correct: false },
              { text: "Solo si el robot está apagado", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el bloque alternativo:",
            codeSnippet: "if joystickMovido:\n    moverChasis()\n_____\n    detenerChasis()",
            options: [
              { text: "else:", correct: true },
              { text: "then:", correct: false },
              { text: "otherwise:", correct: false },
              { text: "if not:", correct: false }
            ]
          }
        ]
      },
      {
        title: "Múltiples Alternativas: Else-If (Elif)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuándo se utiliza 'else if' (elif)?",
            lessonText: "# El Semáforo de 3 Colores \n\n¿Qué pasa si tienes más de dos opciones posibles? Por ejemplo, un semáforo tiene Verde, Amarillo y Rojo.\n\nPara encadenar múltiples condiciones excluyentes usamos **`elif`** (en Python) o **`else if`** (en Java/C++):\n```python\nif luz == 'Verde':\n    avanzar()\nelif luz == 'Amarillo':\n    desacelerar()\nelif luz == 'Rojo':\n    frenar()\nelse:\n    print('Luz desconocida')\n```\nLa computadora evalúa de arriba a abajo. **En cuanto una condición sea `true`, ejecuta su bloque y se salta todas las demás.**",
            options: [
              { text: "Para evaluar múltiples condiciones en secuencia donde solo una de ellas debe ejecutarse", correct: true },
              { text: "Para repetir una instrucción 100 veces seguidas", correct: false },
              { text: "Para borrar el código anterior", correct: false },
              { text: "Es un sinónimo exacto de print", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este selector de velocidad con un input de 0.85?",
            codeSnippet: "inputPotencia = 0.85\nif inputPotencia < 0.2:\n    print('Zona Muerta')\nelif inputPotencia < 0.8:\n    print('Marcha Normal')\nelse:\n    print('MODO TURBO')",
            options: [
              { text: "MODO TURBO (porque 0.85 no es menor a 0.2 ni a 0.8)", correct: true },
              { text: "Marcha Normal", correct: false },
              { text: "Zona Muerta", correct: false },
              { text: "Imprime los tres mensajes", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mensaje se mostrará con un puntaje de 45?",
            codeSnippet: "puntos = 45\nif puntos >= 100:\n    print('Oro')\nelif puntos >= 40:\n    print('Plata')\nelse:\n    print('Bronce')",
            options: [
              { text: "Plata", correct: true },
              { text: "Oro", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada parte de la estructura condicional con su rol:",
            options: [
              { text: "if|||La primera condición a evaluar obligatoriamente", correct: true },
              { text: "elif / else if|||Condiciones intermedias adicionales", correct: true },
              { text: "else|||El caso por defecto si ninguna condición previa se cumplió", correct: true },
              { text: "Mutuamente excluyente|||Solo un bloque de la cadena se ejecutará", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuántas sentencias `elif` intermedias puedes colocar entre un `if` y un `else`?",
            options: [
              { text: "Tantas como necesites (desde 1 hasta decenas de alternativas)", correct: true },
              { text: "Exactamente una sola", correct: false },
              { text: "Máximo dos", correct: false },
              { text: "Ninguna, está prohibido", correct: false }
            ]
          }
        ]
      },
      {
        title: "Casos Exhaustivos y el Valor por Defecto",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué el 'else' final es el guardián de los imprevistos?",
            lessonText: "# El Escudo Contra lo Inesperado ️\n\n¿Qué pasa si un sensor devuelve un valor corrupto por estática en la cancha de FIRST? Por ejemplo, una cámara de visión envía un estado no contemplado: `estado = 'UNKNOWN_GLITCH'`.\n\nSi solo tienes `if` y `elif` específicos, el programa ignorará todo silenciosamente y el robot quedará congelado sin saber qué hacer.\n\nEl **`else` final** actúa como red de seguridad (*fallback*):\n```python\nif estado == 'TRACKING':\n    apuntar()\nelif estado == 'SEARCHING':\n    girarLentamente()\nelse:\n    # Caso por defecto ante datos extraños\n    detenerTodoYSonarAlerta()\n```",
            options: [
              { text: "Asegura que el programa siempre tenga una respuesta segura ante cualquier valor inesperado", correct: true },
              { text: "Hace que los sensores fallen a propósito", correct: false },
              { text: "Duplica la memoria RAM del procesador", correct: false },
              { text: "Es solo un adorno visual que no hace nada", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En un control con selector de 3 posiciones (Autónomo 1, 2 o 3), ¿cuál debería ser la acción del `else` por defecto si el switch se desconecta?",
            options: [
              { text: "Autónomo Seguro por Defecto (ej: solo salir de la zona sin disparar a ciegas)", correct: true },
              { text: "Girar los motores a máxima velocidad hacia las gradas", correct: false },
              { text: "Apagar la batería del estadio", correct: false },
              { text: "Disparar todas las pelotas al techo", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error de sintaxis en este else: El else nunca lleva una condición entre paréntesis.",
            codeSnippet: "if puntos > 10:\n    print('Ganamos')\nelse (puntos <= 10):\n    print('Perdimos')",
            options: [
              { text: "El 'else' no lleva condición; si quieres condición debes usar 'elif puntos <= 10:' o dejar solo 'else:'", correct: true },
              { text: "Falta un print adicional", correct: false },
              { text: "Los dos puntos son opcionales", correct: false },
              { text: "La palabra Ganamos está prohibida", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Corrige el bloque final para que sea un fallback limpio:",
            codeSnippet: "if modo == 'AUTO':\n    iniciarAuto()\n_____\n    iniciarTeleop()",
            options: [
              { text: "else:", correct: true },
              { text: "else if:", correct: false },
              { text: "elif:", correct: false },
              { text: "default:", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá este código si el comando es 'RESET'?",
            codeSnippet: "cmd = 'RESET'\nif cmd == 'START':\n    print('Arrancando')\nelif cmd == 'STOP':\n    print('Parando')\nelse:\n    print('COMANDO DESCONOCIDO')",
            options: [
              { text: "COMANDO DESCONOCIDO", correct: true },
              { text: "Arrancando", correct: false }
            ]
          }
        ]
      },
      {
        title: "Debugging de Condiciones Solapadas",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué el orden de las condiciones en una cadena if-elif importa tanto?",
            lessonText: "# El Error del Orden Invertido ️\n\nAnaliza este intento de clasificar velocidades:\n```python\nvelocidad = 95\nif velocidad > 50:\n    print('Rápido')\nelif velocidad > 90:\n    print('Súper Rápido')  # ¡ESTA LÍNEA NUNCA SE EJECUTARÁ!\n```\n¿Por qué jamás dirá 'Súper Rápido'?\nPorque como `95` ya es mayor a `50`, la primera condición se cumple inmediatamente. La CPU ejecuta `'Rápido'` y **se salta todo lo demás**.\n\n**Regla de Oro:** Siempre coloca las condiciones **más específicas y estrictas primero**, y las más generales después.",
            options: [
              { text: "Porque la primera condición que sea verdadera consume la ejecución y descarta las siguientes", correct: true },
              { text: "Porque el procesador se confunde con el número 90", correct: false },
              { text: "Porque elif solo acepta números menores a 50", correct: false },
              { text: "En realidad sí se ejecutan ambos mensajes a la vez", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "¿Cómo solucionamos el bug del ejemplo anterior para que reconozca 'Súper Rápido'?",
            codeSnippet: "// Código con bug:\n// if velocidad > 50: print('Rápido')\n// elif velocidad > 90: print('Súper Rápido')",
            options: [
              { text: "Poner primero 'if velocidad > 90:' y luego 'elif velocidad > 50:'", correct: true },
              { text: "Cambiar ambos por 'else'", correct: false },
              { text: "Quitar los signos de mayor que", correct: false },
              { text: "Cambiar el número 95 por 0", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Con la corrección aplicada, ¿qué imprimirá para velocidad = 95?",
            codeSnippet: "velocidad = 95\nif velocidad > 90:\n    print('Súper Rápido')\nelif velocidad > 50:\n    print('Rápido')\nelse:\n    print('Lento')",
            options: [
              { text: "Súper Rápido", correct: true },
              { text: "Rápido", correct: false },
              { text: "Lento", correct: false },
              { text: "Súper Rápido\nRápido", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena correctamente las condiciones de mayor a menor jerarquía para calificar puntajes:",
            options: [
              { text: "if score >= 90: print('Excelente')", correct: true, audioSrc: "1" },
              { text: "elif score >= 70: print('Bueno')", correct: true, audioSrc: "2" },
              { text: "elif score >= 50: print('Suficiente')", correct: true, audioSrc: "3" },
              { text: "else: print('Insuficiente')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la diferencia entre usar múltiples `if` separados vs una cadena `if-elif-else`?",
            options: [
              { text: "En múltiples ifs separados se pueden ejecutar varios bloques a la vez; en if-elif-else solo se ejecuta uno", correct: true },
              { text: "No hay ninguna diferencia, funcionan idéntico", correct: false },
              { text: "Los ifs separados no aceptan números", correct: false },
              { text: "if-elif-else es exclusivo de robots voladores", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Selector de Modos de Conducción",
        challenges: [
          {
            type: "THEORY",
            question: "¡Los modos de manejo del piloto de Nautilus 4010!",
            lessonText: "# El Selector de Velocidad en el Control \n\nEl piloto de nuestro equipo tiene un selector de 3 posiciones en su joystick:\n1. **Modo 'SLOW' (Precisión):** Potencia al `30%` (para alinear al milímetro con el alimentador).\n2. **Modo 'NORMAL':** Potencia al `75%` (para recorrer la cancha en teleoperado).\n3. **Modo 'BOOST' (Turbo):** Potencia al `100%` (para escapar de la defensa rival a toda máquina).\n\nEn este reto final de la Unidad 10, implementarás la máquina de decisiones completa con `if`, `elif` y `else`.",
            options: [
              { text: "¡Vamos a configurar el selector de manejo de Teus!", correct: true },
              { text: "Prefiero que el robot maneje a una sola velocidad para siempre", correct: false },
              { text: "No me gusta tener control del chasis", correct: false },
              { text: "Quiero desactivar los motores", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "El piloto selecciona el modo 'BOOST'. ¿Qué potencia se le asignará al chasis?",
            codeSnippet: "modo = 'BOOST'\nif modo == 'SLOW':\n    potencia = 0.3\nelif modo == 'NORMAL':\n    potencia = 0.75\nelif modo == 'BOOST':\n    potencia = 1.0\nelse:\n    potencia = 0.0\nprint(potencia)",
            options: [
              { text: "1.0", correct: true },
              { text: "0.75", correct: false },
              { text: "0.3", correct: false },
              { text: "0.0", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "El piloto presiona una tecla inválida ('FLY'). ¿Qué potencia de seguridad tomará el else?",
            codeSnippet: "modo = 'FLY'\nif modo == 'SLOW':\n    potencia = 0.3\nelif modo == 'NORMAL':\n    potencia = 0.75\nelif modo == 'BOOST':\n    potencia = 1.0\nelse:\n    potencia = 0.0\nprint(potencia)",
            options: [
              { text: "0.0", correct: true },
              { text: "1.0", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la estructura del selector de conducción completo:",
            options: [
              { text: "if modo == 'SLOW':", correct: true, audioSrc: "1" },
              { text: "    setChasisSpeed(0.3)", correct: true, audioSrc: "2" },
              { text: "elif modo == 'NORMAL':", correct: true, audioSrc: "3" },
              { text: "    setChasisSpeed(0.75)", correct: true, audioSrc: "4" },
              { text: "else:", correct: true, audioSrc: "5" },
              { text: "    setChasisSpeed(1.0)", correct: true, audioSrc: "6" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué dominar 'if', 'elif' y 'else' te convierte oficialmente en un programador con criterio?",
            options: [
              { text: "Porque pasas de escribir listas rígidas de instrucciones a crear sistemas inteligentes que se adaptan al entorno", correct: true },
              { text: "Porque ya no necesitas sensores mecánicos", correct: false },
              { text: "Porque las computadoras te dan un diploma automático", correct: false },
              { text: "Porque hace que el robot pese menos kilos", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
