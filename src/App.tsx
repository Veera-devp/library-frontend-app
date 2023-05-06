import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './layouts/Footer';
import HomePage from './layouts/HomePage';
import { Navbar } from './layouts/NavBar';
import { SearchBooksPage } from './layouts/SearchBooksPage';
import { BookCheckoutPage } from './layouts/BookCheckoutPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/checkout/:bookid'>
            <BookCheckoutPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
