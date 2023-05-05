import Image from "next/image";
import Danielos from "../../public/assets/daniel-aan-de-werkje.png";

function DetailDesign() {
  return (
    <div className="aanpak">
      <div className="container">
        <div className="aanpak__inner">
          <div className="aanpak__inner-text">
            <h2>Aanpak</h2>
            <p>
              Onze ontwerpers bekijken eerst jouw bedrijfsstrategie, klanten en
              concurrenten voordat ze een manier bedenken om jouw online
              aanwezigheid te verbeteren. Ze zorgen ervoor dat je website of app
              gebruikersvriendelijk is en past binnen jouw budget.
            </p>
          </div>
          <div className="aanpak__inner-image">
            <Image src={Danielos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDesign;
