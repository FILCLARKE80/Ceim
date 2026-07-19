import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import '@fontsource-variable/sora'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/newsreader'
import './index.css'
import './prospectus/prospectus.css'
import { ThemeProvider } from './theme'
import App from './App'
import HomePage from './pages/HomePage'
import CareerPage from './pages/CareerPage'
import AboutPage from './pages/AboutPage'
import DataPage from './pages/DataPage'
import LegalPage from './pages/LegalPage'
import ProspectusHome from './prospectus/ProspectusHome'
import ProspectusCareer from './prospectus/ProspectusCareer'

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
  // Editorial "Prospectus" design preview — self-contained, own chrome
  { path: '/prospectus', element: <ProspectusHome /> },
  { path: '/prospectus/:careerId', element: <ProspectusCareer /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
