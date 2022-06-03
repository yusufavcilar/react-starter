import { useState , useEffect } from "react";
import "./App.css";
import User from "./components/User";
import Counter from "./components/Counter"
import İnputExample from "./components/InputExample";


/* import Header from './components/Header.js'
import Button from './components/Button.js' */

const friends = [
  {
    id: 1,
    name: "yusuf",
  },
  {
    id: 2,
    name: "barış",
  },
  {
    id: 3,
    name: "tayfun",
  },
];

function App() {
  const [name, setName] = useState("Yusuf");
  const [age, setAge] = useState(28);
  const [company, setCompany] = useState(["Akinon,Trendyol"]);
  const [teams,setTeams] = useState({team:"Galatasaray"});
  const [number, setNumber] = useState(0)

  useEffect (()=> {
    console.log("Number change")
  },[number]);

  setInterval (()=> {
    setNumber (number +1)
  }, 2000);
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>Age {age}</h2>
      <button
        onClick={() => {
          setName("Avcilar");
        }}
      >
        Change name{" "}
      </button>
      <button
        onClick={() => {
          setAge(29);
        }}
      >
        Change age
      </button>

      <h2>Company</h2>

      {company.map((comp, index) => (
        <div key={index}>{comp}</div>
      ))}

      <button
        onClick={() => {
          setCompany([...company, "Getir"]);
        }}
      >
        Add business
      </button>

      <h2>Football Team</h2>
      <div>{teams.team}</div>
      <button onClick={()=> setTeams({...teams, team:"Fenerbahçe"})}>Change Team</button>

      <h2>Use Effect</h2>
      <div>{number}</div>
      <button onClick={()=> setNumber(number +1)}>Click</button>


      <Counter/>
      <İnputExample/>
 
      <User
        name="Yusuf"
        surname="Avcilar"
        age="29"
        isLogin={true}
        friends={friends}
        address={{ title: "Kartal/İstanbul", zip: 334 }}
      />
    </div>
  );
}

export default App;
