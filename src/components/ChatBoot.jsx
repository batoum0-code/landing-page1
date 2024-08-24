import React, { useState } from "react";

// import icons from react icons librerry
import { FaWhatsapp } from 'react-icons/fa'

// import website logo
import logo from '../assets/logo/3.png';


const ChatBoot = () => {

  // services phone number 
  const phoneNumber = 212696550985;

    // chat boot displaying management 
    const [showIcon, setShowIcon] = useState(false);

  return <>
    <div className="fixed z-50 bottom-12 right-12 text-white ">

      {/* chat boot element  */}
        <div className={`${showIcon ? "": ""} `}>
            <div className="md:w-[13rem] absolute right-16 bottom-14 
            rounded-2xl shadow-lg shadow-bandPrimary">
              <div className="p-4 rounded-xl bg-black
              border-[0.2rem] border-slate-600">   
                <h2 className=" text-center text-bandPrimary border-b-2 tracking-widest font-extralight">contact our agent throw whatsapp</h2>
                <div className="w-full max-h-[1px] bg-slate-200"></div>
                <div className="text-center">
                  <img src={logo} alt="" />
                </div>
                <div className="text-center">
                <a href={`https://wa.me/${phoneNumber}`}>
                  <button 
                  className="bg-bandPrimary px-4 py-2 
                  rounded-lg text-center hover:text-bandPrimary hover:bg-slate-100
                  md:hover:scale-105 transition-all duration-300 hover:font-semibold">
                    Whatsapp Us 
                  </button>
                </a>
                </div>
              </div>
            </div>
        </div>

        {/* whatsapp icon to display chat boot element above  */}
        <div className="cursor-pointer bg-slate-200 rounded-[100%] p-2 border-dotted border-2 border-bandPrimary ">
            <FaWhatsapp 
            onClick={()=> {setShowIcon(!showIcon)}}
            className="text-[2.6rem] text-green-500"/>
            <div className="w-[6px] h-[6px] bg-red-600 rounded-[50%]"></div>
        </div>
    </div>
  </>;
};

export default ChatBoot;