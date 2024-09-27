import { FaRegHeart } from "react-icons/fa";

function Footer() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container w-fit mx-auto p-[20px] mb-[10px]">
        <div className="nav-links flex items-center gap-5">
          <ul className="flex flex-col items-center md:flex md:flex-row gap-9 font-semibold md:font-normal  md:text-[1.5rem]">

            <li
              className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
              onClick={() => handleScroll("about")}
            >
              About
            </li>

            <li
              className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
              onClick={() => handleScroll("experiences")}
            >
              Experience
            </li>

            <li
              className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </li>

            <li
              className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </li>

          </ul>
        </div>
      </div>

      <div className="text-center px-[22px] md:px-[1px]">
        <div className="container w-fit mx-auto m-9 text-[#555555]">
          Copyright © 2024 <span className="text-[#d41515]">Priyanshu Shrivastav</span>. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
