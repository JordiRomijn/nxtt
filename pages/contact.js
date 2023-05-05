import Layout from "../components/layout/Main";
import Link from "next/link";
import Image from "next/image";
import Pijl from "../public/assets/pijl.svg";

function contact() {
  return (
    <div>
      <Layout title="Contact">
        <div className="contact">
          <div className="container">
            <div className="contact__inner">
              <div className="contact__inner__text">
                <h1>Contact</h1>
                <p>
                  Wij willen eerst met jou een gesprek hebben gehad, dit kan
                  zowel telefonische als fysiek. Om er achter te komen wat wij
                  voor jou kunnen betekenen. Op basis van dat gesprek stellen
                  wij ook een offerte voor jou op.
                </p>
              </div>
              <div className="contact__inner__form">
                <div className="contact__inner__form__input">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="contact__inner__form__input">
                  <input type="text" placeholder="Telefoonnummer" />
                </div>
                <div className="contact__inner__form__input">
                  <textarea type="text" placeholder="Bericht" />
                </div>
                <div className="contact__inner__form__input">
                  <div className="button-full">
                    <Link href="/">Versturen</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default contact;
