import WeatherComponent from './WeatherComponent';

const Accueil = () => {
  return (
    <div className='text-center text-lg text-gray-800'>
      <h2 className="text-3xl font-semibold pt-8">Bienvenue sur mon Portfolio</h2>
      <section className='grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 pb-16'>
        <div>
          <p className='font-bold'>Je m'appelle David,</p>
          <p>Je suis un passionné de développement web, toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage.</p>
        </div>
        <div>
          <p>Je me forme actuellement en tant que</p>
          <p className='font-bold'>Développeur Web FullStack</p>
          <p>à la WildCode School. 
            <img 
              src='../image/wild.png' 
              alt='Logo de la Wild Code School' 
              className='w-1/4 md:w-1/2 mx-auto mt-4 transition-transform duration-300 hover:scale-110' 
            /> 
          </p>
        </div>
        <div>
          <p>Vous pouvez découvrir mes projets et mes compétences à travers ce portfolio.</p>
          <p>Merci de votre visite !</p>
        </div>
        <div>
          <img 
            src="../image/moi.jpg" 
            alt="GIF de bienvenue. Ça c'est ma tête" 
            className="w-1/2 mx-auto mt-4 transition-transform duration-300 hover:scale-110" 
          />
          <p className='font-bold text-gray-800 mt-2'>Ça c'est moi!</p>
        </div>
      </section>
<section className='flex flex-col items-center'>
      <div className='flex justify-center md:w-1/2 text-center font-semibold mt-4 border-2 rounded-2xl p-4'>
        <WeatherComponent />
      </div>
      </section>
    </div>
  );
};

export default Accueil;
