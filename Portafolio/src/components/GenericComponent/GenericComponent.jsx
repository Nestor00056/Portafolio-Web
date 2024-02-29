import { SiExpress } from "react-icons/si";
import GenericRender from "../GenericRenderComponent/GenericRender";
import Technology from "../technologiesComponents/Technology";
import style from "./style/Generic.module.css";

function GenericComponent({ title, imgArray, Description, TechnologiesArray, children }) {
  return (
    <div className={style.divContent}>
      <h1>{title}</h1>
      <p>{Description}</p>
      {imgArray?.length > 1 ? (
        <div className={style.ImageSection}>
          <h1>Imagenes</h1>
          <div className={style.ImageContent}>
            <GenericRender data={imgArray} image={true}></GenericRender>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={style.techSection}>
        <h1>Tecnologias</h1>
        <div className={style.ItContent}>
          <GenericRender data={TechnologiesArray} tech={true}></GenericRender>
        </div>
      </div>
    </div>
  );
}

export default GenericComponent;
