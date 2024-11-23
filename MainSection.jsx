
import {  IconCarambolaFilled } from "@tabler/icons-react";  

const MainSection = (props)=>{

    return(
        
        <div className="bg-white">
            <div className="border border-gray-100 shadow-md p-4  rounded-md py-2 px-2 mb-5">            
                <div className="h-[]">
            <img className="h-[] " src={props.imgUrl} />
            </div>
            
            <div className="flex">

            <div className="bg-pink-100 flex rounded-full py-1 px-2 gap-1 items-center mt-1 mb-1 text-sm">
           <div className="text-sm text-red-600 text-bold">{props.name}</div>
            </div>
            </div>
    
            <div className="text-gray-600 ">{props.information}</div>

                <div className="flex">
                  <div className="bg-green-100 flex rounded-full py-1 px-2 gap-1 items-center mt-1 mb-1 text-sm ">
                     <div className="text-yellow-400 ">

                     <IconCarambolaFilled
                      size={16}/>
                      </div>
                      {props.rating}
                 </div>
            </div>
    
            
            <div className="flex justify-between">
                <div className="text-bold text-lg">{props.price}</div>
                
            </div>
            </div>

            </div>

        
        )
        }
export default MainSection;