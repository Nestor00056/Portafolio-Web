import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { useEffect } from "react";
import style from "../../Style/mainContent.module.css";
import { useNavigate } from "react-router";

function Home() {
  const Navigate = useNavigate();
  function scroll() {
    try {
      Navigate("/aboutme");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  const Description = `¡Hola a todos y todas!

  Mi nombre es Néstor Camilo y soy un apasionado desarrollador Full Stack, con un enfoque especializado en el backend. ¡Bienvenidos a mi portafolio!
  
  Aquí podrás descargar mi currículum, conocer más sobre mí, explorar mi experiencia profesional, descubrir los proyectos en los que he trabajado y conectarte conmigo a través de mis redes sociales.
  
  ¡Espero que disfrutes explorando mi trabajo!`;
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
      </div>
    </>
  );
}

export default Home;
