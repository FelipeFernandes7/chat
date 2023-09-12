import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <div className=" flex flex-col align-center md:px-4 relative w-full z-10">
      {children}
    </div>
  );
}
