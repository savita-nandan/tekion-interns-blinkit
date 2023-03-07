import React, { useState } from 'react';
import CardDescription from '../molecules/CardDescription';
import CardAction from '../molecules/CardAction';

function Card({
    element: {
        id,
        image_url,
        product_name,
        discount_price,
        price
    } }) {
    const [count, setCount] = useState(0);

    const handleAddition = (shouldIncrement) => {
        if (shouldIncrement)
            setCount(count + 1);
        else if (count)
            setCount(count - 1);
    };

    return (
        <div key={id} className="card flex flex__column flex__center__cross-axis">
            <CardDescription image_url={image_url} product_name={product_name}/>
            <CardAction discount_price={discount_price} price={price} handleAddition={handleAddition} count={count}/>
        </div>
    )
}

export default Card