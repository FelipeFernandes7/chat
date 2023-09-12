import { Button } from "@/components/button";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import logIn from "../../lotties/login.json";

export default function Login() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <form className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 bottom-0">
      <div className="md:bg-gray-900 rounded-md md:p-20">
        <div className="flex items-center justify-center w-full">
          <h1 className="absolute top-12 text-purple-600 font-bold text-5xl">
            Login
          </h1>
        </div>
        <div className="flex flex-col items-center w-full max-w-sm mt-5 px-4">
          <Lottie
            className="w-40 h-40 mb-4"
            lottieRef={iconRef}
            animationData={logIn}
            loop={true}
            autoplay={true}
          />
          <span className="text-gray-300 font-medium text-lg mb-5 ">
            Faça Login com Google para continuar
          </span>
          <Button
            containerIconStyled="md:left-10 left-6 bg-white rounded-full "
            containerStyled="mt-5 h-10 text-white text-md font-medium"
          />
        </div>
      </div>
    </form>
  );
}
