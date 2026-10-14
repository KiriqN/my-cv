import React, { useState } from "react";

export interface TerminalLine {
  text: string;
  kind: string;
}

export function useTerminal(welcome: TerminalLine[]) {
  const [lines, setLines] = useState(welcome);
  const [input, setInput] = useState("");

  function runCommand(inputCommand: string) {
    const echoLine = { text: inputCommand, kind: "echo" };

    setLines((prev) => [...prev, echoLine]);

    return inputCommand;
  }

  return { lines, input, setInput, runCommand };
}
