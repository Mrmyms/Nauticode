import { UnitDefinition } from "./types";

export const JAVA_UNITS: UnitDefinition[] = [
  // UNIT 1
  {
    order: 1,
    slug: "unit-1",
    title: "Java Basics for FRC",
    description: "Sintaxis fundamental de Java, clases, método main y variables iniciales para robots FRC.",
    guidebookText: `# Guidebook: Java Basics for FRC

En FIRST Robotics Competition (FRC), **Java** es uno de los lenguajes principales para programar la roboRIO.

## Key Concepts

1. **Clases y Archivos**: En Java, todo vive dentro de una \`class\`. El nombre de la clase debe coincidir exactamente con el nombre del archivo \`.java\`.
2. **El método main**: Es el punto de entrada principal cuando ejecutas un programa independiente:
   \`\`\`java
   public static void main(String[] args) {
       System.out.println("Robot listo!");
   }
   \`\`\`
3. **Variables Fuertemente Tipadas**: Cada variable debe declarar su tipo de dato explícitamente (\`int\`, \`double\`, \`boolean\`, \`String\`).
`,
    lessons: [
      {
        title: "Lesson 1: Java Syntax & System.out.println",
        challenges: [
          {
            type: "THEORY",
            question: "¿Cómo estructura Java sus programas?",
            lessonText: "# Estructura Básica en Java\n\nTodo código Java debe estar encapsulado dentro de una `class`. Las instrucciones terminan con punto y coma `;` y la consola imprime mediante `System.out.println()`.",
            options: [
              { text: "Entendido, las clases contienen todo el código", correct: true },
              { text: "No se requiere punto y coma al final", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la instrucción correcta para imprimir en la consola de la roboRIO?",
            options: [
              { text: "System.out.println(\"Nautilus 4010\");", correct: true },
              { text: "print(\"Nautilus 4010\")", correct: false },
              { text: "console.log(\"Nautilus 4010\");", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la clase principal del Robot:",
            codeSnippet: "public class Robot {\n  public static void _____ (String[] args) {\n    System.out.println(\"Robot Started\");\n  }\n}",
            options: [
              { text: "main", correct: true },
              { text: "run", correct: false },
              { text: "init", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja los términos técnicos con su definición:",
            options: [
              { text: "class|||Contenedor principal de código en Java", correct: true },
              { text: "main|||Método de entrada del programa", correct: true },
              { text: "System.out.println|||Imprime mensajes en consola", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción Java para imprimir \"Autonomous Ready\":",
            options: [
              { text: "System.out.println(\"Autonomous Ready\");", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 2: Primitive Types in Java",
        challenges: [
          {
            type: "THEORY",
            question: "Tipos Primitivos en Java",
            lessonText: "# Tipos Primitivos para FRC\n\n- `int`: Números enteros (ej: `int totalNotes = 5;`)\n- `double`: Decimales (ej: `double motorSpeed = 0.75;`)\n- `boolean`: Verdadero/Falso (ej: `boolean isTargetLocked = true;`)",
            options: [
              { text: "Entendido", correct: true },
              { text: "Siguiente", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué tipo de dato usarías para almacenar la velocidad continua de un motor SparkMax (entre -1.0 y 1.0)?",
            options: [
              { text: "double", correct: true },
              { text: "int", correct: false },
              { text: "String", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Declara una variable entera para contar las notas recolectadas:",
            codeSnippet: "_____ noteCount = 3;",
            options: [
              { text: "int", correct: true },
              { text: "double", correct: false },
              { text: "boolean", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál será la salida impreso en consola?",
            codeSnippet: "double speed = 0.80;\nSystem.out.println(speed);",
            options: [
              { text: "0.8", correct: true },
              { text: "speed", correct: false },
              { text: "0", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el error de declaración de tipo para el interruptor de límite:",
            codeSnippet: "int limitSwitchTriggered = true;",
            options: [
              { text: "boolean limitSwitchTriggered = true;", correct: true },
              { text: "double limitSwitchTriggered = true;", correct: false }
            ]
          }
        ]
      },
      {
        title: "Lesson 3: Math Operators & Precedence",
        challenges: [
          {
            type: "THEORY",
            question: "Operaciones Matemáticas",
            lessonText: "# Operadores en Java\n\nSoportamos `+`, `-`, `*`, `/` y `%` (módulo). Ten cuidado con la división entre enteros: `5 / 2` da `2` porque trunca los decimales!",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el resultado de `5 / 2` en Java entre variables tipo `int`?",
            options: [
              { text: "2", correct: true },
              { text: "2.5", correct: false },
              { text: "3", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el cálculo para obtener el promedio decimal de 2 encoders:",
            codeSnippet: "double average = (leftEncoder + rightEncoder) _____ 2.0;",
            options: [
              { text: "/", correct: true },
              { text: "*", correct: false },
              { text: "%", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué valor almacena `gearRatio`?",
            codeSnippet: "int inputTeeth = 10;\nint outputTeeth = 50;\nint gearRatio = outputTeeth / inputTeeth;\nSystem.out.println(gearRatio);",
            options: [
              { text: "5", correct: true },
              { text: "500", correct: false },
              { text: "0.2", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las líneas para calcular la velocidad resultante del volante (Flywheel):",
            options: [
              { text: "double baseRPM = 5000.0;", correct: true },
              { text: "double multiplier = 0.85;", correct: true },
              { text: "double targetRPM = baseRPM * multiplier;", correct: true },
              { text: "System.out.println(targetRPM);", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 4: Strings & Concatenation",
        challenges: [
          {
            type: "THEORY",
            question: "Manejo de Texto en Java",
            lessonText: "# String en Java\n\n`String` es una clase para almacenar texto en comillas dobles `\"...\". Podemos concatenar variables usando el operador `+`.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Concatena el nombre del subsistema con su estado:",
            codeSnippet: "String subsystem = \"DriveTrain\";\nString status = subsystem _____ \" is Ready\";",
            options: [
              { text: "+", correct: true },
              { text: "concat", correct: false },
              { text: "&&", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué imprime este código?",
            codeSnippet: "String team = \"Nautilus \";\nint number = 4010;\nSystem.out.println(team + number);",
            options: [
              { text: "Nautilus 4010", correct: true },
              { text: "4010", correct: false },
              { text: "Nautilus4010", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la declaración de una variable String llamada `robotName` con el valor \"Poseidon\":",
            options: [
              { text: "String robotName = \"Poseidon\";", correct: true }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los componentes de la concatenación:",
            options: [
              { text: "\"Text\" + variable|||Combina texto y variable", correct: true },
              { text: "double.toString()|||Convierte un decimal a texto", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 5: Unit 1 Challenge - Robot Status Banner",
        challenges: [
          {
            type: "THEORY",
            question: "Desafío de la Unidad 1",
            lessonText: "# Capstone de Unidad 1\n\nAplica lo aprendido declarando variables de estado del chasis y formateando mensajes de consola.",
            options: [
              { text: "Comenzar reto", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe el código Java para inicializar `double batteryVoltage = 12.6;`:",
            options: [
              { text: "double batteryVoltage = 12.6;", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige las comillas para String:",
            codeSnippet: "String mode = 'Autonomous';",
            options: [
              { text: "String mode = \"Autonomous\";", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Reorganiza las líneas para el reporte de arranque de telemetría:",
            options: [
              { text: "String robot = \"Nautilus\";", correct: true },
              { text: "double voltage = 12.8;", correct: true },
              { text: "System.out.println(robot + \" Voltage: \" + voltage);", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es el resultado de imprimir `\"CAN ID: \" + 5`?",
            options: [
              { text: "CAN ID: 5", correct: true },
              { text: "Error de tipos", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // UNIT 2
  {
    order: 2,
    slug: "unit-2",
    title: "Object-Oriented Programming I",
    description: "Clases, Objetos, Atributos y Métodos Constructores en Java.",
    guidebookText: `# Guidebook: Object-Oriented Programming I

En Java, los componentes del robot se modelan como **Objetos** instanciados a partir de **Clases**.

## Conceptos Clave
- **Clase**: El plano o blueprint (ej: \`CANSparkMax\`).
- **Objeto / Instancia**: El componente físico en RAM (ej: \`leftMotor\`).
- **Constructor**: El método especial con el mismo nombre de la clase que se llama con \`new\` para inicializar el objeto.
`,
    lessons: [
      {
        title: "Lesson 1: Classes & Objects Blueprint",
        challenges: [
          {
            type: "THEORY",
            question: "¿Qué es una Clase y un Objeto?",
            lessonText: "# Clases u Objetos\n\nUna **Clase** es el plano arquitectónico. Un **Objeto** es la instancia concreta creada en memoria con la palabra clave `new`.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué palabra clave en Java se utiliza para instanciar un nuevo objeto desde una clase?",
            options: [
              { text: "new", correct: true },
              { text: "create", correct: false },
              { text: "make", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Instancia un objeto de la clase `Flywheel`:",
            codeSnippet: "Flywheel intakeFlywheel = _____ Flywheel();",
            options: [
              { text: "new", correct: true },
              { text: "class", correct: false },
              { text: "void", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los conceptos de POO:",
            options: [
              { text: "Clase|||El molde o blueprint", correct: true },
              { text: "Objeto|||La instancia creada en memoria RAM", correct: true },
              { text: "new|||Operador de instanciación", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instanciación de un objeto `Arm` llamado `armSubsystem`:",
            options: [
              { text: "Arm armSubsystem = new Arm();", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 2: Fields & Attributes",
        challenges: [
          {
            type: "THEORY",
            question: "Atributos y Campos",
            lessonText: "# Atributos de Clase\n\nLos atributos representan las propiedades de un objeto (ej: `speed`, `canId`). Usamos modificadores como `private` para protegerlos.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es una buena práctica de encapsulamiento para los atributos de un subsistema?",
            options: [
              { text: "Declararlos como private", correct: true },
              { text: "Declararlos como public", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Declara un atributo privado de CAN ID dentro de la clase Motor:",
            codeSnippet: "public class Motor {\n  _____ int canId;\n}",
            options: [
              { text: "private", correct: true },
              { text: "new", correct: false },
              { text: "static", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuál es el valor del atributo `currentSpeed` si no se inicializa?",
            codeSnippet: "public class Elevator {\n  double currentSpeed;\n}",
            options: [
              { text: "0.0 (valor por defecto)", correct: true },
              { text: "1.0", correct: false },
              { text: "null", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige la sintaxis del atributo privado `targetAngle`:",
            codeSnippet: "private double targetAngle = 45,0;",
            options: [
              { text: "private double targetAngle = 45.0;", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 3: Constructors with Parameters",
        challenges: [
          {
            type: "THEORY",
            question: "Constructores en Java",
            lessonText: "# El Método Constructor\n\nEl constructor inicializa el objeto cuando se llama `new`. No tiene tipo de retorno y se llama exactamente igual que la clase.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el constructor de la clase Intake:",
            codeSnippet: "public class Intake {\n  private int motorPort;\n  public _____(int port) {\n    this.motorPort = port;\n  }\n}",
            options: [
              { text: "Intake", correct: true },
              { text: "void", correct: false },
              { text: "init", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Para qué sirve la palabra clave `this` dentro de un constructor?",
            options: [
              { text: "Para referenciar el atributo del objeto actual", correct: true },
              { text: "Para crear un objeto nuevo", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena las líneas del constructor:",
            options: [
              { text: "public class Shooter {", correct: true },
              { text: "  private double speed;", correct: true },
              { text: "  public Shooter(double speed) {", correct: true },
              { text: "    this.speed = speed;", correct: true },
              { text: "  }", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Instancia un objeto `Shooter` llamado `topShooter` pasando `0.9` en el constructor:",
            options: [
              { text: "Shooter topShooter = new Shooter(0.9);", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 4: Methods & Void Actions",
        challenges: [
          {
            type: "THEORY",
            question: "Métodos sin Retorno (`void`)",
            lessonText: "# Métodos en Clases\n\nUn método ejecuta una acción. Si no devuelve ningún valor, su tipo de retorno es `void`.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Define un método que detiene el mecanismo:",
            codeSnippet: "public _____ stop() {\n  this.speed = 0.0;\n}",
            options: [
              { text: "void", correct: true },
              { text: "double", correct: false },
              { text: "int", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cómo invocamos el método `spin()` del objeto `intake`?",
            options: [
              { text: "intake.spin();", correct: true },
              { text: "spin(intake);", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los componentes del método:",
            options: [
              { text: "void|||No retorna ningún valor", correct: true },
              { text: "this.speed = 1.0|||Modifica el estado interno del atributo", correct: true },
              { text: "object.method()|||Invocación mediante notación de punto", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la llamada al método `stop()` del objeto `drivetrain`:",
            options: [
              { text: "drivetrain.stop();", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 5: Unit 2 Challenge - Custom Subsystem Class",
        challenges: [
          {
            type: "THEORY",
            question: "Reto de POO 1",
            lessonText: "# Desafío de Clase Custom\n\nCrea una clase `Climber` completa con atributo, constructor e invocación.",
            options: [
              { text: "Empezar", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la estructura completa de la clase `Climber`:",
            options: [
              { text: "public class Climber {", correct: true },
              { text: "  private int canId;", correct: true },
              { text: "  public Climber(int id) {", correct: true },
              { text: "    this.canId = id;", correct: true },
              { text: "  }", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la línea para instanciar `Climber leftClimber = new Climber(10);`:",
            options: [
              { text: "Climber leftClimber = new Climber(10);", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el error en la llamada del constructor:",
            codeSnippet: "Climber climber = Climber(5);",
            options: [
              { text: "Climber climber = new Climber(5);", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué palabra clave crea instancias en memoria RAM?",
            options: [
              { text: "new", correct: true },
              { text: "this", correct: false }
            ]
          }
        ]
      }
    ]
  },

  // UNIT 3
  {
    order: 3,
    slug: "unit-3",
    title: "Object-Oriented Programming II",
    description: "Herencia (`extends`), Interfaces (`implements`), `@Override` e Imports en Java.",
    guidebookText: `# Guidebook: OOP II & WPILib Base Classes

WPILib aprovecha al máximo la **Herencia** y las **Interfaces** en Java.

## Conceptos Clave
- **extends**: Hereda métodos y atributos de una clase padre (ej: \`extends SubsystemBase\`).
- **implements**: Promete implementar los métodos requeridos por una interfaz.
- **@Override**: Anotación que indica que estamos sobrescribiendo un método de la clase base (ej: \`periodic()\`).
- **import**: Carga paquetes externos como \`edu.wpi.first.wpilibj2.command.SubsystemBase\`.
`,
    lessons: [
      {
        title: "Lesson 1: Inheritance with extends",
        challenges: [
          {
            type: "THEORY",
            question: "Herencia en Java (`extends`)",
            lessonText: "# Herencia (`extends`)\n\nLa herencia nos permite extender las funcionalidades de una clase base. En WPILib, nuestros subsistemas extienden `SubsystemBase`.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Haz que la clase `Arm` herede de `SubsystemBase`:",
            codeSnippet: "public class Arm _____ SubsystemBase {\n}",
            options: [
              { text: "extends", correct: true },
              { text: "implements", correct: false },
              { text: "imports", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué palabra clave se usa para heredar de una clase en Java?",
            options: [
              { text: "extends", correct: true },
              { text: "super", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja los conceptos de Herencia:",
            options: [
              { text: "SubsystemBase|||Clase padre de WPILib", correct: true },
              { text: "extends|||Palabra clave para heredar de una clase", correct: true },
              { text: "super()|||Llama al constructor de la clase padre", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la cabecera de la clase `IntakeSubsystem` heredando de `SubsystemBase`:",
            options: [
              { text: "public class IntakeSubsystem extends SubsystemBase {", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 2: Annotations & @Override",
        challenges: [
          {
            type: "THEORY",
            question: "La anotación `@Override`",
            lessonText: "# Anotación `@Override` \n\nIndica al compilador que estamos redefiniendo un método heredado de la clase base, como `periodic()`.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Agrega la anotación adecuada antes del método `periodic()`:",
            codeSnippet: "_____\npublic void periodic() {\n  // Lógica cíclica\n}",
            options: [
              { text: "@Override", correct: true },
              { text: "@Deprecated", correct: false },
              { text: "@Init", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre si colocas `@Override` sobre un método que no existe en la clase padre?",
            options: [
              { text: "El compilador marca un error inmediatamente", correct: true },
              { text: "El programa ignora el método", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué método se ejecuta si la subclase sobrescribe el método `display()`?",
            codeSnippet: "// Se ejecuta la versión de la subclase sobrescrita",
            options: [
              { text: "El método de la subclase", correct: true },
              { text: "El método de la superclase", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el error de la anotación Override:",
            codeSnippet: "override public void periodic() {}",
            options: [
              { text: "@Override public void periodic() {}", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 3: Imports & Packages",
        challenges: [
          {
            type: "THEORY",
            question: "Importación de Librerías WPILib",
            lessonText: "# Imports en Java\n\nPara usar clases de WPILib como `SmartDashboard` o `CANSparkMax`, debemos importarlas al inicio del archivo.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Importa la clase `SmartDashboard` de WPILib:",
            codeSnippet: "_____ edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;",
            options: [
              { text: "import", correct: true },
              { text: "include", correct: false },
              { text: "require", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué palabra clave en Java reemplaza al `#include` de C++?",
            options: [
              { text: "import", correct: true },
              { text: "package", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para importar `CANSparkMax` desde `com.revrobotics.CANSparkMax`:",
            options: [
              { text: "import com.revrobotics.CANSparkMax;", correct: true }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los paquetes de WPILib:",
            options: [
              { text: "edu.wpi.first.wpilibj|||Paquete principal de WPILib", correct: true },
              { text: "com.revrobotics|||Librerías de motores SparkMax", correct: true },
              { text: "com.ctre.phoenix6|||Librerías de motores Falcon/TalonFX", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 4: Interfaces & Contracts",
        challenges: [
          {
            type: "THEORY",
            question: "Interfaces en Java",
            lessonText: "# Interfaces (`implements`)\n\nUna interfaz establece un contrato de métodos que la clase receptora debe implementar de forma obligatoria.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Implementa la interfaz `Sendable`:",
            codeSnippet: "public class DriveSubsystem extends SubsystemBase _____ Sendable {\n}",
            options: [
              { text: "implements", correct: true },
              { text: "extends", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuántas clases puede extender una subclase en Java?",
            options: [
              { text: "Exactamente 1 clase (Herencia simple)", correct: true },
              { text: "Múltiples clases", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los imports y la clase heredada:",
            options: [
              { text: "import edu.wpi.first.wpilibj2.command.SubsystemBase;", correct: true },
              { text: "public class ShooterSubsystem extends SubsystemBase {", correct: true },
              { text: "  @Override", correct: true },
              { text: "  public void periodic() {}", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el uso de `implements` para extender de una clase:",
            codeSnippet: "public class Arm implements SubsystemBase {}",
            options: [
              { text: "public class Arm extends SubsystemBase {}", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 5: Unit 3 Challenge - Full WPILib Header",
        challenges: [
          {
            type: "THEORY",
            question: "Reto POO II",
            lessonText: "# Desafío Integrador\n\nConstruye el encabezado de un Subsistema WPILib con imports y herencia.",
            options: [
              { text: "Empezar", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena el archivo Java de un subsistema:",
            options: [
              { text: "package frc.robot.subsystems;", correct: true },
              { text: "import edu.wpi.first.wpilibj2.command.SubsystemBase;", correct: true },
              { text: "public class Wrist extends SubsystemBase {", correct: true },
              { text: "  @Override", correct: true },
              { text: "  public void periodic() {}", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la anotación de sobrescritura de métodos:",
            options: [
              { text: "@Override", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cuál es la palabra clave para traer librerías externas a tu archivo?",
            options: [
              { text: "import", correct: true },
              { text: "include", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja las palabras clave de Java:",
            options: [
              { text: "extends|||Hereda de una clase base", correct: true },
              { text: "implements|||Implementa contratos de interfaces", correct: true },
              { text: "package|||Define el espacio de nombres del archivo", correct: true }
            ]
          }
        ]
      }
    ]
  },

  // UNIT 4
  {
    order: 4,
    slug: "unit-4",
    title: "Introduction to WPILib Structure",
    description: "Estructura de proyectos FRC: Robot.java, RobotContainer.java y TimedRobot.",
    guidebookText: `# Guidebook: WPILib Project Structure

Un proyecto FRC en Java sigue la arquitectura estándar recomendada por FIRST.

## Componentes Principales

1. **Main.java**: Punto de entrada JVM que arranca \`Robot.java\`.
2. **Robot.java**: Hereda de \`TimedRobot\`. Controla los modos de juego (\`autonomousInit\`, \`teleopPeriodic\`, etc.).
3. **RobotContainer.java**: El "cerebro de conexiones". Instancia subsistemas, comandos y mapea los botones de los controles.
`,
    lessons: [
      {
        title: "Lesson 1: TimedRobot & Main Loop",
        challenges: [
          {
            type: "THEORY",
            question: "El Bucle Principal de `TimedRobot`",
            lessonText: "# TimedRobot\n\nWPILib ejecuta el bucle principal del robot cada **20 milisegundos** (50 Hz). El método `robotPeriodic()` se ejecuta en todo momento.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Con qué frecuencia ejecuta WPILib los métodos periódicos de `TimedRobot` por defecto?",
            options: [
              { text: "Cada 20 ms (50 Hz)", correct: true },
              { text: "Cada 1 segundo", correct: false },
              { text: "Cada 1 ms", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa la clase principal del Robot heredando de `TimedRobot`:",
            codeSnippet: "public class Robot extends _____ {\n  @Override\n  public void robotPeriodic() {}\n}",
            options: [
              { text: "TimedRobot", correct: true },
              { text: "CommandRobot", correct: false },
              { text: "SubsystemBase", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los métodos de `Robot.java`:",
            options: [
              { text: "robotInit()|||Se ejecuta UNA sola vez al encender la roboRIO", correct: true },
              { text: "robotPeriodic()|||Se ejecuta continuamente cada 20ms", correct: true },
              { text: "teleopInit()|||Se ejecuta al iniciar el periodo Teleoperado", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la definición del método `autonomousInit()` con retorno void:",
            options: [
              { text: "public void autonomousInit() {", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 2: Match Modes & Lifecycle Methods",
        challenges: [
          {
            type: "THEORY",
            question: "Ciclo de Vida del Partido",
            lessonText: "# Ciclos de Vida en FRC\n\n- **Autonomous**: 15 segundos controlados 100% por código.\n- **Teleoperated**: 2 minutos 15 segundos controlados por los drivers.\n- **Disabled**: Robot deshabilitado por seguridad.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué método se ejecuta periódicamente durante el periodo de control por drivers?",
            options: [
              { text: "teleopPeriodic()", correct: true },
              { text: "autonomousPeriodic()", correct: false },
              { text: "disabledInit()", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Completa el método de inicialización de teleop:",
            codeSnippet: "public void _____Init() {\n  // Cancelar autónomo si sigue corriendo\n}",
            options: [
              { text: "teleop", correct: true },
              { text: "auto", correct: false },
              { text: "disabled", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Cuándo se llama a `disabledInit()`?",
            codeSnippet: "// Al presionar Disable en la Driver Station",
            options: [
              { text: "Al deshabilitar el robot", correct: true },
              { text: "Al iniciar el autonomous", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige la sintaxis del método `teleopPeriodic`:",
            codeSnippet: "public void teleopPeriodic(int time) {}",
            options: [
              { text: "public void teleopPeriodic() {}", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 3: RobotContainer - The Wired Hub",
        challenges: [
          {
            type: "THEORY",
            question: "El rol de `RobotContainer`",
            lessonText: "# RobotContainer\n\nEs donde instanciamos nuestros subsistemas (`DriveSubsystem`), mandos (`XboxController`) y vinculamos los botones con comandos.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Dónde se recomienda declarar e instanciar los subsistemas y botones del robot?",
            options: [
              { text: "RobotContainer.java", correct: true },
              { text: "Main.java", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Instancia el subsistema de chasis dentro de `RobotContainer`:",
            codeSnippet: "private final DriveSubsystem m_robotDrive = _____ DriveSubsystem();",
            options: [
              { text: "new", correct: true },
              { text: "this", correct: false }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los elementos típicos de `RobotContainer.java`:",
            options: [
              { text: "public class RobotContainer {", correct: true },
              { text: "  private final DriveSubsystem m_drive = new DriveSubsystem();", correct: true },
              { text: "  public RobotContainer() {", correct: true },
              { text: "    configureButtonBindings();", correct: true },
              { text: "  }", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la llamada al método de configuración de botones `configureButtonBindings();`:",
            options: [
              { text: "configureButtonBindings();", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 4: CommandScheduler & Runs",
        challenges: [
          {
            type: "THEORY",
            question: "El Planificador de Comandos",
            lessonText: "# CommandScheduler\n\nEl `CommandScheduler.getInstance().run()` procesa todos los comandos activos y lee los estados de los subsistemas.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Ejecuta el planificador dentro de `robotPeriodic()`:",
            codeSnippet: "CommandScheduler.getInstance()._____();",
            options: [
              { text: "run", correct: true },
              { text: "execute", correct: false },
              { text: "start", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué ocurre si olvidas llamar a `CommandScheduler.getInstance().run()` en `robotPeriodic()`?",
            options: [
              { text: "Los comandos y botones no se ejecutarán", correct: true },
              { text: "Los motores se sobrecalientan", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja los componentes del Command Framework:",
            options: [
              { text: "CommandScheduler|||El motor que pollinguer y ejecuta comandos", correct: true },
              { text: "RobotContainer|||Donde se cablean comandos y botones", correct: true },
              { text: "Robot.java|||Controla los modos de juego y el scheduler", correct: true }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el método del Scheduler:",
            codeSnippet: "CommandScheduler.run();",
            options: [
              { text: "CommandScheduler.getInstance().run();", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 5: Unit 4 Challenge - Robot Architecture",
        challenges: [
          {
            type: "THEORY",
            question: "Reto Estructura WPILib",
            lessonText: "# Desafío de Estructura\n\nDemuestra tu dominio de la arquitectura general de proyectos FRC.",
            options: [
              { text: "Empezar", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena los llamados dentro de `Robot.java`:",
            options: [
              { text: "public void robotPeriodic() {", correct: true },
              { text: "  CommandScheduler.getInstance().run();", correct: true },
              { text: "}", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Cada cuántos milisegundos corre el ciclo de `robotPeriodic()` por defecto?",
            options: [
              { text: "20 ms", correct: true },
              { text: "100 ms", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la llamada a `CommandScheduler.getInstance().run();`:",
            options: [
              { text: "CommandScheduler.getInstance().run();", correct: true }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja los archivos del proyecto FRC:",
            options: [
              { text: "Robot.java|||Contiene los handlers de ciclo de vida de FRC", correct: true },
              { text: "RobotContainer.java|||Hub central de subsistemas y comandos", correct: true }
            ]
          }
        ]
      }
    ]
  },

  // UNIT 5
  {
    order: 5,
    slug: "unit-5",
    title: "PWM & CAN Motors",
    description: "Controladores de motores en FRC: CANSparkMax (REV) y TalonFX (CTRE Phoenix 6).",
    guidebookText: `# Guidebook: Motors & Motor Controllers

En FRC, los motores principales se comunican vía el bus **CAN** (Controller Area Network) usando IDs únicos.

## Principales Motor Controllers

1. **REV Robotics CANSparkMax / SparkFlex**:
   - Usan la librería \`com.revrobotics.CANSparkMax\`.
   - Se especifica si el motor es Brushless o Brushed.
2. **CTRE Phoenix 6 TalonFX**:
   - Usan la librería \`com.ctre.phoenix6.hardware.TalonFX\`.
3. **DifferentialDrive**:
   - Clase helper de WPILib para controlar un chasis tipo Tank Drive (\`arcadeDrive(speed, rotation)\`).
`,
    lessons: [
      {
        title: "Lesson 1: REV CANSparkMax Basics",
        challenges: [
          {
            type: "THEORY",
            question: "Controladores SparkMax de REV",
            lessonText: "# CANSparkMax\n\nEl `CANSparkMax` requiere un **CAN ID** y el tipo de motor (`MotorType.kBrushless` para motores NEO).",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué tipo de motor se debe especificar para un motor NEO 1.5 en el constructor de `CANSparkMax`?",
            options: [
              { text: "MotorType.kBrushless", correct: true },
              { text: "MotorType.kBrushed", correct: false }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Instancia un motor SparkMax con CAN ID 1:",
            codeSnippet: "CANSparkMax leftMotor = new CANSparkMax(1, CANSparkMaxLowLevel.MotorType._____);",
            options: [
              { text: "kBrushless", correct: true },
              { text: "kDC", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para fijar la velocidad del motor `leftMotor` al 75% hacia adelante (`0.75`):",
            options: [
              { text: "leftMotor.set(0.75);", correct: true }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los rangos de velocidad del motor:",
            options: [
              { text: "1.0|||Máxima velocidad hacia adelante", correct: true },
              { text: "0.0|||Motor completamente detenido", correct: true },
              { text: "-1.0|||Máxima velocidad en reversa", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 2: CTRE Phoenix 6 TalonFX",
        challenges: [
          {
            type: "THEORY",
            question: "TalonFX (Falcon 500 / Kraken X60)",
            lessonText: "# TalonFX Phoenix 6\n\nLos motores Kraken X60 y Falcon 500 usan la clase `TalonFX` de la librería CTRE Phoenix 6.",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Instancia un motor TalonFX en el CAN ID 5:",
            codeSnippet: "TalonFX shooterMotor = _____ TalonFX(5);",
            options: [
              { text: "new", correct: true },
              { text: "create", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué método se utiliza para asignar el voltaje o salida en un TalonFX en Phoenix 6?",
            options: [
              { text: "shooterMotor.set(0.8);", correct: true },
              { text: "shooterMotor.power(0.8);", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué acción realiza `motor.set(-0.5);`?",
            codeSnippet: "shooterMotor.set(-0.5);",
            options: [
              { text: "Gira el motor al 50% de potencia en sentido inverso", correct: true },
              { text: "Detiene el motor", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el CAN ID negativo en el constructor:",
            codeSnippet: "TalonFX motor = new TalonFX(-2);",
            options: [
              { text: "TalonFX motor = new TalonFX(2);", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 3: Inverting Motors & Follower Mode",
        challenges: [
          {
            type: "THEORY",
            question: "Inversión y Seguidores",
            lessonText: "# Motor Inversion & Follower\n\nEn una caja de engranes con 2 motores, uno debe invertirse (`setInverted(true)`) o seguir al líder (`follow(leaderMotor)`).",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Invierte la dirección del motor izquierdo:",
            codeSnippet: "leftMotor.setInverted(_____);",
            options: [
              { text: "true", correct: true },
              { text: "false", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Por qué invertimos un motor en el lado izquierdo del chasis?",
            options: [
              { text: "Porque está montado en espejo físicamente respecto al lado derecho", correct: true },
              { text: "Para consumir menos batería", correct: false }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para invertir el motor `rightLeader`:",
            options: [
              { text: "rightLeader.setInverted(true);", correct: true }
            ]
          },
          {
            type: "MATCHING",
            question: "Relaciona los métodos de control de motores:",
            options: [
              { text: "setInverted(true)|||Invierte la polaridad de giro", correct: true },
              { text: "follow(leader)|||Imita la potencia del motor principal", correct: true },
              { text: "set(0.0)|||Detiene la marcha del motor", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 4: DifferentialDrive Arcade Control",
        challenges: [
          {
            type: "THEORY",
            question: "Control Arcade Drive",
            lessonText: "# DifferentialDrive\n\nWPILib nos da la clase `DifferentialDrive` para combinar velocidad hacia adelante (xSpeed) y giro (zRotation).",
            options: [
              { text: "Entendido", correct: true }
            ]
          },
          {
            type: "CODE_FILL",
            question: "Llama al método de manejo arcade:",
            codeSnippet: "m_drive._____(moveSpeed, turnSpeed);",
            options: [
              { text: "arcadeDrive", correct: true },
              { text: "tankDrive", correct: false }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué rango de valores acepta el método `arcadeDrive(speed, rotation)`?",
            options: [
              { text: "Valores entre -1.0 y 1.0", correct: true },
              { text: "Valores de 0 a 100", correct: false }
            ]
          },
          {
            type: "PREDICT_OUTPUT",
            question: "¿Qué movimiento hace el robot con `m_drive.arcadeDrive(0.5, 0.0);`?",
            codeSnippet: "m_drive.arcadeDrive(0.5, 0.0);",
            options: [
              { text: "Avanza en línea recta al 50% de velocidad", correct: true },
              { text: "Gira sobre su propio eje", correct: false }
            ]
          },
          {
            type: "DEBUG",
            question: "Corrige el parámetro faltante en arcadeDrive:",
            codeSnippet: "m_drive.arcadeDrive(0.8);",
            options: [
              { text: "m_drive.arcadeDrive(0.8, 0.0);", correct: true }
            ]
          }
        ]
      },
      {
        title: "Lesson 5: Unit 5 Challenge - Drive Motors Setup",
        challenges: [
          {
            type: "THEORY",
            question: "Reto Motores CAN",
            lessonText: "# Desafío de Motores FRC\n\nConfigura los motores de un chasis Tank Drive completo.",
            options: [
              { text: "Empezar", correct: true }
            ]
          },
          {
            type: "CODE_ORDER",
            question: "Ordena la inicialización de motores SparkMax:",
            options: [
              { text: "CANSparkMax leftMaster = new CANSparkMax(1, MotorType.kBrushless);", correct: true },
              { text: "CANSparkMax rightMaster = new CANSparkMax(2, MotorType.kBrushless);", correct: true },
              { text: "rightMaster.setInverted(true);", correct: true },
              { text: "leftMaster.set(0.5);", correct: true }
            ]
          },
          {
            type: "CODE_WRITE",
            question: "Escribe la instrucción para detener el motor `leftMaster.set(0.0);`:",
            options: [
              { text: "leftMaster.set(0.0);", correct: true }
            ]
          },
          {
            type: "SELECT",
            question: "¿Qué librería pertenece a los motores REV SparkMax?",
            options: [
              { text: "com.revrobotics.CANSparkMax", correct: true },
              { text: "com.ctre.phoenix6.TalonFX", correct: false }
            ]
          },
          {
            type: "MATCHING",
            question: "Empareja los controladores con sus marcas:",
            options: [
              { text: "CANSparkMax|||REV Robotics", correct: true },
              { text: "TalonFX|||CTRE Phoenix", correct: true },
              { text: "VictorSPX|||CTRE Legacy", correct: true }
            ]
          }
        ]
      }
    ]
  },

  // UNIT 6 TO 15 Generator Function
  ...generateRemainingJavaUnits()
];

function generateRemainingJavaUnits(): UnitDefinition[] {
  const units: UnitDefinition[] = [];

  const remainingConfigs = [
    {
      order: 6,
      slug: "unit-6",
      title: "Subsystems Architecture",
      desc: "Encapsulamiento de hardware, motores y sensores dentro de SubsystemBase.",
      topic: "Subsystems"
    },
    {
      order: 7,
      slug: "unit-7",
      title: "Commands Architecture I",
      desc: "Creación de comandos simples, InstantCommand y RunCommand.",
      topic: "Commands"
    },
    {
      order: 8,
      slug: "unit-8",
      title: "Commands Architecture II",
      desc: "Comandos secuenciales (SequentialCommandGroup) y paralelos (ParallelCommandGroup).",
      topic: "Command Groups"
    },
    {
      order: 9,
      slug: "unit-9",
      title: "Human Interface Devices (HID)",
      desc: "Configuración de XboxController, Joystick y mapeo de botones con Trigger.",
      topic: "Controllers"
    },
    {
      order: 10,
      slug: "unit-10",
      title: "Pneumatics & Actuators",
      desc: "Control de pistones neumáticos con DoubleSolenoid, Compressors y Servos.",
      topic: "Pneumatics"
    },
    {
      order: 11,
      slug: "unit-11",
      title: "Sensors & Encoders",
      desc: "Lectura de encoders relativos/absolutos, interruptores de límite y giróscopo NavX.",
      topic: "Sensors"
    },
    {
      order: 12,
      slug: "unit-12",
      title: "Closed-Loop Control (PID)",
      desc: "Control retroalimentado con PIDController: Proporcional, Integral y Derivativo.",
      topic: "PID Control"
    },
    {
      order: 13,
      slug: "unit-13",
      title: "Autonomous Routines I",
      desc: "Creación de rutinas de autónomo basadas en temporizadores y trayectorias básicas.",
      topic: "Auto Basics"
    },
    {
      order: 14,
      slug: "unit-14",
      title: "Autonomous Routines II",
      desc: "Generación de caminos avanzados con PathPlanner y AutoBuilder.",
      topic: "PathPlanner"
    },
    {
      order: 15,
      slug: "unit-15",
      title: "Vision & AprilTags",
      desc: "Integración de Limelight / PhotonVision para alineación automática con AprilTags.",
      topic: "Vision FRC"
    }
  ];

  for (const config of remainingConfigs) {
    units.push({
      order: config.order,
      slug: config.slug,
      title: config.title,
      description: config.desc,
      guidebookText: `# Guidebook: ${config.title}\n\nUnidad ${config.order} enfocada en **${config.topic}** para FIRST Robotics en Java.\n\nAprenderás patrones de diseño profesional y buenas prácticas para la roboRIO.`,
      lessons: [
        {
          title: `Lesson 1: ${config.topic} Fundamentals`,
          challenges: [
            {
              type: "THEORY",
              question: `Conceptos clave de ${config.topic}`,
              lessonText: `# ${config.title}\n\nEn esta lección cubrimos la arquitectura de **${config.topic}** aplicada al robot.`,
              options: [{ text: "Entendido", correct: true }]
            },
            {
              type: "SELECT",
              question: `¿Cuál es el propósito principal de ${config.topic}?`,
              options: [
                { text: `Organizar y controlar ${config.topic} de forma modular`, correct: true },
                { text: "Solo sirve para imprimir mensajes en consola", correct: false }
              ]
            },
            {
              type: "CODE_FILL",
              question: `Completa la instrucción para ${config.topic}:`,
              codeSnippet: `// WPILib ${config.topic}\npublic void initialize() {\n  _____();\n}`,
              options: [
                { text: "start", correct: true },
                { text: "stop", correct: false }
              ]
            },
            {
              type: "MATCHING",
              question: `Empareja los términos de ${config.topic}:`,
              options: [
                { text: `${config.topic} Base|||Estructura estándar de WPILib`, correct: true },
                { text: "execute()|||Método que se repite en el ciclo", correct: true }
              ]
            },
            {
              type: "CODE_WRITE",
              question: `Escribe la instrucción Java para activar ${config.topic}:`,
              options: [
                { text: `// ${config.topic} active`, correct: true }
              ]
            }
          ]
        },
        {
          title: `Lesson 2: ${config.topic} Implementation`,
          challenges: [
            {
              type: "THEORY",
              question: `Implementación de ${config.topic}`,
              lessonText: `# Implementación\n\nAplicando ${config.topic} en el entorno de desarrollo FRC.`,
              options: [{ text: "Continuar", correct: true }]
            },
            {
              type: "SELECT",
              question: `¿Qué ventaja ofrece usar ${config.topic} en FRC?`,
              options: [
                { text: "Código más limpio, reutilizable y fácil de testear", correct: true },
                { text: "Hace que los motores giren el doble de rápido sin corriente", correct: false }
              ]
            },
            {
              type: "CODE_FILL",
              question: `Completa el código de ${config.topic}:`,
              codeSnippet: `public boolean isFinished() {\n  return _____\n}`,
              options: [
                { text: "true;", correct: true },
                { text: "false;", correct: false }
              ]
            },
            {
              type: "PREDICT_OUTPUT",
              question: "¿Qué devuelve la función de estado?",
              codeSnippet: "System.out.println(\"Status OK\");",
              options: [
                { text: "Status OK", correct: true },
                { text: "Error", correct: false }
              ]
            },
            {
              type: "DEBUG",
              question: "Corrige el punto y coma faltante:",
              codeSnippet: "double value = 1.0",
              options: [
                { text: "double value = 1.0;", correct: true }
              ]
            }
          ]
        },
        {
          title: `Lesson 3: Advanced ${config.topic} Techniques`,
          challenges: [
            {
              type: "THEORY",
              question: "Técnicas Avanzadas",
              lessonText: `# ${config.topic} Avanzado\n\nOptimización e integración con el resto del robot.`,
              options: [{ text: "Entendido", correct: true }]
            },
            {
              type: "CODE_FILL",
              question: "Asigna el parámetro recibido:",
              codeSnippet: `this.speed = _____;`,
              options: [
                { text: "speed", correct: true },
                { text: "val", correct: false }
              ]
            },
            {
              type: "SELECT",
              question: "¿Qué método se ejecuta cuando un comando finaliza?",
              options: [
                { text: "end(boolean interrupted)", correct: true },
                { text: "close()", correct: false }
              ]
            },
            {
              type: "CODE_ORDER",
              question: "Ordena los métodos del ciclo del comando:",
              options: [
                { text: "initialize();", correct: true },
                { text: "execute();", correct: true },
                { text: "isFinished();", correct: true },
                { text: "end(interrupted);", correct: true }
              ]
            },
            {
              type: "CODE_WRITE",
              question: "Escribe el llamado a `isFinished()` retornando `true;`:",
              options: [
                { text: "return true;", correct: true }
              ]
            }
          ]
        },
        {
          title: `Lesson 4: Telemetry & Safety`,
          challenges: [
            {
              type: "THEORY",
              question: "Telemetría y Seguridad",
              lessonText: `# Telemetría\n\nPublicar datos en ` + "`SmartDashboard`" + ` para diagnóstico durante la competencia.`,
              options: [{ text: "Entendido", correct: true }]
            },
            {
              type: "CODE_FILL",
              question: "Publica un valor numérico en SmartDashboard:",
              codeSnippet: `SmartDashboard._____\("Speed", speed);`,
              options: [
                { text: "putNumber", correct: true },
                { text: "sendNumber", correct: false }
              ]
            },
            {
              type: "SELECT",
              question: "¿Por qué es crucial enviar telemetría a la Driver Station?",
              options: [
                { text: "Para diagnosticar fallas de sensores o motores durante el partido", correct: true },
                { text: "Es un requisito obligatorio para pasar inspección", correct: false }
              ]
            },
            {
              type: "MATCHING",
              question: "Empareja los métodos de SmartDashboard:",
              options: [
                { text: "putNumber|||Publica valores decimales/enteros", correct: true },
                { text: "putBoolean|||Publica banderas verdadero/falso", correct: true },
                { text: "putString|||Publica mensajes de texto", correct: true }
              ]
            },
            {
              type: "CODE_WRITE",
              question: "Escribe la instrucción para enviar la velocidad a SmartDashboard:",
              options: [
                { text: "SmartDashboard.putNumber(\"Speed\", speed);", correct: true }
              ]
            }
          ]
        },
        {
          title: `Lesson 5: Unit ${config.order} Challenge - ${config.topic} Master`,
          challenges: [
            {
              type: "THEORY",
              question: `Reto Integrador de Unidad ${config.order}`,
              lessonText: `# Desafío Final\n\nDemuestra tus conocimientos avanzados sobre **${config.topic}**.`,
              options: [{ text: "Empezar Reto", correct: true }]
            },
            {
              type: "CODE_ORDER",
              question: "Ordena la estructura del módulo:",
              options: [
                { text: `// Unit ${config.order} - ${config.topic}`, correct: true },
                { text: "public void execute() {", correct: true },
                { text: `  SmartDashboard.putBoolean("${config.topic} Ready", true);`, correct: true },
                { text: "}", correct: true }
              ]
            },
            {
              type: "CODE_WRITE",
              question: `Escribe la comprobación de finalización \`return true;\`:`,
              options: [
                { text: "return true;", correct: true }
              ]
            },
            {
              type: "SELECT",
              question: "¿Qué anotación valida que un método sobrescribe la superclase?",
              options: [
                { text: "@Override", correct: true },
                { text: "@Interface", correct: false }
              ]
            },
            {
              type: "MATCHING",
              question: "Empareja los componentes finales:",
              options: [
                { text: `${config.topic}|||Tema de la Unidad ${config.order}`, correct: true },
                { text: "WPILib|||Librería oficial de FRC", correct: true }
              ]
            }
          ]
        }
      ]
    });
  }

  return units;
}
