/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Clock = () => {

  let time = new Date()
  let addAZero = (time.getHours() != 10 && time.getHours() != 11 && time.getHours() != 12 && time.getHours() != 22 && time.getHours() != 23)

  return (
    <>
      <div style={{
        fontFamily: 'phenomena',
        color: 'black',
        top: '10%',
        right: '5%',
        position: 'fixed',
        textAlign: 'right'
      }}>
        <h1>
          {addAZero 
            ? '0' : ''}{time.getHours() > 12 
              ? time.getHours() - 12 
              : time.getHours()}
            :{time.getMinutes() < 10 
              ? '0' + time.getMinutes() 
              : time.getMinutes() } 
            {time.getHours() >= 12 
              ? 'pm' 
              : 'am'}
        </h1>
      </div>
    </>
  )
}

export default Clock
