import React from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import About from "components/About"
import Work from "components/Work"
import { BodyContainer } from "../src/Styles/GlobalStyles"
import "index.css"

const App = () => {
  return (
    <>
      <BodyContainer>
        <Navbar />
        <Hero />
        <TextareaOne />
        <Work />
        <About />
      </BodyContainer>
    </>
  )
}

export default App
