import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo_white.png";

function index() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__inner__top">
          <div className="footer__inner__top__pages">
            <ul>
              <Link href="/">Home</Link>
              <Link href="/diensten">Diensten</Link>
              <Link href="/overons">Over ons</Link>
            </ul>
            <ul>
              {/* <li>Cases</li> */}
              <Link href="/contact">Contact</Link>
            </ul>
          </div>
          <div className="footer__inner__top__contact">
            <ul>
              <li>info@nxtt.nl</li>
              <li>06-53226309</li>
            </ul>
          </div>
        </div>

        <div className="footer__inner__bottom">
          <div className="footer__inner__bottom__location">
            <span>Wageningselaan 50, Veenendaal</span>
          </div>
          <div className="footer__inner__bottom__links">
            <ul>
              <li>Privacybeleid</li>
              <li>Algemene voorwaarden</li>
            </ul>
          </div>
          <div className="footer__inner__bottom__logo">
            <Image src={Logo} alt="Logo NXTT"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
