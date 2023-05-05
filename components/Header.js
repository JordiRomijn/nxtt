import Image from "next/image";
import Logo from "../public/assets/logo.png";
import b1 from "../public/assets/burger/1.svg";
import b2 from "../public/assets/burger/2.svg";
import b3 from "../public/assets/burger/3.svg";
import x from "../public/assets/x-white.svg";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <div className="fixed">
        <div className="header">
          <Link href={"/"}>
            <div className="header__logo">
              <Image
                src={Logo}
                alt="Wij bieden op maat gemaakte oplossingen voor uw branding, design, development en SEO, met meetbaar resultaat."
              />
            </div>
          </Link>
        </div>
        <div className={`burger-menu ${menuActive ? "active" : ""}`}>
          <div className="burger-menu__close">
            <div className="close__button" onClick={closeMenu}>
              <Image src={x} alt="Close menu" />
            </div>
          </div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/services"}>Diensten</Link>
            </li>
            <li>
              <Link href={"/overons"}>Over ons</Link>
            </li>
            {/* <li>Cases</li> */}
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <div className="header-bottom">
            <h5>Privacy beleid</h5>
            <h5>Algemene voorwaarden</h5>
          </div>
        </div>

        <div
          className={`overlay ${menuActive ? "active" : ""}`}
          onClick={closeMenu}
        />

        <div
          className={`header__hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <Image src={b1} alt="Open menu" className="first" />
          <Image src={b2} alt="Open menu" />
          <Image src={b3} alt="Open menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
