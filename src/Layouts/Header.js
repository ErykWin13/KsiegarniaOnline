import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <>
            <h1>KsięgarniaOnline.pl</h1>
            <FontAwesomeIcon className="Hamburger" icon={faBars} onClick={props.openMenuFunction} />
        </>
    );
}

export default Header;