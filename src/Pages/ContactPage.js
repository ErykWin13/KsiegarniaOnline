import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="ContactPage">
            <div className="Contact">
                <h2>Kontakt:</h2>
                <h3>Mail: loremipsum@gmail.com</h3>
                <h3>Telefon: 123-456-789</h3>
            </div>
            <div className="Address">
                <h2>Adres:</h2>
                <h3>KsięgarniaOnline.pl</h3>
                <h3>ul. Lorem Ipsum 1</h3>
                <h3>12-345 Lorem</h3>
            </div>
        </div>
    );
}

export default ContactPage;