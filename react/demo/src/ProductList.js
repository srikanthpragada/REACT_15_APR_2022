
import React from 'react'
import PropTypes from 'prop-types';

export default function ProductList() {
    let products = [
        { name: 'Bose Headphones', price: 24000 },
        { name: 'Logitech MX3 Mouse', price: 11000 },
        { name: 'Segate 2GB Drive', price: 5000 }
    ];

    return (
        <>
            <h2>Products</h2>
            {
                products.map((p, idx) =>
                    <ShowProduct key={idx} name={p.name} price={p.price} />)
            }
        </>
    )
}

function ShowProduct(props) {
    return (
        <div className="bg-info mb-3">
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <h4>{props.price * 1.12}</h4>
        </div>
    )
}

ShowProduct.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};