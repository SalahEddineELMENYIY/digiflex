import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home.jsx'
import Services from '../pages/services.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import NotFound from '../pages/notFound.jsx'

export const router  = createBrowserRouter( [
  {
    path : '/',
    element : <Home />,
  },
  {
    path : '/services',
    element : <Services />,
  },
  {
    path : '/about-us',
    element : <AboutUs />,
  },
    {
    path : '*',
    element : <NotFound />,
  }
])