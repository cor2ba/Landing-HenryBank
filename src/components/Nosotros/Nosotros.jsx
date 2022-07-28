import React from "react";
import TeamCards from "../TeamCards/TeamCards.jsx";
import Styles from './Nosotros.module.css'
const Nosotros = () => {
  return (
    <div className={Styles.container}>
      <TeamCards />
    </div>
  );
};

export default Nosotros;
