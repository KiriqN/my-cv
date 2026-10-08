import React from "react";
import Button from "../buttons/Button";
import data from "../../data/cv.json";

function hero() {
  return (
    <section className="mx-auto w-full">
      <div className="flex flex-col justify-start text-left gap-6 leading-none  ">
        <p className="accent-color  kickers text-[14px] md:text-[15px] ">
          {data.hero.kicker}
        </p>
        <h1 className="text-[#E6EDF3] text-[48px] md:text-[88px] font-bold [text-shadow:0_0_24px_rgba(94,234,212,0.45)]">
          {data.hero.name}
        </h1>

        <p className="flex-row font-mono text-[20px] md:text-[30px] leading-[1.4] text-[#C9D1D9]">
          <span className=""> {`>`} </span>
          <span> front-end developer </span>
        </p>

        <p className="font-body text-[16px] md:text-[18px] md:max-w-175 leading-[1.7]">
          {data.hero.intro}
        </p>

        <div className="flex flex-row gap-6">
          {...data.hero.buttons.map((user) => (
            <Button
              key={user.label}
              buttonClass={user.variant}
              label={user.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default hero;
