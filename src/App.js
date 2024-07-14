import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Dtpform1 from './pages/Dtpform1'
import Dtpform2 from './pages/Dtpform2'
import Dtpform3 from './pages/Dtpform3'
import Dtpform4 from './pages/Dtpform4'
import Dtpform5 from './pages/Dtpform5'
import Dtpform6 from './pages/Dtpform6'
import Dtpform7 from './pages/Dtpform7'
import Dtpform8 from './pages/Dtpform8'
import Dtpform9 from './pages/Dtpform9'
import Dtpform10 from './pages/Dtpform10'
import Not from './pages/Not'



const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/dtpform1' element={<Dtpform1/>} />
        <Route path='/dtpform2' element={<Dtpform2/>} />
        <Route path='/dtpform3' element={<Dtpform3/>} />
        <Route path='/dtpform4' element={<Dtpform4/>} />
        <Route path='/dtpform5' element={<Dtpform5/>} />
        <Route path='/dtpform6'  element={<Dtpform6/>}/>
        <Route path='/dtpform7' element={<Dtpform7/>}/>
        <Route path='/dtpform8' element={<Dtpform8/>} />
        <Route path='/dtpform9' element={<Dtpform9/>} />
        <Route path='/dtpform10' element={<Dtpform10/>} />
        <Route path='*' element={<Not/>}/>
      </Router>
    </BrowserRouter>
  )
}

export default App