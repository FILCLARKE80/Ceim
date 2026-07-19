import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import HomePage from './pages/HomePage'
import CareerPage from './pages/CareerPage'
import AboutPage from './pages/AboutPage'
import DataPage from './pages/DataPage'
import LegalPage from './pages/LegalPage'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'career/:careerId', element: <CareerPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'data', element: <DataPage /> },
      { path: 'legal', element: <LegalPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
