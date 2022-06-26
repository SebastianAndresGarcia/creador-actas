import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormActas} from './components/FormActas';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<FormActas/>}/>
        <Route path='/FormActas' element={<FormActas/>}/>
        
      </Routes>
    </BrowserRouter>
    )
}

export default App;
