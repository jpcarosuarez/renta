import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import NavAndWidgetCart from './components/General/NavAndWidgetCart/NavAndWidgetCart';
import Footer from './components/General/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    <BrowserRouter>

      <NavAndWidgetCart />
      <ItemListContainer
            greetings="La lista se encuentra vacia"
          />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      </Switch>
      <Footer />

    </BrowserRouter>


  );
}

export default App;
