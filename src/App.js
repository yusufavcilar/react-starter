
import { useState } from 'react';
import './App.css';
import User from './components/User';

/* import Header from './components/Header.js'
import Button from './components/Button.js' */

const friends = [{
  id:1,
  name : "yusuf",
},
{
  id:2,
  name : "barış",
},
{
  id:3,
  name : "tayfun",
}
]
 

function App() {

  const [name ,setName] = useState("Yusuf");
 const [age, setAge] = useState (28)
  return (
    <div className="App">
     <h1>Hello {name}!</h1>
     <h2>Age {age}</h2>
     <button onClick={()=> {
       setName("Avcilar")
     }
     }>Change name </button>
     <button onClick={()=> {
       setAge(29)
     }}>Change age</button>


     <User name="Yusuf" 
     surname="Avcilar" 
     age="29" 
     isLogin={true} 
     friends={friends} 
     address={{ title:"Kartal/İstanbul",
    zip:334}} />
    </div>
  );
}

export default App;
