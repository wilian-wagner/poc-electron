import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Filme from './Filme.jsx'
import Trial from './pages/Trial.jsx'
import Register from './pages/Register.jsx'
import Help from './pages/Help.jsx'
import Update from './pages/Update.jsx'


const paginas = createBrowserRouter([
  {path: '/', element: <Home /> },
  {path: '/filme/:id', element: <Filme /> },
  {path: '/trial', element: <Trial/>},
  {path: '/register',element:<Register/>},
  {path: '/help', element:<Help/>},
  {path: '/update', element:<Update/>}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas}></RouterProvider>,
)