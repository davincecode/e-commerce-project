import styled from "styled-components"
import tw from "twin.macro"

// Main Containers
export const MainContainer = styled.div`
  ${tw`w-screen`}
`

export const SectionContainer = styled.div`
  ${tw`w-screen text-5xl`}
`

// Navbar Component
export const NavContainer = styled.div`
  ${tw`flex flex-col w-screen p-10 mx-auto bg-gray-100 md:justify-between md:flex-row`}
`
export const NavLinks = styled.div`
  ${tw`items-center justify-center hidden space-x-16 tracking-widest md:flex`}
`
export const MobileLinks = styled.div`
  ${tw`flex flex-col items-center justify-center tracking-widest md:hidden`}
`

// Hero Component
export const HeroContainer = styled.div`
  ${tw`w-screen`}
`
export const HeroElements = styled.div`
  ${tw`object-cover`}
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
  ${tw`flex flex-row text-sm font-millerLight bg-[#a19183]`}
`
