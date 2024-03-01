import MenuContent from "../../components/MenuContentComponent/MenuContent";
import MainContent from "../../components/MainContentComponent/MainContent";
import style from "../Style/mainContent.module.css";
import GenericComponent from "../../components/GenericComponent/GenericComponent";
import profileImage from "../../assets/profileImage.png";
import { FaS } from "react-icons/fa6";
function Aboutme() {
  const Description = `¡Hola mundo! Soy Néstor Camilo, un entusiasta del desarrollo. Me encanta este mundo porque despierta mi curiosidad y alimenta mi deseo de crear cosas nuevas. No solo quiero aprender a programar, sino que también busco crecer como persona y expandir mi forma de pensar. Siempre estoy listo para enfrentar nuevos desafíos, porque sé que son oportunidades para crecer. Llevo dos años sumergido en el mundo del desarrollo web, fascinado por todo lo que podemos crear, implementar y resolver. ¡Vamos a por más!"`;
  return (
    <div className={style.mainContent}>
      <MenuContent></MenuContent>
      <MainContent>
        <GenericComponent
          title={"¡Hola mundo!"}
          Description={Description}
          TechnologiesArray={[
            "JavaScript",
            "Node",
            "Html5",
            "CSS3",
            "React",
            "Sequelize",
            "Redux",
            "PostgreSQL",
            "Express",
          ]}
          profileImage={profileImage}
        ></GenericComponent>
      </MainContent>
    </div>
  );
}

export default Aboutme;
