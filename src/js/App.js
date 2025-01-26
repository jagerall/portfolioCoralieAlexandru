import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/header.js';
import '../style/index.scss';
import PageContent from "../components/pageContent";
import Footer from "../components/footer";

function App() {
    return (
        <Router>
            <Header/>
            <PageContent/>
            <Footer/>
        </Router>
    );
}

export default App;
