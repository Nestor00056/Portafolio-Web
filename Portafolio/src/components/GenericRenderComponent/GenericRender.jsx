import Technology from "../technologiesComponents/Technology";
import { CreateObjectWithIcons } from "../../helpers/Icons";
import Image from "../ImageComponents/Image";
import RenderContent from "./RenderContent";
import ProyectComponent from "../ProyectComponents/ProyectComponent";
import TechnologyTags from "../technologiesComponents/TechnologyTags";

function GenericRender({ data, tech, image, proyect, tags }) {
  if (tech) {
    const newArray = CreateObjectWithIcons(data);
    return (
      <>
        {newArray?.map((el, index) => {
          return <Technology key={index} tech={el.tech} Icon={el.Icon}></Technology>;
        })}
      </>
    );
  } else if (image) {
    return (
      <>
        {data?.map((el, index) => {
          return <Image key={Math.random(100) * index} url={el?.url}></Image>;
        })}
      </>
    );
  } else if (proyect) {
    return (
      <>
        <RenderContent>
          {data?.map((el, index) => {
            return (
              <ProyectComponent
                key={Math.random(200) * index}
                title={el?.title}
                Description={el?.Description}
                tags={el?.Technologies}
                images={el?.images}
                development={el?.development}
              ></ProyectComponent>
            );
          })}
        </RenderContent>
      </>
    );
  } else if (tags) {
    return (
      <>
        {data?.map((el, index) => {
          return (
            <TechnologyTags key={Math.random(300) * index} tech={el}></TechnologyTags>
          );
        })}
      </>
    );
  }
}

export default GenericRender;
