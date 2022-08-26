import './App.css';
import Product from '../src/components/Product';
import {Link} from 'react-router-dom';
//import axios from 'axios';

//put this bc we did it in quiz app lol
// const api = axios.create({
//   baseUrl: 'https://localhost:3000/inventory'
// })


function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/product">Product Component</Link> |{" "}
            <Link to="/signup">Signup Component</Link>
        </nav>
        <Product/>
      <div>hello</div>
    </div>
  );
}

export default App;
