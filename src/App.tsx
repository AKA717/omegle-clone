import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/Landing';
import { Room } from './components/Room';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/room' element={<Room/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
