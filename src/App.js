import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import BlogDisplay from './views/BlogDisplay';
import Login from './views/Login';
import CreatePost from './views/CreatePost';
import SinglePost from './views/SinglePost';




function App() {

  const now = new Date();

  const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now) || false);
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);

  function flashMessage(message, category){
      setMessage(message);
      setCategory(category);
  };

  function logUserOut(){
      setLoggedIn(false);
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExp');
      flashMessage('You have logged out', 'primary')
  };

    return (
      <div className="App">
          <Navbar loggedIn={loggedIn} logUserOut={logUserOut}/>
          <div className="container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup flashMessage={flashMessage} />} />
                <Route path='/blogs' element={<BlogDisplay />} />
                <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={setLoggedIn} />} />
                <Route path='/create' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn} />} />
                <Route path='/blogs/:postId' element={<SinglePost />} />
            </Routes>
          </div>
      </div>
    );
}

export default App;
