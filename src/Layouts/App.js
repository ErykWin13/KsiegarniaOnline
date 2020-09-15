import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import SmallDevicesNav from './SmallDevicesNav';
import LargeDevicesNav from './LargeDevicesNav';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {

  state = {
    basketElements: 0,
  }

  handleCloseNavigation = () => {
    document.querySelector('nav.SmallDevicesNav').classList.remove('Active');
  }

  handleOpenNavigation = () => {
    document.querySelector('nav.SmallDevicesNav').classList.add('Active');
  }

  handleOpenBooksCategories = () => {
    document.querySelector('nav.SmallDevicesNav ul.SmallDevicesMenu ul.BooksCategories').classList.toggle('Active');
    document.querySelector('nav.LargeDevicesNav ul.LargeDevicesMenu ul.BooksCategories').classList.toggle('Active');
  }

  handleCloseBooksCategories = () => {
    document.querySelector('nav.LargeDevicesNav ul.LargeDevicesMenu ul.BooksCategories').classList.remove('Active');
  }

  handleAddBook = () => {
    if (this.state.basketElements === 20) return alert('Nie możesz mieć w koszyku więcej niż 20 książek!')
    this.setState({
      basketElements: this.state.basketElements + 1,
    })
  }


  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
            {<Header openMenuFunction={this.handleOpenNavigation} />}
            <nav className='LargeDevicesNav'>
              {<LargeDevicesNav basket={this.state.basketElements} openBooksCategories={this.handleOpenBooksCategories} closeBooksCategories={this.handleCloseBooksCategories} />}
            </nav>
          </header>
          <nav className='SmallDevicesNav'>
            {<SmallDevicesNav basket={this.state.basketElements} closeMenuFunction={this.handleCloseNavigation} openBooksCategories={this.handleOpenBooksCategories} />}
          </nav>
          <main onClick={this.handleCloseBooksCategories}>
            {<Main basket={this.state.basketElements} addBookFunction={this.handleAddBook} showInfoFunction={this.handleShowInfo} />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;