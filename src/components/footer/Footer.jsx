import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="relative bg-purple-500">
      <div className="flex justify-center px-6 md:px-18">
        <img
          src={Images.footerBg}
          alt="Footer Background"
          className="w-full rounded-full object-cover"
        />
      </div>

    
      <div className="absolute top-0 w-full flex justify-center">
        <h1 className="sm:text-[90px] md:text-[120px] lg:text-[150px] font-medium text-[#BFB5F0] tracking-widest text-center">
          LANDS OF COMMITMENT
        </h1>
      </div>

  
      <div className="absolute bottom-20 w-full px-4 sm:px-8 md:px-10 lg:px-12 z-50">
        <div className="bg-white shadow-lg rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            <div className="flex-shrink-0">
              <img
                src={Images.footerLogo}
                alt="Footer Logo"
                className="w-40 md:w-48"
              />
            </div>

            
            <div>
              <p className="text-red-500 font-bold text-2xl mb-2 border-l-4 border-red-500 pl-2">
                USEFUL LINKS
              </p>
              <ul className="text-gray-700 text-lg space-y-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/foundation">Foundation</Link></li>
                <li><Link to="/tgs-school-project">TGS School Project</Link></li>
                <li><Link to="/odkhaan">Odkhaan</Link></li>
                <li><Link to="/greenstraw-house">The Greenstraw House</Link></li>
                <li><Link to="/events-workshops">Events & Workshops</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            
            <div>
              <p className="text-green-500 font-bold text-2xl mb-2 border-l-4 border-green-500 pl-2">
                LEGAL
              </p>
              <ul className="text-gray-700 text-lg space-y-1">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/data-tracking">Data Tracking</Link></li>
              </ul>
            </div>

          
            <div>
              <p className="text-blue-500 font-bold text-2xl mb-2 border-l-4 border-blue-500 pl-2">
                CONTACT US
              </p>
              <p className="text-gray-700">Contact - 094268 63215</p>
              <p className="text-gray-700">Info@Thegreenstraw.Org</p>
              <div className="mt-4 space-y-1">
                <p className="text-gray-700">32, River Front Rd, Usmanpura,</p>
                <p className="text-gray-700">Ahmedabad, Gujarat 380013.</p>
              </div>
              <div className="flex mt-4 space-x-4 text-gray-600">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={23} />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={23} />
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={23} />
                </Link>
                <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={23} />
                </Link>
              </div>
            </div>
          </div>

       
          <div className="flex flex-col text-lg sm:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200 text-gray-500 gap-2">
  <p>THE GREENSTRAW © {currentYear} - All rights reserved</p>
  
  <p className="flex items-center">
    Powered by
    <Link to="https://uptakeinfotech.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
      <img src={Images.uptakeLogo} alt="uptake infotech" className="h-10 w-12 object-contain" />
    </Link>
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Footer;