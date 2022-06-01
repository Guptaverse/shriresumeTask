import React from 'react';
import './App.css'
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Grid from './components/Grid';
import Header from './components/Header';

function App() {
  return (
    <div className="App pt-4 h-screen bg-gray-100 overflow-y-hidden">



      <Header></Header>
      <div className="flex h-[80%]">

      <Checkbox></Checkbox>
      <Grid></Grid>
      </div>
    </div>
  );
}

export default App;
