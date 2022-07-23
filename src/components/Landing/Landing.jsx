import React from "react";
import style from "./Landing.module.css";
import img from "../../Imgs/HenryBank.png";

const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.nav}>
        <div className={style.containerNav}>
          <h1 className={style.text1}>Henry</h1>
          <h1 className={style.text2}>Bank</h1>
        </div>
        <h1 className={style.text3}>Sobre HenryBank</h1>
        <button className={style.btn}>Ingresar</button>
      </div>
      <div className={style.componentsMain}>
        <div className={style.components}>
          <div>
            <h1 className={style.textMain}>EL LADO BUENO</h1>
          </div>
          <div className={style.cont}>
            <img className={style.image} src={img} alt="HenryBank"></img>
            <button className={style.btn2}>Descarga la app</button>
          </div>
          <h1 className={style.textMain}>DE TU PLATA</h1>
        </div>
      </div>
      <div>
        <h1 className={style.textTitle}>Sobre nosotros</h1>
      </div>
    </div>
  );
};

export default Landing;
