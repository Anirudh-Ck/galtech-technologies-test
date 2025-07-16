import React from 'react';
import { FaInstagram, FaTiktok, FaMeta } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="bg-[#f9f6f3] relative overflow-visible">
      {/* VIP SIGNUP BOX */}
      <div className="absolute w-full -top-[180px] md:-top-[150px] z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 ">
          <div className="bg-white text-[#ff5000] p-8 md:p-12 rounded-[2.5rem] border border-[#ff5000] shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              {/* LEFT: TEXT */}
              <div className="md:w-1/2">
                <h2 className="text-[34px] md:text-[48px] font-extrabold leading-none tracking-tighter mb-3">
                  GET ON THE VIP LIST
                </h2>
                <p className="text-sm">
                  Sign up for 15% off and be the first to know about our latest offers & news
                </p>
              </div>

              {/* RIGHT: FORM */}
              <div className="md:w-1/2 flex flex-col items-start md:items-end w-full gap-3">
                <div className="flex flex-col md:flex-row w-full gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-6 py-3 rounded-full border border-[#ff5000] outline-none w-full md:w-1/2"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-6 py-3 rounded-full border border-[#ff5000] outline-none w-full md:w-1/2"
                  />
                </div>
                <button className="bg-[#ff5000] text-white font-bold py-3 px-10 rounded-full w-full hover:opacity-90 transition">
                  SIGN UP
                </button>
                <p className="text-xs text-[#ff5000]">
                  *By signing up, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      <div className="bg-[#ff5000] pt-[17em] md:pt-[10em] pb-12 mt-[260px] md:mt-56 z-10 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-sm text-white">
            {/* SHOP */}
            <div>
              <h3 className="font-bold mb-2">SHOP</h3>
              <ul className="space-y-1 text-[12px]">
                <li className=' '>Lip</li>
                <li>Face</li>
                <li>Kits</li>
                <li>Shop All</li>
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="font-bold mb-2">ABOUT</h3>
              <ul className="space-y-1 text-[12px]">
                <li>Our Story</li>
                <li>Clinically Proven</li>
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="font-bold mb-2">HELP</h3>
              <ul className="space-y-1 text-[12px]">
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex md:justify-end items-start gap-6 text-2xl">
              <FaMeta />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
