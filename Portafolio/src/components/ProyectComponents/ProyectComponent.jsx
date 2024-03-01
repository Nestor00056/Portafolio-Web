import { useNavigate } from "react-router";
import GenericRender from "../GenericRenderComponent/GenericRender";
import TechnologyTags from "../technologiesComponents/TechnologyTags";
import style from "./style/proyect.module.css";
function ProyectComponent({ title, Description, tags, images, development }) {
  const navigate = useNavigate();
  return (
    <div className={style.ProyectContent}>
      <h1>{title}</h1>
      <h2>Desarrollo: {development}</h2>
      <div className={style.TagsContent}>
        <GenericRender data={tags} tags={true}></GenericRender>
      </div>
      <h3>Descripcion: </h3>
      <p>{Description?.DescriptionLite}</p>
      <button
        onClick={() => {
          navigate(`detailed-${title}`, {
            state: { title, Description, Technologies: tags, images },
          });
        }}
      >
        Ver detalles
      </button>
    </div>
  );
}

export default ProyectComponent;
