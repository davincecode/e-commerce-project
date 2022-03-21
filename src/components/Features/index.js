import React from "react"
import {
  WrapperTwo,
  SectionTextWhite,
  Button,
  WrapperOne,
  ItemCenter,
} from "Styles/GlobalStyles"

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
        <WrapperOne>
          <WrapperTwo>
            <SectionTextWhite>
              CREATING simplicity and positivity through thoughtfully DESIGNED
              SPACES
              <ItemCenter>
                <a href="#one">
                  <Button>LEARN MORE</Button>
                </a>
              </ItemCenter>
            </SectionTextWhite>
          </WrapperTwo>
        </WrapperOne>
      </div>
    </>
  )
}
