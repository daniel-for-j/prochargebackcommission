import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";




const Navbarx = ({ isTopOfPage, selectedPage, setSelectedPage }) => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";


  const [backgroundColor, setBackgroundColor] = useState("blue")

window.addEventListener('scroll', ()=>{
//  if (window.scrollY > 400) {
//   setBackgroundColor("red")
//  } else if (window.scrollY < 400) {
//   setBackgroundColor("blue")
//  }
//  if (window.scrollY > 1400) {
//   setBackgroundColor("yellow")
//  } if (window.scrollY > 5700) {
//   setBackgroundColor('green')
//  }
//  if (window.scrollY > 7600) {
//   setBackgroundColor('pink')
//  }

 
})


  return (
    
    
    <nav className={`${navbarBackground} z-40 w-full fixe top-0 py-6 ` }  >
      
    <div className={backgroundColor} class="bg-[#e9f6ff] radius">
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        {/* <h4 className="font-playfair text-3xl font-bold">JE</h4> */}
        <img src="logo.jpg" alt="" className="w-[28%]  xl:w-[10%] 2xl:w-[10%] md:w-[15%] sm:w-[19%]"/>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-[1.1rem] font-semibold">
           
           <Link to="/About">
                About
           </Link>

           <Link to="/About">
                <p>Services</p>
           </Link>

           <Link to="/About">
               <p>Reviews</p>
           </Link>

           <Link to="/About">
                <p>News</p>
           </Link>

           <Link to="/About">
                <p>Articles</p>
           </Link>
            
          </div>
        
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <i className="ri-menu-3-line text-[1.6rem]"></i>
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </button>

          
        )}
        
      

       
        
        {/* MOBILE MENU POPUP */}
       
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] bg-black/10 backdrop-blur-lg">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <i className="ri-close-line text-[1.6rem]"></i>
              </button>
            </div>

            
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%]  text-deep-blue font-opensans text-[1.1rem] font-semibold ">
            <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
            <Link to="/About">
               <p className="text-[#030d26]">About</p> 
           </Link>
           </motion.div>
           
            
           <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
           <Link to="/About">
           <div className='pt-2'>
                <img src=".png" alt="" className='text-white'/>
              </div>
                <p className="#030d26">Services</p>
           </Link>
            </motion.div> 

            <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
            <Link to="/About">
               <p className="text-[#030d26]">Reviews</p>
            </Link>
           </motion.div>


           <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
           <Link to="/About">
                <p className="text-[#030d26]">News</p>
           </Link>
           </motion.div>

           <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
           <Link to="/About">
                <p className="text-[#030d26]">Articles</p>
           </Link>
           </motion.div>

           <motion.div
                className="md:w-1/3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
           <Link to="/About">
                <p className="text-[#030d26]">Contact Us</p>
           </Link>
           </motion.div>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbarx;
