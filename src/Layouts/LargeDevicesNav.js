import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LargeDevicesNav.css';

const LargeDevicesNav = (props) => {
    return (
        <>
            <ul className="LargeDevicesMenu">
                <li onClick={() => props.closeBooksCategories()}>
                    <NavLink to="/" exact={true ? true : false}>Strona główna</NavLink>
                </li>
                <li onClick={props.openBooksCategories}> Książki
                <ul className="BooksCategories">
                        <li>
                            <NavLink to="fantasy">Fantasy</NavLink>
                        </li>
                        <li>
                            <NavLink to="horror">Horror</NavLink>
                        </li>
                        <li>
                            <NavLink to="criminal">Książki kryminalne</NavLink>
                        </li>
                        <li>
                            <NavLink to="adventure">Książki przygodowe</NavLink>
                        </li>
                        <li>
                            <NavLink to="selfDevelopment">Rozwój osobisty</NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={() => props.closeBooksCategories()}>
                    <NavLink to="basket">Koszyk({props.basket})</NavLink>
                </li>
                <li onClick={() => props.closeBooksCategories()}>
                    <NavLink to="contact">Kontakt</NavLink>
                </li>
            </ul>
        </>
    );
}

export default LargeDevicesNav;