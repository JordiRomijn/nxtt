import Link from "next/link";

function diensten() {
  return (
    <div className="diensten">
      <div className="container">
        <div className="diensten__inner">
          <div className="diensten__inner__text">
            <p>
              Wij bouwen websites die gericht zijn op de toekomst. Die modern
              zijn, aansluiten bij de doelgroep en helpen bij de automatisering
              binnen uw organistatie.
            </p>
          </div>
          <div className="diensten__inner__services">
            <div className="diensten__inner__services__1">
              <span>Development</span>
              <span className="rotated">SEO</span>
            </div>
            <div className="diensten__inner__services__2">
              <span>UI Design</span>
              <span>Onderhoud</span>
            </div>
          </div>
          <div className="diensten__inner__button">
            <div className="button-primary">
              <Link href="/services">Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default diensten;
