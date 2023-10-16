import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './style-index.css'


import Cadastro from './authentication/cadastro.jsx'
import Login from './authentication/login.jsx'
import Senha from './authentication/senha.jsx'
import Index from '.'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/senha",
    element: <Senha/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
