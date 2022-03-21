import React, { useEffect } from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import About from "components/About"
import Work from "components/Work"
import Projects from "components/Projects"
import Features from "components/Features"
import "aos/dist/aos.css"
import Aos from "aos"
import "index.css"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <TextareaOne />
      <Work />
      <About />
      <Features />
      <Projects />
    </>
  )
}

export default App
