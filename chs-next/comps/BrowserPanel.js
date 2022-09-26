import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/Navbar.module.css";

function BrowserPanel() {
  return (
    <>
      <Box className={styles.panel_container}>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            THEMES
          </Typography>
          <Typography>Environmental History</Typography>
          <Typography>Global History</Typography>
          <Typography>Political History</Typography>
          <Typography>Energy History</Typography>
        </Box>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            PERIODS
          </Typography>
          <Typography>19th Century</Typography>
          <Typography>Gilded Age</Typography>
          <Typography>20th Century</Typography>
          <Typography>Interwar Period</Typography>
          <Typography>Cold War</Typography>
        </Box>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            TYPES
          </Typography>
          <Typography>Acts</Typography>
          <Typography>Diaries</Typography>
          <Typography>Letters</Typography>
          <Typography>Maps</Typography>
          <Typography>Photographs</Typography>
        </Box>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            TOPICS
          </Typography>
          <Typography>Industrial Revolution</Typography>
          <Typography>Conservationism</Typography>
          <Typography>Civil Rights Movement</Typography>
          <Typography>Foreign Relations</Typography>
          <Typography>Reconstruction</Typography>
        </Box>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            PEOPLES
          </Typography>
          <Typography>Mark Twain</Typography>
          <Typography>Anna Botsford Comstock</Typography>
          <Typography>John Muir</Typography>
          <Typography>Rosa Parks</Typography>
          <Typography>Martin Luther King</Typography>
        </Box>
        <Box className={styles.panel_item}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            PLACES
          </Typography>
          <Typography>Washington D.C.</Typography>
          <Typography>Birmingham</Typography>
          <Typography>Panama City</Typography>
          <Typography>Fox River</Typography>
        </Box>
      </Box>
    </>
  );
}

export default BrowserPanel;