import Link from "next/link";
import Image from "next/image";
import Pijl from "../public/assets/pijl.svg"

function WP() {
  return (
    <div className="center">
      <div className="wpadmin">
        <h1>Leuk geprobeerd, maar dit is geen Wordpress</h1>
        <h1>Ga nu terug naar de website</h1>
        <div className="button-primary">
          <Link href="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default WP;
