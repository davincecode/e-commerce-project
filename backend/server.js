require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT || 5000

const cors = require("cors")
app.use(cors())

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const sgMail = require("@sendgrid/mail")

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.get("/api", (req, res) => {
  res.send("API looks good! 🚀")
})

app.post("/api/email", (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: "vncntybnz@gmail.com",
    from: req.body.email,
    subject: "davincecode website",
    text: req.body.message,
  }
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ success: true })
    })
    .catch((error) => {
      console.log("ERROR", error)
      res.status(401).json({ success: false })
    })
})

app.listen(port, () => console.log(`Listening on port ${port} 🤖`))
