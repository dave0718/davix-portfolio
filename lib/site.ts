export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/koffi-david-molo-25b39a2b9',
  github: 'https://github.com/dave0718',
  whatsapp: 'https://wa.me/message/CCLIVZBREZTIG1',
  email: 'david.molo@epitech.eu',
}

export const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Parcours', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'Bases de données'
  | 'API'
  | 'Outils'

export const skills: { name: string; category: SkillCategory }[] = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'MySQL', category: 'Bases de données' },
  { name: 'MongoDB', category: 'Bases de données' },
  { name: 'SQLite', category: 'Bases de données' },
  { name: 'REST API', category: 'API' },
  { name: 'JWT', category: 'API' },
  { name: 'Authentification', category: 'API' },
  { name: 'Git', category: 'Outils' },
  { name: 'GitHub', category: 'Outils' },
  { name: 'Postman', category: 'Outils' },
  { name: 'Prisma', category: 'Outils' },
]

export const skillCategories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Mobile',
  'Bases de données',
  'API',
  'Outils',
]

export type Project = {
  title: string
  description: string
  tech: string[]
  demo: string
  github: string
  image: string
  accent: 'primary' | 'accent'
}

export const projects: Project[] = [
  {
    title: 'Post-It',
    description:
      'Application de gestion de notes interactives permettant la création, modification et suppression de notes en temps réel.',
    tech: ['Vue.js', 'JavaScript', 'REST API', 'HTML5', 'CSS3', 'TailwindCSS'],
    demo: '',
    github: '',
    image: '/projects/postit.png',
    accent: 'primary',
  },
  {
    title: 'FreeAds',
    description:
      "Plateforme de publication et de gestion d'annonces avec système d'administration complet.",
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    demo: '',
    github: '',
    image: '/projects/freeads.png',
    accent: 'accent',
  },
  {
    title: 'Yowl',
    description:
      'Réseau social Full-Stack permettant les interactions entre utilisateurs via une architecture MVC moderne.',
    tech: ['Laravel', 'MySQL', 'REST API', 'PHP', 'MVC'],
    demo: '',
    github: '',
    image: '/projects/yowl.png',
    accent: 'primary',
  },
  {
    title: 'Show Time',
    description:
      'Application de gestion de contenu développée avec une architecture backend robuste basée sur NestJS.',
    tech: ['NestJS', 'TypeScript', 'JavaScript', 'CSS'],
    demo: '',
    github: '',
    image: '/projects/showtime.png',
    accent: 'accent',
  },
  {
    title: 'Rotten Tomatoes',
    description:
      "Plateforme de découverte de films intégrant l'API TMDB avec authentification sécurisée, favoris et gestion de profil.",
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'SQLite', 'Prisma', 'NextAuth', 'TMDB API'],
    demo: '',
    github: '',
    image: '/projects/movies.png',
    accent: 'primary',
  },
  {
    title: 'Dashboard',
    description:
      'Dashboard analytique moderne permettant la visualisation de données en temps réel.',
    tech: ['React', 'PHP', 'CSS', 'Blade'],
    demo: '',
    github: '',
    image: '/projects/dashboard.png',
    accent: 'accent',
  },
  {
    title: 'Integration',
    description:
      "Projet d'intégration web responsive reproduisant fidèlement des maquettes UI/UX.",
    tech: ['HTML5', 'CSS3'],
    demo: '',
    github: '',
    image: '/projects/integration.png',
    accent: 'primary',
  },
  {
    title: 'MyShop',
    description:
      'Site e-commerce complet avec gestion des produits, du panier et tunnel de commande.',
    tech: ['PHP', 'JavaScript', 'CSS3'],
    demo: '',
    github: '',
    image: '/projects/myshop.png',
    accent: 'accent',
  },
]

export const services = [
  {
    title: 'Développement Web',
    description:
      'Applications web modernes, performantes et évolutives, du concept au déploiement.',
    icon: 'Globe',
  },
  {
    title: 'Développement Mobile',
    description:
      'Applications mobiles Android et iOS multiplateformes avec React Native.',
    icon: 'Smartphone',
  },
  {
    title: "Création d'API",
    description:
      'APIs REST sécurisées, documentées et scalables avec authentification JWT.',
    icon: 'Server',
  },
  {
    title: 'Maintenance Applicative',
    description:
      'Support continu, optimisation et évolution de vos solutions numériques.',
    icon: 'Wrench',
  },
]

export const stats = [
  { value: 8, suffix: '+', label: 'Projets réalisés' },
  { value: 15, suffix: '+', label: 'Technologies maîtrisées' },
  { value: 1000, suffix: '+', label: 'Heures de développement' },
  { value: 100, suffix: '%', label: 'Passion' },
]

export const timeline = [
  {
    title: 'Début du parcours We.Code',
    description:
      'Intégration de la Coding Academy by Epitech et premiers pas dans le développement.',
  },
  {
    title: 'Acquisition des bases du web',
    description:
      'Maîtrise du HTML, CSS, JavaScript et des fondamentaux du développement web.',
  },
  {
    title: 'Découverte des frameworks modernes',
    description:
      'Apprentissage de React, Next.js, Vue.js, Laravel et NestJS.',
  },
  {
    title: 'Réalisation de projets Full-Stack',
    description:
      "Conception d'applications complètes intégrant frontend, backend et bases de données.",
  },
  {
    title: 'Développement mobile',
    description:
      "Création d'applications mobiles multiplateformes avec React Native.",
  },
  {
    title: "Création d'APIs",
    description:
      'Développement d’APIs REST sécurisées avec authentification et bonnes pratiques.',
  },
  {
    title: 'Objectif : Développeur Full-Stack Senior',
    description:
      'Progression continue vers une expertise technique avancée et le leadership produit.',
  },
]

export const testimonials = [
  {
    quote:
      'Un développeur rigoureux et passionné, capable de transformer une idée en produit fini avec une vraie attention au détail.',
    name: 'Encadrant',
    role: 'Coding Academy by Epitech',
  },
  {
    quote:
      'Excellente collaboration : code propre, communication claire et livraisons toujours dans les temps.',
    name: 'Collaborateur',
    role: 'Projet Full-Stack',
  },
  {
    quote:
      'Le résultat a dépassé nos attentes, autant sur le design que sur les performances de l’application.',
    name: 'Client',
    role: 'Projet web',
  },
]
