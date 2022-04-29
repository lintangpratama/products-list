import "../styles/globals.css";
import Head from "next/head";
import { Navbar, Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Products App</title>
      </Head>
      {/* Navbar start */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Products App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created by:{" "}
              <a
                href="https://linkedin.com/in/lintangpratama"
                target="_blank"
                rel="noreferrer"
              >
                Lintang Pratama
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar end */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
