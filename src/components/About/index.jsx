import { useContext } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

import { textsContext } from "../../contexts";

const About = () => {
  const { state: textsState } = useContext(textsContext);

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal">
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">{textsState.myName},</span> a
            Crazy Dev
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}>
            {textsState.intro}
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}>
            {textsState.objective}
          </p>
        </div>

        <div
          className="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}>
          <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
            width={"350px"}
          />
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/Lenni Mikael.pdf")}
              download={"Lenni's Resume.pdf"}>
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
