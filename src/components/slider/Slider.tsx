import React from "react";
import data from "../../data/cv.json";
import star from "../../assets/star.svg";

function Slider() {
  return (
    <section className="bg-[#0A0D12] border-y overflow-hidden border-[#21262D]  py-6  font-(--heading) font-bold text-[22px] md:text-[28px] text-[#484F58] leading-none whitespace-nowrap">
      <div className="items-center  flex flex-row w-max gap-12">
        {data.stackSlider.map((sliders) => (
          <span
            className="flex flex-row items-center gap-12"
            key={`a-${sliders}`}
          >
            <img className="size-3.5 md:size-4.5 shrink-0 " alt="" src={star} />
            {sliders}
          </span>
        ))}

        {data.stackSlider.map((sliders) => (
          <span
            className="flex flex-row items-center gap-12"
            key={`b-${sliders}`}
            aria-hidden="true"
          >
            <img className="size-3.5 md:size-4.5 shrink-0" alt="" src={star} />
            {sliders}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Slider;
