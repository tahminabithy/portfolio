import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Menu from './component/Menu/Menu';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
