import { FcApproval } from "react-icons/fc";




function SmallExCard({tech , level}) {
  return (
    <div className="items flex md:flex gap-3 justify-center align-center relative">
      <div className="absolute left-[20px] sm:left-[70px] md:max-xl:left-[-13px] xl:left-[20px]  top-[5px]">
        <FcApproval fontSize={25} />
      </div>
      
      <div className="">
        <div className="font-semibold text-[1.17rem]">{tech}</div>
        <div className="text-[#555555]">{level}</div>
      </div>
    </div>
  );
}

export default SmallExCard;
