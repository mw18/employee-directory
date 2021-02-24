import React from "react";
//import Main from "./components/Main";
import BasicTable from "./components/BasicTable";
import SearchBar from './components/SearchBar';
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      
        <Header />
        <SearchBar />
        <BasicTable />
       
      
    </div>
  );
}

export default App;
