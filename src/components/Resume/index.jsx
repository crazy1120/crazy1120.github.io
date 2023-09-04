import DownloadIcon from "@mui/icons-material/Download";

import BarGraph from "./BarGraph";
import Category from "./Category";
import { useContext } from "react";
import { textsContext } from "../../contexts";

const Resume = () => {
  const { state: textsState } = useContext(textsContext);

  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        <ol className="flex flex-col border-l border-gray-700 ml-9 mb-6">
          <Category
            company="Qvik, Helsinki, Finland"
            aos="zoom-in"
            title="Frontend Developer"
            time="07/2017 - 05/2020"
            text={textsState.frontendDev}
          />
          <Category
            company="Futurice, Helsinki, Finland"
            aos="zoom-out"
            aosDelay="700"
            title="Full Stack Developer"
            time="08/2020 - 04/2023"
            text={textsState.fullDev}
          />
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={75} />
            <BarGraph name={"Express.js"} percent={80} />
            <BarGraph name={"Koa.js"} percent={70} />
            <BarGraph name={"React"} percent={80} />
            <BarGraph name={"Next.js"} percent={75} />
            <BarGraph name={"HTML/CSS"} percent={85} />
          </div>

          <a
            href={require("../../assets/files/Lenni Mikael.pdf")}
            download={"Lenni's Resume"}
            className="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
