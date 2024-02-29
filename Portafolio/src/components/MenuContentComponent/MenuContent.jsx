import Footer from "../FooterComponent/Footer";
import Menu from "../MenuComponent/Menu";
import style from "./MenuContentStyle/MenuContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MenuContent() {
  return (
    <article className={style.MenuContent}>
      <div>
        <h1>{"</  Nestor Londoño>"}</h1>
        <h2>Full Stack Developer</h2>
        <div className={style.IconContent}>
          <div>
            <a
              href="https://github.com/Nestor00056"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nestor-londo%C3%B1o-0377a5283"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <Menu></Menu>
      <Footer></Footer>
    </article>
  );
}

export default MenuContent;
