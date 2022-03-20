/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  ContainerWrapper,
  SectionBGcool,
  WorkBoxWrapper,
  WorkLeftBox,
  WorkRightBox,
} from "Styles/GlobalStyles"

export default function index() {
  return (
    <>
      <SectionBGcool>
        <ContainerWrapper>
          <WorkBoxWrapper>
            <WorkLeftBox>
              <img src="/images/imac.jpg" />
            </WorkLeftBox>
            <WorkRightBox>
              <img src="/images/imac.jpg" />
            </WorkRightBox>
          </WorkBoxWrapper>
        </ContainerWrapper>
      </SectionBGcool>
    </>
  )
}
