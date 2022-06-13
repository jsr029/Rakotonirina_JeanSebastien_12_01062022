import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/main.css';
import ChooseUserId from './pages/ChooseUserId'
import GetUserMainData from './pages/GetUserMainData'

/** 
 *  function <App> is the main function to insert the DOM in Html root id div
 * It manages 2 routes also
 * '/' displays the ChooseUserId page 
 * '/:id' displays GetUserMainData page
 */
function App() {
   return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                  <ChooseUserId />
            </Route>              
            <Route path='/:id'>
                  <GetUserMainData />
            </Route>              
        </Switch>
    </BrowserRouter>
    )
}

export default App;
