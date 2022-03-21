/* DAVINCECODE LIB */

import styled from "styled-components"
import tw from "twin.macro"

/////////////////////////// CONTENT CONTAINERS ///////////////////////////
export const FullContainer = styled.div`
  ${tw``}
`
export const SectionBGcool = styled.div`
  ${tw`bg-[#e0e4e3]`}
`
export const SectionBGwarm = styled.div`
  ${tw`bg-[#a19183]`}
`
export const ParallaxBG = styled.div`
  ${tw`w-full h-screen object-cover bg-scroll `}
`

////////////////////////// WRAPPERS NO-BG-COLOR //////////////////////////
export const WrapperOne = styled.div`
  ${tw`flex justify-center h-full`}
`
export const WrapperTwo = styled.div`
  ${tw`flex justify-center items-center w-1/3`}
`
export const ItemCenter = styled.div`
  ${tw`flex justify-center items-center`}
`

///////////////////////////// NAV COMPONENTS /////////////////////////////
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

///////////////////////////// HERO COMPONENTS /////////////////////////////
export const HeroContainer = styled.div`
  ${tw`w-full px-8 py-16 flex flex-col bg-[#eeede8]`}
`
export const HeroElements = styled.div`
  ${tw`flex flex-col items-center content-center justify-center md:flex-row md:space-x-9`}
`

///////////////////////////// FEATURE COMPONENTS /////////////////////////////
export const FeatureContainer = styled.div`
  ${tw`w-full flex justify-center items-center bg-[#a09083] h-64`}
`

///////////////////////////// 1 x 2 Box Wrappers /////////////////////////////
export const ContainerWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-full md:p-12 mb-5`}
`
export const WorkBoxWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-full p-8 md:w-3/5 md:flex-row`}
`
export const WorkLeftBox = styled.div`
  ${tw`relative flex items-center justify-center object-fill w-full h-full`}
`
export const WorkRightBox = styled.div`
  ${tw`relative flex flex-col items-center justify-center object-fill w-full h-full gap-4 mt-4 md:mt-0 md:p-5`}
`
export const CenteredTitle = styled.div`
  ${tw`absolute text-sm top-1/2 bg-[#a09083] text-white font-millerLight p-4`}
`

////////////////////////////////// SECTIONS //////////////////////////////////
export const SectionContainer = styled.div`
  ${tw`flex items-center justify-center w-full`}
`
export const SectionTitle = styled.div`
  ${tw`flex items-center justify-center mt-16 text-3xl font-millerLight`}
`
export const SectionH1 = styled.div`
  ${tw`flex p-8 text-3xl leading-relaxed tracking-wide text-white font-millerLight`}
`
export const SectionH2 = styled.div`
  ${tw`flex p-8 text-2xl md:text-3xl md:tracking-wide md:leading-loose text-white font-millerLight`}
`
export const SectionPadding = styled.div`
  ${tw`p-8 md:p-24 w-3/4`}
`
//this requires CenteredTitle
export const DivColumn = styled.div`
  ${tw`relative flex items-center justify-center`}
`

//////////////////////////////////// BUTTONS //////////////////////////////////
export const Button = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black font-millerLight`}
`

//////////////////////////////////// TEXTAREA //////////////////////////////////
export const TextAWBG = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-black bg-white font-millerLight`}
`
export const SmoothRoll = styled.div`
  ${tw``}
`
export const TextANoBG = styled.div`
  ${tw`relative flex items-center justify-center object-fill w-full h-full`}
`
export const SectionTextWhite = styled.div`
  ${tw`absolute text-4xl text-white text-center tracking-wider leading-loose font-millerLight p-4`}
`
