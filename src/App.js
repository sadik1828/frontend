import { Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App() {
  return  (
   <BrowserRouter>
   <Routes>

     <Route path="/" element={<Home />} />
     {/* <Route path="/login" element={<Login />} /> */}
     <Route path="/signup" element={<Signup />} />

   </Routes>
   </BrowserRouter>
  )
}

export default App;
