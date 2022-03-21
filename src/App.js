import React from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import About from "components/About"
import Work from "components/Work"
import Projects from "components/Projects"
import "index.css"
import Features from "components/Features"
import { SmoothRoll } from "Styles/GlobalStyles"

const App = () => {
  return (
    <>
      <SmoothRoll>
        <Navbar />
        <Hero />
        <TextareaOne />
        <Features />
        <Work />
        <About />
        <Projects />
      </SmoothRoll>
    </>
  )
}

export default App
