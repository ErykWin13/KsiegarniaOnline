import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Main.css';
import MainPage from '../Pages/MainPage';
import Fantasy from '../Components/FantasyBooks';
import Horror from '../Components/HorrorBooks';
import Criminal from '../Components/CriminalBooks';
import Adventure from '../Components/AdventureBooks';
import SelfDevelopment from '../Components/SelfDevelopmentBooks';
// import BasketPage from '../pages/BasketPage';
import ContactPage from '../Pages/ContactPage';
import ErrorPage from '../Pages/ErrorPage';
const Main = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/fantasy" render={() => <Fantasy addBookFunction={props.addBookFunction} />} />
                <Route path="/horror" render={() => <Horror addBookFunction={props.addBookFunction} />} />
                <Route path="/criminal" render={() => <Criminal addBookFunction={props.addBookFunction} />} />
                <Route path="/adventure" render={() => <Adventure addBookFunction={props.addBookFunction} />} />
                <Route path="/selfDevelopment" render={() => <SelfDevelopment addBookFunction={props.addBookFunction} />} />
                <Route path="/basket" component={ErrorPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Main;