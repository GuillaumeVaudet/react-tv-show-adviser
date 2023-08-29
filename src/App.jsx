import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyle';
import Home from './Page/Home';

const router = createBrowserRouter([
  {path: '/',
    element: <Home />}
])
const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={ router } />
    </>
  )
}



export default App