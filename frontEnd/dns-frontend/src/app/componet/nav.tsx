'use client';
import {useState} from 'react';

function nav() {

    
  const [activeLink, setActiveLink] = useState<string>('Home');

  return (
    <div>
        <div style={{backgroundColor:'#121618'}} className="h-[100px] w-full">
       
        <div className="flex justify-end gap-8 text-[15px] md:pt-[61px] pr-[120px] font-Oswald">
        {['HOME', 'MENU', 'MAKE A RESERVATION', 'CONTACT US'].map((link) => (
              
                <h4
                  key={link}
                  onClick={() => setActiveLink(link)}
                  style={{ color: activeLink === link ? '#0796EF' : 'white' }}
                  className="cursor-pointer"
                >
                  {link}
                </h4>
         
            ))}
        </div>
        <div className='flex justify-start'>
            <img className='z-[1] md:ml-[240px] md:mt-[-20px]' src='Logo1.png' />
        </div>
        <div className='flex justify-start'>
        <img className='z-[1] h-[70px] md:ml-[340px] md:mt-[-75px]' src='deep.png' />
        </div>
      </div>
    </div>
  )
}

export default nav