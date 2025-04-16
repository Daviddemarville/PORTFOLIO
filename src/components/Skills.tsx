

const skills = [
  {
    title: "React & TypeScript",
    description: "Développement d’interfaces dynamiques avec une approche component-based moderne",
  },
  {
    title: "Tailwind CSS",
    description: "Création d’interfaces responsives et épurées, mobile-first",
  },
  {
    title: "HTML5 / CSS3",
    description: "Solides bases en structuration sémantique et styles adaptatifs",
  },
  {
    title: "Intégration d’API REST",
    description: "Requêtes asynchrones (fetch/axios), gestion des données côté client",
  },
  {
    title: "Optimisation front-end",
    description: "Performance, lazy loading, accessibilité, bonnes pratiques UX",
  },
  {
    title: "CI/CD",
    description: "Notions de déploiement continu (Vercel, Netlify), automatisation de builds/tests",
  },
  {
    title: "Git / GitHub",
    description: "Workflow collaboratif : branches, pull requests, gestion de versions",
  },
  {
    title: "Méthodologies Agile & Scrum",
    description: "Participation à des projets en équipe avec sprints, daily meetings, user stories",
  },
];

export default function Skills() {
  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Compétences techniques</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100/70 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
