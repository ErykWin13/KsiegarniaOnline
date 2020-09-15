import React from 'react';
import '../styles/ErrorPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <FontAwesomeIcon icon={faCog} className="Cog"></FontAwesomeIcon>
            <h2>Ta część aplikacji jest niedostępna lub jest w budowie!</h2>
        </div>
    );
}

export default ErrorPage;