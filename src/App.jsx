// import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Home from "./pages/home.jsx";






// const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default App;


import React from 'react';
import RandomNumberPicker from './components/RandomNumberPicker'

function App() {
  const numbers = [2, 4, 5, 7, 10, 20];

  return (
    <div className="App">
      <RandomNumberPicker numbers={numbers} />
    </div>
  );
}

export default App;


