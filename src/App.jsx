
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Login from "./pages/Login"
import MyNav from './components/MyNav'
import LoadingScreen from './components/LoadingScreen'
import  "../src/App.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArticleThunk } from './store/slices/article.slice'
import { Container } from 'react-bootstrap'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
const isLoading= useSelector(state=> state.isLoading)
const dispatch=useDispatch();
useEffect(() => {
  dispatch(getArticleThunk())

}, [])
  return (
    <div>
<HashRouter>
<MyNav/>
{isLoading&&<LoadingScreen/> }
<Container className="mt-5">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
<Route path="/Login" element={<Login/>}/>


<Route element={<ProtectedRoutes/>}>
  <Route path="/purchases" element={<Purchases/>}/>
  </Route>
</Routes>
</Container>
</HashRouter>

</div>

)
}

export default App
