import Image from "next/image";
import Logo from "../public/assets/logo_white.png";
import b1 from "../public/assets/burger/1-white.svg";
import b2 from "../public/assets/burger/2-white.svg";
import b3 from "../public/assets/burger/3-white.svg";
import X from "../public/assets/x-black.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="hero">
      <div className="hero__navbar">
        <Link href={"/"}>
          <div className="logo">
            <Image
              src={Logo}
              alt="Wij bieden op maat gemaakte oplossingen voor uw branding, design, development en SEO, met meetbaar resultaat."
              width={250}
            />
          </div>
        </Link>

        <div className={`hero-menu ${menuActive ? "active" : ""}`}>
          <div className="hero-menu__close">
            <div className="close__button" onClick={closeMenu}>
              <Image src={X} alt="Close menu" />
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
          <div className="hero-bottom">
            <h5>Privacy beleid</h5>
            <Link href="https://nxtt.nl/assets/algemenevoorwaarden.pdf">
              <h5>Algemene voorwaarden</h5>
            </Link>
          </div>
        </div>

        <div className="button-primary">
          <Link href="/contact">Contact</Link>
        </div>

        <div
          className={`overlay ${menuActive ? "active" : ""}`}
          onClick={closeMenu}
        />

        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <Image src={b1} alt="Open menu" className="first" />
          <Image src={b2} alt="Open menu" />
          <Image src={b3} alt="Open menu" />
        </div>
      </div>
      <div className="hero__text">
        <h1>
          Wij maken <span> digitale producten </span> met impact.
        </h1>
      </div>
    </div>
  );
};

export default Header;
