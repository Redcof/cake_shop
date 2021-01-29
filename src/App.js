import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

// const http = require('http')

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [product_list, setProduct] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch('/bubu-time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      });
    }, 990)

    fetch('/product-list').then(
      (response) => {
      return response.json()
    }).then((data) => {
      console.log("data", data.products);
      setProduct(data.products)
    })
    // let options = {
    //   host: 'localhost',
    //   path: '/time',
    //   //since we are listening on a custom port, we need to specify it by hand
    //   port: '5000',
    //   headers: {
    //     'Access-Control-Allow-Origin': 'no-cors'
    //   },
    //   //This is what changes the request to a POST request
    //   method: 'GET',
    // };

    // http.request(options, (response) => {
    //   let data = response.json()
    //   setCurrentTime(data.time);
    // }).on('error', function (err) {
    //   console.log(err)
    //   setCurrentTime(
    //     <span style={{ color: 'red', fontFamily: 'monospace' }}>{err.message}</span>
    //   );
    // }).end()

  }, []);
  
  return (
    <div className="App">
      <p>The current time is {currentTime}.</p>
      <ul>
        {product_list.map((item) => <li>{item}</li>)}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
