import React from "react"
import { MainContainer } from "Styles/GlobalStyles"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import "tailwind.css"

const App = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Hero />
      </MainContainer>
    </>
  )
}

export default App
