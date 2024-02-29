import style from "./style/Image.module.css";

function Image({ url }) {
  return (
    <>
      <img src={url} alt="" className={style.Image} />
    </>
  );
}

export default Image;
