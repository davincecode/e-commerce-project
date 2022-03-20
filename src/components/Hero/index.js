/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { HeroContainer, HeroElements } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <HeroContainer>
        <HeroElements>
          <img
            className="object-cover w-full h-screen"
            src="/images/image-hero.jpg"
          />
          <div className="flex text-8xl ">
            <h1 className="text-3xl font-bold underline">Mothatda wwhwhwh</h1>
          </div>
        </HeroElements>
      </HeroContainer>
    </>
  )
}

export default index
