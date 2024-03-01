import MenuContent from "../../components/MenuContentComponent/MenuContent";
import MainContent from "../../components/MainContentComponent/MainContent";
import style from "../Style/mainContent.module.css";
import GenericComponent from "../../components/GenericComponent/GenericComponent";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
function ProyectDetailed() {
  try {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    useEffect(() => {
      const redirect = () => {
        navigate("/proyects");
      };
      if (!location.state) {
        redirect();
      }
    }, []);
    return (
      <div className={style.mainContent}>
        <MenuContent></MenuContent>
        <MainContent>
          {location.state ? (
            <GenericComponent
              title={location.state?.title}
              Description={location.state?.Description?.DescriptionDef}
              TechnologiesArray={location.state?.Technologies}
              imgArray={location.state?.images}
            ></GenericComponent>
          ) : (
            ""
          )}
        </MainContent>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ProyectDetailed;
