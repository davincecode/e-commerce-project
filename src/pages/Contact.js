import React from "react"
import axios from "axios"

class Contact extends React.Component {
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
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
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
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact</h1>
            <p>
              If you have any questions, feel free to contact me. I am always
              looking for new opportunities to work with.
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={this.handleSubmit}>
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  className=""
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  className=""
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="message">Message</label>
                <textarea
                  className=""
                  id="message"
                  name="message"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.disabled}
              >
                Submit
              </button>

              {this.state.emailSent === true && (
                <p className="email-sent">Email Sent</p>
              )}
              {this.state.emailSent === false && (
                <p className="email-not-sent">Email Not Sent</p>
              )}
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Contact
