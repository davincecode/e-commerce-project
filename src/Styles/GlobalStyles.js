import styled from "styled-components"
import tw from "twin.macro"

// Content Container
export const BodyContainer = styled.div`
  ${tw`flex flex-col w-screen`}
`

// Navbar Component
export const NavContainer = styled.div`
  ${tw`flex flex-col w-full p-10 mx-auto bg-white md:justify-between md:flex-row`}
`
export const NavLinks = styled.div`
  ${tw`items-center justify-center hidden space-x-16 tracking-widest md:flex`}
`
export const MobileLinks = styled.div`
  ${tw`flex flex-col items-center justify-center tracking-widest md:hidden`}
`
export const LeftNav = styled.div`
  ${tw`text-3xl font-millerLight`}
`
export const RigthNav = styled.div`
  ${tw`flex flex-row text-sm font-millerLight`}
`

// Hero Component
export const HeroContainer = styled.div`
  ${tw`w-full p-16 flex flex-col bg-[#eeede8]`}
`
export const HeroElements = styled.div`
  ${tw`flex items-center content-center justify-center space-x-9 `}
`
// Wrappers
export const Wrapper = styled.div`
  ${tw`w-full py-32`}
`

// Feature Components
export const FeatureContainer = styled.div`
  ${tw`w-full flex justify-center items-center bg-[#a19183] h-64`}
`

// Work Components
export const WorkContainer = styled.div`
  ${tw`grid grid-rows-1 gap-8 md:grid-cols-2 px-[450px]`}
`

// Textarea
export const TextareaOne = styled.div`
  ${tw`flex flex-row text-sm font-millerLight bg-[#a19183]`}
`
