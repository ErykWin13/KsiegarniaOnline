import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SmallDevicesNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SmallDevicesNav = (props) => {
    return (
        <>
            <FontAwesomeIcon className="Close" icon={faTimes} onClick={() => props.closeMenuFunction()}></FontAwesomeIcon>
            <ul className="SmallDevicesMenu">
                <li onClick={() => props.closeMenuFunction()}>
                    <NavLink to="/" exact={true ? true : false}>Strona główna</NavLink>
                </li>
                <li onClick={() => props.openBooksCategories()}>
                    Książki
                    <ul className="BooksCategories">
                        <li onClick={() => props.closeMenuFunction()}>
                            <NavLink to="fantasy">Fantasy</NavLink>
                        </li>
                        <li onClick={() => props.closeMenuFunction()}>
                            <NavLink to="horror">Horror</NavLink>
                        </li>
                        <li onClick={() => props.closeMenuFunction()}>
                            <NavLink to="criminal">Książki kryminalne</NavLink>
                        </li>
                        <li onClick={() => props.closeMenuFunction()}>
                            <NavLink to="adventure">Książki przygodowe</NavLink>
                        </li>
                        <li onClick={() => props.closeMenuFunction()}>
                            <NavLink to="selfDevelopment">Rozwój osobisty</NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={() => props.closeMenuFunction()}>
                    <NavLink to="basket">Koszyk({props.basket})</NavLink>
                </li>
                <li onClick={() => props.closeMenuFunction()}>
                    <NavLink to="contact">Kontakt</NavLink>
                </li>
            </ul>
        </>
    );
}

export default SmallDevicesNav;