import { Typography, Grid, Box, Modal } from "@mui/material";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import doc from "./items/docs.json" assert { type: "json" };

export default function Home() {
  return (
    <>
      <Navbar />

      <Grid container className="grid-container">
        <Box className="page-container-index">
          <Box className="feature-container">
            <Box className="feature-item-primary">
              <img
                className="image-primary"
                src="https://static.wixstatic.com/media/725a03_05d25140407941ec930c6927b4d9b312~mv2.jpg"
              />
            </Box>
            <Box className="feature-item-secondary">
              <img
                className="image-secondary"
                src="https://static.wixstatic.com/media/725a03_d1620f60dd4047e7a64bd5c194d08755~mv2.jpg"
              />

              <img
                className="image-tertiary"
                src="https://static.wixstatic.com/media/725a03_5fc47a7228aa4cdd84884a7d20284b57.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box className="theme-container">
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              All Documents
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
          <Box className="theme-list">
            <Typography variant="h5" color="secondary">
              Global History
            </Typography>
            <Box className="theme-list-items">
              <Box
                className="list-image"
                sx={{
                  backgroundImage: `url(${doc[2].imageUrl})`,
                }}
              />
              <img className="list-image" src="/USCapitol1906.jpeg" />
              <img className="list-image" src="/USCapitol1906.jpeg" />
              <img className="list-image" src="/USCapitol1906.jpeg" />
            </Box>
          </Box>
          <Box className="theme-list" mb={8}>
            <Typography variant="h5" color="secondary">
              Political History
            </Typography>
            <Box className="theme-list-items">
              <img className="list-image" src="/USCapitol1906.jpeg" />
              <img className="list-image" src="/USCapitol1906.jpeg" />
              <img className="list-image" src="/USCapitol1906.jpeg" />
              <img className="list-image" src="/USCapitol1906.jpeg" />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Grid>
    </>
  );
}
