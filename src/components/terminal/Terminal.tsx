import data from "../../data/cv.json";

function Terminal() {
  return (
    <div className="border border-[#30363D] rounded-t-[14px] rounded-b-[14px] bg-[#0A0D12] overflow-hidden">
      <div className=" bg-[#161B22] rounded-b-none py-3 flex items-center px-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F87171]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FBBF24]"></span>
          <span className="w-3 h-3 rounded-full bg-[#4ADE80]"></span>
        </div>
        <p className="text-[#9DA7B3] text-[12px] md:text-[13px] font-mono flex-1 text-center">
          {data.terminal.title}
        </p>
      </div>
      <div className="min-h-85 bg-transparent text-left p-5 flex flex-col gap-1">
        {data.terminal.welcome.map((message) => (
          <p
            className={`font-mono text-[13px] md:text-[14px] ${message.kind}`}
            key={message.text}
          >
            {message.text}
          </p>
        ))}

        <div className="flex text-[13px] font-mono md:text-[14px] leading-[1.6] items-center mt-3 gap-3">
          <label
            className="text-(--mint) whitespace-nowrap"
            htmlFor="consoleInput"
          >
            {data.terminal.prompt}
          </label>
          <input
            type="text"
            id="consoleInput"
            className="outline-none flex-1 min-w-0 bg-transparent text-[#E6EDF3]"
            placeholder="type help"
            spellCheck={false}
            autoComplete="off"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-5 py-3.5 items-center bg-[#0D1117] border-t border-[#30363D]">
        {data.terminal.quickCommands.map((buttons) => (
          <button
            className="font-mono cursor-pointer border text-[13px] text-[#C9D1D9] px-3.5 min-h-9 bg-[#161B22] rounded-md border-[#30363D] transform transition-[background-color, color] duration-200 hover:bg-(--mint) hover:text-[#0D1117]"
            key={buttons}
          >
            {buttons}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
