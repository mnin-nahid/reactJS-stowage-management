import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Pages from './pages/Home/index';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Pages />}/>
        <Route path='/home' element={ < Pages/> }/>
      </Routes>
    </div>
  );
}

export default App;
