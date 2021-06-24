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
    window.scroll({
      top: 635 * pageNumber,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handler = useCallback(
    () => {
      // Update coordinates
      if (document.documentElement.scrollTop > 1269) {
        setPosition(3)
      } else if (document.documentElement.scrollTop > 634) {
        setPosition(2)
      } else {
        setPosition(1)
      }

      // setCoords({ x: clientX, y: clientY });
    },
    [setPosition]
  );

  // Add event listener using our hook
  useEventListener('scroll', handler, document);















  if (document !== undefined ) {
    document.addEventListener('scroll', (e) => {
    })
  }

  return (
    <div style={{ width: '3vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1vw', position: 'fixed' }}>
      <FontAwesomeIcon icon={position === 1 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(0) }} />
      <br></br>
      <FontAwesomeIcon icon={position === 2 ? faCircle : faCircleNotch} onClick={()=>{scrollToPage(1)}} />
      <br></br>
      <FontAwesomeIcon icon={position === 3 ? faCircle : faCircleNotch} onClick={() => { scrollToPage(2) }} />
    </div>
  )
}

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = React.useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}


export default Tabs
