import style from "./FooterStyle/FooterStyle.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <article className={style.FooterContent}>
      <h1>Contactame </h1>
      <div className={style.contactContent}>
        <div className={style.gmail}>
          <CgMail size={30} />
          <p>nlondono609@gmail.com</p>
        </div>
      </div>
    </article>
  );
}

export default Footer;
