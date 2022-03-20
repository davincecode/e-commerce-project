/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { NavContainer, LeftNav, RigthNav, NavLinks } from "Styles/GlobalStyles"

const index = () => {
  return (
    <>
      <NavContainer>
        <LeftNav>XVIEW COLLECTIVE</LeftNav>
        <RigthNav>
          <NavLinks>
            <a href="/about">ABOUT</a>
            <a href="/latestwork">LATEST WORK</a>
            <a href="/shop">SHOP</a>
            <a href="/contact">CONTACT</a>
          </NavLinks>
          {/* <MobileLinks>
            <a href="/about">ABOUT</a>
            <a href="/latestwork">LATEST WORK</a>
            <a href="/shop">SHOP</a>
            <a href="/contact">CONTACT</a>
          </MobileLinks> */}
        </RigthNav>
      </NavContainer>
    </>
  )
}

export default index
