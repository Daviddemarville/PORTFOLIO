import { useState } from "react";

const MeContacter = () => {
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Photo avec effet hover */}
      <article className="group relative w-full flex justify-center">
        <img
          src="../image/moi.jpg"
          alt="Toujours moi"
          className="w-1/2 rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
        />
      </article>

      {/* Infos de contact */}
      <article>
        <h2 className="text-2xl font-bold mb-4">Mes Contactes</h2>
        <ul className="space-y-3 text-lg">
          <li><strong>Nom :</strong> David de Marville</li>

          <li>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:de.marville.david@gmail.com"
              className="text-blue-600 underline hover:text-blue-800 transition-all duration-300"
            >
              de.marville.david@gmail.com
            </a>
          </li>

          <li>
            <strong>Téléphone :</strong>{" "}
            {showPhone ? (
              <a
                href="tel:+33648448749"
                className="text-green-600 underline hover:text-green-800 transition-all duration-300"
              >
                +33 (0)6 48 44 87 49
              </a>
            ) : (
              <button type="button"
                onClick={togglePhone}
                className="text-gray-500 underline hover:text-black transition-all duration-300"
              >
                Voir mon numéro
              </button>
            )}
          </li>
        </ul>
      </article>

      {/* Carte Google Maps en pied de page */}
      <article className="col-span-1 md:col-span-2 mt-6">
        <h3 className="text-xl font-semibold mb-2">Où me trouver ?</h3>
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=Thionville,France&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:T%7CThionville&key=AIzaSyAcZa2CZVcP5YePTqsPJqWepyF2G50A-Xo"
          alt="Carte de Thionville"
          className="w-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </article>
    </section>
  );
};

export default MeContacter;

