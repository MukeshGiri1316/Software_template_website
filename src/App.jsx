import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import { HeroSection, About, Services, Contact } from './assets/pages/home/index.js'
import CustomCursor from './assets/components/custom-cursor/CustomCursor.jsx'
import { CursorProvider } from "./assets/components/custom-cursor/cursorContext.js";

function App() {
  const [cursorVariants, setCursorVariants] = useState("default");

  const mouseEnter = (variant) => {
    setCursorVariants(variant)
  }

  const mouseLeave = (variant) => {
    setCursorVariants(variant)
  }

  return (
    <>
      <CursorProvider value={{ cursorVariants, mouseEnter, mouseLeave }}>
        <CustomCursor variant={cursorVariants} />
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Contact />
        <Footer />
      </CursorProvider>

    </>
  )
}

export default App
