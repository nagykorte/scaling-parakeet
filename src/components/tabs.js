import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

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
    <div className='tabComponent' id='tabs' >
      <FontAwesomeIcon icon={position === 1 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(0) }} />
      <br></br>
      <FontAwesomeIcon icon={position === 2 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(1) }} />
      <br></br>
      <FontAwesomeIcon icon={position === 3 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(2) }} />
    </div>
  )
}

export default Tabs
