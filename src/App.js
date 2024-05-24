import './App.css';
import './index.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Nav = lazy(() => import('./Component/Nav'))
const Home = lazy(() => import('./Component/Home'))
const Events = lazy(() => import('./Component/Events'))
const Live = lazy(() => import('./Component/Live'))
const Register = lazy(() => import('./Component/Register'))
const Video = lazy(() => import('./Component/Video'))




function App() {

  return (
    <div className='App'>

      <BrowserRouter>
        <Suspense fallback={<div className='h-screen flex items-center justify-center text-7xl font-bold'>
          Wait Lazy Loading Is Going on
        </div>}>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Live' element={<Live />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Video' element={<Video />} />

          </Routes>
        </Suspense>
      </BrowserRouter>


    </div>
  );
}

export default App;
