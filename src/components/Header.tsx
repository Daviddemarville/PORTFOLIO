import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="flex flex-row justify-between md:justify-around items-center text-center bg-zinc-200 shadow-md p-4">
      <div>
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-wide"
        >
          <h1>
            {"Mon Portfolio".split("").map((letter, index) => (
              <span
                key={index}
                className="
                animate-pulse
                lg:animate-none  // Désactive le pulse sur grand écran
                lg:inline-block lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out
                lg:hover:translate-y-[-8px] lg:hover:rotate-3 lg:hover:text-blue-600
                
                "
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


