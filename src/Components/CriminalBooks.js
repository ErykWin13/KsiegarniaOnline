import React from 'react';
import '../styles/BooksPages.css';
import image1 from '../images/i-że-cię-nie-opuszczę.jpg';
import image2 from '../images/już-mnie-nie-oszukasz.jpg';
import image3 from '../images/nocna-runda.jpg';
import image4 from '../images/odbiorę-ci-wszystko.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const booksList = [{
    id: 1,
    category: 'criminal',
    author: 'Michelle Richmond',
    title: 'I że cię nie opuszczę',
    img: image1,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '488',
    year: '2018',
    price: 35.49,
    promo: false,
},
{
    id: 2,
    category: 'criminal',
    author: 'Harlan Coben',
    title: 'Już mnie nie oszukasz',
    img: image2,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '380',
    year: '2016',
    price: 30.49,
    promo: false,
}, {
    id: 3,
    category: 'criminal',
    author: 'Lee Child',
    title: 'Nocna runda',
    img: image3,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '432',
    year: '2017',
    price: 28.99,
    promo: false,
}, {
    id: 4,
    category: 'criminal',
    author: 'Ruth Lillegraven',
    title: 'Odbiorę ci wszystko',
    img: image4,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '488',
    year: '2019',
    price: 31.99,
    promo: false,
}]

const CriminalBooks = (props) => {
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

export default CriminalBooks;