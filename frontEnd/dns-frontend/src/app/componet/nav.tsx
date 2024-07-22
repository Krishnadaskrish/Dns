import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "HOME", link: "#" },
    { label: "MENU", link: "#" },
    { label: "MAKE A RESERVATION", link: "#" },
    { label: "CONTACT US", link: "#" },
  ];

  const labelStyles = "font-normal text-[16px] leading-[23.71px] tracking-wider hover:text-[#0796EF]";

  return (
    <div className="bg-[#121618] h-[100px]">
      <div className="flex items-center h-full px-4 md:px-20 justify-between">
        <div className={`flex items-center ${isMobile ? 'mt-[3rem]' : 'mt-12 ml-4'} z-10`}>
          <img src='Logo1.png' alt="Logo" className="h-[50px]" />
          {!isMobile && (
            <div className="ml-2">
              <span className="text-[#0796EF]">DEEP</span> NET <br />
              <span className="text-[#857878]">SOFT</span>
            </div>
          )}
        </div>
        {isMobile ? (
          <button
            className="text-white mr-2"
            onClick={handleMenuClick}
          >
            ☰
          </button>
        ) : (
          menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={`${labelStyles} mt-[3rem] ml-4 text-white`}
            >
              {item.label}
            </a>
          ))
        )}
      </div>
      {mobileMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-20">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={handleMenuClose}
              className={`${labelStyles} block px-4 py-2 text-black`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
