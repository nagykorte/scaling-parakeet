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
  const [ position, setPosition ] = React.useState(0)

  React.useEffect(()=> {
    console.log(position)
    setPosition(document.body.scrollTop)
  }, [document.body.scrollTop])

  let scrollToPage = pageNumber => {
    window.scroll({
      top: 635 * pageNumber,
      left: 0,
      behavior: 'smooth'
    });
  }
  console.log(position)
  return (
    <div style={{ width: '3vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1vw', position: 'fixed' }}>
      <FontAwesomeIcon icon={faCircle} onClick={() => { scrollToPage(0) }} />
      <br></br>
        <FontAwesomeIcon icon={faCircleNotch} onClick={()=>{scrollToPage(1)}} />
      <br></br>
      <FontAwesomeIcon icon={faCircleNotch} onClick={() => { scrollToPage(2) }} />
    </div>
  )
}

export default Tabs
