import logo from './logo.svg';
import './App.css';
  import axios from "axios"

function App() {

    const fetchData = async () => {
  try {
    // await axios.get("http://localhost:3000/home")
    await axios.get("https://vercel-deployment-five-xi.vercel.app/home")
      .then((response) => {
        console.log(response.data);

      });
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

fetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
