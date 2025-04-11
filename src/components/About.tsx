import Zoom from './Zoom';

const About = () => {
  return (
    <div className="text-center p-6 max-w-3xl mx-auto">
      {/* Menu */}
      <div className="fixed top-40 left-14 bg-gray-800 text-white p-4 rounded-md z-10">
        <ul>
          <li>
            <a href="#about" className="hover:text-blue-800 font-bold">À propos</a>
          </li>
          <li className="mt-4">
            <a href="#skills" className="hover:text-blue-800 font-bold">Compétences</a>
          </li>
          <li className="mt-4">
            <a href="#cv" className="hover:text-blue-800 font-bold">Mon CV</a>
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      {/* Section À propos */}
      <section id="about">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">À propos de moi</h2>
        <p className="mt-4 mb-6 text-lg text-gray-600">
          Salut, je m'appelle <strong>David dM</strong>, développeur passionné par la création de solutions web modernes et interactives. Mon parcours m'a conduit à me spécialiser dans le développement front-end, avec une forte maîtrise de React, TypeScript, et Tailwind CSS. 
          <br />
          <br />
          Je suis passionné par la résolution de problèmes complexes et l'optimisation de l'expérience utilisateur. Mon objectif est de rendre le web accessible et agréable pour tous, tout en créant des interfaces fluides et réactives.
          <br />
          <br />
          J'aime apprendre de nouvelles technologies et toujours repousser mes limites. Mes projets personnels, tels que mon portfolio, illustrent ma capacité à intégrer mes compétences en développement pour créer des expériences utilisateurs uniques.
        </p>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Compétences clés</h3>
        <ul className="list-disc text-lg text-gray-600 mt-2 mb-6">
          <li>Développement React & TypeScript</li>
          <li>Création d'applications responsives avec Tailwind CSS</li>
          <li>Bonne connaissance de HTML</li>
          <li>Optimisation des performances front-end</li>
          <li>Maîtrise des pratiques de développement Agile et Scrum</li>
          <li>Integration d'API</li>
          <li>Gestion de projet avec Git et GitHub</li>
        </ul>
      </section>

      {/* Ajout des images sous la section Compétences */}
      <div className="flex justify-around mt-16 mb-8">
        <img src='../image/logos.png' alt='Logo HTML5 CSS3 et Scrum' className='w-1/4' />
        <img src='../image/github.png' alt='Logo GitHub' className='w-1/6' />
      </div>

      {/* Section Mon CV */}
      <section id="cv" className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">Mon CV</h2>
        <div className="mt-4">
          <Zoom 
            src="../image/cv_David-de-Marville.jpg" 
            alt="CV de David de Marville"
            className="w-full md:w-2/3 mx-auto border border-gray-300 rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-4">
          <a
            href="./cv_David-de-Marville.pdf"
            download="CV_David_dM.pdf"
            className="text-blue-600 hover:text-blue-800 font-bold"
          >
            Télécharger le CV en PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
