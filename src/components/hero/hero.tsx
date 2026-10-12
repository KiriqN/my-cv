import Button from "../buttons/Button";
import TypeWriter from "./TypeWriter";
import data from "../../data/cv.json";

function Hero() {
  return (
    <section className="mx-auto w-full">
      <div className="flex flex-col justify-start text-left gap-6 leading-none  ">
        <p className="accent-color  kickers text-[14px] md:text-[15px] ">
          {data.hero.kicker}
        </p>
        <h1 className="text-[#E6EDF3] text-[48px] md:text-[88px] font-bold [text-shadow:0_0_24px_rgba(94,234,212,0.45)]">
          {data.hero.name}
        </h1>

        <TypeWriter roles={data.hero.roles}></TypeWriter>

        <p className="font-body text-[16px] md:text-[18px] md:max-w-175 leading-[1.7]">
          {data.hero.intro}
        </p>

        <div className="flex flex-row gap-6">
          {data.hero.buttons.map((user) => (
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

export default Hero;
