import React from "react";
import { Grid, Box, Typography, Divider, Chip } from "@mui/material";
import doc from "../pages/items/docs.json" assert { type: "json" };
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Grid container className="grid-container-new">
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            mt: "7rem",
            mb: "2rem",
            justifyContent: "center",
          }}
        >
          <Box sx={{}}>
            <Box
              sx={{
                width: "50vw",
                minWidth: "300px",
                height: "416px",
                backgroundImage: `url(${doc[0].imageUrl})`,
                margin: "0.5rem",
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Box
              sx={{
                width: "25vw",
                minWidth: "300px",
                height: "200px",
                backgroundImage: `url(${doc[4].imageUrl})`,
                margin: "0.5rem",
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box
              sx={{
                width: "25vw",
                height: "200px",
                minWidth: "300px",
                backgroundImage: `url(${doc[5].imageUrl})`,
                margin: "0.5rem",
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
        </Grid>
        {doc.map((element, i) => {
          return (
            <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
              <Link href={`/items/${element.id}`} key={i}>
                <a>
                  <Box
                    className="list-image-new"
                    sx={{
                      backgroundImage: `url(${element.imageUrl})`,
                    }}
                  ></Box>
                </a>
              </Link>
            </Grid>
          );
        })}{" "}
        <Footer />
      </Grid>
    </>
  );
}

export default LandingPage;
