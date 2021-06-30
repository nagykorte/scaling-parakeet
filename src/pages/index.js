import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"

import Layout from "../components/layout"
import Title from "../components/title"
import Tabs from "../components/tabs"
import TopBar from "../components/topBar"
import Clock from "../components/clock"
import Page from "../components/page"
import Poem from "../components/poem"
import Seo from "../components/seo"
// import { fixedImageSizes } from "gatsby-plugin-image/dist/src/image-utils"
if (typeof document !== 'undefined') document.addEventListener('contextmenu', event => event.preventDefault());
const IndexPage = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  const [moment, setMoment] = React.useState(new Date().getHours() < 8 ? 'night' : new Date().getHours() < 16 ? 'morning' : 'evening')
  // const [forceMoment, setForceMoment] = React.useState(forceMoment || '')
  const handleClick = () => setIsClicked(!isClicked)
  let barClass = isClicked ? 'topMenu topMenuClicked' : 'topMenu'
  // React.useEffect(() => {
  //   if (forceMoment !== '') setMoment(forceMoment)
  // },[forceMoment])
  return (
  <Layout>

    {/* PUNTOS LATERALES */}
    <Tabs />
    <Seo title="karen's webz yall" />
    <Poem />
    <Page backgroundColor='gray' number={1}>
    </Page>

    <Page backgroundColor='black' number={2} moment={moment} >
    </Page>
    <Page backgroundColor='black' number={3}>
    </Page>
    {/* BARRA SUPERIOR */}
      <div style={{ position: 'fixed', height: '3vh', width: '100%', top: '0px', zIndex: '999' }}>
        <p className={barClass} style={{ marginLeft: '10px', display: 'block', width: '8px' }} onClick={e => handleClick()}>
          {'>'}
        </p>
        {isClicked && <div style={{ color:'lightgray', marginLeft: '10px' }}>
          <p onClick={() => setMoment('morning')}>
            morning
          </p>
          <p onClick={() => setMoment('evening')}>
            evening
          </p>
          <p onClick={() => setMoment('night')}>
            night
          </p>
        </div>}
      </div>
      {/* <TopBar setForceMoment={setForceMoment} /> */}
    {/* TÍTULO */}
    <Title/>
    {/* RELOJ */}
    <Clock/>
    
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
}
export default IndexPage
