import React from 'react';
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Hobby from './Pages/Hobby';
import Project from './Pages/Project';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/hobby" element={<Hobby />}/>
                    <Route path="/project" element={<Project />}/>
                </Routes>
            </div>
        </Router>
);
}
export default App;
