import React,{useState,useEffect} from "react"
import './App.css';
import Chat from './Chat'
import Sidebar from './Sidebar'
import Login from './Login'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import { useStateValue } from "./StateProvider";

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <h1><Login /></h1>
      ) : (
        <div className="app_body">
        <Router>
         
          <Sidebar />
          <Switch>
          <Route path="/rooms/:roomId">
         
          <Chat />
          </Route>
          

            
            <Route path="/">
             {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>

    </div>
    
      )}
      </div>

    
  );
}

export default App;
