import { Typography, Grid, Box, Modal } from "@mui/material";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import doc from "./items/docs.json" assert { type: "json" };
import articles from "./items/articles.json" assert { type: "json" };
import blogs from "./items/blogs.json" assert { type: "json" };
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
              Primary Source Documents
            </Typography>
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
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              The New England Journal of History
            </Typography>
            <Box className="theme-list-items">
              {articles.map((article, i) => {
                return (
                  <Box
                    className="list-item"
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
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              History in Your Backyard
            </Typography>
            <Box className="theme-list-items">
              {blogs.map((blog, i) => {
                return (
                  <Box
                    className="list-item"
                    sx={{
                      bgColor: "#fff",
                      backgroundImage: `url(${blog.imageUrl})`,
                    }}
                    onClick={() => router.push(blog.blogUrl)}
                  >
                    <Typography>{blog.title}</Typography>

                    <Typography>{blog.author}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              NEJH Blog
            </Typography>
            <Box className="theme-list-items">
              {blogs.map((blog, i) => {
                return (
                  <Box
                    className="list-item"
                    sx={{ bgColor: "#fff" }}
                    onClick={() => router.push(blog.blogUrl)}
                  >
                    <Typography>{blog.title}</Typography>

                    <Typography>{blog.author}</Typography>
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
