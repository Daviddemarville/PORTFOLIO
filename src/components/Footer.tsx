import { useState } from 'react';
import Counter from './Counter'; // Importer Counter pour récupérer les stats
import VisitorModal from './VisitorModal'; // Importer le Modal

const Footer = () => {
  const { visitCount, formattedDate, formattedTime } = Counter(); // Utiliser les données de Counter
  const currentYear = new Date().getFullYear();

  // Gestion de l'état pour ouvrir/fermer le modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir et fermer le modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="bg-gray-200 text-gray-700 md:flex md:justify-around md:items-center shadow-md p-4 text-center text-sm md:text-lg font-medium fixed bottom-0 left-0 right-0 z-10">
      <div className="date">
        <p className="text-sm">
          Nous sommes le <strong>{formattedDate}</strong>, il est <strong>{formattedTime}</strong>.
        </p>
      </div>

      <div>
        <p className="text-sm">&copy; {currentYear} David dM - Tous droits réservés</p>
      </div>

      <div className="visiteur">
        {/* Texte pour déclencher l'ouverture du modal */}
        <p className="text-sm cursor-pointer" onClick={toggleModal}>
          <strong>Voir le nombre de visiteurs</strong>
        </p>
      </div>

      {/* Modal affiché quand l'état est true */}
      {isModalOpen && (
        <VisitorModal visitCount={visitCount} closeModal={toggleModal} />
      )}
    </footer>
  );
};

export default Footer;

