import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/homePage'

const HatsPage = () => {
  return (
    <div>Hata Page</div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />  
      </Switch>
    </div>
  );
}

export default App;
