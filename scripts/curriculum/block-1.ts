import { UnitDefinition } from "./types";

export const block1Units: UnitDefinition[] = [
  {
    "order": 1,
    "slug": "unit-1",
    "title": "What is Programming?",
    "description": "Input, Proceso, Output y el lenguaje de las máquinas",
    "guidebookText": "# Guía de Estudio: Unit 1 - What is Programming?\n\n¡Bienvenido a **Nauticode** de **Nautilus 4010**!\n\nProgramar **no** es magia ni adivinación; es la ciencia de diseñar algoritmos que convierten datos de entrada en datos de salida, y luego traducirlos a un idioma que la máquina pueda ejecutar.\n\n### Conceptos Clave (Basado en CS50):\n- **Input -> Caja Negra (Proceso) -> Output:** Una computadora solo toma información, la procesa siguiendo reglas matemáticas o lógicas, y genera un resultado.\n- **Hardware y Ceros/Unos:** El procesador está lleno de transistores microscópicos que actúan como interruptores (ON/OFF). Todo lo que la computadora entiende se reduce a impulsos eléctricos: **1 (Alto Voltaje)** y **0 (Bajo Voltaje)**.\n- **Precisión vs Intuición:** A diferencia de un humano que deduce intenciones, una computadora ejecuta instrucciones **literales**. Si falta un paréntesis, no adivina qué quisiste decir; el programa colapsa.\n- **Lenguajes de Alto Nivel:** Como no podemos programar eficientemente escribiendo millones de ceros y unos, usamos lenguajes legibles para humanos (Python, Java, C++).\n- **Compilador / Intérprete:** Es el software encargado de traducir nuestro \"código fuente\" en inglés estructural, a los ceros y unos que el hardware de la roboRIO comprende.",
    "lessons": [
      {
        "title": "¿Qué es Programar en Realidad?",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Qué es en esencia la programación de computadoras?",
            "lessonText": "# El Modelo de la Caja Negra \n\nSi le preguntas a un extraño qué es programar, te dirá que es 'escribir código verde en una pantalla negra'. Pero en la ciencia de la computación, **programar es simplemente diseñar un algoritmo que transforma datos.**\n\nTodo programa en el universo, desde una calculadora hasta la Inteligencia Artificial de un Tesla, obedece al modelo fundamental **Input -> Proceso -> Output**.\n\n### 1. Input (Entrada)\nSon los datos que el sistema recibe del mundo exterior. En un robot, el Input proviene de los sensores (cámaras, ultrasonido) o del joystick del piloto.\n\n### 2. Proceso (Algoritmo)\nEs la **Caja Negra**. La computadora toma el Input y sigue una lista estricta de instrucciones lógicas y matemáticas para decidir qué hacer con él. **Aquí es donde tú, el programador, existes.** Tu trabajo es escribir esas reglas lógicas.\n\n### 3. Output (Salida)\nEs el resultado físico o digital de la decisión tomada en el proceso. En robótica, el Output es el voltaje enviado a los motores para moverse, o un mensaje de error impreso en la consola.\n\nProgramar no es memorizar palabras raras en inglés, es **tener la habilidad mental de dividir un problema gigante en pequeños pasos lógicos (Proceso) para convertir un Input en un Output.**",
            "options": [
              {
                "text": "Es el diseño de algoritmos para procesar una entrada de datos (Input) y generar un resultado útil (Output)",
                "correct": true
              },
              {
                "text": "Es la habilidad de escribir rápidamente comandos al azar hasta que el procesador arranque",
                "correct": false
              },
              {
                "text": "Es el proceso físico de ensamblar los componentes electrónicos en la placa madre",
                "correct": false
              },
              {
                "text": "Es la capacidad de la computadora de sentir emociones y tomar decisiones por intuición",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Identifica qué rol cumple cada elemento en el modelo de un robot FRC:",
            "options": [
              {
                "text": "Cámara Vision detecta el objetivo a 3 metros|||Input (Entrada de datos)",
                "correct": true
              },
              {
                "text": "Código calcula la curva balística perfecta|||Proceso (Algoritmo)",
                "correct": true
              },
              {
                "text": "Motores giran a 4500 RPM para disparar|||Output (Salida física)",
                "correct": true
              },
              {
                "text": "El Programador|||Mente maestra que diseña el Proceso",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena lógicamente los pasos de un programa autónomo que frena al ver un obstáculo (Input -> Proceso -> Output):",
            "options": [
              {
                "text": "distancia = leerSensorUltrasonido()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "if (distancia < 20):",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "    potencia = 0",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "enviarPotenciaAMotores(potencia)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la línea para recolectar el Input del sensor antes de procesarlo:",
            "codeSnippet": "_____ = obtenerDistanciaUltrasonido()\nif (distancia < 10):\n    frenar()",
            "options": [
              {
                "text": "distancia",
                "correct": true
              },
              {
                "text": "frenar",
                "correct": false
              },
              {
                "text": "Output",
                "correct": false
              },
              {
                "text": "motor",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Imagina que el sensor lee correctamente que el obstáculo está a 5 cm (Input), pero el robot acelera en lugar de frenar y choca (Output erróneo). ¿Dónde está la falla el 99.9% de las veces?",
            "options": [
              {
                "text": "En el Proceso: El algoritmo o lógica matemática escrita por el programador está mal estructurada",
                "correct": true
              },
              {
                "text": "En el Input: Los sensores de la vida real mienten a propósito",
                "correct": false
              },
              {
                "text": "En el Output: Los motores decidieron rebelarse contra los humanos",
                "correct": false
              },
              {
                "text": "En la suerte: La programación es puramente impredecible",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Lee el siguiente algoritmo (Proceso). Si el Input es 100, ¿cuál será el Output impreso?",
            "codeSnippet": "inputBateria = 100\n\nif (inputBateria > 20):\n    print('Voltaje Óptimo')\nelse:\n    print('Cambiar Batería')",
            "options": [
              {
                "text": "Voltaje Óptimo",
                "correct": true
              },
              {
                "text": "Cambiar Batería",
                "correct": false
              },
              {
                "text": "100",
                "correct": false
              },
              {
                "text": "Error de Sintaxis",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Precisión Literal vs Intuición Humana",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué decimos que una computadora carece de intuición y es 100% literal?",
            "lessonText": "# La Tiranía de la Precisión Literal\n\nSi le dices a un compañero de equipo en el taller: *'Pásame la llave que está sobre la mesa'*, su cerebro humano deduce inmediatamente el contexto: sabe qué mesa es, busca una herramienta de metal y no atraviesa una pared para buscarla. Los humanos nos comunicamos asumiendo contexto e intenciones.\n\n**Las computadoras carecen por completo de intuición.**\n\nUna computadora es un motor determinista: ejecuta única, exclusiva y ciegamente lo que tú escribes, no lo que *quisiste* escribir.\n\n### El Experimento de la Mantequilla de Maní (o la Rutina Autónoma)\nEn ciencias de la computación existe un experimento clásico: pedirle a alguien que actúe como una computadora y siga las instrucciones para hacer un sándwich de mantequilla de maní. Si la instrucción dice *'Pon la mantequilla sobre el pan'*, la computadora tomará el frasco de vidrio cerrado y lo aplastará contra la bolsa plástica de pan. La máquina no sabe que el frasco debe abrirse primero ni que el pan debe sacarse de la bolsa, porque **nadie se lo indicó explícitamente**.\n\nEn robótica FRC ocurre lo mismo: si en la rutina autónoma ordenas `dispararNota()` antes de que el motor del lanzador alcance las 5,000 RPM, la máquina disparará en frío y la pieza caerá al suelo. La máquina jamás dirá: *'Espera, el motor aún está detenido, voy a esperar'*. Ejecuta la orden en el milisegundo exacto en que fue convocada.\n\n### Dos Tipos de Consecuencias Literales:\n1. **Error de Sintaxis (Syntax Error):** Violas las reglas ortográficas o gramaticales del lenguaje (por ejemplo, escribir `Print` con mayúscula en vez de `print`, o olvidar un paréntesis). El compilador detiene todo de inmediato porque no sabe qué significa esa palabra desconocida.\n2. **Error de Lógica (Bug Semántico):** Tu código corre sin marcar errores rojos, pero hace un cálculo equivocado o invierte la dirección de los motores. Para la computadora la instrucción fue perfecta, pero para ti el resultado es catastrófico.\n\n**La Regla de Oro del Programador:**\nLa computadora nunca se equivoca al ejecutar; la computadora hace exactamente lo que le ordenaste.",
            "options": [
              {
                "text": "Porque es un sistema determinista sin sentido común: ejecuta ciegamente las instrucciones exactas que recibe, sin deducir intenciones ni tolerar ambigüedades",
                "correct": true
              },
              {
                "text": "Porque los procesadores modernos cuentan con un módulo de inteligencia que rechaza instrucciones si el programador escribe lento",
                "correct": false
              },
              {
                "text": "Porque el hardware borra las instrucciones si la sintaxis contiene palabras en minúsculas",
                "correct": false
              },
              {
                "text": "Porque las computadoras deducen la intención del programador únicamente cuando se reinicia el sistema operativo",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Clasifica cómo reacciona una computadora ante cada situación técnica:",
            "options": [
              {
                "text": "Escribir 'imprimir' en vez de 'print'|||Error de Sintaxis (Gramática rechazada)",
                "correct": true
              },
              {
                "text": "Girar el motor al 100% hacia atrás en vez de hacia adelante|||Error de Lógica (Instrucción válida pero resultado erróneo)",
                "correct": true
              },
              {
                "text": "Asumir que la máquina sabe cuándo frenar sin decírselo|||Falsa Intuición (La máquina continuará hasta estrellarse)",
                "correct": true
              },
              {
                "text": "Mismo código ejecutado 1,000 veces con idéntico resultado|||Determinismo (Comportamiento predecible y matemático)",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Un brazo robótico debe recoger una pieza del suelo sin romperla. Ordena la secuencia estricta que la máquina debe seguir:",
            "options": [
              {
                "text": "abrirPinza()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "bajarBrazoAPosicionSuelo()",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "cerrarPinzaSobrePieza()",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "subirBrazoAPosicionTransporte()",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Los lenguajes de programación son estrictos con mayúsculas y minúsculas (Case Sensitivity). Completa la llamada exacta a la función ya definida:",
            "codeSnippet": "def activarCompresor():\n    presion = 120\n    return presion\n\n# Llamada exacta sin violar la precisión del nombre:\nestado = _____()",
            "options": [
              {
                "text": "activarCompresor",
                "correct": true
              },
              {
                "text": "ActivarCompresor",
                "correct": false
              },
              {
                "text": "activar_compresor",
                "correct": false
              },
              {
                "text": "activarcompresor",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Un programador escribe un algoritmo para que el robot avance 3 metros, pero en la cancha avanza 30 metros y choca. La consola no arrojó ningún error rojo (Syntax Error). ¿Qué ocurrió técnicamente?",
            "options": [
              {
                "text": "Un Error de Lógica: La sintaxis fue correcta, por lo que la computadora obedeció ciegamente la instrucción matemática equivocada del programador",
                "correct": true
              },
              {
                "text": "Un Error de Sintaxis: El procesador no reconoció la unidad de metros y multiplicó la distancia por diez de forma aleatoria",
                "correct": false
              },
              {
                "text": "Fallo de intuición de la máquina: El robot vio que había espacio libre en la cancha y decidió explorar por iniciativa propia",
                "correct": false
              },
              {
                "text": "El compilador tradujo mal el código deliberadamente porque la computadora se sobrecalentó",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "La computadora ejecuta las instrucciones estrictamente en orden secuencial, paso a paso. ¿Cuál será el Output impreso en la consola?",
            "codeSnippet": "velocidad = 0\nvelocidad = velocidad + 50\nvelocidad = 10\nprint(velocidad)",
            "options": [
              {
                "text": "10",
                "correct": true
              },
              {
                "text": "50",
                "correct": false
              },
              {
                "text": "60",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Traduciendo a Ceros y Unos: Hardware y Binario",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué los procesadores solo comprenden ceros y unos en su nivel fundamental?",
            "lessonText": "# El Abismo entre el Humano y el Silicio\n\nEn el mundo físico, el microprocesador de una computadora o de la roboRIO no sabe qué es una letra, una palabra o una instrucción en inglés. Lo único que existe dentro de un chip de silicio son miles de millones de interruptores microscópicos llamados **transistores**.\n\n### Niveles de Voltaje Físico\nUn transistor solo puede encontrarse en dos estados electrónicos:\n- **Conduciendo corriente (Alto Voltaje, ej. 3.3V o 5V):** Lo representamos matemáticamente como **1**.\n- **Bloqueando corriente (Bajo Voltaje, ej. 0V):** Lo representamos matemáticamente como **0**.\n\nA cada uno de estos dígitos binarios se le llama **Bit** (*Binary Digit*). Todo lo que ves en una pantalla, desde un número hasta un modelo de visión artificial, es una combinación gigantesca de bits.\n\n### La Pirámide de Abstracción\nComo sería imposible para un ser humano programar una rutina autónoma escribiendo a mano diez millones de unos y ceros, la ciencia de la computación creó niveles de abstracción:\n1. **Lenguajes de Alto Nivel (Python, Java, C++):** Usan vocabulario estructurado en inglés comprensible para humanos (`if`, `while`, `motor.set`).\n2. **El Compilador o Intérprete:** Un software traductor que analiza nuestro código fuente y lo traduce a código máquina binario.\n3. **Hardware (CPU):** Ejecuta físicamente los pulsos de voltaje a la velocidad de su reloj interno.\n\n**La Regla de Oro:**\nEl hardware no entiende intenciones ni sintaxis humana; solo conmuta interruptores eléctricos guiado por el código máquina generado por el compilador.",
            "options": [
              {
                "text": "Porque el procesador está compuesto por transistores microscópicos que solo operan con dos estados físicos de voltaje: encendido (1) y apagado (0)",
                "correct": true
              },
              {
                "text": "Porque los primeros programadores decidieron usar ceros y unos para ahorrar espacio en las pantallas de fósforo verde",
                "correct": false
              },
              {
                "text": "Porque la memoria RAM destruye cualquier dato que contenga números del 2 al 9 antes de llegar a la CPU",
                "correct": false
              },
              {
                "text": "Porque el sistema binario es exclusivo de los motores de robótica y no se utiliza en computadoras convencionales",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada eslabón de la cadena de traducción informática con su función técnica:",
            "options": [
              {
                "text": "Código Fuente|||Texto legible escrito por el programador en un lenguaje estructurado",
                "correct": true
              },
              {
                "text": "Compilador o Intérprete|||Software traductor que convierte el código legible en instrucciones binarias",
                "correct": true
              },
              {
                "text": "Código Máquina|||Secuencia de bits (1s y 0s) que la CPU ejecuta directamente",
                "correct": true
              },
              {
                "text": "Transistor|||Interruptor físico microscópico que conmuta entre alto y bajo voltaje",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena el ciclo de vida por el que pasa una orden desde que el programador la escribe hasta que el robot se mueve:",
            "options": [
              {
                "text": "El programador escribe la instrucción en código fuente legible",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "El compilador analiza la sintaxis y traduce a código máquina",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "La CPU procesa las secuencias de pulsos binarios (1s y 0s)",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "El controlador de motores recibe la señal y entrega potencia física",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la etapa donde el software traductor procesa el código fuente antes de que el hardware lo ejecute:",
            "codeSnippet": "codigoFuente = \"motor.setPower(0.8)\"\ncodigoBinario = _____ (codigoFuente)\ncpu.ejecutarEnHardware(codigoBinario)",
            "options": [
              {
                "text": "compilar",
                "correct": true
              },
              {
                "text": "adivinar",
                "correct": false
              },
              {
                "text": "ignorar",
                "correct": false
              },
              {
                "text": "conectar",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Si una computadora solo ejecuta ceros y unos en sus circuitos, ¿por qué no programamos los robots escribiendo binario directamente?",
            "options": [
              {
                "text": "Porque la complejidad y tasa de error humano escribiendo millones de bits sería insostenible; los lenguajes de alto nivel nos permiten razonar con abstracciones humanas",
                "correct": true
              },
              {
                "text": "Porque los sistemas operativos modernos tienen bloqueada la entrada manual de números binarios por motivos de seguridad",
                "correct": false
              },
              {
                "text": "Porque el código binario es más lento de procesar para la computadora que un archivo de texto en Java",
                "correct": false
              },
              {
                "text": "Porque se requieren teclados especiales con solo dos teclas físicas que ya no se fabrican comercialmente",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "El compilador evalúa la validez de cada línea antes de generar código binario. ¿Cuál será el resultado impreso?",
            "codeSnippet": "linea1_valida = True\nlinea2_valida = False\n\nif (linea1_valida and linea2_valida):\n    estado = 'Compilacion Exitosa: Generando Binario'\nelse:\n    estado = 'Error de Compilacion: Ejecucion Detenida'\n\nprint(estado)",
            "options": [
              {
                "text": "Error de Compilacion: Ejecucion Detenida",
                "correct": true
              },
              {
                "text": "Compilacion Exitosa: Generando Binario",
                "correct": false
              },
              {
                "text": "linea2_valida",
                "correct": false
              },
              {
                "text": "True",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Desafío de Integración: El Ciclo del Software",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cómo se integran la entrada, el algoritmo y la traducción en una arquitectura real de software?",
            "lessonText": "# El Ciclo Periódico del Software\n\nUn programa de software en un robot o sistema autónomo no es un texto estático: es un **ciclo de control continuo** que se repite decenas de veces por segundo (típicamente a 50 Hz, o cada 20 milisegundos).\n\nEn cada ciclo periódico ocurren tres pasos sincronizados:\n1. **Lectura de Entrada (Input):** Sensores, cámaras y mandos del piloto inyectan mediciones frescas en la memoria RAM.\n2. **Ejecución Lógica (Proceso):** El código máquina (previamente traducido por el compilador) procesa esas entradas aplicando reglas matemáticas deterministas y sin ambigüedad.\n3. **Emisión de Salida (Output):** La computadora despacha señales a actuadores, motores o pantallas de diagnóstico.\n\n### La Diferencia Crítica entre Sintaxis y Lógica\n- Un **Error de Sintaxis** impide que el compilador cree el código binario. El programa jamás arranca, protegiendo al robot de actuar a ciegas.\n- Un **Error de Lógica** sí compila y sí genera binario. El hardware lo ejecutará ciegamente a máxima velocidad, lo que en robótica puede traducirse en una colisión o en un mecanismo roto.\n\n**La Regla de Oro:**\nEl software de calidad es aquel que no solo compila sin errores de sintaxis, sino cuya lógica contempla todos los casos extremos antes de enviar potencia al hardware.",
            "options": [
              {
                "text": "Mediante un ciclo periódico determinista que lee entradas (Input), ejecuta la lógica compilada (Proceso) y despacha órdenes físicas (Output) múltiples veces por segundo",
                "correct": true
              },
              {
                "text": "Mediante una conexión directa entre los cables de la batería y los sensores sin pasar por el procesador",
                "correct": false
              },
              {
                "text": "Reiniciando el sistema operativo cada vez que el robot debe tomar una decisión nueva en la cancha",
                "correct": false
              },
              {
                "text": "Permitiendo que cada motor decida su propia velocidad independientemente del código central",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Identifica en qué fase del ciclo de software se origina cada problema técnico:",
            "options": [
              {
                "text": "Olvidar cerrar un paréntesis en una instrucción|||Fallo de Sintaxis (Bloqueado por el compilador antes de correr)",
                "correct": true
              },
              {
                "text": "Lente de la cámara de visión cubierto por polvo|||Fallo de Input (Datos corruptos del mundo exterior)",
                "correct": true
              },
              {
                "text": "Calcular la velocidad dividiendo entre cero|||Fallo de Lógica (Colapso durante el Proceso de ejecución)",
                "correct": true
              },
              {
                "text": "Cable de alimentación del motor desconectado|||Fallo de Output (La orden lógica no llega al actuador físico)",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena la rutina de seguridad que un sistema autónomo debe ejecutar en cada ciclo periódico:",
            "options": [
              {
                "text": "voltajeActual = leerVoltajeBateria()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "if (voltajeActual < 11.0):",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "    desactivarMecanismosDeAltoConsumo()",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "enviarTelemetriaAConsola(voltajeActual)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la instrucción para emitir un mensaje de diagnóstico por el canal de salida estándar (consola):",
            "codeSnippet": "temperaturaMotor = 85\n\nif (temperaturaMotor > 80):\n    _____('[ALERTA] Temperatura critica en motor')",
            "options": [
              {
                "text": "print",
                "correct": true
              },
              {
                "text": "Print",
                "correct": false
              },
              {
                "text": "input",
                "correct": false
              },
              {
                "text": "sensor",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "¿Por qué un error de lógica es sustancialmente más peligroso en robótica que un error de sintaxis?",
            "options": [
              {
                "text": "Porque el error de sintaxis es detectado y bloqueado por el compilador antes de ejecutar, mientras que el de lógica corre en hardware real y puede provocar colisiones o daños mecánicos",
                "correct": true
              },
              {
                "text": "Porque los errores de lógica provocan un cortocircuito inmediato en las celdas químicas de la batería",
                "correct": false
              },
              {
                "text": "Porque los errores de sintaxis borran permanentemente el disco de almacenamiento del robot",
                "correct": false
              },
              {
                "text": "Porque los errores de lógica solo ocurren cuando el robot pierde la conexión inalámbrica de radio",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea la ejecución secuencial del acumulador de errores de diagnóstico. ¿Cuál es el valor final de 'fallasDetectadas'?",
            "codeSnippet": "fallasDetectadas = 0\nsensorVision_ok = True\nsensorPresion_ok = False\n\nif not sensorVision_ok:\n    fallasDetectadas = fallasDetectadas + 1\n\nif not sensorPresion_ok:\n    fallasDetectadas = fallasDetectadas + 1\n\nprint(fallasDetectadas)",
            "options": [
              {
                "text": "1",
                "correct": true
              },
              {
                "text": "2",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              },
              {
                "text": "False",
                "correct": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "order": 2,
    "slug": "unit-2",
    "title": "Algorithms & Logic",
    "description": "Paso a paso: Instrucciones finitas, deterministas y sin ambigüedad",
    "guidebookText": "# Guía de Estudio: Unit 2 - Algorithms & Logic\n\nEn las ciencias de la computación, un **algoritmo** es un procedimiento computacional finito, ordenado y determinista que transforma un conjunto de datos de entrada (Input) en un resultado útil (Output).\n\n### Las Tres Propiedades Sagradas de un Algoritmo:\n1. **Finitud (Finiteness):** Debe terminar obligatoriamente tras un número contable y predecible de pasos.\n2. **Determinismo (Determinism):** Ante los mismos datos de entrada, produce siempre exactamente el mismo resultado.\n3. **Precisión Inequívoca (Definiteness):** Cada instrucción debe ser atómica y cuantitativa, eliminando cualquier interpretación ambigua.\n\n### El Modelo IPO y la Arquitectura Robótica:\nTodo robot opera en un ciclo continuo a 50 Hz (cada 20 ms):\n- **Entrada (Input):** Sensores, cámaras de visión artificial (Limelight) y mandos del piloto.\n- **Proceso (Process):** La lógica matemática que decide trayectorias, evalúa condiciones de seguridad y calcula potencias.\n- **Salida (Output):** Señales enviadas a los controladores de motor (SparkMax/TalonFX) y válvulas neumáticas.",
    "lessons": [
      {
        "title": "¿Qué es un Algoritmo Realmente?",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cuáles son las tres propiedades esenciales que definen a un algoritmo en ciencias de la computación?",
            "lessonText": "# La Anatomía de un Algoritmo\n\nEn la conversación informal, solemos decir que un algoritmo es como una 'receta de cocina'. Pero en la ciencia de la computación y la ingeniería robótica, un algoritmo es algo mucho más riguroso: es un **procedimiento computacional formal** para resolver un problema de procesamiento de información.\n\nTodo algoritmo profesional debe satisfacer tres propiedades inmutables:\n\n### 1. Finitud (Finiteness)\nUn algoritmo debe terminar obligatoriamente tras un número finito y predecible de pasos. Si un programa se queda atrapado repitiéndose eternamente sin alcanzar un estado de salida, ha fallado en su objetivo.\n\n### 2. Determinismo (Determinism)\nCada vez que el algoritmo recibe exactamente el mismo conjunto de datos de entrada (Input), debe producir el mismo resultado (Output). No depende del azar, estados de ánimo ni intuiciones.\n\n### 3. Precisión Inequívoca (Definiteness)\nCada instrucción debe ser atómica y perfectamente comprensible para la máquina, sin ambigüedades como 'gira un poco' o 'espera un momento'. Las máquinas requieren valores numéricos y condiciones exactas.\n\n### Aplicación en Robótica FRC\nCuando el robot calcula la trayectoria para anotar en la canasta, el algoritmo toma la distancia de la cámara Limelight (ej. 3.42 metros) y calcula el ángulo del brazo y las RPM de los motores en menos de 5 milisegundos. Si el algoritmo no fuera finito o determinista, el robot jamás dispararía a tiempo.\n\n**La Regla de Oro:**\nUn algoritmo no es una idea abstracta: es una secuencia finita, determinista e inequívoca de pasos lógicos que transforma un estado inicial en un resultado útil.",
            "options": [
              {
                "text": "Finitud (debe terminar), Determinismo (mismo input da mismo output) y Precisión (cero ambigüedad en cada paso)",
                "correct": true
              },
              {
                "text": "Velocidad ilimitada, uso exclusivo de números impares y almacenamiento en la nube",
                "correct": false
              },
              {
                "text": "Creatividad subjetiva, capacidad de ignorar errores y modificación aleatoria de variables",
                "correct": false
              },
              {
                "text": "Dependencia de la conexión a internet, uso obligatorio de gráficos y ausencia de condiciones de parada",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada propiedad fundamental de un algoritmo con su significado técnico:",
            "options": [
              {
                "text": "Finitud|||Garantiza que el procedimiento termine tras un número contable de pasos",
                "correct": true
              },
              {
                "text": "Determinismo|||Mismos datos de entrada siempre producen el mismo resultado exacto",
                "correct": true
              },
              {
                "text": "Precisión|||Cada instrucción está libre de ambigüedad y es atómica para la máquina",
                "correct": true
              },
              {
                "text": "Eficiencia|||Resuelve el problema optimizando el tiempo de CPU y el uso de memoria RAM",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena el algoritmo determinista para alinear el robot con un objetivo visual (AprilTag):",
            "options": [
              {
                "text": "desviacionAngular = camaraVision.obtenerErrorHorizontal()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "if (abs(desviacionAngular) > 2.0):",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "    potenciaGiro = calcularCorreccion(desviacionAngular)",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "chasis.girar(potenciaGiro)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Todo algoritmo debe ser finito. Completa la condición de parada para evitar un bucle que congele la CPU:",
            "codeSnippet": "intentos = 0\nmaximo_intentos = 5\n\nwhile (intentos < _____):\n    intentos = intentos + 1\n    print('Buscando señal...')",
            "options": [
              {
                "text": "maximo_intentos",
                "correct": true
              },
              {
                "text": "intentos",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              },
              {
                "text": "True",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "¿Cuál de las siguientes instrucciones viola el principio de precisión inequívoca en un algoritmo de control robótico?",
            "options": [
              {
                "text": "'Avanzar a velocidad moderada hasta que el robot esté cerca de la pared'",
                "correct": true
              },
              {
                "text": "'Fijar la potencia de los motores de tracción en 0.60 hacia adelante'",
                "correct": false
              },
              {
                "text": "'Girar 90.0 grados a la derecha según la lectura angular del giroscopio'",
                "correct": false
              },
              {
                "text": "'Detener motores si el sensor de distancia láser reporta menos de 20.0 cm'",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea el siguiente algoritmo paso a paso. ¿Cuál será el Output final impreso en consola?",
            "codeSnippet": "paso = 1\npaso = paso + 3\npaso = paso * 2\nprint(paso)",
            "options": [
              {
                "text": "8",
                "correct": true
              },
              {
                "text": "7",
                "correct": false
              },
              {
                "text": "4",
                "correct": false
              },
              {
                "text": "2",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "El Ciclo IPO en la Práctica Robótica",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cómo se articulan las tres fases del modelo IPO dentro de la arquitectura de un robot de competencia?",
            "lessonText": "# El Ciclo Periódico IPO en Robótica\n\nEn un robot de competencia, el procesador central (como la roboRIO) no ejecuta un código lineal de principio a fin y se apaga. En su lugar, ejecuta el ciclo fundamental **Input -> Process -> Output (IPO)** de forma ininterrumpida decenas de veces por segundo.\n\n### 1. Fase de Entrada (Input)\nEl software captura la telemetría del entorno y las órdenes humanas:\n- Joysticks y gatillos del control del conductor.\n- Sensores de distancia ultrasónicos y láser (LiDAR).\n- Encoders rotativos en las ruedas y giroscopio (NavX).\n- Cámaras inteligentes de visión artificial (Limelight).\n\n### 2. Fase de Procesamiento (Process / Algoritmo)\nEs el cerebro lógico del sistema. Toma todos los números capturados en la entrada y realiza cálculos vectoriales, matrices cinemáticas y filtros de seguridad:\n- ¿El conductor pidió avanzar pero el sensor detectó una pared a 10 cm? El algoritmo decide anular la orden humana y aplicar frenado automático.\n\n### 3. Fase de Salida (Output)\nEl resultado matemático se traduce en señales físicas de hardware:\n- Modulación por Ancho de Pulsos (PWM) o comandos por bus CAN a los controladores de motor.\n- Activación de válvulas solenoides neumáticas.\n- Indicadores luminosos LED para informar el estado al equipo en la pista.\n\n**La Regla de Oro:**\nUn buen algoritmo nunca confía ciegamente en el Input sin filtrarlo, ni acciona el Output sin antes verificar las condiciones de seguridad en el Procesamiento.",
            "options": [
              {
                "text": "Captura datos del entorno (Input), ejecuta la lógica de decisión y cálculo (Process), y traduce el resultado en acciones físicas en los actuadores (Output)",
                "correct": true
              },
              {
                "text": "Envía potencia directa a los motores (Output) y luego calcula si el robot chocó contra un obstáculo (Process)",
                "correct": false
              },
              {
                "text": "Descarga las decisiones tomadas por los organizadores del torneo en cada milisegundo a través de radiofrecuencia",
                "correct": false
              },
              {
                "text": "Apaga los sensores para ahorrar batería y deja que los motores operen por impulso mecánico continuo",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Clasifica cada componente de un robot FRC en su fase correspondiente del ciclo IPO:",
            "options": [
              {
                "text": "Giroscopio NavX reportando inclinación de 15 grados|||Fase de Input (Entrada de telemetría)",
                "correct": true
              },
              {
                "text": "Cálculo cinemático de trayectoria en la roboRIO|||Fase de Process (Procesamiento algorítmico)",
                "correct": true
              },
              {
                "text": "Controlador SparkMax enviando 12V al motor de tracción|||Fase de Output (Salida física)",
                "correct": true
              },
              {
                "text": "Pistón neumático extendiendo la garra recolectora|||Fase de Output (Salida mecánica)",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena el flujo del ciclo periódico para un sistema de elevador robótico (Input -> Process -> Output):",
            "options": [
              {
                "text": "posicionActual = sensorEncoder.obtenerPosicion()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "error = posicionDeseada - posicionActual",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "voltajeMotor = error * factorGananciaProporcional",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "motorElevador.setVoltaje(voltajeMotor)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la fase de Output enviando la señal calculada al controlador del mecanismo:",
            "codeSnippet": "comandoPiloto = 0.75\nvelocidadSegura = procesarLimiteVelocidad(comandoPiloto)\n\n# Despachar al actuador (Output):\nmotorIntake._____(velocidadSegura)",
            "options": [
              {
                "text": "setPower",
                "correct": true
              },
              {
                "text": "readSensor",
                "correct": false
              },
              {
                "text": "inputData",
                "correct": false
              },
              {
                "text": "resetMemory",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Durante una partida, un sensor ultrasónico reporta súbitamente -999 cm debido a polvo en el lente. ¿Cuál es la respuesta algorítmica correcta en la fase de Process?",
            "options": [
              {
                "text": "Detectar que el valor está fuera del rango físico válido, descartarlo y utilizar la última medición segura o detener el robot por precaución",
                "correct": true
              },
              {
                "text": "Acelerar los motores en reversa a máxima potencia porque el número es negativo",
                "correct": false
              },
              {
                "text": "Apagar el procesador de inmediato y esperar a que el polvo desaparezca por sí solo",
                "correct": false
              },
              {
                "text": "Multiplicar el valor por -1 para convertirlo en positivo y continuar avanzando a ciegas",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Analiza el procesamiento del joystick. Si el piloto empuja la palanca a 0.8 pero el interruptor de seguridad está activado, ¿cuál es el Output?",
            "codeSnippet": "inputJoystick = 0.8\nseguridadActivada = True\n\nif seguridadActivada:\n    potenciaOutput = 0.0\nelse:\n    potenciaOutput = inputJoystick\n\nprint(potenciaOutput)",
            "options": [
              {
                "text": "0.0",
                "correct": true
              },
              {
                "text": "0.8",
                "correct": false
              },
              {
                "text": "True",
                "correct": false
              },
              {
                "text": "seguridadActivada",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Pseudocódigo y Acuerdos de Ingeniería",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué los desarrolladores profesionales y equipos de robótica diseñan algoritmos en pseudocódigo antes de programar en Java o C++?",
            "lessonText": "# Diseñar Antes de Construir\n\nEn la ingeniería de software profesional, lanzarse a escribir código en el editor sin un diseño previo es la causa número uno de proyectos fallidos, errores de lógica y horas perdidas en el taller.\n\nEl **pseudocódigo** es una herramienta de modelado lógico que describe los pasos de un algoritmo combinando la claridad del lenguaje humano con la estructura rigurosa de la programación.\n\n### Ventajas Técnicas del Pseudocódigo:\n1. **Aislamiento Cognitivo:** Te permite concentrarte 100% en la **lógica del problema** sin la sobrecarga mental de recordar si falta un punto y coma, si la variable era tipo `double` o si importaste la librería correcta de WPILib.\n2. **Comunicación Interdisciplinaria:** En un equipo de robótica, los ingenieros mecánicos y eléctricos pueden leer, entender y validar el pseudocódigo del algoritmo de un brazo robótico antes de que el equipo de programación toque una sola línea de Java.\n3. **Independencia de Plataforma:** Un buen pseudocódigo se puede traducir indistintamente a C++, Java, Python o LabVIEW sin alterar la solución matemática de fondo.\n\n### Convenciones Comunes de Pseudocódigo:\n- Palabras clave de control en mayúsculas: `SI`, `ENTONCES`, `SINO`, `MIENTRAS`, `RETORNAR`.\n- Sangría estricta para denotar bloques subordinados.\n\n**La Regla de Oro:**\nEl tiempo invertido en escribir pseudocódigo claro ahorra diez veces su valor en tiempo de depuración en la cancha de competencia.",
            "options": [
              {
                "text": "Para validar y acordar la solución lógica entre ingenieros sin la sobrecarga mental de la sintaxis estricta de un compilador",
                "correct": true
              },
              {
                "text": "Porque los microprocesadores ejecutan pseudocódigo más rápido que código binario compilado",
                "correct": false
              },
              {
                "text": "Porque las reglas de la competencia prohíben escribir código real hasta el día del torneo",
                "correct": false
              },
              {
                "text": "Porque el pseudocódigo sirve exclusivamente para cifrar el código y evitar espionaje industrial",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona la estructura en pseudocódigo con su contraparte lógica en lenguajes estructurados:",
            "options": [
              {
                "text": "SI (condicion) ENTONCES|||Bifurcación condicional (if)",
                "correct": true
              },
              {
                "text": "SINO|||Camino alternativo obligatorio si la condición no se cumple (else)",
                "correct": true
              },
              {
                "text": "MIENTRAS (condicion) HACER|||Estructura de repetición condicional (while)",
                "correct": true
              },
              {
                "text": "RETORNAR resultado|||Devolver el valor calculado por la subrutina",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena el pseudocódigo de una rutina de recolección de pieza (Intake Sequence):",
            "options": [
              {
                "text": "SI sensorHazLuz.detectaPieza() == FALSO ENTONCES:",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "    rodillosIntake.encender(potencia = 0.8)",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "SINO:",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "    rodillosIntake.detener()",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la palabra clave en pseudocódigo para definir la alternativa cuando la condición del sensor es falsa:",
            "codeSnippet": "SI presionAire >= 120 ENTONCES\n    apagarCompresor()\n_____\n    encenderCompresor()\nFIN_SI",
            "options": [
              {
                "text": "SINO",
                "correct": true
              },
              {
                "text": "REPETIR",
                "correct": false
              },
              {
                "text": "MIENTRAS",
                "correct": false
              },
              {
                "text": "RETORNAR",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "¿Cuál de los siguientes fragmentos representa un pseudocódigo técnico riguroso y libre de ambigüedades?",
            "options": [
              {
                "text": "SI distanciaUltrasonido < 30.0 ENTONCES motor.frenar() SINO motor.avanzar(0.5)",
                "correct": true
              },
              {
                "text": "Hacer que el robot se mueva bonito y tenga cuidado con las cosas que se crucen",
                "correct": false
              },
              {
                "text": "01001101 01101111 01110100 01101111 01110010 00100000 01001111 01001110",
                "correct": false
              },
              {
                "text": "Intentar prender los motores a ver si jala el sistema autónomo",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Evalúa mentalmente este pseudocódigo estructurado. Si bateria = 10.5, ¿cuál será el mensaje emitido?",
            "codeSnippet": "bateria = 10.5\n\nif (bateria < 11.0):\n    estado = 'BATERIA_CRITICA'\nelse:\n    estado = 'BATERIA_NOMINAL'\n\nprint(estado)",
            "options": [
              {
                "text": "BATERIA_CRITICA",
                "correct": true
              },
              {
                "text": "BATERIA_NOMINAL",
                "correct": false
              },
              {
                "text": "10.5",
                "correct": false
              },
              {
                "text": "estado",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Diagramas de Flujo y Bifurcaciones Lógicas",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cuál es la función arquitectónica de un diagrama de flujo y qué representa cada figura geométrica estándar?",
            "lessonText": "# Cartografía del Software: Diagramas de Flujo\n\nUn **diagrama de flujo** es una representación esquemática y gráfica de un algoritmo. Así como un arquitecto no construye un edificio sin planos, un ingeniero de software no implementa lógica crítica sin mapear visualmente todas las ramas de ejecución posibles.\n\n### Simbología Estándar (ISO/ANSI):\n1. **Óvalo / Rectángulo Redondeado (Terminal):** Representa el **Inicio** o el **Fin** del programa o subrutina.\n2. **Rectángulo (Proceso):** Representa una acción de cálculo, asignación de variable o comando imperativo (ej. `x = x + 1` o `encenderMotor()`).\n3. **Rombo (Decisión):** Representa una evaluación lógica booleana con una pregunta de Sí/No (`True`/`False`). **Siempre tiene una flecha de entrada y exactamente dos flechas de salida mutuamente excluyentes**.\n4. **Flechas (Líneas de Flujo):** Indican la dirección inequívoca de la ejecución secuencial.\n\n### El Peligro de los Caminos Muertos (Dead Ends)\nEl valor visual del diagrama de flujo reside en detectar anomalías antes de escribir código: ramas donde el algoritmo se queda atrapado sin salida, o ciclos cerrados donde las flechas forman un bucle infinito que consumiría el 100% de la CPU.\n\n**La Regla de Oro:**\nCada rombo de decisión en tu diagrama debe tener dos salidas claramente etiquetadas (Verdadero y Falso), y todos los caminos deben confluir eventualmente en un estado terminal seguro.",
            "options": [
              {
                "text": "Modelar visualmente el flujo de ejecución mediante símbolos estándar para verificar que todos los caminos lógicos concluyan de forma segura",
                "correct": true
              },
              {
                "text": "Ilustrar la distribución física de los cables y fusibles en el chasis del robot",
                "correct": false
              },
              {
                "text": "Generar automáticamente planos en tres dimensiones para las impresoras 3D",
                "correct": false
              },
              {
                "text": "Decorar la documentación del equipo para obtener puntos artísticos de los jueces",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Asocia cada figura geométrica del diagrama de flujo con su responsabilidad técnica:",
            "options": [
              {
                "text": "Óvalo o Rectángulo Redondeado|||Punto de Inicio o Fin de la ejecución",
                "correct": true
              },
              {
                "text": "Rectángulo|||Operación matemática o instrucción de cálculo (Proceso)",
                "correct": true
              },
              {
                "text": "Rombo|||Bifurcación de decisión condicional (Verdadero o Falso)",
                "correct": true
              },
              {
                "text": "Flecha conectora|||Dirección estricta del flujo de control",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena el código que traduce fielmente un diagrama de flujo con una decisión de parada de emergencia:",
            "options": [
              {
                "text": "temperatura = sensorTermico.leerCelsius()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "if (temperatura > 95.0):",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "    detenerSistemaPorEmergencia()",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "registrarTemperatura(temperatura)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la instrucción que implementa la rama de bifurcación de un rombo de decisión:",
            "codeSnippet": "# Bifurcación del rombo de decisión:\n_____ (distanciaObstaculo < 15.0):\n    frenar()\nelse:\n    avanzar()",
            "options": [
              {
                "text": "if",
                "correct": true
              },
              {
                "text": "loop",
                "correct": false
              },
              {
                "text": "motor",
                "correct": false
              },
              {
                "text": "print",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Dentro de un diagrama de flujo bien estructurado, ¿cuántas flechas de salida debe tener obligatoriamente un rombo de decisión?",
            "options": [
              {
                "text": "Exactamente 2 caminos mutuamente excluyentes (uno para Verdadero y otro para Falso)",
                "correct": true
              },
              {
                "text": "1 camino único que se toma sin importar el resultado de la condición",
                "correct": false
              },
              {
                "text": "Tantas flechas como letras tenga la pregunta de decisión",
                "correct": false
              },
              {
                "text": "Ninguna flecha, el rombo siempre detiene la ejecución del programa",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea el flujo de decisión. Si 'potenciaBateria' es 12.6 y 'presionNeumatica' es 115, ¿cuál será el diagnóstico final?",
            "codeSnippet": "potenciaBateria = 12.6\npresionNeumatica = 115\n\nif (potenciaBateria > 12.0 and presionNeumatica >= 110):\n    diagnostico = 'LISTO_PARA_PARTIDA'\nelse:\n    diagnostico = 'REVISAR_SUBSISTEMAS'\n\nprint(diagnostico)",
            "options": [
              {
                "text": "LISTO_PARA_PARTIDA",
                "correct": true
              },
              {
                "text": "REVISAR_SUBSISTEMAS",
                "correct": false
              },
              {
                "text": "12.6",
                "correct": false
              },
              {
                "text": "115",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Desafío de Unidad: Algoritmo de Rutina Autónoma",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué el periodo autónomo de 15 segundos en FRC es la máxima prueba de un algoritmo en ingeniería?",
            "lessonText": "# La Prueba de Fuego: 15 Segundos de Autonomía Total\n\nEn la competencia de robótica FIRST Robotics Competition (FRC), cada match oficial comienza con un periodo de **15 segundos en el que ningún humano puede tocar los mandos**.\n\nTodo el desempeño del robot depende de los algoritmos pregrabados en la memoria de la roboRIO. En esos 15 segundos, el sistema debe:\n1. Calibrar odometría y giroscopio en el milisegundo cero.\n2. Conducir a lo largo de una trayectoria de splines precalculada.\n3. Usar visión computacional para identificar piezas en el piso y ajustar la trayectoria en tiempo real.\n4. Accionar el intake, subir el brazo articulado y acelerar los flywheels de disparo a 5,000 RPM.\n5. Disparar y retirarse para cruzar la línea de comunidad y sumar puntos.\n\n### Causas Reales de Fracaso de un Autónomo:\n- **Falta de Determinismo:** El robot funciona en el taller pero falla en la cancha oficial porque el algoritmo asumió niveles de fricción constantes en la alfombra sin compensar con encoders.\n- **Ausencia de Timeouts:** Un sensor falla en detectar que la pieza entró y el algoritmo se queda esperando infinitamente en ese paso, desperdiciando el resto de los 15 segundos.\n\n**La Regla de Oro:**\nUn algoritmo autónomo robusto siempre cuenta con mecanismos de salida por tiempo (timeouts) y verificación cruzada de sensores para evitar bloqueos catastróficos.",
            "options": [
              {
                "text": "Porque el robot opera sin intervención humana directa, requiriendo algoritmos deterministas con timeouts y compensación de sensores en tiempo real",
                "correct": true
              },
              {
                "text": "Porque los árbitros apagan la electricidad de la arena si el código tarda más de 3 segundos en compilar",
                "correct": false
              },
              {
                "text": "Porque en ese periodo el procesador del robot cambia su arquitectura a un sistema analógico de bulbos",
                "correct": false
              },
              {
                "text": "Porque el robot debe inventar sus propios objetivos basándose en intuición artística",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada falla común en un autónomo con la vulnerabilidad algorítmica que la provocó:",
            "options": [
              {
                "text": "El robot se quedó trabado esperando una pieza que nunca llegó|||Falta de timeout o condición de salida por tiempo",
                "correct": true
              },
              {
                "text": "El robot giró hacia la dirección contraria en la cancha|||Error de signo en el cálculo vectorial de trayectoria",
                "correct": true
              },
              {
                "text": "El lanzador disparó antes de que los motores alcanzaran velocidad|||Violación de secuencia estricta en el algoritmo",
                "correct": true
              },
              {
                "text": "La cámara se desconectó y el programa colapsó por completo|||Ausencia de manejo de fallos y valores por defecto",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena la secuencia óptima y segura para una rutina de disparo autónomo en FRC:",
            "options": [
              {
                "text": "calibrarOdometriaInicial()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "desplazarAPosicionDeDisparo()",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "acelerarShooterRPM(5000)",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "alimentarPiezaHaciaShooter()",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la comprobación que asegura que el disparo ocurra únicamente si los motores alcanzaron las RPM requeridas:",
            "codeSnippet": "rpmActuales = sensorVelocidad.obtenerRPM()\nrpmObjetivo = 5000\n\nif (rpmActuales >= _____):\n    activarAlimentador()\nelse:\n    esperarAceleracion()",
            "options": [
              {
                "text": "rpmObjetivo",
                "correct": true
              },
              {
                "text": "0",
                "correct": false
              },
              {
                "text": "activarAlimentador",
                "correct": false
              },
              {
                "text": "False",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Si tu algoritmo autónomo se queda atascado esperando que un sensor de visión detecte un objeto, ¿cuál es la mejor práctica de ingeniería para solucionarlo?",
            "options": [
              {
                "text": "Implementar un temporizador de seguridad (Timeout): si pasan 1.5 segundos sin detección, abortar ese intento y avanzar al siguiente objetivo",
                "correct": true
              },
              {
                "text": "Aumentar la potencia de los motores al máximo para forzar al robot a moverse a ciegas",
                "correct": false
              },
              {
                "text": "Eliminar todos los sensores del robot y conducir basándose únicamente en el tiempo",
                "correct": false
              },
              {
                "text": "Reiniciar la batería principal del robot mientras el partido sigue en curso",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Calcula los puntos totales obtenidos en la rutina autónoma según las condiciones evaluadas en este código:",
            "codeSnippet": "puntosAutonomo = 0\nsalioDeZona = True\nprimerDisparoAnotado = True\nsegundoDisparoAnotado = False\n\nif salioDeZona:\n    puntosAutonomo = puntosAutonomo + 2\n\nif primerDisparoAnotado:\n    puntosAutonomo = puntosAutonomo + 5\n\nif segundoDisparoAnotado:\n    puntosAutonomo = puntosAutonomo + 5\n\nprint(puntosAutonomo)",
            "options": [
              {
                "text": "7",
                "correct": true
              },
              {
                "text": "12",
                "correct": false
              },
              {
                "text": "2",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "order": 3,
    "slug": "unit-3",
    "title": "Sequential Execution",
    "description": "Flujo línea por línea: Por qué el orden lo cambia todo",
    "guidebookText": "# Guía de Estudio: Unit 3 - Sequential Execution\n\nLas computadoras procesan las instrucciones en **orden secuencial estricto**, línea por línea, de arriba hacia abajo (*Top-to-Bottom*).\n\n### Puntos Cruciales:\n1. **El Program Counter (PC):** La CPU mantiene un registro interno de hardware que apunta a la dirección de memoria de la instrucción actual. Una vez ejecutada, avanza automáticamente a la siguiente.\n2. **Dependencias de Datos:** Una variable no puede consumirse antes de haber sido inicializada en una línea previa. La causa siempre debe preceder al efecto.\n3. **Efectos Secundarios en Robótica:** En software puro, un cálculo fuera de orden produce un número incorrecto. En robótica física, accionar un motor antes de calibrar los sensores de límite puede doblar el chasis o quemar la transmisión.",
    "lessons": [
      {
        "title": "Ejecución Línea por Línea y el Program Counter",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cómo procesa la CPU un script de código y qué función cumple el Program Counter?",
            "lessonText": "# El Hilo de la Secuencia: El Program Counter\n\nCuando una computadora ejecuta un programa, no procesa todas las líneas simultáneamente ni salta al azar. El microprocesador contiene un registro interno de hardware esencial llamado **Program Counter (PC)** o Puntero de Instrucción.\n\n### El Ciclo de Instrucción de la CPU:\n1. **Fetch (Búsqueda):** La CPU consulta la dirección en memoria señalada por el Program Counter y carga la instrucción actual.\n2. **Decode (Decodificación):** El circuito decodificador traduce los bits de la instrucción en señales de control.\n3. **Execute (Ejecución):** La Unidad Aritmético Lógica (ALU) o el bus de memoria ejecuta la acción.\n4. **Incremento:** El Program Counter avanza automáticamente a la siguiente línea en secuencia descendente (*Top-to-Bottom*).\n\n### La Ilusión del Paralelismo\nIncluso cuando un robot realiza múltiples tareas que parecen simultáneas, a nivel de un solo núcleo de procesador, cada línea se ejecuta en un turno temporal estricto. La única forma de alterar este flujo natural es mediante estructuras de salto y control (`if`, `while`, llamadas a funciones).\n\n**La Regla de Oro:**\nLa computadora lee y ejecuta estrictamente de arriba hacia abajo; ninguna línea futura puede influir en el pasado de la ejecución.",
            "options": [
              {
                "text": "Mantiene un registro interno (Program Counter) que apunta a la línea actual, la ejecuta y avanza a la siguiente en secuencia descendente",
                "correct": true
              },
              {
                "text": "Ejecuta todas las líneas al mismo tiempo dividiendo el voltaje de la batería en partes iguales",
                "correct": false
              },
              {
                "text": "Lee el archivo de abajo hacia arriba para anticipar los errores antes de que ocurran",
                "correct": false
              },
              {
                "text": "Ordena las instrucciones alfabéticamente antes de enviarlas al hardware",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada fase del ciclo de instrucción con su operación interna en la CPU:",
            "options": [
              {
                "text": "Program Counter (PC)|||Registro de hardware que almacena la dirección de la siguiente instrucción",
                "correct": true
              },
              {
                "text": "Fase Fetch|||Carga la instrucción desde la memoria RAM hacia la CPU",
                "correct": true
              },
              {
                "text": "Fase Decode|||Interpreta el código binario para saber qué circuitos activar",
                "correct": true
              },
              {
                "text": "Fase Execute|||Lleva a cabo la operación matemática o el comando de memoria",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena las instrucciones para que la telemetría imprima la cuenta regresiva descendente exacta (3, 2, 1, IGNICION):",
            "options": [
              {
                "text": "print('3')",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "print('2')",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "print('1')",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "print('IGNICION')",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la llamada intermedia para asegurar que la secuencia de registro en el log sea consistente:",
            "codeSnippet": "print('Iniciando comunicacion...')\n_____('Enlace de radio establecido')\nprint('Robot habilitado')",
            "options": [
              {
                "text": "print",
                "correct": true
              },
              {
                "text": "Print",
                "correct": false
              },
              {
                "text": "input",
                "correct": false
              },
              {
                "text": "while",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Si en la línea 4 de un programa ocurre un error fatal (como dividir entre cero), ¿qué sucede con las instrucciones de la línea 5 en adelante?",
            "options": [
              {
                "text": "El hilo de ejecución colapsa de inmediato en la línea 4 y ninguna instrucción posterior llega a ejecutarse",
                "correct": true
              },
              {
                "text": "La CPU salta la línea dañada y ejecuta la línea 5 asumiendo un resultado aproximado",
                "correct": false
              },
              {
                "text": "El procesador reinicia automáticamente todo el sistema operativo desde la línea 1",
                "correct": false
              },
              {
                "text": "Las líneas restantes se ejecutan pero los motores giran a la mitad de potencia",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Analiza el orden secuencial de este código. ¿Cuál será la salida exacta en consola?",
            "codeSnippet": "print('A')\nprint('B')\nprint('A')",
            "options": [
              {
                "text": "A seguido de B y luego A (en líneas separadas)",
                "correct": true
              },
              {
                "text": "Solo imprimirá A y B una sola vez porque descarta repetidos",
                "correct": false
              },
              {
                "text": "B seguido de A y luego A",
                "correct": false
              },
              {
                "text": "Error de sintaxis por imprimir la misma letra dos veces",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Mutabilidad y Reasignación de Estado",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cómo maneja la memoria RAM las operaciones de reasignación como 'x = x + 10'?",
            "lessonText": "# El Estado en el Tiempo: Mutabilidad\n\nEn álgebra escolar, una expresión como **x = x + 10** es una contradicción matemática imposible (ningún número es igual a sí mismo más diez). Pero en programación, el símbolo `=` no representa una igualdad estática: representa una **operación imperativa de asignación**.\n\n### Las Dos Fases de una Asignación:\n1. **Evaluación de la Derecha:** La CPU lee el valor que `x` tiene almacenado actualmente en la memoria RAM y realiza el cálculo matemático (`x + 10`).\n2. **Almacenamiento en la Izquierda:** La CPU toma el resultado recién calculado y lo escribe en la celda de memoria de `x`, **sobrescribiendo y destruyendo irreversiblemente el valor anterior**.\n\n### El Concepto de Estado\nEl **estado** de un programa es la fotografía de todas sus variables en un instante dado en el tiempo. A medida que el Program Counter avanza línea por línea, el estado muta. Una variable no recuerda su pasado a menos que tú decidas guardarlo explícitamente en otra variable.\n\n**La Regla de Oro:**\nUna variable solo guarda un único valor a la vez: cada nueva asignación borra el valor previo sin dejar rastro.",
            "options": [
              {
                "text": "Evalúa primero la expresión de la derecha usando el valor actual y luego sobrescribe la celda de memoria de la izquierda con el nuevo resultado",
                "correct": true
              },
              {
                "text": "Compara si ambos lados son algebraicamente idénticos y arroja un error si no coinciden",
                "correct": false
              },
              {
                "text": "Crea automáticamente una nueva variable oculta para conservar el historial de todos los valores anteriores",
                "correct": false
              },
              {
                "text": "Suma los números únicamente si la variable fue declarada como número primo",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Rastrea el ciclo de vida del dato en la variable 'velocidad':",
            "options": [
              {
                "text": "velocidad = 0|||Inicialización: estado inicial en reposo",
                "correct": true
              },
              {
                "text": "velocidad = 40|||Reasignación: el valor 0 es destruido y reemplazado por 40",
                "correct": true
              },
              {
                "text": "velocidad = velocidad + 10|||Acumulación: se leen 40, se suman 10 y se guardan 50",
                "correct": true
              },
              {
                "text": "velocidad = 0|||Reinicio: el valor 50 es destruido para regresar a reposo",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena las instrucciones para que el contador de vueltas incremente progresivamente de 0 a 2:",
            "options": [
              {
                "text": "vueltas = 0",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "vueltas = vueltas + 1",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "vueltas = vueltas + 1",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "print(vueltas)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la línea para acumular 15 puntos adicionales sobre la puntuación existente:",
            "codeSnippet": "puntuacion = 100\n# Acumular 15 puntos:\npuntuacion = _____ + 15\nprint(puntuacion)",
            "options": [
              {
                "text": "puntuacion",
                "correct": true
              },
              {
                "text": "100",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              },
              {
                "text": "puntosNuevos",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Observa el siguiente código:\n```python\npotencia = 50\npotencia = 100\npotencia = 0\n```\n¿Qué valor tiene 'potencia' en la memoria al concluir el programa?",
            "options": [
              {
                "text": "0 (las asignaciones previas de 50 y 100 fueron sobrescritas)",
                "correct": true
              },
              {
                "text": "150 (la computadora suma automáticamente todas las asignaciones)",
                "correct": false
              },
              {
                "text": "50 (porque la primera asignación es permanente e inmutable)",
                "correct": false
              },
              {
                "text": "Error de ejecución por asignar tres veces la misma variable",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea mentalmente el estado de las variables 'a' y 'b'. ¿Qué imprimirá la última línea?",
            "codeSnippet": "a = 5\nb = 10\na = b\nb = 20\nprint(a)",
            "options": [
              {
                "text": "10",
                "correct": true
              },
              {
                "text": "20",
                "correct": false
              },
              {
                "text": "5",
                "correct": false
              },
              {
                "text": "15",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Dependencias de Datos: Declaración vs Consumo",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué el orden de declaración y consumo de datos es una restricción absoluta en un lenguaje de programación?",
            "lessonText": "# La Causalidad en el Código: Declarar Antes de Usar\n\nEn el universo físico existe el principio de causalidad: la causa debe preceder al efecto. En ciencias de la computación ocurre exactamente lo mismo: **el dato debe nacer en memoria antes de que cualquier operación intente consumirlo**.\n\n### El Error de Referencia No Definida\nSi escribes:\n```python\narea = base * altura\nbase = 10\naltura = 5\n```\nCuando el Program Counter llega a la primera línea, le pide a la memoria RAM el valor de `base`. La RAM responde: *'No existe ninguna celda registrada con ese nombre'*. El compilador o intérprete colapsa inmediatamente lanzando un **NameError** o **Variable Not Defined**.\n\nLa computadora no revisa el archivo 'hacia abajo' para ver si planeas declarar `base` más adelante. Ejecuta estrictamente en el instante presente.\n\n### La Cadena de Dependencias\nCada línea de código que calcula un valor es una **productora** de datos, y cada línea que lo lee es una **consumidora**. Las productoras deben preceder siempre a las consumidoras en la línea de tiempo de la ejecución.\n\n**La Regla de Oro:**\nNinguna instrucción puede consumir un dato que no haya sido inicializado previamente en una línea superior.",
            "options": [
              {
                "text": "Porque la CPU ejecuta de forma secuencial presente y no puede leer valores de variables que aún no han sido inicializadas en memoria",
                "correct": true
              },
              {
                "text": "Porque las variables consumen espacio de disco duro antes de guardarse en la RAM",
                "correct": false
              },
              {
                "text": "Porque los lenguajes de programación solo permiten declarar variables al final del archivo",
                "correct": false
              },
              {
                "text": "Porque el procesador invierte los nombres de las variables si no están en orden alfabético",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Clasifica el rol de cada línea en una cadena de dependencias de cálculo balístico:",
            "options": [
              {
                "text": "distanciaMetros = 4.5|||Línea Productora: Inicializa el dato primario en memoria",
                "correct": true
              },
              {
                "text": "anguloRadianes = calcularAngulo(distanciaMetros)|||Línea Consumidora y Productora: Depende de distancia",
                "correct": true
              },
              {
                "text": "shooter.disparar(anguloRadianes)|||Línea Consumidora Final: Requiere el ángulo ya calculado",
                "correct": true
              },
              {
                "text": "print(anguloRadianes)|||Línea de Telemetría: Consume el resultado para diagnóstico",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Reordena las líneas para resolver la dependencia rota y calcular correctamente la velocidad media:",
            "options": [
              {
                "text": "distancia = 100.0",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "tiempo = 4.0",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "velocidadMedia = distancia / tiempo",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "print(velocidadMedia)",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la inicialización previa obligatoria para que la condición no arroje un error de variable no definida:",
            "codeSnippet": "# Inicializar antes de evaluar:\n_____ = False\n\nif sensorContacto:\n    frenar()",
            "options": [
              {
                "text": "sensorContacto",
                "correct": true
              },
              {
                "text": "frenar",
                "correct": false
              },
              {
                "text": "print",
                "correct": false
              },
              {
                "text": "True",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "¿En qué línea de este código se producirá un colapso de ejecución por violación de dependencias?\n```python\n# Linea 1: print('Calculando...')\n# Linea 2: resultado = factor * 2\n# Linea 3: factor = 5\n# Linea 4: print(resultado)\n```",
            "options": [
              {
                "text": "En la Línea 2 (intenta usar 'factor' antes de que exista en memoria)",
                "correct": true
              },
              {
                "text": "En la Línea 1 (no se puede imprimir texto antes de los números)",
                "correct": false
              },
              {
                "text": "En la Línea 3 (la variable 'factor' no puede llamarse así)",
                "correct": false
              },
              {
                "text": "En la Línea 4 (no hay ningún error, el código correrá perfecto)",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea la secuencia de cálculo de dependencias. ¿Cuál es el valor final impreso?",
            "codeSnippet": "ancho = 4\nlargo = 6\narea = ancho * largo\nperimetro = (ancho + largo) * 2\nprint(perimetro)",
            "options": [
              {
                "text": "20",
                "correct": true
              },
              {
                "text": "24",
                "correct": false
              },
              {
                "text": "10",
                "correct": false
              },
              {
                "text": "48",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Peligros de Secuencia en Robótica FRC",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Por qué un error de secuencia temporal en robótica de potencia puede destruir componentes mecánicos irreversibles?",
            "lessonText": "# Cuando el Software Toca el Mundo Físico\n\nEn el desarrollo web o de videojuegos, si una animación intenta reproducirse antes de que cargue el modelo 3D, el usuario solo ve una pantalla negra o un fallo visual momentáneo.\n\nEn un robot de competencia de 55 kg alimentado por una batería de 12V capaz de entregar más de 300 Amperios:\n- Si ordenas `moverBrazoAlMaximo()` **antes** de ejecutar `calibrarSensorDeLimite()`...\n- El motor brushless empujará el brazo articulado contra los topes mecánicos con un torque descomunal.\n- En menos de 200 milisegundos, los engranes planetarios de acero se barrerán, la cadena se romperá y el motor se quemará por corriente de estancamiento (*stall current*).\n\n### La Secuencia Sagrada de Hardware:\n1. **Verificación de Seguridad:** Parada de emergencia (E-Stop) desarmada y voltaje nominal seguro.\n2. **Lectura y Calibración:** Los encoders y sensores de límite reportan sus puntos cero.\n3. **Cálculo de Control:** El algoritmo valida que el movimiento deseado esté dentro de los límites geométricos.\n4. **Actuación:** Finalmente, y solo entonces, se despacha potencia a los controladores de motor.\n\n**La Regla de Oro:**\nEn robótica, el orden secuencial no es solo estilo de programación: es el protocolo que protege la integridad física de las personas y de la máquina.",
            "options": [
              {
                "text": "Porque aplicar potencia a actuadores antes de calibrar sensores de límite fuerza los mecanismos contra su estructura y destruye motores y transmisiones",
                "correct": true
              },
              {
                "text": "Porque los árbitros descalifican al equipo si las líneas de código tienen más de 40 caracteres",
                "correct": false
              },
              {
                "text": "Porque la electricidad estática de la pista borra el disco duro si el motor gira antes del sensor",
                "correct": false
              },
              {
                "text": "Porque los sensores láser pierden su calibración si detectan movimiento mecánico previo",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada violación de secuencia física con su consecuencia destructiva directa:",
            "options": [
              {
                "text": "Alimentar nota antes de que el shooter alcance 5000 RPM|||La nota se atora en el cañón y frena los motores",
                "correct": true
              },
              {
                "text": "Cerrar garra neumática antes de llegar a la pieza|||La garra golpea y expulsa la pieza fuera de alcance",
                "correct": true
              },
              {
                "text": "Acelerar tracción antes de calibrar el giroscopio|||El cálculo de orientación queda desfasado toda la partida",
                "correct": true
              },
              {
                "text": "Bajar elevador sin verificar interruptor de límite inferior|||El cable de acero se tensa de más y revienta la polea",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena la secuencia obligatoria de seguridad para accionar un mecanismo de alta potencia:",
            "options": [
              {
                "text": "verificarParadaEmergencia()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "calibrarSensoresDeLimite()",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "calcularPotenciaSuave()",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "despacharVoltajeAMotores()",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa la condición de seguridad para impedir el movimiento del motor si el límite físico fue alcanzado:",
            "codeSnippet": "limiteAlcanzado = sensorTope.estaPresionado()\n\nif (_____ == False):\n    motorBrazo.setPower(0.5)\nelse:\n    motorBrazo.setPower(0.0)",
            "options": [
              {
                "text": "limiteAlcanzado",
                "correct": true
              },
              {
                "text": "True",
                "correct": false
              },
              {
                "text": "motorBrazo",
                "correct": false
              },
              {
                "text": "0.5",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "Un robot enciende en el pit y de inmediato el brazo mecánico azota contra el piso antes de que los operadores tomen el control. ¿Cuál fue el error de secuencia en el código?",
            "options": [
              {
                "text": "Se colocó la instrucción de potencia del motor en el bloque de arranque inicial antes de esperar la orden de habilitación de la Driver Station",
                "correct": true
              },
              {
                "text": "La batería tenía demasiado voltaje acumulado y la gravedad atrajo el brazo al piso",
                "correct": false
              },
              {
                "text": "Los motores decidieron probar su potencia máxima por iniciativa propia",
                "correct": false
              },
              {
                "text": "El radio de comunicaciones transmitió interferencia que aceleró los transistores",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea la secuencia de seguridad. ¿Qué potencia final recibirá el motor?",
            "codeSnippet": "potencia = 0.8\nsensorObstaculo = True\n\nif sensorObstaculo:\n    potencia = 0.0\n\nprint(potencia)",
            "options": [
              {
                "text": "0.0",
                "correct": true
              },
              {
                "text": "0.8",
                "correct": false
              },
              {
                "text": "True",
                "correct": false
              },
              {
                "text": "potencia",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "title": "Desafío de Unidad: Inicialización Segura del Robot",
        "challenges": [
          {
            "type": "THEORY",
            "question": "¿Cómo orquesta un sistema operativo de robótica (como WPILib) la secuencia de arranque (Boot Sequence) de un robot?",
            "lessonText": "# La Orquestación del Encendido: Secuencia de Arranque\n\nAl encender el interruptor principal (Main Breaker) de 120A en un robot de competencia, se desata una coreografía crítica de inicialización que debe ocurrir en una secuencia milimétricamente estructurada:\n\n### Fases de la Secuencia de Arranque (Boot Sequence):\n1. **Arranque de Kernel y Red:** La roboRIO inicializa su sistema operativo Linux en tiempo real (RTOS) y levanta la interfaz Ethernet y el bus CAN a 1 Mbps.\n2. **Enumeración de Dispositivos CAN:** El código escanea y verifica que los 16+ controladores de motor (SparkMax, TalonFX, Falcon 500) y sensores (CANcoder, Pigeon) estén conectados y reportando estado 'Saludable'.\n3. **Inicialización de Sensores y Puntos Cero:** Se leen los encoders absolutos para conocer la postura geométrica real del brazo y de los módulos de tracción swerve.\n4. **Publicación de Telemetría (Heartbeat):** Se envían paquetes a la consola del piloto confirmando que el software está listo y a la espera de la señal de 'HABILITAR' (*Enable*).\n\nSi alteras este orden (por ejemplo, intentar leer un sensor antes de que el bus CAN termine de enumerar), el robot sufrirá un fallo catastrófico de software (*NullPointerException* o caída de proceso) justo al entrar a la cancha.\n\n**La Regla de Oro:**\nLa secuencia de inicialización prepara los cimientos del sistema; un error de orden aquí condena toda la partida antes de que comience el juego.",
            "options": [
              {
                "text": "Mediante un protocolo estricto por fases: inicializar bus de comunicaciones, verificar presencia de dispositivos, calibrar posturas cero y esperar la orden formal de habilitación",
                "correct": true
              },
              {
                "text": "Encendiendo todos los motores a máxima potencia al instante para comprobar si la batería soporta la carga",
                "correct": false
              },
              {
                "text": "Descargando el código completo desde internet cada vez que el robot se enciende en la cancha",
                "correct": false
              },
              {
                "text": "Permitiendo que cada sensor decida aleatoriamente cuándo reportar datos a la computadora",
                "correct": false
              }
            ]
          },
          {
            "type": "MATCHING",
            "question": "Relaciona cada fase del procedimiento de arranque con su comprobación obligatoria:",
            "options": [
              {
                "text": "Fase 1: Conexión Bus CAN|||Verificar que todos los controladores de motor respondan en el bus",
                "correct": true
              },
              {
                "text": "Fase 2: Lectura Encoders Absolutos|||Obtener la posición física real del mecanismo sin calibración manual",
                "correct": true
              },
              {
                "text": "Fase 3: Presión Neumática|||Confirmar que el circuito tiene al menos 60 PSI para operar solenoides",
                "correct": true
              },
              {
                "text": "Fase 4: Espera de Enable|||Mantener motores deshabilitados (0V) hasta la señal oficial de partida",
                "correct": true
              }
            ]
          },
          {
            "type": "CODE_ORDER",
            "question": "Ordena la secuencia estricta de arranque de software para el subsistema de chasis swerve:",
            "options": [
              {
                "text": "inicializarBusCAN()",
                "correct": true,
                "audioSrc": "1"
              },
              {
                "text": "leerPosicionAbsolutaEncoders()",
                "correct": true,
                "audioSrc": "2"
              },
              {
                "text": "sincronizarGiroscopioNavX()",
                "correct": true,
                "audioSrc": "3"
              },
              {
                "text": "publicarRobotListoEnDashboard()",
                "correct": true,
                "audioSrc": "4"
              }
            ]
          },
          {
            "type": "CODE_FILL",
            "question": "Completa el registro en consola para confirmar la inicialización correcta del subsistema de visión:",
            "codeSnippet": "limelightConectada = verificarCamaraVision()\n\nif limelightConectada:\n    _____('[BOOT] Sistema de Vision: OK')\nelse:\n    _____('[ALERTA] Camara de Vision no responde')",
            "options": [
              {
                "text": "print",
                "correct": true
              },
              {
                "text": "Print",
                "correct": false
              },
              {
                "text": "input",
                "correct": false
              },
              {
                "text": "return",
                "correct": false
              }
            ]
          },
          {
            "type": "SELECT",
            "question": "¿Qué peligro técnico existe si el código intenta encender el compresor de aire antes de verificar el sensor de presión neumática?",
            "options": [
              {
                "text": "Si el tanque ya estuviera a presión máxima (120 PSI), el compresor podría sobrepresurizar la tubería o disparar la válvula de alivio violentamente",
                "correct": true
              },
              {
                "text": "El compresor transformaría el aire en líquido inflamable de inmediato",
                "correct": false
              },
              {
                "text": "Los motores de tracción se invertirían automáticamente por falta de aire",
                "correct": false
              },
              {
                "text": "El compilador borraría el archivo ejecutable del robot por precaución",
                "correct": false
              }
            ]
          },
          {
            "type": "CODE_TEST",
            "question": "Rastrea la secuencia de arranque. ¿Cuántos subsistemas quedaron inicializados correctamente?",
            "codeSnippet": "subsistemasListos = 0\ncanBus_ok = True\ngyro_ok = True\nvision_ok = False\n\nif canBus_ok:\n    subsistemasListos = subsistemasListos + 1\n\nif gyro_ok:\n    subsistemasListos = subsistemasListos + 1\n\nif vision_ok:\n    subsistemasListos = subsistemasListos + 1\n\nprint(subsistemasListos)",
            "options": [
              {
                "text": "2",
                "correct": true
              },
              {
                "text": "3",
                "correct": false
              },
              {
                "text": "1",
                "correct": false
              },
              {
                "text": "0",
                "correct": false
              }
            ]
          }
        ]
      }
    ]
  }
];
