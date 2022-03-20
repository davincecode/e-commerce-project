/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { WorkContainer, Wrapper } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <Wrapper>
        <h1 className="flex items-center justify-center mb-10 text-3xl font-millerLight">
          Recent Work
        </h1>
        <WorkContainer>
          <div className="flex items-center justify-end h-full">
            <img
              className="flex object-cover w-full h-full"
              src="/images/pillow.jpg"
            />
          </div>
          <div className="flex flex-col items-start justify-center h-full gap-8">
            <img
              className="flex object-cover w-full h-full"
              src="/images/min-hero.jpg"
            />
            <img
              className="flex object-cover w-full h-full"
              src="/images/min-hero.jpg"
            />
          </div>
        </WorkContainer>
      </Wrapper>
    </>
  )
}

export default index
