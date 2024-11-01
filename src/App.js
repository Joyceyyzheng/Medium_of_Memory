
import './App.css';
import PhotoComponent from './PhotoComponent';
import {
  createBrowserRouter,
  RouterProvider,BrowserRouter, Routes, Route
} from "react-router-dom";
import Static from './Static';
import myButton from './button.png';

function App() {
  const handleRedirect = () => {
    window.location.href = "/static";
  };

  const router = createBrowserRouter([
    {
      path: "/static",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={
          <>
          <div className="App">
            <PhotoComponent imagePath={"/grandpa1.png"} degree={2.5} id="first" />
            <PhotoComponent imagePath={"/grandpa2.png"} degree={-4} id="second" />
            <PhotoComponent imagePath={"/grandpa3.png"} degree={-2} id="third" />
            <PhotoComponent imagePath={"/grandpa4.png"} degree={0} id="fourth" />
            <button className="button" img="/button.png" onClick={() => window.location.href = "/static"}></button>
            </div>
          </>
        } />
        <Route path="/static" element={<Static />} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
