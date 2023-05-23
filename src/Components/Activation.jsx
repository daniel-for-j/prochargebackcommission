import { motion } from "framer-motion"
import Navbarx from "./Navbarx";
import { Link } from "react-router-dom";
// import Slick from "./Slick"
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";


const Activation = () => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> {
           setIsLoading(false)

        },5000)
   }, [])
  

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
        <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-10' id='Divx'>
            <div className="flex justify-center">
                <p className='text-[1.7rem] text-[#030d26] font-semibold text-center'>Account Activation </p>
            </div>
        </div>

        <div className='flex justify-center mt-5'>
            <p> <Link to="/">Service</Link> / <span className='text-[#1f88cf]'>Account Activation </span></p>
        </div>
        </motion.div>



        <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-[5%]'>
            <div className='grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5'>

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
                <div className='bg-[e72ee7ee] h-fit pl-5 pr-3'>
                    <p className='text-[#030d26]'>Losing access to important accounts can be a
                     frustrating and stressful experience, especially when you need to access them
                    urgently. Whether it's due to a forgotten password, a hacked account, or any
                    other reason, losing access to important accounts can have serious consequences.
                    At our platform, we understand the importance of having access to your accounts
                     and we are committed to helping you regain access to them in the most efficient and effective way possible. <br /> <br />


                     Our platform is designed to help you regain access to your accounts for legitimate reasons.
                      We understand that sometimes you may need access to an account that you have lost access to,
                     and we are here to help you regain access to it. Our team of experts is well-versed in the
                    various policies and procedures of different platforms, and we are able to navigate through
                    the complex processes of account recovery with ease.  <br/>


                     
                     </p>
                </div>
                </motion.div>

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
                <div className='bg-[e72ee7ee] h-fit mb-[30%] radius '>
                        <div className='flex justify-center pt-[5%] '>
                            <img src="actv.jpeg" alt="" className='radius__xx'/>
                        </div>
                </div>
                </motion.div>
            </div>
        </div>

        <div className='bg-[#e9f6ff] h-fit'>
            <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-10'>
                <div className='flex justify-center'>
                    <p className='font-semibold text-[#1f88cf] pt-5'>
                        OTHER TOP SERVICES
                    </p>
                </div>

                <div className='flex justify-center pt-3'>
                    <p className='text-[1.7rem] text-[#030d26] font-semibold text-center'>Other Services And Solution Includes </p>
                </div>
            </div>
        


        <div className='max-w-md mx-auto overflow-hidden md:max-w-7xl mt-10 pb-[5%] '>
            <div></div>
            <div className=' grid  grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-1'>
                <div className="">
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[15%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>Activation Of Permanently Deactivated Account</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                      <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
                </div>
           
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[15%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>Discord Hack/Recovery​</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                        <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[8%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>High Paying  Improvement From Shoppers Account​</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                        <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[15%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>Withdraw Locked Up Funds From Deactivated Account​</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                        <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[15%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>Resolving Suspended Account Issues And Improving It's Rating​</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                        <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
                <div className='bg-[ee2ceeee] h-[25vh] Border__x'>
                    <div className='pl-[15%] pt-[10%]'>
                        <p className='font-semibold text-[1.2rem]'>Email Account Hack And Recovery​</p>
                    </div>

                    <div className='pl-[15%] pt-[10%]'>
                        <Link to="/Email" > <p className='font-semibold text-[#1f88cf]'>Learn More <i class="ri-arrow-right-line"></i></p></Link>
                    </div>
                </div>
               
            </div>
        </div>
        </div>

                
        <div className="carousel">
        {/* <h2>Carusole</h2> */}

    <Slider {...settings}>
        <div className="box overflow-hidden">
            <div className='flex justify-center pt-[10%]'>
                <img src="drug-mart.png" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="amazon.png" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="g-mail.png" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[14%]'>
                <img src="bank.png" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="xbox.png" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="apple.png" alt="" className='w-[35%]'/>
            </div>
        </div>
    </Slider>


    </div>
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
                    <div className="bg-[cb47cbee] h-fit pl-[10%]">
                        <p className="font-semibold pt-4">Contact us</p>

                        <div>
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                            In Need Of <br/>Professional Service?
                            </p>
                        </div>

                        <p className="pt-3 text-[#030d26]">
                        Our team is highly skilled in information security and <br/> we use the best  tools available to ensure the safety and confidentiality of our clients' data.
                        </p>
                    </div>
                </motion.div>

                       
                    <div className="max-w-md mx-auto overflow-hidden md:max-w-7xl mt-[5%] mb-[5%]">
                        <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">

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
                            <div className="bg-[d14cd1ee] h-fit ">
                                <div className="flex pl-[10%] lg:pl-[0%] xl:pl-[0%] pt-[10%] sm:pl-[10%] md:pl-[25%]">
                                    <div className="pt-2">
                                        <img src="world.png" alt="" className="w-[65px]"/>
                                    </div>

                                    <div className="pl-4 pt-4">
                                        <p className="font-semibold">74+ <br/>Data Centers</p>
                                    </div>
                                </div>

                                <div className="flex pl-[10%] lg:pl-[0%] xl:pl-[0%] sm:pl-[10%] md:pl-[25%]">
                                    <div className="flex pt-10">
                                        <div className="pt-2">
                                            <img src="users.png" alt="" className="w-[65px]"/>
                                        </div>

                                        <div className="pl-4 pt-4">
                                            <p className="font-semibold"> 178+ <br/>Secured Systems</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  pt-10 mb-8 mr-5 pl-[10%] lg:pl-[0%] xl:pl-[0%] sm:pl-[10%] md:pl-[25%]">
                                   <Link to="/Email"><button className="See__More">Contact Us</button></Link> 
                                </div>
                                
                            </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                                }}
                            >
                             <div className="bg-[d14cd1ee] h-[fit] ml-3 mr-2">
                                   <div className="">
                                        <img src="customer-service.jpg" alt="" className="radius__img"/>
                                   </div>
                            </div>
                            </motion.div>
                        </div>

                        
                    </div>

                    <div className="z-40 w-full fixed bottom-[35%] py-6">
                        <div className=''>
                           {/* <a href="#Divx"><i class="ri-arrow-up-line text-[1.8rem]"></i> </a>  */}
                        </div>
                    </div>

            <Footer/> 
            </div> )}   
    </div>
    )
}

export default Activation;