import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";
import doc from "./docs.json" assert { type: "json" };
import PrintIcon from "@mui/icons-material/Print";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const getStaticPaths = () => {
  const paths = doc.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = doc[id];

  return {
    props: { doc: data },
  };
};

function SingleItem({ doc }) {
  return (
    <>
      <Navbar />
      <Grid container className="grid-container">
        <Box className="page-container">
          <Box className="item-container">
            <img src={doc.imageUrl} className="item-image" />
            <Box className="item-icons">
              <ShareIcon size="small" sx={{ ml: "0.5rem" }} />
              <BookmarkIcon size="small" sx={{ ml: "0.5rem" }} />
              <PictureAsPdfIcon size="small" sx={{ ml: "0.5rem" }} />
              <PrintIcon size="small" sx={{ ml: "0.5rem" }} />
            </Box>
            <Typography variant="h4">{doc.title}</Typography>
            <Typography>
              {doc.creator}, {doc.createdAt}
            </Typography>
            <Box className="item-container-text-sidebar">
              <Box className="item-text-container">
                <Box className="item-text-intro-container">
                  {" "}
                  <Typography variant="h5" color="primary">
                    Introduction
                  </Typography>
                  <Box className="item-text-intro">
                    {" "}
                    {doc.body.intro.map((para, i) => {
                      return (
                        <Typography
                          key={i}
                          sx={{ mb: "1rem", fontStyle: "italic" }}
                        >
                          {para}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
                <Box className="item-text-para-container">
                  {" "}
                  <Typography variant="h5" color="primary">
                    Primary source
                  </Typography>
                  <Box className="item-text-para">
                    {doc.body.paragraphs.length > 0
                      ? doc.body.paragraphs.map((para, i) => {
                          return (
                            <Typography key={i} sx={{ mb: "1rem" }}>
                              {para}
                            </Typography>
                          );
                        })
                      : doc.body.poem.map((element, i) => {
                          return (
                            <Box key={i} mb={2}>
                              {element.stanza.map((line, y) => {
                                return <Typography key={y}>{line}</Typography>;
                              })}
                            </Box>
                          );
                        })}
                  </Box>
                </Box>

                <Box mb={3}>
                  <Typography variant="h5" color="primary">
                    How to cite
                  </Typography>
                  <Typography sx={{ mt: "1rem" }}>{doc.citation}</Typography>
                </Box>
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
                    <Typography variant="body2">
                      Edited by {doc.editedBy} ({doc.editedAt})
                    </Typography>
                    <Typography variant="body2">{doc.type}</Typography>

                    <Typography variant="body2">{doc.theme[0]}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      color="#91a68d"
                    >
                      Further reading
                    </Typography>
                    {doc.readings.map((item, i) => {
                      return (
                        <Typography key={i} variant="body2" mb={1}>
                          {item}
                        </Typography>
                      );
                    })}
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
