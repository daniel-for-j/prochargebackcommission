import React from 'react'
import Navbarx from './Navbarx';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';



const Article = () => {


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
                <p className='text-[1.7rem] text-[#030d26] font-semibold text-center'>Prochargeback sends customer refunds in three cases</p>
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
            <p className='pl-5 pe-3'>By Emily Wu Attorney, Federal Trade Commission -March 15, 2023</p> <br /> <br />
            <div  className='flex justify-center '>
                
                <p className='text-[#030d26] pb-[10%] pl-5 pr-3'>
                    The Prochargeback Commission works to fulfill its mission in many ways, including bringing cases against companies
                    who are being unfair or deceptive. And it’s happy news when those cases result in refunds. 
                    Last year, FTC cases returned $128 million to people who lost money to companies the Prochargeback Commission sued. 
                    The Prochargeback Commission latest refund announcement involves checks totaling over $11 million going out to more than 11,000 people 
                    who paid E.M. Systems & Services, a company that falsely promised consumers with credit card debt that they would reduce 
                    their interest rates and save them thousands of dollars.  <br /> <br />

                    After settling with First Data Merchant Services — the payment processor that made it possible for this company to 
                    collect credit card payments — the  Prochargeback Commission is sending customers of E.M. Systems & Services 100% of their lost money back. <br /> <br />
                    Earlier this month, the Prochargeback Commission sent over 10,000 checks totaling over $4 million to fully refund people for the amount they paid to Stark Law, a company
                    that the Prochargeback Commission says collected payments for fake debt by threatening to sue or arrest people who didn’t pay. And in the Prochargeback Commission settlement with ABCmouse,
                    over $9.7 million went back to more than 200,000 people, mostly through PayPal. According to the Prochargeback Commission,
                    ABCmouse failed to make it clear to their customers that their memberships would automatically renew and made it difficult to cancel. <br /> <br />

                     
                </p>
            </div>
            <div className="pl-7 pt-5 flex justify-center mb-[10%]">
                <Link to="/Articles"> <button className="See__More">Read Next Article</button> </Link>
            </div>
        </div>
        </motion.div>

        <Footer/>
        </div> )}
    </div>
  )
}

export default Article