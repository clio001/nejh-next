import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import doc from "../comps/docs.json" assert { type: "json" };

function SingleItem() {
  return (
    <>
      <Navbar />
      <Grid container className="grid-container">
        <Box className="page-container">
          <Box className="item-container">
            <img src="/USCapitol1906.jpeg" className="item-image" />
            <Box className="item-icons">Icons</Box>
            <Typography variant="h4">{doc[0].title}</Typography>
            <Typography>
              {doc[0].creator}, {doc[0].createdAt}
            </Typography>
            <Box className="item-container-text-sidebar">
              <Box>
                <Typography className="item-text">{doc[0].body}</Typography>
              </Box>
              <Box>
                <Box className="item-sidebar">
                  <Box mb={3}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      color="#91a68d"
                    >
                      Source details
                    </Typography>
                    <Typography variant="body2">{doc[0].readings}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      color="#91a68d"
                    >
                      Further reading
                    </Typography>
                    <Typography variant="body2">{doc[0].readings}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Grid>
    </>
  );
}

export default SingleItem;
