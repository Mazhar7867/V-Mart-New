import { IconSearch} from "@tabler/icons-react";  
const MainSectionTop =()=>{
    return(
        <div className="h-25 ">
        <div className="flex justify-between ">
            
            <div className="flex mt-4 mb-4 pl-2 pt-2 pb-2 shadow-md rounded-full gap-2 bg-white w-[40%]">
             <div className="text-gray-600">
             <IconSearch/> 
             </div>
                <input className="w-[90%] border-none" type="search" placeholder="Search Products..." />
            </div>
          <div className="bg-white mt-3  mb-3 flex items-center pl-2 pr-2 rounded-md shadow-md ">
        <label className="text-gray-500 " for="cars">sort by : <span className="text-lg text-gray-900">Default</span> </label>
  <select className="w-[50px] border-white" name="cars" id="cars">
    <option  value="volvo"></option>
    <option  value="saab">Last options are here</option>
    <option  value="opel">Last options are here</option>
    <option  value="audi">Last options are here</option>
  </select>
        </div>
            </div>
        </div>
    
    )
}
export default MainSectionTop