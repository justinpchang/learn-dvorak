import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}

export { Container };
