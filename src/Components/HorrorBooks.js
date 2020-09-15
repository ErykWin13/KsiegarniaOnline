import React from 'react';
import '../styles/BooksPages.css';
import image1 from '../images/bazar-złych-snów.jpg';
import image2 from '../images/łowca-snów.jpg';
import image3 from '../images/smętarz-dla-zwierzaków.jpg';
import image4 from '../images/to.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const booksList = [{
    id: 1,
    category: 'horror',
    author: 'Stephen King',
    title: 'Bazar złych snów',
    img: image1,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '672',
    year: '2015',
    price: 26.49,
    promo: true,
    promoPrice: 22.99,
}, {
    id: 2,
    category: 'horror',
    author: 'Stephen King',
    title: 'Łowca snów',
    img: image2,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '768',
    year: '2001',
    price: 37.99,
    promo: false,
},
{
    id: 3,
    category: 'horror',
    author: 'Stephen King',
    title: 'Smętarz dla zwierzaków',
    img: image3,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '416',
    year: '1983',
    price: 35.99,
    promo: false,
}, {
    id: 4,
    category: 'horror',
    author: 'Stephen King',
    title: 'To',
    img: image4,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '1104',
    year: '1986',
    price: 30.49,
    promo: true,
    promoPrice: 25.99,
}]

const HorrorBooks = (props) => {
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

export default HorrorBooks;