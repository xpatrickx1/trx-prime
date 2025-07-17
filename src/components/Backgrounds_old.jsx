import bg1 from '../assets/images/backgrounds/bg1.svg';
import bg2 from "../assets/images/backgrounds/bg2.svg";
import bg3 from "../assets/images/backgrounds/bg3.svg";
import bg4 from "../assets/images/backgrounds/bg4.svg";
import bg5 from "../assets/images/backgrounds/bg5.svg";
import bg6 from "../assets/images/backgrounds/bg6.svg";

import bg1Green from '../assets/images/backgrounds/bg1_green.svg';
import bg2Green from "../assets/images/backgrounds/bg2_green.svg";
import bg3Green from "../assets/images/backgrounds/bg3_green.svg";
import bg4Green from "../assets/images/backgrounds/bg4_green.svg";
import bg5Green from "../assets/images/backgrounds/bg5_green.svg";
import bg6Green from "../assets/images/backgrounds/bg6_green.svg";

export const Backgrounds = ({ theme }) => {
  return (
    <div className="absolute inset-0 z-0">
      {theme === 'green' ? (
        <>
          <img
            className="absolute w-dvw h-[425px] top-0.5 left-0 -z-10"
            alt="Gradient"
            src={bg1Green}
          />
          <img
            className="absolute w-dvw h-[1036px] top-[129px] right-0"
            alt="Gradient"
            src={bg2Green}
          />
          <img
            className="absolute w-dvw h-[869px] top-[898px] left-0 "
            alt="Gradient"
            src={bg3Green}
          />
          <img
            className="absolute w-dvw h-[1036px] top-[1312px] right-0"
            alt="Gradient"
            src={bg4Green}
          />
          <img
            className="absolute w-dvw h-[659px] top-[2047px] left-0"
            alt="Gradient"
            src={bg5Green}
          />
          <img
            className="absolute w-dvw h-[996px] top-[2468px] left-0"
            alt="Gradient"
            src={bg6Green}
          />
        </>
      ) : (
        <>
          <img
            className="absolute w-dvw h-[425px] top-0.5 left-0 -z-10"
            alt="Gradient"
            src={bg1}
          />
          <img
            className="absolute w-dvw h-[1036px] top-[129px] right-0"
            alt="Gradient"
            src={bg2}
          />
          <img
            className="absolute w-dvw h-[869px] top-[898px] left-0 "
            alt="Gradient"
            src={bg3}
          />
          <img
            className="absolute w-dvw h-[1036px] top-[1312px] right-0"
            alt="Gradient"
            src={bg4}
          />
          <img
            className="absolute w-dvw h-[659px] top-[2047px] left-0"
            alt="Gradient"
            src={bg5}
          />
          <img
            className="absolute w-dvw h-[996px] top-[2468px] left-0"
            alt="Gradient"
            src={bg6}
          />
        </>
      )}
    </div>
  )
}