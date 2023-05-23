
import React from 'react'
import Navbarx from './Navbarx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer';
import {useState, useEffect } from "react"
import { ScaleLoader } from 'react-spinners';

const About = () => {



  const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> {
           setIsLoading(false)

        },5000)
   }, [])


  return (
    <div>
      {isLoading ? (
        
        
        <div className='flex justify-center mx-auto  bg__Load backdrop-blur-lgw-full h-[100vh] pt-[75%] xl:pt-[25%] 2xl:pt-[25%] lg:pt-[25%] sm:pt-[50%] md:pt-[50%]'>
        <ScaleLoader color={"#030d26"} loading={isLoading}  size={100} className='  '/>
        </div>
        
    
  ) : ( <div className=''>
      <Navbarx/>
      <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl'>
        <div className='flex justify-center'>
          <p className='text-[1.7rem] text-[#030d26] font-semibold'>About Company</p>
        </div>

        <div className='flex justify-center'>
         <Link to="/"> <p className='pt-5'> <span className="text-[#1f88cf]">Home</span> /About</p></Link>
        </div>
      </div>

    
      <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-[10%]'>
        <div className=' grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5 mb-[10%]'>
                            <motion.div
                                className="flex mt-5 justify-center md:justify-start"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                >    
              <div className='bg-[f129f1ee] h-fit '>
                <div className='pl-5'>
                  <p className='text-[#030d26]'>About Us</p>
                </div>

                <div className='pl-5'>
                  <p className='text-[1.5rem] font-semibold text-[#030d26]'>
                    Providing Solutions  Company
                  </p>
                </div>
                
                  <div className='pl-5 pr-2'>
                    <p className='text-[#030d26] pt-5'>
                    In order to provide high-quality services and solutions, having an amazing team is not enough. 
                    It's also essential to have the right tools and a dependable knowledge base. 
                    At our company, we understand the importance of accessibility and have spent years
                    conducting research and developing partnerships with corporations and bodies that have a
                    strong hold on important databases. Our efforts have been recognized through several awards 
                    and recognitions for our service delivery. <br /> <br />

                    Through these strategic partnerships, we're able to leverage the latest technologies and tools
                    to provide our clients with the best possible services and solutions. Our team is trained to
                    utilize these tools effectively and efficiently to ensure that our clients receive the highest
                    level of service possible.
                    </p>
                  </div>
              </div>
            </motion.div>

            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: 0.2, duration: 0.7 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        
                    >
            <div className='bg-[f129f1ee] h-fit pt-[5%] pl-5 pr-5'>
                    <img src="company.jpg" alt="" className='radiusx_1'/>
              </div>
              </motion.div>
        </div>
      </div>
      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: 0.2, duration: 0.7 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
     <div className=' flex justify-center gap-1 max-w-md mx-auto overflow-hidden md:max-w-6xl  mb-[10%] '>
            <div className='bg-[#e9f6ff]  h-fit pl-10 pb-10 pr-10 ml-1 mr-1 rounded-xl'>
              <p className='text-[#030d26] text-[1.2rem] font-semibold pt-3'>87k+ <br /> <span className='font-normal'>Satisfied Clients</span> </p>
            </div>
            <div className='bg-[#1c294b]  h-fit pl-10 pb-10 pr-10 ml-1 mr-1 rounded-xl'>
              <p className='text-white text-[1.2rem] font-semibold pt-3 '>2.4m+ <br /> <span className='font-normal'>Threats Blocked</span> </p>
            </div>
     </div>
     </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: 0.2, duration: 0.7 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl mt-[10%]">

                    
                        <div className="flex justify-center">
                            <p className="font-semibold pt-4">HOW ITS DONE</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                              Our Approach 
                            </p>
                        </div>
                    </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: 0.2, duration: 0.7 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
                  <div>
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl mt-[1%] mb-[5%]">
                      <div className="flex justify-center">
                       <p className='text-center'> 01. Working as a team with each expert constrained to their area of specialization. <br />
                        02. Our mission is to deliver services, providing clients with more reasons to use tech. <br />
                        03.We are applying standard practices needed for excellent service and solutions to be accessible to everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>


              <Footer/>
            </div> )}
    </div>
  )
}

export default About