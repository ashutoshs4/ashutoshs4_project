import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Index from './pages';
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
      </Routes>  
      <Footer />  
    </div>
  );
}

export default App;
