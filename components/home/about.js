import Image from "next/image";
import Foto from "../../public/assets/home-photo.png";
import Pijl from "../../public/assets/pijl.svg";
import Link from "next/link";

function about() {
  return (
    <div className="abouthome">
      <div className="container">
        <div className="abouthome__inner">
          <div className="abouthome__inner__image">
            <Image src={Foto} alt="NXTT Over Ons" />
          </div>
          <div className="abouthome__inner__text">
            <h2>Over ons</h2>
            <p>
              NXTT is een enthousiast, gepassioneerd en doelgestreven team. Wij
              ambiëren om als team een goede prestatie te leveren naar de klant.
              We functioneren in een team van drie man, waar iedereen elkaar
              mooi aanvult. Door de variatie van onderlinge kwaliteiten binnen
              het team kunnen we onze kwaliteit waarborgen.
            </p>
            <div className="abouthome__inner__text-button">
              <div className="button-full">
                <Link href="/overons">
                  Meer weten over ons <Image src={Pijl} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default about;
