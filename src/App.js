import logo from './logo.svg';
import './App.css';
import data from '../src/data/data2.json';
import User from './Components/User';
import Total from './Components/Total';
import { useState } from 'react';


function App() {
    const users=[...data];

    const [salary, setSalary] = useState([]);

    const handleAddSalary = (people) => {
      const newSalary = [...salary, people]
      setSalary(newSalary);
    }



  return (
    <div className="App">
    <Total salary={salary}></Total>
      <ul>
      {
        users.map(user => <User user={user} handleAddSalary={handleAddSalary}></User>)
      }
      </ul>
    </div>
  );
}

export default App;
