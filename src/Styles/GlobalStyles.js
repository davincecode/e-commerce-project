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
  ${tw`w-full px-8 py-16 flex flex-col bg-[#eeede8]`}
`
export const HeroElements = styled.div`
  ${tw`flex flex-col items-center content-center justify-center md:flex-row md:space-x-9`}
`

// Feature Components
export const FeatureContainer = styled.div`
  ${tw`w-full flex justify-center items-center bg-[#a09083] h-64`}
`

// Work Components
// export const WorkContainer = styled.div`
//   ${tw`grid grid-rows-1 gap-8 md:grid-cols-2 px-[450px]`}
// `

// Textarea
export const TextBoxWarm = styled.div`
  ${tw`flex flex-row justify-center items-center text-sm font-millerLight h-72 bg-[#a19183]`}
`
export const TextBoxCool = styled.div`
  ${tw`flex flex-row justify-center items-center text-sm font-millerLight h-72 bg-[#e0e4e3]`}
`

// 1 x 2 Box Wrappers
export const ContainerWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-full`}
`
export const WorkBoxWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-1/2 h-full gap-4 md:flex-row`}
`
export const WorkLeftBox = styled.div`
  ${tw`flex object-fill w-full h-full`}
`
export const WorkRightBox = styled.div`
  ${tw`flex flex-col object-fill w-full h-full gap-4 p-5`}
`

// Button
export const Button = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black font-millerLight`}
`
