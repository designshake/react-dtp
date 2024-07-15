import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './component/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Dtpform1 = lazy(()=> import('./pages/Dtpform1'));
const Dtpform2 = lazy(()=> import('./pages/Dtpform2'));
const Dtpform3 = lazy(()=> import('./pages/Dtpform3'));
const Dtpform4 = lazy(()=> import('./pages/Dtpform4'));
const Dtpform5 = lazy(()=> import('./pages/Dtpform5'));
const Dtpform6 = lazy(()=> import('./pages/Dtpform6'));
const Dtpform7 = lazy(()=> import('./pages/Dtpform7'));
const Dtpform8 = lazy(()=> import('./pages/Dtpform8'));
const Dtpform9 = lazy(()=> import('./pages/Dtpform9'));
const Dtpform10 = lazy(()=> import('./pages/Dtpform10'));
const Not = lazy(()=> import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dtpform1' element={<Dtpform1/>} />
          <Route path='/dtpform2' element={<Dtpform2/>} />
          <Route path='/dtpform3' element={<Dtpform3/>} />
          <Route path='/dtpform4' element={<Dtpform4/>} />
          <Route path='/dtpform5' element={<Dtpform5/>} />
          <Route path='/dtpform6' element={<Dtpform6/>} />
          <Route path='/dtpform7' element={<Dtpform7/>} />
          <Route path='/dtpform8' element={<Dtpform8/>} />
          <Route path='/dtpform9' element={<Dtpform9/>} />
          <Route path='/dtpform10' element={<Dtpform10/>} />
          <Route path='*' element={<Not/>}/>
        </Routes>
      </Main>
      </Suspense>
    </BrowserRouter>
  )
}

export default App