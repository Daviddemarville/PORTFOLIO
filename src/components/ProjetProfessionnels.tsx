
import WeatherComponent from './WeatherComponent';


const ProjetsProfessionnels = () => {
  return (
    <section className="p-4">
     
    <div>
      <h2 className="text-xl font-semibold">Projets Professionnels</h2>
      <p className="mt-2">Il est bien evident que mon projet professionnel est en construction</p>
      <p>C'est bien ici que seront exposé le fruit de mon travail.</p>
    </div>
    <div className='flex  justify-center text-center md:mt-24 border-2 rounded-2xl bg-indigo-300 p-4'>
     <WeatherComponent />
    </div>
    </section>
  );
};

export default ProjetsProfessionnels;
