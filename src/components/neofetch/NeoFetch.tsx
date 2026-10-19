import React from "react";
import data from "../../data/cv.json";

function NeoFetch() {
  return (
    <section className="flex flex-col min-h-85 text-left gap-4 border border-[#30363D] rounded-t-[14px] p-6 rounded-b-[14px] font-mono bg-[#161B22] text-[13px] md:text-[14px]">
      <div>
        <span className="text-[#9DA7B3] text-[12px] md:text-[13px]">
          {data.neofetch.kicker}
        </span>
      </div>

      <div className="flex gap-5 items-start">
        <span className="flex items-center justify-center font-bold text-[28px] text-(--mint) w-18 h-18 shrink-0 border-2 rounded-xl">
          {data.neofetch.initials}
        </span>
        <span className="font-semibold text-(--mint) border-b border-[#484F58] pb-3">
          {data.neofetch.user}
        </span>
      </div>

      <div>
        {data.neofetch.rows.map((row) => (
          <div className="flex flex-row gap-6" key={row.key}>
            <span className="text-(--mint) shrink-0 w-[8ch]">{row.key}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-1.5 mt-auto" aria-hidden="true">
        {["#F87171", "#FBBF24", "#4ADE80", "#5EEAD4", "#A5B4FC", "#F9A8D4"].map(
          (colour) => (
            <span
              key={colour}
              className="w-6 h-3.5"
              style={{ backgroundColor: colour }}
            />
          ),
        )}
      </div>
    </section>
  );
}

export default NeoFetch;
