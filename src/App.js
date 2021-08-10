/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

//  const players = ['Tamim','Lition','Shakib','Riyad','Mushfiq','Afif','Sohan','Shoriful','Mustafiz','Nasum'] 

  const products = [
    {name:'Adobe Primium',price:'$99.99'},
    {name:'Inshot Pro',price:'$9.99'},
    {name:'Kinemaster pro',price:'$19.99'},
    {name:'Vidmate pro',price:'$21.99'},
    {name:'Insta Premium',price:'$17.99'}
  ]

  const bdPlayers = [
    {name:'Shakib All hasan',pos:'All-Rounder',avg:26.6,strikerate:122.1,runs:1701,wickets:102},
    {name:'Liton Kumar Das',pos:'Batsman',avg:21.6,strikerate:127.1,runs:625},
    {name:'Tamim Iqbal Khan',pos:'Batsman',avg:25.6,strikerate:118.9,runs:1125},
    {name:'Mahmudullah Riyad',pos:'All-Rounder',avg:19.9,strikerate:129.2,runs:1205,wickets:33},
    {name:'Mustafiz Ur Rahman',pos:'Seemer',avg:9.6,strikerate:111.1,runs:201,wickets:55}
]
  
  // const productsName = products.map(pdName => pdName.name);
  // console.log(productsName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {
            players.map(player => <li>{player}</li>)
          }
        </ul> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {
          bdPlayers.map(ply=><Player responsibility={ply}></Player>)
        }
       
      </header>
    </div>
  );
}

function Counter()
{
  const [count, setCount] = useState(0)
  // const handleIncreased = () =>  setCount(count+1);
  
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)}>Increased</button>
      <button onClick={()=> setCount(count-1)}>Dereased</button>
    </div>
  );
}

function Product(props)
{
  const productStyle=
  {
    backgroundColor:'lightgray',
    borderRadius:'10px',
    width:'300px',
    height:'200px',
    margin:'10px',
    padding:'20px',
    boxShadow: '5px 5px 5px black'
   
  }
  
  const {name,price} = props.product;
  // console.log(props);
  return (
  
    <div style ={productStyle}>
      <h2>Name:{name}</h2>
      <p>Price:{price}</p>
    </div>
  );
}

function Player(props)
{
  const playerStyle =
  {
    backgroundColor:'yellow',
    borderRadius: '10px',
    width: '400px',
    height: '150px',
    margin: '10px',
    padding: '20px',
    boxShadow: '5px 5px 5px black',
    color: 'black'
  }
  // console.log(props);
  const {name,pos,avg,strikerate,runs,wickets} = props.responsibility;
  // console.log(name,pos,avg,strikerate,runs,wickets);
  return (
   <div style={playerStyle}>
      <h3>Name:{name}</h3>
       <h4>{pos}</h4>
       <p>Avg: {avg} Strike-Rate:{strikerate} Runs:{runs} Wickets:{wickets}</p>
     
   </div>  
  );
}

function Users(props)
{
  const [users,setUsers] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=> res.json())
   .then(data=>setUsers(data))
  })
  return(
    <div>
        <h3>Dynamic User:{users.length}</h3>
        <ul>
          {
            users.map(user =><li>{user.email}</li>)

          }
        </ul>
        <ul>
          {
            users.map(user =><li>{user.name}</li>)

          }
        </ul>
    </div>
  )
}



export default App;
