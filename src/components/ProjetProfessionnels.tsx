import { Link } from "react-router-dom";

const ProjetsProfessionnels = () => {
  return (
    <section className="p-4">
      <div>
        <h2 className="font-bold text-2xl text-gray-800">
          Projets Professionnels
        </h2>
        <div className="font-mono text-[#d4d4d4] bg-[#1e1e1e]  p-6 rounded-lg shadow-md mt-6">
          <p className="mb-2 text-[#9cdcfe]">
            // Chaque développeur commence quelque part...
          </p>
          <p className="mb-2">
            const projetPro ={" "}
            <span className="text-[#ce9178]">"En construction..."</span>;
          </p>
          <p className="mb-2">
            if (<span className="text-[#c586c0]">votreProjet ?</span>) {"{"}
          </p>
          <p className="mb-2 ml-4">
            developer.takeOn(
            <span className="text-[#ce9178]">"nouveau défi"</span>);
          </p>
          <p className="mb-2">{"}"}</p>
          <p className="mb-2 text-[#dcdcaa]">
            // Bientôt : projets passionnants, rigoureux, créatifs !
          </p>

          <div className="mt-6">
            <Link
              to="/meContacter"
              className="block text-[#6a9955] transition-transform duration-300 hover:scale-110 hover:text-[#a3d9a5]"
            >
              <code>
                &lt;a href="Parlons de votre projet"&gt; Je suis à l’écoute
                &lt;/a&gt;
              </code>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetsProfessionnels;
