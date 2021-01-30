import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Module  from "./Module";

// const http = require('http')

function App() {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [product_list, setProduct] = useState([]);
  // const [todo_list, setToDoList] = useState([])

  useEffect(() => {
    // setInterval(() => {
    //   fetch('/bubu-time').then(res => res.json()).then(data => {
    //     setCurrentTime(data.time);
    //   });
    // }, 990)

    // fetch('/product-list').then(
    //   (response) => {
    //   return response.json()
    // }).then((data) => {
    //   setProduct(data.products)
    // })
    
    // fetch('/todo-list')
    //   .then(res => res.json())
    //   .then(data => {
    //     setToDoList(data['todo-list'])
    //   })
    

  }, []);
  
  return (
    <div className="App">
      {/* <p>The current time is {currentTime}.</p>
      <ul>
        {product_list.map((item) => <li>{item}</li>)}
      </ul>
      <ul className="text-left">
        {todo_list.map((item) => <li>{item.title}</li>)}
      </ul> */}
      <Module/>
    </div>
  );
}

export default App;
