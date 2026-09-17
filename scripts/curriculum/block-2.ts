import { UnitDefinition } from "./types";

export const block2Units: UnitDefinition[] = [
  // ==========================================
  // UNIT 4: VARIABLES & MEMORY
  // ==========================================
  {
    order: 4,
    slug: "unit-4",
    title: "Variables & Memory",
    description: "Cajas con etiqueta: Guardar y actualizar datos en memoria",
    guidebookText: `# Guía de Estudio: Unit 4 - Variables & Memory

Una **variable** es un espacio reservado en la memoria RAM de la computadora al que le asignamos un **nombre simbólico (etiqueta)** para almacenar y recuperar información.

### Conceptos Clave:
1. **Declaración:** Crear la variable y reservar el espacio en memoria (ej: en Java/C++ indicamos el tipo: \`int score;\`).
2. **Inicialización:** Asignarle su primer valor (\`score = 0;\`).
3. **El Operador de Asignación (\`=\`):** Toma lo que está a la derecha del signo igual, lo calcula y lo guarda en la caja que está a la izquierda.
4. **Mutabilidad:** El valor dentro de la caja puede cambiar a lo largo del tiempo. Por eso se llaman *variables*.`,
    lessons: [
      {
        title: "¿Qué es una Variable?",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué analogía describe mejor una variable en programación?",
            lessonText: "# La Caja con Etiqueta \n\nImagina que en el taller de robótica tienes varias cajas de plástico organizadoras.\n\nEn una caja pegas una cinta con la etiqueta **'velocidadMaxima'** y guardas adentro un papel que dice **80**.\nEn otra caja pegas la etiqueta **'nombrePiloto'** y guardas el texto **'Alex'**.\n\nUna **variable** es exactamente eso: una caja en la memoria RAM con un nombre asignado donde guardas un dato. Cada vez que tu código mencione `velocidadMaxima`, la computadora abrirá esa caja y leerá lo que tiene adentro.",
            options: [
              { text: "Un espacio nombrado en memoria para almacenar y consultar datos", correct: true },
              { text: "Un tornillo que sujeta el motor al chasis", correct: false },
              { text: "Un cable suelto que hace chispas en la batería", correct: false },
              { text: "Un botón secreto que reinicia internet", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En la instrucción `potencia = 75`, ¿qué elemento es el nombre de la variable y cuál es el valor almacenado?",
            options: [
              { text: "'potencia' es el nombre de la variable y 75 es el valor guardado", correct: true },
              { text: "75 es el nombre y 'potencia' es el valor", correct: false },
              { text: "Ambos son nombres sin ningún valor", correct: false },
              { text: "El signo '=' es la variable", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para crear una variable llamada `angulo` con valor 90:",
            codeSnippet: "_____ = 90\nprint(angulo)",
            options: [
              { text: "angulo", correct: true },
              { text: "varAngulo()", correct: false },
              { text: "90", correct: false },
              { text: "Angulo.set", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará en consola este programa?",
            codeSnippet: "equipo = 'Nautilus 4010'\nprint(equipo)",
            options: [
              { text: "Nautilus 4010", correct: true },
              { text: "equipo", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Dónde residen físicamente las variables mientras el robot está encendido y ejecutando el programa?",
            options: [
              { text: "En la memoria RAM del procesador", correct: true },
              { text: "En las llantas de goma del chasis", correct: false },
              { text: "En el aire gracias a la gravedad", correct: false },
              { text: "En los cables del joystick", correct: false }
            ]
          }
        ]
      },
      {
        title: "Declaración e Inicialización",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es la diferencia entre declarar e inicializar?",
            lessonText: "# Dar a Luz una Variable \n\nEn desarrollo de software existen dos momentos clave:\n\n1. **Declaración:** Crear la variable y avisarle a la computadora que existirá.\n   - Ejemplo: `int puntos;` (¡La caja fue creada pero está vacía!)\n2. **Inicialización:** Darle su primer valor inicial de vida.\n   - Ejemplo: `puntos = 0;` (¡Ahora la caja tiene un valor concreto!)\n\nMuchos lenguajes modernos permiten hacer ambas cosas en una sola línea elegante:\n`int puntos = 0;` o en Python simplemente `puntos = 0`.",
            options: [
              { text: "Declarar es crear la variable; inicializar es darle su primer valor", correct: true },
              { text: "Declarar es borrar la variable; inicializar es enviarla por internet", correct: false },
              { text: "Son exactamente la misma palabra con diferente color", correct: false },
              { text: "Declarar solo sirve para números y nunca para texto", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada término con su significado:",
            options: [
              { text: "Declarar|||Reservar el espacio y nombre de la variable", correct: true },
              { text: "Inicializar|||Asignar el primer valor de arranque a la variable", correct: true },
              { text: "Valor por defecto|||El valor que toma una variable no inicializada", correct: true },
              { text: "Asignación|||Guardar un dato usando el operador =", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Declara e inicializa la variable 'meta' con el valor 100:",
            codeSnippet: "// Crea la variable meta",
            options: [
              { text: "meta = 100", correct: true },
              { text: "meta == 100", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuál es el valor final de la variable 'sensor'?",
            codeSnippet: "sensor = 0\nsensor = 45\nprint(sensor)",
            options: [
              { text: "45 (el valor inicial 0 fue sobreescrito)", correct: true },
              { text: "0", correct: false },
              { text: "450", correct: false },
              { text: "Error por asignar dos veces", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué pasa si intentas usar una variable que nunca fue declarada ni inicializada?",
            options: [
              { text: "Ocurre un error en tiempo de compilación o ejecución (NameError)", correct: true },
              { text: "La computadora inventa un número de la suerte", correct: false },
              { text: "El robot frena suavemente", correct: false },
              { text: "Se apaga la luz del taller", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador de Asignación (=)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Por qué el signo `=` no significa igualdad en código?",
            lessonText: "# El Signo '=' es una Flecha de Guardado \n\nEn matemáticas de primaria nos enseñaron que `A = B` significa que A y B son equivalentes.\n\nEn programación, **`=` es un operador de asignación activa**:\nPiensa en el signo `=` como una flecha que apunta a la izquierda: `A <- B`.\n\n1. La computadora evalúa **todo lo que está a la derecha del `=`**.\n2. Una vez que tiene el resultado definitivo, lo mete dentro de la variable de la izquierda.\n\nPor eso la línea `puntos = puntos + 1` tiene total sentido: calcula `puntos + 1` y guarda el nuevo total de vuelta en `puntos`.",
            options: [
              { text: "Porque evalúa la expresión de la derecha y guarda el resultado en la izquierda", correct: true },
              { text: "Porque los teclados antiguos no tenían tecla para flecha", correct: false },
              { text: "Porque a los programadores no les gustaban las matemáticas", correct: false },
              { text: "En realidad sí significa igualdad matemática en todos los casos", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el bug: En programación, la variable receptora siempre debe ir a la izquierda.",
            codeSnippet: "50 = velocidad",
            options: [
              { text: "Debe ser 'velocidad = 50', la variable siempre va a la izquierda del '='", correct: true },
              { text: "El número 50 no puede usarse en robótica", correct: false },
              { text: "Falta poner una coma después de velocidad", correct: false },
              { text: "No hay ningún error, es código perfectamente válido", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para sumar 10 a la distancia actual:",
            codeSnippet: "distancia = 20\ndistancia = _____ + 10\nprint(distancia)",
            options: [
              { text: "distancia", correct: true },
              { text: "20.0", correct: false },
              { text: "nuevaDistancia", correct: false },
              { text: "input", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué valor imprimirá este script?",
            codeSnippet: "a = 5\nb = a\na = 10\nprint(b)",
            options: [
              { text: "5", correct: true },
              { text: "10", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En el ejercicio anterior, ¿por qué `b` se quedó con el valor 5 en lugar de cambiar a 10?",
            options: [
              { text: "Porque se copió el valor que tenía 'a' en ese momento (5); las variables primitivas no se ligan mágicamente", correct: true },
              { text: "Porque la variable b se congeló", correct: false },
              { text: "Porque la letra b va después de la a en el abecedario", correct: false },
              { text: "Porque el número 10 es muy pesado para la memoria", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reasignación y Mutabilidad",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué significa que una variable sea mutable?",
            lessonText: "# El Flujo del Tiempo \n\nEl estado de un robot cambia constantemente durante un match:\n- En el segundo 0, la velocidad es 0.\n- En el segundo 5, la velocidad sube a 100.\n- En el segundo 15, la velocidad cae a 0 al terminar el autónomo.\n\nLa **reasignación** consiste en guardar un dato nuevo en una caja que ya existía, reemplazando el valor viejo por completo.\n```python\nvelocidad = 0     # Arranca en reposo\nvelocidad = 100   # Acelera a fondo\nvelocidad = 0     # Frena\n```",
            options: [
              { text: "Que su contenido puede modificarse a lo largo del tiempo durante la ejecución", correct: true },
              { text: "Que la variable cambia de color según la temperatura", correct: false },
              { text: "Que puede convertirse en un cable físico", correct: false },
              { text: "Que se borra si no la usas durante 3 segundos", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la consola al final de esta serie de reasignaciones?",
            codeSnippet: "contador = 1\ncontador = contador + 2\ncontador = 10\nprint(contador)",
            options: [
              { text: "10 (la última reasignación sobrescribió cualquier cálculo previo)", correct: true },
              { text: "3", correct: false },
              { text: "13", correct: false },
              { text: "1", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las líneas para incrementar el contador de notas de 0 a 2 paso a paso:",
            options: [
              { text: "notasAnotadas = 0", correct: true, audioSrc: "1" },
              { text: "notasAnotadas = notasAnotadas + 1", correct: true, audioSrc: "2" },
              { text: "notasAnotadas = notasAnotadas + 1", correct: true, audioSrc: "3" },
              { text: "print(notasAnotadas)", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción que duplica el valor actual de la variable 'rpm':",
            codeSnippet: "// Multiplica rpm por 2 y guarda el resultado",
            options: [
              { text: "rpm = rpm * 2", correct: true },
              { text: "rpm * 2", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si una variable cambia de valor cientos de veces por segundo (como la lectura de un encoder de rueda), ¿se llena la memoria RAM?",
            options: [
              { text: "No, porque reutiliza la misma caja de memoria, simplemente sobrescribe el dato anterior", correct: true },
              { text: "Sí, la memoria explota en 5 segundos", correct: false },
              { text: "Solo si el robot gira a la derecha", correct: false },
              { text: "Sí, a menos que borres la variable manualmente", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Telemetría del Giroscopio",
        challenges: [
          {
            type: "THEORY",
            question: "Midiendo la orientación del chasis en tiempo real",
            lessonText: "# El Giroscopio de Nautilus 4010 \n\nEl sensor **NavX Gyro** mide el ángulo de rotación de nuestro robot en la cancha.\n\nCuando el robot inicia el match de cara a la pared contraria, el ángulo es `0.0` grados.\nCuando gira a la derecha, el ángulo se actualiza a `90.0`.\n\nEn este reto final de la Unidad 4, aplicarás el manejo de variables para almacenar, actualizar y desplegar la orientación del robot.",
            options: [
              { text: "¡Vamos a calibrar la orientación con Teus!", correct: true },
              { text: "Prefiero que el robot gire en círculos sin saber su ángulo", correct: false },
              { text: "No me importa la orientación", correct: false },
              { text: "Quiero girar el sensor con un desarmador", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Inicializa la variable 'anguloYaw' en 0:",
            codeSnippet: "_____ = 0\nprint('Ángulo inicial: ' + str(anguloYaw))",
            options: [
              { text: "anguloYaw", correct: true },
              { text: "motorYaw", correct: false },
              { text: "giroTotal", correct: false },
              { text: "0", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "El robot giró 45 grados dos veces consecutivas. ¿Qué ángulo mostrará la telemetría?",
            codeSnippet: "angulo = 0\nangulo = angulo + 45\nangulo = angulo + 45\nprint(angulo)",
            options: [
              { text: "90", correct: true },
              { text: "45", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción que resetea la variable 'angulo' a cero:",
            codeSnippet: "// Reset de orientación",
            options: [
              { text: "angulo = 0", correct: true },
              { text: "angulo == 0", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué las variables son la base indispensable de cualquier software de robótica?",
            options: [
              { text: "Porque permiten recordar el estado del robot, leer sensores dinámicos y adaptar el comportamiento en tiempo real", correct: true },
              { text: "Porque decoran el código para que se vea más profesional", correct: false },
              { text: "Porque son obligatorias por el reglamento de FIRST", correct: false },
              { text: "En realidad podríamos hacer todo el robot sin ninguna variable", correct: false }
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
            question: "¿Por qué los nombres de las variables deben ser claros y descriptivos?",
            lessonText: "# El Dilema del Código Incomprensible ‍️\n\nImagina que entras a la final regional de FRC en 10 minutos y hay un bug en el chasis. Abres el archivo y encuentras esto:\n```python\na = 0.8\nb = 12.4\nc = a * b\n```\n¿Qué rayos es `a`? ¿Qué significa `b`? Nadie lo sabe.\n\nAhora compara con esto:\n```python\npotenciaMotor = 0.8\nvoltajeBateria = 12.4\npotenciaEfectiva = potenciaMotor * voltajeBateria\n```\n¡La intención es cristalina en un segundo! **El código se lee muchas más veces de las que se escribe.**",
            options: [
              { text: "Porque ahorra tiempo de depuración y permite que todo el equipo entienda la intención del código", correct: true },
              { text: "Porque las variables largas hacen que la batería dure más tiempo", correct: false },
              { text: "Porque el procesador solo acepta palabras del diccionario en inglés", correct: false },
              { text: "No importa el nombre, es mejor usar letras individuales para escribir más rápido", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes nombres de variable es el más apropiado para guardar la velocidad del intake?",
            options: [
              { text: "intakeSpeed", correct: true },
              { text: "x", correct: false },
              { text: "cosaQueGira123", correct: false },
              { text: "velocidad_del_motor_que_recoge_las_piezas_del_piso_en_el_chasis", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja cada nombre críptico con su versión limpia y profesional:",
            options: [
              { text: "v|||targetVelocity", correct: true },
              { text: "btn|||isEmergencyStopPressed", correct: true },
              { text: "ang|||gyroHeadingAngle", correct: true },
              { text: "dist|||distanceToTargetMeters", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Este código usa nombres pésimos. ¿Qué cambio hace que la intención sea evidente?",
            codeSnippet: "t = 15\nprint('Tiempo de autonomo: ' + str(t))",
            options: [
              { text: "Renombrar 't' por 'autonomousSecondsRemaining'", correct: true },
              { text: "Cambiar 't' por 'a'", correct: false },
              { text: "Borrar el print por completo", correct: false },
              { text: "Poner el número 15 entre comillas", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "En un equipo de robótica, ¿a quién perjudica más el código con nombres de variables confusos?",
            options: [
              { text: "A tus compañeros de equipo y a ti mismo cuando tengas que arreglar un bug bajo presión", correct: true },
              { text: "A la conexión Wi-Fi de la cancha", correct: false },
              { text: "Al material de aluminio del robot", correct: false },
              { text: "Al equipo contrario", correct: false }
            ]
          }
        ]
      },
      {
        title: "Convenciones: camelCase y snake_case",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuáles son las convenciones de nomenclatura más populares?",
            lessonText: "# El Estilo Sí Importa \n\nEn la mayoría de los lenguajes no podemos usar espacios en los nombres de variables (ej: `velocidad maxima` dará un Syntax Error).\n\nPara resolver esto, la comunidad creó **estilos de capitalización**:\n\n1. **camelCase (El camello):** La primera palabra inicia en minúscula y cada nueva palabra inicia con Mayúscula.\n   - Ejemplo: `velocidadMaxima`, `sensorOptico`, `anguloDelBrazo`.\n   - *Muy usado en Java, JavaScript y C++.*\n\n2. **snake_case (La serpiente):** Todo en minúsculas separado por guiones bajos.\n   - Ejemplo: `velocidad_maxima`, `sensor_optico`, `angulo_del_brazo`.\n   - *El estándar oficial de Python (PEP 8).*",
            options: [
              { text: "camelCase usa mayúsculas intermedias y snake_case usa guiones bajos entre palabras", correct: true },
              { text: "camelCase solo se usa en desiertos y snake_case en la selva", correct: false },
              { text: "Son lenguajes de programación distintos", correct: false },
              { text: "Uno sirve para hardware y el otro para pantallas", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica qué estilo representa cada identificador:",
            options: [
              { text: "targetAngle|||camelCase", correct: true },
              { text: "target_angle|||snake_case", correct: true },
              { text: "TARGET_ANGLE|||UPPER_SNAKE_CASE (Constante)", correct: true },
              { text: "targetangle|||Sin convención (difícil de leer)", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de estos nombres viola las reglas gramaticales de la mayoría de los lenguajes de programación?",
            options: [
              { text: "velocidad del robot (contiene espacios)", correct: true },
              { text: "velocidadDelRobot", correct: false },
              { text: "velocidad_del_robot", correct: false },
              { text: "velocidadRobot2", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error de sintaxis al nombrar esta variable:",
            codeSnippet: "4010Nautilus = 'Equipo de Robótica'",
            options: [
              { text: "Los nombres de variables NO pueden comenzar con un número", correct: true },
              { text: "No se puede usar la palabra Nautilus", correct: false },
              { text: "El texto entre comillas no puede llevar acentos", correct: false },
              { text: "Falta un punto antes del 4010", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe el nombre de la variable 'leftMotorSpeed' en formato snake_case:",
            codeSnippet: "// Convierte a snake_case",
            options: [
              { text: "left_motor_speed", correct: true },
              { text: "leftmotorspeed", correct: false }
            ]
          }
        ]
      },
      {
        title: "Constantes: Valores Sagrados",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es una constante en programación y por qué es vital en robótica?",
            lessonText: "# Valores Inmutables \n\nHay datos que **NUNCA** deben cambiar mientras el robot está operando:\n- El número de puerto CAN de un motor (`MOTOR_PORT = 3`).\n- La relación de engranes del chasis (`GEAR_RATIO = 6.75`).\n- La aceleración de la gravedad (`GRAVITY = 9.81`).\n\nEstos valores se llaman **Constantes**. Por convención universal, se escriben en **UPPER_SNAKE_CASE** para alertar a cualquiera: *'¡Cuidado! No reasignes este valor bajo ninguna circunstancia'*.",
            options: [
              { text: "Una variable diseñada para no cambiar su valor original durante la ejecución del programa", correct: true },
              { text: "Un valor que cambia cada 2 segundos", correct: false },
              { text: "Una instrucción que apaga el robot", correct: false },
              { text: "Una batería que nunca se descarga", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes identificadores sigue la convención estándar para una constante?",
            options: [
              { text: "MAX_MOTOR_VOLTAGE", correct: true },
              { text: "maxMotorVoltage", correct: false },
              { text: "max_motor_voltage", correct: false },
              { text: "max-motor-voltage", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Declara la constante CAN_ID con el valor 12:",
            codeSnippet: "// Declara la constante",
            options: [
              { text: "CAN_ID = 12", correct: true },
              { text: "can_id = 12", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué valor imprimirá este bloque?",
            codeSnippet: "WHEEL_DIAMETER_INCHES = 4.0\nprint(WHEEL_DIAMETER_INCHES)",
            options: [
              { text: "4.0", correct: true },
              { text: "WHEEL_DIAMETER_INCHES", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¿Por qué es mejor definir `SHOOTER_CAN_ID = 5` al inicio del código en lugar de escribir el número 5 disperso por 50 archivos distintos?",
            options: [
              { text: "Porque si el equipo cambia el motor de puerto en el taller, solo modificas un único lugar en el código", correct: true },
              { text: "Porque al compilador no le gusta el número 5", correct: false },
              { text: "Para que el código pese el doble", correct: false },
              { text: "Porque los números pares son mejores que los impares", correct: false }
            ]
          }
        ]
      },
      {
        title: "Comentarios: Escribiendo para Humanos",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué son los comentarios y cómo los interpreta la computadora?",
            lessonText: "# Notas al Margen \n\nUn **comentario** es una anotación en el código fuente que la computadora **ignora por completo** al momento de compilar o ejecutar.\n\nEn Python se usa el símbolo `#`:\n```python\n# Iniciar motores en reversa para expulsar nota atorada\nmotorIntake.set(-1.0)\n```\n\nEn Java y C++ se usa `//` para una línea y `/* ... */` para bloques multilínea.\n\nLos comentarios son cartas que le dejas a tus compañeros (y a tu yo del futuro) explicando **por qué tomaste una decisión técnica compleja**.",
            options: [
              { text: "Texto explicativo dentro del código que la máquina ignora pero ayuda a los humanos", correct: true },
              { text: "Mensajes que se envían directamente a los rivales del match", correct: false },
              { text: "Instrucciones de audio que el robot lee en voz alta", correct: false },
              { text: "Errores que la computadora oculta automáticamente", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Identifica la sintaxis de comentarios según el lenguaje:",
            options: [
              { text: "# Comentario de línea|||Python", correct: true },
              { text: "// Comentario de línea|||Java / C++ / C#", correct: true },
              { text: "/* Bloque multilínea */|||Java / C++ / CSS", correct: true },
              { text: "Ignorado por la máquina|||Todos los comentarios", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes es un comentario de ALTO VALOR en robótica?",
            options: [
              { text: "# Multiplicamos por 0.85 para compensar la fricción de la alfombra en la arena", correct: true },
              { text: "# x = 5 (aquí x es 5)", correct: false },
              { text: "# Este es un comentario porque el profe me obligó", correct: false },
              { text: "# Hola mamá salgo en el código del robot", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Este archivo no compila porque un comentario no tiene el símbolo adecuado. Encuentra el fallo:",
            codeSnippet: "Configuracion de motores\nleftMotorSpeed = 0.5",
            options: [
              { text: "La primera línea no tiene '#' o '//' al inicio, por lo que el compilador la confunde con código", correct: true },
              { text: "No se puede usar la palabra leftMotorSpeed", correct: false },
              { text: "El valor 0.5 debe ser entero", correct: false },
              { text: "Falta un print al final", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la línea correcta comentando 'Calibrando odometria' en estilo Python:",
            codeSnippet: "// Escribe el comentario en Python",
            options: [
              { text: "# Calibrando odometria", correct: true },
              { text: "// Calibrando odometria", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Refactor en los Pits",
        challenges: [
          {
            type: "THEORY",
            question: "¡Momento de limpiar el código de competencia!",
            lessonText: "# Emergencia en los Pits de 4010 ️\n\nFaltan 15 minutos para la semifinal. Un compañero escribió un script rápido para el elevador pero usó nombres crípticos, variables sin convención y comentarios vacíos.\n\nEn este reto final de la Unidad 5, aplicarás tus conocimientos de **Clean Code** para refactorizar y dejar el código impecable, legible y seguro.\n\n¡La limpieza del código previene fallas en la final!",
            options: [
              { text: "¡Vamos a refactorizar el código de Teus!", correct: true },
              { text: "Prefiero dejar el código sucio y arriesgar el robot", correct: false },
              { text: "No me gusta el código limpio", correct: false },
              { text: "Quiero borrar el repositorio completo", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si queremos almacenar la altura actual del elevador en milímetros, ¿cuál es el mejor nombre?",
            options: [
              { text: "currentElevatorHeightMm", correct: true },
              { text: "h", correct: false },
              { text: "altura_mm_elevador_robot_nautilus_4010_oficial", correct: false },
              { text: "cosaArriba", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena este archivo siguiendo la estructura limpia estándar (Constantes -> Variables -> Acciones):",
            options: [
              { text: "MAX_RPM = 5000", correct: true, audioSrc: "1" },
              { text: "currentRpm = 0", correct: true, audioSrc: "2" },
              { text: "currentRpm = 2500", correct: true, audioSrc: "3" },
              { text: "print('RPM actual: ' + str(currentRpm))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola tras ejecutar este código limpio?",
            codeSnippet: "# Constantes de chasis\nTRACK_WIDTH_METERS = 0.65\nprint(TRACK_WIDTH_METERS)",
            options: [
              { text: "0.65", correct: true },
              { text: "TRACK_WIDTH_METERS", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el resumen de la filosofía de código limpio de Nautilus 4010?",
            options: [
              { text: "Nombres autoexplicativos, convenciones consistentes (camelCase/snake_case) y constantes en mayúsculas", correct: true },
              { text: "Escribir la mayor cantidad de líneas posibles para impresionar a los jueces", correct: false },
              { text: "Usar nombres en clave que solo una persona entienda", correct: false },
              { text: "No usar nunca variables ni funciones", correct: false }
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
            question: "¿Qué es un entero (int) y cuándo se utiliza?",
            lessonText: "# Contando Cosas Enteras \n\nUn **Integer (int)** es un número completo, positivo, negativo o cero, **sin parte decimal**.\n\nEjemplos en FIRST Robotics:\n- Número de piezas anotadas en el Speaker: `3` (no puedes anotar 3.5 piezas).\n- Puerto USB donde está conectado el control: `0`.\n- Match actual del torneo: `42`.\n\nLos enteros son ultra-rápidos de procesar para la CPU y ocupan un espacio de memoria fijo (típicamente 32 o 64 bits).",
            options: [
              { text: "Un número completo sin decimales, positivo, negativo o cero", correct: true },
              { text: "Cualquier texto entre comillas dobles", correct: false },
              { text: "Un número que siempre debe ser mayor a 1 millón", correct: false },
              { text: "Una instrucción de movimiento de motor", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de los siguientes valores es un 'int' válido?",
            options: [
              { text: "-15", correct: true },
              { text: "3.14", correct: false },
              { text: "'4010'", correct: false },
              { text: "true", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación con un entero que represente el número de match:",
            codeSnippet: "matchNumero = _____\nprint('Jugando match: ' + str(matchNumero))",
            options: [
              { text: "14", correct: true },
              { text: "'Catorce'", correct: false },
              { text: "14.85", correct: false },
              { text: "true", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá la suma de estos dos enteros?",
            codeSnippet: "notasEnAmp = 2\nnotasEnSpeaker = 5\ntotal = notasEnAmp + notasEnSpeaker\nprint(total)",
            options: [
              { text: "7", correct: true },
              { text: "25", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "Si divides dos enteros en código y el resultado tiene decimales (como 7 / 2 = 3.5), ¿sigue siendo un entero?",
            options: [
              { text: "No, el resultado se convierte en un número decimal (float / double)", correct: true },
              { text: "Sí, sigue siendo entero automáticamente", correct: false },
              { text: "El resultado se convierte en texto", correct: false },
              { text: "Ocurre un error de hardware", correct: false }
            ]
          }
        ]
      },
      {
        title: "Números Decimales (float / double)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un número flotante (float) y por qué es esencial en robótica?",
            lessonText: "# La Precisión del Mundo Real \n\nEn el mundo físico, casi nada es un número entero exacto:\n- El voltaje de la batería del robot es `12.65` voltios.\n- La distancia a la pared es `1.82` metros.\n- La potencia del motor varía continuamente entre `-1.0` y `1.0`.\n\nPara representar valores con fracciones o puntos decimales usamos **float** (o **double** en lenguajes como Java y C++ para doble precisión).",
            options: [
              { text: "Un tipo de dato numérico que permite representar fracciones y valores con punto decimal", correct: true },
              { text: "Un número que flota en el aire físicamente", correct: false },
              { text: "Una palabra con letras flotantes", correct: false },
              { text: "Un tipo de cable que conecta los sensores", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de estos valores debe almacenarse obligatoriamente como float/double?",
            options: [
              { text: "12.4 (Voltaje de la batería)", correct: true },
              { text: "4010 (Número de equipo)", correct: false },
              { text: "5 (Cantidad de pelotas)", correct: false },
              { text: "1 (ID del control)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá este programa?",
            codeSnippet: "velocidad = 0.5\nvelocidad = velocidad * 2.0\nprint(velocidad)",
            options: [
              { text: "1.0", correct: true },
              { text: "0.5", correct: false },
              { text: "2.0", correct: false },
              { text: "Error de tipos", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Asigna a la variable 'potencia' el valor decimal 0.75:",
            codeSnippet: "// Asigna el float",
            options: [
              { text: "potencia = 0.75", correct: true },
              { text: "potencia = 0,75", correct: false }
            ]
          },
          {
            type: "ASSIST",
            question: "¡Cuidado internacional! En código de programación, ¿qué símbolo se usa SIEMPRE para separar los decimales?",
            options: [
              { text: "El punto (.)", correct: true },
              { text: "La coma (,)", correct: false },
              { text: "El guión (-)", correct: false },
              { text: "La barra diagonal (/)", correct: false }
            ]
          }
        ]
      },
      {
        title: "Cadenas de Texto (string)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un string y cómo se declara?",
            lessonText: "# Texto Entre Comillas \n\nUn **String** (cadena) es una secuencia ordenada de caracteres: letras, números, espacios y símbolos, **siempre rodeados por comillas** (simples `'texto'` o dobles `\"texto\"`).\n\nEjemplos:\n- `robotName = 'Nautilus 4010'`\n- `status = 'AUTO_RUNNING'`\n\nSi olvidas las comillas, la computadora pensará que el texto es el nombre de una variable y arrojará un error.",
            options: [
              { text: "Una secuencia de caracteres delimitada por comillas", correct: true },
              { text: "Una cuerda física para amarrar el robot al transporte", correct: false },
              { text: "Un número sin signos", correct: false },
              { text: "Un archivo de música", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el error: Falta poner comillas para que sea un string válido.",
            codeSnippet: "mensaje = Hola Nautilus",
            options: [
              { text: "Debe estar entre comillas: mensaje = 'Hola Nautilus'", correct: true },
              { text: "Hay que quitar el signo '='", correct: false },
              { text: "La palabra mensaje no puede usarse", correct: false },
              { text: "Falta un número al final", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué ocurre cuando 'sumas' dos strings en código (ej: `'40' + '10'`)?",
            codeSnippet: "a = '40'\nb = '10'\nprint(a + b)",
            options: [
              { text: "'4010' (Se concatenan/unen los textos)", correct: true },
              { text: "50 (Se suman matemáticamente)", correct: false },
              { text: "400", correct: false },
              { text: "Error porque el texto no se puede sumar", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de esta concatenación?",
            codeSnippet: "saludo = 'Team '\nequipo = '4010'\nprint(saludo + equipo)",
            options: [
              { text: "Team 4010", correct: true },
              { text: "Team4010", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la diferencia crucial entre el número `42` y el string `'42'`?",
            options: [
              { text: "Con 42 puedes hacer operaciones matemáticas (sumar, multiplicar); '42' es solo texto plano", correct: true },
              { text: "No hay ninguna diferencia, son idénticos", correct: false },
              { text: "42 es para letras y '42' es para números", correct: false },
              { text: "El string '42' gasta más batería", correct: false }
            ]
          }
        ]
      },
      {
        title: "Valores Booleanos (bool)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es un valor booleano y por qué es el rey de las decisiones?",
            lessonText: "# La Verdad Binaria \n\nUn **Boolean (bool)** es el tipo de dato más simple y poderoso que existe. Solo puede tener dos valores:\n- **`true` (Verdadero)**\n- **`false` (Falso)**\n\nEn un robot de competencia, el mundo está lleno de preguntas binarias:\n- ¿El sensor de límite está presionado? (`true` / `false`)\n- ¿El autonomous está activo? (`true` / `false`)\n- ¿El voltaje es peligroso? (`true` / `false`)\n\nLos booleanos son la llave que abre las puertas de las sentencias condicionales `if` y los bucles `while`.",
            options: [
              { text: "Un tipo de dato que solo puede ser Verdadero (True) o Falso (False)", correct: true },
              { text: "Un número que va del 0 al 100", correct: false },
              { text: "Una lista de nombres de pilotos", correct: false },
              { text: "Un comando que apaga la consola", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de las siguientes opciones representa un booleano en código?",
            options: [
              { text: "true", correct: true },
              { text: "'true'", correct: false },
              { text: "100", correct: false },
              { text: "'verdadero'", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la asignación para indicar que el freno de seguridad está activo:",
            codeSnippet: "frenoActivo = _____\nprint('¿Freno activado? ' + str(frenoActivo))",
            options: [
              { text: "true", correct: true },
              { text: "'activo'", correct: false },
              { text: "1.0", correct: false },
              { text: "frenar", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué imprimirá la consola al evaluar si 10 es mayor que 5?",
            codeSnippet: "resultado = (10 > 5)\nprint(resultado)",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false },
              { text: "10", correct: false },
              { text: "5", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Asigna el valor booleano false a la variable 'isAutonomousFinished':",
            codeSnippet: "// Inicializa el booleano",
            options: [
              { text: "isAutonomousFinished = false", correct: true },
              { text: "isAutonomousFinished = 'false'", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Clasificación de Sensores",
        challenges: [
          {
            type: "THEORY",
            question: "¡El laboratorio de sensores de Teus!",
            lessonText: "# El Dashboard de Telemetría \n\nNautilus 4010 tiene múltiples subsistemas transmitiendo telemetría en vivo a la pantalla del drive team:\n- Giroscopio Yaw (`float`)\n- Contador de notas (`int`)\n- Estado de conexión al Field Management System (`bool`)\n- Nombre del modo de juego (`string`)\n\nEn este reto final de la Unidad 6, demostrarás tu maestría clasificando y operando los 4 tipos de datos primitivos.",
            options: [
              { text: "¡Vamos a clasificar la telemetría del robot!", correct: true },
              { text: "Prefiero mezclar textos con números al azar", correct: false },
              { text: "No me interesa saber el tipo de dato", correct: false },
              { text: "Quiero apagar los sensores", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Clasifica cada valor con su tipo de dato primitivo correspondiente:",
            options: [
              { text: "4010|||int (Entero)", correct: true },
              { text: "12.65|||float (Decimal)", correct: true },
              { text: "'Nautilus'|||string (Texto)", correct: true },
              { text: "true|||bool (Booleano)", correct: true }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué mostrará la consola en esta combinación de telemetría?",
            codeSnippet: "equipo = 'Nautilus'\nnumero = 4010\nprint(equipo + ' ' + str(numero))",
            options: [
              { text: "Nautilus 4010", correct: true },
              { text: "Nautilus4010", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Encuentra el fallo de tipos: No se puede sumar un número directamente con un texto sin convertirlo.",
            codeSnippet: "puntos = 10\nmensaje = 'Puntos: ' + puntos",
            options: [
              { text: "Hay que convertir 'puntos' a texto usando str(puntos) o String.valueOf(puntos)", correct: true },
              { text: "Hay que cambiar el 10 por 0", correct: false },
              { text: "No se puede usar el signo '+'", correct: false },
              { text: "La variable mensaje debe ser un entero", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué es tan importante entender los tipos de datos en la programación de FIRST?",
            options: [
              { text: "Porque cada sensor y motor trabaja con tipos específicos (voltajes con floats, estados con booleans)", correct: true },
              { text: "Para que el código se pinte de colores bonitos en el editor", correct: false },
              { text: "Porque los tipos de datos deciden la velocidad máxima física del motor", correct: false },
              { text: "No es importante, en robótica todo se puede tratar como texto", correct: false }
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
            question: "¿Cuáles son los 4 operadores aritméticos esenciales?",
            lessonText: "# Las 4 Operaciones de la CPU ️\n\nTu computadora puede realizar miles de millones de operaciones matemáticas por segundo:\n- **Suma (`+`):** `totalPuntos = puntosAutonomo + puntosTeleop`\n- **Resta (`-`):** `distanciaFaltante = meta - posicionActual`\n- **Multiplicación (`*`):** `potencia = inputJoystick * 0.85`\n- **División (`/`):** `promedio = suma / cantidad`\n\nEn programación, el asterisco `*` siempre representa la multiplicación y la barra `/` la división.",
            options: [
              { text: "Suma (+), Resta (-), Multiplicación (*) y División (/)", correct: true },
              { text: "Copiar, Pegar, Cortar y Guardar", correct: false },
              { text: "Enter, Espacio, Shift y Control", correct: false },
              { text: "Encender, Apagar, Calibrar y Conectar", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué resultado se almacena en la variable 'distancia'?",
            codeSnippet: "distancia = 100 - 35\nprint(distancia)",
            options: [
              { text: "65", correct: true },
              { text: "135", correct: false },
              { text: "35", correct: false },
              { text: "100", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la operación para calcular el doble de las RPM actuales:",
            codeSnippet: "rpm = 1500\nrpmDoble = rpm _____ 2\nprint(rpmDoble)",
            options: [
              { text: "*", correct: true },
              { text: "+", correct: false },
              { text: "/", correct: false },
              { text: "%", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprimirá esta división en pantalla?",
            codeSnippet: "voltajeTotal = 24\ncantidadMotores = 2\nprint(voltajeTotal / cantidadMotores)",
            options: [
              { text: "12.0", correct: true },
              { text: "24", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué sucede si intentas dividir cualquier número entre CERO (`x / 0`)?",
            options: [
              { text: "Ocurre un error fatal de división por cero (ZeroDivisionError / ArithmeticException)", correct: true },
              { text: "El resultado siempre es infinito sin causar errores", correct: false },
              { text: "La computadora se congela para siempre", correct: false },
              { text: "El resultado se convierte en cero", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Residuo / Módulo (%)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué calcula exactamente el operador módulo (`%`)?",
            lessonText: "# El Secreto del Residuo \n\nEl operador **Módulo (`%`)** no calcula el cociente de una división, sino el **residuo (lo que sobra)** tras dividir dos números enteros.\n\nEjemplo de la vida real:\nTienes 7 galletas y las repartes equitativamente entre 3 amigos de robótica:\n- Cada amigo recibe 2 galletas (2 * 3 = 6).\n- **Sobra 1 galleta.**\n- Por lo tanto: `7 % 3 = 1`.\n\n¿Para qué sirve en robótica?\n- **Saber si un número es par o impar:** `numero % 2 == 0`.\n- **Hacer ciclos cíclicos:** Limitar un contador entre 0 y 360 grados.",
            options: [
              { text: "El sobrante o residuo entero de una división", correct: true },
              { text: "El porcentaje de descuento en la tienda", correct: false },
              { text: "La raíz cuadrada del número", correct: false },
              { text: "La velocidad máxima permitida", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuánto es `10 % 4`?",
            codeSnippet: "resultado = 10 % 4\nprint(resultado)",
            options: [
              { text: "2 (porque 4 cabe dos veces en 10 y sobran 2)", correct: true },
              { text: "2.5", correct: false },
              { text: "0", correct: false },
              { text: "40", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuánto es `8 % 2`?",
            codeSnippet: "print(8 % 2)",
            options: [
              { text: "0", correct: true },
              { text: "4", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "Si `numero % 2 == 0`, ¿qué podemos afirmar con 100% de certeza matemática?",
            options: [
              { text: "Que el número es PAR", correct: true },
              { text: "Que el número es IMPAR", correct: false },
              { text: "Que el número es negativo", correct: false },
              { text: "Que el número es primo", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la expresión que calcula el residuo de dividir 'grados' entre 360:",
            codeSnippet: "// Calcula el residuo",
            options: [
              { text: "grados % 360", correct: true },
              { text: "grados / 360", correct: false }
            ]
          }
        ]
      },
      {
        title: "Precedencia de Operadores y Paréntesis",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo decide la computadora qué operación resolver primero?",
            lessonText: "# El Orden Jerárquico (PEMDAS) \n\nEn código, las operaciones no siempre se resuelven de izquierda a derecha. Siguen las reglas universales de precedencia:\n\n1. **Paréntesis `()`:** Siempre tienen la máxima prioridad.\n2. **Multiplicación `*`, División `/` y Módulo `%`:** Tienen prioridad intermedia.\n3. **Suma `+` y Resta `-`:** Se resuelven al final.\n\nEjemplo crucial:\n`2 + 3 * 4`\n- Primero se calcula `3 * 4 = 12`.\n- Luego `2 + 12 = 14`.\nSi querías sumar primero, **debes usar paréntesis**: `(2 + 3) * 4 = 20`.",
            options: [
              { text: "Primero paréntesis, luego multiplicación/división/módulo, y al final suma/resta", correct: true },
              { text: "Siempre estrictamente de derecha a izquierda", correct: false },
              { text: "La operación con números más grandes siempre va primero", correct: false },
              { text: "La computadora elige el orden más fácil al azar", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuál es el valor final de 'x'?",
            codeSnippet: "x = 10 + 5 * 2\nprint(x)",
            options: [
              { text: "20 (porque 5 * 2 = 10, y 10 + 10 = 20)", correct: true },
              { text: "30", correct: false },
              { text: "100", correct: false },
              { text: "25", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Cuál es el valor final si usamos paréntesis?",
            codeSnippet: "x = (10 + 5) * 2\nprint(x)",
            options: [
              { text: "30 (porque (10 + 5) = 15, y 15 * 2 = 30)", correct: true },
              { text: "20", correct: false },
              { text: "15", correct: false },
              { text: "50", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Queremos calcular el promedio de dos sensores, pero da un número absurdo. ¿Dónde faltan los paréntesis?",
            codeSnippet: "sensorA = 10\nsensorB = 20\npromedio = sensorA + sensorB / 2\nprint(promedio)  // Imprime 20 en lugar de 15",
            options: [
              { text: "Debe ser: (sensorA + sensorB) / 2", correct: true },
              { text: "Debe ser: sensorA + (sensorB / 2)", correct: false },
              { text: "Hay que dividir entre 3", correct: false },
              { text: "No se pueden promediar variables", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué los desarrolladores experimentados usan paréntesis incluso cuando la precedencia ya es clara?",
            options: [
              { text: "Para que el código sea 100% explícito y evitar confusiones a otros humanos que lean el archivo", correct: true },
              { text: "Porque el procesador se confunde sin paréntesis", correct: false },
              { text: "Para que el programa corra más rápido", correct: false },
              { text: "Para evitar que el código sea hackeado", correct: false }
            ]
          }
        ]
      },
      {
        title: "Operadores Compuestos e Incremento",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué son los operadores de asignación compuesta como `+=` y `-=`?",
            lessonText: "# Atajos para Programadores Inteligentes \n\nEn robótica es súper común modificar una variable basándote en su propio valor anterior:\n`puntos = puntos + 5`\n\nEscribir el nombre de la variable dos veces es repetitivo. Por eso los lenguajes crearon los **operadores compuestos**:\n- `puntos += 5` (Equivale a: `puntos = puntos + 5`)\n- `energia -= 10` (Equivale a: `energia = energia - 10`)\n- `velocidad *= 2` (Equivale a: `velocidad = velocidad * 2`)\n- `contador++` (En Java/C++ incrementa en 1 exactamente).\n\nHacen exactamente lo mismo, pero tu código queda más limpio y legible.",
            options: [
              { text: "Atajos de sintaxis para actualizar una variable sumando, restando o multiplicando su propio valor", correct: true },
              { text: "Operadores que solo funcionan con números negativos", correct: false },
              { text: "Comandos que borran la variable de inmediato", correct: false },
              { text: "Instrucciones secretas que aceleran la CPU", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "¿Qué valor imprimirá este bloque?",
            codeSnippet: "score = 10\nscore += 5\nscore += 2\nprint(score)",
            options: [
              { text: "17", correct: true },
              { text: "10", correct: false },
              { text: "7", correct: false },
              { text: "15", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el atajo para restarle 3 a la variable 'vidas':",
            codeSnippet: "vidas = 10\nvidas _____ 3\nprint(vidas)",
            options: [
              { text: "-=", correct: true },
              { text: "=+", correct: false },
              { text: "*-", correct: false },
              { text: "--", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida de este código?",
            codeSnippet: "potencia = 2\npotencia *= 4\nprint(potencia)",
            options: [
              { text: "8", correct: true },
              { text: "6", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿A cuál de las siguientes expresiones equivale exactamente `ciclos += 1`?",
            options: [
              { text: "ciclos = ciclos + 1", correct: true },
              { text: "ciclos = 1", correct: false },
              { text: "ciclos + 1", correct: false },
              { text: "1 = ciclos", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Relación de Engranes y Reducciones",
        challenges: [
          {
            type: "THEORY",
            question: "¡Matemáticas mecánicas en el robot!",
            lessonText: "# Gear Ratios en Nautilus 4010 ️\n\nUn motor brushless Falcon 500 gira a 6000 RPM (revoluciones por minuto), ¡demasiado rápido para mover una rueda directamente!\n\nPor eso usamos una caja reductora de engranes con una relación (Gear Ratio) de `5:1`:\n`rpmRueda = rpmMotor / gearRatio`\n`rpmRueda = 6000 / 5 = 1200 RPM`\n\nEn este reto final de la Unidad 7, usarás operadores aritméticos para calcular velocidades, relaciones de transmisión y promedios.",
            options: [
              { text: "¡Vamos a calcular la física del chasis!", correct: true },
              { text: "Prefiero que los engranes se traben", correct: false },
              { text: "No quiero hacer cálculos", correct: false },
              { text: "Quiero girar el motor sin caja reductora", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para calcular 'rpmFinal' dividiendo 'rpmMotor' entre 'gearRatio':",
            codeSnippet: "// Calcula la reducción",
            options: [
              { text: "rpmFinal = rpmMotor / gearRatio", correct: true },
              { text: "rpmFinal = rpmMotor * gearRatio", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué RPM final arrojará este cálculo?",
            codeSnippet: "rpmMotor = 6000\ngearRatio = 6\nrpmFinal = rpmMotor / gearRatio\nprint(rpmFinal)",
            options: [
              { text: "1000.0", correct: true },
              { text: "36000.0", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Calcula el promedio de las lecturas de dos encoders en el chasis:",
            codeSnippet: "encoderIzquierdo = 400\nencoderDerecho = 600\npromedioTicks = (encoderIzquierdo + encoderDerecho) / 2\nprint(promedioTicks)",
            options: [
              { text: "500.0", correct: true },
              { text: "700.0", correct: false },
              { text: "1000.0", correct: false },
              { text: "500", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué conclusión fundamental te deja esta Unidad 7 sobre Operadores Aritméticos?",
            options: [
              { text: "Las matemáticas son el motor que transforma lecturas crudas de sensores en movimientos mecánicos precisos", correct: true },
              { text: "El procesador solo puede sumar, nunca restar ni multiplicar", correct: false },
              { text: "Los paréntesis están prohibidos en la programación de FIRST", correct: false },
              { text: "Es mejor calcular todo a mano con calculadora durante el match", correct: false }
            ]
          }
        ]
      }
    ]
  }
];
