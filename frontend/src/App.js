import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Home from './components/Assets/Signup/Home';
import CropPrediction from './components/Assets/Signup/CropPrediction';
import DiseaseDetection from './components/Assets/Signup/DiseaseDetection';
import Login from './components/Assets/Signup/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/crop-prediction" element={<CropPrediction />} />
                <Route path="/disease-detection" element={<DiseaseDetection />} />
            </Routes>
        </Router>
    );
};

export default App;
