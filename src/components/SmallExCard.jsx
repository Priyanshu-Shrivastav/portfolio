import { BsPatchCheckFill } from "react-icons/bs";




function SmallExCard({tech , level}) {
  return (
    <div className="items flex md:flex gap-3 justify-center align-center relative">
      <div className="absolute left-[20px] top-[5px]">
        <BsPatchCheckFill fontSize={25} />
      </div>
      
      <div className="">
        <div className="font-semibold text-[1.17rem]">{tech}</div>
        <div className="text-[#555555]">{level}</div>
      </div>
    </div>
  );
}

export default SmallExCard;
