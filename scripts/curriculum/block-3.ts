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
        title: "Operadores de Comparación Relacional",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo evalúa la CPU las comparaciones relacionales y cómo se traduce el resultado en el flujo de ejecución?",
            lessonText: "# Las Banderas de la ALU: La Mecánica de la Comparación\n\nEn la arquitectura de los procesadores, las comparaciones numéricas no son conceptos abstractos: son operaciones de sustracción controlada en la ALU (Unidad Aritmético Lógica). Cuando el código evalúa `a > b` o `a == b`, la CPU resta internamente el operando $b$ del operando $a$ sin almacenar el resultado en un registro general. En su lugar, analiza las **Banderas de Estado del Procesador (Flags)**:\n\n- **Zero Flag (Z):** Se enciende en `1` si el resultado de la resta es exactamente cero, lo que demuestra matemáticamente que `a == b`.\n- **Negative Flag (N):** Se enciende en `1` si el resultado es menor que cero, indicando que `a < b`.\n\nEl resultado definitivo de cualquier operador relacional (`==`, `!=`, `>`, `<`, `>=`, `<=`) es siempre un valor escalar booleano puro (`True` o `False`).\n\n### La Confusión Más Destructiva: = vs ==\n- **`=` (Asignación):** Es una orden imperativa de escritura destructiva en memoria RAM.\n- **`==` (Comparación de Igualdad):** Es una pregunta relacional que interroga a la CPU sobre si dos cantidades coinciden.\n\nEn un robot de competencia como Nautilus 4010, los operadores relacionales monitorean continuamente la telemetría sensorial crítica: `voltajeBateria >= 12.0`, `presionNeumaticaPSI >= 90.0`, `distanciaObstaculoMeters < 0.5`.\n\n**La Regla de Oro:**\nLos operadores relacionales comparan operandos evaluando banderas de la ALU para producir un booleano; jamás confundas la asignación destructiva (=) con la comparación de igualdad (==).",
            options: [
              { text: "Comparan dos operandos evaluando las banderas de estado de la ALU (Zero y Negative) para producir un resultado booleano estricto", correct: true },
              { text: "Convierten automáticamente los números comparados en texto para imprimirlos en la consola del piloto", correct: false },
              { text: "Sobrescriben el valor de la variable izquierda con el valor de la variable derecha como una asignación forzada", correct: false },
              { text: "Detienen el reloj del procesador durante cinco segundos para esperar una confirmación del usuario", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operador de comparación con su función precisa en la evaluación de hardware:",
            options: [
              { text: "== (Igualdad relacional)|||Verifica si ambos operandos poseen el mismo valor numérico o lógico", correct: true },
              { text: "!= (Desigualdad relacional)|||Devuelve True únicamente si ambos operandos son distintos", correct: true },
              { text: ">= y <= (Límites inclusivos)|||Evalúan cotas numéricas incluyendo el valor frontera exacto", correct: true },
              { text: "Zero Flag (ALU)|||Bandera de hardware que se activa cuando la sustracción interna da cero", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia de verificación de telemetría de batería antes de autorizar el arranque del robot:",
            options: [
              { text: "MIN_BATTERY_VOLTS = 12.0", correct: true, audioSrc: "1" },
              { text: "currentBatteryVolts = 11.4", correct: true, audioSrc: "2" },
              { text: "isBatteryAdequate = currentBatteryVolts >= MIN_BATTERY_VOLTS", correct: true, audioSrc: "3" },
              { text: "print('Estado de bateria apta para match: ' + str(isBatteryAdequate))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la comparación relacional para evaluar si la distancia reportada por el sensor es inferior a 0.5 metros:",
            codeSnippet: "distanciaSensorMeters = 0.38\nalertaColision = (distanciaSensorMeters _____ 0.5)\nprint('¿Alerta de proximidad? ' + str(alertaColision))",
            options: [
              { text: "<", correct: true },
              { text: "=", correct: false },
              { text: ">", correct: false },
              { text: "!=", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál de las siguientes comparaciones relacionales produce un valor booleano estrictamente FALSE?",
            options: [
              { text: "10 != 10 (afirma falsamente que diez es diferente de diez)", correct: true },
              { text: "10 == 10 (afirma correctamente la igualdad de diez y diez)", correct: false },
              { text: "15 >= 10 (afirma correctamente que quince es mayor o igual a diez)", correct: false },
              { text: "5 < 8 (afirma correctamente que cinco es estrictamente menor que ocho)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación con límites estrictos. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "limiteSuperior = 100\nlecturaActual = 100\nesMenorEstricto = (lecturaActual < limiteSuperior)\nprint(esMenorEstricto)",
            options: [
              { text: "False", correct: true },
              { text: "True", correct: false },
              { text: "100", correct: false },
              { text: "0", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico AND (&&)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo opera la conjunción lógica AND (&&) en la toma de decisiones y qué significa la evaluación de cortocircuito?",
            lessonText: "# Conjunción Lógica y Evaluación de Cortocircuito (Short-Circuit)\n\nEl operador lógico **AND** (`&&` en Java/C++, `and` in Python) modela la intersección booleana estricta: una proposición compuesta `A and B` es `True` **única y exclusivamente si ambas premisas son simultáneamente verdaderas**.\n\n### Tabla de Verdad de la Conjunción:\n- `True and True` -> `True`\n- `True and False` -> `False`\n- `False and True` -> `False`\n- `False and False` -> `False`\n\n### La Evaluación de Cortocircuito (Short-Circuit Evaluation):\nLos compiladores modernos aplican una optimización crucial: si el primer operando ($A$) es `False`, **la CPU cancela de inmediato la evaluación del segundo operando ($B$)** porque es matemáticamente imposible que la conjunción final sea verdadera. Esto no solo ahorra nanosegundos en bucles de alta velocidad, sino que evita errores de ejecución cuando el segundo operando depende de la validez del primero (por ejemplo: `sensor != None and sensor.leer()`).\n\nEn Nautilus 4010, el disparo seguro de notas exige conjunción estricta:\n```python\npuedeDisparar = (isFlywheelAtSpeed and isChassisAligned and isTargetLocked)\n```\nSi cualquiera de las tres condiciones falla, el actuador neumático jamás se dispara.\n\n**La Regla de Oro:**\nLa conjunción lógica AND exige que todas las premisas sean verdaderas simultáneamente; aprovecha la evaluación de cortocircuito para proteger comprobaciones de hardware.",
            options: [
              { text: "Devuelve True únicamente si todas las condiciones son verdaderas, abortando la evaluación temprana si encuentra un False inicial", correct: true },
              { text: "Devuelve True si al menos una de las condiciones es verdadera, ignorando las demás", correct: false },
              { text: "Multiplica los valores de los sensores y convierte el resultado en una cadena de texto", correct: false },
              { text: "Invierte automáticamente la polaridad de los motores si una condición es falsa", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada concepto formal sobre la conjunción lógica con su comportamiento técnico:",
            options: [
              { text: "A and B (Conjunción)|||Produce True exclusivamente si ambos operandos son verdaderos", correct: true },
              { text: "Short-Circuit en AND|||Detiene la evaluación de inmediato si el primer operando es False", correct: true },
              { text: "Tabla de Verdad AND|||Falsa en tres de los cuatro casos posibles; solo (True, True) es True", correct: true },
              { text: "Interbloqueo Restrictivo|||Filtro de seguridad que exige consenso unánime de todos los sensores", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la secuencia de autorización de disparo con doble confirmación de sensores:",
            options: [
              { text: "isShooterAtSpeed = True", correct: true, audioSrc: "1" },
              { text: "isTargetAligned = False", correct: true, audioSrc: "2" },
              { text: "canLaunchNote = isShooterAtSpeed and isTargetAligned", correct: true, audioSrc: "3" },
              { text: "print('Autorizacion de lanzamiento: ' + str(canLaunchNote))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la expresión lógica para permitir el avance del robot solo si el sistema está habilitado Y el camino despejado:",
            codeSnippet: "robotHabilitado = True\ncaminoDespejado = True\npuedeAvanzar = robotHabilitado _____ caminoDespejado\nprint('Permiso de avance: ' + str(puedeAvanzar))",
            options: [
              { text: "and", correct: true },
              { text: "or", correct: false },
              { text: "not", correct: false },
              { text: "==", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "En una expresión con tres condiciones encadenadas `(A and B and C)`, si `A` es `False`, ¿qué acción exacta toma la CPU?",
            options: [
              { text: "Interrumpe la evaluación de B y C inmediatamente resolviendo False por cortocircuito", correct: true },
              { text: "Evalúa B y C obligatoriamente antes de emitir un fallo de sintaxis", correct: false },
              { text: "Convierte el resultado en True para compensar el fallo de la primera variable", correct: false },
              { text: "Reinicia el microprocesador por seguridad eléctrica", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación de la compuerta lógica AND. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "voltajeOk = (12.4 >= 11.5)\npresionOk = (85 >= 90)\nlistoParaMatch = voltajeOk and presionOk\nprint(listoParaMatch)",
            options: [
              { text: "False", correct: true },
              { text: "True", correct: false },
              { text: "12.4", correct: false },
              { text: "85", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico OR (||)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo opera la disyunción lógica OR (||) y cuándo debe emplearse en arquitecturas de seguridad de software?",
            lessonText: "# Disyunción Lógica y Disparadores Redundantes de Falla\n\nEl operador lógico **OR** (`||` en Java/C++, `or` en Python) implementa la disyunción booleana: la proposición `A or B` evalúa a `True` **si al menos una de las condiciones conectadas es verdadera**. El único escenario en que un operador OR produce `False` ocurre cuando absolutamente todas sus premisas son simultáneamente falsas.\n\n### Tabla de Verdad de la Disyunción:\n- `True or True` -> `True`\n- `True or False` -> `True`\n- `False or True` -> `True`\n- `False or False` -> `False`\n\n### Cortocircuito en Disyunción:\nSi el primer término ($A$) es `True`, la CPU **no evalúa el resto de las condiciones** y concluye instantáneamente que la expresión global es `True`.\n\n### Arquitectura Fail-Safe en Robótica:\nMientras que el operador AND actúa como un filtro restrictivo para autorizar acciones de alto riesgo, el operador OR es el cimiento de los **protocolos de parada de emergencia**: cualquier anomalía individual debe disparar de inmediato la detención preventiva:\n```python\nfrenarEmergencia = (botonEStopPresionado or voltajeCritico or temperaturaMotorPeligrosa)\n```\nSi el botón físico de E-Stop es presionado, el robot se congela en microsegundos sin esperar a consultar el sensor de temperatura.\n\n**La Regla de Oro:**\nLa disyunción lógica OR devuelve True si al menos una premisa es afirmativa; es la estructura fundamental para diseñar protocolos de parada de emergencia y disparadores redundantes.",
            options: [
              { text: "Devuelve True si al menos una premisa es afirmativa, requiriendo que todas sean falsas para producir False", correct: true },
              { text: "Exige estrictamente que todas las condiciones sean verdaderas al mismo tiempo", correct: false },
              { text: "Suma los voltajes de los sensores conectados y calcula el porcentaje restante", correct: false },
              { text: "Solo produce True cuando ambas variables tienen el valor False", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada caso de evaluación de la compuerta OR con su resultado formal:",
            options: [
              { text: "True or False|||True (la primera premisa afirmativa basta para satisfacer la disyunción)", correct: true },
              { text: "False or False|||False (único escenario donde la disyunción produce falsedad)", correct: true },
              { text: "Short-Circuit en OR|||Resuelve True de inmediato al encontrar el primer operando verdadero", correct: true },
              { text: "Disparador Redundante|||Cualquiera de múltiples fallas activa la misma rutina de protección", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la evaluación del protocolo de detención de emergencia por fallos redundantes:",
            options: [
              { text: "isEStopPressed = False", correct: true, audioSrc: "1" },
              { text: "isPressureLossDetected = True", correct: true, audioSrc: "2" },
              { text: "haltRobotCommand = isEStopPressed or isPressureLossDetected", correct: true, audioSrc: "3" },
              { text: "print('Comando de detencion emitido: ' + str(haltRobotCommand))", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la disyunción lógica para activar la alarma si la temperatura es crítica O la corriente excede el límite:",
            codeSnippet: "temperaturaExcesiva = False\ncorrientePeligrosa = True\nalertaActiva = temperaturaExcesiva _____ corrientePeligrosa\nprint('Alarma de seguridad activada: ' + str(alertaActiva))",
            options: [
              { text: "or", correct: true },
              { text: "and", correct: false },
              { text: "not", correct: false },
              { text: "==", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la diferencia algorítmica fundamental entre emplear AND versus OR en el diseño de software de control?",
            options: [
              { text: "AND opera como un filtro restrictivo exigiendo consenso absoluto, mientras que OR opera como un disparador permisivo sensible a cualquier señal", correct: true },
              { text: "AND consume el doble de memoria RAM en comparación con OR", correct: false },
              { text: "AND solo admite números pares y OR solo números de punto flotante", correct: false },
              { text: "No existe ninguna diferencia; son operadores sinónimos intercambiables según el estándar ISO", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la evaluación de la disyunción lógica redundante. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "sensorToqueA = False\nsensorToqueB = False\nsensorOptico = True\npiezaDetectada = sensorToqueA or sensorToqueB or sensorOptico\nprint(piezaDetectada)",
            options: [
              { text: "True", correct: true },
              { text: "False", correct: false },
              { text: "None", correct: false },
              { text: "Error de tipos", correct: false }
            ]
          }
        ]
      },
      {
        title: "El Operador Lógico NOT (!)",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cuál es el rol de la negación lógica NOT (!) en la inversión de polaridad booleana y la simplificación de condiciones?",
            lessonText: "# Inversión Unaria y las Leyes de De Morgan\n\nEl operador lógico **NOT** (`!` en Java/C++, `not` en Python) es un operador unario que **invierte el valor de verdad** de cualquier proposición booleana:\n- `not True` se convierte en `False`.\n- `not False` se convierte en `True`.\n\nA nivel de transistores en la arquitectura de silicio, corresponde a una compuerta inversora NOT elemental formada por un par complementario CMOS.\n\n### Sensores Active-Low en Robótica:\nEn mecatrónica e instrumentación industrial, muchos sensores críticos se configuran como **Normalmente Cerrados (NC) o Active-Low** por seguridad: el circuito conduce corriente continua (`True`) mientras no haya anomalías. Si un cable se rompe físicamente o un interruptor de fin de carrera es golpeado, el circuito se abre y el voltaje cae a cero (`False`).\nPara traducir esa señal eléctrica a estado mecánico comprensible, el software aplica NOT:\n```python\nesTopeMecanicoAlcanzado = not circuitoCerrado\n```\n\n### Leyes de De Morgan para Simplificación:\n1. `not (A and B)` equivale matemáticamente a `(not A) or (not B)`\n2. `not (A or B)` equivale matemáticamente a `(not A) and (not B)`\n\n**La Regla de Oro:**\nEl operador NOT invierte la polaridad booleana; empléalo para traducir señales eléctricas active-low y simplificar expresiones negativas mediante las leyes de De Morgan.",
            options: [
              { text: "Invierte la polaridad booleana de una proposición, permitiendo traducir sensores active-low y simplificar lógica compleja con las leyes de De Morgan", correct: true },
              { text: "Elimina la variable de la memoria RAM y libera el espacio ocupado en la tabla de símbolos", correct: false },
              { text: "Convierte cualquier número entero positivo en su correspondiente negativo de 32 bits", correct: false },
              { text: "Es una directiva de compilador que deshabilita las advertencias de código", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada operación con el operador de negación con su equivalencia técnica formal:",
            options: [
              { text: "not True|||False (inversión directa de valor afirmativo)", correct: true },
              { text: "not False|||True (inversión directa de valor negativo)", correct: true },
              { text: "not (A and B)|||(not A) or (not B) (Primera ley de De Morgan)", correct: true },
              { text: "Lógica Active-Low|||Configuración donde la ausencia de señal eléctrica denota el estado activo", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la traducción del sensor de fin de carrera con lógica active-low a estado comprensible de subsistema:",
            options: [
              { text: "isCircuitClosed = True", correct: true, audioSrc: "1" },
              { text: "isElevatorAtTop = not isCircuitClosed", correct: true, audioSrc: "2" },
              { text: "print('¿Mecanismo en tope superior?: ' + str(isElevatorAtTop))", correct: true, audioSrc: "3" },
              { text: "print('Comprobacion de carrera finalizada')", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la negación lógica para verificar si el chasis NO se encuentra en movimiento:",
            codeSnippet: "isRobotMoving = False\nisRobotStationary = _____ isRobotMoving\nprint('Chasis estacionado en reposo: ' + str(isRobotStationary))",
            options: [
              { text: "not", correct: true },
              { text: "!", correct: false },
              { text: "or", correct: false },
              { text: "and", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "De acuerdo con las Leyes de De Morgan, ¿a cuál de las siguientes expresiones equivale exactamente `not (sensorA and sensorB)`?",
            options: [
              { text: "(not sensorA) or (not sensorB)", correct: true },
              { text: "(not sensorA) and (not sensorB)", correct: false },
              { text: "sensorA or sensorB", correct: false },
              { text: "not (sensorA or sensorB)", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la inversión de polaridad booleana sucesiva. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "sistemaBloqueado = False\nautorizarArranque = not sistemaBloqueado\nprint(autorizarArranque)",
            options: [
              { text: "True", correct: true },
              { text: "False", correct: false },
              { text: "sistemaBloqueado", correct: false },
              { text: "None", correct: false }
            ]
          }
        ]
      },
      {
        title: "Reto: Lógica de Seguridad del Elevador",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo se combinan operadores relacionales y compuertas AND, OR y NOT en un sistema crítico de enclavamiento de seguridad de robótica?",
            lessonText: "# Interbloqueos de Seguridad: El Elevador de Nautilus 4010\n\nEn un robot de competencia FRC, el elevador es un subsistema mecánico de alto riesgo: desplaza una carga pesada a alta velocidad impulsado por dos motores Falcon 500. Un error lógico puede romper cables de acero, doblar perfiles de aluminio o quemar controladores por sobrecorriente.\n\nPara autorizar la elevación hacia arriba (`canRaiseElevator`), el software debe verificar una matriz booleana rigurosa:\n1. **Condición de Límite Mecánico:** El sensor de fin de carrera superior no debe estar activado (`not isTopLimitHit`).\n2. **Condición de Corriente:** El consumo eléctrico de los motores debe mantenerse dentro del límite seguro (`motorCurrentAmps < MAX_SAFE_CURRENT`).\n3. **Condición de Emergencia:** No debe existir ninguna señal de parada de emergencia (`not (isEStopEngaged or isDriverStopPressed)`).\n\nEn este reto final de la Unidad 8, orquestarás operadores relacionales (`<`, `==`), conjunciones (`and`), disyunciones (`or`) e inversiones (`not`) para construir la arquitectura lógica a prueba de fallos de Nautilus 4010.\n\n**La Regla de Oro:**\nLa seguridad en sistemas embebidos se diseña mediante matrices booleanas de enclavamiento estricto; cada condición de riesgo debe ser un candado inviolable.",
            options: [
              { text: "Integran operadores relacionales con compuertas restrictivas AND e inversiones NOT para construir interbloqueos a prueba de fallos", correct: true },
              { text: "Permiten mover los mecanismos a máxima potencia ignorando las lecturas físicas de los sensores de límite", correct: false },
              { text: "Reemplazan los fusibles eléctricos del robot por instrucciones de software en la memoria caché", correct: false },
              { text: "Convierten las señales de parada de emergencia en comandos de aceleración inmediata", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona cada condición del interbloqueo con su protección mecánica correspondiente:",
            options: [
              { text: "not isTopLimitHit|||Impide que el mecanismo colisione físicamente contra el tope estructural superior", correct: true },
              { text: "motorCurrentAmps < 35.0|||Protección térmica que previene la sobrecorriente y bloqueo de motores", correct: true },
              { text: "not isEStopPressed|||Garantiza que ninguna orden humana de parada de emergencia esté activa", correct: true },
              { text: "canRaise = limit and current and safe|||Interbloqueo de conjunción final que autoriza el movimiento seguro", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la cadena de interbloqueo del elevador desde las lecturas sensoriales hasta el permiso de motor:",
            options: [
              { text: "isTopLimitHit = False", correct: true, audioSrc: "1" },
              { text: "motorCurrentAmps = 24.5", correct: true, audioSrc: "2" },
              { text: "isCurrentSafe = motorCurrentAmps < 35.0", correct: true, audioSrc: "3" },
              { text: "canRaise = (not isTopLimitHit) and isCurrentSafe", correct: true, audioSrc: "4" }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la matriz lógica para autorizar el descenso del elevador solo si no está en el límite inferior Y el freno está liberado:",
            codeSnippet: "isBottomLimit = False\nisBrakeReleased = True\ncanLower = (not isBottomLimit) _____ isBrakeReleased\nprint('Permiso de descenso seguro: ' + str(canLower))",
            options: [
              { text: "and", correct: true },
              { text: "or", correct: false },
              { text: "==", correct: false },
              { text: "not", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué en sistemas críticos de robótica los interbloqueos de seguridad se estructuran siempre con compuertas restrictivas AND en lugar de OR?",
            options: [
              { text: "Porque el movimiento de alto riesgo solo debe autorizarse si TODAS las condiciones de seguridad son simultáneamente válidas y verificadas", correct: true },
              { text: "Porque las compuertas OR consumen el doble de corriente de la batería", correct: false },
              { text: "Porque los sensores mecánicos son incompatibles con el álgebra booleana", correct: false },
              { text: "Porque las computadoras no pueden procesar más de dos variables a la vez", correct: false }
            ]
          },
          {
            type: "CODE_TEST",
            question: "Rastrea la matriz de seguridad del elevador. ¿Qué valor exacto imprimirá la consola?",
            codeSnippet: "isEStop = False\nisTopLimit = True\nisCurrentOk = True\ncanMoveUp = (not isEStop) and (not isTopLimit) and isCurrentOk\nprint(canMoveUp)",
            options: [
              { text: "False", correct: true },
              { text: "True", correct: false },
              { text: "isTopLimit", correct: false },
              { text: "Error de ejecucion", correct: false }
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
  "order": 9,
  "slug": "unit-9",
  "title": "If Conditions",
  "description": "Toma de decisiones: Ejecutar código solo cuando una condición se cumple",
  "guidebookText": "# Guía de Estudio: Unit 9 - If Conditions\n\nHasta ahora, todos nuestros programas ejecutaban cada línea de arriba hacia abajo sin excepción. La sentencia **`if`** introduce por primera vez **caminos y bifurcaciones**: permite que un bloque de código se ejecute **SÓLO SI** una condición es verdadera (`true`).\n\n### Estructura Básica:\n```python\nif condicion:\n    # Este bloque solo corre si condicion == true\n    accion()\n```\n\n### Reglas Sagradas:\n1. **La Condición:** Siempre debe evaluar a un valor booleano (`true` o `false`).\n2. **Indentación / Bloques:** En Python, la indentación (4 espacios hacia la derecha) define qué líneas pertenecen al `if`. En Java, C++ y Rust, se usan llaves `{ ... }`.\n3. **`=` vs `==`:** El operador singular `=` asigna un valor en memoria. El operador doble `==` compara igualdad lógica sin alterar variables.",
  "lessons": [
    {
      "title": "La Sentencia If",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Qué es una sentencia 'if' y cómo altera el flujo de ejecución de la CPU?",
          "lessonText": "# El Guardián del Camino\n\nEn la arquitectura de computadoras convencional, el procesador avanza de forma secuencial incrementando su registro contador de programa (Program Counter). La instrucción **`if`** introduce bifurcación condicional: evalúa una expresión lógica y, si el resultado es verdadero (`true`), transfiere el control al bloque subordinado; si es falso (`false`), el Program Counter salta directamente a la siguiente instrucción fuera del bloque sin costo de ejecución adicional.\n\n```python\nif distancia_cm < 20.0:\n    frenos_neumaticos.activar()\nprint('Telemetria enviada')\n```\n\nEn la robótica de competencia FRC de Nautilus 4010, este mecanismo es vital en el subsistema de admisión de piezas (Intake): cuando el sensor óptico de haz reflectivo detecta una pieza a menos de 20 cm, el controlador activa de inmediato el pistón de sujeción para capturarla.\n\n**Regla de Oro: Una sentencia if evalúa una expresión booleana estricta; si es true ejecuta el bloque subordinado, y si es false salta limpiamente a la siguiente instrucción del flujo principal.**",
          "options": [
            {
              "text": "Una estructura de control que ejecuta un bloque de instrucciones únicamente cuando su condición booleana evalúa a true",
              "correct": true
            },
            {
              "text": "Un comando que apaga el controlador del robot si ocurre una excepción de hardware",
              "correct": false
            },
            {
              "text": "Una variable en memoria que solo puede almacenar números enteros pares",
              "correct": false
            },
            {
              "text": "Un bucle de repetición continua que jamás devuelve el control a la CPU",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada componente de la bifurcación condicional con su función técnica:",
          "options": [
            {
              "text": "if (condicion):|||Comando de bifurcación condicional que evalúa una expresión lógica",
              "correct": true
            },
            {
              "text": "Bloque subordinado|||Conjunto de instrucciones indentadas que sólo se ejecutan si la prueba es true",
              "correct": true
            },
            {
              "text": "Program Counter|||Registro de la CPU que salta instrucciones cuando la condición es false",
              "correct": true
            },
            {
              "text": "Condición booleana|||Expresión relacional que resuelve estrictamente en true o false",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena cronológicamente las instrucciones para evaluar y ejecutar un frenado preventivo:",
          "options": [
            {
              "text": "distancia_cm = sensor_laser.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "if distancia_cm < 30.0:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    frenos_neumaticos.activar()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "telemetria.enviar(distancia_cm)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave inicia la bifurcación condicional para proteger la batería del robot?",
          "codeSnippet": "voltaje_bateria = 11.2\n___ voltaje_bateria < 12.0:\n    desactivar_mecanismos_secundarios()\nnotificar_driver_station()",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "while",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            },
            {
              "text": "check",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué sucede a nivel de hardware y registro de instrucciones de la CPU cuando la condición de un 'if' evalúa a false?",
          "options": [
            {
              "text": "El Program Counter salta la dirección de memoria del bloque indentado y continúa ejecutando la instrucción inmediatamente posterior",
              "correct": true
            },
            {
              "text": "La CPU se reinicia automáticamente para limpiar la memoria caché del proceso",
              "correct": false
            },
            {
              "text": "Las instrucciones dentro del bloque se ejecutan pero sus resultados se descartan en la memoria RAM",
              "correct": false
            },
            {
              "text": "El compilador genera una excepción en tiempo de ejecución interrumpiendo el hilo principal",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué imprimirá la consola al ejecutar este programa de verificación de presión?",
          "codeSnippet": "presion_psi = 85\nvalvula_abierta = False\nif presion_psi > 60:\n    valvula_abierta = True\nif presion_psi > 100:\n    valvula_abierta = False\nprint(valvula_abierta)",
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
              "text": "None",
              "correct": false
            },
            {
              "text": "85",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Indentación y Bloques de Código",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Por qué la indentación define el alcance léxico en lenguajes como Python y cómo previene fallos mecánicos?",
          "lessonText": "# Estructura y Alcance Léxico\n\nEn ciencias de la computación, agrupar instrucciones determina qué líneas pertenecen al cuerpo condicional y cuáles pertenecen al flujo incondicional de la aplicación. Mientras que lenguajes como C++, Java y Rust utilizan llaves `{}` para delimitar bloques, Python emplea **whitespace significativo** (indentación estándar de 4 espacios según PEP 8).\n\n```python\nif sensor_presencia == True:\n    cerrar_garra()\n    encender_indicador_led()\naplicar_torque_traccion()\n```\nEn este fragmento, `cerrar_garra()` y `encender_indicador_led()` sólo se ejecutan si la condición es verdadera. Sin embargo, `aplicar_torque_traccion()` está en la columna base exterior, por lo que se ejecuta siempre sin importar la condición.\n\nEn FRC Nautilus 4010, un error de indentación donde la retracción del pistón quedó fuera del bloque condicional provocó que el mecanismo se accionara repetidamente a 50 Hz en cada ciclo del procesador roboRIO, despresurizando el tanque de aire en menos de dos segundos.\n\n**Regla de Oro: La indentación define jerarquías de ejecución deterministas; cada instrucción indentada pertenece al bloque de la sentencia superior, mientras que regresar a la columna base marca el reingreso al flujo incondicional.**",
          "options": [
            {
              "text": "Porque establece de forma explícita qué instrucciones pertenecen al cuerpo condicional y cuáles se ejecutan incondicionalmente",
              "correct": true
            },
            {
              "text": "Porque duplica la memoria asignada a las variables numéricas para evitar desbordamientos",
              "correct": false
            },
            {
              "text": "Porque indica al procesador qué líneas de código deben enviarse a la tarjeta gráfica",
              "correct": false
            },
            {
              "text": "Porque permite que el compilador ejecute el programa en sentido inverso cuando hay un error",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de delimitación de código con su definición técnica:",
          "options": [
            {
              "text": "4 Espacios PEP 8|||Estándar formal de la industria para definir un nivel de bloque en Python",
              "correct": true
            },
            {
              "text": "IndentationError|||Fallo léxico generado cuando los espacios de una línea no concuerdan con su bloque",
              "correct": true
            },
            {
              "text": "Delimitación por llaves {}|||Mecanismo de alcance léxico utilizado en C, C++, Java y Rust",
              "correct": true
            },
            {
              "text": "Flujo incondicional|||Instrucciones en la columna base que siempre se ejecutan tras evaluar la bifurcación",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las líneas respetando la jerarquía de indentación para la refrigeración del motor:",
          "options": [
            {
              "text": "temperatura_motor = leer_termocupla()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "if temperatura_motor > 85.0:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    refrigeracion_liquida.encender()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "log_telemetria(temperatura_motor)",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué debe colocarse al inicio de la línea para subordinar la alerta al bloque condicional?",
          "codeSnippet": "velocidad_rpm = 4500\nif velocidad_rpm > 4000:\n____alerta_sobregiro = True\nregistro_can.guardar(velocidad_rpm)",
          "options": [
            {
              "text": "    ",
              "correct": true
            },
            {
              "text": ";",
              "correct": false
            },
            {
              "text": "->",
              "correct": false
            },
            {
              "text": "//",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué mezclar tabuladores y espacios en el código fuente de un sistema embebido es una práctica inaceptable?",
          "options": [
            {
              "text": "Porque diferentes editores y compiladores interpretan el tabulador con distinto ancho, provocando inconsistencias léxicas y fallos de ejecución",
              "correct": true
            },
            {
              "text": "Porque los tabuladores incrementan el consumo eléctrico del microcontrolador al ejecutar el código",
              "correct": false
            },
            {
              "text": "Porque los procesadores de arquitectura ARM Cortex no admiten caracteres ASCII correspondientes a tabuladores",
              "correct": false
            },
            {
              "text": "Porque el bus de comunicaciones CAN rechaza cualquier paquete de datos derivado de archivos con tabuladores",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valores exactos imprimirá este programa al finalizar la ejecución secuencial?",
          "codeSnippet": "disparador_listo = False\nmunicion = 3\nif municion > 0:\n    disparador_listo = True\n    municion = municion - 1\nmunicion = 0\nprint(disparador_listo, municion)",
          "options": [
            {
              "text": "True 0",
              "correct": true
            },
            {
              "text": "True 2",
              "correct": false
            },
            {
              "text": "False 0",
              "correct": false
            },
            {
              "text": "False 3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Condiciones Anidadas (Ifs dentro de Ifs)",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo funciona un árbol de decisiones jerárquico mediante condiciones anidadas y cuándo debe aplicarse?",
          "lessonText": "# Árboles de Decisión y Filtros Jerárquicos\n\nEn el modelado computacional, un árbol de decisión permite evaluar precondiciones de manera progresiva. Al anidar un bloque `if` dentro del cuerpo de otro `if`, el bloque interior **solo es evaluado si la condición exterior resultó verdadera**. Esto crea una conjunción jerárquica donde la segunda prueba no consume ciclos de procesamiento si la primera falla.\n\n```python\nif objetivo_detectado == True:\n    if distancia_metros <= 2.5:\n        disparar_proyectil()\n```\n\nEn el software de tiro autónomo de Nautilus 4010 en la competencia mundial FIRST, la cámara Limelight reporta si detectó el objetivo AprilTag. Si no lo detecta, el robot ni siquiera gasta recursos en medir la distancia por ultrasonido ni en calcular la solución balística, preservando valioso tiempo de CPU.\n\n**Regla de Oro: Las condiciones anidadas permiten validar precondiciones jerárquicas costosas paso a paso, pero deben mantenerse a baja profundidad (máximo 2 o 3 niveles) para evitar la degradación de legibilidad conocida como Arrow Anti-pattern.**",
          "options": [
            {
              "text": "Estructuras donde una condición interna solo se evalúa si todas las condiciones que la contienen fueron verdaderas",
              "correct": true
            },
            {
              "text": "Bucles repetitivos que ejecutan instrucciones simultáneas en múltiples hilos de hardware",
              "correct": false
            },
            {
              "text": "Comandos que cancelan la memoria del programa si el segundo condicional resulta falso",
              "correct": false
            },
            {
              "text": "Declaraciones de variables globales accesibles únicamente por el sistema operativo",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de lógica jerárquica con su descripción técnica:",
          "options": [
            {
              "text": "If anidado|||Sentencia condicional situada en el cuerpo interior de otro bloque if",
              "correct": true
            },
            {
              "text": "Árbol de decisión|||Estructura jerárquica donde cada nodo evalúa una condición antes del siguiente paso",
              "correct": true
            },
            {
              "text": "Arrow Anti-pattern|||Degradación de legibilidad por anidar demasiados niveles condicionales profundos",
              "correct": true
            },
            {
              "text": "Evaluación secuencial|||El bloque interno jamás se evalúa si la condición externa resulta ser false",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena los niveles jerárquicos para autorizar el despliegue del intake en el robot:",
          "options": [
            {
              "text": "if robot_habilitado == True:",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    if presion_sistema_psi >= 60:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "        actuador_intake.desplegar()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "reportar_estado_general()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción permite evaluar la segunda condición únicamente tras confirmar que el objetivo está centrado?",
          "codeSnippet": "if objetivo_centrado == True:\n    ___ distancia_metros <= 2.5:\n        iniciar_disparo_autonomo()",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "then",
              "correct": false
            },
            {
              "text": "switch",
              "correct": false
            },
            {
              "text": "ensure",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Cuándo es preferible utilizar condiciones anidadas jerárquicas en lugar de un único condicional compuesto con el operador 'and' (if A and B)?",
          "options": [
            {
              "text": "Cuando evaluar la segunda condición requiere operaciones computacionalmente costosas o lecturas de sensores que solo deben realizarse si la primera precondición es estrictamente válida",
              "correct": true
            },
            {
              "text": "Cuando se requiere que ambas condiciones se ejecuten en núcleos de CPU paralelos distintos",
              "correct": false
            },
            {
              "text": "Cuando el lenguaje de programación no soporta operadores booleanos en una sola línea",
              "correct": false
            },
            {
              "text": "Cuando se busca incrementar deliberadamente el consumo de memoria RAM para estabilizar el sistema",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'disparo_autorizado' tras evaluar el condicional anidado?",
          "codeSnippet": "presencia_nota = True\nvelocidad_flywheel = 4200\ndisparo_autorizado = False\nif presencia_nota:\n    if velocidad_flywheel >= 4500:\n        disparo_autorizado = True\nprint(disparo_autorizado)",
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
              "text": "4200",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "La Trampa Mortal: = vs ==",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cuál es la diferencia fundamental entre el operador de asignación '=' y el operador de comparación '=='?",
          "lessonText": "# Asignación vs Comparación en Memoria\n\nEn la sintaxis de prácticamente todos los lenguajes imperativos derivados de C (incluidos Python, Java y C++), el símbolo `=` realiza una operación de **mutación de memoria**: toma el valor de la derecha y lo almacena en la dirección de memoria designada por la variable de la izquierda.\n\nPor el contrario, el operador doble `==` es una expresión de **interrogación relacional**: lee los valores de ambos lados, comprueba si son idénticos y devuelve un resultado booleano (`True` o `False`) sin alterar ninguna variable en memoria.\n\n```python\nestado = 1       # Asignacion: guarda 1 en la variable estado\nif estado == 1:  # Comparacion: verifica si estado equivale a 1\n    print('Sistema activo')\n```\n\nEn FRC Nautilus 4010, escribir accidentalmente `if (estado = MODO_TURBO)` en un código legado de C++ causó que la variable cambiara incondicionalmente al valor turbo en cada ciclo de ejecución, provocando una colisión descontrolada del chasis Swerve contra las barreras del campo de juego.\n\n**Regla de Oro: El signo '=' almacena datos en la memoria; el signo '==' interroga a la memoria sobre la igualdad de dos operandos sin alterarlos.**",
          "options": [
            {
              "text": "El signo '=' muta la memoria asignando un valor; el signo '==' evalúa igualdad lógica sin alterar variables",
              "correct": true
            },
            {
              "text": "El signo '=' compara números enteros y el signo '==' compara cadenas de texto alfanuméricas",
              "correct": false
            },
            {
              "text": "El signo '=' es exclusivo de Python y el signo '==' es exclusivo de hardware embebido",
              "correct": false
            },
            {
              "text": "Ambos operadores son idénticos y el compilador elige cuál usar según la velocidad de la CPU",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada operador y concepto con su rol en la arquitectura del software:",
          "options": [
            {
              "text": "= (Operador Simple)|||Operador imperativo de asignación que almacena un nuevo valor en memoria",
              "correct": true
            },
            {
              "text": "== (Operador Doble)|||Operador relacional de comparación que verifica igualdad estricta",
              "correct": true
            },
            {
              "text": "SyntaxError en Python|||Protección del intérprete que impide usar '=' dentro de una cláusula if",
              "correct": true
            },
            {
              "text": "Asignación accidental en C|||Fallo clásico donde if (x = 5) modifica x y evalúa a verdadero",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las líneas para inicializar la marcha y verificar con el operador de comparación correcto:",
          "options": [
            {
              "text": "marcha_actual = 1",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "if marcha_actual == 2:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    aplicar_reductora()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "notificar_tablero_piloto()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué operador de comparación debe colocarse para verificar si el modo equivale a 'COMPETICION' sin modificar la variable?",
          "codeSnippet": "modo_autonomo = 'CALIBRACION'\nif modo_autonomo ___ 'COMPETICION':\n    desplegar_brazo_mecanico()",
          "options": [
            {
              "text": "==",
              "correct": true
            },
            {
              "text": "=",
              "correct": false
            },
            {
              "text": ":=",
              "correct": false
            },
            {
              "text": "===",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué lenguajes modernos como Python generan inmediatamente un SyntaxError si un desarrollador escribe 'if velocidad = 100:'?",
          "options": [
            {
              "text": "Para proteger al desarrollador contra fallos críticos donde se altera accidentalmente el estado de la memoria en lugar de comprobarlo",
              "correct": true
            },
            {
              "text": "Porque la palabra clave if carece de permisos de lectura sobre variables numéricas",
              "correct": false
            },
            {
              "text": "Porque los operadores de asignación requieren obligatoriamente de comillas dobles",
              "correct": false
            },
            {
              "text": "Porque el hardware de la computadora no puede procesar asignaciones en menos de un segundo",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'estado_conexion' tras ejecutar el bloque condicional?",
          "codeSnippet": "canal_radio = 4\ncanal_objetivo = 4\nestado_conexion = 'DESCONECTADO'\nif canal_radio == canal_objetivo:\n    estado_conexion = 'ENLAZADO'\nprint(estado_conexion)",
          "options": [
            {
              "text": "'ENLAZADO'",
              "correct": true
            },
            {
              "text": "'DESCONECTADO'",
              "correct": false
            },
            {
              "text": "'ERROR_CANAL'",
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
      "title": "Reto: Detección y Freno Preventivo",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se diseña un sistema de frenado preventivo en tiempo real validando umbrales de seguridad multicriterio?",
          "lessonText": "# Sistemas Ciberfísicos y Frenado Preventivo\n\nEn sistemas embebidos de tiempo real, la toma de decisiones basada en sensores exige validar condiciones críticas antes de activar actuadores mecánicos. Si la distancia medida por un sensor de proximidad cae por debajo de un umbral de seguridad mientras el robot se desplaza hacia el obstáculo, el software debe suprimir la orden del joystick del operador y ordenar frenado regenerativo inmediato.\n\n```python\nif distancia_cm < 40.0:\n    if velocidad_mps > 0.0:\n        chasis_swerve.frenar_en_x()\n```\n\nEn el chasis Swerve de Nautilus 4010, este algoritmo corre a 50 Hz en el bucle principal. Si la distancia al obstáculo es menor a 40 cm y la velocidad hacia adelante es positiva, las 4 ruedas del Swerve se orientan en un patrón cruzado en forma de 'X' (X-Brake), bloqueando mecánicamente cualquier desplazamiento y protegiendo tanto la estructura del robot como la integridad del personal en la cancha.\n\n**Regla de Oro: Los sistemas de seguridad preventivos priorizan la integridad estructural evaluando condiciones críticas antes de autorizar cualquier cambio de estado mecánico.**",
          "options": [
            {
              "text": "Validando jerárquicamente distancia crítica y sentido de velocidad antes de ejecutar el protocolo de frenado físico",
              "correct": true
            },
            {
              "text": "Desconectando la batería principal mediante un relé térmico cada vez que se detecta un obstáculo",
              "correct": false
            },
            {
              "text": "Invirtiendo aleatoriamente la polaridad de los motores sin consultar el estado cinemático",
              "correct": false
            },
            {
              "text": "Ignorando las lecturas del sensor si el robot se desplaza a alta velocidad para evitar lag",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada componente del sistema de frenado preventivo con su función técnica:",
          "options": [
            {
              "text": "Sensor de distancia ToF|||Dispositivo óptico que mide el tiempo de vuelo de fotones para calcular proximidad",
              "correct": true
            },
            {
              "text": "Umbral de colisión|||Límite numérico por debajo del cual se dispara el protocolo de contención",
              "correct": true
            },
            {
              "text": "X-Brake en Swerve|||Configuración de ruedas en ángulo cruzado para fijar mecánicamente el chasis",
              "correct": true
            },
            {
              "text": "Control a 50 Hz|||Bucle de muestreo determinista que evalúa sensores y actúa cada 20 milisegundos",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la secuencia lógica para ejecutar el frenado preventivo y registrar el evento:",
          "options": [
            {
              "text": "distancia_obstaculo_cm = lidar_frontal.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "if distancia_obstaculo_cm < 40.0:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    chasis_swerve.frenar_en_x()",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "telemetria.registrar_evento('FRENO_PREVENTIVO')",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué instrucción subordinada debe evaluar si la velocidad hacia adelante es positiva para accionar el freno?",
          "codeSnippet": "distancia = 32.5\nvelocidad = 2.0\nif distancia < 40.0:\n    ___ velocidad > 0.0:\n        frenar_emergencia()",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "check",
              "correct": false
            },
            {
              "text": "guard",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "En un sistema de frenado preventivo, ¿por qué es fundamental verificar tanto la proximidad como el sentido de la velocidad antes de clavar los frenos?",
          "options": [
            {
              "text": "Para evitar frenar innecesariamente si el robot ya se encuentra alejándose o retrocediendo respecto al obstáculo detectado",
              "correct": true
            },
            {
              "text": "Porque los motores no consumen corriente eléctrica cuando giran en sentido de reversa",
              "correct": false
            },
            {
              "text": "Porque los sensores ópticos invierten sus valores de lectura cuando el chasis está detenido",
              "correct": false
            },
            {
              "text": "Porque el bus de comunicaciones CAN únicamente admite tramas de frenado si la aceleración es negativa",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué resultado arrojará el sistema de telemetría para 'estado_freno' tras la ejecución del bloque?",
          "codeSnippet": "distancia_cm = 35\nvelocidad_mps = 1.8\nestado_freno = False\nif distancia_cm < 40:\n    if velocidad_mps > 1.0:\n        estado_freno = True\nprint(estado_freno)",
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
              "text": "35",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
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
  "order": 10,
  "slug": "unit-10",
  "title": "Else & Else-If Branches",
  "description": "Caminos alternativos: else, elif y selectores múltiples",
  "guidebookText": "# Guía de Estudio: Unit 10 - Else & Else-If Branches\n\n¿Qué pasa cuando la condición de un `if` es falsa y queremos ejecutar una **acción de respaldo**? Para eso existe la sentencia **`else`**.\n\nY cuando tenemos **múltiples alternativas mutuamente excluyentes** (ej: velocidad baja, media o alta), usamos **`else if`** (`elif` en Python).\n\n### Estructura Completa:\n```python\nif condicionA:\n    # Camino 1: Si A es verdadera\n    accionA()\nelif condicionB:\n    # Camino 2: Si A fue falsa pero B es verdadera\n    accionB()\nelse:\n    # Camino 3: Plan de respaldo si NINGUNA de las anteriores fue verdadera\n    accionPorDefecto()\n```\n\n### Principio Clave:\nEn una cadena de `if-elif-else`, **SOLO UN CAMINO se ejecuta**. En cuanto una condición se cumple, la computadora ejecuta ese bloque y salta de inmediato al final de toda la estructura.",
  "lessons": [
    {
      "title": "El Plan de Respaldo: Sentencia Else",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo garantiza la cláusula 'else' una dicotomía estricta en la ejecución de un sistema?",
          "lessonText": "# La Dicotomía Estricta y el Camino de Respaldo\n\nEn lógica computacional, una dicotomía estricta divide el espacio de estados en dos conjuntos exhaustivos y mutuamente excluyentes: el conjunto donde una condición se cumple ($P$) y su complemento exacto donde no se cumple ($\\neg P$). La cláusula **`else`** materializa este principio: garantiza que **uno y exactamente uno** de los dos bloques subordinados se ejecutará siempre.\n\n```python\nif sensor_presencia.detectado() == True:\n    cerrar_garra_neumatica()\nelse:\n    mantener_intake_en_espera()\n```\n\nEn Nautilus 4010, este diseño previene estados mecánicos flotantes o indefinidos. Si el sensor de haz infrarrojo confirma que la nota está en posición, se comanda el cierre del pistón; de lo contrario (`else`), el mecanismo permanece energizado en posición de espera activa, impidiendo que la gravedad abra la compuerta por vibración mecánica.\n\n**Regla de Oro: La cláusula 'else' no lleva condición propia; captura el complemento exacto de su 'if' precedente, garantizando que el sistema siempre tenga un camino de ejecución definido.**",
          "options": [
            {
              "text": "Ejecutando un bloque incondicional de respaldo cuando la prueba del if resulta estrictamente falsa",
              "correct": true
            },
            {
              "text": "Reiniciando el hilo principal si la condición previa no devuelve un valor numérico",
              "correct": false
            },
            {
              "text": "Creando una variable secundaria en memoria para duplicar la velocidad del procesador",
              "correct": false
            },
            {
              "text": "Ejecutando ambos bloques de código simultáneamente en la tarjeta gráfica",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de la bifurcación binaria con su definición técnica:",
          "options": [
            {
              "text": "Sentencia else|||Bloque de respaldo que se ejecuta cuando la prueba del if resulta false",
              "correct": true
            },
            {
              "text": "Dicotomía de estados|||División estricta del flujo donde exactamente un camino de dos se ejecuta",
              "correct": true
            },
            {
              "text": "Exhaustividad lógica|||Garantía de que ningún estado posible del sistema quede sin acción designada",
              "correct": true
            },
            {
              "text": "Solenoid Fail-Safe|||Mecanismo de seguridad física que adopta una posición segura en el bloque else",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura condicional binaria para el control de la garra del robot:",
          "options": [
            {
              "text": "if sensor_presencia.detectado() == True:",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    cerrar_garra_neumatica()",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "else:",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    mantener_intake_en_espera()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué cláusula debe colocarse para autorizar el enrollado cuando la tensión no supera el límite de seguridad?",
          "codeSnippet": "if tension_cable_libras > 150.0:\n    activar_freno_tambor()\n___:\n    permitir_enrollado_cable()",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "elif",
              "correct": false
            },
            {
              "text": "otherwise",
              "correct": false
            },
            {
              "text": "default",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué una cláusula 'else' nunca debe llevar una condición explícita adjunta (como 'else condicion:')?",
          "options": [
            {
              "text": "Porque por definición lógica 'else' captura todos los casos donde el 'if' evaluó a false sin requerir otra prueba",
              "correct": true
            },
            {
              "text": "Porque el procesador carece de registros para evaluar números negativos en una rama secundaria",
              "correct": false
            },
            {
              "text": "Porque la memoria caché se desborda si se coloca una prueba booleana en esa posición léxica",
              "correct": false
            },
            {
              "text": "Porque Python reserva las pruebas booleanas secundarias exclusivamente para bucles de iteración",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué estado registrará la telemetría del compresor tras evaluar la presión neumática?",
          "codeSnippet": "presion_psi = 55\nestado_compresor = 'APAGADO'\nif presion_psi >= 60:\n    estado_compresor = 'APAGADO'\nelse:\n    estado_compresor = 'ENCENDIDO'\nprint(estado_compresor)",
          "options": [
            {
              "text": "'ENCENDIDO'",
              "correct": true
            },
            {
              "text": "'APAGADO'",
              "correct": false
            },
            {
              "text": "55",
              "correct": false
            },
            {
              "text": "'FALLO'",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Múltiples Alternativas: Else-If (Elif)",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo optimiza la estructura 'elif' la toma de decisiones multicamino frente a múltiples 'if' aislados?",
          "lessonText": "# Despacho Multicamino y Cortocircuito\n\nCuando un sistema presenta tres o más estados mutuamente excluyentes, evaluar múltiples sentencias `if` aisladas obliga al procesador a ejecutar todas las comprobaciones incondicionalmente, consumiendo tiempo de CPU y arriesgando inconsistencias lógicas. La palabra clave **`elif`** (abreviación de *else-if*) encadena condiciones con **cortocircuito evaluativo**.\n\nTan pronto como una de las condiciones resulta ser verdadera (`true`), la CPU ejecuta el bloque subordinado correspondiente y **salta de inmediato al final de toda la estructura**, omitiendo las ramas restantes.\n\n```python\nif voltaje_bateria >= 12.0:\n    modo = 'COMPETICION'\nelif voltaje_bateria >= 10.5:\n    modo = 'AHORRO_ENERGIA'\nelse:\n    modo = 'APAGADO_CRITICO'\n```\n\nEn Nautilus 4010, el selector de modo de juego utiliza esta arquitectura para fijar la potencia de tiro del shooter. Si el voltaje supera 12V, se fija potencia nominal; si cae entre 10.5V y 12V, el `elif` recalcula la compensación PID; si es menor a 10.5V, el `else` suspende el tiro para evitar un brownout en la roboRIO.\n\n**Regla de Oro: En una estructura if-elif-else, la primera condición verdadera gana y termina la evaluación de toda la cadena; el orden de los elif determina la prioridad de decisión del sistema.**",
          "options": [
            {
              "text": "Ejecutando únicamente la primera rama cuya condición sea verdadera y cortocircuitando el resto de la cadena",
              "correct": true
            },
            {
              "text": "Ejecutando todas las ramas al mismo tiempo en hilos de hardware independientes",
              "correct": false
            },
            {
              "text": "Convirtiendo todas las variables numéricas a valores booleanos para ahorrar ancho de banda",
              "correct": false
            },
            {
              "text": "Ignorando la primera condición para evaluar siempre la rama más cercana al final",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada término del despacho condicional con su principio operativo:",
          "options": [
            {
              "text": "Sentencia elif|||Bifurcación secundaria que solo se evalúa si todas las condiciones previas fueron false",
              "correct": true
            },
            {
              "text": "Cortocircuito de rama|||Salto inmediato al final de la estructura tras ejecutar el primer bloque verificado",
              "correct": true
            },
            {
              "text": "Mutua exclusión|||Propiedad arquitectónica donde solo un bloque de la cadena puede ejecutarse por ciclo",
              "correct": true
            },
            {
              "text": "Prioridad secuencial|||El orden de arriba hacia abajo define qué condición prevalece ante un solapamiento",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la cadena de prioridades para escalar la potencia máxima según el estado de la batería:",
          "options": [
            {
              "text": "if nivel_bateria >= 12.0:",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    potencia_maxima = 1.0",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "elif nivel_bateria >= 10.5:",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    potencia_maxima = 0.75",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave introduce la alternativa intermedia para el estado de búsqueda de la torreta?",
          "codeSnippet": "if estado_torreta == 'APUNTANDO':\n    velocidad_giro = 0.2\n____ estado_torreta == 'BUSCANDO':\n    velocidad_giro = 0.8\nelse:\n    velocidad_giro = 0.0",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "when",
              "correct": false
            },
            {
              "text": "case",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Qué diferencia crítica de rendimiento y lógica existe entre tres bloques if independientes y una cadena if-elif-else?",
          "options": [
            {
              "text": "Los 'if' independientes se evalúan todos sin excepción; la cadena 'if-elif-else' detiene la evaluación tras la primera coincidencia garantizando exclusión mutua",
              "correct": true
            },
            {
              "text": "Los 'if' independientes se ejecutan en paralelo en subprocesos de hardware sin tocar la memoria RAM",
              "correct": false
            },
            {
              "text": "La cadena 'if-elif-else' solo puede comparar cadenas de texto mientras que los 'if' solo comparan números",
              "correct": false
            },
            {
              "text": "No existe diferencia alguna; ambas estructuras generan el mismo código de máquina en el procesador",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor exacto tendrá 'velocidad' al finalizar la cadena condicional con selector = 2?",
          "codeSnippet": "selector = 2\nvelocidad = 0\nif selector == 1:\n    velocidad = 10\nelif selector == 2:\n    velocidad = 20\nelif selector == 2:\n    velocidad = 30\nelse:\n    velocidad = 50\nprint(velocidad)",
          "options": [
            {
              "text": "20",
              "correct": true
            },
            {
              "text": "30",
              "correct": false
            },
            {
              "text": "50",
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
      "title": "Casos Exhaustivos y el Valor por Defecto",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Por qué todo despachador multicamino de misión crítica debe ser exhaustivo y contar con un manejador por defecto?",
          "lessonText": "# Exhaustividad y Estados Seguros de Fallo\n\nEn la ingeniería de software de control de procesos y aviónica, un sistema debe ser **exhaustivo**: debe contemplar el 100% de las combinaciones posibles de entrada, incluyendo datos corruptos por ruido electromagnético en buses de comunicación o lecturas fuera de rango. La cláusula `else` al término de una cadena `elif` actúa como el **manejador de reserva por defecto (default fallback)**.\n\n```python\nif comando == 'DISPARAR':\n    disparar()\nelif comando == 'RECOLECTAR':\n    intake()\nelse:\n    frenar_seguridad()\n    registrar_anomalia('Comando Desconocido')\n```\n\nDurante la final regional de FRC, el radio inalámbrico de Nautilus 4010 recibió un byte corrupto en la trama UDP. Gracias a que el selector de comandos incluía un bloque `else` que colocaba los motores en velocidad 0.0 y activaba el estado seguro, el robot no ejecutó una acción errática ni descalificó a la alianza.\n\n**Regla de Oro: Todo despachador multicamino debe cerrarse con una cláusula else exhaustiva que maneje entradas inesperadas colocando al sistema en un estado seguro conocido.**",
          "options": [
            {
              "text": "Para garantizar que cualquier entrada imprevista o corrupta sea capturada y dirigida a un estado seguro controlado",
              "correct": true
            },
            {
              "text": "Para que el programa ignore automáticamente los comandos de parada de emergencia",
              "correct": false
            },
            {
              "text": "Para compilar el programa sin necesidad de comprobar la sintaxis de las ramas superiores",
              "correct": false
            },
            {
              "text": "Para forzar a los actuadores mecánicos a operar al doble de su capacidad de corriente",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de robustez y contención con su significado en ingeniería:",
          "options": [
            {
              "text": "Manejador por defecto|||Bloque final else que procesa cualquier entrada que no encaje en ramas previas",
              "correct": true
            },
            {
              "text": "Estado seguro (Safe State)|||Configuración de parada o contención que previene daños ante datos anómalos",
              "correct": true
            },
            {
              "text": "Entrada corrupta|||Valor fuera de rango producido por ruido o fallas de comunicación en el bus",
              "correct": true
            },
            {
              "text": "Exhaustividad total|||Propiedad donde ningún valor de entrada produce un cuelgue o estado indefinido",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena la estructura de despacho de comandos asegurando un estado seguro por defecto:",
          "options": [
            {
              "text": "if comando == 'DISPARAR':",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    ejecutar_secuencia_disparo()",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "elif comando == 'RECOLECTAR':",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    ejecutar_secuencia_intake()",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué cláusula final garantiza la captura y tratamiento seguro de cualquier marcha inválida?",
          "codeSnippet": "if modo == 'P' or modo == 'N':\n    velocidad = 0\nelif modo == 'D':\n    velocidad = 15\n___:\n    velocidad = 0\n    notificar_error('Modo Desconocido')",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "otherwise",
              "correct": false
            },
            {
              "text": "fail",
              "correct": false
            },
            {
              "text": "catch",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "En un vehículo autónomo o robot de competencia, ¿qué peligro crítico se introduce al omitir la cláusula 'else' final en un selector de comandos?",
          "options": [
            {
              "text": "Si llega un comando inválido o corrupto, ninguna rama se ejecuta y las variables conservan su estado previo, permitiendo que los motores sigan acelerando sin control",
              "correct": true
            },
            {
              "text": "El microcontrolador borra automáticamente el firmware de su memoria flash por protección térmica",
              "correct": false
            },
            {
              "text": "Los voltajes de la batería principal se elevan instantáneamente por encima de los límites físicos",
              "correct": false
            },
            {
              "text": "El compilador sustituye automáticamente las instrucciones por llamadas a funciones recursivas",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Cuál es el valor final de 'estado_salida' tras procesar el código de estado 7?",
          "codeSnippet": "codigo_estado = 7\nestado_salida = 'DESCONOCIDO'\nif codigo_estado == 0:\n    estado_salida = 'STANDBY'\nelif codigo_estado == 1:\n    estado_salida = 'OPERATIVO'\nelse:\n    estado_salida = 'ERROR_CRITICO'\nprint(estado_salida)",
          "options": [
            {
              "text": "'ERROR_CRITICO'",
              "correct": true
            },
            {
              "text": "'DESCONOCIDO'",
              "correct": false
            },
            {
              "text": "'OPERATIVO'",
              "correct": false
            },
            {
              "text": "'STANDBY'",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Debugging de Condiciones Solapadas",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se produce el fenómeno de condiciones solapadas y por qué el orden de evaluación es crítico?",
          "lessonText": "# Solapamiento de Intervalos y Código Inalcanzable\n\nAl discretizar variables numéricas continuas (como lecturas de temperatura, distancia de LiDAR o corriente de motores) en una cadena `if-elif`, los intervalos pueden solaparse. Si una condición más general se sitúa antes de una condición más específica, la primera 'canibalizará' a la segunda, convirtiendo a esta última en **código inalcanzable (unreachable code)**.\n\n```python\n# ORDEN INCORRECTO (Peligro de colision):\nif distancia < 100:  # Si mide 15 cm, entra aqui y corre a velocidad 1.0!\n    velocidad = 1.0\nelif distancia < 20: # Inalcanzable: 15 cm ya fue capturado por < 100\n    velocidad = 0.1\n```\n\nEn Nautilus 4010, este bug en la aproximación al arrecife de puntuación provocó que el robot ignorara la zona de frenado suave de 20 cm e impactara la estructura metálica a velocidad de crucero.\n\n**Regla de Oro: Al evaluar rangos e intervalos numéricos en una cadena if-elif, debes ordenar siempre de la condición más restrictiva y específica a la más amplia y permisiva.**",
          "options": [
            {
              "text": "Ordenando siempre de la condición más restrictiva a la más permisiva para evitar que ramas amplias capturen valores críticos",
              "correct": true
            },
            {
              "text": "Colocando siempre la condición con números más grandes al inicio sin importar el operador relacional",
              "correct": false
            },
            {
              "text": "Duplicando cada condición con un operador lógico NOT para forzar una doble comprobación",
              "correct": false
            },
            {
              "text": "Usando exclusivamente comparadores de igualdad estricta para números continuos con decimales",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada concepto de depuración de intervalos con su efecto computacional:",
          "options": [
            {
              "text": "Código inalcanzable|||Bloque que jamás puede ejecutarse porque una condición superior absorbe el flujo",
              "correct": true
            },
            {
              "text": "Solapamiento de rangos|||Intersección entre intervalos numéricos evaluados por ramas condicionales sucesivas",
              "correct": true
            },
            {
              "text": "Orden de especificidad|||Regla de diseño que exige colocar las restricciones más estrictas al principio",
              "correct": true
            },
            {
              "text": "Canibalización lógica|||Ocurre cuando una condición permisiva bloquea la activación de una condición crítica",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena las condiciones de proximidad desde la más restrictiva (parada) hasta la más amplia:",
          "options": [
            {
              "text": "distancia_cm = sensor_ultrasonico.leer()",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "if distancia_cm < 10:",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "    velocidad_chasis = 0.0",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "elif distancia_cm < 50:",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué palabra clave evalúa el segundo umbral de temperatura de 75 grados tras verificar que no superó los 95?",
          "codeSnippet": "# Diagnostico termico: ordenar de mayor peligro a menor peligro\nif temp > 95:\n    estado = 'EMERGENCIA_APAGAR'\n____ temp > 75:\n    estado = 'VENTILADOR_MAXIMO'\nelse:\n    estado = 'NORMAL'",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "then",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Si un desarrollador escribe 'if puntaje >= 50: nivel = \"Basico\"' antes de 'elif puntaje >= 90: nivel = \"Experto\"', ¿qué resultado obtendrá un usuario con puntaje de 95?",
          "options": [
            {
              "text": "'Basico', porque la condición '>= 50' es verdadera para 95 y la estructura if-elif cortocircuita de inmediato sin evaluar el nivel Experto",
              "correct": true
            },
            {
              "text": "'Experto', porque el compilador detecta automáticamente el número mayor y reordena la cadena",
              "correct": false
            },
            {
              "text": "Un error de sintaxis en tiempo de ejecución por conflicto de ambigüedad numérica",
              "correct": false
            },
            {
              "text": "Ambos niveles asignados sucesivamente en la misma variable",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué valor exacto adoptará la variable 'estado' para una lectura de sensor de 85?",
          "codeSnippet": "sensor_luz = 85\nestado = 'INDEFINIDO'\nif sensor_luz > 80:\n    estado = 'BRILLO_EXTREMO'\nelif sensor_luz > 50:\n    estado = 'BRILLO_MEDIO'\nelse:\n    estado = 'OSCURIDAD'\nprint(estado)",
          "options": [
            {
              "text": "'BRILLO_EXTREMO'",
              "correct": true
            },
            {
              "text": "'BRILLO_MEDIO'",
              "correct": false
            },
            {
              "text": "'OSCURIDAD'",
              "correct": false
            },
            {
              "text": "'INDEFINIDO'",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Reto: Selector de Modos de Conducción",
      "challenges": [
        {
          "type": "THEORY",
          "question": "¿Cómo se implementa un selector de perfiles de conducción cinemática en tiempo real?",
          "lessonText": "# Perfiles de Actuación y Modos de Conducción\n\nEn mecatrónica de competición y automoción, la relación entre los joysticks del piloto y el voltaje de los motores de tracción se modula mediante **perfiles de conducción (Drive Profiles)**. Un selector multicamino implementado con `if-elif-else` toma el estado del conmutador de la Driver Station (`'ALINEACION'`, `'CRUCERO'`, `'SPRINT'`) y aplica los factores de escala matemáticos correspondientes.\n\n```python\nif modo == 'ALINEACION':\n    escalador = 0.25\nelif modo == 'CRUCERO':\n    escalador = 0.65\nelif modo == 'SPRINT':\n    escalador = 1.00\nelse:\n    escalador = 0.00\n    notificar_perfil_invalido()\n```\n\nEn las eliminatorias mundiales de FIRST Robotics Competition, el piloto de Nautilus 4010 activa el modo `ALINEACION` (escalador 0.25) para acoplar el gancho de escalada al trapecio central con precisión de milímetros, el modo `SPRINT` (escalador 1.00) para cruzar la cancha en menos de tres segundos, y el respaldo `else` asegura que ante cualquier desconexión del cable de red el robot quede en velocidad cero.\n\n**Regla de Oro: Un selector de perfiles de actuación modulariza la respuesta dinámica de la máquina, garantizando que cada modo tenga límites de aceleración calibrados y un protocolo de respaldo que proteja la transmisión mecánica.**",
          "options": [
            {
              "text": "Modularizando la respuesta dinámica mediante factores de escala según el modo seleccionado, con freno de seguridad por defecto",
              "correct": true
            },
            {
              "text": "Modificando la tensión de la batería principal de 12V a 48V de forma instantánea",
              "correct": false
            },
            {
              "text": "Apagando el bus CAN para que las ruedas giren libremente sin control de software",
              "correct": false
            },
            {
              "text": "Obligando al procesador a reescribir su propio firmware en cada curva del robot",
              "correct": false
            }
          ]
        },
        {
          "type": "MATCHING",
          "question": "Relaciona cada perfil de conducción con sus características mecánicas y operativas:",
          "options": [
            {
              "text": "Drive Profile|||Mapeo matemático que modula la sensibilidad y velocidad de los motores",
              "correct": true
            },
            {
              "text": "Modo Alineación|||Perfil de baja velocidad y alto torque diseñado para maniobras de precisión",
              "correct": true
            },
            {
              "text": "Modo Sprint|||Perfil sin restricciones para desplazamientos a máxima velocidad en campo abierto",
              "correct": true
            },
            {
              "text": "Freno pasivo por defecto|||Asignación de factor 0.0 en la rama else para mitigar comandos corruptos",
              "correct": true
            }
          ]
        },
        {
          "type": "CODE_ORDER",
          "question": "Ordena el selector de modos de conducción desde el perfil de mayor precisión al de crucero:",
          "options": [
            {
              "text": "if modo_conduccion == 'ALINEACION':",
              "correct": true,
              "audioSrc": "1"
            },
            {
              "text": "    escalador_velocidad = 0.25",
              "correct": true,
              "audioSrc": "2"
            },
            {
              "text": "elif modo_conduccion == 'CRUCERO':",
              "correct": true,
              "audioSrc": "3"
            },
            {
              "text": "    escalador_velocidad = 0.65",
              "correct": true,
              "audioSrc": "4"
            }
          ]
        },
        {
          "type": "CODE_FILL",
          "question": "¿Qué cláusula final garantiza que el factor sea 0.0 si el perfil recibido no coincide con ninguno esperado?",
          "codeSnippet": "if perfil == 'ALINEACION':\n    factor = 0.25\nelif perfil == 'RAPIDO':\n    factor = 1.0\n___:\n    factor = 0.0\n    alerta_perfil_invalido()",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "fallback",
              "correct": false
            },
            {
              "text": "default",
              "correct": false
            },
            {
              "text": "finally",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "¿Por qué en sistemas mecatrónicos de alta potencia el valor por defecto en el 'else' de un selector de conducción debe ser velocidad 0.0 en lugar de mantener la velocidad anterior?",
          "options": [
            {
              "text": "Para prevenir una aceleración descontrolada involuntaria si el switch de selección sufre una falla o desconexión física en plena carrera",
              "correct": true
            },
            {
              "text": "Porque el procesador no puede almacenar factores mayores a cero en una rama else",
              "correct": false
            },
            {
              "text": "Porque mantener la velocidad anterior funde los fusibles térmicos en menos de 5 milisegundos",
              "correct": false
            },
            {
              "text": "Porque las leyes de la física exigen calibrar la adherencia de los neumáticos cada vez que cambia una variable",
              "correct": false
            }
          ]
        },
        {
          "type": "CODE_TEST",
          "question": "¿Qué potencia final enviará el controlador al motor para el modo 'DESCONOCIDO'?",
          "codeSnippet": "modo = 'DESCONOCIDO'\nescalador = 1.0\nif modo == 'PRECISION':\n    escalador = 0.3\nelif modo == 'COMPETICION':\n    escalador = 0.8\nelse:\n    escalador = 0.0\npotencia_motor = 100 * escalador\nprint(potencia_motor)",
          "options": [
            {
              "text": "0.0",
              "correct": true
            },
            {
              "text": "100.0",
              "correct": false
            },
            {
              "text": "30.0",
              "correct": false
            },
            {
              "text": "80.0",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
}
];
