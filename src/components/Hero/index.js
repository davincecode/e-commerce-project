/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { HeroContainer } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <HeroContainer>
        <img
          className="object-cover w-full h-screen overflow-hidden"
          src="/images/image-hero.jpg"
        />

        <div className="flex text-8xl ">
          <h1 className="text-3xl font-bold underline">Mothatda wwhwhwh</h1>
        </div>
      </HeroContainer>
    </>
  )
}

export default index
