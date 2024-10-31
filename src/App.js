
import './App.css';
import PhotoComponent from './PhotoComponent';


function App() {
  const handleRedirect = () => {
    window.location.href = "/static";
  };

  return (
    <div className="App">
      <PhotoComponent imagePath={"/grandpa1.png"} degree={2.5} id="first" />
      <PhotoComponent imagePath={"/grandpa2.png"} degree={-4} id="second" />
      <PhotoComponent imagePath={"/grandpa3.png"} degree={-2} id="third" />
      <button onClick={handleRedirect}>Go to Subpage</button>
    </div>
  );
}

export default App;
