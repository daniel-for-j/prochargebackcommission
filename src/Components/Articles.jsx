import React from 'react';
import Navbarx from './Navbarx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

const Articles = () => {


    
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


        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.8 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
        <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-10 ' id='Divx'>
            <div className="flex justify-center">
                <p className='text-[1.7rem] text-[#030d26] font-semibold text-center'>What Does the Prochargeback Comission Do with Your Personal Information?</p>
            </div>
        </div>

        <div className='flex justify-center mt-5'>
            <p> <Link to="/">Articles</Link> / <span className='text-[#1f88cf]'>News</span></p>
        </div>
        </motion.div>


        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.8 }}              
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
        <div className='max-w-md mx-auto overflow-hidden md:max-w-4xl mt-10 '>
            <p className='pl-5 pe-3'>By Emily Wu Attorney, Federal Trade Commission-March 15, 2023</p> <br /> <br />
            <div  className='flex justify-center '>
                
                <p className='text-[#030d26] pb-[10%] pl-5 pr-3'>
                    Federal law requires us to tell you how we collect, use, share, and protect your personal
                    information. Federal law also limits how we can use your personal information. Protecting
                    the privacy and security of consumers' personal information is very important to us. Please
                    read this notice carefully to understand what we do with the personal information we collect both online and offline.  <br /> <br />

                    When you contact us to help you with a problem, we may collect personal information about you. 
                    We collect and use only the information necessary to respond to your concerns and conduct investigations. 
                    In most instances, we collect minimal personal information, such as name, address, telephone number, 
                    or email address. In limited cases, depending on the nature of your request or of our law enforcement 
                    investigations, we also may collect other personal information such as Social Security numbers, account 
                    numbers, or mortgage or health information. We also may collect information about your visit to our websites 
                    for security and internal operations purposes.
                </p>
            </div>
        </div>
        </motion.div>

        <Footer/>
        </div> )}
    </div>
  )
}

export default Articles