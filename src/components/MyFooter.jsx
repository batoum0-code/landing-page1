{/* import brand logo */}
import logo from '../assets/logo/c.png';

{/* import flowbite elements */ }
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram,BsTiktok } from "react-icons/bs";

const MyFooter = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-8'>
                    <a href="/" className="md:text-3xl text-2xl font-semibold flex items-center space-x-3">
                    <img src={logo} alt="logo-image" className="w-16 inline-block items-center" />
                    <span className="text-[#263238] font-mono">ELITE ACCESS</span> </a>
                    <div>
                        <p className='mb-1'>© 2023-2024 | Copyright | Fidealis.</p>
                        <p>All rights reserved</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Elite Access</Footer.Link>
                                <Footer.Link href="#">address</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Facebook</Footer.Link>
                                <Footer.Link href="#">Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="https://batoum.vercel.app/" by="Batoum" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} className='text-blue-600'/>
                        <Footer.Icon href="#" icon={BsInstagram} className='text-pink-600'/>
                        <Footer.Icon href="#" icon={BsTiktok} className='text-slate-600'/>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default MyFooter;
