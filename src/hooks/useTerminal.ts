import { useState } from "react";

export interface TerminalLine {
  text: string;
  kind: string;
}

export function useTerminal(
  welcome: TerminalLine[],
  commands: Record<string, TerminalLine[]>,
  error: string,
) {
  const [lines, setLines] = useState(welcome);
  const [input, setInput] = useState("");

  function runCommand(inputCommand: string) {
    const cleanInput = inputCommand.trim().toLowerCase();

    const echoLine = {
      text: `jared@cape-town:~$ ${inputCommand}`,
      kind: "echo",
    };

    const errLine = {
      text: `${error}`,
      kind: "err",
    };

    if (cleanInput === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const commandKey = commands[cleanInput] ?? [];

    if (commandKey.length <= 0) {
      setLines((prev) => [...prev, echoLine, errLine, ...commandKey]);
      setInput("");
      return;
    }

    console.log(commandKey);

    setLines((prev) => [...prev, echoLine, ...commandKey]);
    setInput("");
  }

  return { lines, input, setInput, runCommand };
}
