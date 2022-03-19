import styled from "styled-components"
import tw from "twin.macro"

// Main Containers
export const MainContainer = styled.div`
  ${tw`w-screen h-screen bg-gray-600`}
`
export const HeroContainer = styled.div`
  ${tw`w-screen bg-[#eeede8] h-40`}
`
export const SectionContainer = styled.div`
  ${tw`w-screen text-5xl`}
`

// Components Containers
export const NavContainer = styled.div`
  ${tw`flex justify-between w-screen p-8 mx-auto bg-gray-100`}
`

// Wrappers
export const Wrapper = styled.div`
  ${tw`w-screen`}
`

// Grids
export const LeftGrid = styled.div`
  ${tw`text-4xl font-millerLight`}
`
export const RigthGrid = styled.div`
  ${tw`flex flex-col text-xl font-millerLight`}
`
