import { UnitDefinition } from "./types";

export const block5Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 14: FUNCTIONS I: REUSABLE CODE
  // ==========================================
  {
    order: 14,
    slug: "unit-14",
    title: "Functions I: Reusable Code",
    description: "Modularización: El principio DRY y cómo crear tus propios comandos",
    guidebookText: `# Guía de Estudio: Unit 14 - Functions I: Reusable Code

Una **función** es un bloque de código empaquetado con un nombre que realiza una tarea específica y que puedes **reutilizar** cuantas veces quieras sin reescribirlo.

### El Principio DRY (Don't Repeat Yourself):
En ingeniería de software profesional, si copias y pegas el mismo bloque de código más de dos veces, estás cometiendo un grave error arquitectónico. Si encuentras un bug, tendrías que corregirlo en 10 lugares distintos. Con una función, solo lo corriges una vez.

### Anatomía de una Función:
1. **Definición (\`def\` / \`void\`):** Especifica el nombre de la función y las instrucciones que contiene.
2. **Invocación / Llamada (\`nombreFuncion()\`):** Los paréntesis \`()\` le dicen a la CPU: *'¡Ejecuta este bloque ahora mismo!'*.
3. **Scope (Ámbito):** Las variables creadas dentro de una función son **locales** y desaparecen cuando la función termina.`,
    lessons: [
      {
        title: "El Principio DRY: No Te Repitas",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué copiar y pegar código es peligroso y cómo lo resuelven las funciones?",
            lessonText: "# La Pesadilla de Copiar y Pegar 🍝\n\nImagina que para encender el robot necesitas ejecutar 5 líneas de configuración.\n\nSi copias y pegas esas 5 líneas en 10 lugares diferentes de tu programa:\n- Tu código tendrá 50 líneas repetitivas y sucias.\n- Si descubres que uno de los puertos del motor cambió, ¡tienes que buscar y editar los 10 lugares a mano!\n- Si olvidas uno solo, tu robot tendrá un bug fantasma.\n\nEl **Principio DRY (Don't Repeat Yourself)** dice:\n*'Empaqueta esas 5 líneas dentro de una función llamada `iniciarRobot()` y solo llámala cuando la necesites'*. Limpio, modular y profesional.",
            options: [
              { text: "Empaquetar código repetitivo en una función para reutilizarlo y mantenerlo en un solo lugar", correct: true },
              { text: "Copiar y pegar la mayor cantidad de veces posible para hacer el archivo más grande", correct: false },
              { text: "Borrar todo el código y dejar el archivo en blanco", correct: false },
              { text: "No usar nunca motores ni sensores", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Qué significan las siglas del principio fundamental de la ingeniería de software 'DRY'?",
            options: [
              { text: "Don't Repeat Yourself (No te repitas a ti mismo)", correct: true },
              { text: "Do Robots Yesterday", correct: false },
              { text: "Drive Right Yearly", correct: false },
              { text: "Delete Random Yields", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes problemas es una consecuencia directa de NO usar funciones?",
            options: [
              { text: "Código duplicado imposible de mantener y con alto riesgo de bugs inconsistentes", correct: true },
              { text: "La computadora se queda sin batería en 1 minuto", correct: false },
              { text: "Los motores giran al revés automáticamente", correct: false },
              { text: "Se apaga el monitor de la computadora", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto de funciones con su rol:",
            options: [
              { text: "Definir función|||Crear el bloque de instrucciones con un nombre", correct: true },
              { text: "Llamar función|||Ejecutar las instrucciones usando ()", correct: true },
              { text: "DRY|||Principio de evitar la duplicación de código", correct: true },
              { text: "Modularidad|||Dividir un programa grande en piezas pequeñas y legibles", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para invocar la función 'frenarRobot':",
            codeSnippet: "// Llama a la función",
            options: [
              { text: "frenarRobot()", correct: true },
              { text: "frenarRobot", correct: false }
            ]
          }
        ]
      },
      {
        title: "Definición e Invocación de Funciones",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se define y cómo se ejecuta una función?",
            lessonText: "# El Botón Personalizado 🔘\n\nCrear una función es como construir un botón en una máquina:\n\n1. **Definir la función (Construir el botón):**\nEn Python usamos la palabra clave `def`:\n```python\ndef pitarAlarma():\n    print('¡BEEP! Robot en movimiento')\n```\n*Nota: Definir la función NO ejecuta el código todavía. Solo le enseña a la computadora qué hacer cuando se le pida.*\n\n2. **Invocar / Llamar a la función (Apretar el botón):**\n```python\npitarAlarma()  # ¡Aquí es donde la CPU corre el código!\n```\nLos paréntesis `()` son los que activan la ejecución.",
            options: [
              { text: "Se define con def/void y se ejecuta escribiendo su nombre seguido de paréntesis ()", correct: true },
              { text: "Se ejecuta automáticamente al escribir su nombre con mayúsculas", correct: false },
              { text: "Las funciones se ejecutan solas cada 5 segundos sin llamarlas", correct: false },
              { text: "No se pueden crear funciones propias en ningún lenguaje", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la palabra clave para definir la función en Python:",
            codeSnippet: "_____ encenderLuces():\n    print('LEDs Dorados Encendidos')",
            options: [
              { text: "def", correct: true },
              { text: "function", correct: false },
              { text: "create", correct: false },
              { text: "make", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá la consola tras ejecutar este programa?",
            codeSnippet: "def saludo():\n    print('Hola Nautilus')\n\nprint('Inicio')\nsaludo()\nprint('Fin')",
            options: [
              { text: "Inicio\nHola Nautilus\nFin", correct: true },
              { text: "Hola Nautilus\nInicio\nFin", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué ocurre si defines una función pero NUNCA la llamas en el código principal?",
            codeSnippet: "def dispararPelota():\n    print('¡Fuego!')\n\nprint('Robot esperando...')",
            options: [
              { text: "Solo imprime 'Robot esperando...'; el código dentro de la función nunca se ejecuta", correct: true },
              { text: "Se ejecuta de todos modos al final del archivo", correct: false },
              { text: "Dará un error de compilación", correct: false },
              { text: "La computadora se confunde", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error: Olvidaron los paréntesis para invocar la función.",
            codeSnippet: "def calibrar():\n    print('Calibrando gyro...')\n\ncalibrar",
            options: [
              { text: "Faltan los paréntesis () al final: calibrar()", correct: true },
              { text: "La palabra calibrar está mal escrita", correct: false },
              { text: "Hay que quitar el print", correct: false },
              { text: "No se puede usar la palabra gyro", correct: false }
            ]
          }
        ]
      },
      {
        title: "Scope de Variables: Local vs Global",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es el 'Scope' (alcance) de una variable?",
            lessonText: "# Lo Que Pasa en la Función, Se Queda en la Función 🔒\n\nEl **Scope** determina en qué partes de tu programa una variable es visible y accesible:\n\n1. **Variables Locales:** Se crean DENTRO de una función.\n   - Solo existen mientras la función se está ejecutando.\n   - En cuanto la función termina, la caja de memoria **se destruye**.\n   - ¡El código de afuera no puede verlas ni usarlas!\n\n2. **Variables Globales:** Se crean AFUERA de todas las funciones.\n   - Cualquier función puede leerlas a lo largo de todo el archivo.",
            options: [
              { text: "La región del programa donde una variable existe y puede ser consultada", correct: true },
              { text: "La distancia a la que llega el radio Wi-Fi del robot", correct: false },
              { text: "El tamaño en píxeles del monitor del programador", correct: false },
              { text: "Un telescopio para ver las estrellas", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué pasará al intentar imprimir 'sensorInterno' fuera de la función?",
            codeSnippet: "def leer():\n    sensorInterno = 55\n\nleer()\nprint(sensorInterno)",
            options: [
              { text: "Error (NameError: sensorInterno is not defined) porque la variable murió al terminar la función", correct: true },
              { text: "Imprime 55 perfectamente", correct: false },
              { text: "Imprime 0", correct: false },
              { text: "Imprime null", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué es una pésima práctica llenar tu programa de variables 100% globales?",
            options: [
              { text: "Porque cualquier función puede modificarlas por accidente, creando bugs invisibles difíciles de rastrear", correct: true },
              { text: "Porque las variables globales hacen que el chasis pese el doble", correct: false },
              { text: "Porque a los compiladores les gustan solo las variables locales", correct: false },
              { text: "No es mala práctica, todas las variables deberían ser globales siempre", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja cada concepto de Scope con su característica:",
            options: [
              { text: "Variable Local|||Vive solo dentro de la función donde nació", correct: true },
              { text: "Variable Global|||Accesible desde cualquier punto del programa", correct: true },
              { text: "Shadowing|||Cuando una variable local tiene el mismo nombre que una global", correct: true },
              { text: "Parámetro|||Variable local que recibe un dato desde el exterior", correct: true }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué valor imprimirá la variable global 'puntos'?",
            codeSnippet: "puntos = 100\n\ndef jugar():\n    puntosLocales = 20\n\njugar()\nprint(puntos)",
            options: [
              { text: "100", correct: true },
              { text: "20", correct: false }
            ]
          }
        ]
      },
      {
        title: "Leyendo y Organizando Código Modular",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo transforman las funciones la legibilidad de un sistema robótico?",
            lessonText: "# Código que Cuenta una Historia 📖\n\nCompara estos dos estilos para el autonomous de Nautilus:\n\n**Estilo 1 (Caótico sin funciones):**\n```python\n# 400 líneas de cálculos matemáticos, números mágicos y registros de puertos revueltos...\n```\n\n**Estilo 2 (Elegante y Modular con funciones):**\n```python\ndef rutinaAutonomo():\n    salirDeZonaInicio()\n    localizarNotaConLimelight()\n    recogerNotaConIntake()\n    apuntarYShoot()\n```\n¡Cualquier integrante del equipo (mecánica, eléctrica, mentores) puede leer el código y entender la estrategia al instante!",
            options: [
              { text: "Dividen la complejidad en módulos comprensibles con nombres que describen acciones humanas", correct: true },
              { text: "Aumentan la complejidad para que nadie más pueda entender el código", correct: false },
              { text: "Hacen que el archivo tenga más hojas al imprimirlo", correct: false },
              { text: "Sirven únicamente para cambiar el idioma de la computadora", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la arquitectura limpia de este archivo (Funciones primero -> Código ejecutor al final):",
            options: [
              { text: "def calibrarSensores(): print('Sensores OK')", correct: true, audioSrc: "1" },
              { text: "def encenderMotores(): print('Motores OK')", correct: true, audioSrc: "2" },
              { text: "calibrarSensores()", correct: true, audioSrc: "3" },
              { text: "encenderMotores()", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre si intentas llamar a una función en la línea 1 antes de haberla definido en la línea 10 en lenguajes como Python?",
            options: [
              { text: "Error: La función aún no está definida en ese punto de la ejecución secuencial", correct: true },
              { text: "Python viaja en el tiempo y la ejecuta sin problemas", correct: false },
              { text: "La función se borra sola", correct: false },
              { text: "El monitor se pone en pausa", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué salida producirá este conjunto de funciones?",
            codeSnippet: "def paso1():\n    print('A')\ndef paso2():\n    print('B')\n\npaso2()\npaso1()",
            options: [
              { text: "B\nA", correct: true },
              { text: "A\nB", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la invocación de la función de parada:",
            codeSnippet: "def pararTodo():\n    print('Robot en Alto Total')\n\n_____",
            options: [
              { text: "pararTodo()", correct: true },
              { text: "pararTodo;", correct: false },
              { text: "call pararTodo", correct: false },
              { text: "run(pararTodo)", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Comandos Base del Chasis",
        challenges: [
          {
            type: "THEORY",
            question: "¡Construyendo la librería de movimientos de Nautilus 4010!",
            lessonText: "# El Kit de Movimiento de Teus 🎮\n\nPara que los pilotos y los programadores de autónomo no tengan que lidiar con voltajes individuales de 4 ruedas en cada línea, creamos la capa de abstracción de comandos:\n- `avanzar()`\n- `retroceder()`\n- `girarDerecha()`\n- `frenar()`\n\nEn este reto final de la Unidad 14, definirás y enlazarás las funciones base del chasis para crear una coreografía limpia de movimientos.",
            options: [
              { text: "¡Vamos a programar los comandos del chasis con Teus!", correct: true },
              { text: "Prefiero mover cada rueda escribiendo voltajes a mano", correct: false },
              { text: "No quiero modularizar", correct: false },
              { text: "Quiero desconectar los motores", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Define la función 'frenar' que imprima 'MOTORES DETENIDOS':",
            codeSnippet: "// Define la función frenar",
            options: [
              { text: "def frenar():\n    print('MOTORES DETENIDOS')", correct: true },
              { text: "def frenar: print('MOTORES DETENIDOS')", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué secuencia de acciones mostrará este autónomo modular?",
            codeSnippet: "def avanzar():\n    print('AVANZANDO')\ndef disparar():\n    print('DISPARANDO')\n\navanzar()\ndisparar()",
            options: [
              { text: "AVANZANDO\nDISPARANDO", correct: true },
              { text: "DISPARANDO\nAVANZANDO", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la rutina para definir y ejecutar la maniobra de giro:",
            options: [
              { text: "def girar90Grados():", correct: true, audioSrc: "1" },
              { text: "    print('Iniciando rotación...')", correct: true, audioSrc: "2" },
              { text: "    print('Rotación de 90 grados completada')", correct: true, audioSrc: "3" },
              { text: "girar90Grados()", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el resumen de la Unidad 14 sobre Funciones?",
            options: [
              { text: "Las funciones nos permiten organizar código complejo en bloques reutilizables, legibles y fáciles de mantener", correct: true },
              { text: "Las funciones solo sirven para imprimir texto", correct: false },
              { text: "Usar funciones hace que el programa consuma toda la memoria", correct: false },
              { text: "Las funciones están prohibidas en competencias de robótica", correct: false }
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
    order: 15,
    slug: "unit-15",
    title: "Functions II: Parameters & Returns",
    description: "Funciones poderosas: Pasar argumentos y devolver resultados con return",
    guidebookText: `# Guía de Estudio: Unit 15 - Functions II: Parameters & Returns

Una función sin parámetros siempre hace exactamente lo mismo. Para que una función sea verdaderamente versátil, necesitamos **pasarle datos de entrada (Parámetros)** y **recibir un resultado calculado (Valor de Retorno)**.

### 1. Parámetros y Argumentos:
- **Parámetro:** La variable que la función espera recibir en su definición (\`def avanzar(distanciaMetros):\`).
- **Argumento:** El valor real que le envías al momento de llamarla (\`avanzar(2.5)\`).

### 2. La Sentencia \`return\`:
- La palabra clave **\`return\`** toma el resultado final de un cálculo y lo **devuelve** al lugar donde la función fue llamada.
- Cuando la CPU encuentra un \`return\`, la función **termina de inmediato**.
\`\`\`python
def calcularDistancia(ticks):
    return ticks * 0.05

cm = calcularDistancia(400) # cm ahora vale 20.0
\`\`\``,
    lessons: [
      {
        title: "Pasando Datos: Parámetros y Argumentos",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la diferencia entre un parámetro y un argumento?",
            lessonText: "# Funciones Personalizables 🎛️\n\nImagina una función `avanzar()`. Si siempre avanza a velocidad fija de 50%, no nos sirve cuando queremos ir despacio o a fondo.\n\nPara hacerla flexible, agregamos **Parámetros** entre los paréntesis:\n```python\ndef avanzar(velocidad):\n    print('Avanzando a potencia: ' + str(velocidad))\n```\n- **Parámetro:** El nombre de la variable receptora en la definición (`velocidad`).\n- **Argumento:** El valor concreto que le pasas al llamarla: `avanzar(0.3)` o `avanzar(1.0)`.\n\n¡La misma función ahora sirve para cualquier velocidad imaginable!",
            options: [
              { text: "El parámetro es la variable en la definición; el argumento es el valor real enviado en la llamada", correct: true },
              { text: "Parámetro es para números y argumento es para letras", correct: false },
              { text: "Son exactamente lo mismo sin ninguna diferencia técnica", correct: false },
              { text: "El argumento se usa solo cuando hay un error en el código", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá esta llamada con argumento 80?",
            codeSnippet: "def setShooter(rpm):\n    print('Shooter a ' + str(rpm) + ' RPM')\n\nsetShooter(3500)",
            options: [
              { text: "Shooter a 3500 RPM", correct: true },
              { text: "Shooter a rpm RPM", correct: false },
              { text: "Shooter a 80 RPM", correct: false },
              { text: "Error", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la llamada a la función pasando el argumento 90:",
            codeSnippet: "def girar(grados):\n    print('Girando ' + str(grados) + ' deg')\n\ngirar(_____)",
            options: [
              { text: "90", correct: true },
              { text: "'noventa'", correct: false },
              { text: "grados = 90", correct: false },
              { text: "[90]", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá la función tras recibir el nombre del piloto?",
            codeSnippet: "def reportarPiloto(nombre):\n    print('Piloto: ' + nombre)\n\nreportarPiloto('Alex')",
            options: [
              { text: "Piloto: Alex", correct: true },
              { text: "Piloto: nombre", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué sucede si una función exige un parámetro (ej: `def f(x):`) y la llamas sin argumentos (`f()`)?",
            options: [
              { text: "Error: TypeError (Falta 1 argumento posicional requerido)", correct: true },
              { text: "La computadora inventa el número 0", correct: false },
              { text: "La función se salta sin avisar", correct: false },
              { text: "El procesador se apaga", correct: false }
            ]
          }
        ]
      },
      {
        title: "Múltiples Parámetros: Flexibilidad Total",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo pasamos más de un dato a una misma función?",
            lessonText: "# El Panel con Múltiples Perillas 🎚️🎚️\n\nPuedes agregar tantos parámetros como requiera la acción, **separándolos por comas**:\n```python\ndef moverMecanismo(potencia, duracionSegundos):\n    print('Moviendo a potencia ' + str(potencia) + ' durante ' + str(duracionSegundos) + 's')\n```\nAl llamarla, debes pasar los argumentos en el mismo orden:\n`moverMecanismo(0.75, 3.0)`\n- `potencia` toma el valor `0.75`.\n- `duracionSegundos` toma el valor `3.0`.",
            options: [
              { text: "Separando los parámetros con comas entre los paréntesis en orden correspondiente", correct: true },
              { text: "Creando una función distinta para cada número", correct: false },
              { text: "Uniendo todos los números en una sola palabra", correct: false },
              { text: "Solo se puede pasar un parámetro por función en todos los lenguajes", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá esta función de cálculo de potencia?",
            codeSnippet: "def potencia(base, expo):\n    print(base ** expo)\n\npotencia(2, 3)",
            options: [
              { text: "8 (porque 2 elevado a la 3 es 8)", correct: true },
              { text: "6", correct: false },
              { text: "5", correct: false },
              { text: "9", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de este coordinado de movimientos?",
            codeSnippet: "def mover(eje, distancia):\n    print(eje + ': ' + str(distancia))\n\nmover('X', 10)\nmover('Y', 25)",
            options: [
              { text: "X: 10\nY: 25", correct: true },
              { text: "X: 25\nY: 10", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el fallo: La función espera 2 parámetros pero solo le enviaron 1.",
            codeSnippet: "def fijarCoordenadas(x, y):\n    print('X=' + str(x) + ' Y=' + str(y))\n\nfijarCoordenadas(12)",
            options: [
              { text: "Falta pasar el segundo argumento 'y' en la llamada (ej: fijarCoordenadas(12, 5))", correct: true },
              { text: "Falta cambiar el 12 por un texto", correct: false },
              { text: "No se pueden usar las letras x e y", correct: false },
              { text: "No hay ningún error", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Llama a la función 'setMotors' pasando 0.5 a la izquierda y 0.5 a la derecha:",
            codeSnippet: "// Llama con dos parámetros",
            options: [
              { text: "setMotors(0.5, 0.5)", correct: true },
              { text: "setMotors(0.5; 0.5)", correct: false }
            ]
          }
        ]
      },
      {
        title: "Devolviendo Resultados: La Sentencia Return",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la diferencia radical entre `print()` y `return`?",
            lessonText: "# El Mensajero del Resultado 📬\n\n- **`print()`** solo muestra texto en la pantalla para que un humano lo lea. **La computadora no puede usar ese texto para nada más**.\n- **`return`** devuelve el dato calculado directamente a la variable que llamó a la función para que el programa pueda seguir trabajando con él.\n\nEjemplo revelador:\n```python\ndef sumar(a, b):\n    return a + b\n\n# El valor devuelto (15) se guarda en la variable total\ntotal = sumar(10, 5)\nprint(total * 2)  # ¡Podemos usar el resultado para más cálculos!\n```\nAdemás, cuando la CPU ejecuta un `return`, **la función termina de inmediato**.",
            options: [
              { text: "print solo muestra texto en pantalla; return devuelve el dato a la variable para seguir operándolo", correct: true },
              { text: "print guarda el valor en el disco duro y return lo borra", correct: false },
              { text: "return solo sirve para números negativos", correct: false },
              { text: "Son exactamente la misma instrucción", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor final contendrá la variable 'resultado'?",
            codeSnippet: "def duplicar(n):\n    return n * 2\n\nresultado = duplicar(21)\nprint(resultado)",
            options: [
              { text: "42", correct: true },
              { text: "21", correct: false },
              { text: "0", correct: false },
              { text: "none", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá este programa con return temprano?",
            codeSnippet: "def test():\n    return 'Primero'\n    print('Segundo')  # ¡Línea inalcanzable!\n\nprint(test())",
            options: [
              { text: "Primero", correct: true },
              { text: "Primero\nSegundo", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la palabra clave para retornar el cálculo:",
            codeSnippet: "def calcularArea(base, altura):\n    _____ (base * altura) / 2",
            options: [
              { text: "return", correct: true },
              { text: "send", correct: false },
              { text: "give", correct: false },
              { text: "output", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si una función no tiene ninguna sentencia `return`, ¿qué valor devuelve por defecto en Python al intentar guardarla en una variable?",
            options: [
              { text: "None (ningún valor / vacío)", correct: true },
              { text: "0", correct: false },
              { text: "false", correct: false },
              { text: "Error fatal", correct: false }
            ]
          }
        ]
      },
      {
        title: "Funciones Puras vs Efectos Secundarios",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué diferencia a una función matemática de una función con efectos secundarios?",
            lessonText: "# Matemáticas vs Acciones Físicas 🦾📐\n\nEn software de robótica trabajamos con dos tipos de funciones:\n\n1. **Funciones Puras (Cálculos):**\n   - Reciben datos y devuelven un resultado sin modificar el mundo exterior.\n   - Ejemplo: `convertirPulgadasACentimetros(pulgadas)`\n   - Siempre que le des el mismo número, devuelve exactamente el mismo resultado.\n\n2. **Funciones con Efectos Secundarios (Side Effects):**\n   - Interactúan con el hardware real del robot.\n   - Ejemplo: `moverBrazo(1.0)`, `encenderLuces()`, `tocarBuzzer()`.\n   - Modifican el mundo físico exterior.",
            options: [
              { text: "Las funciones puras solo calculan y retornan valores; las funciones con efectos secundarios interactúan con hardware", correct: true },
              { text: "Las funciones puras son más lentas", correct: false },
              { text: "Los efectos secundarios son siempre virus", correct: false },
              { text: "Las funciones puras no usan matemáticas", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cada función según su naturaleza:",
            options: [
              { text: "calcularHipotenusa(a, b)|||Función pura (Cálculo matemático)", correct: true },
              { text: "convertirTicksAMetros(ticks)|||Función pura (Conversión de unidades)", correct: true },
              { text: "motorChasis.set(0.8)|||Efecto secundario (Actuador físico)", correct: true },
              { text: "solenoideNeumatico.abrir()|||Efecto secundario (Hardware)", correct: true }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué devolverá la función de conversión de pulgadas a centímetros para 10 pulgadas?",
            codeSnippet: "def pulgadasACentimetros(inVal):\n    return inVal * 2.54\n\nprint(pulgadasACentimetros(10))",
            options: [
              { text: "25.4", correct: true },
              { text: "254.0", correct: false },
              { text: "10.0", correct: false },
              { text: "2.54", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué los ingenieros de software intentan aislar los cálculos puros de los comandos de hardware?",
            options: [
              { text: "Porque las funciones puras se pueden probar y simular con pruebas unitarias sin necesitar el robot físico conectado", correct: true },
              { text: "Para que el código pese más gigabytes", correct: false },
              { text: "Porque las funciones con hardware son ilegales", correct: false },
              { text: "No tiene ninguna ventaja", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe una función pura llamada 'cuadrado' que reciba 'x' y retorne 'x * x':",
            codeSnippet: "// Define la función cuadrado",
            options: [
              { text: "def cuadrado(x):\n    return x * x", correct: true },
              { text: "def cuadrado(x): return x * x", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Conversor de Encoders a Metros",
        challenges: [
          {
            type: "THEORY",
            question: "¡La odometría real de Nautilus 4010!",
            lessonText: "# Traduciendo Ticks a Metros en la Cancha 📏\n\nUn encoder en el eje del motor genera miles de pulsos electrónicos llamados **ticks** por cada vuelta de la rueda.\n\nEl procesador no puede tomar decisiones estratégicas pensando en '15,420 ticks': el piloto y el autonomous necesitan saber **cuántos metros reales avanzó el robot**.\n\nEn este reto final de la Unidad 15, construirás la función de telemetría que recibe los ticks del sensor, aplica la constante de reducción y retorna los metros recorridos.",
            options: [
              { text: "¡Vamos a programar el conversor de odometría con Teus!", correct: true },
              { text: "Prefiero medir la distancia con una regla durante el match", correct: false },
              { text: "No me interesan los metros", correct: false },
              { text: "Quiero desconectar los encoders", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Si cada 1000 ticks equivalen a 0.5 metros, ¿cuántos metros retorna para 4000 ticks?",
            codeSnippet: "def ticksAMetros(ticks):\n    METROS_POR_TICK = 0.0005\n    return ticks * METROS_POR_TICK\n\nprint(ticksAMetros(4000))",
            options: [
              { text: "2.0 (4000 * 0.0005 = 2.0 metros)", correct: true },
              { text: "4.0", correct: false },
              { text: "20.0", correct: false },
              { text: "0.5", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola al evaluar la función con 2000 ticks?",
            codeSnippet: "def ticksAMetros(ticks):\n    return ticks * 0.0005\n\ndistancia = ticksAMetros(2000)\nprint('Avanzamos: ' + str(distancia) + 'm')",
            options: [
              { text: "Avanzamos: 1.0m", correct: true },
              { text: "Avanzamos: 2000m", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la función completa de cálculo de odometría:",
            options: [
              { text: "def calcularOdometria(ticksIzquierda, ticksDerecha):", correct: true, audioSrc: "1" },
              { text: "    promedioTicks = (ticksIzquierda + ticksDerecha) / 2", correct: true, audioSrc: "2" },
              { text: "    metros = promedioTicks * 0.0005", correct: true, audioSrc: "3" },
              { text: "    return metros", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué los parámetros y los valores de retorno convierten a las funciones en la herramienta más poderosa de la programación?",
            options: [
              { text: "Porque permiten crear módulos dinámicos, reutilizables e independientes que transforman datos con precisión quirúrgica", correct: true },
              { text: "Porque evitan tener que conectar la batería del robot", correct: false },
              { text: "Porque hacen que las computadoras no se calienten", correct: false },
              { text: "No son necesarios, es mejor usar variables globales para todo", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
