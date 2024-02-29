import style from "./Style/mainContent.module.css";

function MainContent({ children }) {
  return <div className={style.mainContent}>{children}</div>;
}

export default MainContent;
