import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/index';
import Inventory from './pages/Inventory';
import Articals from './pages/Articals';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/inventory' element={ < Inventory /> }/>
        <Route path='/articals' element={ < Articals /> }/>
        <Route path='/signup' element={ < SignUp /> }/>
        <Route path='/signin' element={ < SignIn /> }/>
      </Routes>
    </div>
  );
}
export default App;

