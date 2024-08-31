import React from "react";
import img from '../assets/w.png';
import logo1 from '../assets/a.png';
import logo2 from '../assets/b.png';
import logo3 from '../assets/c.png';
import logo4 from '../assets/d.png';
import logo5 from '../assets/e.png';
import logo6 from '../assets/g.png';
import product from '../assets/elite/4.jpg';

{/* import reveal for react motion scroll */}

import Reveal from "../motion";

const Products = () => {
    return <Reveal>
        <div className="my-16" id="product">
        <div className="px-4 lg:px-14 md:w-11/12 mx-auto  flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="md:w-3/5 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                    The unseen of spending three years at Pixelgrade</h2>
                <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Lorem ipsum dolor
                    sit amet
                    consectetur adipisicing elit. Ab ullam
                    rerum, omnis, iure vitae, necessitatibus
                    tempora nostrum hic quam nihil cumque. Ad
                    autem ab eaque perspiciatis voluptatibus,
                    debitis consequuntur in.</p>
                <button className="btn-primary">Learn More</button>
            </div>
        </div>

        {/* company stats */}

        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/3">
                <img src={product} alt="product-image" className="h-[326px] w-[326px]" />
                </div>


                {/* stats */}

                <div className="md:w-2/3 mx-auto">
                    <div>
                        <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Natus ipsa, ex soluta
                            impedit quisquam ea! Explicabo delectus sint
                            eius voluptatem, assumenda, deleniti ut rerum
                            voluptate reprehenderit consequatur,
                            possimus quidem autem. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Ab,
                            eius quis beatae id asperiores sit obcaecati
                            molestiae voluptatum quam similique est, tenetur
                            aspernatur quaerat esse eum
                            quas aperiam eveniet? Sapiente.</p>
                        <h5 className="text-bandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                        <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>
                        <div>
                            <div className="flex items-center gap-8 flex-wrap">
                                <img src={logo3} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <img src={logo2} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <img src={logo1} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <img src={logo4} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <img src={logo5} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <img src={logo6} alt="logo-image" className="cursor-pointer md:w-16 w-12 hover:scale-125 transition-all duration-300 "/>
                                <div className="flex items-center gap-8">
                                    <a href="/" className=" font-bold text-bandPrimary hover:text-neutral-700">Meet all customers
                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" class="inline-block ml-2"><path d="M12 9.3990L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69195L12 1.39905M15 5.39905L1 5.39905" stroke="green"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </div>

    </div>
    </Reveal>

};

export default Products;
