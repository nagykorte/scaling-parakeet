/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Poem = () => {
  const [ show, setShow ] = React.useState('')

  return (
    <>
      <div id={'poem'} className={show} onClick={() => setShow('noShow')}>
        <p style={{ color: 'white', padding: '10vw', textAlign: 'center', fontSize: '3rem', position: 'relative', lineHeight: '3rem', fontWeight: '300', fontSize: '2rem' }}>
          En ocasiones la persiana se traba, por suerte hoy no es así,<br></br>
          no tengo mucha fuerza en las mañanas.<br></br>
          Pero si nos quedamos así el sol puede entibiarnos los huesos.
        </p>
      </div>
    </>
  )
}

export default Poem
