import './App.css';
import Show from './heroe/Show';
import Create from './heroe/Create';
import Edit from './heroe/Edit';

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Heroe() {
  return (
    <div className="App">    
     {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
     </BrowserRouter>  */}
    </div>
  );
}

export default Heroe;