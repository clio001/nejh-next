import { Typography, Grid, Box, Modal } from "@mui/material";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
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
      <Navbar />

      <Grid container className="grid-container">
        {" "}
        <Box className="page-container-index">
          <Box className="feature-container">
            <Box className="feature-item-primary">
              <Box
                className="feature-first"
                sx={{
                  backgroundImage: `url(${doc[3].imageUrl})`,
                }}
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
                }}
              >
                <Typography>
                  {doc[3].title}, {doc[3].year}
                </Typography>
              </Box>
            </Box>

            <Box className="feature-item-secondary">
              <Typography variant="h5" sx={{ mb: "1rem" }}>
                About
              </Typography>
              <Typography variant="body1">
                History is not just found in textbooks, archives, and museums.
                It is all around us. Every day we pass through historical
                spaces, some that are clearly marked and some that are not so
                obvious. This public history series, co-created by David Brandon
                Dennis and R.A. Lawson and hosted by the New England Journal of
                History aims to enlist citizen historians to harness the power
                of local community to capture history in their proverbial
                backyards. You need not be a professional historian to
                participate! With a bit of research, a video camera, and passion
                for local history, you too can join us. We invite submissions
                (see Call of Videos below) from the public. Submissions will be
                reviewed and vetted by NEJH editors. We look forward to hearing
                from you. Meanwhile co-creators Dennis and Lawson will kick off
                the series with episodes from our own backyards!{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5">Primary Source Documents</Typography>
            <Box className="theme-list-items">
              {doc.map((item, i) => {
                return (
                  <Link href={`/items/${item.id}`} key={i}>
                    <a>
                      <Box
                        className="list-item"
                        sx={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    </a>
                  </Link>
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "0.5rem",
                    }}
                  >
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url(${backyard.imageUrl})`,
                      }}
                      onClick={() => router.push(backyard.blogUrl)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography variant="body1">{backyard.title}</Typography>
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "0.5rem",
                    }}
                  >
                    <Box
                      className="list-item-backyard-image"
                      key={i}
                      sx={{
                        backgroundImage: `url(${blog.imageUrl})`,
                      }}
                      onClick={() => router.push(blog.blogUrl)}
                    ></Box>{" "}
                    <Box className="list-item-backyard-text">
                      <Typography>{blog.title}</Typography>
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
                  <Box
                    className="list-item"
                    key={i}
                    sx={{
                      background:
                        "linear-gradient(90deg, rgba(254,247,222,1) 0%, rgba(255,255,255,1) 85%, rgba(145,166,141,1) 100%)",
                    }}
                  >
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
                      {article.author}, {article.journal}, Vol. {article.volume}
                      , Issue {article.issue}, {article.year}, {article.pages}
                    </Typography>
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
