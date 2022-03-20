import React from "react"
import { MainContainer } from "Styles/GlobalStyles"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import Textarea from "components/Textarea/TextareaOne"
import "index.css"

const App = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Hero />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Textarea />
      </MainContainer>
    </>
  )
}

export default App
