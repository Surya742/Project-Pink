import './App.css';
import ResponsiveAppBar from './components/NavBar';
import SimpleAccordion from './components/FAQ';
import CustomizedAccordions from './components/Assessment';
import TitlebarImageList from './components/Blogs';
import Chatbot from './components/ChatBot';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleAccordion />,
  },
  {
    path: "https://projectpink.netlify.app/assessment",
    element: <CustomizedAccordions />,
  },
  {
    path: "https://projectpink.netlify.app/blog",
    element: <TitlebarImageList />,
  },
  {
    path: "https://projectpink.netlify.app/chat",
    element: <Chatbot />,
  },
]);

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
