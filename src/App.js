import './App.css';
import {Link} from 'react-router-dom';





function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/product">Product Component</Link> |{" "}
            <Link to="/signup">Signup Component</Link>
        </nav>
      <div>hello</div>
    </div>
  );
}

export default App;
