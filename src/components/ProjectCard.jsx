import DismissibleAlert from "./DismissibleAlert";
import { useState } from "react";

function ProjectCard({ link, img, title, webUrl }) {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const showAlert = () => {
    setIsAlertVisible(true);
  };

  const handleDismiss = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="relative p-[15px] border-[2px] border-[#A3A3A3] rounded-[2rem] md:basis-[27%] md:p-10 text-center m-auto ">
      <div>
        <div className="rounded-[2rem] overflow-hidden">
          <img className="w-full h-full object-contain" src={img} alt={title} />
        </div>
        <div className="m-4 text-[1.5rem] md:text-[1.75rem] font-semibold">
          {title}
        </div>
        <div className="flex gap-3 items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="rounded-full w-[8rem] border-[2px] border-[#A3A3A3] py-3 px-4 text-[12px] font-semibold tracking-tight hover:bg-black hover:text-white hover:duration-500 hover:transition-all">
              Github
            </button>
          </a>

          <a href={webUrl} target="_blank">
            <button
              // onClick={showAlert}
              className="rounded-full w-[8rem] border-[2px] border-[#A3A3A3] py-3 px-4 text-[12px] font-semibold tracking-tight hover:bg-black hover:text-white hover:duration-500 hover:transition-all"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>

      {/* Only render the alert when isAlertVisible is true */}
      {isAlertVisible && (
        <div className="absolute top-[6rem] left-0 right-0 mx-auto p-4">
          <DismissibleAlert
            isVisible={isAlertVisible}
            onDismiss={handleDismiss}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
