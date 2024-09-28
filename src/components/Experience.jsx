import {ExCard1 , ExCard2} from "./ExCard";


function Experience() {
  return (
    <div id="experiences" className="pt-[70px] md:pt-[70px]">
      <div className="container max-w-[1200px] mx-auto p-[20px] md:mb-[10px]">
        <div className="text-center mb-4 md:mb-12">
          <div className="mb-3 text-[#555555]">Explore My</div>
          <div className="text-[35px] sm:text-[45px] font-bold">Experience</div>
        </div>
        <div className="flex flex-col px-5 xl:p-5 xl:flex xl:flex-row gap-7">
          
          <ExCard1 />
          <ExCard2 />

            
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
