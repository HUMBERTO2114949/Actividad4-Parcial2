import './App.css';
import Show from './villano/Show';
import Create from './villano/Create';
import Edit from './villano/Edit';

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Villano() {
  return (
    <div className="App">    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default Villano;