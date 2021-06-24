/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import "./layout.css"

const Tabs = () => {

  return (
    <div style={{ width: '3vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1vw', position: 'fixed' }}>
      {/* <a href='#page1'> */}
        <FontAwesomeIcon icon={faCircle}  onClick={() => {
          console.log(window.screenX);
          console.log(window.screenY);
          // while (window.screen.position > 0) {
          //   window.screen.position = window.screen.position - 10
          // }
        }} />
      {/* </a> */}
      <br></br>
      <a href='#page2'>
        <FontAwesomeIcon icon={faCircleNotch} />
      </a>
      <br></br>
      <a href='#page3'>
        <FontAwesomeIcon icon={faCircleNotch} />
      </a>
    </div>
  )
}

export default Tabs
