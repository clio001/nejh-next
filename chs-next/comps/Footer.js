import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      {" "}
      <Box className={styles.footer_container}>
        <Box
          sx={{
            m: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",

              alignItems: "center",
            }}
          >
            <Box m={1}>
              <img
                src="https://static.wixstatic.com/media/725a03_ded6918b49a34c3989198013a2dcdae8~mv2.png"
                alt="Logo of the New England Teachers Union"
                height="75px"
              />
            </Box>
            <Box m={1}>
              <img
                src="https://static.wixstatic.com/media/725a03_0bec81e72f6c4e96a8591424b24f9a16~mv2.png"
                alt="Logo of Dean College"
                height="75px"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              m: "2rem",
            }}
          >
            <Box mr={4} mb={2}>
              <Typography sx={{ fontWeight: "bold" }}>NEJH</Typography>

              <Typography>About Us</Typography>
              <Typography>Submissions</Typography>
              <Typography>Issues</Typography>
              <Typography>Editorial Board</Typography>
            </Box>
            <Box mr={4} mb={2}>
              <Typography sx={{ fontWeight: "bold" }}>MEMBERS</Typography>

              <Typography>Recent Issues</Typography>
              <Typography>Issue Archive</Typography>
              <Typography>NETHA Awards</Typography>
            </Box>
            <Box mr={4} mb={2}>
              <Typography sx={{ fontWeight: "bold" }}>CONNECT</Typography>

              <Typography>Blog</Typography>
              <Typography>Social Media</Typography>
              <Typography>Contact</Typography>
            </Box>

            <Box>
              {" "}
              <Typography sx={{ fontWeight: "bold" }}>
                CITIZEN HISTORIAN
              </Typography>
              <Typography>History in Your Backyard</Typography>
              <Typography>Citizen Historian Sourcebook</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontFamily: "Palantino" }}>
              Copyright 2023 The New England Journal of History
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
