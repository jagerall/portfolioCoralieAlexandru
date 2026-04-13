import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PageContent from '../components/pageContent';
import ProjectPage from '../components/projectPage';
/*import Loader from '../components/Loader';*/
import ScrollToTop from '../components/scrollToTop';
import StaticPage from "../components/staticPage";


function App() {
   /* const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1700);
    }, []);

    if (loading) {
        return <Loader/>;
    }
*/
    return (
        <Router>
            <ScrollToTop/>
            <div className="page-content">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/uiux"/>}/>
                    <Route path="/uiux" element={<PageContent category="uiux"/>}/>
                    <Route path="/photographie" element={<PageContent category="photographie"/>}/>
                    <Route path="/illustration" element={<PageContent category="illustration"/>}/>
                    {/* <Route path="/autre" element={<PageContent category="autre"/>}/>*/}
                    <Route path="/:category/:id" element={<ProjectPage/>}/>

                    <Route
                        path="/mentions-legales"
                        element={
                            <StaticPage className="page-content" sections={[
                                {
                                    title: "PROPRIÉTAIRE DU SITE",
                                    content: <p>
                                        Nom de l’éditeur : Coralie Alexandru
                                        <br></br>Email : coralie.alexandru@gmail.com
                                        <br></br>Directeur de la publication : Coralie Alexandru</p>
                                },
                                {
                                    title: "HÉBÉRGEUR", content: <p>Le site est hébergé par :
                                        Netlify, Inc.
                                        <br></br>Adresse : 2325 3rd Street, Suite 215, San Francisco, California
                                        94107
                                        <br></br>Site web : https://www.netlify.com</p>
                                },
                                {
                                    title: "PROPRIÉTÉ INTELLECTUELLE",
                                    content: "L’ensemble du contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou diffusion sans autorisation est interdite."
                                }
                            ]}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <StaticPage className="page-content"
                                        sections={[
                                            {
                                                title: "QUI ?", content: <p>Hello! Je suis Coralie Alexandru.
                                                    <br></br><br></br>Étudiante en 3ème année de Métiers du Multimédia
                                                    et de l’Internet et alternante UI Design & Intégratrice web chez
                                                    4SH. J'utilise principalement Figma, la suite Adobe, Angular et
                                                    React pour créer et développer.
                                                    <br></br><br></br>Passionnée de photo et de grimpe. J’aime explorer,
                                                    créer, imaginer. </p>
                                            },
                                            {title: "OÙ ?", content: <p>33800 - Bordeaux</p>},
                                            {
                                                title: "COMMENT ?",
                                                content: <p>Après un long chemin sur la voie de l’Histoire de l’Art &
                                                    l’Archéologie, ayant crapahuté sur quelques sites archéologiques, je
                                                    décide de m’orienter vers le web faute de débouchés et d’expression
                                                    de créativité dans le domaine de l'archéologie.</p>
                                            },
                                            {
                                                title: "POURQUOI ?",
                                                content: <p>L’art m’a toujours intéressé, voir et créer des choses
                                                    belles ont toujours été source de bien-être et de joie.
                                                    <br></br><br></br>J’aimerais pouvoir créer sans limites.</p>
                                            }
                                        ]}
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
