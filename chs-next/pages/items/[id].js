import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Chip,
  Button,
  Snackbar,
} from "@mui/material";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";
import doc from "./docs.json" assert { type: "json" };
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

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
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState();
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Citation copied to clipboard!"
        action={action}
        sx={{ padding: "5px" }}
      />
      <Navbar />
      <Grid container className="grid-container">
        <Box className="page-container">
          <Box className="item-container">
            <img src={doc.imageUrl} className="item-image" />
            <br></br>
            <Typography variant="overline">{doc.theme[0]}</Typography>

            <Typography variant="h4">{doc.title}</Typography>
            <Typography>
              {doc.creator}, {doc.createdAt}
            </Typography>

            <Box className="item-text-container">
              <Box className="item-text-intro-container">
                {" "}
                <Typography variant="h5" color="primary">
                  Introduction
                </Typography>
                <Typography variant="body2" sx={{ mt: "0.5rem" }}>
                  Edited by {doc.editedBy} ({doc.editedAt})
                </Typography>
                <Box className="item-text-intro">
                  {" "}
                  {doc.body.intro.map((para, i) => {
                    return (
                      <Typography
                        key={i}
                        sx={{ mb: "1rem", fontStyle: "regular" }}
                      >
                        {para}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
              <Box className="item-text-para-container">
                {" "}
                <Divider sx={{ mb: "1rem" }}>
                  <Chip
                    label="Primary source"
                    sx={{
                      color: "#91a68d",
                      fontSize: "18px",
                      backgroundColor: "#eee",
                    }}
                  />
                </Divider>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <Typography variant="h6">
                    {doc.creator}, {doc.title}, {doc.createdAt}
                  </Typography>
                </Box>
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
                </Box>{" "}
                <Box mb={2} mt={3}>
                  <Divider>
                    <Chip
                      label="How to cite"
                      sx={{
                        color: "#91a68d",
                        fontSize: "18px",
                        backgroundColor: "#eee",
                      }}
                    />
                  </Divider>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: "1rem",
                    }}
                  >
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(doc.citation);
                        setAction(
                          <>
                            <CheckIcon
                              sx={{ color: "green", marginRight: "1rem" }}
                            />
                          </>
                        );
                        setOpen(true);
                      }}
                    >
                      {" "}
                      <ContentCopyIcon color="primary" fontSize="small" />
                    </Button>
                  </Box>
                  <Typography sx={{ wordWrap: "break-word" }}>
                    {doc.citation}
                  </Typography>
                </Box>
                <Box mb={2} mt={4}>
                  <Divider>
                    <Chip
                      label="Further reading"
                      sx={{
                        color: "#91a68d",
                        fontSize: "18px",
                        backgroundColor: "#eee",
                      }}
                    />
                  </Divider>
                  <Box
                    sx={{
                      display: "block",
                      mt: "2rem",
                      wordWrap: "break-word",
                    }}
                  >
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
