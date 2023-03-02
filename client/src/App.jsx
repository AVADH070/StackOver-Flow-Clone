import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AllRouter from './AllRouter';
import { fetchAllQuestion } from './actions/question'
import { useDispatch } from 'react-redux'
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestion());
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
