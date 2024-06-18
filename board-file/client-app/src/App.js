import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import List from './pages/board/List';
import Insert from './pages/board/Insert';
import Read from './pages/board/Read';
import Update from './pages/board/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}> Home </Route>
          <Route path="/boards" element={<List />}> List </Route>
          <Route path="/boards/insert" element={<Insert />}> Insert </Route>
          <Route path="/boards/:no" element={<Read />}> Read </Route>
          <Route path="/boards/update/:no" element={<Update />}> Update </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
