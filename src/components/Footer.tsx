import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import VisitorModal from "./VisitorModal";

const Footer = () => {
  const { visitCount, formattedDate, formattedTime } = Counter();
  const currentYear = new Date().getFullYear();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const goToMentions = () => {
    navigate("/about");
    setTimeout(() => {
      const section = document.getElementById("mentions");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gray-200 p-4 text-center text-sm font-medium text-gray-700 shadow-md md:flex md:justify-around md:items-center md:text-lg">
      <div className="date">
        <p className="text-sm">
          Nous sommes le <strong>{formattedDate}</strong>, il est{" "}
          <strong>{formattedTime}</strong>.
        </p>
      </div>

      <div className="flex flex-col-reverse">
        <button
          type="button"
          onClick={goToMentions}
          className="text-sm hover:underline"
        >
          Mentions légales & Politique de confidentialité
        </button>
        <p className="text-sm">
          &copy; {currentYear} David dM - Tous droits réservés
        </p>
      </div>

      <div className="visiteur">
        <button
          type="button"
          className="cursor-pointer text-sm"
          onClick={toggleModal}
        >
          <strong>Voir le nombre de visiteurs</strong>
        </button>
      </div>

      {isModalOpen && (
        <VisitorModal visitCount={visitCount} closeModal={toggleModal} />
      )}
    </footer>
  );
};

export default Footer;
