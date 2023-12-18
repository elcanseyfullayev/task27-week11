import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
