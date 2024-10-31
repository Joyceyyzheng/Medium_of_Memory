import logo from './logo.svg';
import './App.css';
import PhotoComponent from './PhotoComponent';

function App() {
  return (
    <div className="App">
      <PhotoComponent imagePath={"/grandpa1.png"} degree={2.5} id="first" />
      <PhotoComponent imagePath={"/grandpa2.png"} degree={-4} id="second" />
    </div>
  );
}

export default App;
