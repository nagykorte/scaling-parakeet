/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import longLate from '../images/tarde3.jpg'
import shortLateOne from '../images/tarde2.jpg'
import shortLateTwo from '../images/tarde1.jpg'
import longEarly from '../images/mañana3.jpg'
import shortEarlyOne from '../images/mañana2.jpg'
import shortEarlyTwo from '../images/mañana1.jpg'
import longNight from '../images/noche2.jpg'
import shortNightOne from '../images/noche4.jpg'
import shortNightTwo from '../images/noche1.jpg'


const Page = (props) => {
  const { backgroundColor, number, moment = 'morning' } = props
  const imgs = {
    morning: [longEarly, shortEarlyOne, shortEarlyTwo],
    evening: [longLate, shortLateOne, shortLateTwo],
    night: [longNight, shortNightOne, shortNightTwo]
  }
  const longImg = imgs[moment][0]
  const shortImgOne = imgs[moment][1]
  const shortImgTwo = imgs[moment][2]
  const pageClass = number === 2 ? 'page imgPage' : 'page noImgPage'
  return (
    <div
    id={'page' + number}
    className={pageClass}
    style={{zIndex: number === 1 ? '0' : '10', backgroundColor: backgroundColor }}>
      { number === 2 && 
        <div style={{ padding: '0px 10vw' }}>
        <div className={moment === 'morning' ? 'longColumn floatRight' : 'longColumn floatLeft'}>
          <img src={longImg} className='longImg' alt=''></img>
        </div> 
        <div className='shortColumn floatRight'>
          <img src={shortImgOne} className='shortImg' alt=''></img>
          <img src={shortImgTwo} className='shortImg' alt=''></img>
        </div> 
        </div> }
    </div>
  )
}

export default Page
