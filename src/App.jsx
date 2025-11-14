import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/catalog";
import CourseDtail from "./components/CourseDtail";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div style={{padding:"1rem"}}>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/catalog" element={<Catalog />}/>
              <Route path="/course/:courseId" element={<CourseDtail />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App