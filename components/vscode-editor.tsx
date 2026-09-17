"use client";

import Editor, { OnMount } from "@monaco-editor/react";
import { configureMonacoWPILib } from "@/lib/monaco-wpilib";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VSCodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: string;
  height?: string;
  disabled?: boolean;
  placeholder?: string;
  challengeId?: number;
}

export const VSCodeEditor = ({
  value,
  onChange,
  language = "java",
  height = "180px",
  disabled = false,
  placeholder = "// Escribe tu código FRC en Java aquí...",
  challengeId,
}: VSCodeEditorProps) => {
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    configureMonacoWPILib(monaco);
  };

  const handleOpenVSCodeDesktop = () => {
    if (!challengeId) return;
    const vscodeUri = `vscode://nauticode.nauticode-extension/open-challenge?id=${challengeId}`;
    window.open(vscodeUri, "_blank");
  };

  return (
    <div className="w-full flex flex-col rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-xl">
      {/* VSCode Header Bar */}
      <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-200">VSCode FRC Engine</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-amber-300 font-bold uppercase">
            WPILib Java
          </span>
        </div>
        
        {challengeId && (
          <Button
            onClick={handleOpenVSCodeDesktop}
            variant="ghost"
            size="sm"
            className="h-6 text-xs text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 gap-1 px-2"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Abrir en VSCode Local</span>
          </Button>
        )}
      </div>

      {/* Monaco Editor Container */}
      <div className="p-1 bg-slate-900">
        <Editor
          height={height}
          language={language}
          theme="vs-dark"
          value={value}
          onChange={onChange}
          onMount={handleEditorDidMount}
          options={{
            readOnly: disabled,
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "var(--font-mono), monospace",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 8, bottom: 8 },
            suggest: {
              showSnippets: true,
              showKeywords: true,
            },
          }}
        />
      </div>
    </div>
  );
};
