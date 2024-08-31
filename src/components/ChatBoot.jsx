import React, { useState } from "react";

// import icons from react icons librerry
import { FaWhatsapp } from 'react-icons/fa'

// import website logo
import logo from '../assets/logo/d.png';


const ChatBoot = () => {

  // services phone number 
  const phoneNumber = 212696550985;

    // chat boot displaying management 
    const [showIcon, setShowIcon] = useState(false);

  return <>
    <div className="fixed z-50 bottom-12 right-12 text-white">

      {/* chat boot element  */}
        <div className={`${showIcon ? "": "hidden"}`}>
            <div className="md:w-[13rem] absolute right-16 bottom-14 shadow-md
            rounded-xl  shadow-bandPrimary">
              <div className="p-4 rounded-xl bg-black/95 flex items-center justify-center flex-col
              border-[0.1rem] border-bandPrimary">   
                <h2 className=" text-center text-xs pb-3 text-white border-b-[.1px] tracking-normal rounded-lg 
                md:font-medium border-white">Contact our agent through WhatsApp</h2>
                
                <div className="">
                  <img src={logo} alt="logo-img" className="  rounded-[100%]" />
                </div>
                <div className="text-center">
                <a href={`https://wa.me/${phoneNumber}`}>
                  <button 
                  className="bg-bandPrimary px-9 py-2 tracking-widest font-mono
                  rounded-lg text-sm  hover:text-bandPrimary hover:bg-slate-100 hover:text-black/95
                  md:hover:scale-105 transition-all duration-300 hover:font-semibold ">
                    Whatsapp Us 
                  </button>
                </a>
                </div>
              </div>
            </div>
        </div>

        {/* whatsapp icon to display chat boot element above  */}
        <div 
        onClick={()=> {setShowIcon(!showIcon)}}
        className="cursor-pointer bg-slate-100 rounded-[100%] p-2 border-dotted border-2 border-bandPrimary 
        hover:border-black/95 hover:border-[.3rem] transition-all duration-300 hover:bg-white ">
            <FaWhatsapp 
            className="text-[2.6rem] text-green-500 hover:text-bandPrimary"/>
            <div className="w-[6px] h-[6px] bg-red-600 rounded-[50%]"></div>
        </div>
    </div>
  </>;
};

export default ChatBoot;