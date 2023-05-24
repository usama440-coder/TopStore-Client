import style from "../styles/footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src="/img/logo-dark.png" alt="logo-dark" width={150} />
      <div className={style.footerContent}>
        <div>
          <h3>Contact</h3>
          <p>
            <b>Call Us: </b>03404403500
          </p>
          <p>
            <b>Email: </b>topstoreisb@gmail.com
          </p>
          <p>
            <b>Address: </b>Defence phase 2, House 21/4, Islamabad, Pakistan
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <Link
            className={style.socialIcon}
            href="https://www.facebook.com"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className={style.socialIcon}
            href="https://www.instagram.com"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className={style.socialIcon}
            href="https://www.twitter.com"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
