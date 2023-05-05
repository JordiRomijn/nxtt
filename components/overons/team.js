import Image from "next/image";
import Link from "next/link";

import Jordi from "../../public/assets/jordi.png";
import Joost from "../../public/assets/joost.png";
import Daniel from "../../public/assets/daniel.png";

function team() {
  return (
    <div className="team">
      <div className="container">
        <div className="team__inner">
          <div className="team__inner__title">
            <h2>Ons team</h2>
          </div>
          <div className="team__inner__personen">
            <div className="team__inner__personen__block">
              <div className="team__inner__personen__block__name">
                <h2>Jordi</h2>
              </div>
              <div className="team__inner__personen__block__image">
                <div className="ben2">
                  <Image src={Jordi} />
                  <div className="team__inner__personen__block__image__icon">
                    <p>Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team__inner__personen__block">
              <div className="team__inner__personen__block__name">
                <h2>Joost</h2>
              </div>
              <div className="team__inner__personen__block__image">
                <div className="ben2">
                  <Image src={Joost} />
                  <div className="team__inner__personen__block__image__icon">
                    <p>Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team__inner__personen__block">
              <div className="team__inner__personen__block__name">
                <h2>Daniel</h2>
              </div>
              <div className="team__inner__personen__block__image">
                <div className="ben2">
                  <Image src={Daniel} />
                  <div className="team__inner__personen__block__image__icon">
                    <p>UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default team;
