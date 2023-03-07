import React from 'react';
import products from '../../assets/data/productType';
import Link from '../atoms/Link'

function BelowNavBar() {
  return (
    <div className="belowNav flex flex__center__main-axis">
      {
        products.map((product) =>
          (<Link to="/" className="">
            {product}
          </Link>
          ))
        }
    </div>
  )
}

export default BelowNavBar