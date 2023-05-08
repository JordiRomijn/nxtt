import DE from "../../public/assets/services/DE.svg";
import SE from "../../public/assets/services/SE.svg";
import ON from "../../public/assets/services/ON.svg";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className="container ben">
      <div className="services">
          <div className="services__block">
            <div className="services__block__inner">
              <div className="services__block__inner__letters">
                <Image src={DE} alt="design" />
              </div>
              <div className="services__block__inner__letters-sm">
                <span></span>
              </div>
              <div className="container">
                <div className="services__block__inner__heading">
                  <h2>Design</h2>
                </div>

                <div className="services__block__inner__text">
                  <p>
                    Een goed design zet bezoekers om in klanten door de
                    boodschap snel en duidelijk over te brengen met effectieve
                    tekst, kleuren en afbeeldingen.
                  </p>
                </div>
              </div>
            </div>
          </div>

    
          <div className="services__block">
            <div className="services__block__inner">
              <div className="services__block__inner__letters">
                <Image src={SE} alt="SEO" />
              </div>
              <div className="services__block__inner__letters-sm">
                <span>SE</span>
              </div>
              <div className="container">
                <div className="services__block__inner__heading">
                  <h2>SEO</h2>
                </div>

                <div className="services__block__inner__text">
                  <p>
                    Met onze expertise in zoekmachineoptimalisatie zorgen we dat
                    uw website hoger dan ooit in zoekresultaten verschijnt.
                  </p>
                </div>
              </div>
            </div>
          </div>
   
      </div>

      <div className="services bottom">
        
          <div className="services__block">
            <div className="services__block__inner">
              <div className="services__block__inner__letters">
                <Image src={DE} alt="Development" />
              </div>
              <div className="services__block__inner__letters-sm">
                <span>DE</span>
              </div>
              <div className="container">
                <div className="services__block__inner__heading">
                  <h2>Developement</h2>
                </div>
                <div className="services__block__inner__text">
                  <p>
                    Bij development streven we naar snelle, veilige en 24/7
                    bereikbare websites die de perfecte digitale ervaring
                    bieden.
                  </p>
                </div>
              </div>
            </div>
          </div>
       
          <div className="services__block">
            <div className="services__block__inner">
              <div className="services__block__inner__letters">
                <Image src={ON} alt="Onderhoud" />
              </div>
              <div className="services__block__inner__letters-sm">
                <span>ON</span>
              </div>
              <div className="container">
                <div className="services__block__inner__heading">
                  <h2>Onderhoud</h2>
                </div>
                <div className="services__block__inner__text">
                  <p>
                    Zelfs nadat je website online staat zullen wij deze blijven
                    onderhouden. Wij zorgen er voor dat de website online staat,
                    up to date blijft en deze goed beveiligd is en blijft.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Services;