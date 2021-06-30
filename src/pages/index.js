import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

// library.add(faCamera)

// const camera = icon({ prefix: 'fas', iconName: 'camera' })

import Layout from "../components/layout"
import Title from "../components/title"
import Tabs from "../components/tabs"
import TopBar from "../components/topBar"
import Clock from "../components/clock"
import Page from "../components/page"
import Poem from "../components/poem"
import Seo from "../components/seo"
// import { fixedImageSizes } from "gatsby-plugin-image/dist/src/image-utils"
// document.addEventListener('contextmenu', event => event.preventDefault());

const IndexPage = () => (
  <Layout>

    <Seo title="karen's webz yall" />
    <Poem />
    <Page backgroundColor='gray' number={1}>
    </Page>

    <Page backgroundColor='darkgray' number={2}>
    </Page>

    <Page backgroundColor='white' number={3}>
    </Page>

    {/* BARRA SUPERIOR */}
    <TopBar/>
    {/* TÍTULO */}
    <Title/>
    {/* RELOJ */}
    <Clock/>
    {/* PUNTOS LATERALES */}
    <Tabs />
    
    {/* <StaticImage
      src="../images/bella.jpg"
      // width={3000}
      // quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <h1>ola k ase</h1>
    <p>más palabras.</p>
    <p>lorem*50.</p>
    <button onClick={()=> alert('no me toques')} onContextMenu={(e)=> e.preventDefault()}>asd</button>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
