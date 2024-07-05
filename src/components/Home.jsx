import React from "react";
import { Carousel } from "flowbite-react";
import img1 from '../assets/0.png';
import img2 from '../assets/1.png';
import img3 from '../assets/2.png';

const Home = () => {
  return (

    
    <div className="bg-neutralSilver" id="home">
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
    
      <Carousel className="w-full mx-auto">
        <div className="my-28 md:my8 py-12 flex h-full items-center justify-center 
        flex-col md:flex-row-reverse gap-12">
          <div>
            <img src={img1} alt="image-banner1" className="" />
          </div>
          {/* hero text */}
          <div className="md:w-full">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey 
            md:w-3/4 leading-snug">Lessons and insights <span className="text-bandPrimary leading-snug">from 8 years</span> </h1>
            <p className="text-neutralDGrey text-base mb-8">Where to go 
              grow your busines as a photographer: site social media  </p>
              <button className="btn-primary">Register</button>
          </div> 
        </div>
        <div className="my-28 md:my8 py-12 flex h-full items-center justify-center 
        flex-col md:flex-row-reverse gap-12">
          <div>
            <img src={img2} alt="image-banner1" className="" />
          </div>
          {/* hero text */}
          <div className="md:w-full">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey 
            md:w-3/4 leading-snug">Learn and Earn Money <br/> <span className="text-bandPrimary leading-snug">in 4 Mounths</span> </h1>
            <p className="text-neutralDGrey text-base mb-8">Where to go 
              grow your busines as a photographer: site social media  </p>
              <button className="btn-primary">Register</button>
          </div> 
        </div>
        <div className="my-28 md:my8 py-12 flex h-full items-center justify-center 
        flex-col md:flex-row-reverse gap-12">
          <div>
            <img src={img3} alt="image-banner1" className="" />
          </div>
          {/* hero text */}
          <div className="md:w-full">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey 
            md:w-3/4 leading-snug">Lessons and insights <span className="text-bandPrimary leading-snug">from 8 years</span> </h1>
            <p className="text-neutralDGrey text-base mb-8">Where to go 
              grow your busines as a photographer: site social media  </p>
              <button className="btn-primary">Register</button>
          </div> 
        </div>
      </Carousel>

    </div>
    </div>
  );
};

export default Home;
