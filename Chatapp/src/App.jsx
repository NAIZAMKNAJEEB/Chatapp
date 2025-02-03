// App.js
import React from 'react';
import Login from './Login';
import Home from './Home'
import Register from './Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/"  element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;