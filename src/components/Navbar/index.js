/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {
  NavContainer,
  Wrapper,
  LeftGrid,
  RigthGrid,
  NavLinks,
  MobileLinks,
} from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <LeftGrid>LEFT COLLECTIVE</LeftGrid>
          <RigthGrid>
            <NavLinks>
              <a href="/about">ABOUT</a>
              <a href="/latestwork">LATEST WORK</a>
              <a href="/shop">SHOP</a>
              <a href="/contact">CONTACT</a>
            </NavLinks>
            <MobileLinks>
              <a href="/about">ABOUT</a>
              <a href="/latestwork">LATEST WORK</a>
              <a href="/shop">SHOP</a>
              <a href="/contact">CONTACT</a>
            </MobileLinks>
          </RigthGrid>
        </NavContainer>
      </Wrapper>
    </>
  )
}

export default index
