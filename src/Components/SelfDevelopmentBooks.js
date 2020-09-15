import React from 'react';
import '../styles/BooksPages.css';
import image1 from '../images/narzędzia-tytanów.jpg';
import image2 from '../images/obudź-w-sobie-olbrzyma.jpg';
import image3 from '../images/potęga-pewności-siebie.jpg';
import image4 from '../images/12-życiowych-zasad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const booksList = [{
    id: 1,
    category: 'selfDevelopment',
    title: 'Narzędzia tytanów',
    img: image1,
    author: 'Timothy Ferris',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '767',
    year: '2016',
    price: 45.99,
    promo: false,
}, {
    id: 2,
    category: 'selfDevelopment',
    author: 'Anthony Robbins',
    title: 'Obudź w sobie olbrzyma',
    img: image2,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '690',
    year: '1991',
    price: 24.49,
    promo: true,
    promoPrice: 18.99,
},
{
    id: 3,
    category: 'selfDevelopment',
    title: 'Potęga pewności siebie',
    img: image3,
    author: 'Brian Tracy',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '180',
    year: '2017',
    price: 30.99,
    promo: false,
},
{
    id: 4,
    category: 'selfDevelopment',
    author: 'Jordan B. Peterson',
    title: '12 życiowych zasad',
    img: image4,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '432',
    year: '2018',
    price: 40.99,
    promo: false,
}]

const SelfDevelopmentBooks = (props) => {
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

export default SelfDevelopmentBooks;