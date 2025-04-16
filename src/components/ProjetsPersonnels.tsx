
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Zoom from './Zoom';

const ProjetsPersonnels = () => {
  const projets = [
    {
      id: 1,
      title: "Projet 1 - Création d'une maquette de vente en ligne",
      description:
        "Une maquette réalisé en equipe durant la formation, pour un site de vente en ligne type Uber.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
      images: [
        "../image/projets/fourchest1.png",
        "../image/projets/fourchest2.png",
        "../image/projets/fourchest3.png",
        "../image/projets/fourchest4.png",
        "../image/projets/fourchestcode.png",
      ],
      url: "https://github.com/Daviddemarville/FOURCHEST",
    },
    {
      id: 2,
      title: "Projet 2 - Le Jeu de la Vie",
      description:
        "Un grand classique du développement web, le Jeu de la Vie de Conway, réalisé en React. Travail d'equipe durant la formation.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      images: [
        "../image/projets/jeuvie1.png",
        "../image/projets/jeuvie2.png",
        "../image/projets/jeuviecode.png",
      ],
      url: "https://github.com/Daviddemarville/JEU_DE_LA_VIE",
    },
    {
      id: 3,
      title: "Projet 3 - Site pour un groupe de joueurs de jeux vidéo",
      description:
        "Un site pour un groupe de joueurs de jeux vidéo, avec une présentation des membres, des activitées et un acces privatif pour les membres a des informations supplementaires.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: [
        "../image/projets/nms1.png",
        "../image/projets/nms2.png",
        "../image/projets/nmscode.png",
      ],
      url: "",
    },
    {
      id: 4,
      title: "Projet 4 - Site vitrine",
      description:
        "Site vitrine pour une association, reprennant le code couleur de la féderation et une partie accessible pour modifier les articles en ligne.",
      technologies: ["HTML5", "CSS3", "MySQL"],
      images: [
        "../image/projets/udps1.png",
        "../image/projets/udps2.png",
        "../image/projets/udpscode.png",
      ],
      url: "",
    },
    

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800">Projets Personnels</h2>
      <div class="mt-2 text-gray-950">
  <p>
    <strong>Chaque projet présenté ici raconte une histoire :</strong> celle d’un défi relevé, d’un apprentissage, d’une collaboration ou d’un besoin auquel j’ai répondu par le code.
  </p>
  <p class="mt-2">
    <strong>Bienvenue dans mon univers de développement !</strong>
  </p>
  <p class="mt-2">
    Découvrez des créations uniques, allant de sites associatifs à des applications interactives, toutes pensées pour apporter une véritable valeur ajoutée.
  </p>
  <p class="mt-2">
    Qu’ils soient personnels ou issus de ma formation, ces projets illustrent ma passion pour le développement web.
  </p>
  <p class="mt-2">
    <strong>N'hésitez pas à explorer !</strong>
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className={`relative bg-gray-300/80 p-7 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 overflow-hidden 
              ${projet.id % 2 === 0 ? 'md:translate-y-4' : 'md:-translate-y-4'}`}
          >
            <div className="absolute inset-0 bg-black opacity-85 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            <h3 className="text-xl font-semibold relative z-10">{projet.title}</h3>
            <p className="mt-2 relative z-10">{projet.description}</p>
            <div className="mt-2 relative z-10">
              <p className="font-semibold">Technologies utilisées:</p>
              <ul className="list-disc pl-5">
                {projet.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2 relative z-10">
              <Slider {...settings}>
                {projet.images.map((image, index) => (
                  <div key={index} className="w-full h-64 md:h-96">
                    <Zoom
                      src={image}
                      alt={`Image ${index + 1} du projet ${projet.title}`}
                      className="w-full h-full object-cover rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </Slider>
              {projet.url && (
              <a
                href={projet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 mt-4 inline-block relative z-10"
              >
                Voir le projet
              </a>
              )}
            </div>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetsPersonnels;



