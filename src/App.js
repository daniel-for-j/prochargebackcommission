import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from "./Components/Home";
import  Activation from "./Components/Activation"
import Footer from './Components/Footer';
import Email from './Components/Email';
import Navbarx from './Components/Navbarx';
import Crypto from './Components/Crypto';
import Slick from "./Components/Slick";
import Social from './Components/Social';
import Device from './Components/Device';
import Blackmail from './Components/Blackmail';
import Icloud from './Components/Icloud';
import Article from './Components/Article';
import Articles from './Components/Articles' ;
import Report from './Components/Report';

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [color, setColor] = useState("")
  console.log(color)
  return (
    <div  style={{backgroundColor:color}}>
    <Routes>
      <>
      
      <Route path="/" element={<Home color={color} setColor={setColor}/>}/>
      
      </>
       <Route path='/Navbar' element={<Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
       />}/>    
          <Route path='/Navbarx' element={<Navbarx/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/Activation" element={<Activation/>}/>
        <Route path="/Email" element={<Email/>}/>
        <Route path='/Crypto' element={<Crypto/>}/>
        <Route path='/Slick' element={<Slick/>}/>
        <Route path="/Social" element={<Social/>}/>
        <Route path='/Device' element={<Device/>}/>
        <Route path="/Blackmail" element={<Blackmail/>}/>
        <Route path="/Icloud" element={<Icloud/>}/>
        <Route path="/Article" element={<Article/>}/>
        <Route path="/Articles" element={<Articles/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Footer" element={<Footer/>}/>
    </Routes>
    </div>

  );
}

export default App;
