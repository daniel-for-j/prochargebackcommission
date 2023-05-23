import React from 'react';
import Navbarx from './Navbarx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import  { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';
import Footer from './Footer';

const Report = () => {

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
                <p className='text-[1.7rem] text-[#030d26] font-semibold text-center'>Report Scam</p>
            </div>
        </div>

        <div className='flex justify-center mt-5'>
            <p> <Link to="/">Help</Link> / <span className='text-[#1f88cf]'>Report A Scammer</span></p>
        </div>
        </motion.div>

        <section>
            <form 
            target='_blank'
            onSubmit={onSubmit}
            action="https://formsubmit.co/d5afe2e117e946324c53084ddd4d7580"
            method='POST'
            >
            
        <div className='max-w-md mx-auto  overflow-hidden md:max-w-6xl mt-10'>
            <div className=' grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='bg-[e12ae1ee] h-fit pl-5 pt-5 pr-5'>
                    <input type="text" className='Input_x w-full ' placeholder='Name'
                    {...register("name", {
                        required: true,
                        maxLength:100,
                    })}/>
                     {errors.name && (
                  <div className='flex  justify-center mt-2'>
                  <p className="text-red mt-1 bg-[#f25454ee] rounded-md pl-3 pr-3 text-white ">
                    {errors.name.type === "required" && "Your Name Is Required."}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                  </p>
                  </div>
                    )}
                    <input type="text" className='Input_x w-full mt-2' placeholder='Email'
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}/>
                    {errors.email && (
                  <div className='flex  justify-center mt-2'>
                  <p className="text-red mt-1 bg-[#f25454ee] rounded-md pl-3 pr-3 text-white ">
                    {errors.email.type === "required" && "Your Email Is Required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                  </div>
                    )}

                      <div className='flex justify-center'>
                        <p className='font-semibold text-center'>WE SUGGEST YOU TICK ALL THE CHECK-BOX FOR IMMEDIATE RESPONSE</p>
                      </div>
                   <div className="mt-10 ">
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("An impersonator", {required: true,})}/> An impersonator <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Online Shopping", {required: true,})}/> Online Shopping <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("An impersonator", {required: true,})}/> An impersonator <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Romance Scam", {required: true,})}/> Romance Scam <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register(" Fake Bank Funding", {required: true,})}/> Fake Bank Funding <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register(" Hacked Crypto wallet", {required: true,})}/> Hacked Crypto wallet <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Credit, Debit, Loan", {required: true,})}/> Credit, Debit, Loan <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("A Scammer Have your details", {required: true,})}/> A Scammer Have your details <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Black Mail", {required: true,})}/> Black Mail <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Help Me Catch a scammer", {required: true,})}/> Help Me Catch a scammer <br />
                            <input type="checkbox" className='w-[13%] h-[3vh]' {...register("Fake Delivery", {required: true,})}/> Fake Delivery <br />
                    </div>
                   
                    <div className='mt-10 mb-[5%]'>
                        <p className='font-semibold text-center'>If what you're looking for is not above please describe your issues in the text area</p>
                    </div>
                </div>

               

                <div className='bg-[e12ae1ee] h-[40vh] fle justifycenter'>
                    <textarea name="" id="" cols="30" rows="10" className='textareaxx' 
                     {...register("message", {
                        required: true,
                        maxLength: 4000,
                      })}>

                    </textarea>

                    <div className="flex justify-center pt-10">
                    <button className="See__Morex" type="submit" >  SEND A MESSAGE </button>
                </div>
                </div>
                
            </div>
            
        </div>
        </form>
        </section>
        <Footer/>
        </div> )}
    </div>
  )
}

export default Report