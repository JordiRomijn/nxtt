import Image from "next/image";
import Jordos from "../../public/assets/jordi-aan-het-werk.png";

function DetailDesign() {
  return (
    <div className="aanpak">
      <div className="container">
        <div className="aanpak__inner">
          <div className="aanpak__inner-text">
            <h2>Aanpak</h2>
            <p>
              Onze ontwikkelaars starten met een analyse van uw
              bedrijfsstrategie, klanten en concurrenten om een unieke aanpak te
              creëren die jouw online aanwezigheid versterkt. Ze zorgen ervoor
              dat jouw website of app een naadloze gebruikerservaring biedt en
              binnen jouw budget past.
            </p>
          </div>
          <div className="aanpak__inner-image">
            <Image src={Jordos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDesign;
