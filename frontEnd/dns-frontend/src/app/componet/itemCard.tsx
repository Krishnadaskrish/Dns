// components/ItemCard.tsx
import React from 'react';

interface ItemCardProps {
  title: string;
  image1: string;
  image2: string;
  top: boolean;
  items : any;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, image1, image2, top ,items }) => {
  return (
    <>
      <div className="relative px-0 md:px-20 py-3 bg-black overflow-hidden">
        <div
          className="relative md:mx-10 mx-3 border border-white rounded-lg shadow-lg"
          style={{ backgroundImage: "url('bg.png')" }}
        >
          <div className="md:w-40 w-20 md:h-40 h-20 absolute md:bottom-[-20px] bottom-0 right-[-10px]">
            <img
              className="w-full h-full object-contain"
              src={image1}
              alt=""
            />
          </div>
          <div className="md:w-40 w-20 md:h-40 h-20 absolute md:top-[-40px] top-[-20px] md:left-[-40px] left-[-20px]">
            <img
              className="w-full h-full object-cover"
              src={image2}
              alt=""
            />
          </div>
          <div className="w-full h-fit flex justify-center items-center gap-5 p-1 relative">
            <div className="text-[#544C4C] w-32 h-1 bg-[#544C4C]"></div>
            <h2
              className="text-[60px] font-bold text-center my-16 text-white"
              style={{ fontWeight: 'bold', fontSize: '653 bg-white', textShadow: '4px 3px #800020' }}
            >
              {title}
            </h2>
            <div className="text-[#544C4C] w-32 h-1 bg-[#544C4C]"></div>
          </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 pb-10">
                    {items.map((category:any) => (
                        <div key={category._id}>
                        <div className="flex justify-between items-center py-2 px-4 rounded-md">
                <p className="text-lg font-medium text-white">
                  {category.title}
                  {Array(Math.max(0, 10 - category.title.length)).fill(".").join("")}
                </p>
                <p className="text-lg font-medium text-white">
                  ${category.price}
                </p>
              </div>
  
                  <div className="flex justify-between items-center py-2 px-4 rounded-md">
                    <p className="text-lg font-medium text-[#7B7B7B]">
                      {category.menuItems.map((item:any, itemIndex:any) => (
                        <span key={item._id} style={{fontFamily:"Kelly Slab, sans-serif"}}>
                          {item.name}
                          {itemIndex !== category.menuItems.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;