import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Products from "./Products.js";
import Detail from "./Detail.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // git hub
  // git hub =apdufolder=rightclick=Git Bash Here=git hub ma
  // git hub update-how to update code in github=https://medium.com/@avivamazurek/how-to-update-a-github-repository-from-your-local-drive-e765eb48a691
  // git login command=Command line Git
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Products/> } />
        <Route path="detail/:id" element={ <Detail/> } />
      </Routes>
    </div>
  );
}

export default App;
