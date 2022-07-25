import React from "react";

import TeamCard from "../TeamCard/TeamCard";
import styles from "./TeamCards.module.css";
import { data } from "../../response";

const TeamCards = () => {
  return (
    <div className={styles.container}>
      {data.map((user) => (
        <li key={user.id}>
          <TeamCard
            name={user.fullName}
            image={user.image}
            team={user.team}
            gitHub={user.gitHub}
            linkedin={user.linkedin}
          />
        </li>
      ))}
    </div>
  );
};

export default TeamCards;
