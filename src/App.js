import './App.css';
import './appStyle.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProcessPage from './pages/process';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>
    },
    {
      path: "/about",
      element: <AboutPage></AboutPage>
    },
    {
      path: "/services",
      element: <ServicesPage></ServicesPage>
    },
    {
      path: "/contact",
      element: <ContactPage></ContactPage>
    },
    {
      path: "/process",
      element: <ProcessPage></ProcessPage>
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
