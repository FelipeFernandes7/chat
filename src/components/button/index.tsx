import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  containerStyled?: string;
  containerIconStyled?: string;
}
export function Button({ containerStyled, containerIconStyled }: ButtonProps) {
  return (
    <button
      className={`relative flex justify-center items-center
     bg-blue-500 rounded-md w-full ${containerStyled} transition-all active:scale-95 hover:bg-blue-600 `}
    >
      <div
        className={`absolute top-1/2  transform -translate-x-1/2 
      -translate-y-1/2 ${containerIconStyled}`}
      >
        <FcGoogle size={25} />
      </div>
      Fazer Login com Google
    </button>
  );
}
