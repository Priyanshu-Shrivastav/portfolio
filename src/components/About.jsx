import { IoRibbonSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import programmer from '../assets/programmer.gif';

function About() {
  return (
    <div id="about" className="pt-[100px] md:pt-[70px]">
      <div className="container max-w-[1200px] mx-auto md:p-[20px] md:mb-[50px]">
        <div className="text-center md:mb-12">
          <div className="mb-3 text-[#555555]">Get To Know More</div>
          <div className="text-[40px] md:text-[45px] font-bold">About Me</div>
        </div>
        <div className="flex flex-wrap p-5 columns-2 xl:flex xl:flex-nowrap gap-3">
          <div className="mb-[10px] mx-auto xl:basis-[40%]">
            <div className="md:w-[400px] md:h-[400px] rounded-[30px] overflow-hidden border-[2px] border-[#A3A3A3]">
                <img
                className="w-full h-full object-contain"
                src={programmer}
                alt=""
                />
            </div>
            
          </div>
          <div className=" xl:basis-[60%]">
            <div className="columns-2 grid grid-col-1 md:flex md:flex-wrap xl:grid xl:grid-cols-2 my-8 gap-[20px] sm:gap-[35px]">
              <div className="flex flex-col items-center sm:text-center flex-1 p-7 border-[2px] border-[#A3A3A3] rounded-[2rem] gap-2 mx-auto mb-[11px] sm:mb-0">
                <IoRibbonSharp fontSize={32} />
                <div className="font-bold">Experience</div>
                <div className="text-[#555555]">Frontend Development intern</div>
                <div className="text-[#555555]">Ecrox Technologies Corporation</div>
              </div>
              <div className="flex flex-col items-center flex-1 p-4 md:p-3 border-[2px] border-[#A3A3A3] rounded-[2rem] gap-2 text-center mx-auto">
                <PiStudentBold fontSize={32} />
                <div className="font-bold">Education</div>
                <div className="text-[#555555]">Bachelor's in Computer Engineering</div>
                <div className="text-[#555555]">Vadodara Institute of Engineering</div>
              </div>
            </div>

            <div className="p-[12px] text-justify text-[#555555] sm:w-[85%]  mx-auto">
            <span className="text-[18px]">🌟</span> I'm a passionate web developer focused on creating dynamic, user-friendly websites. I love solving problems and turning ideas into functional digital experiences. <span className="text-[18px]">🚀</span> Always eager to learn, I thrive on keeping up with the latest trends. Let’s collaborate and bring your vision to life! <span className="text-[18px]">😁</span><span className="text-[18px]">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
