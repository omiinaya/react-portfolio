import Head from "next/head";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Box from "@mui/material/Box";
import Separator from "../components/Separator";
//import Certifications from "../components/Certifications";

export default function App() {
  return (
    <div>
      <Box>
        <Head>
          <title>Omar Minaya</title>
          <meta
            name="description"
            content="An example of a meta description. These show up in search engine results."
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <div name="Home">
          <Separator
            text="FULLSTACK DEVELOPER"
            mt={25}
            mb={5}
            mobilemt={20}
            mobilemb={-1}
          />
        </div>
        <Home />
        <div name="Skills">
          <Separator
            text="RELEVANT SKILLS"
            mt={15}
            mb={10}
            mobilemt={5}
            mobilemb={5}
          />
        </div>
        <Skills />
        {/*
      <div name='Certifications'>
        <Separator
          text='BADGES & CERTIFICATIONS' mt={15} mb={5} mobilemt={23.5} mobilemb={1}
        />
      </div>
      <Certifications />
      */}
      </Box>
      <div
        style={{ display: 'flex', justifyContent: "center", margin: "0 auto", width: "100%" }}
      >
        WIP
      </div>
    </div>
  );
}
