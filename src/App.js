
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
  return (
    <div className="App">
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
