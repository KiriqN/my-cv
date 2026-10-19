import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full container max-w-[1120px] px-4 md:px-8">
      {children}
    </div>
  );
}

export default Container;
