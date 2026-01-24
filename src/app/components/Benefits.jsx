const benefits = [
  {
    title: "Experiencia comprobable",
    description: "Más de 15 años construyendo proyectos exitosos en toda la región.",
  },
  {
    title: "Cumplimiento de plazos",
    description: "Nos comprometemos con fechas de entrega y las cumplimos.",
  },
  {
    title: "Presupuestos claros",
    description: "Sin sorpresas ni costos ocultos. Sabes exactamente que vas a pagar.",
  },
  {
    title: "Acompanamiento total",
    description: "Te guiamos en cada decisión desde el día uno hasta la entrega.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Construir con nosotros es diferente
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              No solo construimos edificios, construimos confianza. Cada proyecto es único
              y lo tratamos con la dedicación que merece.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <p className="text-gray-600 font-medium">
                Proyectos completados
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-600 font-medium">
                Años de experiencia
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-600 font-medium">
                Clientes satisfechos
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">
                Profesionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;