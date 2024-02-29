import MenuContent from "../../components/MenuContentComponent/MenuContent";
import MainContent from "../../components/MainContentComponent/MainContent";
import style from "../Style/mainContent.module.css";
import GenericComponent from "../../components/GenericComponent/GenericComponent";
function Aboutme() {
  const Description = `¡Hola a todos y todas!

  Mi nombre es Néstor Camilo y soy un apasionado desarrollador Full Stack, con un enfoque especializado en el backend. ¡Bienvenidos a mi portafolio!
  
  Aquí podrás descargar mi currículum, conocer más sobre mí, explorar mi experiencia profesional, descubrir los proyectos en los que he trabajado y conectarte conmigo a través de mis redes sociales.
  
  ¡Espero que disfrutes explorando mi trabajo!`;
  return (
    <div className={style.mainContent}>
      <MenuContent></MenuContent>
      <MainContent>
        <GenericComponent
          title={"Bienvenido"}
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
        ></GenericComponent>
      </MainContent>
    </div>
  );
}

export default Aboutme;
