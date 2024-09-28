import {  techObject1, techObject2 } from "../utils/constants";
import SmallExCard from "./SmallExCard";




export function ExCard1() {
  return (
    <div className="p-7 border-[2px] border-[#A3A3A3] rounded-[2rem] xl:basis-[50%] xl:p-10 w-full sm:w-[400px] mx-auto">

        <div className="text-[#555555] text-center mb-4 sm:mb-10 font-semibold text-[1.75rem]">Skills</div>

        <div className="grid md:grid-cols-2 gap-[20px] sm:gap-[32px]">
            
            {
                techObject1.map((data , i)=>{
                    return <SmallExCard {...data} key={i}/>
                })
            }

        </div>
      
    </div>
  )
}
export function ExCard2() {
  return (
    <div className="p-7 border-[2px] border-[#A3A3A3] rounded-[2rem] xl:basis-[50%] xl:p-10 w-full sm:w-[400px] mx-auto">

        <div className="text-[#555555] text-center mb-4 sm:mb-10 font-semibold text-[1.75rem]">Skills</div>

        <div className="grid md:grid-cols-2 gap-[20px] sm:gap-[32px] text-start">
            
            {
                techObject2.map((data , i)=>{
                    return <SmallExCard {...data} key={i}/>
                })
            }

        </div>
      
    </div>
  )
}

