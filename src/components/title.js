/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"


const Title = () => {

  return (
    <>
      <div style={{
        color: 'black',
        textAlign: 'left',
        top: '20%',
        left: '9%',
        position: 'fixed',
        display: 'float',
        zIndex: '1'
      }} id='title'>
        <h1>
          SÁBADO
        </h1>
      </div>
    </>
  )
}

export default Title
