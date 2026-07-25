import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import CustomCursor from '../components/customCursor';
import PageContent from '../components/pageContent';
import ProjectPage from '../components/projectPage';
import ScrollToTop from '../components/scrollToTop';
import StaticPage from "../components/staticPage";
import { PageTransitionProvider } from '../components/PageTransitionContext';


function App() {

    return (
        <Router>
            <PageTransitionProvider>
                <CustomCursor/>
                <ScrollToTop/>
                <div className="page-content">
                    <Header/>
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/da"/>}/>
                            <Route path="/uiux" element={<PageContent category="uiux"/>}/>
                            <Route path="/photographie" element={<PageContent category="photographie"/>}/>
                            <Route path="/da" element={<PageContent category="da"/>}/>
                            <Route path="/:category/:id" element={<ProjectPage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </PageTransitionProvider>
        </Router>
    );
}

export default App;