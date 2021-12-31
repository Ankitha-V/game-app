import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Course from './Course';
import Cards from './components/card';



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Course" element={<Course />}/>
      <Route path="/components/card" element={<Cards />}/>
    
    </Routes>
  </Router>,
  document.getElementById("root")
);








reportWebVitals();