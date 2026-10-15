import React, { useState } from "react";

export interface TerminalLine {
  text: string;
  kind: string;
}

export function useTerminal(
  welcome: TerminalLine[],
  commands: Record<string, TerminalLine[]>,
) {
  const [lines, setLines] = useState(welcome);
  const [input, setInput] = useState("");

  function runCommand(inputCommand: string) {
    const cleanInput = inputCommand.trim().toLowerCase();

    const commandKey = commands[cleanInput] ?? [];

    console.log(commandKey);

    const echoLine = {
      text: `jared@cape-town:~$ ${inputCommand}`,
      kind: "echo",
    };

    setLines((prev) => [...prev, echoLine, ...commandKey]);
    setInput("");
  }

  return { lines, input, setInput, runCommand };
}
