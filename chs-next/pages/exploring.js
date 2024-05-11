import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Exploring.module.css";
import docs from "./exploring.json";

function Exploring() {
  const data = docs;
  const router = useRouter();

  return (
    <div>
      {console.log(data)}
      <Navbar />
      <Box
        className={styles.all}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className={styles.container}>
          <Box className={styles.container_header}>
            <Box>
              <img
                src="https://static.wixstatic.com/media/a4a1fc_b32c665ca2ac45ecbba8a5865ba2a1f7~mv2.png"
                width="100%"
              />
            </Box>
            <Box className={styles.container_headerButtons}>
              <Button
                className={styles.doc_singleButton}
                onClick={() => {
                  router.push("#intro");
                }}
              >
                Introduction
              </Button>
              <Button
                className={styles.doc_singleButton}
                onClick={() => {
                  router.push("#sources");
                }}
              >
                Sources & Metadata
              </Button>{" "}
              <Button
                className={styles.doc_singleButton}
                onClick={() => {
                  router.push("#about");
                }}
              >
                About
              </Button>
            </Box>
            <Divider>
              <Typography variant="h4" id="intro">
                Introduction
              </Typography>
            </Divider>{" "}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ maxWidth: "70%", textAlign: "justify" }} mt={5}>
                The exhibition, “British Empire for Children,” features ten
                excerpts from entries published in The Children’s Encyclopaedia
                (or one of its other titles) between 1908 and 1913. The entries
                chosen focus on regions that were formal British crown colonies,
                spheres of influence, or other world regions often imagined
                through a colonialist lens in the decade before the First World
                War.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{ maxWidth: "70%", textAlign: "justify" }}
                mt={1}
                mb={0}
              >
                Each excerpt is contextualized in an editorial note and a
                further reading list researched and written by undergraduate
                history students from Dean College in Franklin, Massachusetts,
                USA. The documents are further transcribed using the
                XML-standard as set out by the Text Encoding Initiative (TEI)
                and enriched with metadata information to support data-driven
                analysis.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{ maxWidth: "70%", textAlign: "justify" }}
                mt={1.5}
                variant="h2"
              >
                ~
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ maxWidth: "70%", textAlign: "justify" }} mt={1} mb={5}>
                <Typography mt={1.5} mb={2}>
                  In 1908, journalist Arthur Mee (1875-1943) launched his
                  children’s encyclopedia series, which became one of the most
                  beloved and successful works for children in the Anglophone
                  world. Under its first title, The Children’s Encyclopaedia,
                  the series sold 1.5 million sets across the British Empire,
                  becoming a fixture in both home and school libraries. The
                  American edition of the encyclopedia, The Book of Knowledge,
                  sold a further 3.5 million sets. Subsequent editions sold
                  additional copies under various names, including The New
                  Children’s Encyclopaedia (1910-1911), the Children’s Magazine
                  (1911-1913), and the long-running Children’s Newspaper
                  (1919-1964).
                </Typography>
                <Typography mb={2}>
                  {" "}
                  The contents of Mee’s encyclopedic volumes ranged across many
                  subjects of knowledge from gardening, natural science, and
                  engineering to history, poetry, and literature. Colonialist
                  themes feature prominently throughout the series, especially
                  in the geography and biography sections. Mee aimed for the
                  encyclopedia to “build up the men and women who will rule our
                  Empire in the years to come.” In its pages, he also promoted
                  an organization for boys and girls that he dubbed The League
                  of the Helping Hand, which he hoped would build bonds of
                  youthful friendship throughout and beyond the British Empire.
                  While Mee wrote many of the entries, numerous other attributed
                  or unattributed authors also contributed pieces.
                </Typography>
                <Typography mb={2}>
                  {" "}
                  Arthur Mee’s role as chief editor ensured that his biography
                  and personality shaped the editorial outlook of The Children’s
                  Encyclopaedia. He was born in Stapleford, Nottinghamshire in
                  1875 to a family of lacemakers whose social status stood
                  precariously between the working and the lower middle classes.
                  His upbringing was deeply influenced by his father’s activist
                  liberal politics and nonconformist Baptist religion. Mee moved
                  to London in 1897, where he married and became a successful
                  journalist. In the debates of early twentieth century Britain,
                  he described his politics as liberal or radical. His religious
                  upbringing ensured that The Children’s Encyclopedia reflected
                  a nonconformist Protestant worldview. Mee was also a staunch
                  colonialist. Positive views of the British Empire pervade his
                  life and work; he consistently held that British power was a
                  tool of humanitarianism and progress in the broader world.
                  Like most imperialists of his generation, however, his views
                  of empire and indigenous peoples were influenced by Social
                  Darwinism, eugenics, and cultural racism. By the time Mee died
                  in 1943, his encyclopedia series had made him a well-known
                  childhood figure for generations of children in the
                  English-speaking world.
                </Typography>
                <Typography mb={7}>
                  <i>
                    by David Brandon Dennis and John Woitkowitz, Series Editors
                  </i>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.container_docs} mb={10}>
            <Divider>
              <Typography variant="h4" id="sources" mb={5}>
                Sources & Metadata
              </Typography>
            </Divider>
            {data.map((item, i) => {
              return (
                <Box className={styles.container_doc} key={i}>
                  <Box
                    sx={{
                      backgroundImage: `url(${item.teiHeader.publicationStmt.pointer})`,
                      width: "25vw",
                      backgroundSize: "cover",
                    }}
                  ></Box>{" "}
                  <Box className={styles.doc_description}>
                    <Typography variant="h5" mb={1}>
                      {item.teiHeader.sourceDesc.biblFull.title}
                    </Typography>
                    <Typography variant="body1" mb={1}>
                      Edited and transcribed by{" "}
                      {item.teiHeader.notesStmt.noteEditorial.name} (
                      {item.teiHeader.notesStmt.noteEditorial.date})
                    </Typography>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>Series title:</TableCell>
                          <TableCell>
                            {item.teiHeader.sourceDesc.biblFull.titleSeries}{" "}
                            (Volume,
                            {item.teiHeader.sourceDesc.biblFull.volume})
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Series editor:</TableCell>
                          <TableCell>
                            {item.teiHeader.fileDesc.titleStmt.editor}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Date:</TableCell>
                          <TableCell>
                            {item.teiHeader.sourceDesc.biblFull.date}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Category:</TableCell>
                          <TableCell>Imperialism</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Pages:</TableCell>
                          <TableCell>
                            {item.teiHeader.sourceDesc.biblFull.extent}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Digitized source:</TableCell>
                          <TableCell>
                            {item.teiHeader.publicationStmt.publisher}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Licence:</TableCell>
                          <TableCell>
                            {item.teiHeader.publicationStmt.licence}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Box className={styles.doc_buttons}>
                      <Button
                        className={styles.doc_singleButton}
                        variant="outlined"
                      >
                        View
                      </Button>
                      <Button
                        className={styles.doc_singleButton}
                        variant="outlined"
                      >
                        TEI/XML
                      </Button>
                      <Button
                        className={styles.doc_singleButton}
                        variant="outlined"
                      >
                        Image
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>{" "}
          <Box className={styles.container_header}>
            <Divider>
              <Typography variant="h4" id="about">
                About
              </Typography>
            </Divider>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "5rem",
              }}
            >
              <Box sx={{ maxWidth: "70%", textAlign: "justify" }} mt={1} mb={5}>
                <Typography mt={1.5} mb={2}>
                  The “Exploring History and Digital Methods”-initiative aims to
                  connect Dean College’s vibrant history student body with the
                  Staatsbibliothek zu Berlin’s (Stabi) unique historical
                  collections and expertise in digital methods and historical
                  research. Specifically the Stabi’s historical collections and
                  their relationship to histories of colonialism, as identified
                  by IN_CONTEXT, are important sources for the study of the past
                  and are readily accessible via the Stabi’s Digitized
                  Collections. Dean College’s Digital History curriculum is an
                  excellent format to bring students in contact with these
                  collections and to explore novel methods in critical digital
                  history analysis.
                </Typography>
              </Box>
              <img
                src="https://static.wixstatic.com/media/a4a1fc_210e681666d94b0f90ae5e3acca98c81~mv2.pngcd ch"
                width="75%"
              />
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </div>
  );
}

export default Exploring;
