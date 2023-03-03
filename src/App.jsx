import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Notification from './components/App/Notification'
import ProtectedUserInfo from './components/App/ProtectedUserInfo'
import Navbar from './components/layout/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Purchases from './pages/Purchases'
import { getAllProducts } from './store/slices/cart.slice'



function App() {

  const {token} = useSelector(store => store.userInfo)

  const dispatch = useDispatch()
 
  useEffect(() => {
    if (token){
       dispatch(getAllProducts());
    }
   
  },[token]);

  return (
    <div className="App">
      <Navbar/>
      <Notification/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        
        <Route element={<ProtectedUserInfo/>}>
            <Route path='/purchases' element={<Purchases/>}/>
            <Route path='/cart' element={<Cart/>} />
        </Route>
       

      </Routes>
    </div>
  )
}

export default App
