import ProjectCard from "./ProjectCard";
import food1 from '../assets/food1.png';
import netflims from '../assets/netflims.png';
import shopping from '../assets/shopping.png';


function Project() {
  return (
    <div id="projects" className="pt-[100px] md:pt-[70px]">
      <div className="container max-w-[1200px] mx-auto p-[20px] mb-[0px] md:mb-[100px]">
        <div className="text-center mb-2 md:mb-8">
          <div className="mb-3 text-[#555555]">Browse My Recent</div>
          <div className="text-[40px] md:text-[45px] font-bold">Projects</div>
        </div>
        <div className="flex flex-wrap p-[10px] md:flex md:flex-nowrap gap-9">
          
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/swiggy-clone" img={food1} title="BiteBuddy"/>
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/Netflix-Clone" img={netflims} title="Netflims"/>
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/eCommerce-website" img={shopping} title="Red Store"/>

            
          
        </div>
      </div>
    </div>
  );
}

export default Project;
