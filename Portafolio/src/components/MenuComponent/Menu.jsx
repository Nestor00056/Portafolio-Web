import { NavLink } from "react-router-dom";
import style from "./MenuStyle/Menu.module.css";
function Menu() {
  const active = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? style.active : "";
  return (
    <nav className={style.Menu}>
      <ul className={style.Ulmenu}>
        <NavLink
          to="/"
          id="redirect"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          Bienvenido
        </NavLink>
        <NavLink
          to="/aboutme"
          id="redirect"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          Acerca de mi
        </NavLink>
        <NavLink
          to="/proyects"
          id="redirect"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/Experience"
          id="redirect"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          Experiencia
        </NavLink>
      </ul>
    </nav>
  );
}

export default Menu;
