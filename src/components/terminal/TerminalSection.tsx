import Terminal from "./Terminal";
import NeoFetch from "../neofetch/NeoFetch";
import Container from "../container/Container";

function TerminalSection() {
  return (
    <Container>
      <section className="grid grid-cols-[3fr_2fr] gap-6">
        <Terminal />
        <NeoFetch />
      </section>
    </Container>
  );
}

export default TerminalSection;
