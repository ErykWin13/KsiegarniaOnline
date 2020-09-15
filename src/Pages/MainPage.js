import React from 'react';
import '../styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import bookImage1 from '../images/obudź-w-sobie-olbrzyma.jpg';
import bookImage2 from '../images/był-sobie-pies.jpg';
import bookImage3 from '../images/to.jpg';
import bookImage4 from '../images/wiedźmin-ostatnie-życzenie.jpg';
import bookImage5 from '../images/bazar-złych-snów.jpg';
const MainPage = () => {
    return (
        <div className="MainPage">
            <FontAwesomeIcon icon={faBookReader} className="BookIcon"></FontAwesomeIcon>
            <div className="Text">
                <p>KsięgarniaOnline.pl to sklep online, w którym kupisz wiele znanych,
                ale i również mniej znanych książek nie dostępnych w innych księgarniach online jak i tych stacjonarnych.
                Wyróżnia nas bardzo duży asortyment, szybki czas wysyłki oraz setki zadowolonych klientów, regularnie korzystającyh z naszych usług!
                Zapraszamy do największej internetowej księgarni w Polsce!
            </p>
            </div>
            <div className="Books">
                <h2>Książki w promocji:</h2>
                <div className="AllBooks">
                    <div className="FirstBook">
                        <img src={bookImage1} alt="książka w promocji" />
                    </div>
                    <div className="SecondBook">
                        <img src={bookImage2} alt="książka w promocji" />
                    </div>
                    <div className="ThirdBook">
                        <img src={bookImage3} alt="książka w promocji" />
                    </div>
                    <div className="FourthBook">
                        <img src={bookImage4} alt="książka w promocji" />
                    </div>
                    <div className="FifthBook">
                        <img src={bookImage5} alt="książka w promocji" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;