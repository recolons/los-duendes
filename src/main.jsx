import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './routes/Contact.jsx'
import Layout from './components/Layout.jsx'
import NotFoundPage from './routes/NotFoundPage.jsx'
import About from './routes/About.jsx'
import Tours from './routes/Tours.jsx'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/tours', element: <Tours /> },
    ]
  },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) 