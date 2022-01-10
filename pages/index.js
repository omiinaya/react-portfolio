import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import Home from '../components/Home/Home'

export default function App() {
  return (
    <div>
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />
      {/*
      <AboutMe />
      <Skills />
      */}
    </div>
  )
}
