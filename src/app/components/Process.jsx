'use client';

const steps = [
  {
    icon: "lightbulb",
    step: "01",
    title: "Idea y asesoramiento",
    description: "Escuchamos tu proyecto, analizamos el terreno y te asesoramos sobre las mejores opciones.",
  },
  {
    icon: "pen",
    step: "02",
    title: "Diseño de planos",
    description: "Creamos los planos arquitectónicos y estructurales según tus necesidades y normativas.",
  },
  {
    icon: "hardhat",
    step: "03",
    title: "Construcción",
    description: "Ejecutamos la obra con los mejores materiales y mano de obra calificada.",
  },
  {
    icon: "home",
    step: "04",
    title: "Entrega final",
    description: "Te entregamos tu proyecto terminado con todas las garantías y documentación.",
  },
];

const StepIcon = ({ type }) => {
  const icons = {
    lightbulb: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    pen: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    hardhat: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    home: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  };

  return icons[type] || icons.lightbulb;
};

const Process = () => {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Del concepto a la realidad en 4 pasos
          </h2>
          <p className="text-gray-300 text-lg">
            Un proceso claro y transparente para que siempre sepas en qué etapa está tu proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-orange-500/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Vertical line - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-20 bottom-0 w-0.5 bg-orange-500/20 -mb-8" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg text-white">
                      <StepIcon type={item.icon} />
                    </div>
                    {/* Step number */}
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center border-2 border-orange-500">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;