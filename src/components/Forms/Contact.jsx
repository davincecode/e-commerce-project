import React, { Component } from "react"
import axios from "axios"
import {
  ContainerWrapper,
  SectionBGneutral,
  SectionTitle,
  ItemCenter,
  SectionP,
} from "Styles/GlobalStyles"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    }
  }

  
  
    handleChange = (event) => {
    // save the target object for future reference
    const target = event.target
    // Check if the target is the checkbox or text input to save the value
    const value = target.type === "checkbox" ? target.checked : target.value
    // Save the input name, i.e. name = state object
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      disabled: true,
    })

    axios.post("/api/email", this.state).then((res) => {
      if (res.data.success) {
        this.setState({
          disabled: false,
          emailSent: true,
        })
      } else {
        this.setState({
          disabled: false,
          emailSent: false,
        })
      }
    })
  }

  render() {
    return (
      <>
        <SectionBGneutral>
          <ContainerWrapper>
            <SectionTitle>CONTACT</SectionTitle>
            <SectionP>
              If you have any questions, feel free to contact me. I am always
              looking for new opportunities to work with.
            </SectionP>

            <div className="flex justify-center w-full p-8 ">
              <div className="w-full md:w-1/2">
                <form onSubmit={this.handleSubmit} className="text-base font-millerLight">
                  <div className="flex flex-row w-full p-4">
                    <label htmlFor="name">Name</label>
                    <input
                      className="flex items-center justify-center w-full p-2 mx-4 rounded-md"
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex flex-row w-full p-4">
                    <label htmlFor="email">Email</label>
                    <input
                      className="flex items-center justify-center w-full p-2 mx-4 rounded-md"
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex flex-row w-full p-4">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="flex items-center justify-center w-full p-2 mx-4 rounded-md"
                      id="message"
                      name="message"
                      rows="3"
                      value={this.state.message}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <ItemCenter>
                    <button type="submit" disabled={this.state.disabled} className="flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black cursor-pointer font-millerLight" >
                      Submit
                    </button>
                  {this.state.emailSent === true && (
                    <p className="email-sent">Email Sent</p>
                    )}
                  {this.state.emailSent === false && (
                    <p className="email-not-sent">Email Not Sent</p>
                    )}
                    </ItemCenter>
                </form>
              </div>
            </div>
          </ContainerWrapper>
        </SectionBGneutral>
      </>
    )
  }
}

export default Contact
