import React from "react"
import { TextBoxWarm } from "Styles/GlobalStyles"

export default function index() {
  return (
    <>
      <TextBoxWarm id="#intro" className="z-50">
        <h1 className="flex p-8 text-3xl leading-relaxed tracking-wide text-white font-millerLight">
          Full-stack web design & planning based in Alberta, Canada.
        </h1>
      </TextBoxWarm>
    </>
  )
}
