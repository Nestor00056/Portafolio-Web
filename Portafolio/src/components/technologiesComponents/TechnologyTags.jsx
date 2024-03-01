import style from "./style/Tags.module.css";
function TechnologyTags({ tech }) {
  return <p className={style.Tags}>{tech}</p>;
}

export default TechnologyTags;
