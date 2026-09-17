import { UnitDefinition } from "./types";

export const block4Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 11: WHILE LOOPS
  // ==========================================
  {
    order: 11,
    slug: "unit-11",
    title: "While Loops",
    description: "Bucles condicionales: Repetir tareas mientras una condición sea verdadera",
    guidebookText: `# Guía de Estudio: Unit 11 - While Loops

El poder de las computadoras radica en su capacidad de repetir una tarea millones de veces sin cansarse ni cometer errores por aburrimiento.

Un bucle **\`while\`** repite un bloque de código **MIENTRAS** una condición booleana sea verdadera (\`true\`).

### Los 3 Componentes Sagrados de Todo While Loop:
1. **Estado Inicial:** Declarar la variable de control antes del bucle (\`contador = 0\`).
2. **Condición de Parada:** La prueba que se evalúa antes de cada ciclo (\`while contador < 5:\`).
3. **Paso de Actualización:** Modificar la variable DENTRO del bucle (\`contador += 1\`).

### El Terror del Bucle Infinito (Infinite Loop):
Si olvidas el paso de actualización o la condición nunca se vuelve falsa, el programa se quedará atrapado para siempre consumiendo el 100% de la CPU.`,
    lessons: [
      {
        title: "¿Por Qué Repetir Tareas?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un bucle 'while' y cuál es su superpoder?",
            lessonText: "# El Motor de Repetición 🔄\n\nImagina que tienes que mover un brazo robótico hasta que toque el limit switch superior.\n\nSin bucles, tendrías que escribir:\n```python\nmoverUnPoco()\nmoverUnPoco()\nmoverUnPoco()\n# ¿Y si se necesitan 500 veces? ¡Imposible!\n```\n\nCon un **while loop**, le dices a la computadora:\n```python\nwhile limitSwitchAlcanzado == false:\n    moverUnPoco()\n```\nLa computadora evalúa la condición:\n- Si es `true`: ejecuta el bloque y **vuelve a subir a comprobar la condición**.\n- Solo se detiene cuando la condición finalmente se vuelve `false`.",
            options: [
              { text: "Una estructura que repite un bloque de instrucciones mientras su condición sea verdadera", correct: true },
              { text: "Un comando que apaga la máquina si se calienta", correct: false },
              { text: "Una variable que solo acepta números enteros", correct: false },
              { text: "Un cable especial para conectar motores", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuántas veces se imprimirá la palabra 'Tick' en este bucle?",
            codeSnippet: "cuenta = 0\nwhile cuenta < 3:\n    print('Tick')\n    cuenta = cuenta + 1",
            options: [
              { text: "3 veces (para cuenta = 0, 1 y 2)", correct: true },
              { text: "Infinitas veces", correct: false },
              { text: "1 sola vez", correct: false },
              { text: "Ninguna", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será el valor final de 'x' tras salir del bucle?",
            codeSnippet: "x = 1\nwhile x < 5:\n    x = x + 2\nprint(x)",
            options: [
              { text: "5 (porque 1 + 2 = 3, y 3 + 2 = 5, y 5 ya no es menor a 5)", correct: true },
              { text: "4", correct: false },
              { text: "3", correct: false },
              { text: "7", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la palabra clave para iniciar el bucle condicional:",
            codeSnippet: "_____ presionBaja == true:\n    encenderCompresor()",
            options: [
              { text: "while", correct: true },
              { text: "loop", correct: false },
              { text: "repeat", correct: false },
              { text: "until", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si la condición del while es FALSE desde el primer instante (ej: `while 10 < 5:`), ¿cuántas veces se ejecuta su contenido?",
            options: [
              { text: "0 veces (nunca llega a entrar al bucle)", correct: true },
              { text: "Exactamente 1 vez", correct: false },
              { text: "Infinitas veces", correct: false },
              { text: "Dará un error de compilación", correct: false }
            ]
          }
        ]
      },
      {
        title: "Los 3 Elementos de un Loop Saludable",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuáles son las 3 partes obligatorias de un bucle while?",
            lessonText: "# El Trío Indispensable 📐\n\nPara que un bucle funcione perfectamente y sepa cuándo detenerse, requiere 3 elementos:\n\n1. **Inicialización (Antes del loop):** Crear la variable que controla el ciclo.\n   - `intentos = 0`\n2. **Condición de Salida (En el encabezado):** La prueba lógica que decide si se continúa.\n   - `while intentos < 3:`\n3. **Actualización (Dentro del loop):** Cambiar el valor de la variable en cada ciclo para acercarse a la salida.\n   - `intentos += 1`\n\nSi falta cualquiera de los tres, tu bucle no funcionará o se quedará atrapado para siempre.",
            options: [
              { text: "1. Inicialización, 2. Condición lógica y 3. Actualización de la variable", correct: true },
              { text: "1. Encender, 2. Acelerar y 3. Frenar", correct: false },
              { text: "1. Java, 2. Python y 3. C++", correct: false },
              { text: "Solo necesita el nombre del robot y la batería", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica cada una de las 3 partes en este bucle:",
            options: [
              { text: "i = 0|||Inicialización de la variable", correct: true },
              { text: "while i < 10:|||Condición de permanencia", correct: true },
              { text: "i += 1|||Paso de actualización", correct: true },
              { text: "print(i)|||Cuerpo / Acción del bucle", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el bug en este bucle: Falta el paso de actualización de la variable.",
            codeSnippet: "contador = 0\nwhile contador < 5:\n    print('Procesando...')\n    // ¡Falta algo aquí!",
            options: [
              { text: "Falta incrementar el contador (ej: contador += 1), de lo contrario nunca llegará a 5", correct: true },
              { text: "Hay que cambiar el 5 por 0", correct: false },
              { text: "El print no puede llevar puntos suspensivos", correct: false },
              { text: "Falta poner una coma después de while", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los 4 pasos para construir un contador de 0 a 3 con while:",
            options: [
              { text: "c = 0", correct: true, audioSrc: "1" },
              { text: "while c < 3:", correct: true, audioSrc: "2" },
              { text: "    print(c)", correct: true, audioSrc: "3" },
              { text: "    c = c + 1", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué número final se imprimirá DESPUÉS de que el bucle termine?",
            codeSnippet: "puntos = 0\nwhile puntos < 4:\n    puntos += 2\nprint(puntos)",
            options: [
              { text: "4", correct: true },
              { text: "2", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Terror del Loop Infinito",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un bucle infinito (infinite loop) y por qué es peligroso?",
            lessonText: "# La Trampa Eterna 🕳️\n\nUn **bucle infinito** ocurre cuando la condición de un `while` **NUNCA se vuelve falsa**.\n```python\n# ¡PELIGRO! Esto nunca se detiene\nwhile true:\n    print('¡Auxilio, no puedo parar!')\n```\n¿Qué le pasa a la computadora?\n- El ventilador empieza a zumbar al máximo.\n- La CPU se satura al 100% en ese hilo.\n- El programa deja de responder (se 'congela').\n\nEn un robot de competencia, si el código entra en un bucle infinito en un subproceso crítico, el robot dejará de procesar los comandos del joystick y quedará inerte en medio de la cancha.",
            options: [
              { text: "Un bucle cuya condición nunca cambia a false, congelando el programa y saturando la CPU", correct: true },
              { text: "Un bucle que acelera la velocidad del robot al infinito físicamente", correct: false },
              { text: "Un truco para duplicar la memoria RAM gratis", correct: false },
              { text: "Un cable desconectado en el chasis", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "¿Por qué este código genera un bucle infinito?",
            codeSnippet: "distancia = 10\nwhile distancia > 0:\n    print('Avanzando...')\n    distancia = distancia + 1",
            options: [
              { text: "Porque 'distancia' está aumentando (10, 11, 12...) en vez de disminuir hacia 0", correct: true },
              { text: "Porque la palabra Avanzando tiene mayúscula", correct: false },
              { text: "Porque el número 10 es par", correct: false },
              { text: "Porque falta una coma", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Corrige la actualización para que decremente hacia cero restando 1 en cada ciclo:",
            codeSnippet: "// Decrementa distancia",
            options: [
              { text: "distancia = distancia - 1", correct: true },
              { text: "distancia = distancia + 1", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En una computadora personal o terminal de desarrollo, ¿cuál es el atajo de teclado universal para forzar la detención de un programa atrapado en un loop infinito?",
            options: [
              { text: "Ctrl + C (KeyboardInterrupt / Cancel)", correct: true },
              { text: "Ctrl + Z y luego Enter", correct: false },
              { text: "Presionar la barra espaciadora 10 veces", correct: false },
              { text: "Desconectar el mouse", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Existe alguna situación en FIRST Robotics donde un bucle infinito SI sea deseado deliberadamente?",
            options: [
              { text: "Sí, en el bucle principal de control del robot (Main Control Loop) que debe correr continuamente mientras el robot esté encendido", correct: true },
              { text: "No, nunca jamás bajo ninguna circunstancia", correct: false },
              { text: "Solo cuando el robot pierde el match", correct: false },
              { text: "Solo durante la noche cuando no hay gente en el taller", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Loop Principal de un Robot",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo funciona el ciclo principal de control (Periodic Loop) en un robot?",
            lessonText: "# El Latido del Corazón del Robot (50 Hz) 💓\n\nEn FIRST Robotics y en la industria automotriz, los robots no ejecutan un script una sola vez y se apagan. Tienen un **bucle periódico continuo**:\n\n```python\nwhile robotEstaHabilitado == true:\n    # 1. Leer sensores y joystick (50 veces por segundo)\n    leerTelemetria()\n    # 2. Calcular cinemática de swerve drive o chasis\n    calcularTrayectoria()\n    # 3. Enviar voltajes a los motores\n    actualizarMotores()\n```\n\nEste ciclo corre típicamente cada **20 milisegundos (50 Hz)**. ¡Es el pulso vital que mantiene al robot despierto y receptivo!",
            options: [
              { text: "Un ciclo continuo que lee sensores, calcula decisiones y actualiza motores decenas de veces por segundo", correct: true },
              { text: "Un motor físico que gira en círculos dentro de la roboRIO", correct: false },
              { text: "Un cronómetro que solo sirve para la hora del almuerzo", correct: false },
              { text: "Un virus informático que viene de fábrica", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las 3 fases del latido periódico de control en robótica:",
            options: [
              { text: "leerJoysticksYSensores()", correct: true, audioSrc: "1" },
              { text: "procesarLogicaYCalculos()", correct: true, audioSrc: "2" },
              { text: "enviarPotenciaAMotores()", correct: true, audioSrc: "3" }
            ]
          },
          {
            type: "SELECT",
            question: "Si colocas una pausa que duerma el programa por 5 segundos (`sleep(5000)`) dentro del bucle periódico del robot, ¿qué ocurrirá?",
            options: [
              { text: "El robot dejará de responder a los joysticks durante 5 segundos enteros, pudiendo chocar peligrosamente", correct: true },
              { text: "El robot recargará su batería por completo", correct: false },
              { text: "El código correrá más rápido después", correct: false },
              { text: "No pasa nada, el piloto ni lo notará", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuántos ciclos se completarán antes de que la presión alcance los 120 PSI?",
            codeSnippet: "psi = 60\nciclos = 0\nwhile psi < 120:\n    psi += 30\n    ciclos += 1\nprint(ciclos)",
            options: [
              { text: "2 (60 -> 90 en ciclo 1, 90 -> 120 en ciclo 2)", correct: true },
              { text: "4", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la condición del bucle de compresión neumática:",
            codeSnippet: "while presionActual _____ PRESION_MAXIMA:\n    compresor.activar()\n    presionActual = leerManometro()",
            options: [
              { text: "<", correct: true },
              { text: ">", correct: false },
              { text: "==", correct: false },
              { text: "!=", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Moviendo el Brazo Mecánico",
        challenges: [
          {
            type: "THEORY",
            question: "¡Control en lazo cerrado para el brazo de Nautilus 4010!",
            lessonText: "# Llevando el Brazo a su Posición 🦾\n\nEl brazo articulado de nuestro robot tiene un encoder magnético que mide el ángulo actual en grados.\n\nQueremos mover el brazo desde `0` grados hasta alcanzar el ángulo objetivo de `90` grados:\n- Mientras `anguloActual < 90`:\n  - Aplicamos potencia suave al motor del brazo.\n  - En cada ciclo leemos el nuevo ángulo del encoder.\n- En cuanto llega a 90, el bucle concluye y frenamos el motor.\n\nEn este reto final de la Unidad 11, programarás este movimiento preciso.",
            options: [
              { text: "¡Vamos a programar el movimiento con Teus!", correct: true },
              { text: "Prefiero que el brazo gire sin parar hasta doblar el chasis", correct: false },
              { text: "No quiero usar bucles", correct: false },
              { text: "Quiero mover el brazo con la mano durante el match", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "El ángulo avanza de 30 en 30 grados. ¿Qué ángulo final registrará la consola tras salir del bucle?",
            codeSnippet: "angulo = 0\nwhile angulo < 90:\n    angulo += 30\nprint(angulo)",
            options: [
              { text: "90", correct: true },
              { text: "60", correct: false },
              { text: "120", correct: false },
              { text: "0", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el algoritmo completo de control del brazo con encoder:",
            options: [
              { text: "anguloActual = leerEncoderBrazo()", correct: true, audioSrc: "1" },
              { text: "while anguloActual < 90:", correct: true, audioSrc: "2" },
              { text: "    motorBrazo.set(0.4)", correct: true, audioSrc: "3" },
              { text: "    anguloActual = leerEncoderBrazo()", correct: true, audioSrc: "4" },
              { text: "motorBrazo.set(0.0)", correct: true, audioSrc: "5" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola tras el ciclo de advertencia?",
            codeSnippet: "intentos = 1\nwhile intentos <= 2:\n    print('Alerta ' + str(intentos))\n    intentos += 1",
            options: [
              { text: "Alerta 1\nAlerta 2", correct: true },
              { text: "Alerta 1", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué el bucle while es la herramienta perfecta cuando NO sabemos de antemano cuántos segundos exactos tardará una acción mecánica?",
            options: [
              { text: "Porque se basa en una condición de estado (el sensor llegó a la meta) y no en una cantidad fija de tiempo", correct: true },
              { text: "Porque los bucles while tienen poderes mágicos de adivinanza", correct: false },
              { text: "Porque solo consume 1 voltio de la batería", correct: false },
              { text: "No es verdad, siempre es mejor adivinar el tiempo con pausas fijas", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 12: FOR LOOPS
  // ==========================================
  {
    order: 12,
    slug: "unit-12",
    title: "For Loops",
    description: "Bucles contadores: Repetir secuencias exactamente N veces",
    guidebookText: `# Guía de Estudio: Unit 12 - For Loops

A diferencia del \`while\` (que corre hasta que una condición cambia), el bucle **\`for\`** está diseñado para **repetir una acción un número exacto y conocido de veces** o para recorrer colecciones de elementos.

### Anatomía del For Loop:
1. **En Python:** Usa la función \`range(inicio, fin, paso)\`:\n\`\`\`python
for i in range(5):
    # Corre para i = 0, 1, 2, 3, 4 (exactamente 5 veces)
    print(i)
\`\`\`
2. **En Java / C++:** La estructura clásica de 3 partes:\n\`\`\`java
for (int i = 0; i < 5; i++) {
    // Inicialización; Condición; Incremento
}
\`\`\`

### Cuándo elegir \`for\` vs \`while\`:
- Usa **\`for\`** cuando sabes de antemano cuántas veces debe ocurrir la tarea (ej: parpadear un LED 5 veces).
- Usa **\`while\`** cuando la repetición depende de un evento externo (ej: mover motor hasta que el sensor detecte una pieza).`,
    lessons: [
      {
        title: "Iteración Controlada: Repetir N Veces",
        challenges: [
          {
            type: "THEORY",
            question: "¿Para qué sirve un bucle 'for' y cuándo es la mejor opción?",
            lessonText: "# El Contador Automático ⏱️\n\n¿Qué pasa si necesitas:\n- Enviar 5 pulsos de señal a la radio.\n- Calentar los 4 motores del chasis uno por uno.\n- Contar regresivamente del 3 al 1 antes del autónomo.\n\nPodrías usar un `while`, pero tienes que declarar la variable afuera, escribir la condición y acordarte de incrementarla. ¡Es fácil cometer un error!\n\nEl **`for` loop** empaqueta todo de forma compacta y elegante:\n```python\nfor i in range(3):\n    print('¡Paso completado!')\n```\nEsto se ejecutará **exactamente 3 veces** sin riesgo de bucles infinitos por olvido.",
            options: [
              { text: "Para repetir una secuencia de instrucciones una cantidad predeterminada y conocida de veces", correct: true },
              { text: "Para apagar el robot cuando la batería llega a cero", correct: false },
              { text: "Para cambiar el color de la pintura del chasis", correct: false },
              { text: "Para escribir texto en minúsculas únicamente", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "En Python, ¿qué valores toma la variable 'i' en `range(4)`?",
            codeSnippet: "for i in range(4):\n    print(i)",
            options: [
              { text: "0, 1, 2, 3 (empieza en 0 y se detiene antes del 4)", correct: true },
              { text: "1, 2, 3, 4", correct: false },
              { text: "4, 4, 4, 4", correct: false },
              { text: "0 y 4 solamente", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuántas veces se imprimirá 'Gol' en consola?",
            codeSnippet: "for tiro in range(3):\n    print('Gol')",
            options: [
              { text: "Gol\nGol\nGol", correct: true },
              { text: "Gol", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el bucle for para repetir 5 veces:",
            codeSnippet: "_____ paso in range(5):\n    avanzarCentimetro()",
            options: [
              { text: "for", correct: true },
              { text: "while", correct: false },
              { text: "each", correct: false },
              { text: "loop", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¡Cuidado con el índice cero! En informática, ¿en qué número inician los rangos por defecto en la inmensa mayoría de lenguajes?",
            options: [
              { text: "En 0 (Zero-indexed)", correct: true },
              { text: "En 1", correct: false },
              { text: "En 10", correct: false },
              { text: "En -1", correct: false }
            ]
          }
        ]
      },
      {
        title: "Estructura del For: Inicio, Fin y Paso",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo funciona la función `range(inicio, fin, paso)`?",
            lessonText: "# El Control Total del Rango 🎛️\n\nEn Python, la función `range` tiene 3 parámetros súper versátiles:\n`range(inicio, fin, paso)`\n\n1. **`range(5)`:**\n   - Inicia en 0, llega hasta 4 (el fin nunca se incluye).\n2. **`range(2, 6)`:**\n   - Inicia en 2 y llega hasta 5 -> `[2, 3, 4, 5]`.\n3. **`range(0, 10, 2)` (Con paso / step):\n   - Avanza de 2 en 2 -> `[0, 2, 4, 6, 8]`.\n\n¡Esto te permite crear cualquier secuencia matemática en una sola línea!",
            options: [
              { text: "Permite especificar el valor inicial, el límite superior (no inclusivo) y el incremento entre saltos", correct: true },
              { text: "Mide la distancia física entre dos robots en metros", correct: false },
              { text: "Calcula el porcentaje de batería que queda", correct: false },
              { text: "Convierte texto a números automáticamente", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué números imprimirá este rango con salto de 2?",
            codeSnippet: "for n in range(1, 6, 2):\n    print(n)",
            options: [
              { text: "1, 3, 5", correct: true },
              { text: "1, 2, 3, 4, 5", correct: false },
              { text: "2, 4, 6", correct: false },
              { text: "1 y 6 solamente", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de este código?",
            codeSnippet: "total = 0\nfor x in range(3):\n    total += x\nprint(total)",
            options: [
              { text: "3 (porque total = 0 + 0 + 1 + 2 = 3)", correct: true },
              { text: "6", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada llamada de range con los números que produce:",
            options: [
              { text: "range(3)|||0, 1, 2", correct: true },
              { text: "range(1, 4)|||1, 2, 3", correct: true },
              { text: "range(2, 7, 2)|||2, 4, 6", correct: true },
              { text: "range(5, 0, -1)|||5, 4, 3, 2, 1 (cuenta regresiva)", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "En Java y C++, ¿cómo se escribe el bucle for equivalente a `range(5)`?",
            options: [
              { text: "for (int i = 0; i < 5; i++)", correct: true },
              { text: "for i in 5", correct: false },
              { text: "loop (i = 5)", correct: false },
              { text: "while (for i = 0)", correct: false }
            ]
          }
        ]
      },
      {
        title: "Bucles Descendentes y Cuenta Regresiva",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo hacemos una cuenta regresiva con un bucle for?",
            lessonText: "# ¡3, 2, 1... Despegue! 🚀\n\nPara contar hacia atrás, simplemente usamos un **paso negativo** (`step = -1`):\n```python\nfor s in range(3, 0, -1):\n    print(s)\nprint('¡Match Iniciado!')\n```\n- Inicia en `3`.\n- Resta 1 en cada ciclo: `2`, luego `1`.\n- Se detiene antes del `0`.\n- Imprime `¡Match Iniciado!`.\n\nEn robótica es común para secuencias de calibración, temporizadores de autonomous o rampas de frenado suave.",
            options: [
              { text: "Usando un valor de paso negativo (ej: -1) para decrementar en cada ciclo", correct: true },
              { text: "Girando la pantalla de cabeza", correct: false },
              { text: "Poniendo números negativos en el nombre de la variable", correct: false },
              { text: "Los bucles for no pueden ir hacia atrás", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará en consola esta cuenta regresiva?",
            codeSnippet: "for c in range(3, 0, -1):\n    print(c)\nprint('GO!')",
            options: [
              { text: "3\n2\n1\nGO!", correct: true },
              { text: "GO!\n1\n2\n3", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuál será la suma final de los números de esta secuencia?",
            codeSnippet: "suma = 0\nfor i in range(1, 4):\n    suma += i\nprint(suma)",
            options: [
              { text: "6 (1 + 2 + 3 = 6)", correct: true },
              { text: "4", correct: false },
              { text: "10", correct: false },
              { text: "3", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena este script para hacer una secuencia de calibración de 3 pasos:",
            options: [
              { text: "print('Iniciando calibración')", correct: true, audioSrc: "1" },
              { text: "for paso in range(1, 4):", correct: true, audioSrc: "2" },
              { text: "    print('Calibrando sensor ' + str(paso))", correct: true, audioSrc: "3" },
              { text: "print('Calibración completada')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué sucede si en `range(10, 0, 1)` pones un paso positivo en vez de negativo?",
            options: [
              { text: "El bucle no se ejecutará ninguna vez porque 10 ya superó el límite de 0 hacia adelante", correct: true },
              { text: "La computadora se congela", correct: false },
              { text: "Cuenta hasta el infinito", correct: false },
              { text: "Invierte los números automáticamente", correct: false }
            ]
          }
        ]
      },
      {
        title: "Cuándo Usar For vs Cuándo Usar While",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo saber cuándo usar un 'for' y cuándo usar un 'while'?",
            lessonText: "# La Decisión del Arquitecto 🏛️\n\nAmbos bucles pueden lograr cosas similares, pero cada uno tiene su especialidad:\n\n**Usa `for` cuando:**\n- Sabes **exactamente cuántas veces** quieres iterar (ej: repetir 4 veces para las 4 llantas del robot swerve).\n- Vas a recorrer una lista de elementos uno por uno.\n\n**Usa `while` cuando:**\n- La repetición depende de una **condición que no sabes cuándo cambiará** (ej: esperar a que la pelota entre al intake, o mientras el match siga activo).\n\nElegir el bucle correcto hace que tu código sea más simple, limpio y seguro.",
            options: [
              { text: "For para número conocido de iteraciones; While para condiciones dependientes del estado", correct: true },
              { text: "For es para la mañana y While es para la tarde", correct: false },
              { text: "For solo sirve en Python y While solo en Java", correct: false },
              { text: "No hay ninguna diferencia, son nombres sinónimos", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cada caso de robótica con el mejor tipo de bucle a utilizar:",
            options: [
              { text: "Parpadear un LED de advertencia 5 veces|||for loop", correct: true },
              { text: "Revisar los 4 módulos de giro del chasis|||for loop", correct: true },
              { text: "Avanzar hasta que el sensor detecte la pared|||while loop", correct: true },
              { text: "Bucle principal de teleoperado del match|||while loop", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "Quieres probar individualmente los 4 motores del chasis swerve (Motor 0, 1, 2, 3). ¿Cuál es la estructura más limpia?",
            options: [
              { text: "for motorID in range(4): probarMotor(motorID)", correct: true },
              { text: "Copiar y pegar la misma línea 4 veces a mano", correct: false },
              { text: "Un while con 10 variables distintas", correct: false },
              { text: "No probar los motores y esperar que funcionen", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error de tipeo en este for loop en Python:",
            codeSnippet: "for i in range(5)\n    print(i)",
            options: [
              { text: "Faltan los dos puntos ':' al final de la línea del for", correct: true },
              { text: "Falta un punto y coma", correct: false },
              { text: "La palabra range debe estar en mayúsculas", correct: false },
              { text: "No se puede usar la letra i", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe el encabezado de un bucle for que itere con la variable 'k' en un rango de 10:",
            codeSnippet: "// Encabezado de for",
            options: [
              { text: "for k in range(10):", correct: true },
              { text: "for k in range(10)", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Escaneo LED y Calentamiento de Motores",
        challenges: [
          {
            type: "THEORY",
            question: "¡Chequeo de subsistemas con Teus!",
            lessonText: "# El Test de Pits Pre-Match 🏎️\n\nAntes de colocar a Nautilus 4010 en la cancha, el equipo corre un script de diagnóstico que:\n1. Parpadea la tira de luces LED CANdle 3 veces en color dorado (`#EDB824`).\n2. Realiza un test de pulso en los 4 motores de tracción.\n\nEn este reto final de la Unidad 12, programarás estos bucles de chequeo con `for`.",
            options: [
              { text: "¡Vamos a programar el test de diagnóstico!", correct: true },
              { text: "Prefiero entrar a la cancha sin probar los sistemas", correct: false },
              { text: "No me interesan las luces LED", correct: false },
              { text: "Quiero borrar el script de test", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina para hacer parpadear el LED 3 veces:",
            options: [
              { text: "for pulso in range(3):", correct: true, audioSrc: "1" },
              { text: "    encenderLED('Dorado')", correct: true, audioSrc: "2" },
              { text: "    esperarMilisegundos(200)", correct: true, audioSrc: "3" },
              { text: "    apagarLED()", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola tras probar los 4 módulos de rueda?",
            codeSnippet: "for rueda in range(4):\n    print('Rueda ' + str(rueda) + ' OK')",
            options: [
              { text: "Rueda 0 OK\nRueda 1 OK\nRueda 2 OK\nRueda 3 OK", correct: true },
              { text: "Rueda 4 OK", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuántas veces en total se imprimirá la palabra 'Check'?",
            codeSnippet: "for a in range(2):\n    for b in range(3):\n        print('Check')",
            options: [
              { text: "6 veces (2 * 3 = 6 iteraciones en bucles anidados)", correct: true },
              { text: "5 veces", correct: false },
              { text: "3 veces", correct: false },
              { text: "2 veces", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el resumen de la Unidad 12 sobre bucles For?",
            options: [
              { text: "El bucle for es el estándar por excelencia para realizar tareas repetitivas un número determinado de veces con total seguridad", correct: true },
              { text: "Los bucles for siempre son infinitos", correct: false },
              { text: "El bucle for sustituye a los cables de corriente", correct: false },
              { text: "Solo los mentores pueden escribir bucles for", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 13: LOOP CONTROL: BREAK & CONTINUE
  // ==========================================
  {
    order: 13,
    slug: "unit-13",
    title: "Loop Control: Break & Continue",
    description: "Control de flujo en bucles: Salidas tempranas, centinelas y paradas de emergencia",
    guidebookText: `# Guía de Estudio: Unit 13 - Loop Control: Break & Continue

A veces, las reglas fijas de un bucle no son suficientes. Durante la ejecución en el mundo real, puede ocurrir un evento imprevisto (un sensor detecta un obstáculo súbito, o una lectura resulta inválida) que nos obliga a alterar el curso normal de la iteración.

### Instrucciones Especiales de Bucles:
1. **\`break\` (Romper el bucle):** Aborta el bucle de inmediato y salta a la primera línea fuera de él. Es el equivalente a una **Parada de Emergencia (E-Stop)**.
2. **\`continue\` (Saltar turno):** Ignora el resto del código del ciclo actual y salta de inmediato a la siguiente iteración.
3. **Variables Bandera (Flags):** Variables booleanas (\`encontrado = false\`) usadas para coordinar la salida de bucles complejos.`,
    lessons: [
      {
        title: "Rompiendo el Ciclo: La Sentencia Break",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué hace la instrucción 'break' dentro de un bucle?",
            lessonText: "# El Botón de Parada Inmediata 🛑\n\nImagina que estás buscando una nota naranja en la alfombra con un bucle que revisa 10 posiciones:\n```python\nfor pos in range(10):\n    if notaDetectada == true:\n        print('¡Nota encontrada!')\n        break  # ¡Se detiene de inmediato!\n    avanzarSiguientePunto()\n```\n¿Para qué seguir buscando las otras posiciones si ya encontraste la pieza?\n\nLa instrucción **`break` rompe el bucle al instante**, sin esperar a que termine el rango ni a que la condición del while se vuelva falsa.",
            options: [
              { text: "Termina el bucle de forma inmediata y transfiere el control a la línea siguiente fuera del bucle", correct: true },
              { text: "Pausa el programa por 10 minutos", correct: false },
              { text: "Rompe físicamente la tarjeta madre del robot", correct: false },
              { text: "Reinicia el bucle desde cero", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este bucle con break?",
            codeSnippet: "for num in range(1, 6):\n    if num == 3:\n        break\n    print(num)\nprint('Fin')",
            options: [
              { text: "1\n2\nFin (se detuvo en cuanto num fue igual a 3)", correct: true },
              { text: "1\n2\n3\nFin", correct: false },
              { text: "1\n2\n3\n4\n5\nFin", correct: false },
              { text: "Solo imprime 'Fin'", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de este código?",
            codeSnippet: "x = 0\nwhile true:\n    x += 1\n    if x == 2:\n        break\nprint(x)",
            options: [
              { text: "2", correct: true },
              { text: "1", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la instrucción para abortar la búsqueda:",
            codeSnippet: "if piezaAsegurada == true:\n    _____",
            options: [
              { text: "break", correct: true },
              { text: "stop", correct: false },
              { text: "exit", correct: false },
              { text: "halt", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si tienes dos bucles anidados (un for dentro de otro for), ¿qué bucle se rompe cuando ejecutas 'break'?",
            options: [
              { text: "Únicamente el bucle más interno donde está colocado el break", correct: true },
              { text: "Ambos bucles se cierran al mismo tiempo", correct: false },
              { text: "El bucle exterior únicamente", correct: false },
              { text: "Ninguno, dará un error", correct: false }
            ]
          }
        ]
      },
      {
        title: "Saltando de Turno: La Sentencia Continue",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la diferencia entre 'break' y 'continue'?",
            lessonText: "# Pasar de Largo 🦘\n\nA veces no quieres cancelar todo el bucle, sino **ignorar únicamente la iteración actual** y pasar de largo al siguiente ciclo.\n\nPara eso usamos **`continue`**:\n```python\nfor motor in range(4):\n    if motor == 2:  # El motor 2 está en mantenimiento\n        continue    # ¡Salta este motor y ve al siguiente!\n    probarMotor(motor)\n```\n- `break`: Aborta y destruye el bucle por completo.\n- `continue`: Aborta el turno actual y salta al siguiente número del ciclo.",
            options: [
              { text: "break cancela todo el bucle definitivamente; continue solo salta a la siguiente iteración", correct: true },
              { text: "Son exactamente la misma instrucción con dos nombres distintos", correct: false },
              { text: "continue apaga la pantalla", correct: false },
              { text: "break solo se puede usar los lunes", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué números imprimirá este script con continue?",
            codeSnippet: "for i in range(1, 5):\n    if i == 3:\n        continue\n    print(i)",
            options: [
              { text: "1, 2, 4 (el 3 fue saltado por el continue)", correct: true },
              { text: "1, 2", correct: false },
              { text: "1, 2, 3, 4", correct: false },
              { text: "3", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja la instrucción de control con su efecto exacto:",
            options: [
              { text: "break|||Sale del bucle de inmediato sin ejecutar más ciclos", correct: true },
              { text: "continue|||Salta al inicio de la siguiente iteración del bucle", correct: true },
              { text: "pass|||No hace nada (marcador de posición temporal)", correct: true },
              { text: "while true|||Bucle potencialmente infinito hasta un break", correct: true }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola tras ejecutar este filtrado?",
            codeSnippet: "for n in range(4):\n    if n % 2 == 0:\n        continue  # Salta los pares\n    print(n)",
            options: [
              { text: "1\n3", correct: true },
              { text: "0\n2", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿En qué situación de robótica es muy útil 'continue'?",
            options: [
              { text: "Para omitir paquetes de sensores con lecturas corruptas o ruidosas sin detener el robot", correct: true },
              { text: "Para gastar más rápido la batería", correct: false },
              { text: "Para apagar los motores permanentemente", correct: false },
              { text: "Para reiniciar el match", correct: false }
            ]
          }
        ]
      },
      {
        title: "Variables Bandera (Flags)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es una variable bandera (flag variable)?",
            lessonText: "# Levantando la Bandera 🚩\n\nUna **Flag (bandera)** es una variable booleana que actúa como señal de alerta entre diferentes partes del código.\n\nEjemplo clásico:\n```python\npeligroDetectado = false  # Bandera abajo\n\nfor sensor in listaSensores:\n    if sensor.temperatura > 90:\n        peligroDetectado = true  # ¡Bandera arriba!\n        break\n\nif peligroDetectado:\n    activarVentiladores()\n```\nLa bandera recuerda el resultado de la búsqueda para que otras partes del programa puedan actuar en consecuencia.",
            options: [
              { text: "Una variable booleana que cambia de estado para señalar que un evento o condición ocurrió", correct: true },
              { text: "La bandera de tela que lleva el robot en el desfile", correct: false },
              { text: "Un archivo de imagen en la computadora", correct: false },
              { text: "Un botón físico en el joystick", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la consola tras evaluar la bandera?",
            codeSnippet: "hayFalla = false\nfor modulo in range(3):\n    if modulo == 1:\n        hayFalla = true\n        break\nprint(hayFalla)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false },
              { text: "none", correct: false },
              { text: "1", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la inicialización estándar de una bandera de estado:",
            codeSnippet: "sistemaListo = _____\nwhile not sistemaListo:\n    sistemaListo = verificarComponentes()",
            options: [
              { text: "false", correct: true },
              { text: "'listo'", correct: false },
              { text: "0.0", correct: false },
              { text: "none", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué combinar una variable bandera con un 'break' es una excelente práctica de optimización?",
            options: [
              { text: "Porque ahorra ciclos de cómputo al no seguir buscando innecesariamente una vez que la meta fue cumplida", correct: true },
              { text: "Porque hace que el robot pese menos", correct: false },
              { text: "Porque borra los virus automáticamente", correct: false },
              { text: "No tiene ninguna ventaja", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción que levanta la bandera asignando true a 'targetFound':",
            codeSnippet: "// Levanta la bandera",
            options: [
              { text: "targetFound = true", correct: true },
              { text: "targetFound == true", correct: false }
            ]
          }
        ]
      },
      {
        title: "Parada de Emergencia (E-Stop)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se implementa una parada de emergencia en software?",
            lessonText: "# El Protocolo E-Stop 🚨\n\nEn FIRST Robotics, la seguridad es primero. Si un sensor de corriente reporta que un motor está atorado consumiendo más de 40 Amperes:\n¡El motor se quemará en menos de 3 segundos si no se corta la energía!\n\nEn el bucle de control:\n```python\nwhile robotEnMovimiento:\n    if corrienteAmperes > 40.0:\n        print('¡SOBRECORRIENTE! E-STOP ACTIVADO')\n        cortarEnergiaInmediata()\n        break  # Salida instantánea\n    actualizarControl()\n```\nEl `break` garantiza que no se ejecuten más ciclos de control con corriente excesiva.",
            options: [
              { text: "Interrumpiendo inmediatamente el bucle de movimiento con break al detectar sobrecorriente o anomalías críticas", correct: true },
              { text: "Esperando a que el motor se queme para saber que falló", correct: false },
              { text: "Gritando fuerte en el estadio", correct: false },
              { text: "Desconectando la antena del Wi-Fi", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el fallo: Este sistema de seguridad imprime la alerta pero NUNCA sale del bucle, manteniendo los motores encendidos.",
            codeSnippet: "while true:\n    if botonEmergenciaPresionado:\n        print('ALERTA DE EMERGENCIA')\n        // ¡Falta el comando para detener el bucle!\n    avanzar()",
            options: [
              { text: "Falta agregar la instrucción 'break' dentro del if para salir del bucle", correct: true },
              { text: "Hay que quitar el while", correct: false },
              { text: "No se puede usar la palabra ALERTA", correct: false },
              { text: "El código es correcto y seguro", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el protocolo de parada de emergencia en código:",
            options: [
              { text: "if switchEmergencia == true:", correct: true, audioSrc: "1" },
              { text: "    desactivarVoltajeMotores()", correct: true, audioSrc: "2" },
              { text: "    print('E-STOP EJECUTADO')", correct: true, audioSrc: "3" },
              { text: "    break", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mensaje se imprimirá?",
            codeSnippet: "for i in range(10):\n    if i == 1:\n        print('PARADA')\n        break\n    print('PASO')",
            options: [
              { text: "PASO\nPARADA", correct: true },
              { text: "PARADA", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la regla sagrada respecto a la parada de emergencia en equipos como Nautilus 4010?",
            options: [
              { text: "La seguridad es innegociable: el código debe estar programado para fallar de forma segura (fail-safe)", correct: true },
              { text: "Intentar seguir jugando aunque el robot esté echando humo", correct: false },
              { text: "Ignorar las alarmas en las finales", correct: false },
              { text: "Desactivar los sensores de corriente para que el robot sea más rápido", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Rescate de un Bucle Trabado",
        challenges: [
          {
            type: "THEORY",
            question: "¡Misión de rescate de código en la arena!",
            lessonText: "# El Elevador Trabado ⚙️\n\nDurante una prueba en el taller, el mecanismo elevador sube escalón por escalón hasta el piso 5.\n\nSin embargo, el sensor del piso 5 tiene un cable flojo y nunca marca `true`. El bucle `while` se quedaría intentando subir indefinidamente y rompería la polea.\n\nEn este reto final de la Unidad 13, implementarás un **límite de seguridad por tiempo / intentos (Timeout Sentinel)** usando `break` para proteger el robot de fallas de sensores.",
            options: [
              { text: "¡Vamos a salvar el mecanismo con un break de seguridad!", correct: true },
              { text: "Prefiero que la polea se rompa", correct: false },
              { text: "No me importa la integridad del robot", correct: false },
              { text: "Quiero borrar el programa", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "El sensor no responde, pero el contador de intentos alcanza el límite de 4. ¿Qué imprimirá?",
            codeSnippet: "intentos = 0\nwhile true:\n    intentos += 1\n    if intentos >= 4:\n        print('TIMEOUT: LÍMITE DE SEGURIDAD')\n        break\nprint('Mecanismo detenido')",
            options: [
              { text: "TIMEOUT: LÍMITE DE SEGURIDAD\nMecanismo detenido", correct: true },
              { text: "Mecanismo detenido solamente", correct: false },
              { text: "TIMEOUT: LÍMITE DE SEGURIDAD solamente", correct: false },
              { text: "Loop infinito", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será el número final de intentos registrados?",
            codeSnippet: "intentos = 0\nwhile true:\n    intentos += 1\n    if intentos == 3:\n        break\nprint(intentos)",
            options: [
              { text: "3", correct: true },
              { text: "0", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la salida de emergencia del bucle:",
            codeSnippet: "if errorCritico == true:\n    desconectar()\n    _____",
            options: [
              { text: "break", correct: true },
              { text: "continue", correct: false },
              { text: "skip", correct: false },
              { text: "loop", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué lección fundamental te llevas de esta Unidad 13 sobre Break y Continue?",
            options: [
              { text: "Que break y continue nos dan control quirúrgico para salir de emergencias y filtrar datos sin atascar la ejecución del robot", correct: true },
              { text: "Que los bucles no se pueden controlar una vez iniciados", correct: false },
              { text: "Que es mejor nunca usar bucles en programación", correct: false },
              { text: "Que el procesador no necesita descansos", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
