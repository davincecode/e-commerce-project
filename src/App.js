import React, { useEffect } from "react"
import Navbar from "components/Navbar"
import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import Quote from "components/Quotes"
import Work from "components/Work"
import Projects from "components/Projects"
import Features from "components/Features"
import Footers from "components/Footers"
import "aos/dist/aos.css"
import Aos from "aos"
import "index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "pages/About"
import Latest from "pages/Latest"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
      </Router>
      <Hero />
      <TextareaOne />
      <Work />
      <Quote />
      <Features />
      <Projects />
      <Footers />
    </>
  )
}

export default App
