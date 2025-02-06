import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PageContent from '../components/pageContent';
import ProjectPage from '../components/projectPage';
import StaticPage from "../components/staticPage";
import Loader from '../components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1700);
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <Router>
            <div className="page-content">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/uiux" />} />
                    <Route path="/uiux" element={<PageContent category="uiux"/>}/>
                    <Route path="/photo" element={<PageContent category="photo"/>}/>
                    <Route path="/illu" element={<PageContent category="illu"/>}/>
                    <Route path="/autres" element={<PageContent category="autres"/>}/>
                    <Route path="/projet/:id" element={<ProjectPage/>}/>
                    <Route
                        path="/mentions-legales"
                        element={
                            <StaticPage
                                title="Mentions légales"
                                content={<p>Voici les mentions légales du site.</p>}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <StaticPage
                                title="À propos de moi"
                                content={<div><p>Bonjour ! Je suis Coralie...</p></div>}
                            />
                        }
                    />
                    <Route
                        path="/CV"
                        element={
                            <StaticPage
                                title="CV"
                                content={<div><p>CV</p></div>}
                            />
                        }
                    />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
