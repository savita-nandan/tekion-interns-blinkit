
import React, { Fragment } from 'react'
import Button from '../atoms/Button'

function CardAction({discount_price, price, handleAddition, count}) {
  return (
    <div className="cardBottom flex flex__center__cross-axis">
            <div>
                <p>₹{discount_price}</p>
                <p className="gray strikethrough">₹{price}</p>
            </div>
            <Fragment>
                {
                    count ? (
                        <div className="flex innerbtn">
                            <Button styles="btn" onClick={() => handleAddition(false)}> - </Button>
                            <p className="flex flex__center__cross-axis">{count}</p>
                            <Button styles="btn" onClick={() => handleAddition(true)}> + </Button>
                        </div>
                    ) : (
                        <Button styles="btn flex flex__center__main-axis flex__center__cross-axis"
                            onClick={() => handleAddition(true)}> ADD </Button>
                    )
                }
            </Fragment>
        </div>
  )
}

export default CardAction