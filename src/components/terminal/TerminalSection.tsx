import Terminal from "./Terminal";
import NeoFetch from "../neofetch/NeoFetch";

function TerminalSection() {
  return (
    <section className="grid grid-cols-[3fr_2fr] gap-6">
      <Terminal />
      <NeoFetch />
    </section>
  );
}

export default TerminalSection;
