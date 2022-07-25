// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

// const TeamCard = ({ name, image, gitHub, linkedin, team }) => {
//   return (
//     <div className={styles.container}>
//       <img src={image} alt="" />
//       <div className={styles.containerData}>
//         <h1>{name}</h1>
//         <h3>{team}</h3>
//       </div>
//       <div className={styles.redes}>
//         <a href={`${gitHub}`} target="_blank">
//           <LinkedInIcon
//             style={{ width: 50, height: 50 }}
//           ></LinkedInIcon>
//         </a>
//         <a href={`${linkedin}`} target="_blank">
//           <GitHubIcon
//             style={{width: 50, height: 50 }}
//           ></GitHubIcon>
//         </a>
//       </div>
//     </div>
//   );
// };

import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// export default function TeamCard({ name, image, gitHub, linkedin, team }) {
//   const theme = useTheme();

//   return (
//       <Card sx={{ display: "flex" }}>
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <CardContent sx={{ flex: "1 0 auto", width: 260 }}>
//             <Typography component="div" variant="h5">
//               {name}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               color="text.secondary"
//               component="div"
//             >
//               {team}
//             </Typography>
//           </CardContent>
//           <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
//             <a href={`${gitHub}`} target="_blank">
//               <LinkedInIcon style={{ width: 35, height: 35 }}></LinkedInIcon>
//             </a>
//             <a href={`${linkedin}`} target="_blank">
//               <GitHubIcon style={{ width: 35, height: 35 }}></GitHubIcon>
//             </a>
//           </Box>
//         </Box>
//         <CardMedia
//           component="img"
//           sx={{ width: 151, height: 151 }}
//           image={`${image}`}
//           alt="Live from space album cover"
//         />
//       </Card>
//   );
// }

import styles from "./TeamCard.module.css";

export default function TeamCard({ name, image, gitHub, linkedin, team }) {
  return (
    <div className={styles.Card}>
      <div className={styles.upperContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <h3>{name}</h3>
        <h4>{team}</h4>
        <br />
        <br />
        <br />
        <br />
        <a href={`${linkedin}`} target="_blank">
          <LinkedInIcon style={{ width: 35, height: 35, color:"#0a66c2", }}></LinkedInIcon>
        </a>
        <a href={`${gitHub}`} target="_blank">
          <GitHubIcon style={{ width: 35, height: 35 }}></GitHubIcon>
        </a>
      </div>
    </div>
  );
}
