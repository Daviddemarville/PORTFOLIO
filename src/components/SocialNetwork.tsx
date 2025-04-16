const SocialNetwork = () => {
  return (
    <div className="text-center p-4">
      <h2 className="text-3xl font-semibold text-gray-800">Accédez à mes réseaux sociaux</h2>
      <p className="mt-10 text-lg text-gray-600">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/david-dem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center gap-2 hover:text-blue-800 hover:font-bold transition-all duration-200"
            >
              LinkedIn
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-8 h-8 inline-block transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
              />
            </a>
          </li>
          <li className="mt-10">
            <a
              href="https://github.com/Daviddemarville"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center gap-2 hover:text-blue-800 hover:font-bold transition-all duration-200"
            >
              GitHub
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-8 h-8 inline-block transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
              />
            </a>
          </li>
          <li className="mt-10">
            <a
              href="/meContacter"
              className="flex items-center justify-center gap-2 hover:text-blue-800 hover:font-bold transition-all duration-200"
            >
              Me contacter
              <img
                src="https://cdn-icons-png.flaticon.com/512/2324/2324708.png"
                alt="Contact"
                className="w-8 h-8 inline-block transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
              />
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default SocialNetwork;


