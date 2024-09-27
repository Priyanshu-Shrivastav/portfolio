import { SiLinkedin } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/resume.pdf";

function Hero() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className=" flex items-center justify-center w-full h-full m-auto">
      <div className="flex flex-wrap p-5 mt-[130px] md:flex md:mt-[190px] md:mb-[50px] gap-[2rem] md:gap-[5.75rem]">
        <div className=" col-1 md:w-[400px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src="src\assets\formal3.png"
            alt="Profile"
          />
        </div>
        <div className="col-1 flex flex-col items-center justify-center  text-center gap-[20px] md:gap-[25px]">
          <div className="font-semibold text-[#555555] text-[18px] tracking-tight">
            Hello , I'm 👋
          </div>
          <div className="font-bold text-[40px] tracking-tight mb-1 md:mb-0">
            Priyanshu Shrivastav<span className="hidden md:inline">🚀</span>
          </div>
          <div className="font-semibold text-[1.5rem] md:text-[1.75rem]  text-[#555555] tracking-tight">
            I'm a{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Computer Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: "#d41515", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </div>

          <div className="buttons flex gap-[1rem]">
            <button className="rounded-full border-[2px] border-[#353535] py-3 px-4 text-[14px] font-semibold tracking-tight hover:bg-black hover:text-white hover:duration-500 hover:transition-all">
              {" "}
              <a href={resume} download="priyanshu-cv">
                Download CV
              </a>
            </button>
            <button onClick={() => handleScroll('contact')} className="rounded-full border border-[#353535]  py-3 px-4 bg-[#353535] text-[14px] text-white font-semibold tracking-tight">
              Contact Info
            </button>
          </div>

          <div className="mt-[10px] flex gap-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/priyanshu-shrivastav-4b7141218/"
            >
              <SiLinkedin fontSize={27} />
            </a>

            <a target="_blank" href="https://github.com/Priyanshu-Shrivastav">
              <FaSquareGithub fontSize={27} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
