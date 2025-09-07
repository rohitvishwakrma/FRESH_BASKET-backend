
import React from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const companyLinks = [
  { name: "About", path: "/About" },
  { name: "Careers", path: "/careers" },
  { name: "Press", path: "/press" },
  { name: "Blog", path: "/blog" },
  { name: "Partners", path: "/partners" },
];
const supportLinks=[
  { name: "Acessbility", path: "/Accessibility" },
  { name: "ContactUs", path: "/Contactus" },
  { name: "Help", path: "/Help" },
  { name: "ExpiryDate", path: "/NotificationSettings" },
  
];
const TermsPolicyLink=[
  { name: "Terms", path: "Terms&Policy" },
 
]

const Footer = () => {
return (
  <footer className="object-cover bg-white flex justify-center border-e-0 border-gray-200">
    <div className=" bg-gradient-to-tr from-indigo-400 via-purple-500/9 to-pink-700 p-1 rounded-3xl shadow-2xl px-10 transition-all duration-500  ">
      <div className="bg-white/55 dark:bg-gray-100 rounded-3xl   p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-900">
          {/* Brand Info */}
           <div className="w-full text-center lg:text-left transition-all duration-500 hover:scale-111 bg-white/55 rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r border-b-2 border-indigo-500 pb-2 from-indigo-500 to-pink-500 my-5 text-center ">Fresh Basket</h1>
            <p className="text-base dark:text-gray-900  text-center lg:text-left  mb-10 leading-relaxed pb-4 px-10 ">
              Bringing fresh groceries right to your doorstep. Freshness you can trust, service you can love.
            </p>
            {/* Social Icons Row */}
               <div className="flex  align-centere justify-between gap-5 text-gray-950 mx-10 px-10">
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/rohi8_vishwakarma/" target="_blank" rel="noopener noreferrer" className=" hover:text-pink-500 transition-transform  text-pink-500 transform hover:scale-150">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </a>

              {/* Github Icon */}
              <a href="https://github.com/rohitvishwakrma" target="_blank" rel="noopener noreferrer" className="text-gray-500  hover:text-gray-500 transition-transform transform hover:scale-150">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.012-1.243-.018-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.527.118-3.183 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.656 1.656.244 2.88.12 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.623-5.475 5.92.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .323.216.698.825.58C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/rohit-vishwakarma-915143288/"target="_blank" rel="noopener noreferrer" className="text-blue-700  hover:text-blue-700 transition-transform transform hover:scale-150">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
             <p className="mt-4 text-sm px-9 mb-5 dark:text-gray-900 ">
                 <i className="ri-account-circle-line "> Stay as long as you love freshness.
            </i> </p>
          </div>

          {/* Company Links */}
           <div className="w-full text-center lg:text-left transition-all duration-500 hover:scale-111 bg-white/55 px-2 rounded-xl shadow-lg">
               <p className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r border-b-2 border-indigo-500 pb-2 from-indigo-500 to-pink-500 my-5 text-center ">COMPANY</p>
            <ul className="mt-4 flex flex-col gap-3 lg:text-left px-10 text-base  ">
                {companyLinks.map(({ name, path }) => (<li key={name}>
                  <a   className="hover:text-pink-700 transition-colors" href={path}>
                    {name }</a>  
                </li>))}
            </ul>
             <p className="mt-4 text-sm px-7 mb-2 dark:text-gray-900 ">
                 <i className="ri-account-circle-line "> Service running. Your choice always.
            </i> </p>
          </div>

          {/* Support Links */}
          <div className=" w-full text-center lg:text-left transition-all duration-500 hover:scale-111 bg-white/55 px-2 rounded-xl shadow-lg">
             <p className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r border-b-2 border-indigo-500 pb-2 from-indigo-500 to-pink-500 my-5 text-center ">SUPPORT</p>
             <ul className=" flex flex-col gap-3 lg:text-left px-10 text-base">
                {supportLinks.map(({ name, path }) => (<li key={name}>
                  <a className="hover:text-pink-700 transition-colors " href={path}>
                    {name}</a>  
                </li>))}
            </ul>
             <p className="mt-12 text-sm px-7  text-gray-500 text-wrap-reverse dark:text-gray-900 ">
                 <i className="ri-account-circle-line "> Your issue, our priority.Contact freely.
            </i> </p>
          </div>

          {/* Stay update */}
          <div className="w-full text-center lg:text-left transition-all duration-500 hover:scale-111 bg-white/55 px-2  rounded-xl wrap-break-word shadow-lg hover:shadow-x">
            <p className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r border-b-2 border-indigo-500 pb-2 from-indigo-500 to-pink-500 my-5 text-center ">STAY UPDATED</p>
            <p className="text-base text-gray-600 dark:text-gray-900 text-center lg:text-left  leading-relaxed px-5">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            {/* <form className="flex flex-col items-center px-6 gap-2 mt-3 ">
              <input
                type="email"
                className="w-full border border-white dark:border-gray-700 rounded px-2 py-2  lg:leading-2.5 focus:outline- focus:ring-4 focus:ring-pink-400 dark:bg-gray-800 dark:text-white text-lg"
                placeholder="Enter your email"
                required
                  />
                    <button
                   type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 to-pink-500  text-white py-2 font-normal rounded transition-all duration-300"
                 >
              Subscribe
                  </button>
            </form> */}
             <form className="flex flex-col items-center px-7 gap-2 mt-1">
                <input
                  type="email"
                  className="w-full flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  
                  className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-all"
                >
                  Subscribe
                </button>
              </form>
            <p className="mt-4 text-sm px-5 mb-5 text-gray-500 dark:text-gray-900">
                 <i className="ri-account-circle-line "> We respect your privacy. Unsubscribe anytime.
            </i> </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-500 dark:border-gray-300  mt-10" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-3 text-sm  text-gray-900 d">
          <p> <i className="ri-focus-2-fill"></i>{new Date().getFullYear(2025)}  Fresh Basket. All rights reserved.</p>

        {/* base parts  */}
          <ul className="flex items-center gap-5">
           {TermsPolicyLink.map(({ name, path }) => (
              <li key={name}>
                <a href="/Terms&Policy" className="hover:text-pink-700 transition-colors">{path}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);


};
export default Footer;
