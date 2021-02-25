import React, {useState, useEffect}from "react";

import SortTable from "./components/SortTable";
import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import "./App.css";

function App() {
  const [users, setUsers] =  useState([])

  useEffect(()=> {
    console.log('useEffect')

    const fetchData = async () => {
      try{
        const response = await fetch ('https://randomuser.me/api/?results=50')
        const data = await response.json()
        setUsers([...data.results])
      }catch(e) {
        console.log(e);
      }
    }

    fetchData()

  }, [])

  console.log('users1', users)
  useEffect(()=> console.log ('users2', users))
  return (
    <div className="container">
      <Header />
      <SearchBar />
       <SortTable
      users={users}
      />  
    </div>
  );

}

export default App;
