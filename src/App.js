import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Dr. mahfuz";

  const style = {
    color: "red",
    backgroundColor: "yellow"
  }

  const nayoks = ['Razzak', 'Alamgir', 'Jashim','Salman','bappi','shuvo','Shakib'];
  const products = [
      {name: 'Photoshop', price: '$99.99'},
      {name: 'Illustrator', price: '$55.44'},
      {name: 'PDF', price: '$55.00'},
      {name: 'Elements', price: '$249.89'},
      {name: 'Elements', price: '$249.89'}
  ];

  const productNames = products.map( product => product.name );
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react application</h1>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person name ="Rubel nayok" naika ="Moushumi"></Person>
        <Person name = "Nayok Manna" naika = "popi" ></Person>
        <Person name = "Elias k" naika ="bobi"></Person>
        <Person name = {nayoks[0]}></Person>
      </header>
    </div>
  );
}

function Product(props){
  
  const productStyle = {
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      borderRadius: '5px',
      border: '1px solid gray',
      float: 'left',
      color: 'black',
      margin: '10px'
  }
  const {name, price} = props.product;
  return(
    <div style = {productStyle} >
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick ={ () => setCount(count - 1) } >Decrease</button>
      <button onClick={handleIncrease} >Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
    });
  },[]);
  return (
    <div>
      <h1>Dynamic users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props){
  console.log(props);
  return (
    <div style={{border:'2px solid red', margin: '10px', padding: '10px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.naika}</h3>
    </div>
  )
}

export default App;
