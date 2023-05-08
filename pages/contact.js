import Layout from "../components/layout/Main";
import Link from "next/link";
import Image from "next/image";
import Pijl from "../public/assets/pijl.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const API_KEY = process.env.API_KEY;

const Result = () => {
  return <p>Bericht is verstuurd! Ik neem zo snel mogelijk contact op.</p>;
};

function contact() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oqo9lvd",
      "template_ubuao9n",
      form.current,
      API_KEY
    );
    e.target.reset();
    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 10000);
  };

  return (
    <div>
      <Layout title="Contact">
        <div className="contact">
          <div className="container">
            <div className="contact__inner">
              <div className="contact__inner__text">
                <h1>Contact</h1>
                <p>
                  Voordat wij iets voor jou kunnen betekenen, willen wij graag
                  eerst een gesprek met jou voeren om te ontdekken wat wij voor
                  jou kunnen betekenen. Dit gesprek kan zowel fysiek als online
                  plaatsvinden.
                </p>

                <p>
                  Laat hier uw gegevens achter en wij nemen contact met jou op.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail} className="contactform">
                <div className="contact__inner__form">
                 <div className="contact__inner__form__input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="contact__inner__form__input">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefoonnummer"
                      required
                    />
                  </div>
                  <div className="contact__inner__form__input">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Bericht"
                      required
                    />
                  </div>
                  <div className="contact__inner__form__input">
                    <button type="submit" className="button-full">Versturen</button>
                  </div>
                </div>
                <div className=""> {result ? <Result /> : null} </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default contact;
