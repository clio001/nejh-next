import { Typography, Grid, Box, Modal } from "@mui/material";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import doc from "./items/docs.json" assert { type: "json" };
import { useContext, useState } from "react";
import { uiContext } from "../context/uiContext";

export default function Home() {
  const { first, second, third } = useContext(uiContext);
  return (
    <>
      <Navbar />

      <Grid container className="grid-container">
        <Box className="page-container-index">
          <Box className="feature-container">
            <Box className="feature-item-primary">
              <Box
                className="feature-first"
                sx={{
                  backgroundImage: `url(${doc[3].imageUrl})`,
                }}
              ></Box>
              <Box
                sx={{
                  marginTop: "-40px",
                  padding: "0.5rem",
                  backgroundColor: "#eee",
                  opacity: "0.7",
                  borderRadius: "0 0 10px 10px",
                  minWidth: "288px",
                }}
              >
                <Typography>
                  {doc[3].title}, {doc[3].year}
                </Typography>
              </Box>
            </Box>

            <Box className="feature-item-secondary">
              <Box
                className="feature-sec"
                sx={{
                  backgroundImage: `url(${doc[6].imageUrl})`,
                }}
              ></Box>
              <Box
                className="feature-sec"
                sx={{
                  backgroundImage: `url(${doc[7].imageUrl})`,
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              Sources
            </Typography>
            <Box className="theme-list-items">
              {doc.map((item, i) => {
                return (
                  <Link href={`/items/${item.id}`} key={i}>
                    <a>
                      <Box
                        className="list-image"
                        sx={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    </a>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Grid>
    </>
  );
}
