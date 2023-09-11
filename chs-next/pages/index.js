import { Typography, Grid, Box, Modal } from "@mui/material";
import Footer from "../comps/Footer";
import Navi from "../comps/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import doc from "./items/docs.json" assert { type: "json" };
import articles from "./items/articles.json" assert { type: "json" };
import blogs from "./items/blogs.json" assert { type: "json" };
import backyard from "./items/backyard.json" assert { type: "json" };
import { useContext, useState } from "react";
import { uiContext } from "../context/uiContext";
import { Router } from "next/router";

export default function Home() {
  const { first, second, third } = useContext(uiContext);
  const router = useRouter();

  return (
    <>
      <Navi />

      <Grid container className="grid-container">
        {" "}
        <Box className="page-container-index">
          <Box
            className="theme-container"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box className="feature-item">
              <Box
                className="feature-image"
                sx={{
                  backgroundImage: `url(${doc[3].imageUrl})`,
                }}
                onClick={() => router.push(`/items/${doc[3].id}`)}
              >
                {" "}
              </Box>
              <Box
                sx={{
                  marginTop: "-40px",
                  padding: "0.5rem",
                  backgroundColor: "#eee",
                  opacity: "0.7",
                  borderRadius: "0 0 10px 10px",
                  minWidth: "288px",
                  zIndex: "-10",
                }}
              >
                <Typography>
                  {doc[3].title}, {doc[3].year}
                </Typography>
              </Box>
            </Box>
            <Box mt={1} sx={{ maxWidth: "30%", minWidth: "325px" }}>
              {" "}
              <Typography
                variant="h5"
                sx={{ mb: "1rem", alignContent: "center" }}
              >
                About
              </Typography>
              <Typography variant="body1" mt={1} sx={{ textAlign: "justify" }}>
                The Citizen Historian Sourcebook is a plattform for primary
                source documents and learning resources across a range of
                humanities fields and historical periods. In addition to a
                selection of source material, the CHS enables researchers,
                teachers, and students to deepen their understanding of
                historical topics. Editorial notes and further reading
                recommendations contextualize documents and connect researchers
                with current literature in the field.
              </Typography>
              <Typography
                variant="body1"
                mt={1}
                mb={1}
                sx={{ textAlign: "justify" }}
              >
                {" "}
                The CHS is a digital history initiative by the New England
                Journal of History and Dean College.
              </Typography>
            </Box>{" "}
          </Box>
        </Box>{" "}
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5">Primary Source Documents</Typography>
            <Box className="theme-list-items">
              {doc.map((item, i) => {
                return (
                  <Box className="list-item-backyard" key={i}>
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url(${item.imageUrl})`,
                      }}
                      onClick={() => router.push(`/items/${item.id}`)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography variant="overline" color="darkgrey">
                        {item.theme[0]}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1">
                        {item.creator}, {item.place} ({item.year})
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>{" "}
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5">History in Your Backyard</Typography>
            <Box className="theme-list-items">
              {backyard.map((backyard, i) => {
                return (
                  <Box className="list-item-backyard" key={i}>
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url(${backyard.imageUrl})`,
                      }}
                      onClick={() => router.push(backyard.blogUrl)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {backyard.title}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5">NEJH Blog</Typography>
            <Box className="theme-list-items">
              {blogs.map((blog, i) => {
                return (
                  <Box className="list-item-backyard" key={i}>
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url(${blog.imageUrl})`,
                      }}
                      onClick={() => router.push(blog.blogUrl)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography>by {blog.author}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5">
              The New England Journal of History
            </Typography>
            <Box className="theme-list-items">
              {articles.map((article, i) => {
                return (
                  <Box className="list-item-backyard" key={i}>
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url("https://static.wixstatic.com/media/725a03_3cca33fbdbf7416ba3fe58c47e447873~mv2.png/v1/fill/w_415,h_537,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vol%2076%2C%20No%202%2C%20SP2020.png")`,
                      }}
                      onClick={() => router.push(article.blogUrl)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography
                        className="link-decoration"
                        sx={{
                          fontWeight: "bold",
                        }}
                        onClick={() => router.push(article.articleUrl)}
                      >
                        {article.title}
                      </Typography>

                      <Typography>
                        {article.author}, {article.journal}, Vol.{" "}
                        {article.volume}, Issue {article.issue}, {article.year},{" "}
                        {article.pages}
                      </Typography>
                    </Box>
                  </Box>
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
