/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Page = (props) => {
  const { backgroundColor, number } = props
  let time = new Date()
  let addAZero = (time.getHours() != 10 && time.getHours() != 11 && time.getHours() != 12 && time.getHours() != 22 && time.getHours() != 23)
  const screenHeightRequired = 100 * (number - 1) + 'vh'
  return (
    <div
    id={'page' + number}
    style={{background: backgroundColor, width: '100%', height: '100%', zIndex: '0', position: 'absolute', top: screenHeightRequired}}>
      
    </div>
  )
}

export default Page
