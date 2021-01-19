import React, { useState } from 'react';
import { db } from '../Firebase';
import '../App.css';
import './Contact.css';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        city: city,
        message: message,
      })
      .then(() => {
        alert("Sua mensagem foi enviada. Obrigado pelo contato!");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="form-content-container">
        <form id="contact-section" className="contact-form" onSubmit={handleSubmit}>
          <h1>CONTATO</h1>
          <p>Preencha seus dados e nós entraremos em contato.</p>

          <div className="label-float">
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Nome:</label>
          </div>

          <div className="label-float">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-Mail:</label>
          </div>

          <div className="form-wrapper-2col">
            <div className="label-float">
              <input
                type="text"
                placeholder=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Telefone:</label>
            </div>

            <div className="label-float">
              <input
                type="text"
                placeholder=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label>Cidade / UF: </label>
            </div>
          </div>

          <div className="label-float">
            <textarea
              type="text"
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label>Mensagem:</label>
          </div>
          <div className="btn-submit">
            <button type="submit">
              Enviar
            </button>
          </div>

        </form>
        <div className="contact-info">
        </div>
      </div>
    </div>
  );
}

export default Contact;