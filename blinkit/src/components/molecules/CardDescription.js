import React from 'react'
import Image from '../atoms/Image'

function CardDescription({image_url, product_name}) {
  return (
    <>
            <div>
                <div className="container__btn flex__center__main-axis flex__center__cross-axis">10% off</div>
                <Image styles="container__icon" src={image_url} alt="" />
            </div>
            <p className="para2"> Sourced at 5 AM</p>
            <p className="para1 strong">{product_name}</p>
            <p className="para1 gray">1 kg</p>
    </>
  )
}

export default CardDescription