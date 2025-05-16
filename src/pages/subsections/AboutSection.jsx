import { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";

import resume from "../../assets/myresume.pdf";
import ResumeModal from "../../components/about_components/ResumeModal";
import CodingProfileCard from "../../components/about_components/CodingProfileCard";

import { codingProfileData, keyExperties } from "../../utils/dataProvider";

const AboutSection = () => {
  const [openResumeModal, setIsOpenResume] = useState(false);

  return (
    <div
      id="about"
      className="relative min-h-screen bg-[#0D1117] flex flex-col items-center justify-center gap-y-8 text-white px-6 py-10 md:px-6"
    >
      <h2 className="text-4xl font-bold text-[#E2E8F0] uppercase">About Me</h2>
      <div className="w-[85%] flex flex-col gap-5">
        {/* upper section */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* left side : description */}
          <div className="lg:w-1/2 w-full bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                <FaUser className="text-base text-[#8AB4F8]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                Who Am I?
              </h3>
            </div>
            <p className="text-gray-400 mt-4 text-justify">
              Hi, I am a Third-year Computer Engineering student with a passion
              for Java development and Cloud Services. Also having hands-on
              experience of building applications using React.js and Express.js,
              with deployments on AWS EC2. Always eager to learn new
              technologies and concepts, upskilling myself and contributing
              effectively to real-world projects.
            </p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  setIsOpenResume(true);
                }}
                className="px-4 py-2 bg-[#60A5FA] text-white rounded-md text-normal shadow-lg hover:bg-[#4F8ED9] transition-all cursor-pointer"
              >
                View Resume
              </button>

              <a
                href={resume}
                download="Amrik_Bhadra_Resume.pdf"
                className="px-4 py-2 bg-[#60a5fa19] border border-[#60A5FA] text-[#95c4fd] rounded-md text-normal shadow-lg transition-all cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* right side: Education */}
          <div className="lg:w-1/2 w-full bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
            {/* Education */}
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                <IoSchool className="text-lg text-[#8AB4F8]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                Education
              </h3>
            </div>
            <ul className="text-gray-400 mt-6 space-y-2 flex flex-col gap-y-2">
              <li className="rounded-md pl-4 py-2 flex items-start gap-x-4 border-l-3">
                <div className="w-full flex flex-col gap-y-2">
                  <h3 className="text-[#ccc] text-[1.1rem] font-medium">
                    Narbheram Hansraj English School
                  </h3>

                  <div className="flex items-center gap-x-7">
                    <span className="flex gap-x-3 items-center">
                      <p>STD 12</p>
                      <p className="px-2 py-1 text-sm font-semibold bg-[#71a5f8] text-white rounded-md">
                        97.25%
                      </p>
                    </span>

                    <span className="flex gap-x-3 items-center">
                      <p>STD 10</p>
                      <p className="px-2 py-1 text-sm font-semibold bg-[#71a5f8] text-white rounded-md">
                        94.60%
                      </p>
                    </span>
                  </div>
                </div>
              </li>
              <li className="rounded-md pl-4 py-2 flex items-start gap-x-4 border-l-3">
                <div className="w-full flex flex-col gap-y-2">
                  <h3 className="text-[#ccc] text-[1.1rem] font-medium">
                    MIT Academy of Engineering (2022 - 2026)
                  </h3>

                  <div className="flex items-center gap-x-7">
                    <span className="flex gap-x-3 items-center">
                      <p>CGPA</p>
                      <p className="px-2 py-1 text-sm font-semibold bg-[#71a5f8] text-white rounded-md">
                        9.65
                      </p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* lower section */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* left side : coding profile */}
          <div className="lg:w-1/2 w-full bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                <FaCode className="text-base text-[#8AB4F8]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                Coding Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 mt-6">
              {codingProfileData.map((data, index) => (
                <CodingProfileCard
                  key={index}
                  title={data.title}
                  img={data.img}
                  link={data.link}
                  subtitle={data.subtitle}
                  value={data.value}
                />
              ))}
            </div>
          </div>

          {/* right side: Education */}
          <div className="lg:w-1/2 w-full grid grid-rows-2 gap-4 md:grid-rows-[auto_1fr]">
            {/* Row 1: Full-width Heading */}
            <div className="row-span-1 bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-x-3">
                <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                  <BsStack className="text-base text-[#8AB4F8]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                  Key Experties
                </h3>
              </div>

              <div className="mt-3 max-w-full overflow-x-hidden flex items-center gap-x-3">
                {keyExperties.map((item, key) => (
                  <img key={key} src={item} alt={`${item}-logo`} />
                ))}
              </div>
            </div>

            {/* Row 2: Split into 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 row-span-1">
              {/* Column 1 */}
              <div className="bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
                <div className="flex gap-x-3">
                  <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                    <FaLocationDot className="text-base text-[#8AB4F8]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                    Location
                  </h3>
                </div>
                <p className="mt-3 text-[0.95rem] text-[#ccc]">
                  Alandi, Pune, Maharashtra - 412105
                </p>
              </div>

              {/* Column 2 */}
              <div className="bg-[#161B22] p-6 rounded-xl shadow-md border border-gray-700">
                <div className="flex gap-x-3">
                  <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                    <FaLocationDot className="text-base text-[#8AB4F8]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                    Hobbies
                  </h3>
                </div>

                {/* <ul className="mt-3">
                  <li className="flex items-center gap-x-3">Listening Songs <BiHeadphone/></li>
                  <li className="flex items-center gap-x-3">Singing</li>
                  <li className="flex items-center gap-x-3">Playing ESports Games</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* resume modal */}
      {openResumeModal && (
        <ResumeModal
          onClose={() => {
            setIsOpenResume(!openResumeModal);
          }}
          resume={resume}
        />
      )}
    </div>
  );
};

export default AboutSection;
