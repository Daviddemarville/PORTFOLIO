import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ajouté
import Counter from './Counter';
import VisitorModal from './VisitorModal';

const Footer = () => {
  const { visitCount, formattedDate, formattedTime } = Counter();
  const currentYear = new Date().getFullYear();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Ajouté

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Redirige vers /about et scrolle à #mentions après le rendu
  const goToMentions = () => {
    navigate('/about');
    setTimeout(() => {
      const section = document.getElementById('mentions');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // petit délai pour attendre le rendu
  };

  return (
    <footer className="bg-gray-200 text-gray-700 md:flex md:justify-around md:items-center shadow-md p-4 text-center text-sm md:text-lg font-medium fixed bottom-0 left-0 right-0 z-10">
      <div className="date">
        <p className="text-sm">
          Nous sommes le <strong>{formattedDate}</strong>, il est <strong>{formattedTime}</strong>.
        </p>
      </div>

      <div className="flex flex-col-reverse">
        
          <button onClick={goToMentions} className=" text-sm hover:underline">
            Mentions légales & Politique de confidentialité
          </button>{' '}
          <p className="text-sm"> &copy; {currentYear} David dM - Tous droits réservés
        </p>
      </div>

      <div className="visiteur">
        <p className="text-sm cursor-pointer" onClick={toggleModal}>
          <strong>Voir le nombre de visiteurs</strong>
        </p>
      </div>

      {isModalOpen && (
        <VisitorModal visitCount={visitCount} closeModal={toggleModal} />
      )}
    </footer>
  );
};

export default Footer;


