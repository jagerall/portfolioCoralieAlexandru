import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PageContent from '../components/pageContent';
import ProjectPage from '../components/projectPage';
import Loader from '../components/Loader';
import ScrollToTop from '../components/scrollToTop';


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
            <ScrollToTop/>
            <div className="page-content">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/uiux"/>}/>
                    <Route path="/uiux" element={<PageContent category="uiux"/>}/>
                    <Route path="/photo" element={<PageContent category="photo"/>}/>
                    <Route path="/illu" element={<PageContent category="illu"/>}/>
                    {/* <Route path="/autre" element={<PageContent category="autre"/>}/>*/}
                    <Route path="/:category/:id" element={<ProjectPage/>}/>
                    {/*  TODO remettre et reimporter staticPage*/}
                    {/*<Route
                        path="/mentions-legales"
                        element={
                            <StaticPage  className="page-content" sections={[
                                    {title: "Propriétaire du site",
                                        content: <p>
                                            Nom de l’éditeur : Coralie Alexandru
                                            <br></br>Email : coralie.alexandru@gmail.com
                                            <br></br>Directeur de la publication : Coralie Alexandru</p>},
                                    {title: "Hébergeur", content: <p>Le site est hébergé par :
                                            Netlify, Inc.
                                            <br></br>Adresse : 2325 3rd Street, Suite 215, San Francisco, California
                                            94107
                                            <br></br>Site web : https://www.netlify.com</p>},
                                    {title: "Propriété intellectuelle",
                                        content: "L’ensemble du contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou diffusion sans autorisation est interdite."}
                                ]}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <StaticPage className="page-content"
                                sections={[
                                    {title: "À propos de moi", content: <p>Bonjour ! Je suis Coralie...</p>},
                                    {title: "Mon parcours", content: <p>J'ai commencé mon aventure dans...</p>},
                                    {title: "Mes compétences", content: <p>Je maîtrise React, Node.js...</p>},
                                    {title: "Mes projets", content: <p>J'ai travaillé sur plusieurs projets...</p>}
                                ]}
                            />
                        }
                    />*/}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
