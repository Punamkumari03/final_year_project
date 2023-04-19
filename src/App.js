
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Signup from './components/login-signup-components/Signup';
import Login from './components/login-signup-components/Login';
import Mainpage from './components/Mainpage'
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mainpage' element={<Mainpage/>}/>
      
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
