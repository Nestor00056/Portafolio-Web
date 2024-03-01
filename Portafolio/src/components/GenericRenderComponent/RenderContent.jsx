import style from "./style/genericRender.module.css";
function RenderContent({ children }) {
  return <div className={style.RenderContent}>{children}</div>;
}

export default RenderContent;
