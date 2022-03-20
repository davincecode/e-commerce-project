/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  WorkLeftBox,
  WorkRightBox,
  ContainerWrapper,
  WorkBoxWrapper,
} from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <ContainerWrapper>
        <div className="flex items-center justify-center mb-10 text-3xl font-millerLight">
          Recent Work
        </div>
        <WorkBoxWrapper>
          <WorkLeftBox>
            <img src="/images/pillow.jpg" />
          </WorkLeftBox>
          <WorkRightBox>
            <img src="/images/min-hero.jpg" />
            <img src="/images/min-hero.jpg" />
          </WorkRightBox>
        </WorkBoxWrapper>
      </ContainerWrapper>
    </>
  )
}

export default index
