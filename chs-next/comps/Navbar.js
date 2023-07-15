import React, { useContext } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
          onClick={() => router.push("https://www.nejh.org")}
        >
          NEJH
        </Button>
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => router.push("https://www.nejh.org/current-issue")}
        >
          Current Issue
        </Button>{" "}
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => router.push("https://www.nejh.org/subscribe")}
        >
          Subscribe
        </Button>{" "}
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => router.push("https://www.nejh.org/citizen-historians")}
        >
          Citizen Historian
        </Button>{" "}
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
