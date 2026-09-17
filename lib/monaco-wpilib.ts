import type { Monaco } from "@monaco-editor/react";

export const WPILIB_SNIPPETS = [
  {
    label: "CANSparkMax motor",
    kind: 15, // Snippet
    documentation: "Inicializa un motor SparkMax de REV Robotics",
    insertText: "CANSparkMax ${1:motor} = new CANSparkMax(${2:1}, CANSparkMaxLowLevel.MotorType.kBrushless);",
    insertTextRules: 4, // InsertAsSnippet
  },
  {
    label: "TalonFX motor",
    kind: 15,
    documentation: "Inicializa un motor TalonFX de CTRE Phoenix 6",
    insertText: "TalonFX ${1:motor} = new TalonFX(${2:1});",
    insertTextRules: 4,
  },
  {
    label: "XboxController",
    kind: 15,
    documentation: "Controlador Xbox para el conductor o copiloto",
    insertText: "XboxController ${1:driverController} = new XboxController(${2:0});",
    insertTextRules: 4,
  },
  {
    label: "SubsystemBase class",
    kind: 15,
    documentation: "Estructura estándar de un Subsistema de WPILib",
    insertText: [
      "public class ${1:DriveSubsystem} extends SubsystemBase {",
      "    public ${1:DriveSubsystem}() {",
      "        // Inicialización de motores y sensores",
      "    }",
      "",
      "    @Override",
      "    public void periodic() {",
      "        // Código que corre cíclicamente (cada 20ms)",
      "    }",
      "}"
    ].join("\n"),
    insertTextRules: 4,
  },
  {
    label: "CommandBase class",
    kind: 15,
    documentation: "Estructura de un Comando de WPILib",
    insertText: [
      "public class ${1:DriveCommand} extends CommandBase {",
      "    private final ${2:DriveSubsystem} m_subsystem;",
      "",
      "    public ${1:DriveCommand}(${2:DriveSubsystem} subsystem) {",
      "        m_subsystem = subsystem;",
      "        addRequirements(subsystem);",
      "    }",
      "",
      "    @Override",
      "    public void execute() {",
      "        // Lógica de ejecución del comando",
      "    }",
      "",
      "    @Override",
      "    public boolean isFinished() {",
      "        return false;",
      "    }",
      "}"
    ].join("\n"),
    insertTextRules: 4,
  },
  {
    label: "SmartDashboard.putNumber",
    kind: 15,
    documentation: "Envía un valor numérico a SmartDashboard",
    insertText: "SmartDashboard.putNumber(\"${1:Key}\", ${2:value});",
    insertTextRules: 4,
  },
  {
    label: "PIDController",
    kind: 15,
    documentation: "Controlador PID de WPILib",
    insertText: "PIDController ${1:pid} = new PIDController(${2:0.1}, ${3:0.0}, ${4:0.01});",
    insertTextRules: 4,
  }
];

export function configureMonacoWPILib(monaco: Monaco) {
  // Registrar proveedor de autocompletado para Java
  monaco.languages.registerCompletionItemProvider("java", {
    provideCompletionItems: (model: any, position: any) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions = WPILIB_SNIPPETS.map((snippet) => ({
        ...snippet,
        range,
      }));

      return { suggestions };
    },
  });
}
