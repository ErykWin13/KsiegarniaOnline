import React from 'react';
import '../styles/BasketPage.css';

const BasketPage = (props) => {
    return (
        <div className="BasketPage">
            <h2>Koszyk:</h2>
            <h3>{props.basket < 1 ? 'Twój koszyk jest pusty!' : 'Produkty:'}</h3>
            <h3>{props.basket < 1 ? '' : 'Łączna suma:'}</h3>
        </div>
    );
}

export default BasketPage;