import style from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <Link href="/">
        <Image
          src="/img/logo_light.png"
          alt="light_logo"
          width={150}
          height={40}
          priority={true}
        />
      </Link>

      <div className={`${style.navbarLinks}`}>
        <Link className={style.navbarLink} href="/">
          Home
        </Link>

        <Link className={style.navbarLink} href="/products">
          Products
        </Link>

        <Link className={style.navbarLink} href="/">
          Contact
        </Link>

        <Link className={style.navbarLink} href="/">
          About
        </Link>
      </div>

      <div className={`${style.navbarLinksIcons}`}>
        <Link href="/">
          <FaUserAlt className={style.navbarLink} />
        </Link>
        <Link href="/">
          <FaShoppingCart className={style.navbarLink} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
