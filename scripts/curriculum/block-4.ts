import { UnitDefinition } from "./types";

export const block4Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 11: WHILE LOOPS
  // ==========================================
  {
  "order": 11,
  "slug": "unit-11",
  "title": "While Loops",
  "description": "Bucles condicionales: Repetir tareas mientras una condición sea verdadera",
  "guidebookText": "# Guía de Estudio: Unit 11 - While Loops\n\nEl poder de las computadoras radica en su capacidad de repetir una tarea millones de veces sin cansarse ni cometer errores por aburrimiento.\n\nUn bucle **`while`** repite un bloque de código **MIENTRAS** una condición booleana sea verdadera (`true`).\n\n### Los 3 Componentes Sagrados de Todo While Loop:\n1. **Estado Inicial:** Declarar la variable de control antes del bucle (`contador = 0`).\n2. **Condición de Parada:** La prueba que se evalúa antes de cada ciclo (`while contador < 5:`).\n3. **Paso de Actualización:** Modificar la variable DENTRO del bucle (`contador += 1`).\n\n### El Terror del Bucle Infinito (Infinite Loop):\nSi olvidas el paso de actualización o la condición nunca se vuelve falsa, el programa se quedará atrapado para siempre consumiendo el 100% de la CPU.",
  "lessons": [
    {
      "title": "¿Por Qué Repetir Tareas?",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es un bucle 'while' y cómo mantiene activo el ciclo de control de un robot?",
          "lessonText": "# El Motor de Repetición y Control Reactivo\n\nEn la arquitectura de Von Neumann, las instrucciones se ejecutan secuencialmente de arriba a abajo. Sin embargo, los sistemas físicos dinámicos requieren supervisar sensores y modular actuadores continuamente. La estructura **`while`** evalúa una condición booleana al inicio de cada ciclo: si es `true`, ejecuta el bloque subordinado y efectúa un salto incondicional relativo (`JMP`) de regreso a la cabecera para reevaluar la condición.\n\n```python\nwhile pieza_asegurada == False:\n    rodillos_intake.girar()\n    pieza_asegurada = sensor_haz.leer()\n```\n\nEn el subsistema de admisión de piezas de Nautilus 4010, el robot gira los rodillos mecánicos del intake de forma continua mientras el sensor óptico de barrera infrarroja no detecte la pieza; en el instante en que la pieza interrumpe el haz, la condición pasa a ser `false` y el bucle termina de forma limpia y determinista.\n\n**Regla de Oro: Un bucle while repite instrucciones mientras su condición lógica sea estrictamente verdadera; si la condición nunca cambia a false, el hilo bloqueará los recursos de la CPU.**",
          "options": [
            {
              "text": "Una estructura de control iterativa que ejecuta un bloque de instrucciones mientras su condición lógica permanezca en true",
              "correct": true
            },
            {
              "text": "Un comando del sistema operativo que apaga el microcontrolador cuando detecta alta temperatura",
              "correct": false
            },
            {
              "text": "Una variable especial de memoria que únicamente puede almacenar números enteros positivos",
              "correct": false
            },
            {
              "text": "Un cable físico del bus CAN diseñado para alimentar motores trifásicos de alta potencia",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada componente del lazo de repetición con su función técnica:",
          "options": [
            {
              "text": "Bucle while|||Estructura de control iterativa que repite un bloque mientras su condición sea true",
              "correct": true
            },
            {
              "text": "Ciclo de control|||Iteración periódica que lee sensores, calcula decisiones y actualiza motores",
              "correct": true
            },
            {
              "text": "Condición de parada|||Expresión booleana que al volverse false permite al programa salir del bucle",
              "correct": true
            },
            {
              "text": "Salto incondicional (JMP)|||Instrucción de bajo nivel que devuelve el flujo al inicio de la evaluación condicional",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las instrucciones del bucle de recolección de piezas con el sensor óptico:",
          "options": [
            {
              "text": "pieza_detectada = sensor_haz.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while pieza_detectada == False:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    rodillos_intake.girar()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    pieza_detectada = sensor_haz.leer()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave mantiene activo el ventilador mientras la temperatura supere los 50 grados?",
          "codeSnippet": "temperatura_chasis = 85.0\n_____ temperatura_chasis > 50.0:\n    ventilador_disipador.encender()\n    temperatura_chasis = leer_temperatura()",
          "options": [
            {
              "text": "while",
              "correct": true
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "repeat",
              "correct": false
            },
            {
              "text": "until",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué sucede si la condición evaluada en la cabecera del bucle 'while' es falsa desde la primera comprobación?",
          "options": [
            {
              "text": "El cuerpo del bucle se ignora completamente y el flujo salta a la siguiente instrucción fuera de él",
              "correct": true
            },
            {
              "text": "El cuerpo del bucle se ejecuta exactamente una vez por defecto de hardware",
              "correct": false
            },
            {
              "text": "El compilador genera un error de tiempo de ejecución por ciclo nulo no alcanzable",
              "correct": false
            },
            {
              "text": "El procesador entra en un ciclo de espera activo consumiendo el 100% de la CPU",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'contador' impreso en la consola?",
          "codeSnippet": "contador = 0\nwhile contador < 3:\n    contador = contador + 1\nprint(contador)",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "4",
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
      "title": "Anatomía de un Bucle: 3 Pasos Sagrados",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuáles son los tres componentes indispensables en el ciclo de vida de todo bucle while determinista?",
          "lessonText": "# El Ciclo de Vida del Bucle de Control\n\nEn ciencias de la computación, todo bucle determinista debe satisfacer invariantes formales para evitar fallos de ejecución. Para garantizar que un bucle termine con certeza matemática, se requieren tres pasos obligatorios:\n\n1. **Inicialización:** Declarar y fijar el estado inicial de la variable de control antes de entrar al bucle.\n2. **Condición de continuidad:** Expresión relacional evaluada en la cabecera antes de cada iteración.\n3. **Mutación de paso (Step):** Modificar el valor de la variable de control dentro del cuerpo subordinado, acercándola a la condición de parada.\n\n```python\npasos_calibracion = 0                    # 1. Inicializacion\nwhile pasos_calibracion < 5:             # 2. Condicion\n    mover_actuador_micropaso()\n    pasos_calibracion += 1               # 3. Mutacion de paso\n```\n\nEn Nautilus 4010, este esquema calibra el encoder absoluto del brazo telescópico: se mueve el eje 5 micropasos de 10 pulsos cada uno y se sincroniza el cero físico con los switches magnéticos.\n\n**Regla de Oro: Todo bucle while profesional exige tres pasos indispensables: inicialización previa, condición de evaluación y mutación garantizada hacia el término.**",
          "options": [
            {
              "text": "Inicialización de la variable de control, condición de continuidad y mutación de paso hacia la parada",
              "correct": true
            },
            {
              "text": "Asignación de memoria virtual, apertura de puertos TCP y reinicio de la tarjeta madre",
              "correct": false
            },
            {
              "text": "Compilación previa, conversión a código hexadecimal y enlace estático de librerías",
              "correct": false
            },
            {
              "text": "Conexión de antena Wi-Fi, calibración del giroscopio y carga completa de batería",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada fase del ciclo de vida del bucle con su definición formal:",
          "options": [
            {
              "text": "Inicialización|||Declaración y asignación del valor inicial de la variable de control antes del bucle",
              "correct": true
            },
            {
              "text": "Condición de prueba|||Expresión lógica evaluada al inicio de cada iteración para decidir si se continúa",
              "correct": true
            },
            {
              "text": "Paso de actualización|||Modificación obligatoria dentro del bucle para avanzar hacia la condición de salida",
              "correct": true
            },
            {
              "text": "Variable de control|||Registro o variable cuyo valor determina cuándo finaliza la repetición",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena los pasos canónicos para calibrar el giroscopio exactamente 4 ciclos:",
          "options": [
            {
              "text": "ciclo_calibracion = 0",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while ciclo_calibracion < 4:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    calibrar_giroscopio()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    ciclo_calibracion = ciclo_calibracion + 1",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué variable debe incrementarse para asegurar que el bucle avance hacia su término?",
          "codeSnippet": "paso = 0\nwhile paso < 5:\n    ejecutar_diagnostico()\n    paso = ___ + 1",
          "options": [
            {
              "text": "paso",
              "correct": true
            },
            {
              "text": "contador",
              "correct": false
            },
            {
              "text": "5",
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
          "question": "¿Cuál es la causa técnica de que un bucle while se quede ejecutando indefinidamente sin terminar jamás?",
          "options": [
            {
              "text": "La omisión de la mutación de la variable de control dentro del cuerpo, haciendo que la condición permanezca siempre verdadera",
              "correct": true
            },
            {
              "text": "La saturación de registros enteros de 32 bits en la unidad aritmético-lógica del procesador",
              "correct": false
            },
            {
              "text": "El uso de comparadores de desigualdad estricta en lugar de comparadores inclusivos",
              "correct": false
            },
            {
              "text": "La fragmentación de la memoria caché de nivel 1 en el microcontrolador",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor imprimirá la consola al finalizar el bucle con duplicación progresiva?",
          "codeSnippet": "valor = 1\nwhile valor < 8:\n    valor = valor * 2\nprint(valor)",
          "options": [
            {
              "text": "8",
              "correct": true
            },
            {
              "text": "16",
              "correct": false
            },
            {
              "text": "4",
              "correct": false
            },
            {
              "text": "7",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "El Terror del Bucle Infinito",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué consecuencias tiene un bucle infinito en un sistema embebido en tiempo real y cómo lo previene el Watchdog?",
          "lessonText": "# Agotamiento de CPU y el Temporizador Guardián\n\nUn bucle infinito ocurre cuando la condición de salida jamás evalúa a `false`. En sistemas embebidos de tiempo real (RTOS), un bucle infinito monopoliza el núcleo del procesador provocando **inanición de la CPU (CPU starvation)**. El hilo de control principal deja de despachar tramas de comunicación periódicas.\n\n```python\n# PELIGRO: Bucle infinito si el sensor falla\nwhile flywheel_rpm < 4000:  # Si el cable del sensor se desconecta, se congela aqui!\n    inyectar_potencia_motor()\n```\n\nEn los controladores roboRIO de FIRST Robotics Competition, un módulo de hardware llamado **Watchdog Timer** supervisa que el software reporte su estado cada 100 milisegundos como máximo. Si un bucle infinito atrapa el hilo de control impidiendo que se alimente el Watchdog, el hardware desactiva de inmediato el relé principal de potencia cortando la energía a todos los motores por seguridad.\n\n**Regla de Oro: En sistemas físicos en tiempo real, jamás implementes bucles while sin un contador de seguridad o límite de tiempo máximo (timeout) para prevenir bloqueos por fallo de hardware.**",
          "options": [
            {
              "text": "Monopoliza la CPU impidiendo procesar telemetría y disparando el Watchdog de seguridad que corta la energía a los motores",
              "correct": true
            },
            {
              "text": "Descarga químicamente la batería del robot en menos de un segundo por exceso de corriente continua",
              "correct": false
            },
            {
              "text": "Borra el código fuente almacenado en el disco flash del microcontrolador de forma permanente",
              "correct": false
            },
            {
              "text": "Inversion mecánica de la rotación de los engranes sin intervención del puente H",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de seguridad y bloqueo con su definición técnica:",
          "options": [
            {
              "text": "Bucle infinito|||Ciclo que nunca alcanza su condición de parada y monopoliza la CPU indefinidamente",
              "correct": true
            },
            {
              "text": "Watchdog Timer|||Temporizador de hardware que deshabilita los actuadores si el software deja de responder",
              "correct": true
            },
            {
              "text": "CPU Starvation|||Agotamiento de procesamiento donde un ciclo bloqueante impide atender otros subprocesos",
              "correct": true
            },
            {
              "text": "Timeout Sentinel|||Contador de seguridad que fuerza la salida del bucle si el sensor físico tarda demasiado",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura de lectura de sensor con límite de seguridad por intentos:",
          "options": [
            {
              "text": "intentos = 0",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while sensor_listo == False and intentos < 10:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    verificar_sensor()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    intentos = intentos + 1",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué operador aritmético avanza el contador de seguridad hacia el umbral de timeout?",
          "codeSnippet": "timeout = 0\nwhile motor_acelerando == True and timeout < 50:\n    esperar_milisegundos(10)\n    timeout = timeout ___ 1",
          "options": [
            {
              "text": "+",
              "correct": true
            },
            {
              "text": "-",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "/",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué en robótica y aviónica un bucle infinito por fallo de un sensor es infinitamente más peligroso que en una aplicación web?",
          "options": [
            {
              "text": "Porque el bloqueo del hilo de control desactiva el Watchdog de seguridad y deja los motores mecánicos sin supervisión activa ni respuesta a comandos del operador",
              "correct": true
            },
            {
              "text": "Porque los bucles infinitos invierten la polaridad física del devanado de los motores eléctricos",
              "correct": false
            },
            {
              "text": "Porque la memoria no volátil del microcontrolador se desgasta químicamente en menos de un segundo",
              "correct": false
            },
            {
              "text": "Porque el lenguaje de programación borra el archivo fuente del disco flash automáticamente",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántas iteraciones exactas completará el bucle para n = 1 incrementando de 3 en 3 hasta alcanzar o superar 10?",
          "codeSnippet": "n = 1\niteraciones = 0\nwhile n < 10:\n    n = n + 3\n    iteraciones = iteraciones + 1\nprint(iteraciones)",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "4",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "10",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Bucles Basados en Sensores",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se implementa un bucle de control reactivo basado en sensores y por qué debe refrescarse la lectura en cada iteración?",
          "lessonText": "# Sondeo de Sensores y Lazo Cerrado\n\nEn robótica, el control en lazo cerrado (Closed-Loop) ajusta la conducta mecánica según el estado cambiante del mundo exterior. En lugar de iterar un número prefijado de veces, el bucle comprueba la lectura de un sensor físico en cada ciclo (**sensor polling**).\n\n```python\nswitch_superior = sensor_hall.leer()\nwhile switch_superior == False:\n    motor_elevador.subir(0.4)\n    switch_superior = sensor_hall.leer()  # Refresco obligatorio\nmotor_elevador.frenar()\n```\n\nEn Nautilus 4010, el elevador sube hasta que el sensor magnético de efecto Hall detecta el imán de neodimio ubicado en el travesaño del piso superior. Si el código olvidara volver a leer el pin del sensor dentro del bucle, la variable conservaría para siempre su valor inicial (`False`), provocando que el motor siga empujando hasta reventar las bandas y poleas mecánicas.\n\n**Regla de Oro: En bucles controlados por sensores físicos, el estado del sensor debe refrescarse en cada vuelta para reflejar la realidad del entorno mecánico.**",
          "options": [
            {
              "text": "Actualizando periódicamente la lectura del sensor en cada ciclo para que la condición refleje el estado físico real del mecanismo",
              "correct": true
            },
            {
              "text": "Fijando la velocidad del motor en números imaginarios para evitar el calentamiento de los rodamientos",
              "correct": false
            },
            {
              "text": "Leyendo el sensor una sola vez al inicio del programa y reutilizando el dato durante todo el partido",
              "correct": false
            },
            {
              "text": "Desconectando la alimentación del sensor para evitar interferencias electromagnéticas en el bus",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de instrumentación con su rol en el bucle condicional:",
          "options": [
            {
              "text": "Sensor Hall|||Interruptor magnético de estado sólido que detecta la proximidad del mecanismo",
              "correct": true
            },
            {
              "text": "Polling de sensor|||Consulta periódica del valor de un pin digital o bus en cada ciclo del bucle",
              "correct": true
            },
            {
              "text": "Límite de recorrido|||Posición mecánica extrema donde el software debe detener el actuador",
              "correct": true
            },
            {
              "text": "Closed-Loop Sensing|||Lazo de control que retroalimenta la acción del motor según el cambio de entorno",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena cronológicamente la rutina para elevar el mecanismo hasta activar el sensor Hall:",
          "options": [
            {
              "text": "switch_limite = sensor_hall.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while switch_limite == False:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    motor_elevador.subir(0.4)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    switch_limite = sensor_hall.leer()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué llamada de función debe refrescar el estado del LiDAR dentro del bucle de avance?",
          "codeSnippet": "while obstaculo_presente == False:\n    avanzar_trayectoria()\n    obstaculo_presente = _____()",
          "options": [
            {
              "text": "escanear_lidar",
              "correct": true
            },
            {
              "text": "True",
              "correct": false
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "contador",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué falla catastrófica ocurre si se olvida volver a leer el sensor físico dentro del cuerpo del bucle while?",
          "options": [
            {
              "text": "La variable evaluada conserva el valor antiguo y el bucle jamás se entera de que el sensor se activó, sobrecargando o rompiendo mecánicamente el mecanismo",
              "correct": true
            },
            {
              "text": "El sensor se desmagnetiza inmediatamente por falta de pulsos de reloj del procesador",
              "correct": false
            },
            {
              "text": "El voltaje de la batería se eleva instantáneamente a niveles no regulados por el circuito",
              "correct": false
            },
            {
              "text": "El compilador sustituye automáticamente la lectura por una llamada a una función aleatoria",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos pasos ejecutó el robot para reducir la distancia de 50 a 20 con decrementos de 10?",
          "codeSnippet": "distancia = 50\npasos = 0\nwhile distancia > 20:\n    distancia = distancia - 10\n    pasos = pasos + 1\nprint(pasos)",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "4",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "5",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Reto: Recarga del Compresor Neumático",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se programa un ciclo seguro de presurización neumática con umbral de presión y guarda de seguridad?",
          "lessonText": "# Lazo de Control Neumático y Presurización Segura\n\nLos sistemas neumáticos de potencia operan acumulando aire a presión (típicamente entre 60 y 115 PSI) en tanques de almacenamiento. El control de la recarga se realiza con un bucle `while` que evalúa la lectura analógica del transductor de presión.\n\n```python\npresion_psi = sensor_presion.leer()\nciclos_seguridad = 0\nwhile presion_psi < 115 and ciclos_seguridad < 200:\n    compresor.presurizar_pulso()\n    presion_psi = sensor_presion.leer()\n    ciclos_seguridad += 1\n```\n\nEn Nautilus 4010, este bucle presuriza los actuadores de la garra y los pistones del freno. Si una manguera de alta presión sufre una fisura o fuga durante el partido, la presión jamás alcanzará los 115 PSI. La guarda `ciclos_seguridad < 200` garantiza que el compresor se detenga tras un número seguro de ciclos, impidiendo que la bomba se sobrecaliente y funda sus sellos mecánicos.\n\n**Regla de Oro: Los bucles de presurización neumática deben validar tanto el manómetro analógico como un tiempo límite para proteger la bomba contra fugas no detectadas.**",
          "options": [
            {
              "text": "Supervisando el transductor de presión junto con una guarda de ciclos máximos para evitar que una fuga queme la bomba",
              "correct": true
            },
            {
              "text": "Manteniendo el compresor encendido permanentemente sin sensores para maximizar el flujo de aire",
              "correct": false
            },
            {
              "text": "Desconectando las mangueras de aire cada vez que el robot entra en la zona de puntuación",
              "correct": false
            },
            {
              "text": "Sustituyendo los transductores de presión por sensores de temperatura en los neumáticos",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada elemento del control neumático con su definición operativa:",
          "options": [
            {
              "text": "Manómetro analógico|||Transductor de presión que convierte fuerza neumática en señal de voltaje",
              "correct": true
            },
            {
              "text": "Ciclo de bombeo|||Intervalo unitario de operación del pistón compresor para comprimir aire",
              "correct": true
            },
            {
              "text": "Presión de corte|||Umbral de 115 PSI donde el sistema desenergiza el compresor por seguridad",
              "correct": true
            },
            {
              "text": "Guarda de seguridad|||Condición compuesta que detiene la carga si se excede el número máximo de ciclos",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la rutina de presurización neumática con lectura continua de presión:",
          "options": [
            {
              "text": "presion_psi = sensor_presion.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while presion_psi < 115 and ciclos_seguridad < 200:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    compresor.presurizar_pulso()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    presion_psi = sensor_presion.leer()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué operador aritmético incrementa la presión en 15 PSI en cada ciclo de bombeo?",
          "codeSnippet": "presion = 70\nwhile presion < 115:\n    inyectar_aire()\n    presion = presion ___ 15\nprint('Presion nominal lista')",
          "options": [
            {
              "text": "+",
              "correct": true
            },
            {
              "text": "-",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué en un sistema neumático de alta presión es imperativo combinar la lectura de presión con un contador de ciclos máximos (timeout)?",
          "options": [
            {
              "text": "Porque si existe una fuga en una manguera y la presión nunca sube, el compresor se quemaría al operar indefinidamente sin apagarse",
              "correct": true
            },
            {
              "text": "Porque los tanques de almacenamiento de aire no toleran más de dos lecturas analógicas continuas",
              "correct": false
            },
            {
              "text": "Porque el lenguaje de programación suspende la ejecución si un bucle dura más de tres líneas de código",
              "correct": false
            },
            {
              "text": "Porque el aire presurizado pierde densidad molecular si el ciclo de control excede los 100 ciclos",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos segundos de recarga se necesitaron para alcanzar 110 PSI partiendo de 90 PSI con incrementos de 10?",
          "codeSnippet": "presion = 90\nsegundos = 0\nwhile presion < 110:\n    presion = presion + 10\n    segundos = segundos + 1\nprint(segundos)",
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
              "text": "20",
              "correct": false
            }
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
  "order": 12,
  "slug": "unit-12",
  "title": "For Loops",
  "description": "Bucles contadores: Repetir secuencias exactamente N veces",
  "guidebookText": "# Guía de Estudio: Unit 12 - For Loops\n\nA diferencia del `while` (que corre hasta que una condición cambia), el bucle **`for`** está diseñado para **repetir una acción un número exacto y conocido de veces** o para recorrer colecciones de elementos.\n\n### Anatomía del For Loop:\n1. **En Python:** Usa la función `range(inicio, fin, paso)`:\n```python\nfor i in range(5):\n    # Corre para i = 0, 1, 2, 3, 4 (exactamente 5 veces)\n    print(i)\n```\n2. **En Java / C++:** La estructura clásica de 3 partes:\n```java\nfor (int i = 0; i < 5; i++) {\n    // Inicialización; Condición; Incremento\n}\n```\n\n### Cuándo elegir `for` vs `while`:\n- Usa **`for`** cuando sabes de antemano cuántas veces debe ocurrir la tarea (ej: parpadear un LED 5 veces).\n- Usa **`while`** cuando la repetición depende de un evento externo (ej: mover motor hasta que el sensor detecte una pieza).",
  "lessons": [
    {
      "title": "Iteración Controlada: Repetir N Veces",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es un bucle 'for' y por qué es el estándar para tareas con número de repeticiones prefijado?",
          "lessonText": "# Iteración Determinista sobre Rangos\n\nA diferencia de las pruebas condicionales abiertas de `while`, el bucle **`for`** implementa iteración definida sobre una secuencia o generador aritmético. En cada ciclo, toma automáticamente el siguiente valor de la secuencia, lo asigna a la variable de iteración y ejecuta el bloque subordinado. Cuando la secuencia se agota, el bucle concluye limpiamente sin riesgo de ciclos infinitos por omisión de paso.\n\n```python\nfor motor_id in range(4):\n    probar_sparkmax(motor_id)\n    esperar_milisegundos(50)\n```\n\nEn la inspección previa al partido de Nautilus 4010, el software calibra los 4 módulos de rueda del chasis Swerve: un bucle `for` recorre los identificadores `0, 1, 2, 3` enviando una trama de diagnóstico CAN a cada controlador SparkMax de manera determinista.\n\n**Regla de Oro: El bucle for es el estándar para ejecutar un número conocido de iteraciones sobre un rango o secuencia, eliminando de raíz el riesgo de ciclos infinitos.**",
          "options": [
            {
              "text": "Una estructura diseñada para recorrer una secuencia finita de elementos un número prefijado de veces",
              "correct": true
            },
            {
              "text": "Un comando que apaga el robot cuando el nivel de batería desciende a cero voltios",
              "correct": false
            },
            {
              "text": "Una instrucción para cambiar la frecuencia de reloj del procesador en tiempo real",
              "correct": false
            },
            {
              "text": "Una variable que solo acepta cadenas de texto escritas en mayúsculas",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto del bucle for con su función en la arquitectura del software:",
          "options": [
            {
              "text": "Bucle for|||Estructura de control diseñada para iterar un número prefijado de veces sobre una secuencia",
              "correct": true
            },
            {
              "text": "Variable de iteración|||Variable local que toma automáticamente el elemento o índice actual en cada vuelta",
              "correct": true
            },
            {
              "text": "range(n)|||Generador que produce enteros consecutivos desde 0 hasta n - 1",
              "correct": true
            },
            {
              "text": "Zero-indexing|||Convención informática donde el conteo de secuencias e índices inicia en 0",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las líneas del bucle for para probar los 4 módulos del chasis Swerve:",
          "options": [
            {
              "text": "for motor_id in range(4):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    probar_sparkmax(motor_id)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    esperar_milisegundos(50)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "reportar_chasis_calibrado()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave inicia la iteración contada sobre el rango de 5 pulsos de sonar?",
          "codeSnippet": "____ pulso in range(5):\n    emitir_sonar()\n    registrar_eco()",
          "options": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "while",
              "correct": false
            },
            {
              "text": "repeat",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "En informática y lenguajes modernos como Python, ¿qué índices exactos recorre la instrucción `for i in range(4):`?",
          "options": [
            {
              "text": "0, 1, 2, 3 (exactamente 4 elementos, iniciando en 0 y terminando antes del 4)",
              "correct": true
            },
            {
              "text": "1, 2, 3, 4 (iniciando en 1)",
              "correct": false
            },
            {
              "text": "4, 4, 4, 4 (el número 4 repetido cuatro veces)",
              "correct": false
            },
            {
              "text": "0 y 4 únicamente",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'conteo' al terminar el bucle tras 4 iteraciones sumando 2?",
          "codeSnippet": "conteo = 0\nfor x in range(4):\n    conteo = conteo + 2\nprint(conteo)",
          "options": [
            {
              "text": "8",
              "correct": true
            },
            {
              "text": "4",
              "correct": false
            },
            {
              "text": "6",
              "correct": false
            },
            {
              "text": "10",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Estructura del For: Inicio, Fin y Paso",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo modula la función range(start, stop, step) los intervalos aritméticos generados?",
          "lessonText": "# Intervalos Semiabiertos y Generación por Pasos\n\nEn matemáticas discretas e informática, los rangos se expresan como intervalos semiabiertos: $[start, stop)$, lo que significa que **el valor inicial está incluido pero el límite final está estrictamente excluido**.\n\nLa función `range(start, stop, step)` ofrece tres parámetros:\n- **start:** Valor de inicio (por defecto es 0 si se omite).\n- **stop:** Límite superior exclusivo (la secuencia se detiene antes de alcanzarlo).\n- **step:** Magnitud del incremento entre valores sucesivos.\n\n```python\nfor duty_cycle in range(10, 50, 10):\n    ajustar_pwm(duty_cycle)  # Produce 10, 20, 30, 40\n```\n\nEn la rampa de aceleración de la torreta de Nautilus 4010, `range(10, 50, 10)` modula el ciclo de trabajo (PWM) en 4 escalones del 10% cada 20 milisegundos, evitando tirones bruscos que desgasten la corona dentada de aluminio 7075.\n\n**Regla de Oro: En la función range(start, stop, step), el límite superior 'stop' nunca se incluye en la secuencia generada; la cantidad de elementos generados desde 0 hasta n es exactamente n.**",
          "options": [
            {
              "text": "Genera secuencias aritméticas donde 'start' es inclusivo, 'stop' es exclusivo y 'step' define el incremento",
              "correct": true
            },
            {
              "text": "Calcula el voltaje de corte de los fusibles térmicos según la longitud del cable",
              "correct": false
            },
            {
              "text": "Convierte números enteros en coordenadas polares para la cámara de visión",
              "correct": false
            },
            {
              "text": "Borra las variables intermedias de la memoria para evitar saturar el bus CAN",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada parámetro de la función range con su rol en la progresión aritmética:",
          "options": [
            {
              "text": "Parámetro start|||Valor inicial donde comienza la secuencia aritmética (por defecto 0)",
              "correct": true
            },
            {
              "text": "Parámetro stop|||Límite superior exclusivo que jamás se alcanza en las iteraciones generadas",
              "correct": true
            },
            {
              "text": "Parámetro step|||Magnitud del incremento o salto entre un valor y el siguiente",
              "correct": true
            },
            {
              "text": "Intervalo semiabierto [start, stop)|||Notación matemática que incluye el inicio pero excluye el extremo final",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la secuencia para elevar gradualmente el PWM del motor con un paso de 10:",
          "options": [
            {
              "text": "for pwm in range(10, 50, 10):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    ajustar_potencia_motor(pwm)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    esperar_milisegundos(20)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "estabilizar_velocidad_crucero()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué valor de paso ('step') genera únicamente los canales impares 1, 3, 5?",
          "codeSnippet": "# Recorrer valores impares 1, 3, 5\nfor valor in range(1, 7, ___):\n    procesar_canal(valor)",
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
              "text": "3",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué secuencia numérica exacta genera la instrucción `range(2, 9, 3)`?",
          "options": [
            {
              "text": "2, 5, 8",
              "correct": true
            },
            {
              "text": "2, 5, 8, 11",
              "correct": false
            },
            {
              "text": "2, 3, 4, 5, 6, 7, 8, 9",
              "correct": false
            },
            {
              "text": "0, 3, 6, 9",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el resultado de la suma para los valores generados por range(1, 5, 2) (valores 1 y 3)?",
          "codeSnippet": "total = 0\nfor k in range(1, 5, 2):\n    total = total + k\nprint(total)",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "9",
              "correct": false
            },
            {
              "text": "6",
              "correct": false
            },
            {
              "text": "5",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Bucles Descendentes y Cuenta Regresiva",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se configuran rangos descendentes y cómo previenen daños inductivos en frenado dinámico?",
          "lessonText": "# Secuencias Decrecientes y Rampas de Desaceleración\n\nPara recorrer una secuencia aritmética en orden decreciente, se emplea un **paso negativo** (`step < 0`). La condición matemática exige que el valor inicial (`start`) sea estrictamente mayor que el límite de parada (`stop`). En cada ciclo, el intérprete sustrae el valor absoluto del paso hasta que la variable sea menor o igual al `stop`.\n\n```python\nfor rpm in range(5000, 0, -1000):\n    flywheel.fijar_velocidad(rpm)\n    esperar_milisegundos(100)\nflywheel.desactivar()\n```\n\nEn el lanzador (shooter) de Nautilus 4010, cortar bruscamente la corriente cuando el flywheel gira a 5000 RPM induce un pico de fuerza contraelectromotriz (Back-EMF) capaz de dañar los transistores MOSFET del controlador. Mediante `range(5000, 0, -1000)`, el software reduce la inercia en 5 escalones suaves de frenado regenerativo.\n\n**Regla de Oro: Para decrementar valores en un bucle for, el parámetro step debe ser negativo y el start debe ser estrictamente mayor que el stop.**",
          "options": [
            {
              "text": "Fijando un parámetro step negativo y asegurando que start sea estrictamente mayor que stop",
              "correct": true
            },
            {
              "text": "Multiplicando el valor inicial por menos uno en cada iteración del bucle",
              "correct": false
            },
            {
              "text": "Invirtiendo la pantalla del monitor para leer el código de abajo hacia arriba",
              "correct": false
            },
            {
              "text": "Los bucles for no admiten secuencias decrecientes en ningún lenguaje de programación",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de iteración decreciente con su principio técnico:",
          "options": [
            {
              "text": "Paso negativo (step < 0)|||Decremento sucesivo que permite recorrer secuencias numéricas en reversa",
              "correct": true
            },
            {
              "text": "Rampa de desaceleración|||Disminución gradual de potencia de motores para evitar picos de corriente inductiva",
              "correct": true
            },
            {
              "text": "range(5, 0, -1)|||Genera la secuencia decreciente 5, 4, 3, 2, 1",
              "correct": true
            },
            {
              "text": "Condición de parada inversa|||El bucle termina tan pronto como el valor actual es menor o igual al stop",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la rampa de desaceleración del volante de inercia desde 5000 RPM hasta su apagado:",
          "options": [
            {
              "text": "for rpm in range(5000, 0, -1000):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    flywheel.fijar_velocidad(rpm)",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    esperar_milisegundos(100)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "flywheel.desactivar()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué valor de paso negativo produce la cuenta regresiva desde 3 hasta 1 antes del partido?",
          "codeSnippet": "# Cuenta regresiva desde 3 hasta 1\nfor segundo in range(3, 0, ____):\n    emitir_beep(segundo)\nprint('PARTIDO INICIADO')",
          "options": [
            {
              "text": "-1",
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
              "text": "-2",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué ocurre si se ejecuta `range(10, 0, 1)` con un paso positivo hacia adelante?",
          "options": [
            {
              "text": "El bucle no se ejecuta ninguna vez porque 10 ya superó el límite superior de 0 hacia adelante",
              "correct": true
            },
            {
              "text": "El procesador genera un bucle infinito que cuenta hacia atrás de forma automática",
              "correct": false
            },
            {
              "text": "El compilador invierte automáticamente el signo del paso para corregir el error",
              "correct": false
            },
            {
              "text": "Se produce una excepción fatal de desbordamiento de enteros en la memoria RAM",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'cuenta' tras sumar los valores de range(4, 1, -1) (4 + 3 + 2)?",
          "codeSnippet": "cuenta = 0\nfor x in range(4, 1, -1):\n    cuenta = cuenta + x\nprint(cuenta)",
          "options": [
            {
              "text": "9",
              "correct": true
            },
            {
              "text": "10",
              "correct": false
            },
            {
              "text": "7",
              "correct": false
            },
            {
              "text": "6",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Cuándo Usar For vs Cuándo Usar While",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuáles son los criterios arquitectónicos formales para seleccionar entre un bucle 'for' y un bucle 'while'?",
          "lessonText": "# Criterios de Selección de Estructuras de Control\n\nElegir la estructura iterativa adecuada es una decisión arquitectónica crucial para la confiabilidad y mantenibilidad del software mecatrónico:\n\n- **Utiliza `for` cuando:**\n  1. Conoces con certeza de antemano el número exacto de repeticiones (ej: probar los 4 módulos del chasis Swerve).\n  2. Estás iterando sobre los elementos de una colección finita (ej: una lista de lecturas de sensores o puertos CAN).\n\n- **Utiliza `while` cuando:**\n  1. La iteración depende de un evento externo asíncrono o cambio de estado ambiental (ej: esperar a que un sensor óptico confirme la entrada de una pieza).\n  2. Estás ejecutando el bucle periódico principal del robot (main control loop) mientras el partido esté activo.\n\n**Regla de Oro: Usa 'for' cuando conoces la cantidad de iteraciones o recorres colecciones finitas; usa 'while' cuando la repetición depende de un cambio de estado en el mundo exterior.**",
          "options": [
            {
              "text": "For para número de ciclos conocido o colecciones finitas; While para condiciones dependientes del estado externo",
              "correct": true
            },
            {
              "text": "For es exclusivo para entornos de simulación y While solo se utiliza en robots físicos conectados",
              "correct": false
            },
            {
              "text": "For solo puede ejecutarse en microcontroladores de 8 bits y While en procesadores de 64 bits",
              "correct": false
            },
            {
              "text": "No existe distinción técnica alguna; son sinónimos intercambiables en todos los lenguajes",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Clasifica cada escenario de ingeniería robótica con la estructura iterativa óptima:",
          "options": [
            {
              "text": "Bucle for|||Ideal cuando el número de repeticiones se conoce con certeza de antemano",
              "correct": true
            },
            {
              "text": "Bucle while|||Ideal cuando la repetición depende de un cambio de estado en sensores externos",
              "correct": true
            },
            {
              "text": "Iteración sobre colección|||Patrón donde for examina cada elemento de una lista de motores o puertos",
              "correct": true
            },
            {
              "text": "Bucle de telemetría|||Patrón donde while mantiene activo el sistema mientras el robot siga habilitado",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la rutina con bucle for para recorrer e inicializar la lista de 4 módulos Swerve:",
          "options": [
            {
              "text": "modulos_swerve = [0, 1, 2, 3]",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "for modulo in modulos_swerve:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    verificar_encoder_absoluto(modulo)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "notificar_calibracion_exitosa()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave proporciona la estructura óptima para probar exactamente los 4 frenos del chasis?",
          "codeSnippet": "# Verificar los 4 frenos del chasis\n____ freno_id in range(4):\n    test_freno_neumatico(freno_id)",
          "options": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "while",
              "correct": false
            },
            {
              "text": "during",
              "correct": false
            },
            {
              "text": "switch",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué es un grave error de arquitectura emplear un bucle 'for' con un rango arbitrario como range(10000) para esperar a que un pistón neumático llegue a su final de carrera?",
          "options": [
            {
              "text": "Porque desperdicia tiempo o se detiene prematuramente; una espera de hardware depende de un evento físico y debe gobernarse con 'while' y sensor",
              "correct": true
            },
            {
              "text": "Porque los bucles for no permiten leer variables booleanas en su cuerpo",
              "correct": false
            },
            {
              "text": "Porque range(10000) consume 4 Gigabytes de memoria RAM en el microcontrolador",
              "correct": false
            },
            {
              "text": "Porque las reglas de FIRST exigen que todos los cilindros usen interrupciones analógicas",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos sensores fueron contabilizados al culminar el bucle for sobre range(3)?",
          "codeSnippet": "sensores_activos = 0\nfor pin in range(3):\n    sensores_activos = sensores_activos + 1\nprint(sensores_activos)",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "4",
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
      "title": "Reto: Escaneo LED y Calentamiento de Motores",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se orquestan rutinas de prueba y animación LED en el bus CAN mediante bucles for?",
          "lessonText": "# Secuencias de Pits y Diagnóstico Pre-Match\n\nAntes de cada enfrentamiento en la arena de competencia, el equipo de pits de Nautilus 4010 ejecuta un script de validación que previene fallas mecánicas en pista:\n\n1. **Animación CANdle:** Se comanda a la tira de luces LED CANdle destellar 3 veces en el color dorado de identidad (`#EDB824`) para confirmar la sincronización de la radio.\n2. **Prueba Secuencial de Motores:** Enviar un pulso de corriente de 20A a cada motor individual durante 50 milisegundos para medir la resistencia de fase sin sobrecargar la batería principal.\n\nAmbas rutinas se implementan con bucles `for`, garantizando exactamente la cantidad de ciclos requerida sin retardos imprevistos ni peligro de bloqueos de comunicación.\n\n**Regla de Oro: La automatización de chequeos con bucles for finitos garantiza que cada componente del sistema reciba pruebas idénticas sin omisiones humanas antes de la competencia.**",
          "options": [
            {
              "text": "Automatizando pruebas idénticas y finitas sobre luces y motores para verificar componentes antes de la competencia",
              "correct": true
            },
            {
              "text": "Acelerando todos los motores al máximo en vacío para calentar la batería de 12V",
              "correct": false
            },
            {
              "text": "Desactivando los frenos neumáticos para que el robot se deslice por inercia en la alfombra",
              "correct": false
            },
            {
              "text": "Borrando los archivos de configuración del bus CAN para empezar de cero en cada match",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada subsistema de diagnóstico con su rol técnico en la inspección de pits:",
          "options": [
            {
              "text": "CANdle CTRE|||Controlador de tiras de iluminación LED direccionables en el bus CAN",
              "correct": true
            },
            {
              "text": "Pulso de diagnóstico|||Envío calibrado de corriente de prueba para medir resistencia de devanado",
              "correct": true
            },
            {
              "text": "Bucle de pre-arranque|||Rutina de for loops que valida integridad de subsistemas antes del partido",
              "correct": true
            },
            {
              "text": "Telemetría de pits|||Transmisión de estados de diagnóstico a la pantalla de los ingenieros",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la secuencia del bucle for para emitir 3 destellos de confirmación dorada en la tira LED:",
          "options": [
            {
              "text": "for destello in range(3):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    tira_led.fijar_color('DORADO')",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    esperar_milisegundos(200)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    tira_led.apagar()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué número debe pasarse a range() para medir la corriente en los 4 motores del chasis?",
          "codeSnippet": "for motor_id in range(___):\n    corriente = leer_corriente_amperes(motor_id)\n    validar_resistencia_devanado(corriente)",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "'4'",
              "correct": false
            },
            {
              "text": "True",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué beneficio ofrece ejecutar el calentamiento de motores con un bucle 'for' en vez de enviar potencia a todos al mismo tiempo en paralelo?",
          "options": [
            {
              "text": "Evita picos de corriente masivos en la batería principal probando cada motor secuencialmente con telemetría individualizada",
              "correct": true
            },
            {
              "text": "Permite que los motores giren sin necesidad de conectar la batería de 12V",
              "correct": false
            },
            {
              "text": "Multiplica por cuatro la velocidad máxima de avance del chasis durante el partido",
              "correct": false
            },
            {
              "text": "Borra automáticamente los logs de fallas del procesador roboRIO",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos pulsos de prueba se generaron en la combinación de pruebas anidadas range(2) y range(2)?",
          "codeSnippet": "repeticiones = 0\nfor a in range(2):\n    for b in range(2):\n        repeticiones = repeticiones + 1\nprint(repeticiones)",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "1",
              "correct": false
            }
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
  "order": 13,
  "slug": "unit-13",
  "title": "Loop Control: Break & Continue",
  "description": "Control de flujo en bucles: Salidas tempranas, centinelas y paradas de emergencia",
  "guidebookText": "# Guía de Estudio: Unit 13 - Loop Control: Break & Continue\n\nA veces, las reglas fijas de un bucle no son suficientes. Durante la ejecución en el mundo real, puede ocurrir un evento imprevisto (un sensor detecta un obstáculo súbito, o una lectura resulta inválida) que nos obliga a alterar el curso normal de la iteración.\n\n### Instrucciones Especiales de Bucles:\n1. **`break` (Romper el bucle):** Aborta el bucle de inmediato y salta a la primera línea fuera de él. Es el equivalente a una **Parada de Emergencia (E-Stop)**.\n2. **`continue` (Saltar turno):** Ignora el resto del código del ciclo actual y salta de inmediato a la siguiente iteración.\n3. **Variables Bandera (Flags):** Variables booleanas (`encontrado = false`) usadas para coordinar la salida de bucles complejos.",
  "lessons": [
    {
      "title": "Rompiendo el Ciclo: La Sentencia Break",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué efecto produce la sentencia 'break' y cómo optimiza la búsqueda de objetivos de visión artificial?",
          "lessonText": "# Salidas Tempranas y Transferencia de Control\n\nEn la teoría de lenguajes de programación, la sentencia **`break`** transfiere incondicionalmente el registro contador de instrucciones (Program Counter) a la primera línea situada fuera del bucle contenedor más próximo, abortando de inmediato cualquier ciclo pendiente.\n\n```python\nfor target_id in range(1, 11):\n    if camara.detectar_tag(target_id) == True:\n        fijar_blanco(target_id)\n        break  # Objetivo encontrado: abortar iteraciones restantes\n```\n\nEn el pipeline de visión artificial de Nautilus 4010, la cámara Limelight procesa etiquetas AprilTag en el campo. Si el algoritmo busca la etiqueta de la alianza y la localiza en el índice 3, ejecutar `break` evita iterar innecesariamente sobre las 7 etiquetas restantes, reduciendo la latencia de procesamiento de 30 ms a solo 8 ms.\n\n**Regla de Oro: 'break' destruye el bucle y escapa de él inmediatamente, transfiriendo el flujo a la siguiente instrucción fuera del ciclo.**",
          "options": [
            {
              "text": "Cancela y termina el bucle de inmediato transfiriendo el control a la primera instrucción exterior",
              "correct": true
            },
            {
              "text": "Pausa el procesador durante 10 segundos antes de reanudar el bucle",
              "correct": false
            },
            {
              "text": "Desconecta físicamente la cámara de visión artificial del puerto Ethernet",
              "correct": false
            },
            {
              "text": "Reinicia el bucle desde la primera iteración sin guardar los datos",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de salida temprana con su principio computacional:",
          "options": [
            {
              "text": "Sentencia break|||Instrucción que cancela inmediatamente el bucle y salta al código posterior",
              "correct": true
            },
            {
              "text": "Búsqueda temprana|||Patrón de optimización que detiene el bucle en cuanto encuentra el objetivo deseado",
              "correct": true
            },
            {
              "text": "Salto incondicional exterior|||Transferencia del Program Counter fuera de la estructura de iteración",
              "correct": true
            },
            {
              "text": "Consumo de ciclos innecesario|||Desperdicio de CPU que ocurre cuando se continúa buscando tras hallar la solución",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la secuencia de búsqueda temprana con salida inmediata al hallar el tag:",
          "options": [
            {
              "text": "for target_id in range(1, 11):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    if camara.detectar_tag(target_id) == True:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "        fijar_blanco(target_id)",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "        break",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción aborta inmediatamente el bucle al detectar un obstáculo crítico a menos de 10 cm?",
          "codeSnippet": "while True:\n    distancia = sensor_sonar.medir()\n    if distancia < 10.0:\n        detener_chasis()\n        _____",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "continue",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "exit",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Si se tienen dos bucles anidados (un bucle dentro de otro) y se ejecuta 'break' dentro del bucle interno, ¿qué bucle se interrumpe?",
          "options": [
            {
              "text": "Únicamente el bucle más interno donde está colocada la instrucción break",
              "correct": true
            },
            {
              "text": "Ambos bucles se cierran y terminan de manera simultánea",
              "correct": false
            },
            {
              "text": "El bucle exterior únicamente, dejando al interior corriendo indefinidamente",
              "correct": false
            },
            {
              "text": "El compilador genera un error de ambigüedad de alcance léxico",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'suma' si el bucle suma 1 y 2, y ejecuta break al llegar a 3?",
          "codeSnippet": "suma = 0\nfor x in range(1, 6):\n    if x == 3:\n        break\n    suma = suma + x\nprint(suma)",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "6",
              "correct": false
            },
            {
              "text": "1",
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
      "title": "Saltando de Turno: La Sentencia Continue",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo funciona la sentencia 'continue' y en qué casos de telemetría y sensores resulta esencial?",
          "lessonText": "# Filtrado de Datos y Salto de Iteración\n\nMientras que `break` destruye el bucle por completo, la sentencia **`continue`** cancela **únicamente la iteración actual**. El Program Counter omite las líneas restantes de ese ciclo y regresa de inmediato a la cabecera del bucle para evaluar la condición o tomar el siguiente elemento.\n\n```python\nfor id_modulo in range(4):\n    if modulo_en_mantenimiento(id_modulo) == True:\n        continue  # Omitir modulo temporalmente inactivo\n    probar_sparkmax(id_modulo)\n```\n\nEn la arquitectura de telemetría de Nautilus 4010, `continue` es fundamental al procesar tramas del bus CAN: si una muestra analógica llega con un checksum inválido por ruido electromagnético, el código ejecuta `continue` para descartar esa muestra puntual sin interrumpir el flujo continuo de lecturas del resto de sensores.\n\n**Regla de Oro: 'continue' salta al inicio de la siguiente iteración omitiendo el código restante del ciclo actual.**",
          "options": [
            {
              "text": "Aborta el turno actual y salta al inicio de la siguiente iteración sin destruir el bucle",
              "correct": true
            },
            {
              "text": "Apaga la pantalla del piloto durante tres segundos para ahorrar energía",
              "correct": false
            },
            {
              "text": "Elimina la variable de iteración de la memoria caché del procesador",
              "correct": false
            },
            {
              "text": "Es idéntico a break y los compiladores los tratan como la misma instrucción",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de control de flujo con su comportamiento exacto:",
          "options": [
            {
              "text": "Sentencia continue|||Interrumpe la vuelta actual y transfiere el control a la cabecera del siguiente ciclo",
              "correct": true
            },
            {
              "text": "Filtrado de muestras|||Omisión de lecturas ruidosas o corruptas sin detener el procesamiento de datos",
              "correct": true
            },
            {
              "text": "Preservación del bucle|||A diferencia de break, continue mantiene el bucle activo para las iteraciones restantes",
              "correct": true
            },
            {
              "text": "Salto a la cabecera|||Reevaluación inmediata de la condición del while o avance al siguiente elemento en for",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las líneas para omitir módulos en mantenimiento mediante continue:",
          "options": [
            {
              "text": "for id_modulo in range(4):",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    if modulo_en_mantenimiento(id_modulo) == True:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "        continue",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    probar_sparkmax(id_modulo)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción salta la muestra actual si la lectura es negativa sin abortar el bucle?",
          "codeSnippet": "for lectura in lecturas_sensores:\n    if lectura < 0.0:\n        ____  # Ignorar lectura invalida y saltar al siguiente dato\n    procesar_dato(lectura)",
          "options": [
            {
              "text": "continue",
              "correct": true
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "stop",
              "correct": false
            },
            {
              "text": "skip",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿En qué escenario de procesamiento de telemetría es arquitectónicamente preferible usar 'continue' sobre 'break'?",
          "options": [
            {
              "text": "Al procesar un lote de paquetes de sensores donde un paquete corrupto debe descartarse sin cancelar el análisis de los paquetes restantes",
              "correct": true
            },
            {
              "text": "Al detectar un sobrecalentamiento crítico en un motor que exige desenergizar el mecanismo",
              "correct": false
            },
            {
              "text": "Al apagar el robot por completo tras culminar el partido de competencia",
              "correct": false
            },
            {
              "text": "Para evitar que el procesador ejecute instrucciones en registros impares",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuántos números fueron procesados e incrementados en 'impresos' tras omitir el valor 2 con continue?",
          "codeSnippet": "impresos = 0\nfor n in range(5):\n    if n == 2:\n        continue\n    impresos = impresos + 1\nprint(impresos)",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "5",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Variables Bandera (Flags)",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es una variable bandera (flag) y cómo coordina estados entre bucles y subsistemas?",
          "lessonText": "# Coordinación de Estados y Banderas Lógicas\n\nUna **variable bandera (flag)** es un indicador booleano (`True` o `False`) que registra la ocurrencia de un evento de interés dentro de una rutina para que otros módulos del programa puedan actuar sobre ese resultado con posterioridad.\n\n```python\nalerta_temperatura = False\nfor temp in temperaturas_motores:\n    if temp > 80.0:\n        alerta_temperatura = True\n        break\n\nif alerta_temperatura:\n    activar_ventilacion_maxima()\n```\n\nEn Nautilus 4010, el subsistema de admisión utiliza una bandera `nota_asegurada`. Cuando el sensor ToF confirma que la pieza ingresó a la cámara de tiro, la bandera se fija en `True` y se rompe el bucle de búsqueda. El subsistema del shooter consulta esta bandera para autorizar la ignición de los motores del flywheel.\n\n**Regla de Oro: Las variables bandera almacenan el resultado booleano de una búsqueda o condición dentro de un bucle para que otros módulos del programa puedan actuar sobre ese estado tras salir de él.**",
          "options": [
            {
              "text": "Una variable booleana que registra si un evento o condición ocurrió durante un ciclo para que otros módulos puedan actuar",
              "correct": true
            },
            {
              "text": "Un cable especial que conecta el chasis a la tierra física del campo de juego",
              "correct": false
            },
            {
              "text": "Un archivo de texto que almacena contraseñas de seguridad de la Driver Station",
              "correct": false
            },
            {
              "text": "Una función que multiplica números flotantes por potencias de diez automáticamente",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada aspecto del patrón de bandera lógica con su función:",
          "options": [
            {
              "text": "Variable bandera (Flag)|||Variable booleana que registra si un evento o condición ocurrió durante el bucle",
              "correct": true
            },
            {
              "text": "Desacoplamiento de módulos|||Permite que la detección de un sensor comunique su resultado a otro subsistema",
              "correct": true
            },
            {
              "text": "Inicialización en False|||Estado estándar de la bandera antes de comenzar la exploración o búsqueda",
              "correct": true
            },
            {
              "text": "Levantar la bandera|||Asignación del valor True cuando la condición buscada se verifica exitosamente",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura para inicializar la bandera y activarla al detectar sobrecalentamiento:",
          "options": [
            {
              "text": "alerta_temperatura = False",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "for temp in temperaturas_motores:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    if temp > 80.0:",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "        alerta_temperatura = True",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Con qué valor booleano debe inicializarse la bandera antes de comenzar la búsqueda?",
          "codeSnippet": "objetivo_encontrado = _____\nfor tag in tags_detectados:\n    if tag == ID_SPEAKER:\n        objetivo_encontrado = True\n        break",
          "options": [
            {
              "text": "False",
              "correct": true
            },
            {
              "text": "True",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué combinar una variable bandera con un 'break' es un patrón de diseño eficiente en algoritmos de búsqueda?",
          "options": [
            {
              "text": "Porque registra el éxito de la búsqueda para el resto del programa y ahorra tiempo de CPU abortando iteraciones innecesarias",
              "correct": true
            },
            {
              "text": "Porque reduce el voltaje físico requerido por la memoria RAM del controlador",
              "correct": false
            },
            {
              "text": "Porque permite cambiar dinámicamente el nombre de las variables durante el partido",
              "correct": false
            },
            {
              "text": "Porque evita que el bus CAN transmita paquetes a más de 10 baudios",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué imprimirá la consola tras escanear la lista de códigos y detectar un fallo?",
          "codeSnippet": "falla_detectada = False\nfor codigo in [0, 0, 404, 0]:\n    if codigo != 0:\n        falla_detectada = True\n        break\nprint(falla_detectada)",
          "options": [
            {
              "text": "True",
              "correct": true
            },
            {
              "text": "False",
              "correct": false
            },
            {
              "text": "404",
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
      "title": "Parada de Emergencia (E-Stop)",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se diseña un mecanismo de parada de emergencia en software (E-Stop) para proteger vidas e infraestructura?",
          "lessonText": "# Seguridad Crítica y Corte Inmediato de Potencia\n\nEn FIRST Robotics Competition y automatización industrial, la seguridad física es la prioridad número uno. Si un actuador mecánico sufre un bloqueo mecánico o una corriente sostenida por encima de 40 Amperes, el devanado del motor puede recalentarse e incendiarse en cuestión de segundos si el software no interviene de forma inmediata.\n\n```python\nwhile robot_habilitado == True:\n    if leer_corriente_amperes() > 40.0:\n        cortar_alimentacion_motores()\n        registrar_alerta_critica('ESTOP_SOBRECORRIENTE')\n        break  # Salida instantanea del lazo de potencia\n    actualizar_actuadores()\n```\n\nEl uso de `break` dentro de la condición de seguridad garantiza que ningún comando subsiguiente de aceleración pueda ejecutarse, transfiriendo el control de inmediato al protocolo de desaceleración y frenado pasivo.\n\n**Regla de Oro: Los mecanismos de parada de emergencia en software utilizan break para desarmar inmediatamente los bucles de actuación y transicionar a un estado de fallo seguro (fail-safe).**",
          "options": [
            {
              "text": "Interrumpiendo inmediatamente los bucles de actuación con break al detectar sobrecorrientes o condiciones de peligro físico",
              "correct": true
            },
            {
              "text": "Aumentando la velocidad de los motores para intentar forzar la liberación del mecanismo atascado",
              "correct": false
            },
            {
              "text": "Esperando a que la batería principal se agote por completo para verificar la falla",
              "correct": false
            },
            {
              "text": "Desactivando los sensores de telemetría para no saturar los registros del procesador",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto del protocolo E-Stop con su significado técnico:",
          "options": [
            {
              "text": "E-Stop en software|||Interrupción instantánea del lazo de control con corte de energía a actuadores",
              "correct": true
            },
            {
              "text": "Sobrecorriente crítica|||Consumo mayor a 40A en un motor que exige apagado inmediato para evitar ignición",
              "correct": true
            },
            {
              "text": "Fail-Safe Actuation|||Mecanismo que retorna a una posición mecánicamente segura al cortar la señal",
              "correct": true
            },
            {
              "text": "Salida inmediata|||Uso de break para no esperar el término del ciclo en situaciones de riesgo físico",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena el protocolo de parada de emergencia en software ante sobrecorriente en el motor:",
          "options": [
            {
              "text": "while robot_habilitado == True:",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    if leer_corriente_amperes() > 40.0:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "        cortar_alimentacion_motores()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "        break",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción interrumpe y aborta el bucle de actuación al presionar el botón de parada?",
          "codeSnippet": "while True:\n    if boton_parada_presionado() == True:\n        apagar_todos_los_sistemas()\n        _____\n    actualizar_chasis()",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "continue",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "resume",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Cuál es la regla fundamental de diseño respecto a la parada de emergencia en sistemas robóticos de alta potencia?",
          "options": [
            {
              "text": "La seguridad es innegociable: el código debe estar programado para fallar de forma segura (fail-safe), cortando la actuación ante anomalías críticas",
              "correct": true
            },
            {
              "text": "El software debe intentar continuar acelerando los motores aunque haya indicios de humo o atasco",
              "correct": false
            },
            {
              "text": "Los sensores de corriente deben deshabilitarse en partidos decisivos para maximizar el empuje",
              "correct": false
            },
            {
              "text": "La parada de emergencia solo debe programarse en lenguajes interpretados como HTML",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué estado final adoptará el controlador al dispararse la parada de emergencia en el ciclo 2?",
          "codeSnippet": "estado = 'OPERATIVO'\nfor ciclo in range(5):\n    if ciclo == 2:\n        estado = 'ESTOP_EMERGENCIA'\n        break\nprint(estado)",
          "options": [
            {
              "text": "'ESTOP_EMERGENCIA'",
              "correct": true
            },
            {
              "text": "'OPERATIVO'",
              "correct": false
            },
            {
              "text": "'ESTOP_EMERGENCIA 2'",
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
      "title": "Reto: Rescate de un Bucle Trabado",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se implementa un centinela de timeout para rescatar un bucle bloqueado por un sensor averiado?",
          "lessonText": "# El Centinela de Timeout y la Falla de Hardware\n\nEn entornos reales de competencia robótica, los cables de señal pueden soltarse debido a vibraciones mecánicas violentas o impactos contra otros robots. Si un bucle `while` depende exclusivamente de que un sensor marque `True` (`while sensor_piso.detectado() == False:`) y el cable de señal se desconecta, el sensor jamás reportará contacto y el robot intentará empujar indefinidamente.\n\n```python\nintentos = 0\nwhile sensor_piso.detectado() == False:\n    motor_elevador.subir(0.3)\n    intentos += 1\n    if intentos >= 50:\n        notificar_falla('TIMEOUT_SENSOR_ELEVADOR')\n        motor_elevador.frenar()\n        break  # Rescate del bucle trabado\n```\n\nEl centinela de intentos supervisa la duración máxima permitida. Al superar el umbral de 50 ciclos (aproximadamente un segundo de movimiento), ejecuta `break`, salva el mecanismo de una fractura física y permite que el robot continúe disputando el partido con sus otros subsistemas activos.\n\n**Regla de Oro: La combinación de break con un contador de intentos límite previene que un bucle dependiente de sensores físicos quede atrapado para siempre ante una falla de cableado.**",
          "options": [
            {
              "text": "Supervisando el bucle con un contador incremental que ejecuta break si se excede el límite temporal o de intentos seguro",
              "correct": true
            },
            {
              "text": "Eliminando todos los sensores mecánicos y operando el robot a ciegas sin verificar límites",
              "correct": false
            },
            {
              "text": "Sustituyendo el código de control por instrucciones de espera pasiva indefinida",
              "correct": false
            },
            {
              "text": "Aumentando la velocidad del motor para compensar la falta de lectura del sensor",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada componente del patrón de centinela de rescate con su función técnica:",
          "options": [
            {
              "text": "Timeout Sentinel|||Contador incremental que fuerza la salida de un bucle si una condición tarda demasiado",
              "correct": true
            },
            {
              "text": "Cable flojo / desconectado|||Fallo físico común donde un sensor nunca envía la señal de confirmación",
              "correct": true
            },
            {
              "text": "Protección mecánica|||Acción de software que evita quemar motores o romper transmisiones atascadas",
              "correct": true
            },
            {
              "text": "Reporte de diagnóstico|||Notificación a la telemetría indicando que el mecanismo se detuvo por timeout",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura del bucle de elevación con centinela de seguridad por límite de intentos:",
          "options": [
            {
              "text": "intentos_muestreo = 0",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "while sensor_piso.detectado() == False:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    intentos_muestreo = intentos_muestreo + 1",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    if intentos_muestreo >= 50: break",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción rompe el bucle trabado al alcanzar el límite de 100 intentos?",
          "codeSnippet": "intentos = 0\nwhile sensor_activo == False:\n    intentos = intentos + 1\n    if intentos >= 100:\n        notificar_timeout()\n        _____",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "continue",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué añadir un centinela de intentos con 'break' es obligatorio en todo bucle que espera una confirmación de un sensor mecánico?",
          "options": [
            {
              "text": "Porque si el sensor se rompe físicamente, el bucle se congelaría para siempre quemando el motor o bloqueando el procesador del robot",
              "correct": true
            },
            {
              "text": "Porque el lenguaje Python suspende la conexión Wi-Fi si un sensor lee más de 5 veces",
              "correct": false
            },
            {
              "text": "Porque los contadores de intentos aumentan la potencia de salida de los actuadores neumáticos",
              "correct": false
            },
            {
              "text": "Porque los sensores mecánicos se calientan si no se detiene el bucle con un número entero",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'intentos' al interrumpir el bucle infinito mediante el break cuando intentos llega a 4?",
          "codeSnippet": "intentos = 0\nwhile True:\n    intentos = intentos + 1\n    if intentos == 4:\n        break\nprint(intentos)",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "5",
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
