/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const TopBar = () => {

  let time = new Date()
  let addAZero = (time.getHours() != 10 && time.getHours() != 11 && time.getHours() != 12 && time.getHours() != 22 && time.getHours() != 23)

  return (
      <div style={{ position: 'fixed', height: '3vh', width: '100%', top: '0px' }}>
        <p style={{ marginLeft: '10px' }}>
          {'>'}
        </p>
      </div>
  )
}

export default TopBar
