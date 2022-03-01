import './App.css';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom'
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <br/>
          <br/>
          <Routes>
            <Route path="/" element = {<ListEmployee/>}></Route>
            <Route path="/employees" element = {<ListEmployee/>}></Route>
            <Route path="/add-employee" element = {<AddEmployee/>}></Route>
            <Route path="/edit-employee/:id" element = {<AddEmployee/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
