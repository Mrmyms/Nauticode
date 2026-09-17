import { UnitDefinition } from "./types";

export const block1Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 1: WHAT IS PROGRAMMING?
  // ==========================================
  {
    order: 1,
    slug: "unit-1",
    title: "What is Programming?",
    description: "El lenguaje de las máquinas y el robot",
    guidebookText: `# Guía de Estudio: Unit 1 - What is Programming?

¡Bienvenido a **Nauticode** de **Nautilus 4010**!

Programar es simplemente **dar instrucciones precisas a una máquina para resolver problemas o realizar tareas**. A diferencia de los humanos, las computadoras y los controladores de robots (como la *roboRIO* en FIRST Robotics) no tienen intuición: ejecutan exactamente lo que les dices, ni más ni menos.

### Conceptos Clave:
- **Hardware:** La parte física del robot (motores, chasis, sensores, cables).
- **Software (Código):** Las instrucciones lógicas que le dan vida al hardware.
- **Lenguaje de Programación:** El puente entre el pensamiento humano y el lenguaje binario (ceros y unos) del procesador.
- **Regla de Oro:** Si un robot comete un error, el 99.9% de las veces la computadora no se equivocó; ejecutó fielmente una instrucción con un bug.`,
    lessons: [
      {
        title: "¿Qué es Programar?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es la programación en el mundo real?",
            lessonText: "# El Cerebro del Robot 🤖\n\nImagina que tienes un robot de competencia frente a ti. Tiene motores de alta potencia, sensores ultrasónicos y un chasis de aluminio impecable.\n\nSin embargo, **no se moverá un solo centímetro** a menos que le des instrucciones claras.\n\n**Programar** es el arte de escribir esas instrucciones en un formato que la computadora del robot pueda comprender y ejecutar al pie de la letra.\n\nEs exactamente como una **receta de cocina** o el manual de armado de un LEGO: cada paso debe ser claro y estar en el momento adecuado.",
            options: [
              { text: "Escribir instrucciones ordenadas para que una máquina las ejecute", correct: true },
              { text: "Hablarle telepáticamente al robot para que gane el match", correct: false },
              { text: "Apretar tornillos en el chasis con una llave inglesa", correct: false },
              { text: "Esperar a que la computadora aprenda sola por arte de magia", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué una computadora necesita instrucciones tan exactas?",
            lessonText: "# Precisión Absoluta\n\nLos humanos usamos el contexto y adivinamos lo que otros quieren decir. Una computadora no tiene esa capacidad.",
            options: [
              { text: "Porque no puede pensar ni adivinar por sí misma; sólo ejecuta órdenes literales", correct: true },
              { text: "Porque se aburre si las instrucciones son muy cortas", correct: false },
              { text: "Porque la electricidad sólo viaja en línea recta", correct: false },
              { text: "Porque prefiere jugar videojuegos antes de trabajar", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja cada concepto con su rol en la robótica:",
            options: [
              { text: "Hardware|||Componentes físicos como motores y sensores", correct: true },
              { text: "Software|||Instrucciones de código que controlan al robot", correct: true },
              { text: "Programador|||Humano que diseña la lógica de las acciones", correct: true },
              { text: "roboRIO|||La computadora controladora central del robot", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción en pseudocódigo para imprimir 'Go Nautilus!' en consola:",
            codeSnippet: "// Envía un mensaje a la pantalla de telemetría",
            options: [
              { text: "print('Go Nautilus!')", correct: true },
              { text: "wrong", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Cómo se llama el texto con instrucciones que escribimos los programadores?",
            options: [
              { text: "Código Fuente (Source Code)", correct: true },
              { text: "Manifiesto Secreto", correct: false },
              { text: "Binario de la Suerte", correct: false },
              { text: "Plan de Vuelo", correct: false }
            ]
          }
        ]
      },
      {
        title: "Instrucciones Paso a Paso",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo procesa las instrucciones una computadora?",
            lessonText: "# Paso a Paso (Step-by-Step)\n\nUna computadora ejecuta las instrucciones **una a una**, de arriba hacia abajo (*top-to-bottom*).\n\nSi le pides a un novato del equipo:\n1. 'Ve al taller'\n2. 'Toma un cautín'\n3. 'Enciéndelo'\n\nTiene sentido. Pero si alteras el orden y dices:\n1. 'Enciéndelo'\n2. 'Toma un cautín'\n3. 'Ve al taller'\n\n¡El resultado será un desastre! En código, saltarse un paso o dar una instrucción fuera de tiempo crea un **bug**.",
            options: [
              { text: "En secuencia ordenada, una tras otra de arriba a abajo", correct: true },
              { text: "Todas al mismo milisegundo al azar", correct: false },
              { text: "De abajo hacia arriba al revés", correct: false },
              { text: "Sólo las instrucciones que le parecen divertidas", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el comando para imprimir un aviso cuando el robot inicie:",
            codeSnippet: "_____('Robot Iniciado: Sistema Listo')",
            options: [
              { text: "print", correct: true },
              { text: "shout", correct: false },
              { text: "speak", correct: false },
              { text: "makeNoise", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida en la consola tras ejecutar este bloque?",
            codeSnippet: "print('Paso 1: Calibrando')\nprint('Paso 2: Listo')",
            options: [
              { text: "Paso 1: Calibrando Paso 2: Listo", correct: false },
              { text: "Paso 1: Calibrando\nPaso 2: Listo", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los pasos lógicos para disparar una pelota en FRC:",
            options: [
              { text: "encenderShooter()", correct: true, audioSrc: "1" },
              { text: "esperarVelocidadOptima()", correct: true, audioSrc: "2" },
              { text: "activarFeeder()", correct: true, audioSrc: "3" },
              { text: "detenerShooter()", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre si le pedimos al feeder meter la pelota antes de que el shooter esté girando a velocidad?",
            options: [
              { text: "La pelota se atasca o el tiro sale sin fuerza", correct: true },
              { text: "El robot vuela", correct: false },
              { text: "El código se borra automáticamente", correct: false },
              { text: "El procesador se apaga por vergüenza", correct: false }
            ]
          }
        ]
      },
      {
        title: "Lenguajes, Compiladores e Intérpretes",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué papel juega el compilador o intérprete?",
            lessonText: "# El Traductor Universal 🌐\n\nLos microprocesadores sólo entienden voltajes: presencia o ausencia de corriente, representados como **0 y 1** (código binario).\n\nEscribir en ceros y unos sería infernalmente lento para los humanos. Por eso usamos **lenguajes de alto nivel** como Python, Java o C++.\n\nEl **compilador** o **intérprete** es el software traductor que toma nuestro código en texto legible y lo convierte en el código máquina que el chip entiende.",
            options: [
              { text: "Traduce el código legible por humanos a ceros y unos para el procesador", correct: true },
              { text: "Limpia el polvo de la placa de circuitos del robot", correct: false },
              { text: "Acelera la batería del robot conectándola a la red", correct: false },
              { text: "Es un robot físico que escribe código con un teclado gigante", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada término con su significado:",
            options: [
              { text: "Código Binario|||Ceros y unos que procesa el circuito", correct: true },
              { text: "Lenguaje Alto Nivel|||Código comprensible con palabras en inglés", correct: true },
              { text: "Compilador|||Traductor de código fuente a lenguaje máquina", correct: true },
              { text: "Bug|||Un error o fallo lógico en el programa", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuáles de los siguientes son lenguajes de alto nivel utilizados en FIRST Robotics?",
            options: [
              { text: "Java, C++ y Python", correct: true },
              { text: "Morse, Semáforo y Braille", correct: false },
              { text: "HTML, CSS y Photoshop", correct: false },
              { text: "Bluetooth, Wi-Fi y Radiofrecuencia", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Este programa no corre porque tiene un error de sintaxis en el print. ¿Cuál es el error?",
            codeSnippet: "print 'Iniciando teleoperado'",
            options: [
              { text: "Faltan los paréntesis () alrededor del texto", correct: true },
              { text: "No se puede usar la palabra print", correct: false },
              { text: "La palabra print debe estar toda en mayúsculas", correct: false },
              { text: "El texto no puede llevar espacios", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Corrige el error agregando los paréntesis correctos:",
            codeSnippet: "print_____'Nautilus 4010'_____",
            options: [
              { text: "( y )", correct: true },
              { text: "[ y ]", correct: false },
              { text: "{ y }", correct: false },
              { text: "< y >", correct: false }
            ]
          }
        ]
      },
      {
        title: "¿Cómo Piensa una Computadora?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué se dice que las computadoras son literales?",
            lessonText: "# El Pensamiento Computacional 🧠\n\nUn humano promedio puede deducir intenciones. Si le dices a tu compañero de pits 'pásame esa cosa que gira tornillos', sabe que te refieres al destornillador.\n\nUna computadora **no puede inferir nada**. Si tu código tiene una letra mayúscula en vez de minúscula, o te falta una coma, el programa fallará con un **Syntax Error**.\n\nAprender a programar es aprender a pensar con **precisión matemática y claridad quirúrgica**.",
            options: [
              { text: "Porque ejecutan exactamente lo escrito sin interpretar la intención", correct: true },
              { text: "Porque sólo leen libros de ciencia ficción", correct: false },
              { text: "Porque no les gusta ayudar a los programadores novatos", correct: false },
              { text: "Porque las baterías de 12V no transmiten metáforas", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Cómo se llama el error que ocurre cuando violamos las reglas gramaticales de un lenguaje de programación?",
            options: [
              { text: "Syntax Error (Error de Sintaxis)", correct: true },
              { text: "Hardware Crash", correct: false },
              { text: "Battery Drain", correct: false },
              { text: "Mechanical Jam", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la consola tras ejecutar este código?",
            codeSnippet: "print('Nautilus')\nprint('4010')",
            options: [
              { text: "Nautilus en la primera línea y 4010 en la segunda", correct: true },
              { text: "Nautilus4010 todo pegado en una sola palabra", correct: false },
              { text: "4010 Nautilus al revés", correct: false },
              { text: "Error porque 4010 es un número", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe una instrucción que imprima exactamente el texto: Ready",
            codeSnippet: "// Tu turno de escribir código",
            options: [
              { text: "print('Ready')", correct: true },
              { text: "print(Ready)", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Es lo mismo escribir `Print('Hola')` que `print('Hola')` en la mayoría de lenguajes?",
            options: [
              { text: "No, la mayoría de lenguajes son case-sensitive (distinguen mayúsculas de minúsculas)", correct: true },
              { text: "Sí, a las computadoras les da igual el tamaño de las letras", correct: false },
              { text: "Sí, siempre y cuando esté en cursiva", correct: false },
              { text: "Sólo si el robot está conectado a la luz", correct: false }
            ]
          }
        ]
      },
      {
        title: "Desafío Práctico: Tu Primera Instrucción",
        challenges: [
          {
            type: "THEORY",
            question: "¡Momento de poner a prueba lo aprendido!",
            lessonText: "# ¡Bienvenido al equipo de programación! 🤖\n\nEstás en la arena de competencia preparando las primeras instrucciones para el robot.\n\nEn esta lección final de la Unidad 1, pondrás en práctica la sintaxis correcta de impresión, el orden de instrucciones y el vocabulario básico que todo programador de Nautilus 4010 domina.\n\n¡Vamos a dejar el código impecable!",
            options: [
              { text: "¡Estoy listo para programar las primeras instrucciones!", correct: true },
              { text: "Prefiero que el robot maneje solo a ciegas", correct: false },
              { text: "No quiero aprender programación", correct: false },
              { text: "Quiero apagar la computadora", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las líneas para mostrar el mensaje oficial de bienvenida:",
            options: [
              { text: "print('Bienvenido a Nauticode')", correct: true, audioSrc: "1" },
              { text: "print('Equipo 4010 Nautilus')", correct: true, audioSrc: "2" },
              { text: "print('Building a Legacy')", correct: true, audioSrc: "3" }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el bug: Falta cerrar las comillas en el mensaje.",
            codeSnippet: "print('Teus está listo para competir)",
            options: [
              { text: "Falta una comilla de cierre ' antes del paréntesis final", correct: true },
              { text: "Hay que quitar los paréntesis", correct: false },
              { text: "Falta un punto y coma al inicio", correct: false },
              { text: "La palabra Teus no se puede imprimir", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción de código correcta y con comillas cerradas:",
            codeSnippet: "// Corrige el print",
            options: [
              { text: "print('Teus está listo para competir')", correct: true },
              { text: "wrong", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué afirmación resume mejor lo que aprendiste en esta Unidad 1?",
            options: [
              { text: "Programar es dar instrucciones ordenadas, precisas y sin errores de sintaxis a una máquina", correct: true },
              { text: "El hardware no necesita software para funcionar", correct: false },
              { text: "Las computadoras adivinan lo que quieres decir sin importar cómo lo escribas", correct: false },
              { text: "Los robots de FRC funcionan con pura suerte y buena vibra", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 2: ALGORITHMS & LOGIC
  // ==========================================
  {
    order: 2,
    slug: "unit-2",
    title: "Algorithms & Logic",
    description: "Paso a paso: Instrucciones finitas y sin ambigüedad",
    guidebookText: `# Guía de Estudio: Unit 2 - Algorithms & Logic

Un **algoritmo** es un conjunto finito, ordenado y no ambiguo de pasos para resolver un problema o alcanzar un objetivo.

### Las 3 Fases de Todo Algoritmo:
1. **Entrada (Input):** Los datos con los que trabajamos (ejemplo: lectura de un sensor ultrasónico = 15 cm).
2. **Procesamiento:** La lógica de cálculo o decisión (ejemplo: ¿15 cm es menor a la distancia segura de 30 cm?).
3. **Salida (Output):** La acción o resultado generado (ejemplo: activar el freno en los motores).

### Pseudocódigo y Diagramas de Flujo
Antes de escribir código en un lenguaje formal (Java, Python, C++), los ingenieros diseñamos la lógica en **pseudocódigo** (código en lenguaje humano estructurado). Esto ahorra horas de errores en la cancha.`,
    lessons: [
      {
        title: "¿Qué es un Algoritmo?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué define a un algoritmo?",
            lessonText: "# La Receta del Éxito 📋\n\n¿Alguna vez has seguido una receta para hornear un pastel? Sigues una lista de pasos finitos:\n1. Medir harina\n2. Mezclar huevos\n3. Precalentar horno a 180°C\n4. Hornear por 25 minutos\n\nEso es un **algoritmo**. En programación y robótica, un algoritmo debe cumplir 3 propiedades sagradas:\n- **Finito:** Debe terminar en algún momento.\n- **Definido:** Cada vez que le des los mismos datos, debe producir el mismo resultado.\n- **Preciso:** No puede haber ambigüedad ni pasos vagos como 'hazlo bien'.",
            options: [
              { text: "Una serie ordenada de pasos finitos y precisos para resolver un problema", correct: true },
              { text: "Un tipo de procesador que sólo usan los militares", correct: false },
              { text: "Un error que destruye la memoria de la máquina", correct: false },
              { text: "Un baile que hacen los programadores cuando su código compila", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de las siguientes instrucciones NO es un buen paso para un algoritmo de robot?",
            options: [
              { text: "'Gira el robot más o menos un poquito'", correct: true },
              { text: "'Avanza 1.5 metros hacia adelante a 50% de potencia'", correct: false },
              { text: "'Gira 90 grados a la derecha usando el giroscopio'", correct: false },
              { text: "'Detén los motores si el sensor de distancia marca menos de 10 cm'", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada característica de un buen algoritmo con su significado:",
            options: [
              { text: "Finito|||Tiene un principio y un final claro", correct: true },
              { text: "Preciso|||Cada paso indica la acción exacta sin dudas", correct: true },
              { text: "Determinista|||Mismos datos siempre dan el mismo resultado", correct: true },
              { text: "Eficiente|||Resuelve el problema usando el mínimo tiempo/memoria", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el algoritmo para cruzar la calle de forma segura:",
            options: [
              { text: "Detenerse en la banqueta", correct: true, audioSrc: "1" },
              { text: "Mirar a la izquierda y a la derecha", correct: true, audioSrc: "2" },
              { text: "Verificar si vienen autos", correct: true, audioSrc: "3" },
              { text: "Cruzar caminando a paso constante", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "ASSIST",
            question: "Si un algoritmo nunca termina y se queda atrapado repitiéndose eternamente, decimos que entró en:",
            options: [
              { text: "Un bucle infinito (Infinite Loop)", correct: true },
              { text: "Modo de hibernación cósmica", correct: false },
              { text: "Sobrecarga de combustible", correct: false },
              { text: "Velocidad de la luz", correct: false }
            ]
          }
        ]
      },
      {
        title: "Inputs, Procesamiento y Outputs",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo interactúan las 3 fases de un sistema computacional?",
            lessonText: "# El Ciclo IPO (Input -> Process -> Output) 🔄\n\nTodo programa o robot en el universo opera bajo este ciclo continuo:\n\n1. **INPUT (Entrada):** Información que entra al sistema. En un robot, son los joysticks del piloto o los sensores (cámara Limelight, encoder de ruedas, giroscopio).\n2. **PROCESS (Procesamiento):** Las operaciones matemáticas y decisiones lógicas que ejecuta el microprocesador.\n3. **OUTPUT (Salida):** La respuesta al exterior. Motores girando, un pistón neumático abriéndose, luces LED cambiando a color amarillo o telemetría en la pantalla.",
            options: [
              { text: "Entrada de datos -> Procesamiento lógico -> Salida de acciones", correct: true },
              { text: "Salida primero -> luego la entrada -> y no hay procesamiento", correct: false },
              { text: "Procesamiento sin datos de entrada ni salida", correct: false },
              { text: "El ciclo sólo funciona si no hay humanos cerca", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cada elemento de un robot de FRC en su fase correspondiente:",
            options: [
              { text: "Joystick del piloto|||Input (Entrada de control)", correct: true },
              { text: "Sensor ultrasónico|||Input (Entrada de telemetría)", correct: true },
              { text: "Cálculo de velocidad en la roboRIO|||Process (Procesamiento)", correct: true },
              { text: "Motor del intake encendido|||Output (Salida de acción)", correct: true }
            ]
          },
          {
            type: "CODE_TEST",
            question: "En este snippet de código, ¿cuál es el Output generado?",
            codeSnippet: "distancia = 12\nresultado = distancia * 2\nprint(resultado)",
            options: [
              { text: "El número 24 impreso en la consola", correct: true },
              { text: "El número 12", correct: false },
              { text: "La palabra 'distancia'", correct: false },
              { text: "No produce ningún output", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el código para generar el output con el resultado:",
            codeSnippet: "lecturaSensor = 40\n_____('Lectura: ' + str(lecturaSensor))",
            options: [
              { text: "print", correct: true },
              { text: "input", correct: false },
              { text: "save", correct: false },
              { text: "read", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si el piloto no mueve la palanca del joystick (Input = 0), ¿cuál debería ser el Output de velocidad del motor en reposo?",
            options: [
              { text: "0 (Motor detenido)", correct: true },
              { text: "100% a máxima velocidad", correct: false },
              { text: "-50% en reversa", correct: false },
              { text: "Girar en círculos sin control", correct: false }
            ]
          }
        ]
      },
      {
        title: "Pseudocódigo: Diseñando en Humano",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué los desarrolladores usamos pseudocódigo?",
            lessonText: "# Pensar Antes de Escribir ✍️\n\nEl **pseudocódigo** es una descripción de alto nivel de un algoritmo que combina lenguaje natural con estructuras de programación.\n\nNo le importa si olvidas un punto y coma o si usas mayúsculas: su objetivo es que el **equipo de ingeniería se ponga de acuerdo en la lógica** antes de pasar horas depurando en Java o C++.\n\nEjemplo de pseudocódigo en Nautilus:\n```text\nSI botónDisparar está presionado ENTONCES:\n    acelerarFlywheel()\n    esperar 1 segundo\n    alimentarNota()\nSINO:\n    apagarFlywheel()\n```",
            options: [
              { text: "Para diseñar y validar la lógica en palabras claras antes de programar formalmente", correct: true },
              { text: "Porque las computadoras ejecutan el pseudocódigo más rápido que el código real", correct: false },
              { text: "Para ocultarle el código a los jueces de FIRST", correct: false },
              { text: "Es un lenguaje inventado para engañar a los virus informáticos", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de estos ejemplos representa mejor un pseudocódigo limpio?",
            options: [
              { text: "SI bateria < 11.5 ENTONCES alertarPiloto()", correct: true },
              { text: "01000101 01101100 01100101", correct: false },
              { text: "hacer cosas del robot muy rapido", correct: false },
              { text: "System.out.println(Double.parseDouble(args[0]));", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena este pseudocódigo para recoger una nota del suelo (Intake):",
            options: [
              { text: "bajarMecanismoIntake()", correct: true, audioSrc: "1" },
              { text: "encenderRodillosIntake()", correct: true, audioSrc: "2" },
              { text: "esperar sensorOptico == TRUE", correct: true, audioSrc: "3" },
              { text: "detenerRodillosIntake()", correct: true, audioSrc: "4" },
              { text: "subirMecanismoIntake()", correct: true, audioSrc: "5" }
            ]
          },
          {
            type: "ASSIST",
            question: "En el pseudocódigo anterior, ¿por qué es crucial esperar a que el sensor marque TRUE antes de detener los rodillos?",
            options: [
              { text: "Para garantizar que la pieza ya entró completamente al robot antes de apagar los motores", correct: true },
              { text: "Para gastar toda la batería del robot", correct: false },
              { text: "Porque al sensor le gusta ver girar los rodillos", correct: false },
              { text: "Para que el árbitro pite una falta", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe en pseudocódigo la instrucción básica para imprimir el mensaje: ALGORITMO OK",
            codeSnippet: "// Imprime el mensaje",
            options: [
              { text: "print('ALGORITMO OK')", correct: true },
              { text: "wrong", correct: false }
            ]
          }
        ]
      },
      {
        title: "Diagramas de Flujo y Rutas Lógicas",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un diagrama de flujo en desarrollo de software?",
            lessonText: "# Mapas Visuales de Decisiones 🗺️\n\nUn **diagrama de flujo** representa visualmente un algoritmo usando símbolos estándar:\n- **Óvalo:** Inicio o Fin del programa.\n- **Rectángulo:** Una acción o proceso (ej: `avanzar 2 metros`).\n- **Rombo:** Una decisión con dos salidas: `SÍ` o `NO` (ej: `¿hay obstáculo?`).\n- **Flechas:** Indican la dirección del flujo de ejecución.\n\nVer el flujo con tus propios ojos te ayuda a descubrir de inmediato caminos sin salida o bucles infinitos no deseados.",
            options: [
              { text: "Una representación gráfica de la secuencia de pasos y decisiones de un algoritmo", correct: true },
              { text: "El plano eléctrico de los cables de poder del robot", correct: false },
              { text: "Un dibujo artístico para decorar la lona del pit de Nautilus", correct: false },
              { text: "Una gráfica que muestra el precio de las piezas de aluminio", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Asocia cada figura geométrica con su significado en diagramas de flujo:",
            options: [
              { text: "Óvalo|||Inicio o Fin del programa", correct: true },
              { text: "Rectángulo|||Acción o proceso de cálculo", correct: true },
              { text: "Rombo|||Decisión o condición (Verdadero / Falso)", correct: true },
              { text: "Flecha|||Dirección y flujo de la ejecución", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "Dentro de un rombo de decisión, ¿cuántos caminos de salida mínimos deben existir?",
            options: [
              { text: "2 caminos (uno para Verdadero / Sí y otro para Falso / No)", correct: true },
              { text: "Infinitos caminos simultáneos", correct: false },
              { text: "Ninguno, la decisión es un callejón sin salida", correct: false },
              { text: "Solo 1 camino que siempre avanza sin importar la condición", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Identifica el fallo lógico en este algoritmo de autonomous:",
            codeSnippet: "// 1. Avanzar 3 metros\n// 2. Disparar bola al objetivo\n// 3. Tomar bola del piso\n// 4. Fin",
            options: [
              { text: "Intenta disparar la bola (paso 2) antes de haber tomado la bola del piso (paso 3)", correct: true },
              { text: "No se puede avanzar 3 metros en un autonomous", correct: false },
              { text: "Falta poner la palabra start al inicio", correct: false },
              { text: "El paso 4 no debe decir Fin", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena correctamente el flujo lógico para corregir el bug anterior:",
            options: [
              { text: "tomarBolaDelPiso()", correct: true, audioSrc: "1" },
              { text: "avanzarMetros(3)", correct: true, audioSrc: "2" },
              { text: "dispararBolaAlObjetivo()", correct: true, audioSrc: "3" },
              { text: "detenerTodo()", correct: true, audioSrc: "4" }
            ]
          }
        ]
      },
      {
        title: "Reto: Algoritmo de Rutina Autónoma",
        challenges: [
          {
            type: "THEORY",
            question: "El reto de los primeros 15 segundos en FIRST Robotics",
            lessonText: "# El Periodo Autónomo ⏱️\n\nEn cada match de FRC, los primeros 15 segundos son **100% autónomos**.\n\nNingún humano puede tocar los joysticks. El robot depende enteramente del **algoritmo preprogramado** en su memoria:\n1. Salir de la zona de inicio.\n2. Localizar la pieza con visión artificial.\n3. Recogerla con el intake.\n4. Apuntar y anotar puntos.\n\nSi el algoritmo es defectuoso, el robot puede chocar contra la pared o desperdiciar valiosos segundos de juego.",
            options: [
              { text: "¡Diseñemos un algoritmo de autónomo infalible!", correct: true },
              { text: "Prefiero que el robot se quede dormido los 15 segundos", correct: false },
              { text: "Quiero manejar el robot con mi mente durante el autónomo", correct: false },
              { text: "No me interesan los puntos del match", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina autónoma de 4010 para anotar en el Speaker:",
            options: [
              { text: "iniciarOdometria()", correct: true, audioSrc: "1" },
              { text: "conducirAPosicionDisparo()", correct: true, audioSrc: "2" },
              { text: "acelerarShooterRPM(4500)", correct: true, audioSrc: "3" },
              { text: "dispararNota()", correct: true, audioSrc: "4" },
              { text: "salirDeZonaComunidad()", correct: true, audioSrc: "5" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la pantalla de telemetría de los jueces tras correr este algoritmo?",
            codeSnippet: "puntos = 0\npuntos = puntos + 2 // Salir de zona\npuntos = puntos + 5 // Anotar en speaker\nprint(puntos)",
            options: [
              { text: "7", correct: true },
              { text: "0", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la verificación del tiempo de autónomo:",
            codeSnippet: "tiempoRestante = 15\n_____('Segundos de autónomo restantes: ' + str(tiempoRestante))",
            options: [
              { text: "print", correct: true },
              { text: "wait", correct: false },
              { text: "motor", correct: false },
              { text: "gyro", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué es tan valioso simular y revisar algoritmos en equipo antes de cargar el código al robot físico?",
            options: [
              { text: "Para evitar daños mecánicos en el robot, prevenir choques y asegurar puntos en competencia", correct: true },
              { text: "Para que el café de los mentores no se enfríe", correct: false },
              { text: "Porque el robot pesa demasiado para moverlo", correct: false },
              { text: "No tiene valor, es mejor probar directo a máxima potencia en la cancha", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 3: SEQUENTIAL EXECUTION
  // ==========================================
  {
    order: 3,
    slug: "unit-3",
    title: "Sequential Execution",
    description: "Flujo línea por línea: Por qué el orden lo cambia todo",
    guidebookText: `# Guía de Estudio: Unit 3 - Sequential Execution

Las computadoras procesan las instrucciones en **orden secuencial estricto**, línea por línea, de arriba hacia abajo (*Top-to-Bottom*).

### Puntos Cruciales:
1. **El Puntero de Instrucción:** La CPU mantiene un registro interno que apunta a la línea actual en ejecución. Una vez terminada, salta a la siguiente.
2. **Dependencias:** Si la línea 4 usa el resultado de la línea 2, la línea 2 DEBE ejecutarse primero.
3. **Efectos Secundarios en Robótica:** En software puro, un cálculo fuera de orden produce un resultado numérico incorrecto. En robótica, un comando de motor fuera de orden puede romper un eje de transmisión o doblar una placa de policarbonato.`,
    lessons: [
      {
        title: "Ejecución Línea por Línea",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo recorre el procesador un archivo de código?",
            lessonText: "# El Hilo de la Secuencia 🧵\n\nImagina que estás leyendo un libro: lees la primera palabra, luego la segunda, completas el renglón y bajas al siguiente.\n\nUna computadora hace exactamente lo mismo con un script de código:\n```python\n# Línea 1\nprint('Iniciando sistemas')\n# Línea 2\nprint('Comprobando sensores')\n# Línea 3\nprint('Robot habilitado')\n```\n\nJamás se ejecutará la línea 3 antes que la línea 1 a menos que usemos estructuras especiales de control de flujo. La ejecución es **secuencial y determinista**.",
            options: [
              { text: "Línea por línea de arriba hacia abajo, una después de otra", correct: true },
              { text: "Al azar según qué línea esté escrita en palabras más largas", correct: false },
              { text: "De abajo hacia arriba para terminar más rápido", correct: false },
              { text: "Solo las líneas pares los días martes", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida exacta de este programa?",
            codeSnippet: "print('Alfa')\nprint('Bravo')\nprint('Charlie')",
            options: [
              { text: "Alfa\nBravo\nCharlie", correct: true },
              { text: "Charlie\nBravo\nAlfa", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿En qué orden se imprimirán los números de este script?",
            codeSnippet: "print('3')\nprint('1')\nprint('2')",
            options: [
              { text: "3, luego 1, luego 2 (siguiendo el orden de las líneas escritas)", correct: true },
              { text: "1, 2, 3 (porque la computadora los ordena numéricamente de forma automática)", correct: false },
              { text: "Solo imprimirá el número 3", correct: false },
              { text: "Dará un error porque los números no están ordenados", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las líneas para que cuenten del 1 al 3 en pantalla:",
            options: [
              { text: "print('1')", correct: true, audioSrc: "1" },
              { text: "print('2')", correct: true, audioSrc: "2" },
              { text: "print('3')", correct: true, audioSrc: "3" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre cuando una línea de código produce un error fatal (crash)?",
            options: [
              { text: "El programa se detiene de inmediato en esa línea y las siguientes no se ejecutan", correct: true },
              { text: "El programa ignora el error y salta mágicamente a la última línea", correct: false },
              { text: "La computadora se reinicia sola", correct: false },
              { text: "El monitor se pone en blanco y negro", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Orden Altera el Resultado",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué el orden de las operaciones cambia el resultado?",
            lessonText: "# Las Matemáticas de la Secuencia 🧮\n\nAnaliza estos dos programas. Parecen iguales, pero no lo son:\n\n**Programa A:**\n```python\nvalor = 10\nvalor = valor + 5  # Ahora valor es 15\nvalor = valor * 2  # 15 * 2 = 30\nprint(valor)       # Imprime 30\n```\n\n**Programa B (Invertido):**\n```python\nvalor = 10\nvalor = valor * 2  # Ahora valor es 20\nvalor = valor + 5  # 20 + 5 = 25\nprint(valor)       # Imprime 25\n```\n\n¡Las mismas operaciones en diferente orden dan resultados totalmente distintos!",
            options: [
              { text: "Porque cada línea opera sobre el estado acumulado de las líneas anteriores", correct: true },
              { text: "Porque a la multiplicación le da miedo la suma", correct: false },
              { text: "Porque la computadora calcula números al azar", correct: false },
              { text: "En realidad dan el mismo resultado, es una ilusión óptica", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor final se imprime en este código?",
            codeSnippet: "score = 5\nscore = score * 3\nscore = score - 2\nprint(score)",
            options: [
              { text: "13", correct: true },
              { text: "15", correct: false },
              { text: "9", correct: false },
              { text: "5", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá este programa?",
            codeSnippet: "pasos = 0\npasos = pasos + 1\npasos = pasos + 1\nprint(pasos)",
            options: [
              { text: "2", correct: true },
              { text: "0", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el código para que el resultado final sea 100:",
            codeSnippet: "x = 50\nx = x _____ 2\nprint(x)",
            options: [
              { text: "*", correct: true },
              { text: "-", correct: false },
              { text: "/", correct: false },
              { text: "%", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si intentas imprimir una variable antes de crearla (ej: `print(energia)` antes de `energia = 100`), ¿qué sucederá?",
            options: [
              { text: "Error: La variable no está definida (NameError / Undefined)", correct: true },
              { text: "La computadora inventa un valor de energía", correct: false },
              { text: "Imprime cero sin avisar", correct: false },
              { text: "Se apaga el monitor", correct: false }
            ]
          }
        ]
      },
      {
        title: "Tracing Mental: Siguiendo el Puntero",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es el 'tracing' en programación?",
            lessonText: "# El Superpoder de Rastrear Código 🕵️‍♂️\n\nEl **Tracing** (rastreo manual de código) es la habilidad de convertirte en el procesador.\n\nTomas una libreta y una pluma, y anotas:\n- ¿En qué línea estoy?\n- ¿Qué variables existen en este instante?\n- ¿Qué valores tienen adentro?\n\nLos mejores programadores del mundo no son los que escriben más rápido, sino los que pueden ejecutar el código en su cabeza paso a paso antes de correrlo.",
            options: [
              { text: "Seguir la ejecución de un programa paso a paso para verificar el estado de las variables", correct: true },
              { text: "Rastrear la ubicación GPS del robot en el mapa", correct: false },
              { text: "Copiar código de internet sin entenderlo", correct: false },
              { text: "Dibujar el contorno del chasis en un cartón", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Haz el tracing: ¿Cuál es el valor de 'potencia' en la línea 3?",
            codeSnippet: "# Línea 1: potencia = 20\n# Línea 2: potencia = potencia + 30\n# Línea 3: potencia = potencia * 2",
            options: [
              { text: "100", correct: true },
              { text: "50", correct: false },
              { text: "40", correct: false },
              { text: "20", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja cada línea de código con el estado de la variable `x` tras ejecutarse:",
            options: [
              { text: "x = 10|||x vale 10", correct: true },
              { text: "x = x + 5|||x vale 15", correct: true },
              { text: "x = x * 2|||x vale 30", correct: true },
              { text: "x = 0|||x vale 0", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción que actualiza la variable 'vidas' restándole 1:",
            codeSnippet: "// Disminuye vidas en 1",
            options: [
              { text: "vidas = vidas - 1", correct: true },
              { text: "vidas - 1", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué `x = x + 1` es completamente válido en programación pero parece absurdo en álgebra pura?",
            options: [
              { text: "Porque el símbolo '=' en código no significa igualdad, sino ASIGNACIÓN del nuevo valor a la variable", correct: true },
              { text: "Porque en computación las matemáticas no aplican", correct: false },
              { text: "Porque la variable x siempre vale infinito", correct: false },
              { text: "Porque el procesador comete errores de álgebra", correct: false }
            ]
          }
        ]
      },
      {
        title: "Peligros de Secuencia en Robótica",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué los errores de secuencia son peligrosos con motores reales?",
            lessonText: "# Código en el Mundo Físico 💥\n\nEn un videojuego, si un personaje intenta saltar antes de tocar el suelo, solo se ve extraño en pantalla.\n\nEn un robot de 55 kg en FIRST Robotics:\n1. Si ordenas `moverBrazoAlMaximo()` **antes** de `calibrarSensorDeLimite()`...\n2. El motor empujará el brazo contra la estructura de metal con toda su fuerza.\n3. El engrane se barrerá y el motor Neo o Falcon se quemará.\n\n**El orden de las instrucciones en robótica protege la integridad física de las personas y de la máquina.**",
            options: [
              { text: "Porque ejecutar acciones físicas antes de calibrar sensores puede romper componentes mecánicos", correct: true },
              { text: "Porque la cancha de FRC se destruye automáticamente", correct: false },
              { text: "Porque los robots se ponen tristes cuando se equivocan", correct: false },
              { text: "Porque se pierde la conexión a internet en todo el estadio", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error de secuencia crítico en este inicio de teleoperado:",
            codeSnippet: "activarMotoresChasis(1.0)\nverificarFrenoDeEmergencia()\nconectarControladorRadio()",
            options: [
              { text: "Los motores se activan antes de conectar el radio y verificar la parada de emergencia", correct: true },
              { text: "No se puede usar la potencia 1.0", correct: false },
              { text: "Falta poner una línea con el nombre del piloto", correct: false },
              { text: "No hay ningún problema, el robot frenará después", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Reordena la secuencia para que el arranque sea 100% seguro:",
            options: [
              { text: "conectarControladorRadio()", correct: true, audioSrc: "1" },
              { text: "verificarFrenoDeEmergencia()", correct: true, audioSrc: "2" },
              { text: "calibrarSensores()", correct: true, audioSrc: "3" },
              { text: "activarMotoresChasis(1.0)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Cuál es la regla de oro para la lectura de sensores y control de motores?",
            options: [
              { text: "Primero leer sensores, luego tomar la decisión, y al final accionar los motores", correct: true },
              { text: "Primero mover los motores a toda velocidad y después averiguar qué pasó", correct: false },
              { text: "Apagar todos los sensores para que el código corra más rápido", correct: false },
              { text: "Mover motores únicamente cuando la batería esté por debajo del 10%", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el aviso de seguridad en consola antes de encender motores:",
            codeSnippet: "_____('Atención: Área despejada, encendiendo motores')",
            options: [
              { text: "print", correct: true },
              { text: "warning", correct: false },
              { text: "alarm", correct: false },
              { text: "buzzer", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Secuencia de Arranque Seguro",
        challenges: [
          {
            type: "THEORY",
            question: "¡El ritual de inicio de Nautilus 4010!",
            lessonText: "# El Checklist de Inicio de Teus 🚀\n\nAntes de cada match oficial de FIRST, el equipo de drive team sigue un protocolo estricto de software en la Driver Station.\n\nEn este reto final de la Unidad 3, vas a ensamblar y verificar la secuencia de encendido y telemetría de Nautilus 4010.\n\n¡La secuencia correcta garantiza que el robot salga a la arena a ganar!",
            options: [
              { text: "¡Vamos a ensamblar la secuencia de arranque!", correct: true },
              { text: "No quiero revisar la secuencia", correct: false },
              { text: "Prefiero ir directo a la final sin probar el robot", correct: false },
              { text: "Quiero desconectar la batería", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia completa de chequeo del robot:",
            options: [
              { text: "print('1. Verificando voltaje de batería...')", correct: true, audioSrc: "1" },
              { text: "print('2. Calibrando NavX Gyro...')", correct: true, audioSrc: "2" },
              { text: "print('3. Sincronizando cámaras Limelight...')", correct: true, audioSrc: "3" },
              { text: "print('4. Sistema Nautilus 4010 ONLINE!')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué número final de advertencias se mostrará?",
            codeSnippet: "warnings = 0\nwarnings = warnings + 1  // Batería tibia\nwarnings = warnings + 1  // Presión de aire baja\nprint(warnings)",
            options: [
              { text: "2", correct: true },
              { text: "0", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción final que imprime el mensaje de confirmación: SISTEMA LISTO",
            codeSnippet: "// Imprime la confirmación",
            options: [
              { text: "print('SISTEMA LISTO')", correct: true },
              { text: "print(SISTEMA LISTO)", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué conclusión fundamental te llevas de esta Unidad 3 sobre Sequential Execution?",
            options: [
              { text: "El orden en que escribimos el código define el orden en que suceden las cosas en el mundo real", correct: true },
              { text: "El procesador lee las instrucciones en círculos", correct: false },
              { text: "No importa dónde declares las variables ni dónde enciendas los motores", correct: false },
              { text: "Es mejor escribir todo el programa en una sola línea larguísima", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
