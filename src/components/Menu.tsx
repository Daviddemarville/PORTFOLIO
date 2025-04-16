import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className="flex flex-col md:flex-row items-end md:space-x-4 text-sm md:text-lg font-semibold">
      <li>
        <Link
          to="/projets"
          className="
          inline-block
            animate-bounce duration-[3s]
            lg:animate-none 
            lg:inline-block lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out
            lg:hover:translate-y-[-8px] lg:hover:rotate-3 lg:hover:text-blue-600
          "
        >
          Projets
        </Link>
      </li>
      <li>
        <Link
          to="/meContacter"
          className="
            inline-block
            animate-bounce duration-[3s]
            lg:animate-none 
            lg:inline-block lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out
            lg:hover:translate-y-[-8px] lg:hover:rotate-3 lg:hover:text-blue-600
          "
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="
            inline-block
            animate-bounce duration-[3s]
            lg:animate-none 
            lg:inline-block lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out
            lg:hover:translate-y-[-8px] lg:hover:rotate-3 lg:hover:text-blue-600
          "
        >
          À propos
        </Link>
      </li>
      <li>
        <Link
          to="/social"
          className="
            inline-block
            animate-bounce duration-[3s]
            lg:animate-none 
            lg:inline-block lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out
            lg:hover:translate-y-[-8px] lg:hover:rotate-3 lg:hover:text-blue-600
          "
        >
          Mes Réseaux
        </Link>
      </li>
    </ul>
  );
};

export default Menu;




