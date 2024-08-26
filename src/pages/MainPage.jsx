import React from "react";
{/* import Components  */ }
import Home from '../components/Home';
import About from '../components/About';
import Blog from '../components/Blog';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import MyFooter from '../components/MyFooter';
import ChatBoot from "../components/ChatBoot";
import Header from '../components/Header';

const MainPage = () => {

    return <div>
        <Header/>
        <Home/>
        <About/>
        <Products/>
        <Blog/>
        <Newsletter/> 
        <MyFooter />
        </div>;

};

export default MainPage;
