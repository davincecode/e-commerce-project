import React from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import Features from "components/Features"
import Textarea from "components/Textarea/TextareaOne"
import Work from "components/Work"
import { BodyContainer } from "../src/Styles/GlobalStyles"
import "index.css"

const App = () => {
  return (
    <>
      <BodyContainer>
        <Navbar />
        <Hero />
        <Features />
        <Work />
        <Textarea />
      </BodyContainer>
    </>
  )
}

export default App
