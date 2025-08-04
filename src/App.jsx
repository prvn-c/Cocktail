import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger , SplitText);
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";

const App = ()=>{
  return(
   <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
   </main>
  );
}

export default App