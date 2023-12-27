import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {


  return (
    <>
      <h1>Fitness Website</h1>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/signup' element= {<Signup />} />
      </Routes>
    </>
  )
}

export default App
