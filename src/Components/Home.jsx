import Navbar from "./Navbar"
import { motion } from "framer-motion"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Footer from "./Footer";
import { Link } from "react-router-dom"


const Home = () => {
    
    
    
    return(
        <div>
        <div className="bg-[#e9f6ff] h-fit">
           <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className="max-w-md  flex justify-center mx-auto  overflow-hidden md:max-w-6xl pt-[20%] 2xl:pt-[10%] xl:pt-[10%]">            
                <div className="flex justify-center ">
                <div className=" w-[100%] h-fit overflow-hidden z___div">
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
                            <div className="flex justify-center">
                                <p className="uppercase text-[1.9rem] font-semibold text-center text-[#030d26] font__div">
                                    FIND TRUSTED & INSPIRED TEAM OF EXPERTS THAT WILL HELP YOU WITH!
                                </p>
                            </div>
                            <div className="flex justify-center pt-5">
                            <div class="border-b-4 border-[#030d26] rounded-[40px] w-[40%]"></div>
                            </div>
                            
                            <div className="flex justify-center pt-[7%] pb-5">
                                <p className="text-center font-semibold text-[1.3rem] text-[#030d26]">
                                    Hackers, Crypto Currency Restore, Device Hack, Social Media Hack, Black Mail or Extortion.
                                    
                                </p>
                            </div>

                            
                            </motion.div>
                        </div>
                        
                </div>
                


                
            </div>
        </div>


           
        <div className=" max-w-md mx-auto overflow-hidden md:max-w-6xl mt-10 pb-[5%] pt-[5%]">
                    <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5">

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
                        <div className="g-[#d01c1c] h-[35vh] ">
                            <div className="flex justify-center pt-5">
                                    <img src="exchange.png" alt="" className="pl-10" />
                            </div>
                    
                           
                            <div className="  overflow-hidden text-center pt-5">
                                <p className="font-semibold text-[1.2rem] text-black">2,000+</p> 
                                <p className="uppercase font-semibold text-[1.2rem] text-black">Money Restored</p>
                            </div>
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
                        <div className="g-[#d01c1c] h-[35vh] ">
                            <div className="flex justify-center pt-5">
                                    <img src="customer-review.png" alt="" className="" />
                            </div>

                            <div className="overflow-hidden text-center pt-5">
                                    <p className="font-semibold text-[1.2rem] text-black">35+</p>
                                    <p className="uppercase font-semibold text-[1.2rem] text-black">Expericenced Crackers</p>
                            </div>
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
                        <div className="-[#d01c1c] h-[35vh] pt-5">
                            <div className="flex justify-center">
                                    <img src="world.png" alt="" className="" />
                            </div>

                            <div className="overflow-hidden text-center pt-5 pb-[10%]">
                                    <p className="font-semibold text-[1.2rem] text-black">2,000+</p>
                                    <p className="uppercase font-semibold text-[1.2rem] text-black">Global Clients</p>
                            </div>

                        </div>
                    </motion.div>
                        
                            
                    </div>
                </div>

                   
            <div className="max-w-md mx-auto  overflow-hidden md:max-w-full pb-10">
                <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2">
                        
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
                        <p className="font-semibold pt-4">Our Core Value</p>

                        <div>
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                                Professionally <br/> Certified Team
                            </p>
                        </div>

                        <p className="pt-3 text-[#030d26]">Prochargeback represents a team of cyber services to an ever-growing
                        technology enthusiasts always on the look to provide solutions and services to an ever-growing population as we evolve technologically.
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
                    <div className="bg-[cb47cbee] h-fit pt-10 pr-5 pl-6">
                        <div className="">
                            <Accordion className="">
                                <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <p className="text-[#030d26] font-semibold">High Level Of Discretion</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    Our information policy is stringent on exclusivity.
                                </AccordionDetails>
                            </Accordion>    

                            
                        </div>

                        <div className="">
                            <Accordion className="">
                                <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <p className="text-[#030d26] font-semibold">Precision Of Service</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    Bringing masters in their fields under one roof with solution in view.
                                </AccordionDetails>
                            </Accordion>    

                            
                        </div>

                        <div className="">
                            <Accordion className="">
                                <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <p className="text-[#030d26] font-semibold">100% Refund Policy</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    If we can’t get it done, which we doubt, fund’s will be refunded. T&C’s apply.
                                </AccordionDetails>
                            </Accordion>    

                            
                        </div>
                    </div>
                    </motion.div> 
                </div>
                
            </div>
            
        <div className="max-w-md mx-auto overflow-hidden md:max-w-full mt-[10%] pb-[10%]">
            <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    
            
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
                <div className=" bg-[030d26]  h-fit pl-[10%]" id="Divx">
                <p className="font-semibold pt-4">Our Key Services</p>
                        <div>
                            <p className="font-semibold text-[1.8rem] pt-2 text-[#030d26]">
                            Services And Solutions 
                            </p>
                        </div>
                </div>
                </motion.div>

                <div>
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
                    <div className=" bg-[030d26] h-fit pl-7 pr-5">
                        <p className="pt-0 text-[#030d26] lg:pt-5 xl:pt-5 sm:pt-0 md:pt-0">
                        Our services are categorized based on the growing needs of clients and also
                         a function of our advanced resource base, harnessing methods to provide solutions 
                         that are time saving.
                        </p>
                    </div>
                </motion.div>
                </div>
            </div>
        </div>   


            <div className="max-w-md mx-auto  overflow-hidden md:max-w-7xl" >
                <div className=" grid ml-5  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-7 pb-[5%]">
                        

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
                        <div className="pl-5 pr-5">
                            <Card sx={{ maxWidth: 345 }}>
                                <img src="Bitcoin.jpg" alt="" className="duration "/>

                                <div className="pt-2 pl-3">
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                        Crypto Currency Recovery
                                    </p>
                                </div>

                                <div className="pt-5 pl-3">
                                    <p className="text-[#030d26]">
                                        Cryptocurrency recovery , Bitcoin recovery, 
                                        Ethereum, USDT, Hacked Bitcoin Account. 
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-6 pb-5 mr-5">
                                  <Link to="/Crypto"><button className="See__More"> See More</button> </Link>
                                </div>
                                
                            </Card>
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
                        <div className="pl-5 pr-5">
                            
                            <Card sx={{ maxWidth: 345 }}>
                                <img src="socail.jpeg" alt="" className=""/>

                                <div className="pt-2 pl-3">
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                        Social Media Hack
                                    </p>
                                </div>


                                <div className="pt-5 pl-2 pr-1 ">
                                    <p className="text-[#030d26]">
                                        Account recovery , Facebook, Instagram, Twitter, TikTok, Snapchat, Banking Applications.
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-6 pb-5 mr-5">
                                  <Link to="/Social"> <button className="See__More">See More</button> </Link>
                                </div>
                                
                            </Card>
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
                        <div className="pl-5 pr-5">
                            <Card sx={{ maxWidth: 345 }}>
                                <img src="activationx.jpg" alt="" className="w-full"/>

                                <div className="pt-2 pl-3">
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                       Account Activation
                                    </p>
                                </div>

                                <div className="pt-5 pl-3">
                                    <p className="text-[#030d26]">
                                        Activation of deactivated account , Instacart, 
                                        Amazon flex, door dash, Uber eats, Uber driver, Shipt ,
                                         GrubHub, Postmates, esty and eBay etc 
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-6 pb-5 mr-5">
                                   <Link to="/Activation"><button className="See__More">See More</button> </Link>
                                </div>
                                
                            </Card>
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
                        <div className="pl-5 pr-5">
                            <Card sx={{ maxWidth: 345 }}>
                                <img src="mobile-hack.webp" alt="" className="duration"/>

                                <div className="pt-2 pl-3">
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                        Device Hack
                                    </p>
                                </div>

                                <div className="pt-5 pl-3">
                                    <p className="text-[#030d26]">
                                    We are able hack into any device, computer, 
                                    phone, iPhone, deleting and Recovering lost files from devices etc.
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-6 pb-5 mr-5">
                                  <Link to="/Device"> <button className="See__More">See More</button></Link>
                                </div>
                                
                            </Card>
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
                        <div className="pl-5 pr-5">
                            <Card sx={{ maxWidth: 345 }}>
                                <img src="worried.jpg" alt="" className="duration"/>

                                <div className="pt-2 pl-3">
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                        Blackmail Or Extortion
                                    </p>
                                </div>

                                <div className="pt-5 pl-3">
                                    <p className="text-[#030d26]">
                                    We help Victims that suffers from Sextortion, Blackmail,
                                     extortion, Romance scam, Recovering lost or stolen money etc. 
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-8 pb-7 mr-5">
                                   <Link to="/Blackmail"> <button className="See__More">See More</button> </Link>
                                </div>
                                
                            </Card>
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
                        <div className="pl-5 pr-5">
                            <Card sx={{ maxWidth: 345 }}>
                            <div className="flex justify-cente">
                                <img src="icloud-unlock.png" alt="" className="h-[24vh] "/>
                            </div>
                                <div className="pt-8 pl-3">
                                    
                                    <p className="text-[1.2rem] font-semibold text-[#030d26]">
                                        iCloud Unlock
                                    </p>
                                    
                                </div>

                                <div className="pt-[12%] pl-3">
                                    <p className="text-[#030d26]">
                                        We have a team of experts who can help you gain access
                                        back into your locked icloud or deactivated icloud 
                                        account
                                    </p>
                                </div>
                                
                                <div className="flex justify-end pt-6 pb-5 mr-5">
                                  <Link to="/Icloud">  <button className="See__More">See More</button> </Link>
                                </div>
                                
                            </Card>
                        </div>
                        </motion.div>  
                            
                </div>
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
                    <div className="bg-[cb47cbee] h-fit pl-[10%]" id="Review">
                        <p className="font-semibold pt-4">Testimonials</p>

                        <div>
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                               What People <br/> Say About Us
                            </p>
                        </div>

                        <p className="pt-3 text-[#030d26]">
                            Here's What People are Saying About or  Services.
                            We are the best when it comes to IT    
                        </p>
                    </div>
                </motion.div>



            
                <div className="max-w-md mx-auto  overflow-hidden md:max-w-7xl  mt-[5%]">
                <div className=" grid ml-3 mr-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 pb-10 mt-[10%]">
                    
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
                    
                    <div className="bg-[#b2b8b5ee] h-fi radiusx pb-10">
                        <div className="flex justify-center position relative bottom-[10%] ">
                            <Avatar alt="Remy Sharp" src="smilex.jpg" sx={{ width: 65, height: 65 }} />
                        </div>
                        <div className="flex justify-center position relative bottom-[8%]">
                            <p className="font-semibold">
                                Lyla Martinz
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#030d26] pl-2 pr-2">
                            GOOD JOB Prochargeback, Your agents were fast towards helping me retrieve my Lost USDT,
                             that was stolen by Scammers. Massive respect and love for every of your team who works behind the scenes to make
                              sure people get the help they deserve Thank you so much!
                            </p>
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
                    <div className="bg-[#818083ee] h-fi radiusx ">
                        <div className="flex justify-center position relative bottom-[10%] ">
                            <Avatar alt="Remy Sharp" src="otto.jpg" sx={{ width: 65, height: 65 }} />
                        </div>
                        <div className="flex justify-center position relative bottom-[8%]">
                            <p className="font-semibold">
                                Otto Albert
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#030d26] pl-2 pr-2 pb-2">
                               Prochargeback company was a lifesaver for me. After being Scammed by a romance
                               scammer, i thought i had lost everything. How ever, my friend recommended Prochargeback
                               to me and they ware able to help me recover my pensionand life savings. Their team was 
                               responsive, professional, and efficient handling my case and i highly recommend anyone
                               who has been a victim of fraud.
                            </p>
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
                    <div className="bg-[#545a58ee] h- radiusx ">
                    
                        <div className="flex justify-center position relative bottom-[10%] ">
                            <Avatar alt="Remy Sharp" src="don.jpg" sx={{ width: 65, height: 65 }} />
                        </div>
                        <div className="flex justify-center position relative bottom-[8%]">
                            <p className="font-semibold">
                                Herbert Don
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#030d26] pl-2 pr-2 pb-2">
                            Prochargeback was a lifesaver for me! My device got hacked and i was
                            struggling to get a response from support. After finding Prochargeback
                            online, I decided to give them a try. The agent assigned to me was able to 
                            recover my account in just a few minutes and i'm so grateful. They ware 
                            professional, responsive, and efficient in handling my case. I highly 
                            recommend Prochargeback to anyone who needs help with account recovery!
                            </p>
                        
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
                     <div className="bg-[#3c413fee] h- radiusx">
                        <div className="flex justify-center position relative bottom-[10%] ">
                            <Avatar alt="Remy Sharp" src="Hubert.jpg" sx={{ width: 65, height: 65 }} />
                        </div>
                        <div className="flex justify-center position relative bottom-[8%]">
                            <p className="font-semibold">
                                Hubert Blaine
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#030d26] pl-2 pr-2 pb-8">
                                I had no idea that third party reactivation services exsisted
                                until i came across Prochargeback. Thier service amd support ware amazing
                                and i'm sp grateful for them. We need more people like them who are willing
                                to help victims of hacking and accoubnt deactivation. They ware able to restore 
                                my deactivated account quickly and efficently, and i can't thank them enough.
                            </p>
                        </div>
                        
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
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl mt-[10%]">

                    
                        <div className="flex justify-center">
                            <p className="font-semibold pt-4">From our Blogs</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26]">
                              Read Our Articles
                            </p>
                        </div>
                    </div>
                    </motion.div>

                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-6xl mt-[4%]">
                        <div className="grid ml-3 mr-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 pb-10 mt-[5%]">


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

                        <div className="bg-[e72be7ee] h-fit overflow-hidden">
                           
                                <div className="flex justify-center text-center">
                                    <p className="font-semibold text-[1.3rem] pt-2 text-[#030d26]">Prochargeback sends customer refunds in three cases</p>
                                </div>
                                <div className="pl-7 pt-2">
                                    <p className="text-[#030d26] t">-March 15, 2023</p>
                                </div>

                                <div className="pl-7 pt-2">
                                    <p className="text-[#030d26] ">
                                        The Prochargeback works to fulfill its mission in many ways, including
                                        bringing cases against companies who are being unfair or deceptive.
                                        And it’s happy news when those cases result in refunds. Last year,
                                        Prochargeback cases returned $128 million to people who lost money to companies
                                        the Prochargeback sued. The at latest...
                                    </p>
                                </div>

                                <div className="pl-7 pt-5">
                                   <Link to="/Article"> <button className="See__More">Read More</button> </Link>
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
                        <div className="bg-[e72be7ee] h-fit overflow-hidden">
                            <div className="flex justify-center text-center">
                                    <p className="font-semibold text-[1.3rem] pt-2 text-[#030d26]">Read Our Comment Policy</p>
                                </div>
                                <div className="pl-7 pt-2">
                                    <p className="text-[#030d26] t">-April 27, 2023</p>
                                </div>

                                <div className="pl-7 pt-2">
                                    <p className="text-[#030d26] ">
                                    The purpose of this blog and its comments section is to inform readers about Federal Trade Commission
                                    activity, and share information to help them avoid, report, and recover from fraud, scams, and bad
                                    business practices. Your thoughts, ideas, and concerns are welcome, and we encourage comments. But
                                    keep in mind, this is a moderated blog. 
                                    </p>
                                </div>

                                <div className="pl-7 pt-5">
                                   <Link to="/Articles"><button className="See__More">Read More</button></Link> 
                                </div>
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
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl mt-[10%]">

                    
                        <div className="flex justify-center">
                            <p className="font-semibold pt-4">F .A. Q</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="font-semibold text-[1.7rem] pt-2 text-[#030d26] text-center">
                                Frequently Ask Questions
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
                        }} >
                    <div className="max-w-md mx-auto  overflow-hidden md:max-w-6xl mt-[5%] mb-[5%] pl-3 pr-2">
                        <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-[f60505] h-fit overflow-hidden">
                            <Accordion className="">
                                <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <p className="text-[#030d26] font-semibold">Refund Policy</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    We are committed to delivering high-quality results and meeting our clients'
                                    expectations. While we are confident in our ability to complete the task at
                                    hand, we understand that unforeseen circumstances can sometimes arise that
                                    may impact our ability to deliver on our promises. In the event that we are
                                    unable to complete the task, we offer a refund as part of our commitment to
                                    ensuring our clients' satisfaction and building trust in our brand. We believe
                                    in transparency and fairness in all our dealings, and our terms and conditions
                                    are designed to provide clarity and protection to both our clients and our team.
                                    We are dedicated to providing exceptional service and value to our clients, and 
                                    we are always striving to improve our processes and exceed expectations.
                                </AccordionDetails>
                            </Accordion>    

                                <div className="pt-5">
                                    <Accordion className="">
                                        <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                             aria-controls="panel1a-content"  id="panel1a-header" >
                                            <p className="text-[#030d26] font-semibold">Can I trust you?</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                           We recognize that the topics of trust and authorithy are critical considerations that must be addressed before 
                                           our clients can feel confident and secure in sharing before our clients can feel confident and secure in sharing
                                           sensitive financial information with our team. We understand that the decision to entrust us with such information
                                           is one that requires careful consideration,and we take this responsibility seriously. We believe that trust is earned
                                           through consistent and reliable performance, and we strive to exceed our clients expectations in every aspect of your work.
                                        </AccordionDetails>
                                    </Accordion>    
                                </div>
                            </div>

                            <div className="bg-[f60505] h-fit">
                                <div className="">
                                    <Accordion className="">
                                        <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>} aria-controls="panel1a-content" id="panel1a-header">
                                            <p className="text-[#030d26] font-semibold">How does recovery work?</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                           At Prochargeback, we understand that each account recovery case is unique and requires a tailboard 
                                           approach. We use a variety of techniques to recover our clients accounts, depending on the specific
                                           of each case. <br/> <br/>

                                           In the event of password recovery, we work closely with our clients to extract an encrypted private key
                                           backup and build a comprehensive list of possible password guesses. We then use advanced algorithms and 
                                           software to try billions or even trillions of passible password combinations until the correct password is found.
                                        </AccordionDetails>
                                    </Accordion>    
                                </div>

                                <div className="pt-5">
                                    <Accordion className="">
                                        <AccordionSummary expandIcon={<i class="ri-arrow-down-s-line text-[1.4rem]"></i>}
                                             aria-controls="panel1a-content"  id="panel1a-header" >
                                            <p className="text-[#030d26] font-semibold">How long does the process take?</p>
                                        </AccordionSummary>
                                            <AccordionDetails>
                                           The Process of recovering lost Cryptocurrency can vary in duration, ranging from as brief as one hour
                                           to as long as 2 months or more months. Although this may seem like a lengthy period, it is because we typically 
                                           conduct an extensive search within the first week of on boarding a client. Once this initial search has been 
                                           exhausted, we retain the encrypted private backup and password guesses to continue testing as we identify new 
                                           recovery vectors and expand our handware capabilities. We only delete clinet information upon request, as we 
                                           patronize our clients privacy and secirity.
                                           </AccordionDetails>
                                    </Accordion>    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </motion.div>




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

                    <Footer/>

    </div>
    )
}

export default Home;