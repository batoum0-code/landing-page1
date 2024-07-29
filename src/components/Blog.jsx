import React from "react";

{/* import images */ }
import img1 from '../assets/product1.jpg';
import img2 from '../assets/product2.png';
import img3 from '../assets/product3.png';

{/* import reveal for react motion scroll */}

import Reveal from "../motion";

const Blog = () => {


  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: img1
    },
    {
      id: 2,
      title: "What are your safeguarding responsibilities and how can you manage then?",
      image: img2
    },
    {
      id: 3,
      title: "Removing the Membership Model Triathlon Australia",
      image: img3
    }
  ]


  return <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-16" id="faq">
      <Reveal>
    <div className="text-center md:w-1/2 mx-auto">
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is new marketing</h2>
      <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
        The Batoum blog is the best place to read about the latest membership insghts, trends and
        more , See who's joining the community, read about how our community are inreasing their membership
        incore and lots more
      </p>
    </div></Reveal>

    <Reveal>
    {/* all blogs */}
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
      {
        blogs.map((blog) => {
          return <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image} alt="blog-image" className="lg:w-[360px] lg:h-[300px] hover:scale-95 transition-all duration-300" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
            absolute right-0 left-0 -bottom-[60px]">
              <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
              <div className="flex items-center justify-center gap-8">
                <a href="/" className="font-bold text-bandPrimary hover:text-neutral-700">
                  Read More
                  <svg
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path d="M12 9.3990L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69195L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />

                  </svg>
                </a>
              </div>
            </div>
          </div>
        })
      }
    </div></Reveal>
  </div>
  
};

export default Blog;
