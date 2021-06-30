/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"


import "./layout.css"

const Page = (props) => {
  const { backgroundColor, number } = props
  const screenHeightRequired = 100 * (number - 1) + 'vh'
  return (
    <div
    id={'page' + number}
    style={{background: backgroundColor, width: '100%', height: '100%', zIndex: number === 1 ? '0' : '10' , position: 'absolute', top: screenHeightRequired}}>
      {
        number === 2 && 
        <div style={{ padding: '10px 10vw', textAlign: 'center', display: 'grid', gridTemplateColumns: '20% 20% 20% 20%'}}>
          <StaticImage src="../images/tarde2.jpg" width={300} quality={95} />
          <StaticImage src="../images/tarde1.jpg" width={300} quality={95} />
          <StaticImage src="../images/tarde3.jpg" width={400} quality={95} />
        </div>
      }
    </div>
  )
}

export default Page
