import Image from "next/image";


const projects = [
  {
    image: '/casa-steel.jpg',
    title: "Casa de steel framing",
    category: "Vivienda unifamiliar",
    area: "280 m2",
  },
  {
    image: '/galpon.png',
    title: "Galpón de carga de camiones",
    category: "Comercial",
    area: "1,500 m2",
  },
  {
    image: '/casa.jpg',
    title: "Casa familiar",
    category: "Industrial",
    area: "3,200 m2",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proyectos realizados
          </h2>
          <p className="text-gray-600 text-lg">
            Conoce algunos de nuestros trabajos más destacados en diferentes sectores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.area}
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H7m10 0v10" />
                </svg>
              </div>

              {/* Bottom info bar - visible by default */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;