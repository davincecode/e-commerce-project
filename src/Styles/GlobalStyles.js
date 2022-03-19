import styled from "styled-components"
import tw from "twin.macro"

// Main Containers
export const MainContainer = styled.div`
  ${tw`w-screen h-screen bg-gray-600`}
`

export const SectionContainer = styled.div`
  ${tw`w-screen text-5xl`}
`

// Navbar Component
export const NavContainer = styled.div`
  ${tw`flex flex-col w-screen p-10 mx-auto bg-gray-100 md:justify-between md:flex-row`}
`
export const NavLinks = styled.div`
  ${tw`md:flex hidden space-x-16 justify-center items-center tracking-widest`}
`
export const MobileLinks = styled.div`
  ${tw`flex flex-col md:hidden justify-center items-center tracking-widest`}
`

// Hero Component
export const HeroContainer = styled.div`
  ${tw`relative w-full`}
`
export const HeroElements = styled.div`
  ${tw``}
`

// Wrappers
export const Wrapper = styled.div`
  ${tw`w-screen`}
`

// Grids
export const LeftGrid = styled.div`
  ${tw`text-3xl font-millerLight`}
`
export const RigthGrid = styled.div`
  ${tw`flex flex-row text-sm font-millerLight`}
`
// Textarea
export const TextareaOne = styled.div`
  ${tw`flex flex-row text-sm font-millerLight`}
`
