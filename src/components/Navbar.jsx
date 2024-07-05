import React, {useState, useEffect} from "react";
import logo from '../assets/logo.png';
import { Link} from "react-scroll";

{/* import react icons */}
import { FaXmark, FaBars } from "react-icons/fa6";



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, []);

    // navitems array

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Services", path: "services" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonia", path: "testimonia" },
        { link: "FAQ", path: "faq" },
    ];



    return  (   
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : 
            ""}`}>
            <div className="flex justify-between items-center text-base gap-8">
            <a href="/home" className="text-2xl font-semibold flex items-center space-x-3 ">
            <img src={logo} alt="logo-image" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">BATOUM</span> </a>

            {/* nav items for large devices */}

            <ul className="md:flex space-x-12 hidden">
            {
                navItems.map( ({link, path})=> (
                    <Link key={path} spy={true} smooth={true} offset={-100} 
                    to={path} className="block text-base cursor-pointer text-gray900 
                    hover:text-bandPrimary first:font-meduim " Link>{link}</Link>
                ))
            }
            </ul>
            
            {/* btn for large devices */}

            <div className="space-x-12 hidden lg:flex items-center">
                <a href="/" className="hidden lg:flex items-center text-bandPrimary
                hover:text-gray900">Login</a>
                <button className="bg-bandPrimary text-white py-2 px-4 transition-all duration-300 rounded
                hover:bg-neutralDGrey">Sign up</button>
            </div>

            {/* menu for only mobile devices  */}

            <div className="md:hidden">
                <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="">
                    {
                        isMenuOpen ? (<FaXmark 
                        className=""/>) : (<FaBars 
                        className=""/>)
                        
                    }
                </button>
            </div>
            </div>

            {/* navvgtrfcv items for mobile devices */}

            <div className={`space-y-4 px-4 mt-16 py-2 bg-bandPrimary 
                ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map( ({link, path})=> (
                        <Link to={path} key={path} className="block text-base text-white hover:text-gray900
                        first:font-medium">{link}</Link>
                    ))
                }
            </div>
        </nav>
    </header>
)
};

export default Navbar;
