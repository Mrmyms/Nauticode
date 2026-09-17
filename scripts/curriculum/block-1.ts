import { UnitDefinition } from "./types";

export const block1Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 1: WHAT IS PROGRAMMING?
  // ==========================================
  {
    order: 1,
    slug: "unit-1",
    title: "What is Programming?",
    description: "Input, Proceso, Output y el lenguaje de las máquinas",
    guidebookText: `# Guía de Estudio: Unit 1 - What is Programming?

¡Bienvenido a **Nauticode** de **Nautilus 4010**!

Programar **no** es magia ni adivinación; es la ciencia de diseñar algoritmos que convierten datos de entrada en datos de salida, y luego traducirlos a un idioma que la máquina pueda ejecutar.

### Conceptos Clave (Basado en CS50):
- **Input -> Caja Negra (Proceso) -> Output:** Una computadora solo toma información, la procesa siguiendo reglas matemáticas o lógicas, y genera un resultado.
- **Hardware y Ceros/Unos:** El procesador está lleno de transistores microscópicos que actúan como interruptores (ON/OFF). Todo lo que la computadora entiende se reduce a impulsos eléctricos: **1 (Alto Voltaje)** y **0 (Bajo Voltaje)**.
- **Precisión vs Intuición:** A diferencia de un humano que deduce intenciones, una computadora ejecuta instrucciones **literales**. Si falta un paréntesis, no adivina qué quisiste decir; el programa colapsa.
- **Lenguajes de Alto Nivel:** Como no podemos programar eficientemente escribiendo millones de ceros y unos, usamos lenguajes legibles para humanos (Python, Java, C++).
- **Compilador / Intérprete:** Es el software encargado de traducir nuestro "código fuente" en inglés estructural, a los ceros y unos que el hardware de la roboRIO comprende.`,
    lessons: [
      {
        title: "¿Qué es Programar en Realidad?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es en esencia la programación de computadoras?",
            lessonText: "# El Modelo de la Caja Negra \n\nSi le preguntas a un extraño qué es programar, te dirá que es 'escribir código verde en una pantalla negra'. Pero en la ciencia de la computación, **programar es simplemente diseñar un algoritmo que transforma datos.**\n\nTodo programa en el universo, desde una calculadora hasta la Inteligencia Artificial de un Tesla, obedece al modelo fundamental **Input -> Proceso -> Output**.\n\n### 1. Input (Entrada)\nSon los datos que el sistema recibe del mundo exterior. En un robot, el Input proviene de los sensores (cámaras, ultrasonido) o del joystick del piloto.\n\n### 2. Proceso (Algoritmo)\nEs la **Caja Negra**. La computadora toma el Input y sigue una lista estricta de instrucciones lógicas y matemáticas para decidir qué hacer con él. **Aquí es donde tú, el programador, existes.** Tu trabajo es escribir esas reglas lógicas.\n\n### 3. Output (Salida)\nEs el resultado físico o digital de la decisión tomada en el proceso. En robótica, el Output es el voltaje enviado a los motores para moverse, o un mensaje de error impreso en la consola.\n\nProgramar no es memorizar palabras raras en inglés, es **tener la habilidad mental de dividir un problema gigante en pequeños pasos lógicos (Proceso) para convertir un Input en un Output.**",
            options: [
              { text: "Es el diseño de algoritmos para procesar una entrada de datos (Input) y generar un resultado útil (Output)", correct: true },
              { text: "Es la habilidad de escribir rápidamente comandos al azar hasta que el procesador arranque", correct: false },
              { text: "Es el proceso físico de ensamblar los componentes electrónicos en la placa madre", correct: false },
              { text: "Es la capacidad de la computadora de sentir emociones y tomar decisiones por intuición", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica qué rol cumple cada elemento en el modelo de un robot FRC:",
            options: [
              { text: "Cámara Vision detecta el objetivo a 3 metros|||Input (Entrada de datos)", correct: true },
              { text: "Código calcula la curva balística perfecta|||Proceso (Algoritmo)", correct: true },
              { text: "Motores giran a 4500 RPM para disparar|||Output (Salida física)", correct: true },
              { text: "El Programador|||Mente maestra que diseña el Proceso", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena lógicamente los pasos de un programa autónomo que frena al ver un obstáculo (Input -> Proceso -> Output):",
            options: [
              { text: "distancia = leerSensorUltrasonido()", correct: true, audioSrc: "1" },
              { text: "if (distancia < 20):", correct: true, audioSrc: "2" },
              { text: "    potencia = 0", correct: true, audioSrc: "3" },
              { text: "enviarPotenciaAMotores(potencia)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la línea para recolectar el Input del sensor antes de procesarlo:",
            codeSnippet: "_____ = obtenerDistanciaUltrasonido()\nif (distancia < 10):\n    frenar()",
            options: [
              { text: "distancia", correct: true },
              { text: "frenar", correct: false },
              { text: "Output", correct: false },
              { text: "motor", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Imagina que el sensor lee correctamente que el obstáculo está a 5 cm (Input), pero el robot acelera en lugar de frenar y choca (Output erróneo). ¿Dónde está la falla el 99.9% de las veces?",
            options: [
              { text: "En el Proceso: El algoritmo o lógica matemática escrita por el programador está mal estructurada", correct: true },
              { text: "En el Input: Los sensores de la vida real mienten a propósito", correct: false },
              { text: "En el Output: Los motores decidieron rebelarse contra los humanos", correct: false },
              { text: "En la suerte: La programación es puramente impredecible", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Lee el siguiente algoritmo (Proceso). Si el Input es 100, ¿cuál será el Output impreso?",
            codeSnippet: "inputBateria = 100\n\nif (inputBateria > 20):\n    print('Voltaje Óptimo')\nelse:\n    print('Cambiar Batería')",
            options: [
              { text: "Voltaje Óptimo", correct: true },
              { text: "Cambiar Batería", correct: false },
              { text: "100", correct: false },
              { text: "Error de Sintaxis", correct: false }
            ]
          }
        ]
      },
      {
        title: "Precisión Literal vs Intuición Humana",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué decimos que una computadora carece de intuición y es 100% literal?",
            lessonText: "# La Tiranía de la Precisión Literal\n\nSi le dices a un compañero de equipo en el taller: *'Pásame la llave que está sobre la mesa'*, su cerebro humano deduce inmediatamente el contexto: sabe qué mesa es, busca una herramienta de metal y no atraviesa una pared para buscarla. Los humanos nos comunicamos asumiendo contexto e intenciones.\n\n**Las computadoras carecen por completo de intuición.**\n\nUna computadora es un motor determinista: ejecuta única, exclusiva y ciegamente lo que tú escribes, no lo que *quisiste* escribir.\n\n### El Experimento de la Mantequilla de Maní (o la Rutina Autónoma)\nEn ciencias de la computación existe un experimento clásico: pedirle a alguien que actúe como una computadora y siga las instrucciones para hacer un sándwich de mantequilla de maní. Si la instrucción dice *'Pon la mantequilla sobre el pan'*, la computadora tomará el frasco de vidrio cerrado y lo aplastará contra la bolsa plástica de pan. La máquina no sabe que el frasco debe abrirse primero ni que el pan debe sacarse de la bolsa, porque **nadie se lo indicó explícitamente**.\n\nEn robótica FRC ocurre lo mismo: si en la rutina autónoma ordenas `dispararNota()` antes de que el motor del lanzador alcance las 5,000 RPM, la máquina disparará en frío y la pieza caerá al suelo. La máquina jamás dirá: *'Espera, el motor aún está detenido, voy a esperar'*. Ejecuta la orden en el milisegundo exacto en que fue convocada.\n\n### Dos Tipos de Consecuencias Literales:\n1. **Error de Sintaxis (Syntax Error):** Violas las reglas ortográficas o gramaticales del lenguaje (por ejemplo, escribir `Print` con mayúscula en vez de `print`, o olvidar un paréntesis). El compilador detiene todo de inmediato porque no sabe qué significa esa palabra desconocida.\n2. **Error de Lógica (Bug Semántico):** Tu código corre sin marcar errores rojos, pero hace un cálculo equivocado o invierte la dirección de los motores. Para la computadora la instrucción fue perfecta, pero para ti el resultado es catastrófico.\n\n**La Regla de Oro del Programador:**\nLa computadora nunca se equivoca al ejecutar; la computadora hace exactamente lo que le ordenaste.",
            options: [
              { text: "Porque es un sistema determinista sin sentido común: ejecuta ciegamente las instrucciones exactas que recibe, sin deducir intenciones ni tolerar ambigüedades", correct: true },
              { text: "Porque los procesadores modernos cuentan con un módulo de inteligencia que rechaza instrucciones si el programador escribe lento", correct: false },
              { text: "Porque el hardware borra las instrucciones si la sintaxis contiene palabras en minúsculas", correct: false },
              { text: "Porque las computadoras deducen la intención del programador únicamente cuando se reinicia el sistema operativo", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cómo reacciona una computadora ante cada situación técnica:",
            options: [
              { text: "Escribir 'imprimir' en vez de 'print'|||Error de Sintaxis (Gramática rechazada)", correct: true },
              { text: "Girar el motor al 100% hacia atrás en vez de hacia adelante|||Error de Lógica (Instrucción válida pero resultado erróneo)", correct: true },
              { text: "Asumir que la máquina sabe cuándo frenar sin decírselo|||Falsa Intuición (La máquina continuará hasta estrellarse)", correct: true },
              { text: "Mismo código ejecutado 1,000 veces con idéntico resultado|||Determinismo (Comportamiento predecible y matemático)", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Un brazo robótico debe recoger una pieza del suelo sin romperla. Ordena la secuencia estricta que la máquina debe seguir:",
            options: [
              { text: "abrirPinza()", correct: true, audioSrc: "1" },
              { text: "bajarBrazoAPosicionSuelo()", correct: true, audioSrc: "2" },
              { text: "cerrarPinzaSobrePieza()", correct: true, audioSrc: "3" },
              { text: "subirBrazoAPosicionTransporte()", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Los lenguajes de programación son estrictos con mayúsculas y minúsculas (Case Sensitivity). Completa la llamada exacta a la función ya definida:",
            codeSnippet: "def activarCompresor():\n    presion = 120\n    return presion\n\n# Llamada exacta sin violar la precisión del nombre:\nestado = _____()",
            options: [
              { text: "activarCompresor", correct: true },
              { text: "ActivarCompresor", correct: false },
              { text: "activar_compresor", correct: false },
              { text: "activarcompresor", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Un programador escribe un algoritmo para que el robot avance 3 metros, pero en la cancha avanza 30 metros y choca. La consola no arrojó ningún error rojo (Syntax Error). ¿Qué ocurrió técnicamente?",
            options: [
              { text: "Un Error de Lógica: La sintaxis fue correcta, por lo que la computadora obedeció ciegamente la instrucción matemática equivocada del programador", correct: true },
              { text: "Un Error de Sintaxis: El procesador no reconoció la unidad de metros y multiplicó la distancia por diez de forma aleatoria", correct: false },
              { text: "Fallo de intuición de la máquina: El robot vio que había espacio libre en la cancha y decidió explorar por iniciativa propia", correct: false },
              { text: "El compilador tradujo mal el código deliberadamente porque la computadora se sobrecalentó", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "La computadora ejecuta las instrucciones estrictamente en orden secuencial, paso a paso. ¿Cuál será el Output impreso en la consola?",
            codeSnippet: "velocidad = 0\nvelocidad = velocidad + 50\nvelocidad = 10\nprint(velocidad)",
            options: [
              { text: "10", correct: true },
              { text: "50", correct: false },
              { text: "60", correct: false },
              { text: "0", correct: false }
            ]
          }
        ]
      },
      {
        title: "Traduciendo a Ceros y Unos: Hardware y Binario",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué los procesadores solo comprenden ceros y unos en su nivel fundamental?",
            lessonText: "# El Abismo entre el Humano y el Silicio\n\nEn el mundo físico, el microprocesador de una computadora o de la roboRIO no sabe qué es una letra, una palabra o una instrucción en inglés. Lo único que existe dentro de un chip de silicio son miles de millones de interruptores microscópicos llamados **transistores**.\n\n### Niveles de Voltaje Físico\nUn transistor solo puede encontrarse en dos estados electrónicos:\n- **Conduciendo corriente (Alto Voltaje, ej. 3.3V o 5V):** Lo representamos matemáticamente como **1**.\n- **Bloqueando corriente (Bajo Voltaje, ej. 0V):** Lo representamos matemáticamente como **0**.\n\nA cada uno de estos dígitos binarios se le llama **Bit** (*Binary Digit*). Todo lo que ves en una pantalla, desde un número hasta un modelo de visión artificial, es una combinación gigantesca de bits.\n\n### La Pirámide de Abstracción\nComo sería imposible para un ser humano programar una rutina autónoma escribiendo a mano diez millones de unos y ceros, la ciencia de la computación creó niveles de abstracción:\n1. **Lenguajes de Alto Nivel (Python, Java, C++):** Usan vocabulario estructurado en inglés comprensible para humanos (`if`, `while`, `motor.set`).\n2. **El Compilador o Intérprete:** Un software traductor que analiza nuestro código fuente y lo traduce a código máquina binario.\n3. **Hardware (CPU):** Ejecuta físicamente los pulsos de voltaje a la velocidad de su reloj interno.\n\n**La Regla de Oro:**\nEl hardware no entiende intenciones ni sintaxis humana; solo conmuta interruptores eléctricos guiado por el código máquina generado por el compilador.",
            options: [
              { text: "Porque el procesador está compuesto por transistores microscópicos que solo operan con dos estados físicos de voltaje: encendido (1) y apagado (0)", correct: true },
              { text: "Porque los primeros programadores decidieron usar ceros y unos para ahorrar espacio en las pantallas de fósforo verde", correct: false },
              { text: "Porque la memoria RAM destruye cualquier dato que contenga números del 2 al 9 antes de llegar a la CPU", correct: false },
              { text: "Porque el sistema binario es exclusivo de los motores de robótica y no se utiliza en computadoras convencionales", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada eslabón de la cadena de traducción informática con su función técnica:",
            options: [
              { text: "Código Fuente|||Texto legible escrito por el programador en un lenguaje estructurado", correct: true },
              { text: "Compilador o Intérprete|||Software traductor que convierte el código legible en instrucciones binarias", correct: true },
              { text: "Código Máquina|||Secuencia de bits (1s y 0s) que la CPU ejecuta directamente", correct: true },
              { text: "Transistor|||Interruptor físico microscópico que conmuta entre alto y bajo voltaje", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el ciclo de vida por el que pasa una orden desde que el programador la escribe hasta que el robot se mueve:",
            options: [
              { text: "El programador escribe la instrucción en código fuente legible", correct: true, audioSrc: "1" },
              { text: "El compilador analiza la sintaxis y traduce a código máquina", correct: true, audioSrc: "2" },
              { text: "La CPU procesa las secuencias de pulsos binarios (1s y 0s)", correct: true, audioSrc: "3" },
              { text: "El controlador de motores recibe la señal y entrega potencia física", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la etapa donde el software traductor procesa el código fuente antes de que el hardware lo ejecute:",
            codeSnippet: "codigoFuente = \"motor.setPower(0.8)\"\ncodigoBinario = _____ (codigoFuente)\ncpu.ejecutarEnHardware(codigoBinario)",
            options: [
              { text: "compilar", correct: true },
              { text: "adivinar", correct: false },
              { text: "ignorar", correct: false },
              { text: "conectar", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si una computadora solo ejecuta ceros y unos en sus circuitos, ¿por qué no programamos los robots escribiendo binario directamente?",
            options: [
              { text: "Porque la complejidad y tasa de error humano escribiendo millones de bits sería insostenible; los lenguajes de alto nivel nos permiten razonar con abstracciones humanas", correct: true },
              { text: "Porque los sistemas operativos modernos tienen bloqueada la entrada manual de números binarios por motivos de seguridad", correct: false },
              { text: "Porque el código binario es más lento de procesar para la computadora que un archivo de texto en Java", correct: false },
              { text: "Porque se requieren teclados especiales con solo dos teclas físicas que ya no se fabrican comercialmente", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "El compilador evalúa la validez de cada línea antes de generar código binario. ¿Cuál será el resultado impreso?",
            codeSnippet: "linea1_valida = True\nlinea2_valida = False\n\nif (linea1_valida and linea2_valida):\n    estado = 'Compilacion Exitosa: Generando Binario'\nelse:\n    estado = 'Error de Compilacion: Ejecucion Detenida'\n\nprint(estado)",
            options: [
              { text: "Error de Compilacion: Ejecucion Detenida", correct: true },
              { text: "Compilacion Exitosa: Generando Binario", correct: false },
              { text: "linea2_valida", correct: false },
              { text: "True", correct: false }
            ]
          }
        ]
      },
      {
        title: "Desafío de Integración: El Ciclo del Software",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se integran la entrada, el algoritmo y la traducción en una arquitectura real de software?",
            lessonText: "# El Ciclo Periódico del Software\n\nUn programa de software en un robot o sistema autónomo no es un texto estático: es un **ciclo de control continuo** que se repite decenas de veces por segundo (típicamente a 50 Hz, o cada 20 milisegundos).\n\nEn cada ciclo periódico ocurren tres pasos sincronizados:\n1. **Lectura de Entrada (Input):** Sensores, cámaras y mandos del piloto inyectan mediciones frescas en la memoria RAM.\n2. **Ejecución Lógica (Proceso):** El código máquina (previamente traducido por el compilador) procesa esas entradas aplicando reglas matemáticas deterministas y sin ambigüedad.\n3. **Emisión de Salida (Output):** La computadora despacha señales a actuadores, motores o pantallas de diagnóstico.\n\n### La Diferencia Crítica entre Sintaxis y Lógica\n- Un **Error de Sintaxis** impide que el compilador cree el código binario. El programa jamás arranca, protegiendo al robot de actuar a ciegas.\n- Un **Error de Lógica** sí compila y sí genera binario. El hardware lo ejecutará ciegamente a máxima velocidad, lo que en robótica puede traducirse en una colisión o en un mecanismo roto.\n\n**La Regla de Oro:**\nEl software de calidad es aquel que no solo compila sin errores de sintaxis, sino cuya lógica contempla todos los casos extremos antes de enviar potencia al hardware.",
            options: [
              { text: "Mediante un ciclo periódico determinista que lee entradas (Input), ejecuta la lógica compilada (Proceso) y despacha órdenes físicas (Output) múltiples veces por segundo", correct: true },
              { text: "Mediante una conexión directa entre los cables de la batería y los sensores sin pasar por el procesador", correct: false },
              { text: "Reiniciando el sistema operativo cada vez que el robot debe tomar una decisión nueva en la cancha", correct: false },
              { text: "Permitiendo que cada motor decida su propia velocidad independientemente del código central", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica en qué fase del ciclo de software se origina cada problema técnico:",
            options: [
              { text: "Olvidar cerrar un paréntesis en una instrucción|||Fallo de Sintaxis (Bloqueado por el compilador antes de correr)", correct: true },
              { text: "Lente de la cámara de visión cubierto por polvo|||Fallo de Input (Datos corruptos del mundo exterior)", correct: true },
              { text: "Calcular la velocidad dividiendo entre cero|||Fallo de Lógica (Colapso durante el Proceso de ejecución)", correct: true },
              { text: "Cable de alimentación del motor desconectado|||Fallo de Output (La orden lógica no llega al actuador físico)", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina de seguridad que un sistema autónomo debe ejecutar en cada ciclo periódico:",
            options: [
              { text: "voltajeActual = leerVoltajeBateria()", correct: true, audioSrc: "1" },
              { text: "if (voltajeActual < 11.0):", correct: true, audioSrc: "2" },
              { text: "    desactivarMecanismosDeAltoConsumo()", correct: true, audioSrc: "3" },
              { text: "enviarTelemetriaAConsola(voltajeActual)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la instrucción para emitir un mensaje de diagnóstico por el canal de salida estándar (consola):",
            codeSnippet: "temperaturaMotor = 85\n\nif (temperaturaMotor > 80):\n    _____('[ALERTA] Temperatura critica en motor')",
            options: [
              { text: "print", correct: true },
              { text: "Print", correct: false },
              { text: "input", correct: false },
              { text: "sensor", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué un error de lógica es sustancialmente más peligroso en robótica que un error de sintaxis?",
            options: [
              { text: "Porque el error de sintaxis es detectado y bloqueado por el compilador antes de ejecutar, mientras que el de lógica corre en hardware real y puede provocar colisiones o daños mecánicos", correct: true },
              { text: "Porque los errores de lógica provocan un cortocircuito inmediato en las celdas químicas de la batería", correct: false },
              { text: "Porque los errores de sintaxis borran permanentemente el disco de almacenamiento del robot", correct: false },
              { text: "Porque los errores de lógica solo ocurren cuando el robot pierde la conexión inalámbrica de radio", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la ejecución secuencial del acumulador de errores de diagnóstico. ¿Cuál es el valor final de 'fallasDetectadas'?",
            codeSnippet: "fallasDetectadas = 0\nsensorVision_ok = True\nsensorPresion_ok = False\n\nif not sensorVision_ok:\n    fallasDetectadas = fallasDetectadas + 1\n\nif not sensorPresion_ok:\n    fallasDetectadas = fallasDetectadas + 1\n\nprint(fallasDetectadas)",
            options: [
              { text: "1", correct: true },
              { text: "2", correct: false },
              { text: "0", correct: false },
              { text: "False", correct: false }
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
            lessonText: "# La Receta del Éxito \n\n¿Alguna vez has seguido una receta para hornear un pastel? Sigues una lista de pasos finitos:\n1. Medir harina\n2. Mezclar huevos\n3. Precalentar horno a 180°C\n4. Hornear por 25 minutos\n\nEso es un **algoritmo**. En programación y robótica, un algoritmo debe cumplir 3 propiedades sagradas:\n- **Finito:** Debe terminar en algún momento.\n- **Definido:** Cada vez que le des los mismos datos, debe producir el mismo resultado.\n- **Preciso:** No puede haber ambigüedad ni pasos vagos como 'hazlo bien'.",
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
            lessonText: "# El Ciclo IPO (Input -> Process -> Output) \n\nTodo programa o robot en el universo opera bajo este ciclo continuo:\n\n1. **INPUT (Entrada):** Información que entra al sistema. En un robot, son los joysticks del piloto o los sensores (cámara Limelight, encoder de ruedas, giroscopio).\n2. **PROCESS (Procesamiento):** Las operaciones matemáticas y decisiones lógicas que ejecuta el microprocesador.\n3. **OUTPUT (Salida):** La respuesta al exterior. Motores girando, un pistón neumático abriéndose, luces LED cambiando a color amarillo o telemetría en la pantalla.",
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
            lessonText: "# Pensar Antes de Escribir ️\n\nEl **pseudocódigo** es una descripción de alto nivel de un algoritmo que combina lenguaje natural con estructuras de programación.\n\nNo le importa si olvidas un punto y coma o si usas mayúsculas: su objetivo es que el **equipo de ingeniería se ponga de acuerdo en la lógica** antes de pasar horas depurando en Java o C++.\n\nEjemplo de pseudocódigo en Nautilus:\n```text\nSI botónDisparar está presionado ENTONCES:\n    acelerarFlywheel()\n    esperar 1 segundo\n    alimentarNota()\nSINO:\n    apagarFlywheel()\n```",
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
            lessonText: "# Mapas Visuales de Decisiones ️\n\nUn **diagrama de flujo** representa visualmente un algoritmo usando símbolos estándar:\n- **Óvalo:** Inicio o Fin del programa.\n- **Rectángulo:** Una acción o proceso (ej: `avanzar 2 metros`).\n- **Rombo:** Una decisión con dos salidas: `SÍ` o `NO` (ej: `¿hay obstáculo?`).\n- **Flechas:** Indican la dirección del flujo de ejecución.\n\nVer el flujo con tus propios ojos te ayuda a descubrir de inmediato caminos sin salida o bucles infinitos no deseados.",
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
            lessonText: "# El Periodo Autónomo ️\n\nEn cada match de FRC, los primeros 15 segundos son **100% autónomos**.\n\nNingún humano puede tocar los joysticks. El robot depende enteramente del **algoritmo preprogramado** en su memoria:\n1. Salir de la zona de inicio.\n2. Localizar la pieza con visión artificial.\n3. Recogerla con el intake.\n4. Apuntar y anotar puntos.\n\nSi el algoritmo es defectuoso, el robot puede chocar contra la pared o desperdiciar valiosos segundos de juego.",
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
            lessonText: "# El Hilo de la Secuencia \n\nImagina que estás leyendo un libro: lees la primera palabra, luego la segunda, completas el renglón y bajas al siguiente.\n\nUna computadora hace exactamente lo mismo con un script de código:\n```python\n# Línea 1\nprint('Iniciando sistemas')\n# Línea 2\nprint('Comprobando sensores')\n# Línea 3\nprint('Robot habilitado')\n```\n\nJamás se ejecutará la línea 3 antes que la línea 1 a menos que usemos estructuras especiales de control de flujo. La ejecución es **secuencial y determinista**.",
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
            lessonText: "# Las Matemáticas de la Secuencia \n\nAnaliza estos dos programas. Parecen iguales, pero no lo son:\n\n**Programa A:**\n```python\nvalor = 10\nvalor = valor + 5  # Ahora valor es 15\nvalor = valor * 2  # 15 * 2 = 30\nprint(valor)       # Imprime 30\n```\n\n**Programa B (Invertido):**\n```python\nvalor = 10\nvalor = valor * 2  # Ahora valor es 20\nvalor = valor + 5  # 20 + 5 = 25\nprint(valor)       # Imprime 25\n```\n\n¡Las mismas operaciones en diferente orden dan resultados totalmente distintos!",
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
            lessonText: "# El Superpoder de Rastrear Código ️‍️\n\nEl **Tracing** (rastreo manual de código) es la habilidad de convertirte en el procesador.\n\nTomas una libreta y una pluma, y anotas:\n- ¿En qué línea estoy?\n- ¿Qué variables existen en este instante?\n- ¿Qué valores tienen adentro?\n\nLos mejores programadores del mundo no son los que escriben más rápido, sino los que pueden ejecutar el código en su cabeza paso a paso antes de correrlo.",
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
            lessonText: "# Código en el Mundo Físico \n\nEn un videojuego, si un personaje intenta saltar antes de tocar el suelo, solo se ve extraño en pantalla.\n\nEn un robot de 55 kg en FIRST Robotics:\n1. Si ordenas `moverBrazoAlMaximo()` **antes** de `calibrarSensorDeLimite()`...\n2. El motor empujará el brazo contra la estructura de metal con toda su fuerza.\n3. El engrane se barrerá y el motor Neo o Falcon se quemará.\n\n**El orden de las instrucciones en robótica protege la integridad física de las personas y de la máquina.**",
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
            lessonText: "# El Checklist de Inicio de Teus \n\nAntes de cada match oficial de FIRST, el equipo de drive team sigue un protocolo estricto de software en la Driver Station.\n\nEn este reto final de la Unidad 3, vas a ensamblar y verificar la secuencia de encendido y telemetría de Nautilus 4010.\n\n¡La secuencia correcta garantiza que el robot salga a la arena a ganar!",
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
