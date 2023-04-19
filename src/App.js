// import logo from './logo.svg';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
// import LoginForm from './components/LoginForm';
import { Routes,Route} from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';

function App() {
  return (
    // <Router>
    
   
   <Routes>
     <Route path='/' element={<Navbar/>} ></Route>
     <Route path='/loginform' element={<LoginForm/>} ></Route>

   </Routes>
  
  
  );
}

export default App;
