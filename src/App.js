import './App.css';

import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/'  element={<View/>} />
              <Route path='/add-data' element={<Add/>} />
              <Route path='/edit/:id' element={<Edit/>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
