import { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import resume from "../../assets/myresume.pdf";
import ResumeModal from "../../components/about_components/ResumeModal";

const AboutSection = () => {
  const [openResumeModal, setIsOpenResume] = useState(false);

  return (
    <div
      id="about"
      className="relative h-screen bg-[#0D1117] flex flex-col items-center justify-center gap-y-8 text-white px-6"
    >
      <h2 className="text-4xl font-bold text-[#E2E8F0] uppercase">About Me</h2>
      <div className="w-[85%] flex flex-col gap-8">
        {/* upper section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* left side : description */}
          <div className="lg:w-1/2 w-full bg-[#161B22] p-8 rounded-xl shadow-md border border-gray-700">
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                <FaUser className="text-lg text-[#8AB4F8]" />
              </div>
              <h3 className="text-3xl font-semibold text-[#8AB4F8]">
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
            <button
              onClick={() => {
                setIsOpenResume(true);
              }}
              className="mt-6 inline-block px-4 py-2 bg-[#60A5FA] text-white rounded-md text-normal shadow-lg hover:bg-[#4F8ED9] transition-all cursor-pointer"
            >
              View Resume
            </button>
          </div>

          {/* right side: Education */}
          <div className="lg:w-1/2 w-full bg-[#161B22] p-8 rounded-xl shadow-md border border-gray-700">
            {/* Education */}
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                <IoSchool className="text-xl text-[#8AB4F8]" />
              </div>
              <h3 className="text-3xl font-semibold text-[#8AB4F8]">
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

            {/* Key Expertise */}
            {/* <h3 className="text-3xl font-semibold text-[#8AB4F8] mt-6">
              Key Expertise
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "TailwindCSS",
                "GSAP",
                "Framer Motion",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1E2531] border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-[#293241] transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </span>
              ))}
            </div> */}
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
