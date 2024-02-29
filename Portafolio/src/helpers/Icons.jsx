import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Icons = {
  JavaScript: <SiJavascript size={57}></SiJavascript>,
  Node: <FaNodeJs size={57}></FaNodeJs>,
  Html5: <FaHtml5 size={57}></FaHtml5>,
  CSS3: <FaCss3Alt size={57}></FaCss3Alt>,
  React: <FaReact size={57}></FaReact>,
  Sequelize: <SiSequelize size={57}></SiSequelize>,
  Redux: <SiRedux size={57}></SiRedux>,
  PostgreSQL: <SiPostgresql size={57}></SiPostgresql>,
  Express: <SiExpress size={57}></SiExpress>,
  TypeScript: <SiTypescript />,
};

const Technologies = [
  "JavaScript",
  "Node",
  "Html5",
  "CSS3",
  "React",
  "Sequelize",
  "Redux",
  "PostgreSQL",
  "Express",
  "TypeScript",
];

export const CreateObjectWithIcons = (ArrayOfObjects) => {
  const newArrayOfObjects = ArrayOfObjects.map((el, index) => {
    const newObject = {
      tech: el,
    };

    for (const element of Technologies) {
      if (element.toLowerCase() === el.toLowerCase()) {
        newObject.Icon = Icons[element];
      }
    }
    return newObject;
  });
  return newArrayOfObjects;
};
