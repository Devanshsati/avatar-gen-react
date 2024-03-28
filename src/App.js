import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Avatar from './components/Avatar'

// https://www.geeksforgeeks.org/how-to-create-an-avatar-generator-app-in-reactjs/
// https://www.dicebear.com/guides/use-the-library-with-react/
// https://mui.com/material-ui/getting-started/

function App() {

  return (
    <>
      <Header/>
      <Avatar/>
      <Footer/>
    </>
  );
}

export default App;
