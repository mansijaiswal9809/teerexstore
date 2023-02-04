import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import { Product,Cart,Error } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
