/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { HeroContainer, HeroElements } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <HeroContainer>
        <HeroElements>
          <div className="">
            <img className="flex w-[450px]" src="/images/pillow.jpg" />
          </div>
          <div className="flex-wrap items-center justify-center py-4 mt-12 text-2xl tracking-wide md:w-2/5 md:text-4xl font-millerLight md:leading-loose ">
            Full-stack web designs focused on{" "}
            <div>
              <span className=" font-millerItalic">Simplicity</span> and
              <span className=" font-millerItalic"> Function.</span>
            </div>
          </div>
        </HeroElements>
      </HeroContainer>
    </>
  )
}

export default index

// absolute left-0 flex flex-col justify-center w-full h-full p-4 text-3xl leading-normal tracking-normal text-gray-900 top-10 md:text-4xl font-millerLight xl:text-5xl xl:leading-normal
