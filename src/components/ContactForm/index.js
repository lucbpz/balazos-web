import React, { useState } from "react"
import axios from "axios"
import SectionTitle from "../SectionTitle"

const ContactForm = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    showThanks: false,
  })

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      showThanks: false,
      [evt.target.name]: value,
    })
  }

  const sendEmail = async e => {
    e.preventDefault()
    try {
      // await axios.post("https://formspree.io/xyyjyanq", {
      //   name: state.name,
      //   email: state.email,
      //   subject: state.subject,
      //   message: state.message,
      // })
      
      setState({
        showThanks: true,
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.log(err)
      sendEmailWithMailTo(state.subject, state.message)
    }
  }

  const sendEmailWithMailTo = (subject, message) => {
    var mail = document.createElement("a")
    mail.href = `mailto:hola@balazosdirecto.com?subject=${subject}&body=${message}`
    mail.click()
  }

  return (
    <div style={{ paddingTop: "0px" }} className={"full dark"}>
      <div className={"row"}>
        <div className={"large-8 columns large-centered"}>
          <SectionTitle title="Solicita información" smallTitle="CONTACTO" />
        </div>
        <div className={"four spacing"}></div>
        <div className={"large-8 medium-8 columns"}>
          <div className={"form"}>
            <div className={"row"}>
              <form
                id="contact_form"
                name="contact"
                className={"dark"}
                // method="POST"
                // action={`https://formspree.io/${process.env.BALAZOS_EMAIL}`}
                // onSubmit={sendEmail}
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className={"large-12 columns"}>
                  {state.showThanks ? (
                    <p id="thanks">
                      Gracias por contactar con nosotros. Te contestaremos en
                      breve!
                    </p>
                  ) : null}
                </div>
                <div className={"medium-12 columns"}>
                  <input
                    className={"required"}
                    name="name"
                    placeholder="NOMBRE"
                    type="text"
                    onChange={handleChange}
                  />
                  <input
                    className={"required email"}
                    name="email"
                    placeholder="EMAIL"
                    type="text"
                    onChange={handleChange}
                  />
                  <input
                    className={"required"}
                    name="subject"
                    placeholder="ASUNTO"
                    type="text"
                    onChange={handleChange}
                  />
                  <textarea
                    className={"required"}
                    name="message"
                    placeholder="MENSAJE"
                    onChange={handleChange}
                  ></textarea>
                  <input
                    name="recipient"
                    type="hidden"
                    value="{{ site.email }}"
                  />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={"spacing"}></div>
                  <input className={"button white"} type="submit" />
                </div>
              </form>
            </div>
          </div>
          <div className={"four spacing"}></div>
        </div>
        <div className={"large-4 medium-4 columns"}>
          <div className={"border-wrapper"}>
            <div className={"borders"}>
              <div className={"top"}></div>
              <div className={"right"}></div>
              <div className={"bottom"}></div>
              <div className={"left"}></div>
            </div>
            <div className={"contact-details"}>
              <div className={"content"}>
                <h4>Lugar de origen:</h4>
                <p>Mairena del Alcor, Sevilla, Spain</p>
                <h4>Phone:</h4>
                <p>+34 658 94 66 45</p>
                <h4>Email:</h4>
                <p>hola@balazosdirecto.com</p>
              </div>
            </div>
          </div>
          <div className={"four spacing"}></div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
