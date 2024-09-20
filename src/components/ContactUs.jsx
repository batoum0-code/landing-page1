import React, { useRef, useState } from "react";

// using emailJs to send messages without including any back end 
import emailjs from 'emailjs-com'; // Import EmailJS

// import logo for content
import logo from '../assets/logo/v.png';

// import some icons from reac-icons
import { FaPhone } from 'react-icons/fa';
import { MdOutlineAttachEmail } from "react-icons/md";

const ContactUs = () => {

  //useing useState to handel the hover effect on button 
  const [isHovered, setIsHovered] = useState(false);

  // use useState to store the form data
  const [name, setName] = useState('');
  const [messages, setMessages] = useState('');
  const [address, setAdress] = useState('');

  // get inputs values using useRef for more optimazation
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [errors, setErrors] = useState({});

  // validat form 
  const validatForm = () => {

    setErrors({});

    let isFormValid = true;
    let newErrors = {};
    // get inputs value
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;

    // validate name
    if (!nameValue.trim()) {
      isFormValid = false;
      newErrors.name = 'please your name is required !';
    }
    // validate email
    if (!emailValue.trim()) {
      isFormValid = false;
      newErrors.email = 'please your email required !'
    } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      isFormValid = false;
      newErrors.emailFormat = 'Invalid Email Format !';
    }

    setErrors(newErrors);

    if (isFormValid) {
      setIsHovered(true)
    }

    return isFormValid;
  }

  // return the error message and change the border color depend on the array elements
  const displayError = (feild) => {
    const feildElement = document.getElementById(feild)
    if (errors[feild]) {
      if (feild === 'emailFormat') {
        document.getElementById('email').style.border = '1px solid red';
      } else {
        feildElement.style.border = '1px solid red';
      }
      return <span className="text-red-400 text-[.7rem]">
        {errors[feild]}
      </span>

    } else if (feildElement) {

      feildElement.style.border = '1px solid green'

    }

  }



  // handleSubmit function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatForm()) {
      const serviceID = 'service_je2hkxj';  // Should be EmailJS Gmail service
      const templateID = 'template_fil1xii';
      const userID = 'dPuz_tMr_9bm2OsB7';
      const message = name + ' this is the his message < ' + messages + '  > and this is the address < ' + address + ' > 3endak tlef aba ismail it\'s easy bro 🤪  ';
      const formData = {
        message
      }
      emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
          alert('Message sent successfully!');
        }, (error) => {
          alert('Failed to send message. Please check your configuration.');
          console.log('EmailJS Error: ', error);
        });
    }
  }



  return (
    <div className="w-screen" >
      <div className="flex flex-row">

        {/* start get client infos through form inputs */}

        <div className="md:w-[50%] ">
          <form onSubmit={handleSubmit} className='bg-black/90 h-screen  py-9 px-9 w-full'>
            <div>
              <h3 className='text-[#faf4e9] text-[40px] pb-3'>Get In touch Right Now</h3>
              <p className='text-gray-200 text-[14px]'>Whether you have a question about my products or services, or just want to say <br /> hello,
                feel free to reach out to us using the form below.</p>
            </div>
            <div className='flex flex-col gap-6 justify-center items-cneter py-6'>
              <div className='flex gap-3 justify-center items-center'>


                <div className="name input w-full">

                  <input type="text"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validatForm()}
                    ref={nameRef}
                    id="name"
                    placeholder='Youre name*' className='text-white bg-transparent h-11 w-full  placeholder:text-white/75 border
              border-bandPrimary  outline-none text-[12px] p-3 focus:rounded-md'
                  />
                  {displayError('name')}
                </div>



                <div className="email input w-full">
                  <input
                    onChange={(e) => {
                      validatForm()
                      setAdress(() => e.target.value)
                    }}

                    ref={emailRef}
                    id="email"
                    placeholder='Your address*'
                    className='text-white bg-transparent h-11 w-full  placeholder:text-white/75 border
            border-bandPrimary focus:border-sky-400 outline-none text-[12px] p-3 focus:rounded-md' />
                  {displayError('email')}
                  {displayError('emailFormat')}
                </div>

              </div>

              <div className='flex justify-center'>

                <textarea type="text"
                  onChange={(e) => setMessages(e.target.value)}
                  ref={messageRef}
                  id="message"
                  placeholder='A Few Words' className='text-white bg-transparent h-[200px] w-full placeholder-gray-200 placeholder-[10px] border  
            border-bandPrimary focus:border-sky-400 focus:rounded-md outline-none text-[12px] p-3 ' />

              </div>
            </div>


            {/* start using button from v0-by-vercel */}

            <button
              type="submit"
              className={`
        relative overflow-hidden px-6 py-3 
        font-semibold text-sm
        transition-all duration-300 ease-out
        ${isHovered ? 'text-white/80' : 'text-bandPrimary bg-gray-700'}
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
      `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Git In Tuch Now 🤗</span>
              <div
                className={`
          absolute inset-0 bg-gradient-to-tr from-[#FFA500] via-bandPrimary to-[#ffd700]
          transition-all duration-1000 ease-in-out
          ${isHovered ? 'opacity-100 animate-golden-walk' : 'opacity-0 translate-x-full'}
        `}
              />
              <style jsx>{`
        @keyframes golden-walk {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(0); opacity: 0; }
        }
        .animate-golden-walk {
          animation: golden-walk .5s ease-in-out;
        }
        button::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(45deg, #ffd700, #FFA500);
          z-index: -1;
          filter: blur(10px);
          opacity: 0;
          transition: opacity .9s ease-in-out;
        }
        button:hover::before {
          opacity: 0.7;
        }
      `}</style>
            </button>

            {/* end using button from v0ByBercel */}

          </form>
        </div>

        {/* end get client infos through form inputs */}

        {/* start contact content */}

        <div className=" w-[50%] h-screen ">
          {
            isHovered ? (<div className="w-full h-full ">
              <div
                className={`
      flex flex-col justify-center items-center w-full h-full relative overflow-hidden
      transition-all duration-1000 ease-in-out
      ${isHovered ? 'bg-gradient-to-tr from-[#f21d48] via-[#f21d48] to-[#f21d48]' : 'bg-none'}
    `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div>
                  <p className="text-bandPrimary text-center">Thank you for visiting our website! We appreciate your time and hope you found everything you were looking for. </p>
                </div>
                <img
                  src={logo}
                  alt="logo-img"
                  className="w-80 h-80 relative z-10 transition-transform duration-1000 ease-in-out border-[#f21d48]"
                />
                {/* privecy and conditions */}
                <div className="pt-20 flex flex-col gap-3 justify-between bg-transparent text-white">

                  <span className="text-center">designed and developed by
                    <a href="https://batoum.vercel.app/" className="text-[#ffde03] underline "> batoum samir </a></span>
                  <span className="text-[12px] text-center">
                    © 2024Batoum
                  </span>
                </div>
                <style jsx>{`

                            @keyframes golden-walk {
                            0% { transform: translateX(-100%); opacity: 0; }
                            50% { opacity: 1; }
                            100% { transform: translateX(0); opacity: 0; }
                            }
                            .animate-golden-walk {
                            
                            animation: golden-walk .5s ease-in-out;
                            }

                          `}</style>
              </div></div>)
              :
              (<div className=" flex flex-col gap-8 justify-center items-center h-full w-full bg-gradient-to-r from-black/90 to-black/85 border-l-[.1rem] border-white">
                <div className="w-[550px]">
                  <h2 className="text-slate-200 text-center"> Feel free to ask anything you need through your preferred method or visit our <br />Agence on-site!</h2>
                </div>
                <div className="contact infos flex gap-9">
                  <div className="text-center">
                    <h4 className="text-white"><FaPhone className="inline-block text-[#a8a58c]" /> Phone:</h4>
                    <span className="text-white"> +212 696550985</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white"><MdOutlineAttachEmail className="inline-block text-[#ffde03]" />  Email:</h4>
                    <span className="text-white">gourobusiness0@gmail.com</span>
                  </div>
                </div>
                <div className=" max-h-[300px] ">
                  <iframe
                    className="border-[3px] border-bandPrimary"
                    title="Google Map"
                    width="450"
                    height="350"
                    frameborder="40"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=marrakech+(elite%20access)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                  />
                </div></div>)
          }
        </div>




        {/* end contact content */}



      </div>

    </div>
  );
};

export default ContactUs;






