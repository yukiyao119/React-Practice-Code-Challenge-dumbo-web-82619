import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiItems = props.sushis.map((sushi) => {
    return <Sushi sushi={sushi} key={sushi.name}/>
  })

  return (
    <Fragment>
      <div className="belt">
        { sushiItems}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer