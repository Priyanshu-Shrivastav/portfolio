import ProjectCard from "./ProjectCard";


function Project() {
  return (
    <div id="projects" className="pt-[100px] md:pt-[70px]">
      <div className="container max-w-[1200px] mx-auto p-[20px] mb-[0px] md:mb-[100px]">
        <div className="text-center mb-2 md:mb-8">
          <div className="mb-3 text-[#555555]">Browse My Recent</div>
          <div className="text-[40px] md:text-[45px] font-bold">Projects</div>
        </div>
        <div className="flex flex-wrap p-[10px] md:flex md:flex-nowrap gap-9">
          
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/swiggy-clone" img="src\assets\food1.png" title="BiteBuddy"/>
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/Netflix-Clone" img="src\assets\netflims.png" title="Netflims"/>
          <ProjectCard link="https://github.com/Priyanshu-Shrivastav/eCommerce-website" img="src\assets\shopping.png" title="Red Store"/>

            
          
        </div>
      </div>
    </div>
  );
}

export default Project;