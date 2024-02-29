import Technology from "../technologiesComponents/Technology";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { CreateObjectWithIcons } from "../../helpers/Icons";
import Image from "../ImageComponents/Image";

function GenericRender({ data, tech, image }) {
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
  }
}

export default GenericRender;
