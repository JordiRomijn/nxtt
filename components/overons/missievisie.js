import Image from "next/image";
import Foto from "../../public/assets/home-photo.png";
import Pijl from "../../public/assets/pijl.svg";
import Link from "next/link";

function about() {
  return (
    <div className="block">
      <div className="container">
        <div className="block__missie">
          <h2>Onze missie</h2>
          <p>
            Met onze producten willen we niet alleen dat de online positie
            versterkt word, maar ook dat onze producten bijdragen aan de
            automatisering binnen een bedrijf of organisatie. Wij maken
            producten die toegankelijk zijn, voor zowel en administrator als
            voor de bezoekers.
          </p>
        </div>

        <div className="block__visie">
          <h2>Onze visie</h2>
          <p>
            Een succesvolle website gericht op de toekomst ontwikkel je samen.
            Wij zijn de experts op het gebied van web development, jij kent je
            klanten en de branche waar in je actief bent. Om je beter te kunnen
            helpen bij het vinden en bouwen van de juiste oplossing, is het
            belangrijk dat wij een duidelijk beeld hebben van de doelen die jij
            wilt bereiken.
          </p>
        </div>
      </div>
    </div>
  );
}
export default about;
