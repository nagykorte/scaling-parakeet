import * as React from "react"
// import PropTypes from "prop-types"

const Poem = () => {
  const [ show, setShow ] = React.useState('')


  return (
    <>
      <div id={'poem'} className={show} onClick={() => setShow('noShow')} onKeyPress={e => setShow('noShow')}>
        <p style={{ color: 'white', padding: '10vw', textAlign: 'center', fontSize: '2rem', position: 'relative', lineHeight: '3rem', fontWeight: '300' }}>
          En ocasiones la persiana se traba, por suerte hoy no es así,<br></br>
          no tengo mucha fuerza en las mañanas.<br></br>
          Pero si nos quedamos así el sol puede entibiarnos los huesos.
        </p>
      </div>
    </>
  )
}

export default Poem
