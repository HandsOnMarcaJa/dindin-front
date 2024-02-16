import Image from "next/image";
import BackgroundImage from "../assets/background.png";

export function Background() {
  return (
    <Image
      className="absolute -z-10 w-screen h-screen object-cover"
      src={BackgroundImage}
      alt=""
      width={480}
      height={320}
      quality={100}
      priority
    />
  );
}
