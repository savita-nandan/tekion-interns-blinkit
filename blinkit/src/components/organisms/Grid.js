import React from 'react';
import Card from './Card';
import '../../styles/style.css';

function Grid({ products }) {

    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
        const row = products.slice(i, i + 4);
        rows.push(row);
    }

    return (
        <div className="grid__container flex flex__column">
            {rows.map((row, index) => (
                <div className="flex" key={index}>
                    {row.map((item) => (
                        <Card
                            key={item.id}
                            element={item}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid