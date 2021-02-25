import React, {useState, useEffect}from "react";
//import Main from "./components/Main";
import SortTable from "./components/SortTable";
import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import "./App.css";

function App() {
  const [users, setUsers] =  useState([])

  useEffect(()=> {
    console.log('useEffect')

    /*
    write a function that fetches the API data
    try -> make the api call
    setState of the users []
    catch -> console.log error

    invoke the function
    pass in the dependency array because it is needed only the first time the component mounts (componentDidMount)
    */

    const fetchData = async () => {
      try{
        const response = await fetch ('https://randomuser.me/api/?results=10')
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
