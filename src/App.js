import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search';
import React from 'react';
import DropDown from './components/dropdown';


function App() {

  return (
    <div className="text-center">
      <h1 className="text-logo font-bold text-7xl">Temp Finder</h1>
      <h2 className="text-4xl underline mt-5">Find the weather in your city today!</h2>
      <br></br>
      <DropDown />
    </div>
  );
}

export default App;
