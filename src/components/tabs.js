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
  const [ position, setPosition ] = React.useState(1)

  let scrollToPage = pageNumber => {
    window.scroll({ top: 635 * pageNumber, left: 0, behavior: 'smooth' });
  }
  if (typeof document !== 'undefined') {

    document.addEventListener('scroll', e => {
      document.documentElement.scrollTop >= 634 * 2 ?
      setPosition(3) :
      document.documentElement.scrollTop >= 634 ?
      setPosition(2) :
      setPosition(1)
    })
  }
    
  return (
    <div style={{ width: '3vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1vw', position: 'fixed', zIndex: '999' }}>
      <FontAwesomeIcon icon={position === 1 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(0) }} />
      <br></br>
      <FontAwesomeIcon icon={position === 2 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(1) }} />
      <br></br>
      <FontAwesomeIcon icon={position === 3 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(2) }} />
    </div>
  )
}

export default Tabs
