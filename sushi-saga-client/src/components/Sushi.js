import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  const sushiObj = props.sushi

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatMe(sushiObj)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          sushiObj.amIEaten ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi