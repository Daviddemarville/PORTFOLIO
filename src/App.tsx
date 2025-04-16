
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";


import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import Accueil from './components/Accueil';
import ProjetProfessionnels from './components/ProjetProfessionnels';
import ProjetsPersonnels from './components/ProjetsPersonnels';
import Contacte from './components/Contacte';
import FormulaireContact from './components/FormulaireContact';
import About from './components/About';
import SocialNetwork from './components/SocialNetwork';

function AppWrapper() {
  const location = useLocation();
  const path = location.pathname;

  // Liste des routes qui doivent afficher ScreenTwo
  const showScreenTwo = ["/projets", "/meContacter"].includes(path);

  return (
    <div>
      <header>
       <Header /> 
      </header>  

      <main className="pb-20 flex flex-col md:flex-row justify-center items-stretch">
      <section className={`w-[99%] pl-1 md:pr-2 md:pl-4 ${showScreenTwo ? "md:w-[50%]" : ""}`}>
  <ScreenOne>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/projets" element={<ProjetProfessionnels />} />
      <Route path="/meContacter" element={<Contacte />} />
      <Route path="/about" element={<About />} />
      <Route path="/social" element={<SocialNetwork />} />
    </Routes>
  </ScreenOne>
</section>

        <section className={`w-[99%] md:w-[50%] pl-1 md:pr-4 md:pl-2 ${!showScreenTwo ? "hidden" : ""}`}>
          <ScreenTwo>
            <Routes>
              <Route path="/projets" element={<ProjetsPersonnels />} />
              <Route path="/meContacter" element={<FormulaireContact />} />
            </Routes>
          </ScreenTwo>
        </section>
      </main>

    <footer>
      <Footer />
    </footer>

      <Background />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
