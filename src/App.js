import React from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import TextareaTwo from "components/TextareaTwo"
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
        <TextareaTwo />
      </BodyContainer>
    </>
  )
}

export default App
