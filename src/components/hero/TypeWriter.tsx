import useTypeWriter from "../../hooks/useTypeWriter";

interface TypeWriterProps {
  roles: string[];
}

function TypeWriter(props: TypeWriterProps) {
  const text = useTypeWriter(props.roles);

  return (
    <p className="font-mono text-[20px] md:text-[30px] leading-[1.4] text-[#C9D1D9]">
      <span>{"> "}</span>
      <span className="typewriter-border">{text}</span>
    </p>
  );
}

export default TypeWriter;
