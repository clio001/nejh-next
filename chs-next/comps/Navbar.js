import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Box } from "@mui/material";

function Navi() {
  return (
    <>
      <Navbar
        style={{ fontFamily: "Palatino", color: "#FF0000" }}
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src="https://static.wixstatic.com/media/725a03_0bec81e72f6c4e96a8591424b24f9a16~mv2.png"
              alt="Logo of Dean College"
              height="80rem"
              style={{ marginTop: "0.4rem" }}
              onClick={() => router.push(`http://www.dean.edu`)}
            />{" "}
            <img
              src="https://static.wixstatic.com/media/725a03_e741d97a0fa64d699b1ee3166ef58aeb.jpeg"
              alt="Logo of the New England Journal of History"
              height="80rem"
              style={{
                marginTop: "0.4rem",
                marginRight: "1rem",
                marginLeft: "0.5rem",
              }}
            />
            <Box>
              CITIZEN
              <br />
              HISTORIAN
              <br />
              SOURCEBOOK
            </Box>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="https://www.nejh.org"
                target="_blank"
                style={{ fontSize: "20px" }}
              >
                NEJH
              </Nav.Link>
              <Nav.Link
                href="https://www.nejh.org/current-issue"
                target="_blank"
                style={{ fontSize: "20px" }}
              >
                Current Issue
              </Nav.Link>

              <Nav.Link
                href="https://www.nejh.org/subscribe"
                target="_blank"
                style={{ fontSize: "20px" }}
              >
                Subscribe
              </Nav.Link>
              <Nav.Link
                href="https://www.nejh.org/citizen-historians"
                target="_blank"
                style={{ fontSize: "20px" }}
              >
                Citizen Historian
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
