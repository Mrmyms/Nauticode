import { UnitDefinition } from "./types";

export const block5Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 14: FUNCTIONS I: REUSABLE CODE
  // ==========================================
  {
  "order": 14,
  "slug": "unit-14",
  "title": "Functions I: Reusable Code",
  "description": "Modularización: El principio DRY y cómo crear tus propios comandos",
  "guidebookText": "# Guía de Estudio: Unit 14 - Functions I: Reusable Code\n\nUna **función** es un bloque de código empaquetado con un nombre que realiza una tarea específica y que puedes **reutilizar** cuantas veces quieras sin reescribirlo.\n\n### El Principio DRY (Don't Repeat Yourself):\nEn ingeniería de software profesional, si copias y pegas el mismo bloque de código más de dos veces, estás cometiendo un grave error arquitectónico. Si encuentras un bug, tendrías que corregirlo en 10 lugares distintos. Con una función, solo lo corriges una vez.\n\n### Anatomía de una Función:\n1. **Definición (`def` / `void`):** Especifica el nombre de la función y las instrucciones que contiene.\n2. **Invocación / Llamada (`nombreFuncion()`):** Los paréntesis `()` le dicen a la CPU: *'¡Ejecuta este bloque ahora mismo!'*.\n3. **Scope (Ámbito):** Las variables creadas dentro de una función son **locales** y desaparecen cuando la función termina.",
  "lessons": [
    {
      "title": "El Principio DRY: No Te Repitas",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Por qué duplicar código genera fallos graves de sincronización y cómo lo resuelve el principio DRY?",
          "lessonText": "# Abstracción Procedimental y el Principio DRY\n\nEn la ingeniería de software profesional, el principio **DRY (Don't Repeat Yourself)** establece que cada pieza de lógica o conocimiento dentro de un sistema debe tener una representación única, no ambigua y autorizada. Copiar y pegar el mismo bloque de instrucciones en múltiples partes del programa genera **deuda técnica** crítica.\n\n```python\n# MALA PRACTICA: Duplicar lineas de configuracion en cada archivo\n# BUENA PRACTICA: Empaquetar en una funcion autorizada\ndef configurar_swerve_chasis():\n    fijar_limite_corriente(40)\n    invertir_motor_derecho(True)\n    calibrar_encoders_absolutos()\n```\n\nEn Nautilus 4010, la rutina de inicialización de los controladores SparkMax solía repetirse en Autonomous, Teleop y Test. Cuando el equipo mecánico cambió la relación de reducción de un engrane, los programadores actualizaron Autonomous pero olvidaron Teleop, causando que el robot se comportara erráticamente al cambiar de modo.\n\n**Regla de Oro: El principio DRY establece que cada pieza de conocimiento o lógica de control debe tener una representación única, no ambigua y autorizada en el sistema.**",
          "options": [
            {
              "text": "Empaquetando instrucciones repetitivas en una función única para centralizar modificaciones y prevenir inconsistencias",
              "correct": true
            },
            {
              "text": "Copiando y pegando el bloque tantas veces como sea posible para acelerar la velocidad del procesador",
              "correct": false
            },
            {
              "text": "Borrando los archivos de configuración para que el robot opere con valores aleatorios",
              "correct": false
            },
            {
              "text": "Desconectando los sensores ópticos para ahorrar espacio en la memoria flash",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de diseño de software con su definición técnica:",
          "options": [
            {
              "text": "Principio DRY|||Don't Repeat Yourself: regla de diseño que prohíbe duplicar bloques de lógica idénticos",
              "correct": true
            },
            {
              "text": "Abstracción procedimental|||Empaquetar instrucciones detalladas bajo un nombre descriptivo de alto nivel",
              "correct": true
            },
            {
              "text": "Deuda técnica|||Costo futuro de mantenimiento generado por copiar y pegar código sin modularizar",
              "correct": true
            },
            {
              "text": "Punto único de verdad|||Ubicación centralizada donde una modificación corrige el comportamiento en todo el sistema",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la definición e invocación de la configuración centralizada del chasis Swerve:",
          "options": [
            {
              "text": "def configurar_swerve_chasis():",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    fijar_limite_corriente(40)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    invertir_motor_derecho(True)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "configurar_swerve_chasis()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave en Python define una nueva función de procedimiento?",
          "codeSnippet": "# Empaquetar la rutina de preparacion en una funcion reutilizable\n___ preparar_lanzador():\n    alimentador.retraer()\n    flywheel.iniciar_rampa()",
          "options": [
            {
              "text": "def",
              "correct": true
            },
            {
              "text": "function",
              "correct": false
            },
            {
              "text": "proc",
              "correct": false
            },
            {
              "text": "routine",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Cuál de los siguientes riesgos críticos es consecuencia directa de violar el principio DRY copiando y pegando bloques de código?",
          "options": [
            {
              "text": "Inconsistencias y bugs latentes al corregir un parámetro en una copia pero olvidar actualizarlo en las demás copias",
              "correct": true
            },
            {
              "text": "La memoria ROM del controlador se borra de manera espontánea por exceso de caracteres",
              "correct": false
            },
            {
              "text": "Los motores eléctricos consumen el doble de corriente independientemente del voltaje aplicado",
              "correct": false
            },
            {
              "text": "El compilador desactiva automáticamente el recolector de basura de la máquina virtual",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántas veces se incrementó 'ejecuciones' al invocar la función dos veces consecutivas?",
          "codeSnippet": "ejecuciones = 0\ndef registrar_pulso():\n    global ejecuciones\n    ejecuciones = ejecuciones + 1\n\nregistrar_pulso()\nregistrar_pulso()\nprint(ejecuciones)",
          "options": [
            {
              "text": "2",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "4",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Definición e Invocación de Funciones",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuál es la diferencia técnica entre definir una función y llamarla en tiempo de ejecución?",
          "lessonText": "# Memoria de Código vs Pila de Ejecución\n\nEn la arquitectura de software, existen dos momentos claramente delimitados en el ciclo de una función:\n\n1. **Definición (`def` / `void`):** El compilador o intérprete almacena las instrucciones en el segmento de código de la memoria y asocia ese bloque al identificador simbólico de la función. **Definir la función NO ejecuta su código**.\n2. **Invocación o Llamada (`()`):** Cuando el Program Counter encuentra el identificador seguido de paréntesis, asigna un marco de pila (stack frame), transfiere la ejecución a la dirección de la función y, al concluir, regresa exactamente a la instrucción posterior a la llamada.\n\n```python\ndef disparar_nota():\n    solenoide_lanzador.activar()\n    print('Nota eyectada')\n\n# La funcion solo corre al escribir los parentesis ()\ndisparar_nota()\n```\n\nEn Nautilus 4010, escribir `def disparar_nota():` enseña a la roboRIO la secuencia de actuación neumática, pero los pistones solo se accionan cuando el hilo de control invoca la función tras recibir la pulsación del gatillo del piloto.\n\n**Regla de Oro: Definir una función únicamente almacena sus instrucciones en la memoria de código; para que la CPU ejecute ese bloque es indispensable invocarla utilizando su identificador seguido de paréntesis ().**",
          "options": [
            {
              "text": "Definir almacena el bloque de instrucciones en memoria; invocar con paréntesis transfiere la CPU para ejecutarlo",
              "correct": true
            },
            {
              "text": "Definir ejecuta el código de inmediato e invocar borra la función del sistema operativo",
              "correct": false
            },
            {
              "text": "Las funciones se ejecutan automáticamente cada vez que la computadora detecta una variable booleana",
              "correct": false
            },
            {
              "text": "No existe diferencia; en lenguajes modernos escribir el nombre sin paréntesis ejecuta el bloque",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto del ciclo de ejecución con su definición técnica:",
          "options": [
            {
              "text": "Definición de función|||Declaración de la firma y cuerpo de instrucciones asociadas a un identificador",
              "correct": true
            },
            {
              "text": "Invocación o llamada|||Instrucción con paréntesis () que transfiere el control a la función",
              "correct": true
            },
            {
              "text": "Puntero de instrucción|||Registro que salta a la dirección de memoria de la función al ser llamada",
              "correct": true
            },
            {
              "text": "Firma de función|||Nombre y especificación de parámetros que identifican a la rutina",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la definición previa y la posterior invocación de la calibración del sensor:",
          "options": [
            {
              "text": "def calibrar_giroscopio():",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    print('Giroscopio restablecido a cero')",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "print('Iniciando sistema...')",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "calibrar_giroscopio()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué caracteres deben agregarse al final del nombre de la función para invocarla?",
          "codeSnippet": "def activar_compresor():\n    rele_neumatico.encender()\n\n# Invocar la funcion para energizar el compresor\nactivar_compresor___",
          "options": [
            {
              "text": "()",
              "correct": true
            },
            {
              "text": "{}",
              "correct": false
            },
            {
              "text": "[]",
              "correct": false
            },
            {
              "text": "<>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué sucede si en el archivo principal se escribe únicamente el nombre de la función sin los paréntesis (por ejemplo, 'calibrar')?",
          "options": [
            {
              "text": "La función no se ejecuta; el intérprete solo evalúa la referencia al objeto de la función sin invocar su código",
              "correct": true
            },
            {
              "text": "La función se ejecuta a la mitad de su velocidad normal",
              "correct": false
            },
            {
              "text": "El procesador genera una excepción de desbordamiento de pila (stack overflow)",
              "correct": false
            },
            {
              "text": "La computadora reinicia el sistema operativo de inmediato",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué secuencia exacta de líneas mostrará la consola de telemetría?",
          "codeSnippet": "def log_evento():\n    print('EVENTO_OK')\n\nprint('INICIO')\nlog_evento()\nprint('FIN')",
          "options": [
            {
              "text": "INICIO\nEVENTO_OK\nFIN",
              "correct": true
            },
            {
              "text": "EVENTO_OK\nINICIO\nFIN",
              "correct": false
            },
            {
              "text": "INICIO\nFIN",
              "correct": false
            },
            {
              "text": "EVENTO_OK",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Scope de Variables: Local vs Global",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es el scope léxico de una variable y por qué las variables locales protegen la integridad de los subsistemas?",
          "lessonText": "# Alcance Léxico y Marcos de Pila (Stack Frames)\n\nEl **Scope (ámbito)** define la región del código donde un identificador en memoria es visible y válido:\n\n1. **Variables Locales:** Se crean dentro del marco de pila de una función. Solo existen durante la ejecución de esa función y su memoria se libera inmediatamente al retornar. Ninguna otra parte del código exterior puede modificarlas ni consultarlas.\n2. **Variables Globales:** Viven durante toda la ejecución del proceso en el segmento de datos. Cualquier módulo puede leerlas o alterarlas, lo que introduce acoplamiento destructivo y bugs impredecibles.\n\n```python\nvoltaje_bateria = 12.6     # Global\n\ndef verificar_presion():\n    presion_psi = 110.0    # Local: desaparece al terminar la funcion\n    print(presion_psi)\n```\n\nEn Nautilus 4010, mantener variables de sensores como locales garantiza que el módulo de visión no sobreescriba accidentalmente las lecturas de los encoders del chasis Swerve.\n\n**Regla de Oro: Las variables locales nacen y mueren dentro del marco de pila (stack frame) de su función; minimizar el uso de variables globales previene acoplamiento destructivo y efectos colaterales invisibles.**",
          "options": [
            {
              "text": "La región del programa donde una variable existe y es accesible; las locales aíslan la memoria previniendo colisiones de datos",
              "correct": true
            },
            {
              "text": "La distancia física de alcance de la antena de radio del chasis hacia los pits",
              "correct": false
            },
            {
              "text": "La resolución vertical de la cámara de visión expresada en píxeles cuadrados",
              "correct": false
            },
            {
              "text": "Un protocolo de comunicación serial exclusivo para transmisiones inalámbricas",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de memoria y alcance con su definición operativa:",
          "options": [
            {
              "text": "Variable local|||Identificador asignado dentro de una función cuyo ciclo de vida se limita a su ejecución",
              "correct": true
            },
            {
              "text": "Variable global|||Variable accesible y visible en cualquier parte del archivo de ejecución",
              "correct": true
            },
            {
              "text": "Stack Frame|||Marco de memoria en la pila asignado a una función durante su invocación",
              "correct": true
            },
            {
              "text": "Variable Shadowing|||Ocultamiento de una variable global por una variable local con el mismo identificador",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura que declara una variable global y una local dentro de la función:",
          "options": [
            {
              "text": "voltaje_sistema = 12.6",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "def verificar_bateria():",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    voltaje_local = 11.8",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    print(voltaje_local)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué término formal define el ámbito o región donde una variable es accesible?",
          "codeSnippet": "def medir_temperatura():\n    temp_celsius = 42.0\n    return temp_celsius\n\n# La variable 'temp_celsius' no existe fuera de la funcion debido a su _____ local",
          "options": [
            {
              "text": "scope",
              "correct": true
            },
            {
              "text": "stack",
              "correct": false
            },
            {
              "text": "buffer",
              "correct": false
            },
            {
              "text": "pointer",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué en arquitectura de software profesional se desaconseja el uso indiscriminado de variables globales?",
          "options": [
            {
              "text": "Porque cualquier parte del código puede mutar su valor sin control, dificultando el rastreo de bugs y rompiendo el encapsulamiento",
              "correct": true
            },
            {
              "text": "Porque las variables globales incrementan físicamente el peso del robot en la báscula",
              "correct": false
            },
            {
              "text": "Porque los procesadores multinúcleo no permiten leer variables fuera del método main",
              "correct": false
            },
            {
              "text": "Porque las variables globales se borran automáticamente cada 60 segundos",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué imprimirá la consola al ejecutar este programa considerando el scope local dentro de alterar()?",
          "codeSnippet": "valor = 10\ndef alterar():\n    valor = 99\n\nalterar()\nprint(valor)",
          "options": [
            {
              "text": "10",
              "correct": true
            },
            {
              "text": "99",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Leyendo y Organizando Código Modular",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo transforman las capas de abstracción modular la legibilidad y mantenimiento de un robot?",
          "lessonText": "# Arquitectura en Capas y Descomposición Modular\n\nUn programa de robótica sin funciones modulares se convierte en un monolito ininteligible de cientos de líneas donde las operaciones de hardware, cálculos trigonométricos y decisiones estratégicas están mezclados sin orden. La modularidad descompone el sistema en **capas de abstracción**:\n\n- **Capa Estratégica (Alto Nivel):** Expresa la lógica del juego con nombres descriptivos de intención humana.\n- **Capa de Control (Nivel Medio):** Calcula trayectorias, cinemática y resuelve lazos PID.\n- **Capa de Hardware (Bajo Nivel):** Escribe tramas directas al bus CAN y maneja pines digitales.\n\n```python\ndef rutina_autonomo_15s():\n    avanzar_hacia_pieza()\n    adquirir_nota_intake()\n    apuntar_con_limelight()\n    disparar_a_speaker()\n```\n\nEn Nautilus 4010, esta organización permite que cualquier integrante del equipo de programación o mentor entienda y audite la estrategia de Autonomous en segundos sin perderse en el mar de voltajes de bajo nivel.\n\n**Regla de Oro: La modularización organiza el software en capas jerárquicas: las rutinas estratégicas de alto nivel expresan el qué hacer, mientras que las funciones de bajo nivel implementan el cómo hacerlo.**",
          "options": [
            {
              "text": "Dividiendo la complejidad en capas jerárquicas donde el alto nivel expresa la estrategia y el bajo nivel gestiona el hardware",
              "correct": true
            },
            {
              "text": "Ocultando todo el código en archivos protegidos para que los mentores no puedan revisarlo",
              "correct": false
            },
            {
              "text": "Reuniendo todas las variables y comandos en una única función de 2000 líneas",
              "correct": false
            },
            {
              "text": "Cambiando las palabras clave del lenguaje por abreviaciones de una sola letra",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada capa de la arquitectura modular con su responsabilidad técnica:",
          "options": [
            {
              "text": "Descomposición modular|||División de un programa complejo en unidades lógicas independientes y reutilizables",
              "correct": true
            },
            {
              "text": "Capa de abstracción|||Nivel de software que oculta detalles de hardware detrás de interfaces limpias",
              "correct": true
            },
            {
              "text": "Driver de bajo nivel|||Función que interactúa directamente con voltajes, registros o pines físicos",
              "correct": true
            },
            {
              "text": "Estrategia de alto nivel|||Función orquestadora que coordina subsistemas para cumplir un objetivo de juego",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la orquestación estratégica de alto nivel para la rutina de autonomous:",
          "options": [
            {
              "text": "def rutina_autonomo():",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    avanzar_a_nota()",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    recolectar_nota()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    disparar_a_speaker()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué invocación modular debe colocarse para asegurar la alineación antes de eyectar la pieza?",
          "codeSnippet": "def alinear_chasis():\n    limelight.centrar_objetivo()\n\ndef rutina_disparo():\n    _____\n    lanzador.eyectar()",
          "options": [
            {
              "text": "alinear_chasis()",
              "correct": true
            },
            {
              "text": "alinear_chasis",
              "correct": false
            },
            {
              "text": "def alinear_chasis",
              "correct": false
            },
            {
              "text": "call alinear",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué ocurre en Python si intentas invocar una función en la línea 2 antes de haberla definido formalmente en la línea 15?",
          "options": [
            {
              "text": "Se produce un error NameError en tiempo de ejecución porque la función aún no ha sido cargada en memoria por el intérprete",
              "correct": true
            },
            {
              "text": "Python analiza el archivo en sentido inverso y ejecuta la función sin inconvenientes",
              "correct": false
            },
            {
              "text": "La función se compila automáticamente en segundo plano sin respetar el orden secuencial",
              "correct": false
            },
            {
              "text": "El monitor entra en estado de hibernación esperando la definición",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué salida imprimirá la consola al ejecutar las funciones en ese orden de invocación?",
          "codeSnippet": "def modulo_a():\n    print('A')\ndef modulo_b():\n    print('B')\n\nmodulo_b()\nmodulo_a()",
          "options": [
            {
              "text": "B\nA",
              "correct": true
            },
            {
              "text": "A\nB",
              "correct": false
            },
            {
              "text": "AB",
              "correct": false
            },
            {
              "text": "BA",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Reto: Comandos Base del Chasis",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se construye una capa de abstracción de hardware (HAL) para el chasis de un robot?",
          "lessonText": "# La Capa de Abstracción de Hardware (HAL)\n\nPara que los pilotos y programadores de estrategia autónoma no tengan que manipular tensiones eléctricas o paquetes individuales de 4 ruedas en cada maniobra, el software construye una **Capa de Abstracción de Hardware (HAL)** mediante funciones modulares:\n\n```python\ndef avanzar_lineal(potencia):\n    chasis_swerve.fijar_vector(0, potencia, 0)\n\ndef rotar_grados(grados):\n    chasis_swerve.orientar_azimut(grados)\n\ndef frenar_chasis():\n    chasis_swerve.configurar_xbraking()\n```\n\nEn Nautilus 4010, esta librería estandariza el control mecánico del robot. Si los ingenieros mecánicos reemplazan un motor o cambian el diámetro de las ruedas, los cambios se corrigen únicamente en la biblioteca HAL sin tocar una sola línea del código de estrategia de competencia.\n\n**Regla de Oro: Una librería de comandos de movimiento estandariza la interacción con el chasis, aislando la lógica estratégica de las variaciones cinemáticas de los motores.**",
          "options": [
            {
              "text": "Estandarizando movimientos en funciones modulares que aíslan la lógica estratégica de los voltajes físicos de los motores",
              "correct": true
            },
            {
              "text": "Conectando los motores directamente a la batería sin fusibles ni controladores de potencia",
              "correct": false
            },
            {
              "text": "Eliminando las ruedas del robot para reemplazar la tracción por patines deslizantes",
              "correct": false
            },
            {
              "text": "Escribiendo valores binarios directos en la memoria RAM del controlador sin funciones",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada función de la capa de abstracción con su rol cinemático:",
          "options": [
            {
              "text": "Capa HAL (Hardware Abstraction)|||Conjunto de funciones que unifican el control de motores bajo comandos claros",
              "correct": true
            },
            {
              "text": "Comando de traslación|||Función que aplica voltajes coordinados para desplazar el chasis en línea recta",
              "correct": true
            },
            {
              "text": "Comando de rotación|||Función que aplica torque diferencial para orientar el chasis a un ángulo objetivo",
              "correct": true
            },
            {
              "text": "Freno de retención pasivo|||Función que fija la velocidad en cero y conmuta los motores a modo freno (Brake)",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la definición e invocación de la maniobra de rotación parametrizada:",
          "options": [
            {
              "text": "def girar_angulo(grados):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    giroscopio.reset()",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    chasis.aplicar_giro(grados)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "girar_angulo(90)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué invocación detiene todos los motores del chasis utilizando el comando modular?",
          "codeSnippet": "def detener_chasis():\n    motor_fl.set(0.0)\n    motor_fr.set(0.0)\n    motor_bl.set(0.0)\n    motor_br.set(0.0)\n\n# Llamar al comando de frenado total\n_____",
          "options": [
            {
              "text": "detener_chasis()",
              "correct": true
            },
            {
              "text": "detener_chasis;",
              "correct": false
            },
            {
              "text": "run detener",
              "correct": false
            },
            {
              "text": "stop chasis",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué diseñar una biblioteca de comandos de chasis con funciones modulares es fundamental en equipos de desarrollo colaborativo de robótica?",
          "options": [
            {
              "text": "Porque permite a los programadores de estrategia escribir rutinas autónomas complejas sin necesidad de manipular voltajes individuales de 4 ruedas en cada línea",
              "correct": true
            },
            {
              "text": "Porque elimina el consumo eléctrico de los controladores de motor durante la carrera",
              "correct": false
            },
            {
              "text": "Porque reduce las dimensiones físicas del chasis para cumplir con la inspección de peso",
              "correct": false
            },
            {
              "text": "Porque permite conducir el robot sin necesidad de compilar el código fuente",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué imprimirá la consola al ejecutar los dos comandos de registro sucesivos?",
          "codeSnippet": "def registrar_paso(etiqueta):\n    print('PASO:' + etiqueta)\n\nregistrar_paso('INTAKE')\nregistrar_paso('DISPARO')",
          "options": [
            {
              "text": "PASO:INTAKE\nPASO:DISPARO",
              "correct": true
            },
            {
              "text": "PASO:DISPARO\nPASO:INTAKE",
              "correct": false
            },
            {
              "text": "PASO:INTAKE",
              "correct": false
            },
            {
              "text": "INTAKE DISPARO",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
},

  // ==========================================
  // UNIT 15: FUNCTIONS II: PARAMETERS & RETURNS
  // ==========================================
  {
  "order": 15,
  "slug": "unit-15",
  "title": "Functions II: Parameters & Returns",
  "description": "Funciones poderosas: Pasar argumentos y devolver resultados con return",
  "guidebookText": "# Guía de Estudio: Unit 15 - Functions II: Parameters & Returns\n\nUna función sin parámetros siempre hace exactamente lo mismo. Para que una función sea verdaderamente versátil, necesitamos **pasarle datos de entrada (Parámetros)** y **recibir un resultado calculado (Valor de Retorno)**.\n\n### 1. Parámetros y Argumentos:\n- **Parámetro:** La variable que la función espera recibir en su definición (`def avanzar(distanciaMetros):`).\n- **Argumento:** El valor real que le envías al momento de llamarla (`avanzar(2.5)`).\n\n### 2. La Sentencia `return`:\n- La palabra clave **`return`** toma el resultado final de un cálculo y lo **devuelve** al lugar donde la función fue llamada.\n- Cuando la CPU encuentra un `return`, la función **termina de inmediato**.\n```python\ndef calcularDistancia(ticks):\n    return ticks * 0.05\n\ncm = calcularDistancia(400) # cm ahora vale 20.0\n```",
  "lessons": [
    {
      "title": "Pasando Datos: Parámetros y Argumentos",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuál es la diferencia formal entre un parámetro y un argumento en la ejecución de una función?",
          "lessonText": "# Parametrización y Flexibilidad de Comandos\n\nUna función sin parámetros realiza siempre una secuencia idéntica y estática. Para dotar a un bloque de código de adaptabilidad, se definen variables receptoras en su cabecera llamadas **parámetros**.\n\n- **Parámetro (Formal):** Identificador local declarado en la firma de la función que reserva espacio en el marco de pila para el dato de entrada.\n- **Argumento (Real):** El valor o expresión concreta transmitida a la función en el instante de su invocación.\n\n```python\ndef set_shooter_rpm(rpm_objetivo):  # rpm_objetivo es el parametro\n    controlador_flywheel.fijar_velocidad(rpm_objetivo)\n\nset_shooter_rpm(3500)               # 3500 es el argumento real\nset_shooter_rpm(5200)               # 5200 es otro argumento\n```\n\nEn Nautilus 4010, este diseño permite que la misma función de disparo sirva para anotar en el Subwoofer a 3500 RPM o para disparar a larga distancia desde el Podio a 5200 RPM simplemente cambiando el argumento transmitido.\n\n**Regla de Oro: Los parámetros son variables locales declaradas en la firma de la función; los argumentos son los valores concretos transmitidos a la función en el momento exacto de su invocación.**",
          "options": [
            {
              "text": "El parámetro es la variable receptora en la definición; el argumento es el valor real enviado al invocarla",
              "correct": true
            },
            {
              "text": "El parámetro es para números decimales y el argumento es exclusivamente para cadenas de texto",
              "correct": false
            },
            {
              "text": "Son términos sinónimos idénticos y el procesador no distingue entre ellos",
              "correct": false
            },
            {
              "text": "El argumento se emplea solo cuando la función produce un fallo de compilación",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de transferencia de datos con su definición técnica:",
          "options": [
            {
              "text": "Parámetro formal|||Variable receptora declarada en la definición de la función",
              "correct": true
            },
            {
              "text": "Argumento real|||Valor o expresión concreta enviada a la función al invocarla",
              "correct": true
            },
            {
              "text": "Correspondencia posicional|||Mapeo de argumentos a parámetros según el orden secuencial de declaración",
              "correct": true
            },
            {
              "text": "Pila de llamadas (Call Stack)|||Estructura de memoria donde se almacenan los argumentos al transferir control",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la definición e invocación de la función para fijar las RPM del shooter:",
          "options": [
            {
              "text": "def set_shooter_rpm(rpm_deseado):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    controlador_flywheel.fijar_velocidad(rpm_deseado)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    print('Shooter calibrado a RPM:', rpm_deseado)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "set_shooter_rpm(4200)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué valor numérico de argumento debe suministrarse a la función para girar 90 grados?",
          "codeSnippet": "def girar_grados(grados):\n    controlador_giro.rotar(grados)\n\n# Enviar el argumento de 90 grados a la llamada\ngirar_grados(____)",
          "options": [
            {
              "text": "90",
              "correct": true
            },
            {
              "text": "'noventa'",
              "correct": false
            },
            {
              "text": "grados = 90",
              "correct": false
            },
            {
              "text": "[90]",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué excepción genera Python si una función exige un parámetro obligatorio (ej: def f(x):) y el programa la invoca sin argumentos (f())?",
          "options": [
            {
              "text": "TypeError: falta un argumento posicional obligatorio requerido por la firma de la función",
              "correct": true
            },
            {
              "text": "SyntaxError: el código de la función se descompila automáticamente",
              "correct": false
            },
            {
              "text": "La función sustituye el parámetro por el valor cero sin notificar errores",
              "correct": false
            },
            {
              "text": "El procesador se apaga por falla de memoria virtual",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor imprimirá la consola al pasar el argumento 0.5 a la función?",
          "codeSnippet": "def calcular_voltaje(porcentaje):\n    print(12.0 * porcentaje)\n\ncalcular_voltaje(0.5)",
          "options": [
            {
              "text": "6.0",
              "correct": true
            },
            {
              "text": "12.0",
              "correct": false
            },
            {
              "text": "0.5",
              "correct": false
            },
            {
              "text": "60.0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Múltiples Parámetros: Flexibilidad Total",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se implementan firmas con múltiples parámetros y cómo opera el mapeo posicional de argumentos?",
          "lessonText": "# Aridad y Mapeo Posicional\n\nEn matemáticas e informática, la **aridad** de una función representa la cantidad de operandos o argumentos que recibe. Para modelar procesos físicos complejos, una función puede requerir múltiples entradas separadas por comas en su cabecera.\n\n```python\ndef mover_trayectoria(velocidad_mps, duracion_s, direccion_angulo):\n    chasis.fijar_cinematica(velocidad_mps, direccion_angulo)\n    temporizador.esperar(duracion_s)\n```\n\nAl invocar la función, el orden de los argumentos debe coincidir estrictamente con el orden posicional de los parámetros:\n`mover_trayectoria(2.5, 1.2, 45.0)`\n- `velocidad_mps` recibe `2.5`.\n- `duracion_s` recibe `1.2`.\n- `direccion_angulo` recibe `45.0`.\n\nInvertir el orden de los argumentos en una función cinemática causaría que el robot aplique duración como velocidad, provocando una colisión violenta a plena potencia.\n\n**Regla de Oro: Múltiples parámetros permiten configurar funciones complejas con interfaces limpias; los argumentos deben suministrarse en el orden posicional exacto definido por la firma.**",
          "options": [
            {
              "text": "Separando los parámetros por comas en la definición y suministrando argumentos en el mismo orden posicional",
              "correct": true
            },
            {
              "text": "Concatenando todos los números en una sola cadena de texto alfanumérica",
              "correct": false
            },
            {
              "text": "Creando una función distinta en el disco duro para cada parámetro requerido",
              "correct": false
            },
            {
              "text": "Los microcontroladores solo soportan un parámetro por función en todos los lenguajes",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de firmas múltiples con su descripción formal:",
          "options": [
            {
              "text": "Firma multiparámetro|||Definición de función que acepta dos o más variables de entrada separadas por comas",
              "correct": true
            },
            {
              "text": "Aridad (Arity)|||Número de argumentos formales que una función requiere para su ejecución",
              "correct": true
            },
            {
              "text": "Mapeo por posición|||Asignación donde el primer argumento corresponde al primer parámetro, y así sucesivamente",
              "correct": true
            },
            {
              "text": "Desacoplamiento dimensional|||Capacidad de especificar variables independientes como coordenadas X e Y",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la definición e invocación de la cinemática de chasis con tres parámetros:",
          "options": [
            {
              "text": "def mover_chasis(eje_x, eje_y, giro):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    cinematica_swerve.calcular(eje_x, eje_y, giro)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    actuar_motores()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "mover_chasis(1.0, 0.0, 0.5)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué carácter separador debe colocarse entre los argumentos 15 y 25?",
          "codeSnippet": "def fijar_coordenadas(pos_x, pos_y):\n    print('Destino X:', pos_x, 'Y:', pos_y)\n\n# Enviar coordenadas X=15 e Y=25 separadas por coma\nfijar_coordenadas(15___ 25)",
          "options": [
            {
              "text": ",",
              "correct": true
            },
            {
              "text": ";",
              "correct": false
            },
            {
              "text": ".",
              "correct": false
            },
            {
              "text": ":",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué ocurre si una función está declarada con dos parámetros obligatorios (def f(a, b):) pero al invocarla se le pasa únicamente un argumento (f(10))?",
          "options": [
            {
              "text": "Se lanza un error TypeError indicando que falta el argumento posicional 'b'",
              "correct": true
            },
            {
              "text": "El segundo parámetro toma automáticamente el valor del primer parámetro duplicado",
              "correct": false
            },
            {
              "text": "El programa entra en un bucle infinito esperando el segundo argumento de red",
              "correct": false
            },
            {
              "text": "La función descarta el cálculo y devuelve una cadena vacía",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor de fuerza imprimirá la consola al calcular con masa 25 y aceleración 4?",
          "codeSnippet": "def calcular_fuerza(masa, aceleracion):\n    print(masa * aceleracion)\n\ncalcular_fuerza(25, 4)",
          "options": [
            {
              "text": "100",
              "correct": true
            },
            {
              "text": "29",
              "correct": false
            },
            {
              "text": "21",
              "correct": false
            },
            {
              "text": "50",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Devolviendo Resultados: La Sentencia Return",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuál es la diferencia computacional radical entre mostrar un dato con print() y devolverlo con return?",
          "lessonText": "# Flujo de Datos y Salida de Funciones\n\nUna de las confusiones más comunes en programación inicial es confundir **`print()`** con **`return`**:\n\n- **`print()`:** Es una operación de entrada/salida (I/O) que envía caracteres al terminal estándar para que un humano los observe. El programa **no puede reutilizar ni operar** ese texto en cálculos futuros.\n- **`return`:** Transfiere el resultado evaluado directamente a la expresión o variable que realizó la llamada, desapilando el marco de pila y **terminando de inmediato la ejecución de la función**.\n\n```python\ndef convertir_ticks_a_cm(ticks):\n    return ticks * 0.05  # Retorna el valor para seguir calculando\n\ndistancia_cm = convertir_ticks_a_cm(400)\nif distancia_cm > 15.0:\n    frenar_robot()\n```\n\nSi la función utilizara `print()` en lugar de `return`, `distancia_cm` recibiría `None` y la comparación relacional fallaría con un error crítico.\n\n**Regla de Oro: 'print' solo muestra texto para un observador humano; 'return' entrega el dato calculado a la variable que invocó la función y concluye de inmediato su ejecución.**",
          "options": [
            {
              "text": "print solo emite texto para visualización humana; return entrega el dato a la variable para que el programa siga operando con él",
              "correct": true
            },
            {
              "text": "print almacena el dato en el disco duro permanentemente mientras que return lo borra de la memoria",
              "correct": false
            },
            {
              "text": "return solo puede emplearse con números enteros y print solo con cadenas de texto alfanuméricas",
              "correct": false
            },
            {
              "text": "No existe diferencia; los compiladores modernos reemplazan return por print de forma automática",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada mecanismo de salida con su efecto en el sistema:",
          "options": [
            {
              "text": "Sentencia return|||Devuelve el resultado calculado al punto de invocación y concluye la función inmediatamente",
              "correct": true
            },
            {
              "text": "Función print()|||Muestra caracteres en la consola sin retornar ningún dato utilizable por el programa",
              "correct": true
            },
            {
              "text": "Código inalcanzable|||Instrucciones ubicadas tras un return que jamás llegan a ejecutarse",
              "correct": true
            },
            {
              "text": "Valor por defecto (None)|||Resultado devuelto por una función en Python si concluye sin encontrar un return",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la función de cálculo de área y el almacenamiento del valor devuelto:",
          "options": [
            {
              "text": "def calcular_area_intake(ancho, largo):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    area = ancho * largo",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    return area",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "total_area = calcular_area_intake(40, 60)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave devuelve el valor calculado en metros al código que llamó a la función?",
          "codeSnippet": "def convertir_cm_a_metros(distancia_cm):\n    _____ distancia_cm / 100.0",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "send",
              "correct": false
            },
            {
              "text": "output",
              "correct": false
            },
            {
              "text": "give",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué diferencia fundamental existe entre una función que imprime un valor con print() y una función que devuelve un valor con return?",
          "options": [
            {
              "text": "El valor devuelto por 'return' puede asignarse a una variable y utilizarse en cálculos posteriores; 'print' solo emite texto para humanos",
              "correct": true
            },
            {
              "text": "'print' almacena el dato en el disco duro permanentemente mientras que 'return' lo borra",
              "correct": false
            },
            {
              "text": "'return' solo puede emplearse con números enteros y 'print' solo con cadenas de texto",
              "correct": false
            },
            {
              "text": "No existe diferencia; los compiladores modernos reemplazan return por print automáticamente",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor exacto imprimirá la consola al ejecutar este programa con return temprano?",
          "codeSnippet": "def doblar(x):\n    return x * 2\n    print('Calculo concluido')\n\nresultado = doblar(15)\nprint(resultado)",
          "options": [
            {
              "text": "30",
              "correct": true
            },
            {
              "text": "15",
              "correct": false
            },
            {
              "text": "'Calculo concluido'",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Funciones Puras vs Efectos Secundarios",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es una función pura y por qué desacoplar cálculos de hardware permite pruebas unitarias automatizadas?",
          "lessonText": "# Transparencia Referencial y Aislamiento de Hardware\n\nEn la arquitectura de sistemas mecatrónicos, las funciones se dividen en dos categorías fundamentales:\n\n1. **Funciones Puras (Cálculos Matemáticos):**\n   - Cumplen con **transparencia referencial**: para las mismas entradas, siempre producen la misma salida sin alterar el mundo exterior.\n   - No leen variables globales, no envían tramas al bus CAN ni mueven actuadores.\n   - Ejemplo: `calcular_solucion_balistica(distancia, velocidad_viento)`.\n\n2. **Funciones Impuras (Efectos Secundarios):**\n   - Mutan el estado del hardware, leen puertos I/O físicos o modifican variables globales.\n   - Ejemplo: `motor_sparkmax.set(0.8)`, `solenoide.abrir()`.\n\nEn Nautilus 4010, aislar las ecuaciones de tiro en funciones puras permite ejecutar miles de pruebas unitarias automáticas en GitHub Actions en menos de 2 segundos, validando la precisión balística sin necesidad de tener el robot físico encendido.\n\n**Regla de Oro: Aislar los cálculos matemáticos en funciones puras permite realizar pruebas unitarias automatizadas y desacopla la física del software de los actuadores de hardware.**",
          "options": [
            {
              "text": "Las funciones puras únicamente transforman datos sin alterar el entorno externo, permitiendo pruebas unitarias sin hardware conectado",
              "correct": true
            },
            {
              "text": "Las funciones puras consumen el triple de energía porque requieren cálculos diferenciales",
              "correct": false
            },
            {
              "text": "Los efectos secundarios son considerados siempre errores de sintaxis en todos los compiladores",
              "correct": false
            },
            {
              "text": "Las funciones puras están prohibidas en lenguajes modernos de robótica industrial",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada categoría de función con su propiedad arquitectónica:",
          "options": [
            {
              "text": "Función pura|||Rutina determinista que calcula un resultado a partir de sus entradas sin modificar el entorno externo",
              "correct": true
            },
            {
              "text": "Efecto secundario (Side Effect)|||Modificación de estado externo, como mover un actuador físico o escribir en memoria global",
              "correct": true
            },
            {
              "text": "Transparencia referencial|||Propiedad donde una llamada a función puede sustituirse directamente por su valor retornado",
              "correct": true
            },
            {
              "text": "Pruebas unitarias en CI|||Validación automatizada de algoritmos matemáticos en la nube sin hardware físico conectado",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena el cálculo puro de balística y la posterior aplicación mecánica en el actuador:",
          "options": [
            {
              "text": "def calcular_angulo_tiro(distancia_metros):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    return distancia_metros * 12.5",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "angulo_calculado = calcular_angulo_tiro(3.2)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "actuador_torreta.mover_a(angulo_calculado)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué término describe las alteraciones al entorno externo que una función pura no debe tener?",
          "codeSnippet": "# Clasificacion: calcular_hipotenusa(3, 4) es una funcion pura porque no tiene _____\ndef hipotenusa(a, b):\n    return (a**2 + b**2)**0.5",
          "options": [
            {
              "text": "efectos secundarios",
              "correct": true
            },
            {
              "text": "parametros",
              "correct": false
            },
            {
              "text": "valores de retorno",
              "correct": false
            },
            {
              "text": "operadores",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué los equipos de ingeniería de software robótico priorizan encapsular la cinemática y odometría en funciones puras?",
          "options": [
            {
              "text": "Porque pueden someterse a miles de pruebas unitarias automatizadas en segundos sin riesgo de dañar mecanismos ni necesitar el robot físico encendido",
              "correct": true
            },
            {
              "text": "Porque las funciones puras consumen la mitad de energía de la batería de 12V",
              "correct": false
            },
            {
              "text": "Porque las funciones con efectos secundarios están prohibidas por la especificación de Python",
              "correct": false
            },
            {
              "text": "Porque las funciones puras eliminan la necesidad de conectar cables al bus CAN",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'medida' al convertir 5 pulgadas a centímetros con la función pura?",
          "codeSnippet": "def pulg_a_cm(pulgadas):\n    return pulgadas * 2.54\n\nmedida = pulg_a_cm(5)\nprint(medida)",
          "options": [
            {
              "text": "12.7",
              "correct": true
            },
            {
              "text": "10.0",
              "correct": false
            },
            {
              "text": "25.4",
              "correct": false
            },
            {
              "text": "5.0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Reto: Conversor de Encoders a Metros",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se construye una función de conversión de odometría en tiempo real para transformar pulsos a magnitudes métricas?",
          "lessonText": "# Conversión de Odometría y Resolución de Sensores\n\nLos encoders ópticos y magnéticos acoplados a los ejes de los motores generan señales electrónicas discretas llamadas **pulsos o ticks**. El software de navegación autónoma no puede planificar trayectorias pensando en '14,850 ticks'; los algoritmos de navegación necesitan magnitudes físicas en el sistema métrico internacional (metros).\n\n```python\ndef calcular_odometria_metros(ticks_acumulados):\n    RESOLUCION_ENCODER = 2048   # Pulsos por revolucion\n    DIAMETRO_RUEDA_M = 0.1016   # 4 pulgadas en metros\n    RELACION_ENGRANES = 6.75    # Reductora Swerve\n    \n    vueltas_rueda = (ticks_acumulados / RESOLUCION_ENCODER) / RELACION_ENGRANES\n    metros_avanzados = vueltas_rueda * (3.14159 * DIAMETRO_RUEDA_M)\n    return metros_avanzados\n```\n\nEn Nautilus 4010, esta función de telemetría traduce continuamente las lecturas brutas de los encoders a coordenadas métricas de campo, permitiendo al robot navegar entre piezas con exactitud de milímetros.\n\n**Regla de Oro: Los conversores de instrumentación transforman pulsos discretos de sensores en magnitudes físicas continuas mediante funciones parametrizadas y deterministas.**",
          "options": [
            {
              "text": "Modelando la conversión de pulsos discretos a metros mediante factores cinemáticos y devolviendo la magnitud continua calculada",
              "correct": true
            },
            {
              "text": "Midiendo la distancia con una cinta métrica manual durante el transcurso del partido",
              "correct": false
            },
            {
              "text": "Configurando los motores para que giren a una revolución por minuto fija sin sensores",
              "correct": false
            },
            {
              "text": "Dividiendo la velocidad entre cero para obtener la distancia instantánea",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada término de la conversión de odometría con su magnitud física:",
          "options": [
            {
              "text": "Pulsos de encoder (Ticks)|||Señales de cuadratura discretas generadas por la rotación del eje del motor",
              "correct": true
            },
            {
              "text": "Relación de reducción|||Factor mecánico de engranes entre el eje del motor y la rueda del chasis",
              "correct": true
            },
            {
              "text": "Conversor de odometría|||Función parametrizada que transforma ticks acumulados en metros recorridos",
              "correct": true
            },
            {
              "text": "Constante de calibración|||Factor métrico que define cuántos metros avanza el robot por cada tick de encoder",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la función de odometría métrica y el cálculo de distancia a partir de 6000 ticks:",
          "options": [
            {
              "text": "def ticks_a_metros(ticks_motor):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    CONSTANTE_METROS = 0.0005",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    return ticks_motor * CONSTANTE_METROS",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "distancia_recorrida = ticks_a_metros(6000)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción devuelve el avance en metros calculado por la función de odometría?",
          "codeSnippet": "def calcular_odometria(ticks):\n    METROS_POR_TICK = 0.0004\n    _____ ticks * METROS_POR_TICK\n\navance = calcular_odometria(5000)",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "output",
              "correct": false
            },
            {
              "text": "yield",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué los parámetros y los valores de retorno convierten a las funciones en la herramienta arquitectónica más poderosa de la programación?",
          "options": [
            {
              "text": "Porque transforman bloques de código rígidos en componentes genéricos, reutilizables y verificables que reciben datos, computan soluciones y devuelven respuestas con precisión matemática",
              "correct": true
            },
            {
              "text": "Porque eliminan la necesidad de conectar sensores mecánicos al chasis del robot",
              "correct": false
            },
            {
              "text": "Porque hacen que las computadoras no generen calor en los procesadores",
              "correct": false
            },
            {
              "text": "Porque evitan tener que compilar el programa antes de ejecutarlo en el microcontrolador",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos metros calculó la odometría para un promedio de 4000 ticks con factor 0.001?",
          "codeSnippet": "def calcular_odometria(ticks_izq, ticks_der):\n    promedio = (ticks_izq + ticks_der) / 2\n    return promedio * 0.001\n\nmetros = calcular_odometria(3000, 5000)\nprint(metros)",
          "options": [
            {
              "text": "4.0",
              "correct": true
            },
            {
              "text": "8.0",
              "correct": false
            },
            {
              "text": "3.0",
              "correct": false
            },
            {
              "text": "5.0",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
}
];
