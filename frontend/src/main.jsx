import '@mantine/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import Error from './components/Error/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
