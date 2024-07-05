import icon1 from '../assets/icons/a.png';
import icon2 from '../assets/icons/b.png';
import icon3 from '../assets/icons/c.png';
import icon4 from '../assets/icons/d.png';
import img from '../assets/1.png';





const About = () => {



    return <div className="my-8">

            {/* about text */}

            <div className="px-4 lg:px-14 md:w-11/12 mx-auto  flex flex-col md:flex-row justify-between items-center gap-12" id="about">
                <div>
                    <img src={img} alt="about-img" />
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

            <div className="px-4 lg:px-14 max-w-screen-2xl  bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
                            Helping a local <br /><span className="text-bandPrimary">buisness reinvent itself</span></h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">We reached
                            here with our hard and dedication.</p>
                    </div>
                    {/* stats */}
                    <div className="w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around ">
                        <div className=" mx-auto flex sm:flex-row flex-col sm:items-center justify-between gap-16">
                            <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img src={icon4} alt="" className='w-10 lg:w-[80px]' />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={icon2} alt="icon-image" className='w-10 lg:w-[80px]' />
                                <div>
                                <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                <p>Event Booking</p>
                                </div>
                            </div>
                            </div>
                            <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img src={icon3} alt="icon-image" className='w-10 lg:w-[80px]'/>
                                <div>
                                <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                <p>Clubs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={icon1} alt="icon-image" className='w-10 lg:w-[80px]' />
                                <div>
                                <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                <p>Payments</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default About;
