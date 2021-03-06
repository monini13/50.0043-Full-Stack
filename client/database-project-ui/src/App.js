
import React, { useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext';
import  ProtectedRoute  from './Auth/ProtectedRoute';
import './App.css';


//Compoenents
import BookCard from './Book/BookCard.js';
import BookCarousel from './Book/BookCarousel';
import BookInfo from './Book/BookInfo';
import Navbar from './Navbar/Navbar.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import AddReview from './containers/AddReview';
import AddBook from './containers/AddBook';
import Home from './Home/Home.js';


function App() {
  const [value, setValue] = useState(0);
  const [query,setQuery] = useState("");

  function updateNavbar() {
    console.log({value})
    return () => setValue(value => ++value);
  }
  function setSearchQuery(name){
    setQuery(name)
  }
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar setQuery={setSearchQuery}/>
          <Switch>
            <Route exact path='/' component={()=><Home query={query}/>}/>  
            <Route path='/book-info' component={BookInfo}/>
            <Route path='/login' component={() => <Login refresh={updateNavbar()}/>}/>
            <Route path='/register' component={() => <Register refresh={updateNavbar()}/>}/>
            <ProtectedRoute path='/add-book' component={AddBook}/>
            <ProtectedRoute path='/add-review' component={AddReview}/>
          </Switch>
        </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
