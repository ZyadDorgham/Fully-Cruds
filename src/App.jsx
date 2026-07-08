
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import Tasks from './Tasks'
import Dashboard from './Dashbaord'
export default function App() {

  
  return (
    <>

<Navbar/>


<Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/About' element={<About/>}/>
   <Route path='/Tasks' element={<Tasks/>}/>
  <Route path='/Dashboard' element={<Dashboard/>}/>
</Routes>
    </>
  )
}


