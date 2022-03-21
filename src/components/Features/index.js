import React from "react"
import { TextANoBG, TextWhite } from "Styles/GlobalStyles"

export default function index() {
  const styles = {
    backgroundImage: "url('/images/house.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vh",
  }

  return (
    <>
      <div style={styles}>
        <TextANoBG>
          <TextWhite>
            CREATING simplicity and positivity through thoughtfully DESIGNED
            SPACES
          </TextWhite>
        </TextANoBG>
      </div>
    </>
  )
}
