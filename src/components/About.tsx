import Zoom from './Zoom';
import Skills from "./Skills";

const About = () => {
  return (
    <div className="text-center p-6 max-w-3xl mx-auto">
      {/* Menu */}
      <div className="fixed top-29 md:top-40 left-1 mr-1 md:left-14 bg-gray-800/80 text-white p-0.5 md:p-4 rounded-md z-10 text-sm w-full md:w-40">
        <ul className='flex md:flex-col justify-around  md:items-start'>
          <li>
            <a href="#about" className="hover:text-blue-800 font-bold">À propos</a>
          </li>
          <li className="md:mt-4">
            <a href="#skills" className="hover:text-blue-800 font-bold">Compétences</a>
          </li>
          <li className="md:mt-4">
            <a href="#cv" className="hover:text-blue-800 font-bold">Mon CV</a>
          </li>
          <li className="md:mt-4">
            <a href="#mentions" className="hover:text-blue-800 font-bold">Mentions légales</a>
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      {/* Section À propos */}
      <section id="about">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">À propos de moi</h2>
        <p className="mt-4 mb-6 text-lg text-gray-800">
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
      <section id="skills" className="mt-16 border-t">
      <Skills />
      </section>

      {/* Ajout des images sous la section Compétences */}
      <div className="flex justify-around mt-16 mb-8">
        <img src='../image/logos.png' alt='Logo HTML5 CSS3 et Scrum' className='w-1/4 border border-gray-800 rounded-lg shadow-2xl' />
        <img src='../image/github.png' alt='Logo GitHub' className='w-1/6 border border-gray-800 rounded-lg shadow-2xl' />
      </div>

      {/* Section Mon CV */}
      <section id="cv" className="mt-16 border-t">
        <h2 className="text-3xl font-semibold text-gray-800 mt-6">Mon CV</h2>
        <div className="mt-4">
          <Zoom 
            src="../image/cv_David-de-Marville.jpg" 
            alt="CV de David de Marville"
            className="w-full md:w-2/3 mx-auto border border-gray-300 rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-6">
          <a
            href=".*/cv_David-de-Marville.pdf"
            download="CV_David_dM.pdf"
            className="text-gray-800 hover:text-blue-800 font-bold text-lg md:text-2xl"
          >
            Télécharger le CV en PDF
          </a>
        </div>
      </section>

      {/* Section Mentions légales */}
      <section id="mentions" className="mt-16 text-left text-sm text-gray-800 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Mentions légales & Politique de confidentialité</h2>
        <div className='mb-4 border-4 border-gray-500 rounded-lg p-4'>
        <p><strong>Informations générales</strong></p>
        <p><strong>Nom du site :</strong> Portfolio de David de Marville</p>
        <p><strong>Editeur du site :</strong> David de Marville</p>
        <p><strong>Email :</strong> de.marville.david@gmail.com</p>
        </div>
        <div className='mb-4 border-4 border-gray-500 rounded-lg p-4'>
        <p><strong>Hébergeur :</strong></p>
        <p>Vercel Inc.</p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723 </p>
        <p>support@vercel.com  </p>
        </div>
        <div className='mb-4 border-4 border-gray-500 rounded-lg p-4'>
        <p><strong>Propriété intellectuelle et crédits</strong></p>
        <p><strong>Propriété intellectuelle :</strong> Le contenu de ce site est la propriété de David de Marville. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        <p className='italic'>Sauf mention contraire, les contenus (textes, images, code) sont la propriété exclusive de David de Marville.</p>
        <p><strong>Crédit photos :</strong> Les images utilisées sur ce site sont soit des créations personnelles, soit des images libres de droits provenant de Unsplash ou Flaticon.</p>
        <p><strong>Crédit design :</strong> Ce site a été conçu et développé par David de Marville.</p>
        <p><strong>Liens externes :</strong> Ce site peut contenir des liens vers d'autres sites. Je ne suis pas responsable du contenu de ces sites.</p>
        <p>Ce site est réalisé avec React, TypeScript et Tailwind CSS.</p>
        <p>Ce site est optimisé pour un affichage sur ordinateur, tablette et mobile.</p>
        
        </div>
        <div className='mb-4 border-4 border-gray-500 rounded-lg p-4'>
        <p><strong>Protection des données personnelles : </strong></p>
        <p>Ce site est un portfolio personnel réalisé dans un cadre non commercial.</p>        
        <p>
          Les informations recueillies à partir du formulaire de contact sont utilisées uniquement pour pouvoir vous recontacter. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et d’effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment via ce formulaire ou en me contactant directement.
        </p>
        <p className="mt-4 italic">Ce site ne dépose aucun cookie à but publicitaire ou d’analyse.</p>
        </div>        
      </section>
    </div>
  );
};

export default About;

