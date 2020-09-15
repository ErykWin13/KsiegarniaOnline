import React from 'react';
import '../styles/BooksPages.css';
import image1 from '../images/był-sobie-pies.jpg';
import image2 from '../images/był-sobie-pies-2.jpg';
import image3 from '../images/w-pustyni-i-w-puszczy.jpg';
import image4 from '../images/wyspa-skarbów.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const booksList = [{
    id: 1,
    category: 'adventure',
    author: 'W. Bruce Cameron',
    title: 'Był sobie pies',
    img: image1,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '392',
    year: '2012',
    price: 23.99,
    promo: true,
    promoPrice: 19.99,
},
{
    id: 2,
    category: 'adventure',
    author: 'W. Bruce Cameron',
    title: 'Był sobie pies 2',
    img: image2,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '408',
    year: '2019',
    price: 28.99,
    promo: false,
}, {
    id: 3,
    category: 'adventure',
    author: 'Henryk Sienkiewicz',
    title: 'W pustyni i w puszczy',
    img: image3,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '352',
    year: '1911',
    price: 19.99,
    promo: false,
}, {
    id: 4,
    category: 'adventure',
    author: 'Robert Louis Stevenson',
    title: 'Wyspa skarbów',
    img: image4,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ea ipsa veritatis.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus quisquam voluptatum. Ipsum recusandae sequi nostrum tenetur exercitationem hic unde itaque. Assumenda dolore ullam quibusdam voluptatum quod amet nulla inventore?',
    pages: '312',
    year: '1883',
    price: 24.49,
    promo: false,
}]

const AdventureBooks = (props) => {
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

export default AdventureBooks;