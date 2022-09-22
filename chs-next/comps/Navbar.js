import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div>
      <Box className={styles.navbar_container}>
        <Link href="/">
          <a>
            <img
              src="https://static.wixstatic.com/media/725a03_e741d97a0fa64d699b1ee3166ef58aeb.jpeg"
              alt="Logo of the New England Journal of History"
              height="100rem"
            />
          </a>
        </Link>
        <Typography variant="h5" ml={1} sx={{ fontFamily: "Palatino" }}>
          CITIZEN
          <br />
          HISTORIAN
          <br />
          SOURCEBOOK
        </Typography>{" "}
        <TextField
          variant="outlined"
          placeholder="Search ..."
          sx={{
            backgroundColor: "#eee",
            width: "22rem",
            mr: "3rem",
            ml: "4rem",
          }}
        />
        <Button variant="contained" className={styles.button}>
          Browse
        </Button>
        <Link href="/single-item">
          <a>
            <Button
              variant="contained"
              className={styles.button}
              sx={{ ml: "2rem" }}
            >
              Map
            </Button>
          </a>
        </Link>
      </Box>
    </div>
  );
}

export default Navbar;
