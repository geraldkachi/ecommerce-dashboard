import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router';
import CrudApp from "./CrudApp/CrudApp"
import ErrorPage from './ErrorPage';
import EcommerceApp from './ecommerce/EcommerceApp';
import Products from './ecommerce/components/Products';
import Product from './ecommerce/components/Product';
import Cart from './ecommerce/components/Cart';
import About from './ecommerce/components/About';
import Contact from './ecommerce/components/Contact';

function App() {
  return (
    <div className="">
     <Routes>
       {/* <Route path="/" element={<CrudApp />} /> */}
       <Route path="/" element={<EcommerceApp />} />
       <Route path="/products" element={<Products />} />
       <Route path="/products/:id" element={<Product />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/about" element={<About />} />
       <Route path="*" element={<ErrorPage />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;


// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       {/* <Counter /> */}
//       <p>
//         Edit <code>src/App.tsx</code> and save to reload.
//       </p>
//       <span>
//         <span>Learn </span>
//         <a
//           className="App-link"
//           href="https://reactjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux-toolkit.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux Toolkit
//         </a>
//         ,<span> and </span>
//         <a
//           className="App-link"
//           href="https://react-redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React Redux
//         </a>
//       </span>
//     </header>
//   </div>
// );
