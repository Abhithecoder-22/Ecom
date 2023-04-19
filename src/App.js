// import logo from './logo.svg';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
// import LoginForm from './components/LoginForm';
import { Routes,Route} from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';
import Services  from './pages/Services';

function App() {
  return (
    // <Router>
    
   
   <Routes>
     <Route exact path='/' Component={() => <Navbar name="Navbar" />} ></Route>
     <Route path='/loginform' element={<LoginForm/>} ></Route>
     <Route path='/services'  element={<Services/>}></Route>

   </Routes>
  
  
  );
}

export default App;
