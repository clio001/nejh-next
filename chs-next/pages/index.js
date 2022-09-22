import { Typography, Grid, Box } from "@mui/material";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid container className="grid-container">
        <Box className="page-container">
          <Typography variant="h1">Landing page</Typography>
          <Typography>Lorem</Typography>
        </Box>
        <Footer />
      </Grid>
    </>
  );
}
