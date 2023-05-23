
import React from 'react'
import {motion} from "framer-motion"
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import Footer from './Footer';
import Navbarx from './Navbarx';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';


const Email = () => {

  const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> {
           setIsLoading(false)

        },5000)
   }, [])



    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };

      

  return (
    
      <div>

{isLoading ? (
        
        
        <div className='flex justify-center mx-auto  bg__Load backdrop-blur-lgw-full h-[100vh] pt-[75%] xl:pt-[25%] 2xl:pt-[25%] lg:pt-[25%] sm:pt-[50%] md:pt-[50%]'>
        <ScaleLoader color={"#030d26"} loading={isLoading}  size={100} className='  '/>
        </div>
        
    
  ) : ( <div className=''>
        <div className="max-w-md mx-auto overflow-hidden md:max-w-full bg-[e9f6ff] h-fit">
                <Navbarx/>
                    <div className='flex justify-center mt-[20%] mb-[5%] xl:mt-[5%] lg:mt-[5%] md:mt-[10%] sm:mt-[10%]'>
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                               Contact Us
                            </p>
                    </div>

            <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
              
            <section id="contact" className="contact pt-[] bg-[e9f6ff]">
                    
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
              }}
                >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/d5afe2e117e946324c53084ddd4d7580"
                method="POST"
              >

                
                <div className="flex justify-center pt-5 gap-1 ml-8 mr-5">
                    {/* NAME */}
                    <input 
                    className="w-[100%] Name__Input"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}/> 
                </div>
                    {errors.name && (
                  <div className='flex  justify-center mt-2'>
                  <p className="text-red mt-1 bg-[#f25454ee] rounded-md pl-3 pr-3 text-white ">
                    {errors.name.type === "required" && "Your Name Is Required."}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                  </p>
                  </div>
                )}
               
               <div className="flex justify-center pt-3 gap-1 ml-8 mr-5">
                    {/* EMAIL */}
                    <input 
                    className="w-[100%] Email__input"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}/> 
                </div>
                    {errors.email && (
                  <div className='flex  justify-center mt-2'>
                  <p className="text-red mt-1 bg-[#f25454ee] rounded-md pl-3 pr-3 text-white ">
                    {errors.email.type === "required" && "Your Email Is Required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                  </div>
                    )}
                    
                    <div className="flex justify-center pt-3 gap-1 ml-8 mr-5">
                    {/* COUNTRY */}
                    <input  
                    className="w-[50%] Input_x"
                    name="message"
                    placeholder="Country"
                    rows="4"
                    cols="50"
                    {...register("Country", {
                      required: true,
                      maxLength: 2000,
                    })}/>
                    
                    
                        {/* DESCRIPTION */}
                    <input  
                    className="w-[50%] Input_x"
                    name="Description"
                    placeholder="describe your situation"
                    rows="4"
                    cols="50"
                    {...register("Description", {
                      required: true,
                      maxLength: 2000,
                    })}>
                        
                    </input>
                    
                </div>
                     
                 <div className="flex justify-center pt-3 gap-1 ml-8 mr-5">
                     {/* TEXT FIELD */}
                     <textarea id="filled-basic" label="MESSAGE" variant="filled"
                    className="w-[100%] heightx pl-2 pr-2 pt-2 textareax"
                    name="message"
                    placeholder="MESSAGE"
                    rows="4"
                    cols="50"
                    
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}/>
                </div>
                    {errors.message && (
                  <div className='flex  justify-center mt-2'>
                  <p className="text-red mt-1 bg-[#f25454ee] rounded-md pl-3 pr-3 text-white ">
                    {errors.message.type === "required" &&
                      "Type a Message."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char." }
                  </p>
                  </div>
                    )}
                <div className="flex justify-center pt-10">
                    <button className="See__Morex" type="submit" >  SEND A MESSAGE </button>
                </div>
                

              </form>
            </motion.div>
          
          
        </section>
                              <motion.div
                                className="flex mt-5 justify-center md:justify-start"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                > 
              <div className="bg-[dc2ddcee] h-fit flex justify-center">
            <div className='mr-3 ml-6'>
              <img src='customer-servicexx.jpg' alt='' className='radius_con'/>
            </div>
        </div>
        </motion.div>
        
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
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl mt-[10%]">
                        <div className="flex justify-center mb-[%]">
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26] text-center">
                              Request For Professional Services
                            </p>
                        </div>
                    </div>
                    </motion.div>

                  <div className=''>
                        <div className='flex justify-center pb-2 '>
                          <p className='pr-4'> <a href="mailto:Prochargebackcommission@gmail.com">
                                <i class="ri-mail-fill text-[1.5rem] text-[#030d26] "></i>
                            </a>
                          </p>
                            <a href="https://instagram.com/prochargeback?igshid=NTc4MTIwNjQ2YQ==">
                              <i class="ri-instagram-fill text-[1.5rem] text-[#030d26] "></i>
                            </a>

                            
                        </div>
                        <div className="flex justify-center pb-[5%]">
                            <p className='text-[#030d26] '>
                              <a href="mailto:Prochargebackcommission@gmail.com">
                                Prochargebackcommission@gmail.com
                              </a>
                            </p>
                          </div>
                  </div>
                    
                  <Footer/>
              
    </div>
    </div> )}
    </div>
  )
}

export default Email