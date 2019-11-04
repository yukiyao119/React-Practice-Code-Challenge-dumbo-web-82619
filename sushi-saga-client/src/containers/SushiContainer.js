import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  let sushiItem = props.sushis.map(sushi => {
    return <Sushi eatMe={props.eatMe} sushi={sushi} />
  })


  

  return (
    <Fragment>
      <div className="belt">
        { 
          sushiItem
        }
        <MoreButton loadNextSushi={props.loadNextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer