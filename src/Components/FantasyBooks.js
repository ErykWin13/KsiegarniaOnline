import React from 'react';
import '../styles/BooksPages.css';
import image1 from '../images/hobbit.jpg';
import image2 from '../images/wiedźmin-krew-elfów.jpg';
import image3 from '../images/wiedźmin-ostatnie-życzenie.jpg';
import image4 from '../images/wiedźmin-pani-jeziora.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const booksList = [{
    id: 1,
    category: 'fantasy',
    author: 'J.R.R Tolkien',
    title: 'Hobbit',
    img: image1,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '304',
    year: '1960',
    price: 26.49,
    promo: false,
}, {
    id: 2,
    category: 'fantasy',
    title: 'Wiedźmin: Krew elfów',
    img: image2,
    author: 'Andrzej Sapkowski',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '340',
    year: '1994',
    price: 30.49,
    promo: false,
},
{
    id: 3,
    category: 'fantasy',
    title: 'Wiedźmin: Ostatnie życzenie',
    img: image3,
    author: 'Andrzej Sapkowski',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '332',
    year: '1993',
    price: 35.99,
    promo: true,
    promoPrice: 29.99,
},
{
    id: 4,
    category: 'fantasy',
    title: 'Wiedźmin: Pani jeziora',
    img: image4,
    author: 'Andrzej Sapkowski',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    price: 32.99,
    pages: '596',
    year: '1999',
    promo: false,
}]

const FantasyBooks = (props) => {
    const books = booksList.map((book) => (
        <div className="Book" key={book.id}>
            <h4 className="Author">
                {book.author}
            </h4>
            <h3 className="Title">
                {book.title}
            </h3>
            <img src={book.img} alt="książka" />
            <p className="Description">
                {book.shortDescription}
            </p>
            <button onClick={(e) => { e.target.nextSibling.classList.toggle('Active') }}>Pokaż szczegóły <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon></button>
            <div className="Info">
                <p className="Description"><span>Opis:</span>{book.description}</p>
                <p className="Pages"><span>Liczba stron:</span> {book.pages}</p>
                <p className="Year"> <span>Rok wydania:</span> {book.year}</p>
            </div>
            {book.promo ? <h4 className="PromoPrice">Cena: <span>{book.price} zł</span> | {book.promoPrice} zł</h4> : <h4 className="Price">Cena: {book.price} zł</h4>}
            <button onClick={() => props.addBookFunction()}>Dodaj do koszyka <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
            <p>{book.number}</p>
        </div >
    ))

    return (
        <div className="BooksPage">
            {books}
        </div>
    );
}

export default FantasyBooks;