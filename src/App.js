import React from 'react';
import { BrowserRouter as Router, Switch, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // If using Redux
// import { YourContextProvider } from './YourContext'; // If using React Context
// import store from './store'; // If using Redux
import HomePage from './Pages/HomePage';
import BookListingPage from './Pages/BookListsPage';
import BookDetailsPage from './Pages/BookDetailsPage';
import ShoppingCartPage from './Pages/Shopping_cart_Page';
import CheckoutPage from './Pages/CheckOutPage';

const App = () => {
  return (
    // <Provider store={store}>
      <Router>
      <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books" component={BookListingPage} />
          <Route exact path="/books/:id" component={BookDetailsPage} />
          <Route exact path="/cart" component={ShoppingCartPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Routes>
      </Router>
    // </Provider>
  );
};

export default App;
