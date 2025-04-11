
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className="flex flex-col md:flex-row items-end md:space-x-4 text-sm md:text-lg font-semibold">
      <li>
        <Link
          to="/projets"
          className="inline-block transition-transform duration-300 ease-in-out transform hover:translate-y-[-8px] hover:rotate-3 hover:text-blue-600"
        >
          Projets
        </Link>
      </li>
      <li>
        <Link
          to="/meContacter"
          className="inline-block transition-transform duration-300 ease-in-out transform hover:translate-y-[-8px] hover:rotate-3 hover:text-blue-600"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="inline-block transition-transform duration-300 ease-in-out transform hover:translate-y-[-8px] hover:rotate-3 hover:text-blue-600"
        >
          À propos
        </Link>
      </li>
      <li>
        <Link
          to="/social"
          className="inline-block transition-transform duration-300 ease-in-out transform hover:translate-y-[-8px] hover:rotate-3 hover:text-blue-600"
        >
          Mes Réseaux
        </Link>
      </li>
    </ul>
  );
};

export default Menu;


