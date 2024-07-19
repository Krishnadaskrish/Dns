import CustomButton from '../shared/button';
import cardbg from '../../../public/bg.png'
interface ItemCardProps {
    item:  Array<string>;
  }

  const flavor: React.FC<ItemCardProps> = ({ item }) => {
  return (
        
      <div className="relative md:px-20  md:py-10 py-2  px-4  bg-black">
        <div className="relative   border flex flex-col justify-center items-center  py-10 border-white  rounded-lg shadow-lg " style={{backgroundImage:`url(${cardbg})`}}>
            <img src='flavor.png' alt="" />
           <div className="flex justify-center md:gap-5 gap-2  text-white">
            {item.map((value:any,index:any)=>(
                <h5 key={index}className=" md:text-2xl text-[10px]">{value}</h5>
            ))}
           </div>
        </div>
        <div className="w-full  flex justify-center p-10">

        <CustomButton content={"ORDER ONLINE"}/>
        </div>
        </div>
  )
}

export default flavor;