import React, { useContext } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Modal,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { uiContext } from "../context/uiContext";
import BrowserPanel from "./BrowserPanel";

function Navbar() {
  const { openPanel, setOpenPanel } = useContext(uiContext);
  return (
    <div>
      <Box className={styles.navbar_container}>
        <Link href="/">
          <a>
            <img
              src="https://static.wixstatic.com/media/725a03_e741d97a0fa64d699b1ee3166ef58aeb.jpeg"
              alt="Logo of the New England Journal of History"
              height="75rem"
            />
          </a>
        </Link>
        <Typography
          variant="body1"
          ml={1}
          mr={3}
          sx={{ fontFamily: "Palatino" }}
        >
          CITIZEN
          <br />
          HISTORIAN
          <br />
          SOURCEBOOK
        </Typography>{" "}
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => setOpenPanel(true)}
        >
          Browse
        </Button>{" "}
        <Button
          variant="contained"
          className={styles.button}
          sx={{ ml: "1rem" }}
        >
          {" "}
          <Link href={"/map"}>
            <a>MAP</a>
          </Link>
        </Button>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search ..."
          sx={{
            backgroundColor: "#eee",
            width: "22rem",
            mr: "4rem",
            ml: "4rem",
            mt: "0.5rem",
            mb: "0.5rem",
          }}
        />
      </Box>
      <Drawer
        anchor="top"
        variant="temporary"
        open={openPanel}
        onClose={() => setOpenPanel(false)}
        className="panel-modal"
      >
        <BrowserPanel />
      </Drawer>
    </div>
  );
}

export default Navbar;
