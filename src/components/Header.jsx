import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar shadow-md !fixed !top-0 p-4 w-[100vw] bg-white z-[999999]">
      <div className="max-w-[1200px] m-auto ">
        <nav className="flex justify-between w-full items-center relative">
          <div className="logo">
            <div className="font-normal text-[1.7rem] md:text-[2rem]">
              &lt;Priyanshu /&gt;
            </div>
          </div>

          {/* Mobile menu (res-nav) */}
          <div
            className={`res-nav flex flex-col justify-right bg-white/30 backdrop-blur-md absolute w-[300px] h-screen top-[-15px] right-[-15px] md:hidden transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } overflow-y-auto`}
          >
            {/* Menu close button */}
            <div className="flex justify-end p-8">
              <button onClick={toggleMenu}>
                <ImCross fontSize={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-11 p-6 font-semibold text-[1.5rem]">
              <li
                className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  handleScroll("about");
                }}
              >
                About
              </li>

              <li
                className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  handleScroll("experiences");
                }}
              >
                Experience
              </li>

              <li
                className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  handleScroll("projects");
                }}
              >
                Projects
              </li>

              <li
                className="hover:text-[#d41515] relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#d41515] hover:after:left-0 hover:after:bottom-[-24px] after:transition-all after:duration-500 cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  handleScroll("contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Desktop menu */}
          <div className="nav-links flex items-center gap-5">
            <ul className="hidden md:flex gap-9 font-normal text-[1.5rem] ">
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
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <TfiMenu fontSize={24} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
