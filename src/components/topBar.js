import * as React from "react"

import "./layout.css"

const TopBar = ({ setForceMoment }) => {
  // console.log(setForceMoment)
  const [isClicked, setIsClicked] = React.useState(false)
  const handleClick = () => setIsClicked(!isClicked)
  let barClass = isClicked ? 'topMenu topMenuClicked' : 'topMenu'
  return (
      <div style={{ position: 'fixed', height: '3vh', width: '100%', top: '0px', zIndex: '999' }}>
        <p className={barClass} style={{ marginLeft: '10px', display: 'block', width: '8px' }} onClick={e => handleClick()}>
          {'>'}
        </p>
        { isClicked && <div style={{ marginLeft: '10px' }}>
          <p onClick={() => setForceMoment('morning')}>
          morning
          </p>
          <p onClick={() => setForceMoment('evening')}>
            evening
          </p>
          <p onClick={() => setForceMoment('night')}>
              night
          </p>
        </div>}
      </div>
  )
}

export default TopBar
