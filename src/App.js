import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import NavAndWidgetCart from './components/General/NavAndWidgetCart/NavAndWidgetCart';
import Footer from './components/General/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <BrowserRouter>

      <NavAndWidgetCart />
      <ItemListContainer greetings="Rento Kiosko"/>

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
