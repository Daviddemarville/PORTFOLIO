
import { Link } from 'react-router-dom'; // Import du Link de React Router
import Menu from './Menu';

const Header = () => {
  return (
    <header className="flex flex-row justify-between md:justify-around items-center text-center bg-zinc-200 shadow-md p-4 text-center">
      <div>
      <Link to="/" className="text-xl sm:text-2xl md:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-wide">
        <h1>
          {"Mon Portfolio".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 ease-in-out transform hover:translate-y-[-8px] hover:rotate-3 hover:text-blue-600"
            >
              {letter}
            </span>
          ))}
        </h1>
      </Link>
      </div>
      <nav><Menu /></nav>
    </header>
  );
};

export default Header;
