import logo from './logo.svg';
import './App.css';
import Home from './Component.js/Home';
import StudentDetail from './Component.js/StudentDetail';
import Contact from './Component.js/Contact';
import AddForm from './Component.js/AddForm';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './Component.js/Nav';

function App() {
 const getData=(data)=>{
console.log("exported",data);
 }
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      
      <Route path='/' element={< Home />}></Route> 
      <Route exact path='/student-details' element={<StudentDetail/>}></Route>  
<Route exact path='/contact' element={< Contact />}></Route> 
<Route exact path='/add-form' element={< AddForm  onSubmit={getData} />}></Route> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
