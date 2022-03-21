import React from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import About from "components/About"
import Work from "components/Work"
import Projects from "components/Projects"
import "index.css"
import Features from "components/Features"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TextareaOne />
      <Features />
      <Work />
      <About />
      <Projects />
    </>
  )
}

export default App
