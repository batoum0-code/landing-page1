import React from "react";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const Services = () => {


    const services = [
        {
            id: 1,
            title: "Membership Organisation",
            description: "Our membership management software provides full automation of membership renwals and payments",
            img: logo1,
        },
        {
            id: 1,
            title: "Ntional Associacion",
            description: "Our membership management software provides full automation of membership renwals and payments",
            img: logo5,
        },
        {
            id: 1,
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renwals and payments",
            img: logo3
        },
    ]





    return <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="services">
        <div className="text-center my-8">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
            <p className="text-neutralGrey ">We have been working some Forture 500+ clients</p>
            {/* company logo */}
            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <img src={logo1} alt="company-logo" className="w-20" />
                <img src={logo2} alt="company-logo" className="w-20" />
                <img src={logo3} alt="company-logo" className="w-20" />
                <img src={logo4} alt="company-logo" className="w-20" />
                <img src={logo2} alt="company-logo" className="w-20" />
                <img src={logo5} alt="company-logo" className="w-20" />
                <img src={logo2} alt="company-logo" className="w-20" />
            </div>

            {/* services card */}

            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
                    Manage your entire comunity in : single system
                </h2>
                <p className="text-neutralGrey">
                    Who is Nextcent suitable for?
                </p>
            </div>

            {/* cards */}

            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(({ id, title, description, img }) => (
                        <div key={id} className="px-4 py-8 text-center md:w-[300px]
                        mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4
                        hover:border-indigo-700 transition-all flex items-center justify-center
                        h-full">
                            <div>
                                <div className="bg-[#E8F5E9] mb-4 h-14 w-1/4 mx-auto rounded-tl-3xl"><img src={img} alt="" /></div>
                                <h1 className="text-2xl">{title}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    </div>;
};

export default Services;
