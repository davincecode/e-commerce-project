import React from "react"
import { WorkLeftBox, CenteredTitle } from "Styles/GlobalStyles"

export default function index() {
  const styles = {
    color: "red",
    fontSize: "1rem",
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
        <WorkLeftBox>
          <CenteredTitle>WEBDESIGN AND DEVELOPMENT</CenteredTitle>
        </WorkLeftBox>
      </div>
    </>
  )
}
