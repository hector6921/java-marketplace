import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


export default function App() {

const [data, setData] = useState("");
const axios = require('axios')

async function getRoutes(){
  const response = await axios.get('http://localhost:8080/')
  console.log(response.data)
  setData(response.data)
//   const reader = response.body.getReader();
// while (true) {
//    const {
//       value,
//       done
//    } = await reader.read();
//    if (done) break;
//    console.log('Received', value);
// }
// console.log('Response fully received');
}  
getRoutes()
  return (
    <div className="App">
   {data}
    </div>
  );
}


