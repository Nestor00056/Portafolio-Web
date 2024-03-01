import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { useEffect } from "react";
import style from "../../Style/mainContent.module.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.test}>
        <h1>{"</NESTOR LONDOÑO>"}</h1>
        <h2>Full Stack Developer</h2>
        <div>
          <SiJavascript size={57}></SiJavascript>
          <FaReact size={57}></FaReact>
          <FaNodeJs size={57}></FaNodeJs>
          <SiPostgresql size={57}></SiPostgresql>
        </div>
        <p
          onClick={() => {
            navigate("/aboutme");
          }}
        >
          Comenzar a Explorar
        </p>
      </div>
    </>
  );
}

export default Home;
