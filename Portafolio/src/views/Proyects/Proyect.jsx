import GenericRender from "../../components/GenericRenderComponent/GenericRender";
import MainContent from "../../components/MainContentComponent/MainContent";
import MenuContent from "../../components/MenuContentComponent/MenuContent";
import style from "../Style/mainContent.module.css";

function Proyect() {
  const images = {
    url: "https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/04/lenguaje-de-programacion-elixir-scaled.jpg",
  };
  const objectInfo = {
    development: "Back-end",
    title: "Proyecto Uno",
    Description: {
      DescriptionDef: "asdsadasdsadasdassdasdasdasdasasaasdas",
      DescriptionLite: "Hola mundo",
    },
    images: [images, images, images],
    Technologies: [
      "JavaScript",
      "Node",
      "Html5",
      "CSS3",
      "React",
      "Sequelize",
      "Redux",
      "PostgreSQL",
      "Express",
    ],
  };
  const data = [objectInfo];
  return (
    <div className={style.mainContent}>
      <MenuContent></MenuContent>
      <MainContent>
        <GenericRender data={data} proyect={true}></GenericRender>
      </MainContent>
    </div>
  );
}

export default Proyect;
