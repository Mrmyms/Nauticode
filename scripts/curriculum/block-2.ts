import { UnitDefinition } from "./types";

export const block2Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 4: VARIABLES & MEMORY
  // ==========================================
  {
    order: 4,
    slug: "unit-4",
    title: "Variables & Memory",
    description: "Espacios con nombre: Almacenar, consultar y mutar datos en memoria RAM",
    guidebookText: `# Guía de Estudio: Unit 4 - Variables & Memory

En ciencias de la computación, una **variable** es una abstracción fundamental: un espacio reservado en la memoria RAM identificado por una **etiqueta simbólica (nombre)** donde almacenamos un valor que puede mutar a lo largo del tiempo.

### Conceptos Clave:
1. **La Dirección Física vs el Nombre Simbólico:** En el silicio, cada celda de memoria tiene una dirección hexadecimal física (ej. \`0x7FFE...\`). Nosotros usamos nombres legibles (\`voltajeBateria\`) para que el compilador se encargue de mapear la memoria por nosotros.
2. **El Operador de Asignación (\`=\`):** No representa una igualdad matemática estática. Es una orden imperativa que calcula la expresión a la derecha y deposita el resultado en la celda de la izquierda.
3. **Mutabilidad:** La memoria RAM sobrescribe físicamente sus celdas. Si reasignas un valor, el estado anterior desaparece irreversiblemente.
4. **Patrones Acumuladores:** Construcciones del tipo \`total = total + incremento\`, indispensables en odometría de robots y cálculo de puntuación.`,
    lessons: [
      {
        title: "¿Qué es una Variable en Memoria RAM?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué ocurre en la arquitectura de la computadora cuando creamos una variable?",
            lessonText: "# El Mapa de la Memoria: Casilleros con Etiqueta\n\nImagina la memoria RAM de la roboRIO como un conjunto de millones de pequeños casilleros numerados. Cada casillero tiene una dirección física en formato hexadecimal (por ejemplo, `0x7FFF5FBFF8AC`).\n\nSería imposible para un ingeniero recordar direcciones físicas de memoria para cada lectura de sensores. Por eso nacieron las **variables**: un identificador simbólico en lenguaje humano que el compilador mapea automáticamente hacia una dirección física de memoria.\n\n### El Proceso de Guardar un Dato:\nCuando escribes:\n```python\nvoltajeBateria = 12.6\n```\nOcurren tres pasos fundamentales en el microprocesador:\n1. El sistema reserva una celda de memoria RAM del tamaño adecuado para el dato.\n2. Registra la etiqueta simbólica `voltajeBateria` en la tabla de símbolos asociada a esa dirección de memoria.\n3. Convierte el valor 12.6 a formato binario de punto flotante (estándar IEEE 754) y polariza las celdas de transistores microscópicos en ese casillero.\n\nCada vez que tu código mencione `voltajeBateria` en líneas posteriores, la CPU consultará instantáneamente el valor depositado en esa dirección física.\n\n**La Regla de Oro:**\nUna variable es una dirección física de memoria RAM asociada a un identificador simbólico legible; el nombre existe para el programador humano, la dirección binaria para la unidad de control de la CPU.",
            options: [
              { text: "Se reserva un espacio físico en la memoria RAM asociado a un nombre simbólico y se almacena el valor en formato binario", correct: true },
              { text: "Se crea un archivo de texto permanente en el almacenamiento secundario sin ocupar memoria volátil", correct: false },
              { text: "Se transmite una señal analógica a los actuadores mecánicos para memorizar el voltaje en las bobinas", correct: false },
              { text: "Se despliega el nombre del identificador en la consola sin consumir recursos del procesador", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada componente técnico de una variable con su función precisa en la arquitectura de computadoras:",
            options: [
              { text: "Identificador Simbólico|||Nombre legible que asigna el desarrollador para referenciar la celda", correct: true },
              { text: "Dirección de Memoria|||Ubicación física hexadecimal única en la memoria RAM", correct: true },
              { text: "Valor Binario|||Patrón de bits almacenado dentro de los transistores de la celda", correct: true },
              { text: "Operador de Asignación (=)|||Instrucción imperativa que transfiere un dato hacia la memoria", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el ciclo de vida de una variable de telemetría (Asignación inicial -> Formato de reporte -> Salida a consola -> Mensaje de control):",
            options: [
              { text: "distanciaAlObjetivo = 3.5", correct: true, audioSrc: "1" },
              { text: "mensaje = 'Distancia al target: ' + str(distanciaAlObjetivo)", correct: true, audioSrc: "2" },
              { text: "print(mensaje)", correct: true, audioSrc: "3" },
              { text: "print('Lectura completada con exito')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para almacenar la lectura angular de 90.0 grados en la variable correspondiente:",
            codeSnippet: "_____ = 90.0\nprint('Angulo del giroscopio: ' + str(anguloGiro))",
            options: [
              { text: "anguloGiro", correct: true },
              { text: "90.0", correct: false },
              { text: "print", correct: false },
              { text: "float", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué los lenguajes de programación de alto nivel utilizan nombres simbólicos en lugar de direcciones hexadecimales directas como 0x7FFE4B2A?",
            options: [
              { text: "Porque abstraen la complejidad del hardware, permitiendo que el compilador gestione la memoria de manera segura y legible", correct: true },
              { text: "Porque el procesador solo puede leer palabras del diccionario y no números hexadecimales", correct: false },
              { text: "Porque las direcciones hexadecimales consumen el doble de energía de la batería de la roboRIO", correct: false },
              { text: "Porque las direcciones físicas de memoria RAM se destruyen físicamente si se escriben directamente", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la variable de identificación del equipo. ¿Qué salida exacta generará la terminal?",
            codeSnippet: "equipo = 'Nautilus 4010'\nprint(equipo)",
            options: [
              { text: "Nautilus 4010", correct: true },
              { text: "equipo", correct: false },
              { text: "'equipo'", correct: false },
              { text: "4010", correct: false }
            ]
          }
        ]
      },
      {
        title: "Declaración e Inicialización",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la diferencia fundamental entre declarar e inicializar una variable en memoria?",
            lessonText: "# Las Dos Fases del Ciclo de Vida de una Variable\n\nEn la arquitectura del software existen dos momentos cruciales para cualquier dato:\n\n1. **Declaración:** Consiste en notificarle al compilador que reserve un espacio de memoria con un nombre y un tipo de dato específico (por ejemplo en C++ o Java: `double presionNeumatica;`). En este punto, la celda existe en la tabla de símbolos pero aún no contiene un dato deliberado.\n2. **Inicialización:** Consiste en depositar el primer valor formal dentro de esa celda reservada (`presionNeumatica = 115.0;`).\n\nEn lenguajes de tipado dinámico como Python, la declaración y la inicialización ocurren en la misma instrucción atómica en el momento exacto de la primera asignación.\n\n### El Peligro de la Basura en Memoria:\nSi un programa lee una variable declarada que nunca fue inicializada (un error común en C o C++ de bajo nivel), la CPU leerá cualquier residuo eléctrico de bits que haya quedado en esa celda de memoria antes de encender el programa. En robótica autónoma, leer basura puede traducirse en ordenar a los motores girar a máxima potencia de forma errática.\n\n**La Regla de Oro:**\nDeclarar reserva el casillero en la memoria RAM; inicializar deposita su primer estado conocido y seguro para evitar lecturas de datos basura.",
            options: [
              { text: "Declarar reserva el espacio y nombre en memoria; inicializar le asigna su primer valor conocido", correct: true },
              { text: "Declarar destruye la celda de memoria; inicializar la envía a través de la red local", correct: false },
              { text: "Declarar e inicializar son exactamente la misma operación sin ninguna distinción técnica", correct: false },
              { text: "Declarar solo es necesario para variables de texto e inicializar solo para números enteros", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada término del ciclo de vida con su definición formal en programación:",
            options: [
              { text: "Declaración|||Reserva formal de espacio en memoria y asignación de identificador y tipo", correct: true },
              { text: "Inicialización|||Primera asignación de un valor conocido y deliberado a la variable", correct: true },
              { text: "Valor No Inicializado|||Estado indefinido que puede contener datos residuales o basura en RAM", correct: true },
              { text: "robotInit()|||Método de arranque en FRC donde se declaran e inicializan todos los subsistemas", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia segura para inicializar y verificar las variables de posición de encoder antes del match:",
            options: [
              { text: "encoderIzquierdo = 0.0", correct: true, audioSrc: "1" },
              { text: "encoderDerecho = 0.0", correct: true, audioSrc: "2" },
              { text: "posicionPromedio = (encoderIzquierdo + encoderDerecho) / 2", correct: true, audioSrc: "3" },
              { text: "print('Subsistema de traccion calibrado a cero')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la inicialización segura de la variable para almacenar la velocidad inicial del shooter en cero RPM:",
            codeSnippet: "velocidadShooter = _____\nprint('Shooter inicializado en modo reposo: ' + str(velocidadShooter))",
            options: [
              { text: "0", correct: true },
              { text: "velocidadShooter", correct: false },
              { text: "'apagado'", correct: false },
              { text: "None", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué riesgo técnico ocurre si un algoritmo de control utiliza una variable declarada sin haberla inicializado?",
            options: [
              { text: "El sistema puede leer datos residuales (basura en RAM), generando cálculos erróneos o fallos críticos en actuadores", correct: true },
              { text: "El microprocesador reduce físicamente el voltaje de alimentación de los sensores", correct: false },
              { text: "La variable se inicializa por ley universal siempre en el valor 999", correct: false },
              { text: "El compilador borra automáticamente el disco de almacenamiento de la roboRIO", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Determina el valor exacto impreso por consola tras inicializar la variable de estado:",
            codeSnippet: "estadoAutonomo = 'ESPERANDO_SENAL'\nprint(estadoAutonomo)",
            options: [
              { text: "ESPERANDO_SENAL", correct: true },
              { text: "estadoAutonomo", correct: false },
              { text: "'ESPERANDO_SENAL'", correct: false },
              { text: "None", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador de Asignación (=)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué el operador `=` en programación es una asignación imperativa y no una igualdad algebraica?",
            lessonText: "# El Signo '=' es una Transferencia Destructiva\n\nEn matemáticas tradicionales de secundaria, la igualdad $A = B$ afirma que dos expresiones tienen el mismo valor simétrico. Si escribieras $x = x + 1$ en álgebra, un matemático te diría que es una contradicción imposible.\n\nEn computación imperativa, **`=` no significa comparación de igualdad; significa orden de almacenamiento**:\n\n1. **Evaluación de la Derecha (RHS):** La CPU primero evalúa y resuelve completamente todo lo que está a la derecha del signo igual.\n2. **Almacenamiento en la Izquierda (LHS):** Una vez obtenido el valor resultante en los registros de la ALU, lo deposita en la dirección de memoria de la variable situada a la izquierda, destruyendo cualquier dato previo en esa celda.\n\nPor esa razón, la instrucción:\n```python\npiezasAnotadas = piezasAnotadas + 1\n```\nEs perfectamente válida y elemental: toma el valor actual de `piezasAnotadas`, le suma 1 en la ALU, y reescribe el nuevo total en la celda de memoria `piezasAnotadas`.\n\n**La Regla de Oro:**\nEl operador '=' siempre evalúa primero la expresión derecha y luego deposita el resultado en la celda de memoria de la izquierda, sobrescribiendo su valor previo.",
            options: [
              { text: "Porque primero evalúa por completo la expresión derecha y luego guarda el resultado en la celda de memoria de la izquierda", correct: true },
              { text: "Porque verifica si el lado izquierdo y el derecho tienen la misma cantidad de letras", correct: false },
              { text: "Porque crea una ecuación algebraica que la CPU resuelve buscando el valor de x en el disco duro", correct: false },
              { text: "Porque solo funciona si ambas expresiones numéricas suman cero", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada componente de una expresión de asignación con su función en la CPU:",
            options: [
              { text: "Lado Derecho (RHS)|||Expresión que la unidad aritmético-lógica evalúa y calcula primero", correct: true },
              { text: "Lado Izquierdo (LHS)|||Dirección de memoria de destino que recibirá el dato resultante", correct: true },
              { text: "Operador de Asignación (=)|||Instrucción de transferencia destructiva hacia la celda de RAM", correct: true },
              { text: "Operador de Igualdad (==)|||Comparación lógica booleana que verifica si dos valores coinciden", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los pasos secuenciales que ejecuta el procesador al evaluar `posicion = posicion + avance`:",
            options: [
              { text: "1. Leer el valor actual de 'posicion' desde la memoria RAM", correct: true, audioSrc: "1" },
              { text: "2. Leer el valor de 'avance' desde su celda de memoria", correct: true, audioSrc: "2" },
              { text: "3. Sumar ambos operandos en el registro acumulador de la ALU", correct: true, audioSrc: "3" },
              { text: "4. Escribir el nuevo valor resultante en la celda de 'posicion'", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para incrementar en 1 el contador de notas recogidas:",
            codeSnippet: "notasRecogidas = notasRecogidas _____ 1\nprint('Total de notas: ' + str(notasRecogidas))",
            options: [
              { text: "+", correct: true },
              { text: "==", correct: false },
              { text: "=", correct: false },
              { text: "is", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué una instrucción como `10 = potenciaMotor` genera un error inmediato de sintaxis en el compilador?",
            options: [
              { text: "Porque el lado izquierdo de una asignación debe ser una ubicación de memoria modificable (lvalue) y no un valor literal constante", correct: true },
              { text: "Porque los números mayores a 9 no pueden participar en asignaciones", correct: false },
              { text: "Porque la palabra 'potenciaMotor' debe escribirse siempre en letras mayúsculas", correct: false },
              { text: "Porque el compilador exige que las variables comiencen con el símbolo de moneda", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor exacto imprimirá la consola tras evaluar la siguiente serie de asignaciones?",
            codeSnippet: "base = 10\naltura = 4\narea = (base * altura) / 2\nprint(area)",
            options: [
              { text: "20.0", correct: true },
              { text: "40", correct: false },
              { text: "20", correct: false },
              { text: "10.0", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reasignación y Mutabilidad",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué ocurre físicamente con el estado anterior en memoria RAM cuando una variable es reasignada?",
            lessonText: "# El Flujo del Tiempo y la Sobreescritura en RAM\n\nEl estado de un robot de competencia cambia decenas de veces por segundo:\n- En $t = 0\\text{ s}$, `velocidadChasis = 0.0` (robot inmóvil detrás de la línea de partida).\n- En $t = 2\\text{ s}$, `velocidadChasis = 3.8` (aceleración máxima hacia la nota central).\n- En $t = 5\\text{ s}$, `velocidadChasis = 0.0` (detención para disparar al Speaker).\n\nLas celdas de la memoria RAM están compuestas por transistores microscópicos. Cuando reasignas una variable escribiendo:\n```python\nvelocidadChasis = 3.8\n```\nLa CPU escribe un nuevo patrón de bits polarizando las mismas celdas de memoria asociadas a esa variable. **El dato anterior (0.0) es físicamente sobreescrito e irreversiblemente destruido**; no existe un historial automático en la RAM a menos que el programador declare explícitamente otra variable de respaldo.\n\nEsta capacidad de alterar el dato almacenado en una misma dirección a lo largo del tiempo se denomina **mutabilidad**.\n\n**La Regla de Oro:**\nReasignar una variable sobreescribe destructivamente la celda de memoria asignada; el dato previo desaparece para dar lugar al nuevo estado del sistema.",
            options: [
              { text: "El dato anterior es físicamente sobreescrito en la misma celda de RAM y deja de existir de forma irreversible", correct: true },
              { text: "El sistema operativo guarda una copia en disco duro de cada valor previo de forma automática", correct: false },
              { text: "La memoria RAM crea un nuevo casillero y conserva el casillero viejo con el mismo nombre", correct: false },
              { text: "La computadora suma automáticamente el valor anterior con el nuevo para no perder información", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto sobre el estado en memoria con su principio fundamental:",
            options: [
              { text: "Mutabilidad|||Propiedad de una celda de memoria cuyo contenido puede cambiar durante la ejecución", correct: true },
              { text: "Sobreescritura|||Reemplazo destructivo del patrón de bits en una dirección de memoria existente", correct: true },
              { text: "Inmutabilidad|||Garantía de diseño donde una referencia jamás puede alterar su valor asignado", correct: true },
              { text: "Bucle de Control (20ms)|||Ciclo periódico donde las variables de sensores se reasignan constantemente", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia de reasignación que modela la aceleración progresiva de un motor Falcon 500:",
            options: [
              { text: "potenciaMotor = 0.0", correct: true, audioSrc: "1" },
              { text: "potenciaMotor = 0.35", correct: true, audioSrc: "2" },
              { text: "potenciaMotor = 0.75", correct: true, audioSrc: "3" },
              { text: "potenciaMotor = 1.0", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la reasignación para actualizar la presión del sistema neumático tras 5 segundos de presurización:",
            codeSnippet: "presionPSI = 60\n// Ciclo de carga del compresor\npresionPSI = _____\nprint('Presion actual del sistema: ' + str(presionPSI))",
            options: [
              { text: "115", correct: true },
              { text: "presionPSI = 115", correct: false },
              { text: "'115 psi'", correct: false },
              { text: "presionPSI", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si una variable de telemetría actualiza su valor 50 veces por segundo durante un match de 150 segundos, ¿por qué la memoria RAM no se agota?",
            options: [
              { text: "Porque cada reasignación reutiliza y sobreescribe la misma celda de memoria previamente reservada, manteniendo constante el consumo", correct: true },
              { text: "Porque la roboRIO descarga la memoria RAM en un satélite al terminar cada segundo", correct: false },
              { text: "Porque las variables numéricas se comprimen a tamaño cero después del tercer cambio", correct: false },
              { text: "Porque el procesador solo recuerda la última letra del nombre de la variable", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor final exacto imprimirá la consola al completar la secuencia de reasignaciones?",
            codeSnippet: "contador = 1\ncontador = contador + 4\ncontador = 20\nprint(contador)",
            options: [
              { text: "20", correct: true },
              { text: "5", correct: false },
              { text: "25", correct: false },
              { text: "1", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Telemetría del Giroscopio",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo interactúan la declaración, inicialización y reasignación en la odometría de un chasis Swerve?",
            lessonText: "# Telemetría en Tiempo Real: NavX Gyro en Nautilus 4010\n\nEn un robot de competencia con tracción holonómica (Swerve Drive), el chasis necesita conocer su orientación angular respecto al campo (*field-oriented drive*) en cada milisegundo.\n\nPara lograrlo, el software del robot sigue este ciclo estricto de variables:\n\n1. **En `robotInit()`:** Se declara e inicializa la variable `anguloYaw = 0.0` asumiendo que el robot inicia mirando a la pared opuesta de la cancha.\n2. **En cada iteración del bucle autónomo (cada 20ms):** La IMU (Unidad de Medición Inercial) lee la velocidad angular de los giróscopos y el procesador **reasigna** la variable integrando el desplazamiento:\n```python\nanguloYaw = anguloYaw + lecturaGiro\n```\n3. **Si el piloto presiona el botón de recalibración:** El sistema ejecuta una reasignación directa `anguloYaw = 0.0` para corregir la deriva inercial (*drift*).\n\nEn este reto final de la Unidad 4, demostrarás tu dominio sobre la memoria, la mutabilidad y la actualización de variables en un sistema de ingeniería real.\n\n**La Regla de Oro:**\nLa telemetría de un sistema embebido es una red de variables mutables que sincronizan el estado interno de la CPU con las variables físicas del mundo real.",
            options: [
              { text: "Se declara e inicializa una referencia base que se reasigna periódicamente con las lecturas inerciales de los sensores", correct: true },
              { text: "Se crean 50 variables nuevas por segundo con nombres aleatorios para evitar colisiones en RAM", correct: false },
              { text: "Se fija el ángulo en una constante inmutable que no puede modificarse aunque el robot gire físicamente", correct: false },
              { text: "Se borra la memoria del giroscopio cada vez que se lee su valor para ahorrar ancho de banda", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operación de código con su efecto físico en el sistema de navegación del robot:",
            options: [
              { text: "anguloYaw = 0.0|||Inicialización del marco de referencia en orientación frontal hacia la cancha", correct: true },
              { text: "anguloYaw = anguloYaw + 45.0|||Reasignación acumulativa que registra un giro hacia la derecha", correct: true },
              { text: "print(anguloYaw)|||Transmisión del valor actual de orientación a la Driver Station", correct: true },
              { text: "anguloYaw = 0.0 (Reset)|||Recalibración en caliente solicitada por el conductor para eliminar drift", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina de control de giro para orientar el chasis a 90 grados durante la fase de autónomo:",
            options: [
              { text: "rumboActual = 0.0", correct: true, audioSrc: "1" },
              { text: "rumboObjetivo = 90.0", correct: true, audioSrc: "2" },
              { text: "rumboActual = rumboActual + rumboObjetivo", correct: true, audioSrc: "3" },
              { text: "print('Maniobra de giro completada. Rumbo final: ' + str(rumboActual))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la instrucción para recalibrar a 0.0 grados la orientación del giroscopio tras presionar el botón de reinicio:",
            codeSnippet: "anguloNavX = 145.8\n// Conductor presiona boton de alineacion de campo\nanguloNavX = _____\nprint('Orientacion de campo restablecida')",
            options: [
              { text: "0.0", correct: true },
              { text: "145.8", correct: false },
              { text: "anguloNavX", correct: false },
              { text: "None", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué es indispensable que `anguloNavX` sea una variable de tipo numérico y no una cadena de texto en un robot FRC?",
            options: [
              { text: "Porque el controlador PID requiere realizar sustracciones y cálculos trigonométricos vectoriales de alta velocidad con ese valor", correct: true },
              { text: "Porque los cables de los motores solo transmiten números y rechazan caracteres alfabéticos", correct: false },
              { text: "Porque las cadenas de texto se borran instantáneamente si el chasis vibra mecánicamente", correct: false },
              { text: "Porque la memoria RAM no puede almacenar caracteres alfanuméricos bajo ninguna circunstancia", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la orientación angular del robot tras dos maniobras de ajuste consecutivas:",
            codeSnippet: "angulo = 0.0\nangulo = angulo + 45.0\nangulo = angulo - 15.0\nprint(angulo)",
            options: [
              { text: "30.0", correct: true },
              { text: "45.0", correct: false },
              { text: "60.0", correct: false },
              { text: "0.0", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 5: NAMING CONVENTIONS & CLEAN CODE
  // ==========================================
  {
    order: 5,
    slug: "unit-5",
    title: "Naming Conventions & Clean Code",
    description: "Buenas prácticas: Escribir código legible y profesional",
    guidebookText: `# Guía de Estudio: Unit 5 - Naming Conventions & Clean Code

Cualquier novato puede escribir código que una computadora entienda. Los verdaderos ingenieros escriben código que **otros humanos pueden entender y mantener**.

### Convenciones de Nombres:
1. **camelCase:** Primera palabra en minúscula, las siguientes con mayúscula (\`shooterSpeed\`, \`armAngle\`). Estándar en Java y C++.
2. **snake_case:** Palabras en minúsculas separadas por guión bajo (\`shooter_speed\`, \`arm_angle\`). Estándar en Python.
3. **UPPER_SNAKE_CASE:** Letras mayúsculas para **Constantes** (\`MAX_VELOCITY\`, \`SHOOTER_CAN_ID\`).

### Principios de Código Limpio:
- Nombres descriptivos y con propósito (adiós a variables como \`x\`, \`temp1\`, \`cosa\`).
- Comentarios explicativos: Explica el **POR QUÉ** de una decisión compleja, no lo obvio.`,
    lessons: [
      {
        title: "Nombres Descriptivos vs Nombres Crípticos",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué la claridad semántica en los identificadores es un pilar crítico en la ingeniería de software?",
            lessonText: "# El Dilema del Código Incomprensible: Legibilidad vs Brevedad\n\nEn ciencias de la computación existe una máxima universal: **el código se lee cientos de veces más de las que se escribe**. Cualquier programador novato puede escribir instrucciones breves usando letras individuales como `a`, `b` y `c` que la máquina ejecutará sin quejarse. Sin embargo, ese código se convierte en una trampa mortal cuando otro ser humano (o tú mismo dos semanas después) debe corregir un fallo crítico bajo presión.\n\n### El Costo Cognitivo de los Nombres Crípticos:\nImagina este bloque dentro del bucle de telemetría:\n```python\nv = 0.85\nb = 12.2\np = v * b\n```\n¿Qué representa `v`? ¿Es velocidad, voltaje o viscosidad? ¿Qué es `p`? ¿Presión, potencia o posición? Cada identificador ambiguo obliga al cerebro del programador a mantener una tabla de traducción mental activa, saturando la memoria de trabajo y provocando errores garrafales.\n\nAhora analiza la versión limpia:\n```python\nvelocidadCruceroMps = 0.85\nvoltajeBateriaVolts = 12.2\npotenciaEfectivaWatts = velocidadCruceroMps * voltajeBateriaVolts\n```\n\nEn los pits de competencia de FIRST Robotics, cuando restan 6 minutos para ingresar a la alianza de playoffs y el subsistema de disparo falla, un nombre autoexplicativo permite diagnosticar el problema en 15 segundos en vez de perder la semifinal buscando qué significaba una variable misteriosa.\n\n**La Regla de Oro:**\nEscribe identificadores pensando en el ingeniero que mantendrá tu código bajo presión; un nombre semánticamente preciso reduce la ambigüedad a cero y previene fallos catastróficos.",
            options: [
              { text: "Porque reduce la carga cognitiva del equipo, clarifica la intención técnica y acelera radicalmente el diagnóstico de fallas", correct: true },
              { text: "Porque el procesador ejecuta más rápido los identificadores largos que las letras individuales", correct: false },
              { text: "Porque los nombres largos comprimen físicamente el código en la memoria caché del chip", correct: false },
              { text: "Porque el estándar IEEE prohíbe el uso de identificadores de menos de cuatro caracteres", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada identificador críptico con su contraparte profesional y descriptiva:",
            options: [
              { text: "v|||targetVelocityMetersPerSecond", correct: true },
              { text: "ang|||chassisHeadingDegrees", correct: true },
              { text: "flag|||isShooterReadyToFire", correct: true },
              { text: "p|||proportionalGainConstant", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia de telemetría estructurada con nombres de alta claridad semántica:",
            options: [
              { text: "batteryVoltageVolts = 12.4", correct: true, audioSrc: "1" },
              { text: "intakeCurrentAmperes = 18.2", correct: true, audioSrc: "2" },
              { text: "systemTelemetryReport = 'Bateria: ' + str(batteryVoltageVolts) + 'V | Corriente: ' + str(intakeCurrentAmperes) + 'A'", correct: true, audioSrc: "3" },
              { text: "print(systemTelemetryReport)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación reemplazando el identificador ambiguo 'x' por un nombre semánticamente riguroso:",
            codeSnippet: "_____ = 1200\nprint('Velocidad del mecanismo en RPM: ' + str(elevatorSpeedRpm))",
            options: [
              { text: "elevatorSpeedRpm", correct: true },
              { text: "x", correct: false },
              { text: "variableTemporal", correct: false },
              { text: "cosaQueGira", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes identificadores comunica con mayor precisión matemática y física el objetivo de un mecanismo lanzador?",
            options: [
              { text: "flywheelTargetVelocityRpm (especifica el mecanismo, la métrica y la unidad física)", correct: true },
              { text: "v1 (extremadamente corto y ambiguo)", correct: false },
              { text: "motor_que_dispara_la_pieza_al_speaker_en_la_cancha_regional (excesivamente verboso e impráctico)", correct: false },
              { text: "shooterTemperature (indica temperatura cuando almacena velocidad)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea este bloque de telemetría limpia. ¿Qué imprimirá exactamente en consola?",
            codeSnippet: "autonomousDurationSeconds = 15\nprint('Tiempo de autonomo: ' + str(autonomousDurationSeconds) + 's')",
            options: [
              { text: "Tiempo de autonomo: 15s", correct: true },
              { text: "Tiempo de autonomo: autonomousDurationSeconds s", correct: false },
              { text: "Tiempo de autonomo: 15", correct: false },
              { text: "autonomousDurationSeconds", correct: false }
            ]
          }
        ]
      },
      {
        title: "Convenciones: camelCase y snake_case",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué función cumplen las convenciones sintácticas de capitalización como camelCase y snake_case?",
            lessonText: "# Estilos de Nomenclatura: La Gramática del Código\n\nLos analizadores sintácticos (*lexers/parsers*) de los compiladores interpretan los espacios en blanco como delimitadores estrictos que separan instrucciones o tokens. Por ello, escribir `velocidad maxima = 10` provoca un error de sintaxis inmediato (`SyntaxError: invalid syntax`).\n\nPara unir múltiples palabras en un único identificador continuo y legible, las comunidades de ingeniería establecieron estándares tipográficos universales:\n\n1. **camelCase:** La primera palabra inicia en minúscula y cada palabra subsiguiente comienza con una mayúscula interna (ej. `velocidadMaximaMps`, `brazoArticuladoGrados`). Es la convención estándar en el ecosistema Java, C++, TypeScript y en la librería oficial de robótica WPILib.\n2. **snake_case:** Todas las palabras van en minúsculas unidas por un guion bajo (ej. `velocidad_maxima_mps`, `brazo_articulado_grados`). Es la convención obligatoria según el estándar PEP 8 en el ecosistema Python.\n\n### Reglas Sintácticas Universales:\n- Un identificador **NUNCA puede comenzar con un dígito numérico** (ej. `4010_robot` es ilegal porque el compilador lo confunde con un literal numérico).\n- No se permiten caracteres especiales ni símbolos de puntuación salvo el guion bajo (`_`).\n\n**La Regla de Oro:**\nRespeta la convención dominante de tu ecosistema: camelCase para Java/C++ y snake_case para Python; la consistencia tipográfica previene errores ortográficos y acelera la lectura colectiva.",
            options: [
              { text: "Permiten unir múltiples términos en un solo identificador legible respetando las reglas del analizador sintáctico", correct: true },
              { text: "Determinan cuántos megabytes de memoria RAM consumirá la variable durante la ejecución", correct: false },
              { text: "Indican a los motores físicos si deben girar en sentido horario o antihorario", correct: false },
              { text: "Son obligatorias únicamente cuando el código se transmite por fibra óptica", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica a qué estilo de nomenclatura pertenece cada identificador:",
            options: [
              { text: "targetAngleDegrees|||camelCase (estándar Java, C++ y WPILib)", correct: true },
              { text: "target_angle_degrees|||snake_case (estándar PEP 8 Python)", correct: true },
              { text: "TARGET_ANGLE_DEGREES|||SCREAMING_SNAKE_CASE (Constantes inmutables)", correct: true },
              { text: "targetangledegrees|||Sin convención (antipatrón difícil de leer)", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las variables de configuración de visión siguiendo rigurosamente el estándar camelCase:",
            options: [
              { text: "cameraHorizontalResolution = 1280", correct: true, audioSrc: "1" },
              { text: "cameraVerticalResolution = 720", correct: true, audioSrc: "2" },
              { text: "aprilTagTargetId = 7", correct: true, audioSrc: "3" },
              { text: "print('Camara configurada para AprilTag ID: ' + str(aprilTagTargetId))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la variable en estándar camelCase para definir el límite de corriente eléctrica del motor:",
            codeSnippet: "_____ = 40.0\nprint('Limite de corriente CAN: ' + str(maxCurrentLimitAmperes))",
            options: [
              { text: "maxCurrentLimitAmperes", correct: true },
              { text: "max_current_limit_amperes", correct: false },
              { text: "MAXCURRENTLIMITAMPERES", correct: false },
              { text: "max current limit amperes", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué el nombre de variable `4010_robot_heading` es rechazado por los compiladores como un error de sintaxis?",
            options: [
              { text: "Porque las reglas léxicas prohíben que un identificador comience con un dígito para distinguirlo de literales numéricos", correct: true },
              { text: "Porque el número 4010 es una palabra clave reservada del sistema operativo Linux", correct: false },
              { text: "Porque los guiones bajos solo pueden utilizarse al final de una palabra", correct: false },
              { text: "Porque los nombres de variables deben tener exactamente 8 caracteres de longitud", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Determina la salida en consola del siguiente bloque escrito en snake_case idiomático:",
            codeSnippet: "robot_mass_kg = 54.5\nprint('Masa de competencia: ' + str(robot_mass_kg) + ' kg')",
            options: [
              { text: "Masa de competencia: 54.5 kg", correct: true },
              { text: "Masa de competencia: robot_mass_kg kg", correct: false },
              { text: "Masa de competencia: 54 kg", correct: false },
              { text: "Error de sintaxis por usar guiones bajos", correct: false }
            ]
          }
        ]
      },
      {
        title: "Constantes: Valores Sagrados",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué los valores inmutables del sistema deben aislarse como constantes simbólicas en lugar de números mágicos dispersos?",
            lessonText: "# El Antipatrón de los Números Mágicos y la Inmutabilidad\n\nEn robótica e ingeniería existen parámetros físicos que representan verdades inmutables del diseño mecánico y eléctrico:\n- El número de puerto CAN de un controlador SparkMax (`SHOOTER_CAN_ID = 5`).\n- La relación de reducción mecánica del chasis (`DRIVE_GEAR_RATIO = 6.75`).\n- La aceleración de la gravedad terrestre (`GRAVITY_METERS_PER_S2 = 9.80665`).\n\nSi un programador escribe el número literal `6.75` disperso en 20 funciones de cálculo cinemático diferentes, ese valor se conoce como un **Número Mágico (Magic Number)**: un valor huérfano de contexto semántico. Si el equipo de manufactura cambia el engrane del chasis por uno de `8.14` en los pits, habrá que buscar y reemplazar ese número en decenas de líneas de código, con el riesgo casi seguro de olvidar una y arruinar la odometría.\n\n### La Solución: Constantes Centralizadas\nPor convención universal en la industria del software, las constantes se escriben en **SCREAMING_SNAKE_CASE** (todas las letras en mayúsculas separadas por guiones bajos). Esto comunica visualmente a cualquier ingeniero: *'Este valor es sagrado e inmutable; no debe ser modificado en tiempo de ejecución'*.\n\nEn lenguajes como Java o C++, se refuerza con modificadores de inmutabilidad en tiempo de compilación (`final` o `const`).\n\n**La Regla de Oro:**\nCentraliza todos los parámetros físicos y de configuración como constantes en mayúsculas; una única fuente de verdad evita inconsistencias y facilita adaptaciones mecánicas inmediatas.",
            options: [
              { text: "Porque centralizan la verdad del sistema en un único punto y eliminan números mágicos dispersos e inconsistentes", correct: true },
              { text: "Porque el procesador solo puede leer números mayores a 100 si están escritos en letras mayúsculas", correct: false },
              { text: "Porque las constantes en mayúsculas consumen la mitad de energía de la batería de 12V", correct: false },
              { text: "Porque el compilador borra automáticamente las variables que no estén escritas en mayúsculas", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto arquitectónico con su propósito técnico formal:",
            options: [
              { text: "SCREAMING_SNAKE_CASE|||Convención tipográfica universal para constantes inmutables (ej. MAX_VELOCITY)", correct: true },
              { text: "Single Source of Truth|||Principio arquitectónico donde cada valor físico se define en un único lugar centralizado", correct: true },
              { text: "Magic Number|||Antipatrón consistente en números literales dispersos sin significado semántico visible", correct: true },
              { text: "const / final|||Modificadores que impiden la reasignación de una celda de memoria tras su inicialización", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la jerarquía arquitectónica desde la definición de constantes físicas hasta la orden de motor:",
            options: [
              { text: "GEAR_RATIO = 6.75", correct: true, audioSrc: "1" },
              { text: "wheelRpm = 450.0", correct: true, audioSrc: "2" },
              { text: "motorTargetRpm = wheelRpm * GEAR_RATIO", correct: true, audioSrc: "3" },
              { text: "print('Velocidad comandada al motor: ' + str(motorTargetRpm))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la declaración de la constante inmutable para el ID de bus CAN del motor principal:",
            codeSnippet: "_____ = 12\nprint('Iniciando TalonFX en puerto CAN: ' + str(DRIVE_MOTOR_CAN_ID))",
            options: [
              { text: "DRIVE_MOTOR_CAN_ID", correct: true },
              { text: "drive_motor_can_id", correct: false },
              { text: "DriveMotorCanId", correct: false },
              { text: "can_id", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes identificadores cumple rigurosamente el estándar de nomenclatura para una constante inmutable?",
            options: [
              { text: "MAX_ALLOWABLE_VOLTAGE", correct: true },
              { text: "maxAllowableVoltage", correct: false },
              { text: "max_allowable_voltage", correct: false },
              { text: "max-allowable-voltage", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea el cálculo cinemático basado en constantes de diseño. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "WHEEL_RADIUS_METERS = 0.05\nPI = 3.1416\nCIRCUMFERENCE = 2 * PI * WHEEL_RADIUS_METERS\nprint(round(CIRCUMFERENCE, 4))",
            options: [
              { text: "0.3142", correct: true },
              { text: "0.6283", correct: false },
              { text: "3.1416", correct: false },
              { text: "0.05", correct: false }
            ]
          }
        ]
      },
      {
        title: "Comentarios: Escribiendo para Humanos",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es el propósito fundamental de los comentarios en el código y qué información técnica deben comunicar?",
            lessonText: "# El Código como Medio de Comunicación: Explicar el 'Por Qué'\n\nUn **comentario** es una porción de texto intercalada en el código fuente que el compilador y el intérprete **descartan e ignoran por completo** durante la fase de análisis léxico. Los comentarios no ocupan espacio en la memoria binaria del ejecutable ni ralentizan la CPU.\n\nSu destinatario exclusivo son los seres humanos: tus compañeros de equipo y tu yo del futuro.\n\n### Comentarios Valiosos vs Comentarios Basura:\n- **Comentario Redundante (Antipatrón):** Simplemente parafrasea lo que la sintaxis ya dice de forma obvia:\n```python\nx = x + 1 # Suma uno a x (¡Completamente inútil!)\n```\n- **Comentario de Alto Valor Técnico:** Explica la justificación física, el modelo matemático, la restricción de seguridad o la razón de un ajuste no intuitivo:\n```python\n# Reduccion al 85% de potencia para compensar la friccion de la alfombra nueva en playoffs\npotenciaTraccion = potenciaCalculada * 0.85\n```\n\n### Sintaxis según el Lenguaje:\n- En Python: se utiliza el símbolo `#` para comentarios de línea.\n- En Java, C++ y JavaScript: se utiliza `//` para una línea y `/* ... */` para bloques multilínea.\n\n**La Regla de Oro:**\nUsa comentarios para explicar el POR QUÉ de una decisión arquitectónica o física, nunca para redundar en el QUÉ hace la sintaxis evidente.",
            options: [
              { text: "Explicar el razonamiento de diseño y las restricciones físicas detrás de una decisión no obvia para otros humanos", correct: true },
              { text: "Transmitir señales de depuración en tiempo real hacia los actuadores mecánicos del chasis", correct: false },
              { text: "Aumentar artificialmente la cantidad de líneas de código para impresionar a los jueces de FIRST", correct: false },
              { text: "Instruir al microprocesador sobre qué variables debe ignorar cuando la batería baje de 10V", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona la sintaxis de comentarios con su entorno técnico correspondiente:",
            options: [
              { text: "# Comentario de línea|||Python y Bash", correct: true },
              { text: "// Comentario de línea|||Java, C++, C# y JavaScript", correct: true },
              { text: "/* Bloque multilínea */|||Java, C++, C y CSS", correct: true },
              { text: "Ignorado en compilación|||Todos los comentarios en cualquier lenguaje", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena este bloque estructurando la justificación física previa y el cálculo subsiguiente:",
            options: [
              { text: "# Umbral de seguridad: Desactivar motor si la corriente supera 35A por mas de 1.5s", correct: true, audioSrc: "1" },
              { text: "MAX_SAFE_CURRENT_AMPS = 35.0", correct: true, audioSrc: "2" },
              { text: "currentSensorReading = 38.5", correct: true, audioSrc: "3" },
              { text: "print('Alerta de seguridad: Corriente por encima del umbral seguro')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el comentario idiomático de Python para documentar el factor de fricción del reductor:",
            codeSnippet: "_____ Compensacion empirica por holgura mecanica en la caja de engranes\ngearboxEfficiencyRatio = 0.94\nprint(gearboxEfficiencyRatio)",
            options: [
              { text: "#", correct: true },
              { text: "//", correct: false },
              { text: "/*", correct: false },
              { text: "<!--", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes ejemplos constituye un comentario de alto valor en un sistema de ingeniería?",
            options: [
              { text: "# Reduccion a 0.88 para compensar caida de voltaje durante la aceleracion simultanea del chasis", correct: true },
              { text: "# x = 5 (aqui la variable x vale cinco)", correct: false },
              { text: "# Este comentario lo escribo porque el lider de software me dijo que comentara todo", correct: false },
              { text: "# print('hola') muestra hola en la pantalla de la consola", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué salida exacta producirá la consola considerando las líneas activas y las líneas comentadas?",
            codeSnippet: "targetHeading = 0.0\n# targetHeading = 180.0\ntargetHeading = 90.0\n# print(targetHeading)\nprint(targetHeading)",
            options: [
              { text: "90.0", correct: true },
              { text: "180.0", correct: false },
              { text: "0.0", correct: false },
              { text: "targetHeading", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Refactor en los Pits",
        challenges: [
          {
            type: "THEORY",
            question: "¿En qué consiste la técnica de refactorización y por qué es una disciplina esencial antes de las finales?",
            lessonText: "# Refactorización: Pagando la Deuda Técnica Bajo Presión\n\nEn el fragor de la competencia, cuando el equipo de robótica desarrolla un parche apresurado para que el elevador funcione entre partidos de clasificación, es común incurrir en **Deuda Técnica**: variables nombradas con letras sueltas (`h`, `t1`), números mágicos dispersos (`1.25`, `0.4`) y falta de consistencia.\n\nLa **Refactorización (Refactoring)** es el proceso disciplinado de reestructurar el código existente para mejorar su legibilidad, modularidad y mantenibilidad **sin alterar en absoluto su comportamiento funcional externo**.\n\n### Pasos Fundamentales del Refactor en los Pits:\n1. Sustituir nombres crípticos por identificadores semánticos autoexplicativos (`h` -> `currentElevatorHeightMeters`).\n2. Extraer números mágicos hacia constantes inmutables en `SCREAMING_SNAKE_CASE` (`MAX_ELEVATOR_HEIGHT_METERS = 1.25`).\n3. Eliminar código muerto o comentado obsoleto que genere confusión.\n4. Comprobar que la salida y los límites de seguridad sigan operando de forma idéntica.\n\nEn este reto final de la Unidad 5, aplicarás tus habilidades de refactorización profesional para convertir un script desordenado en una pieza de ingeniería sólida.\n\n**La Regla de Oro:**\nRefactorizar es transformar código funcional pero oscuro en código limpio, legible y robusto sin alterar su comportamiento externo.",
            options: [
              { text: "Reestructurar el código para maximizar legibilidad y mantenimiento sin modificar su comportamiento externo", correct: true },
              { text: "Reescribir todo el software del robot desde cero cambiando los algoritmos matemáticos", correct: false },
              { text: "Desactivar todos los límites de software de los motores para ganar aceleración", correct: false },
              { text: "Borrar los nombres de las variables para que el archivo pese menos kilobytes", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada término de calidad de software con su significado técnico formal:",
            options: [
              { text: "Refactorización|||Mejora de la estructura y legibilidad interna del código sin alterar su comportamiento", correct: true },
              { text: "Deuda Técnica|||Costo futuro de retrabajo provocado por escribir código rápido pero desordenado", correct: true },
              { text: "Self-Documenting Code|||Código tan claro en sus nombres y estructura que es intuitivo sin exceso de notas", correct: true },
              { text: "Dead Code|||Líneas comentadas o variables obsoletas que ya no participan en la ejecución", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el flujo de refactorización limpia de un módulo de control de elevador (Constantes -> Estado -> Acciones):",
            options: [
              { text: "MAX_ELEVATOR_HEIGHT_METERS = 1.25", correct: true, audioSrc: "1" },
              { text: "currentElevatorHeightMeters = 0.0", correct: true, audioSrc: "2" },
              { text: "currentElevatorHeightMeters = 0.85", correct: true, audioSrc: "3" },
              { text: "print('Altura actual del elevador: ' + str(currentElevatorHeightMeters) + ' m')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la refactorización sustituyendo el número mágico literal por la constante declarada:",
            codeSnippet: "TARGET_SHOOTER_RPM = 4500\n// Asignacion refactorizada con constante simbolica\nactualShooterRpm = _____\nprint('Shooter calibrado a: ' + str(actualShooterRpm) + ' RPM')",
            options: [
              { text: "TARGET_SHOOTER_RPM", correct: true },
              { text: "4500", correct: false },
              { text: "actualShooterRpm", correct: false },
              { text: "'4500 RPM'", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si necesitas almacenar la lectura de posición angular absoluta de la torreta en radianes, ¿cuál es el identificador óptimo?",
            options: [
              { text: "turretAbsoluteHeadingRadians (describe subsistema, tipo de medida y unidad angular)", correct: true },
              { text: "ang (demasiado vago y no especifica unidad)", correct: false },
              { text: "cosaQueGiraEnRadianesSobreElChasis (excesivamente informal y verboso)", correct: false },
              { text: "headingDegrees (especifica grados cuando el dato está en radianes)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la ejecución de este bloque refactorizado. ¿Qué imprimirá la consola?",
            codeSnippet: "AUTONOMOUS_SPEED_RATIO = 0.75\nBASE_VELOCITY_MPS = 4.0\neffectiveVelocityMps = BASE_VELOCITY_MPS * AUTONOMOUS_SPEED_RATIO\nprint('Velocidad efectiva: ' + str(effectiveVelocityMps) + ' m/s')",
            options: [
              { text: "Velocidad efectiva: 3.0 m/s", correct: true },
              { text: "Velocidad efectiva: 4.0 m/s", correct: false },
              { text: "Velocidad efectiva: 0.75 m/s", correct: false },
              { text: "Velocidad efectiva: 3 m/s", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 6: PRIMITIVE DATA TYPES
  // ==========================================
  {
    order: 6,
    slug: "unit-6",
    title: "Primitive Data Types",
    description: "Enteros, decimales, texto y booleanos: Cada dato en su lugar",
    guidebookText: `# Guía de Estudio: Unit 6 - Primitive Data Types

No toda la información es igual. Una computadora necesita saber exactamente qué **tipo de dato** almacena para reservar la cantidad correcta de memoria y saber qué operaciones están permitidas.

### Los 4 Tipos Primitivos Fundamentales:
1. **\`int\` (Integer / Entero):** Números sin decimales (\`-5\`, \`0\`, \`42\`). Ideal para contadores, ciclos y número de piezas recogidas.
2. **\`float\` / \`double\` (Punto Flotante):** Números con punto decimal (\`3.1416\`, \`0.75\`, \`-12.4\`). Ideal para voltajes, velocidades continuas, distancias y ángulos.
3. **\`string\` (Cadena de Texto):** Secuencia de caracteres rodeados de comillas (\`'Nautilus'\`, \`"Autónomo Listo"\`). Ideal para mensajes, nombres y telemetría.
4. **\`bool\` (Booleano):** Solo dos valores posibles: \`true\` o \`false\`. Ideal para interruptores, sensores de límite y condiciones lógicas.`,
    lessons: [
      {
        title: "Números Enteros (int)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se representan físicamente los números enteros en memoria y cuáles son sus propiedades computacionales?",
            lessonText: "# Aritmética Discreta: La Arquitectura del Entero (int)\n\nEn ciencias de la computación, un **Integer (int)** es un tipo de dato numérico que representa valores discretos sin componente fraccionaria ni punto decimal (positivo, negativo o cero).\n\n### Representación Binaria en Silicio:\nEn la arquitectura de la CPU (como el procesador ARM dual-core de la roboRIO), un entero de 32 bits con signo se almacena utilizando el sistema de **Complemento a Dos (Two's Complement)**:\n- 1 bit para el signo (0 para positivo, 1 para negativo).\n- 31 bits para la magnitud numérica.\n- Rango almacenable: desde $-2^{31} (-2,147,483,648)$ hasta $2^{31}-1 (2,147,483,647)$.\n\n### Ventajas Técnicas en Ingeniería:\n1. **Velocidad de Cómputo:** Las operaciones con enteros se resuelven en la ALU (Unidad Aritmético Lógica) en un único ciclo de reloj ($1$ instrucción de máquina), siendo más veloces y deterministas que el punto flotante.\n2. **Precisión Absoluta:** La suma de enteros jamás genera imprecisiones por redondeo. Si sumas $1 + 1$, el resultado es estrictamente $2$ a nivel de bits.\n\nEn un robot de competencia como Nautilus 4010, los enteros son indispensables para entidades contables y discretas: IDs de bus CAN, IDs de AprilTags de visión, ciclos de bucle y número de notas recogidas (nunca puedes recolectar media nota).\n\n**La Regla de Oro:**\nUsa 'int' para cuantificar entidades discretas y contables; las operaciones enteras son exactas a nivel de hardware y no sufren errores de aproximación decimal.",
            options: [
              { text: "Representa valores discretos sin decimales mediante complemento a dos, garantizando cálculos exactos en un único ciclo de reloj", correct: true },
              { text: "Almacena secuencias de texto alfanumérico que solo pueden contener dígitos del 0 al 9", correct: false },
              { text: "Representa valores continuos con punto decimal pero limitados a un tamaño de 8 bits", correct: false },
              { text: "Es una instrucción que reserva memoria RAM pero borra el valor cada 10 milisegundos", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto formal sobre números enteros con su definición técnica:",
            options: [
              { text: "32-bit Signed Integer|||Rango de -2,147,483,648 a 2,147,483,647 en 4 bytes de memoria RAM", correct: true },
              { text: "Complemento a Dos|||Esquema de codificación binaria en la ALU para enteros con signo", correct: true },
              { text: "Desbordamiento (Overflow)|||Error al superar el valor numérico máximo almacenable en los bits asignados", correct: true },
              { text: "División Entera (//)|||Operación que descarta la fracción decimal conservando solo el cociente", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la acumulación discreta de piezas de juego contabilizadas por los sensores del robot:",
            options: [
              { text: "notasAmplificador = 4", correct: true, audioSrc: "1" },
              { text: "notasSpeaker = 9", correct: true, audioSrc: "2" },
              { text: "totalNotasAlianza = notasAmplificador + notasSpeaker", correct: true, audioSrc: "3" },
              { text: "print('Total de notas validas contabilizadas: ' + str(totalNotasAlianza))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación con un entero riguroso que declare el ID de AprilTag central del Speaker:",
            codeSnippet: "aprilTagSpeakerId = _____\nprint('Rastreando AprilTag ID: ' + str(aprilTagSpeakerId))",
            options: [
              { text: "7", correct: true },
              { text: "7.0", correct: false },
              { text: "'7'", correct: false },
              { text: "None", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué en robótica de competencia los identificadores de bus CAN y los puertos de comunicación deben ser estrictamente de tipo entero?",
            options: [
              { text: "Porque el direccionamiento de hardware físico opera con direcciones numéricas discretas y únicas que no admiten valores fraccionarios", correct: true },
              { text: "Porque los cables de cobre solo transmiten corriente si el número es par", correct: false },
              { text: "Porque los tipos decimales dañan los circuitos de memoria flash de la roboRIO", correct: false },
              { text: "Porque la red Ethernet descarta paquetes con menos de diez caracteres de texto", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación de la división entera (//). ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "totalNotas = 15\ncapacidadContenedor = 4\nviajesCompletos = totalNotas // capacidadContenedor\nprint(viajesCompletos)",
            options: [
              { text: "3", correct: true },
              { text: "3.75", correct: false },
              { text: "4", correct: false },
              { text: "3.0", correct: false }
            ]
          }
        ]
      },
      {
        title: "Números Decimales (float / double)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo procesa la computadora los números de punto flotante (float/double) y qué consideraciones de precisión exige la robótica?",
            lessonText: "# El Estándar IEEE 754: La Precisión del Mundo Físico Continuo\n\nEn la física de un robot de competencia, las magnitudes reales no son discretas: el voltaje de la batería es `12.65 V`, la orientación angular es `89.94°`, la distancia ultrasónica al obstáculo es `1.82 m` y el comando de potencia a los motores varía continuamente entre `-1.0` y `1.0`.\n\nPara modelar magnitudes reales continuas se utiliza el tipo **float** (o **double** en Java/C++):\n\n### El Estándar Internacional IEEE 754:\nLa memoria RAM es finita, pero entre dos números reales existen infinitos decimales. La CPU almacena un flotante descomponiéndolo en tres campos binarios:\n1. **Signo:** 1 bit.\n2. **Exponente:** Determina la posición del punto decimal.\n3. **Mantisa (Significando):** Los bits que definen la precisión numérica.\n\n### La Imprecisión de Punto Flotante:\nDado que la computadora opera en base 2 (fracciones binarias como $1/2$, $1/4$, $1/8$), ciertas fracciones decimales cotidianas como `0.1` o `0.2` se convierten en números periódicos infinitos en binario, resultando en microimprecisiones inevitables (ej. `0.1 + 0.2 == 0.30000000000000004`). Por esta razón, **jamás debes comparar dos flotantes usando igualdad estricta (`==`)**; siempre se compara evaluando si la diferencia absoluta es menor que un margen de tolerancia épsilon ($|a - b| < \\epsilon$).\n\n**La Regla de Oro:**\nUsa 'float/double' para variables físicas continuas; compara siempre con márgenes de tolerancia (\epsilon) y nunca con igualdad estricta (==).",
            options: [
              { text: "Representa magnitudes continuas mediante el estándar IEEE 754 dividiendo bits en signo, exponente y mantisa, requiriendo comparación por tolerancia épsilon", correct: true },
              { text: "Es un número entero que flota temporalmente en la memoria antes de ser destruido por el recolector de basura", correct: false },
              { text: "Permite almacenar texto alfanumérico siempre y cuando las letras sean números decimales", correct: false },
              { text: "Garantiza precisión matemática infinita a nivel de hardware sin ningún tipo de error de redondeo binario", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada componente del estándar de punto flotante con su rol computacional:",
            options: [
              { text: "Estándar IEEE 754|||Norma binaria internacional para representación de números reales en hardware", correct: true },
              { text: "Float (32 bits)|||Precisión simple adecuada para telemetría general y porcentaje de motor", correct: true },
              { text: "Double (64 bits)|||Doble precisión requerida para cinemática swerve y navegación odometría", correct: true },
              { text: "Margen Epsilon (\epsilon)|||Umbral de tolerancia mínima utilizado para comparar dos flotantes con seguridad", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el cálculo cinemático de velocidad lineal a partir de magnitudes continuas en punto flotante:",
            options: [
              { text: "radioRuedaMetros = 0.0508", correct: true, audioSrc: "1" },
              { text: "velocidadAngularRads = 42.5", correct: true, audioSrc: "2" },
              { text: "velocidadLinealMps = radioRuedaMetros * velocidadAngularRads", correct: true, audioSrc: "3" },
              { text: "print('Velocidad calculada: ' + str(round(velocidadLinealMps, 2)) + ' m/s')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación del ciclo de trabajo de motor fijando una potencia continua de avance al 75%:",
            codeSnippet: "potenciaMotorAvance = _____\nprint('Ciclo de trabajo PWM: ' + str(potenciaMotorAvance))",
            options: [
              { text: "0.75", correct: true },
              { text: "75", correct: false },
              { text: "'0.75'", correct: false },
              { text: "3/4", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué en algoritmos de navegación autónoma es un error crítico evaluar una condición como `anguloActual == 90.0`?",
            options: [
              { text: "Porque microimprecisiones de redondeo binario del IEEE 754 pueden hacer que el giroscopio reporte 90.0000001, bloqueando el bucle indefinidamente", correct: true },
              { text: "Porque el operador '==' solo permite comparar números enteros negativos", correct: false },
              { text: "Porque la memoria RAM borra el punto decimal después de la primera lectura", correct: false },
              { text: "Porque el compilador convierte automáticamente el número 90.0 en cero al entrar a un condicional", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la caída de tensión bajo carga. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "voltajeInicial = 12.0\ncaidaTension = 1.25\nvoltajeCarga = voltajeInicial - caidaTension\nprint(voltajeCarga)",
            options: [
              { text: "10.75", correct: true },
              { text: "10.7", correct: false },
              { text: "11.25", correct: false },
              { text: "10.0", correct: false }
            ]
          }
        ]
      },
      {
        title: "Cadenas de Texto (string)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué estructura tiene una cadena de texto (string) en memoria y en qué difiere radicalmente de los tipos numéricos?",
            lessonText: "# Memoria Secuencial: Arreglos de Caracteres y Codificación\n\nA diferencia de un entero o un flotante que representan valores matemáticos escalares atómicos en un registro de la CPU, un **String (cadena)** es una secuencia contigua y ordenada de caracteres codificados (bajo estándares como ASCII o UTF-8) almacenados en memoria.\n\n### El Rol de los Delimitadores:\nLos delimitadores de comillas (`'texto'` o `\"texto\"`) le comunican al analizador léxico que la secuencia interior debe interpretarse como texto literal y no como identificadores de variables o palabras clave del lenguaje:\n```python\nestadoRobot = 'AUTO_ALIGNING'\n```\nSi omitieras las comillas, el compilador buscaría una variable llamada `AUTO_ALIGNING` en la tabla de símbolos y fallaría con un `NameError`.\n\n### Sobrecarga del Operador '+' (Concatenación vs Suma):\nCuando aplicas el operador `+` entre cadenas, la CPU no suma cantidades algebraicas; ejecuta una **concatenación**: reserva un nuevo bloque de memoria y copia las secuencias de caracteres una tras otra. Por ello, `'40' + '10'` produce el texto `'4010'` y no el número `50`.\n\nEn Nautilus 4010, los strings son indispensables para generar registros de depuración (*event logs*), transmitir el estado de los subsistemas al Dashboard de la Driver Station y comunicar alertas al equipo de pilotos.\n\n**La Regla de Oro:**\nUn string es una secuencia de caracteres delimitada por comillas; sumar dos strings concatena su contenido textual y no realiza operaciones aritméticas.",
            options: [
              { text: "Es una secuencia de caracteres codificados en memoria delimitada por comillas donde el operador '+' ejecuta concatenación textual", correct: true },
              { text: "Es un número entero que puede almacenar letras si se le asigna un signo de interrogación", correct: false },
              { text: "Es una variable temporal que solo existe mientras el chasis del robot está en movimiento", correct: false },
              { text: "Es un bloque de memoria física que no admite espacios en blanco ni caracteres alfanuméricos", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto sobre cadenas de texto con su principio computacional:",
            options: [
              { text: "Concatenación (+)|||Unión secuencial de cadenas de texto en un único bloque de caracteres", correct: true },
              { text: "Delimitadores (' ' / \" \")|||Símbolos que informan al compilador que los caracteres son datos literales", correct: true },
              { text: "Conversión str()|||Función de casteo para traducir magnitudes numéricas a su representación textual", correct: true },
              { text: "Codificación UTF-8|||Estándar universal que asigna patrones binarios a caracteres de todo el mundo", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la construcción del reporte de estado para el panel de telemetría de la Driver Station:",
            options: [
              { text: "modoJuego = 'TELEOP'", correct: true, audioSrc: "1" },
              { text: "segundosRestantes = 45", correct: true, audioSrc: "2" },
              { text: "registro = '[' + modoJuego + '] Tiempo restante: ' + str(segundosRestantes) + 's'", correct: true, audioSrc: "3" },
              { text: "print(registro)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para registrar el nombre oficial del equipo como un string válido:",
            codeSnippet: "equipoRobotics = _____\nprint('Equipo oficial: ' + equipoRobotics)",
            options: [
              { text: "'Nautilus 4010'", correct: true },
              { text: "Nautilus 4010", correct: false },
              { text: "4010", correct: false },
              { text: "str(Nautilus)", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la diferencia técnica fundamental entre el valor entero `42` y la cadena de texto `'42'`?",
            options: [
              { text: "El entero 42 se codifica en binario para cálculo en la ALU; '42' es una secuencia de dos bytes con los caracteres ASCII '4' y '2'", correct: true },
              { text: "No existe ninguna diferencia interna; ambos consumen exactamente 1 bit en la memoria RAM", correct: false },
              { text: "El entero 42 solo funciona en microcontroladores de 8 bits y '42' en computadoras modernas", correct: false },
              { text: "El string '42' consume el triple de voltaje en el circuito de alimentación de la batería", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación de la concatenación textual versus suma matemática. ¿Qué imprimirá la consola?",
            codeSnippet: "prefijo = '40'\nsufijo = '10'\nprint(prefijo + sufijo)",
            options: [
              { text: "4010", correct: true },
              { text: "50", correct: false },
              { text: "'4010'", correct: false },
              { text: "Error de sintaxis", correct: false }
            ]
          }
        ]
      },
      {
        title: "Valores Booleanos (bool)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué representa el tipo booleano en la arquitectura de un procesador y cómo gobierna la toma de decisiones?",
            lessonText: "# El Bit Lógico: La Base del Control y las Decisiones\n\nNombrado en honor al matemático George Boole, el tipo **Boolean (bool)** es la unidad ontológica elemental de la computación. Solo puede adoptar uno de dos valores exclusivos:\n- **`True` (Verdadero):** Representado físicamente a nivel de hardware por un bit `1` o un nivel alto de voltaje lógico ($3.3\\text{ V}$ o $5\\text{ V}$).\n- **`False` (Falso):** Representado por un bit `0` o nivel de tierra ($0\\text{ V}$).\n\n### De la Comparación a la Bifurcación en la CPU:\nCuando escribes una expresión de comparación como `voltajeBateria < 10.5`, la ALU resta ambos números y actualiza el **Registro de Estado (Flags Register)** de la CPU. El resultado de esa comparación relacional es un valor booleano puro.\n\nEn lenguaje ensamblador, las instrucciones de bifurcación condicional (`jump if equal`, `branch if greater`) consultan directamente este bit booleano para decidir si el procesador continúa en la siguiente línea secuencial o salta a una rutina de emergencia.\n\nEn Nautilus 4010, la seguridad física de los mecanismos depende 100% de variables booleanas:\n- `isEmergencyStopPressed`: Si es `True`, frena de inmediato todos los actuadores.\n- `isArmAtLimitSwitch`: Si es `True`, corta la corriente del motor para evitar colisión mecánica con el chasis.\n\n**La Regla de Oro:**\nUn booleano almacena el valor de verdad (True o False) de una proposición; es la base para el control de flujo y la toma de decisiones condicionales.",
            options: [
              { text: "Almacena exclusivamente True o False como representación de proposiciones lógicas que gobiernan bifurcaciones en la CPU", correct: true },
              { text: "Representa valores enteros que oscilan dinámicamente entre -100 y 100", correct: false },
              { text: "Es un texto de longitud variable que se traduce a lenguaje natural para los jueces de la cancha", correct: false },
              { text: "Es un comando de bajo nivel que detiene el reloj interno del microprocesador", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada elemento de la lógica booleana con su función técnica:",
            options: [
              { text: "True (Verdadero)|||Estado lógico afirmativo representado por bit 1 o nivel de voltaje alto", correct: true },
              { text: "False (Falso)|||Estado lógico negativo representado por bit 0 o nivel de tierra (0V)", correct: true },
              { text: "Operador de Comparación (>=)|||Operación relacional que evalúa operandos y genera un valor booleano", correct: true },
              { text: "Flags Register (CPU)|||Registro de estado del procesador donde residen las banderas de condición", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia de validación lógica para autorizar el disparo del shooter en el autónomo:",
            options: [
              { text: "isShooterAtSpeed = True", correct: true, audioSrc: "1" },
              { text: "isChassisAligned = True", correct: true, audioSrc: "2" },
              { text: "isReadyToShoot = isShooterAtSpeed and isChassisAligned", correct: true, audioSrc: "3" },
              { text: "print('Autorizacion de disparo: ' + str(isReadyToShoot))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación booleana nativa para indicar que el sensor de proximidad detectó la pieza:",
            codeSnippet: "isNotePresent = _____\nprint('Sensor inductivo activado: ' + str(isNotePresent))",
            options: [
              { text: "True", correct: true },
              { text: "'True'", correct: false },
              { text: "1.0", correct: false },
              { text: "'activado'", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de las siguientes asignaciones comete un error de tipos al intentar modelar un estado de seguridad booleano?",
            options: [
              { text: "frenoActivo = 'true' (asigna una cadena de caracteres en lugar del tipo booleano nativo True)", correct: true },
              { text: "frenoActivo = True (asigna el literal booleano nativo correcto)", correct: false },
              { text: "frenoActivo = (presionPSI < 60) (asigna el resultado de una evaluación relacional)", correct: false },
              { text: "frenoActivo = False (asigna el literal booleano negativo nativo)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor imprimirá la consola tras evaluar la expresión relacional?",
            codeSnippet: "presionActualPSI = 120\npresionMinimaSegura = 90\nesPresionAdecuada = presionActualPSI >= presionMinimaSegura\nprint(esPresionAdecuada)",
            options: [
              { text: "True", correct: true },
              { text: "False", correct: false },
              { text: "120", correct: false },
              { text: "presionActualPSI", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Clasificación de Sensores",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo interactúan y se integran los 4 tipos primitivos fundamentales en un subsistema de telemetría de ingeniería?",
            lessonText: "# El Dashboard de Telemetría: Integración Heterogénea de Datos\n\nEn un robot de competencia como Nautilus 4010, el software debe coordinar simultáneamente decenas de señales físicas heterogéneas. Cada señal exige su tipo de dato primitivo óptimo para maximizar el rendimiento y la legibilidad:\n\n1. **`int`:** Variables discretas y contables (`teamNumber = 4010`, `notesScoredCount = 5`).\n2. **`float`:** Mediciones físicas continuas (`batteryVoltage = 12.45`, `gyroHeadingDeg = 89.45`).\n3. **`bool`:** Banderas de estado, finales de carrera y autorizaciones de seguridad (`isBmsHealthy = True`, `isTargetLocked = False`).\n4. **`string`:** Nombres de subsistemas, comandos de protocolo y mensajes textuales de estado (`matchMode = 'AUTONOMOUS_RUNNING'`).\n\n### El Desafío del Tipado Fuerte:\nEn lenguajes como Python, Java o C++, no puedes mezclar directamente tipos incompatibles sin una **conversión explícita (type casting)**. Intentar concatenar `'Voltaje: ' + 12.45` genera un error fatal en tiempo de ejecución (`TypeError`). Aprender a clasificar, operar y convertir tipos de datos con precisión milimétrica es la distinción entre un aficionado y un verdadero ingeniero de software embebido.\n\n**La Regla de Oro:**\nCada señal del mundo físico tiene su tipo de dato primitivo óptimo; respeta la naturaleza del dato y convierte tipos explícitamente para evitar fallos de ejecución.",
            options: [
              { text: "Asigna cada magnitud física a su tipo primitivo natural (int, float, bool, string) y aplica conversiones explícitas para comunicación segura", correct: true },
              { text: "Convierte todas las lecturas de los sensores a cadenas de texto para evitar usar la memoria RAM", correct: false },
              { text: "Obliga a que todos los motores lean valores booleanos y rechacen números decimales", correct: false },
              { text: "Utiliza números flotantes para los identificadores de hardware para ahorrar procesamiento", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cada dato del robot con su tipo primitivo correspondiente:",
            options: [
              { text: "CAN ID: 14|||int (Identificador de hardware discreto)", correct: true },
              { text: "Yaw Heading: 89.45|||float (Magnitud angular continua)", correct: true },
              { text: "Limit Switch: True|||bool (Estado binario de contacto)", correct: true },
              { text: "Alliance: 'RED_1'|||string (Identificador textual)", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la serialización limpia del paquete de telemetría hacia la Driver Station:",
            options: [
              { text: "teamNumber = 4010", correct: true, audioSrc: "1" },
              { text: "batteryVoltage = 12.45", correct: true, audioSrc: "2" },
              { text: "isBmsHealthy = True", correct: true, audioSrc: "3" },
              { text: "print('Team: ' + str(teamNumber) + ' | V: ' + str(batteryVoltage) + ' | OK: ' + str(isBmsHealthy))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la conversión explícita de tipos (type casting) para incorporar el número entero al reporte textual:",
            codeSnippet: "numeroEquipo = 4010\nmensaje = 'Robot de competencia: ' + _____(numeroEquipo)\nprint(mensaje)",
            options: [
              { text: "str", correct: true },
              { text: "int", correct: false },
              { text: "float", correct: false },
              { text: "bool", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué la instrucción `'Puntos: ' + 15` arroja un `TypeError` fatal en Python en lugar de imprimir 'Puntos: 15'?",
            options: [
              { text: "Porque Python es un lenguaje de tipado fuerte y no realiza coerción implícita automática entre texto y números", correct: true },
              { text: "Porque los números mayores a 10 no pueden combinarse con palabras en la consola", correct: false },
              { text: "Porque el operador '+' solo está reservado para multiplicaciones booleanas", correct: false },
              { text: "Porque la terminal de comandos solo acepta números pares", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea el procesamiento heterogéneo de datos sensoriales. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "anguloGiro = 45.8\ncontadorNotas = 3\nisAutoActive = True\nreporte = str(int(anguloGiro)) + '-' + str(contadorNotas) + '-' + str(isAutoActive)\nprint(reporte)",
            options: [
              { text: "45-3-True", correct: true },
              { text: "45.8-3-True", correct: false },
              { text: "48-True", correct: false },
              { text: "Error de tipos", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 7: ARITHMETIC OPERATORS
  // ==========================================
  {
    order: 7,
    slug: "unit-7",
    title: "Arithmetic Operators",
    description: "Cálculos matemáticos: Aritmética, residuo y precedencia",
    guidebookText: `# Guía de Estudio: Unit 7 - Arithmetic Operators

El procesador es ante todo una máquina de cálculo hiperveloz. Los **operadores aritméticos** nos permiten transformar y combinar datos numéricos.

### Operadores Básicos:
- Suma (\`+\`): \`5 + 3 = 8\`
- Resta (\`-\`): \`10 - 4 = 6\`
- Multiplicación (\`*\`): \`6 * 7 = 42\`
- División (\`/\`): \`15 / 2 = 7.5\`
- Módulo / Residuo (\`%\`): \`10 % 3 = 1\` (el sobrante de dividir 10 entre 3).

### Precedencia de Operadores (PEMDAS):
Al igual que en matemáticas, la multiplicación y división tienen prioridad sobre la suma y la resta. Usa paréntesis \`()\` para forzar el orden deseado: \`(2 + 3) * 4 = 20\`.`,
    lessons: [
      {
        title: "Operaciones Aritméticas Básicas",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo ejecuta la CPU las operaciones aritméticas elementales y qué precauciones numéricas exige la robótica?",
            lessonText: "# La Unidad Aritmético Lógica (ALU) y los Cuatro Operadores Básicos\n\nEn el corazón del microprocesador se encuentra la **ALU (Arithmetic Logic Unit)**: un circuito electrónico compuesto por transistores diseñados específicamente para realizar cómputos binarios a velocidades de miles de millones de operaciones por segundo.\n\n### Los Operadores Fundamentales:\n1. **Suma (`+`):** Integra magnitudes (ej. `puntosTotales = puntosAuto + puntosTeleop`).\n2. **Resta (`-`):** Calcula errores y diferenciales (ej. `errorPosicion = posicionTarget - posicionActual`).\n3. **Multiplicación (`*`):** Escala variables continuas mediante constantes o ganancias proporcionales (ej. `voltajeMotor = error * gananciaP`).\n4. **División (`/`):** Calcula razones continuas y promedios, produciendo siempre un resultado de punto flotante.\n\n### La Trampa Mortal de la División por Cero:\nEn matemáticas puras y en computación, dividir entre cero ($x / 0$) no produce un número válido; provoca una excepción de hardware fatal (`ZeroDivisionError` en Python o `ArithmeticException` en Java/C++). Si tu algoritmo de visión calcula la distancia como `distancia = constante / anchoPixeles` y la cámara pierde el objetivo haciendo que `anchoPixeles = 0`, el programa se detendrá de inmediato apagando el robot en plena cancha. Por ello, **siempre se debe validar que el divisor sea distinto de cero antes de dividir**.\n\n**La Regla de Oro:**\nLos operadores aritméticos transforman datos en la ALU; valida siempre los denominadores antes de dividir para impedir excepciones por división entre cero.",
            options: [
              { text: "Transforman datos mediante circuitos electrónicos en la ALU, requiriendo validar denominadores para prevenir interrupciones por división entre cero", correct: true },
              { text: "Modifican la frecuencia de reloj del procesador para igualar la velocidad de los motores físicos", correct: false },
              { text: "Solo funcionan con números enteros pares y arrojan un error si se utilizan decimales", correct: false },
              { text: "Son instrucciones que se ejecutan exclusivamente en la memoria de la tarjeta gráfica", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operador aritmético con su rol computacional preciso:",
            options: [
              { text: "Suma (+) y Resta (-)|||Cálculo lineal de acumulaciones y diferenciales de posición", correct: true },
              { text: "Multiplicación (*)|||Escalamiento continuo de potencias y ganancias de control", correct: true },
              { text: "División Flotante (/)|||Cálculo de razones y promedios produciendo valores con decimales", correct: true },
              { text: "División por Cero (x / 0)|||Error de interrupción fatal que congela la ejecución si no se previene", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el cálculo de potencia eléctrica instantánea consumida por el chasis (P = V * I):",
            options: [
              { text: "voltajeBateriaVolts = 12.2", correct: true, audioSrc: "1" },
              { text: "corrienteTotalAmperes = 45.0", correct: true, audioSrc: "2" },
              { text: "potenciaElectricaWatts = voltajeBateriaVolts * corrienteTotalAmperes", correct: true, audioSrc: "3" },
              { text: "print('Potencia instantanea consumida: ' + str(potenciaElectricaWatts) + ' W')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la operación aritmética para duplicar la velocidad angular de crucero del shooter:",
            codeSnippet: "velocidadBaseRpm = 2500\nvelocidadCruceroRpm = velocidadBaseRpm _____ 2\nprint('Velocidad comandada: ' + str(velocidadCruceroRpm))",
            options: [
              { text: "*", correct: true },
              { text: "+", correct: false },
              { text: "/", correct: false },
              { text: "%", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre a nivel de sistema si un algoritmo de cinemática intenta evaluar `distancia / deltaTiempo` cuando `deltaTiempo = 0.0`?",
            options: [
              { text: "La CPU dispara una interrupción fatal por división por cero (ZeroDivisionError), abortando el código del robot si no se previene", correct: true },
              { text: "El sistema operativo asume que el resultado es 0.0 y continúa ejecutando en silencio", correct: false },
              { text: "Los motores se aceleran al 100% de potencia por mandato de la roboRIO", correct: false },
              { text: "El valor se redondea automáticamente al número entero más cercano a 100", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación aritmética combinada. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "puntosAutonomo = 18\npuntosTeleop = 42\npenalizaciones = 6\npuntajeFinal = puntosAutonomo + puntosTeleop - penalizaciones\nprint(puntajeFinal)",
            options: [
              { text: "54", correct: true },
              { text: "60", correct: false },
              { text: "66", correct: false },
              { text: "48", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Residuo / Módulo (%)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la función matemática del operador módulo (`%`) y por qué es una herramienta clave en algoritmos de robótica?",
            lessonText: "# Aritmética Modular: El Reloj Numérico de la Computación\n\nEl operador **Módulo (`%`)** calcula el **residuo entero ($r$)** que resulta de la división euclidiana entre dos cantidades enteras ($a = b \\times q + r$). A diferencia de la división estándar, el módulo no devuelve el cociente ($q$), sino el sobrante exacto ($0 \\le r < |b|$).\n\n### Dos Aplicaciones Críticas en FIRST Robotics:\n\n1. **Normalización Angular de Orientación:**\nUn sensor de giro (como el giróscopo NavX o Pigeon 2.0) puede acumular rotaciones infinitas (`750.0°`). Para mapear esa rotación dentro del círculo trigonométrico estándar de 0 a 359 grados, aplicamos módulo 360:\n```python\nrumboCirculo = anguloAcumulado % 360\n# Si anguloAcumulado = 750, 750 % 360 devuelve 30 grados\n```\n\n2. **Temporización Periódica en Bucles Rápidos:**\nEl bucle de control de la roboRIO corre a $50\\text{ Hz}$ ($50$ ciclos por segundo). Si intentas imprimir telemetría en pantalla 50 veces por segundo, saturarás el bus de comunicación. Usando el módulo sobre el contador de ciclos:\n```python\nif ciclo % 50 == 0:\n    enviarTelemetriaPesada() # Se ejecuta exactamente una vez cada 50 ciclos (1 segundo)\n```\n\n**La Regla de Oro:**\nEl operador módulo (%) devuelve el residuo entero de una división; es la herramienta predilecta para normalizar rangos angulares y regular frecuencias de ejecución cíclica.",
            options: [
              { text: "Devuelve el residuo entero de una división, permitiendo normalizar ángulos en 360 grados y coordinar frecuencias cíclicas", correct: true },
              { text: "Calcula el porcentaje de descuento comercial de los componentes del robot", correct: false },
              { text: "Devuelve el cociente exacto descartando cualquier sobrante numérico", correct: false },
              { text: "Multiplica el valor por cien para convertir decimales en enteros", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada uso del operador módulo con su impacto algorítmico:",
            options: [
              { text: "angulo % 360|||Normalización angular que confina los giros al rango de 0 a 359 grados", correct: true },
              { text: "contador % 2 == 0|||Prueba condicional de paridad matemática (determina si es par o impar)", correct: true },
              { text: "ciclo % 50 == 0|||Temporizador que activa una tarea una vez cada 50 iteraciones (1 Hz)", correct: true },
              { text: "Residuo Cero (a % b == 0)|||Indica divisibilidad exacta entre ambos números", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina de normalización angular tras una serie de giros continuos del chasis:",
            options: [
              { text: "giroAcumuladoGrados = 765.0", correct: true, audioSrc: "1" },
              { text: "rumboNormalizado = giroAcumuladoGrados % 360.0", correct: true, audioSrc: "2" },
              { text: "reporte = 'Rumbo relativo en el circulo: ' + str(rumboNormalizado) + ' grados'", correct: true, audioSrc: "3" },
              { text: "print(reporte)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la condición para verificar si el número de match es par utilizando el operador residuo:",
            codeSnippet: "numeroMatch = 42\nesMatchPar = (numeroMatch _____ 2 == 0)\nprint('¿Match par? ' + str(esMatchPar))",
            options: [
              { text: "%", correct: true },
              { text: "/", correct: false },
              { text: "//", correct: false },
              { text: "==", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si evaluamos la expresión `19 % 4` en cualquier procesador, ¿cuál es el resultado matemático exacto?",
            options: [
              { text: "3 (porque 4 cabe 4 veces en 19 sumando 16, y restan exactamente 3 unidades)", correct: true },
              { text: "4.75 (porque calcula la división decimal continua entre 19 y 4)", correct: false },
              { text: "4 (porque solo toma el cociente entero)", correct: false },
              { text: "76 (porque multiplica ambos números)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la ejecución de esta normalización angular. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "gradosGiro = 450\nrumboNormalizado = gradosGiro % 360\nprint(rumboNormalizado)",
            options: [
              { text: "90", correct: true },
              { text: "450", correct: false },
              { text: "1.25", correct: false },
              { text: "0", correct: false }
            ]
          }
        ]
      },
      {
        title: "Precedencia de Operadores y Paréntesis",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo determina el compilador el orden de evaluación de expresiones matemáticas y por qué los paréntesis son obligatorios?",
            lessonText: "# Árboles Sintácticos y el Orden de Evaluación (PEMDAS)\n\nCuando una instrucción combina múltiples operadores aritméticos, el procesador no resuelve los cálculos secuencialmente de izquierda a derecha. Sigue las reglas formales de **precedencia de operadores** construyendo un árbol de sintaxis abstracta (AST):\n\n1. **Paréntesis `()`:** Máxima precedencia absoluta. Fuerzan a la CPU a evaluar la subexpresión interna antes de cualquier otra cosa.\n2. **Exponenciación (`**`):** Potencias y raíces.\n3. **Multiplicación (`*`), División (`/`) y Módulo (`%`):** Se resuelven antes que las sumas y restas.\n4. **Suma (`+`) y Resta (`-`):** Mínima prioridad aritmética.\n\n### El Peligro del Promedio en Odometría:\nImagina que deseas promediar la distancia de los encoders izquierdo y derecho para saber cuánto avanzó el robot:\n```python\n# Codigo con BUG GRAVE:\npromedio = encoderIzq + encoderDer / 2\n```\nDebido a la precedencia, la CPU primero calculará `encoderDer / 2` y luego le sumará `encoderIzq`, distorsionando por completo la cinemática del robot. La versión correcta **exige paréntesis explícitos**:\n```python\npromedio = (encoderIzq + encoderDer) / 2\n```\n\n**La Regla de Oro:**\nNunca confíes ciegamente en la precedencia implícita; usa paréntesis explícitos para forzar el orden matemático de evaluación y garantizar claridad cognitiva.",
            options: [
              { text: "Aplica la jerarquía formal (paréntesis > multiplicación/división > suma/resta) y requiere paréntesis explícitos para evitar cálculos deformados", correct: true },
              { text: "Calcula siempre de derecha a izquierda sin importar los símbolos matemáticos utilizados", correct: false },
              { text: "Evalúa primero los números más grandes y al final los números menores a 10", correct: false },
              { text: "El orden es aleatorio y depende del nivel de carga de la batería de 12V", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada nivel de precedencia con los operadores correspondientes:",
            options: [
              { text: "Paréntesis ()|||Nivel 1 (Máxima prioridad: fuerzan el orden de cálculo interno)", correct: true },
              { text: "Multiplicación, División y Módulo (*, /, %)|||Nivel 2 (Prioridad intermedia: se evalúan antes de sumas y restas)", correct: true },
              { text: "Suma y Resta (+, -)|||Nivel 3 (Prioridad básica: se resuelven al final)", correct: true },
              { text: "Árbol AST|||Estructura generada por el compilador para ordenar las operaciones", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los pasos secuenciales de evaluación que ejecuta la CPU al procesar `(10 + 20) * 3`:",
            options: [
              { text: "1. Detectar paréntesis prioritarios y resolver la suma interna: 10 + 20 = 30", correct: true, audioSrc: "1" },
              { text: "2. Multiplicar el resultado intermedio por el operando derecho: 30 * 3", correct: true, audioSrc: "2" },
              { text: "3. Obtener el valor definitivo resultante en el acumulador de la ALU: 90", correct: true, audioSrc: "3" },
              { text: "4. Asignar el resultado final a la variable de destino en memoria", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el cálculo del promedio de los sensores asegurando la precedencia correcta mediante paréntesis:",
            codeSnippet: "sensorA = 10\nsensorB = 20\npromedio = _____ / 2\nprint('Promedio calibrado: ' + str(promedio))",
            options: [
              { text: "(sensorA + sensorB)", correct: true },
              { text: "sensorA + sensorB", correct: false },
              { text: "(sensorA * sensorB)", correct: false },
              { text: "sensorA + (sensorB)", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué los desarrolladores profesionales utilizan paréntesis incluso cuando la precedencia natural ya daría el resultado deseado?",
            options: [
              { text: "Para explicitar la intención matemática a los demás ingenieros del equipo y prevenir errores durante refactorizaciones futuras", correct: true },
              { text: "Porque el procesador se bloquea si encuentra más de una multiplicación sin paréntesis", correct: false },
              { text: "Porque los paréntesis reducen a la mitad el tamaño del archivo ejecutable compilado", correct: false },
              { text: "Porque es un requisito impuesto por el protocolo de comunicación inalámbrica de la cancha", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación con precedencia de operadores. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "x = 10 + 5 * 2\nprint(x)",
            options: [
              { text: "20", correct: true },
              { text: "30", correct: false },
              { text: "100", correct: false },
              { text: "25", correct: false }
            ]
          }
        ]
      },
      {
        title: "Operadores Compuestos e Incremento",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué son los operadores de asignación compuesta (`+=`, `-=`, `*=`, `/=`) y cuál es su beneficio técnico en computación?",
            lessonText: "# Modificación en Sitio (In-Place) y Azúcar Sintáctico\n\nEn la programación de robótica en tiempo real, el patrón más común es actualizar una variable sumándole o restándole un incremento a su propio valor existente:\n```python\ncontadorNotas = contadorNotas + 1\n```\nEscribir el nombre del identificador dos veces genera código verboso y susceptible a errores tipográficos. Para resolver esto, los lenguajes crearon los **operadores de asignación compuesta**:\n- `a += b` equivale exactamente a `a = a + b`\n- `a -= b` equivale exactamente a `a = a - b`\n- `a *= b` equivale exactamente a `a = a * b`\n- `a /= b` equivale exactamente a `a = a / b`\n\n### Eficiencia en Bajo Nivel:\nEn lenguajes compilados de alto rendimiento como C++ o Java, una asignación compuesta le comunica directamente al optimizador del compilador que la operación se realice **in-place** sobre el mismo registro de memoria (`ADD [R_dest], R_src`), sin requerir variables temporales auxiliares.\n\nEn Nautilus 4010, los operadores compuestos son el estándar en los bucles de odometría e integradores PID:\n```python\nposicionTotalMetros += deltaAvanceMetros\nerrorIntegral += errorPosicion * tiempoDelta\n```\n\n**La Regla de Oro:**\nLos operadores compuestos (+=, -=) realizan modificaciones in-place sobre la misma celda de memoria; optimizan la legibilidad y eliminan redundancia en patrones acumuladores.",
            options: [
              { text: "Son atajos sintácticos que ejecutan modificaciones in-place sobre la misma variable, mejorando la legibilidad y optimizando registros en bajo nivel", correct: true },
              { text: "Son instrucciones especiales que solo se pueden utilizar cuando los números son mayores a mil", correct: false },
              { text: "Operadores que crean una nueva variable con un nombre aleatorio en cada ciclo de reloj", correct: false },
              { text: "Comandos que borran permanentemente los datos almacenados en la memoria flash de la roboRIO", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operador compuesto con su equivalencia imperativa formal:",
            options: [
              { text: "variable += incremento|||variable = variable + incremento", correct: true },
              { text: "variable -= decremento|||variable = variable - decremento", correct: true },
              { text: "variable *= factor|||variable = variable * factor", correct: true },
              { text: "Patrón Acumulador|||Estructura donde una variable integra cambios continuos en su valor", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la integración de distancia acumulada en tres tramos de trayectoria autónoma:",
            options: [
              { text: "distanciaTotalMetros = 0.0", correct: true, audioSrc: "1" },
              { text: "distanciaTotalMetros += 1.25", correct: true, audioSrc: "2" },
              { text: "distanciaTotalMetros += 2.15", correct: true, audioSrc: "3" },
              { text: "print('Distancia total integrada: ' + str(round(distanciaTotalMetros, 2)) + ' m')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la instrucción utilizando el operador compuesto para descontar 15 PSI de presión tras activar un pistón:",
            codeSnippet: "presionPSI = 115\npresionPSI _____ 15\nprint('Presion neumática restante: ' + str(presionPSI))",
            options: [
              { text: "-=", correct: true },
              { text: "=-", correct: false },
              { text: "- 15", correct: false },
              { text: "--", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿A cuál de las siguientes expresiones equivale formalmente la instrucción `velocidadMotor *= 1.1`?",
            options: [
              { text: "velocidadMotor = velocidadMotor * 1.1 (incrementa en un 10% la velocidad previa)", correct: true },
              { text: "velocidadMotor = 1.1 (fija la velocidad directamente en 1.1)", correct: false },
              { text: "velocidadMotor + 1.1 (calcula una suma sin almacenarla en memoria)", correct: false },
              { text: "1.1 = velocidadMotor (asigna la variable a un número literal)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la secuencia de mutación con operadores compuestos. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "totalPuntos = 5\ntotalPuntos += 10\ntotalPuntos *= 2\nprint(totalPuntos)",
            options: [
              { text: "30", correct: true },
              { text: "25", correct: false },
              { text: "15", correct: false },
              { text: "35", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Relación de Engranes y Reducciones",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se combinan los operadores aritméticos y la precedencia para modelar cinemáticamente el tren motriz de un robot FRC?",
            lessonText: "# Cinemática Aplicada: Gear Ratios en Nautilus 4010\n\nEn robótica de competencia, el software no opera en el vacío; interactúa directamente con sistemas mecánicos. Un motor brushless Falcon 500 o Kraken X60 gira a $6,000\\text{ RPM}$ en vacío, una velocidad angular excesiva que carece del torque necesario para mover un chasis de $55\\text{ kg}$.\n\nPor ello, el motor se conecta a una caja reductora (*gearbox*) con una **Relación de Reducción (Gear Ratio $G$)** de $6:1$:\n$$\\text{RPM}_{\\text{rueda}} = \\frac{\\text{RPM}_{\\text{motor}}}{G}$$\n$$\\text{RPM}_{\\text{rueda}} = \\frac{6000}{6} = 1000\\text{ RPM}$$\n\nPara calcular la velocidad lineal del robot sobre la alfombra, convertimos revoluciones por minuto a metros por segundo incorporando el radio de la rueda ($r$ en metros) y el factor de tiempo ($60\\text{ s}$):\n$$v = \\left(\\frac{\\text{RPM}_{\\text{rueda}}}{60}\\right) \\times (2 \\times \\pi \\times r)$$\n\nEn este reto final de la Unidad 7, demostrarás tu dominio de los operadores aritméticos, la precedencia con paréntesis y las divisiones escaladas modelando el comportamiento cinemático real del robot.\n\n**La Regla de Oro:**\nLas matemáticas son el puente que traduce comandos de software en fuerzas mecánicas reales; dominar los operadores aritméticos es la base de la ingeniería mecatrónica.",
            options: [
              { text: "Modelan la física del robot combinando divisiones de reducción angular y conversiones lineales con precedencia estricta", correct: true },
              { text: "Son fórmulas empíricas que se descartan en competencia porque los motores giran a velocidad constante fija", correct: false },
              { text: "Calculan exclusivamente el consumo de combustible diésel de los generadores de la arena", correct: false },
              { text: "Multiplican la velocidad de los motores por diez para que el robot levite sobre la cancha", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada magnitud física del tren motriz con su fórmula matemática correspondiente:",
            options: [
              { text: "Velocidad Angular Reducida|||rpmMotor / gearRatio", correct: true },
              { text: "Perímetro de Rueda|||2 * PI * radioRuedaMetros", correct: true },
              { text: "Revoluciones por Segundo|||rpmRueda / 60.0", correct: true },
              { text: "Velocidad Lineal (m/s)|||circunferencia * rps", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la cadena de cálculo cinemático desde las RPM del motor hasta la velocidad lineal de avance:",
            options: [
              { text: "GEAR_RATIO = 6.0", correct: true, audioSrc: "1" },
              { text: "wheelRpm = 6000.0 / GEAR_RATIO", correct: true, audioSrc: "2" },
              { text: "wheelRps = wheelRpm / 60.0", correct: true, audioSrc: "3" },
              { text: "linearVelocityMps = 2 * 3.1416 * 0.05 * wheelRps", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para calcular la velocidad reducida de la rueda dividiendo las RPM del motor entre el gear ratio:",
            codeSnippet: "rpmMotor = 6000\ngearRatio = 6\nrpmFinal = rpmMotor _____ gearRatio\nprint('RPM reducidas de la rueda: ' + str(rpmFinal))",
            options: [
              { text: "/", correct: true },
              { text: "*", correct: false },
              { text: "%", correct: false },
              { text: "+", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si un motor gira a 5400 RPM y pasa por una caja reductora de 9:1, ¿cuál es la velocidad resultante de la rueda?",
            options: [
              { text: "600.0 RPM (porque la caja reductora divide la velocidad angular entre la relación: 5400 / 9 = 600)", correct: true },
              { text: "48600.0 RPM (porque la caja multiplica la velocidad de entrada)", correct: false },
              { text: "5391.0 RPM (porque se le resta 9 al número de revoluciones)", correct: false },
              { text: "0.0 RPM (porque las reducciones mecánicas cancelan la rotación)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la cinemática de odometría de encoders. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "encoderIzquierdo = 400\nencoderDerecho = 600\npromedioTicks = (encoderIzquierdo + encoderDerecho) / 2\nfactorMetros = 0.01\ndistanciaTotal = promedioTicks * factorMetros\nprint(distanciaTotal)",
            options: [
              { text: "5.0", correct: true },
              { text: "500.0", correct: false },
              { text: "7.0", correct: false },
              { text: "500", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
