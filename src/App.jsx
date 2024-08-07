import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App