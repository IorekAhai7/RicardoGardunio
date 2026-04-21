// ============================================
// ARCHIVO DE CONFIGURACIÓN CENTRAL
// Edita este archivo para cambiar contenidos sin tocar código
// ============================================

export const siteConfig = {
  // ============================================
  // CONFIGURACIÓN TÉCNICA
  // ============================================
  integrations: {
    calendlyUrl: "https://calendly.com/tu-usuario", // Reemplaza con tu URL de Calendly
    ga4Id: "G-QRM95Q66XK",
    webhookUrl: process.env.REACT_APP_WEBHOOK_URL || "https://tu-webhook.com/endpoint",
    webhookSecret: process.env.REACT_APP_WEBHOOK_SECRET || "tu-secret-key",
  },

  // ============================================
  // INFORMACIÓN DE CONTACTO
  // ============================================
  contact: {
    whatsapp: "+5215538240942",
    whatsappDisplay: "+52 1 55 3824 0942",
    email: "ricardo.garduno.gnp@gmail.com",
  },

  // ============================================
  // IDENTIDAD DEL ASESOR
  // ============================================
  advisor: {
    name: "Ricardo Garduño",
    title: "Asesor Patrimonial y Agente de Seguros",
    heroTitle: "Formo parte del 1% de asesores reconocidos a nivel mundial por MDRT.",
    heroSubtitle: "No por lo que vendo, sino por cómo acompaño.",
    photoUrl: "https://customer-assets.emergentagent.com/job_policy-finder-hub/artifacts/wr3wv5ry_%2313%20-%20Ricardo%20Garduno%20-%20HeadshotPro.png",
  },

  // ============================================
  // LOGO
  // ============================================
  branding: {
    logoUrl: "https://customer-assets.emergentagent.com/job_policy-finder-hub/artifacts/jdjgxmkg_Logo%20Gardun%CC%83o.png",
    logoAlt: "Garduño - Asesoría Patrimonial",
  },

  // ============================================
  // SECCIÓN "SOBRE RICARDO"
  // ============================================
  about: {
    title: "Sobre Ricardo",
    content: `Tomar decisiones financieras importantes no debería sentirse como un acto de presión, sino como un proceso de claridad.

A lo largo de mi carrera he entendido que las personas no buscan simplemente un seguro o un plan de ahorro. Buscan tranquilidad. Buscan certeza. Buscan saber que alguien está de su lado cuando se trata de proteger su patrimonio, su familia y su futuro.

Formar parte del 1% de asesores reconocidos a nivel mundial por MDRT no es un logro basado en volumen, sino en confianza. Mi enfoque siempre ha sido acompañar, explicar con transparencia y diseñar estrategias que realmente se adapten a cada persona.

Mi compromiso no es vender productos. Es construir relaciones a largo plazo basadas en ética, preparación constante y responsabilidad.`,
  },

  // ============================================
  // BENEFICIOS ESTRATÉGICOS
  // ============================================
  benefits: [
    {
      title: "Asesoría Personalizada",
      description: "Cada estrategia se diseña específicamente para tus necesidades y metas financieras.",
    },
    {
      title: "Transparencia Total",
      description: "Explicaciones claras sin letra pequeña. Tomas decisiones con plena certeza.",
    },
    {
      title: "Acompañamiento Continuo",
      description: "No termina con la contratación. Estoy contigo en cada paso del camino.",
    },
    {
      title: "Reconocimiento Internacional",
      description: "Parte del 1% de asesores MDRT por confianza y resultados, no por volumen.",
    },
  ],

  // ============================================
  // SERVICIOS
  // ============================================
  services: [
    {
      id: 1,
      title: "Seguro de Gastos Médicos Mayores",
      description: "Protección flexible y personalizable para tu salud y la de tu familia.",
      imageUrl: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGRvY3RvciUyMHN0ZXRob3Njb3BlfGVufDB8fHx8MTc3MjU3MDY4NHww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 2,
      title: "Ahorro para el Retiro",
      description: "Planes deducibles de impuestos para asegurar tu tranquilidad futura.",
      imageUrl: "https://images.unsplash.com/photo-1739932908614-9d653f574fa3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmV0aXJlbWVudCUyMHBsYW5uaW5nJTIwZWxkZXJseSUyMGNvdXBsZSUyMGZpbmFuY2V8ZW58MHx8fHwxNzcyNTcwNjg1fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 3,
      title: "Seguro Empresarial de Persona Clave",
      description: "Protege el valor de los elementos clave de tu empresa.",
      imageUrl: "https://images.pexels.com/photos/3758159/pexels-photo-3758159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      title: "Ahorro para la Educación de tus Hijos",
      description: "Asegura el futuro académico de tus hijos con estrategias inteligentes.",
      imageUrl: "https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzYXZpbmdzJTIwZ3JhZHVhdGlvbiUyMGFjYWRlbWljJTIwc3VjY2Vzc3xlbnwwfHx8fDE3NzI1NzA2ODd8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 5,
      title: "Ahorro para tu Casa",
      description: "Construye el patrimonio para adquirir la casa de tus sueños.",
      imageUrl: "https://images.unsplash.com/photo-1764682683407-39652d544f78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGhvbWUlMjBhcmNoaXRlY3R1cmUlMjBwcm9wZXJ0eXxlbnwwfHx8fDE3NzI1NzA2ODh8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 6,
      title: "Protección Exclusiva para Mujer",
      description: "Planes de ahorro diseñados especialmente para mujeres.",
      imageUrl: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwY29uZmlkZW50JTIwbGVhZGVyc2hpcHxlbnwwfHx8fDE3NzI1NzA2ODh8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 7,
      title: "Planes de Protección en Vida",
      description: "Cobertura ante fallecimiento e invalidez para proteger a tu familia.",
      imageUrl: "https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwcm90ZWN0aW9uJTIwbG92ZSUyMGNhcmUlMjBwYXJlbnRzJTIwY2hpbGRyZW58ZW58MHx8fHwxNzcyNTcwNjg5fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 8,
      title: "Seguro de Autos",
      description: "Protección completa para tu vehículo con la mejor cobertura.",
      imageUrl: "https://images.unsplash.com/photo-1763789381108-b5622140f2e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzZWRhbiUyMGF1dG9tb2JpbGUlMjBwcmVtaXVtfGVufDB8fHx8MTc3MjU3MDY5MHww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 9,
      title: "Seguro de Hogar",
      description: "Protege tu patrimonio más valioso con cobertura integral.",
      imageUrl: "https://images.unsplash.com/photo-1760072513442-9872656c1b07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwaG9tZSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3NzI1NzA2OTB8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 10,
      title: "Seguro de Mascotas",
      description: "Cuida la salud de tus compañeros más fieles.",
      imageUrl: "https://images.unsplash.com/photo-1723296014387-e6707dc62bc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldCUyMGRvZyUyMGZhbWlseSUyMGNvbXBhbmlvbnxlbnwwfHx8fDE3NzI1NzA2OTF8MA&ixlib=rb-4.1.0&q=85",
    },
  ],

  // ============================================
  // CÓMO FUNCIONA (3 PASOS)
  // ============================================
  howItWorks: [
    {
      step: 1,
      title: "Agenda una Consulta",
      description: "Conversamos sobre tus necesidades, metas y situación actual sin compromiso.",
    },
    {
      step: 2,
      title: "Diseño de Estrategia",
      description: "Creo una propuesta personalizada que se adapta a ti, con transparencia total.",
    },
    {
      step: 3,
      title: "Acompañamiento Continuo",
      description: "Implementamos juntos y estoy contigo en cada paso del camino.",
    },
  ],

  // ============================================
  // TESTIMONIOS
  // ============================================
  testimonials: [
    {
      id: 1,
      name: "David González Salceda",
      role: "",
      content: "Si necesitas un seguro y quieres a alguien que de verdad se preocupe por ti, habla con Ricardo. Tiene mucho conocimiento de las opciones disponibles por lo que te explica todo sin rodeos y te hace sentir tranquilo con tu decisión. Se adapta a lo que realmente necesitas, sin venderte cosas de más.",
    },
    {
      id: 2,
      name: "Azul Medrano",
      role: "Program Manager",
      content: "Tener un agente de seguros honesto y profesional es vital al momento de escoger un seguro y Ricardo es ese agente del que hablo. Es un agente 100% calificado para ofrecer la mejor opción para ti dependiendo de tus necesidades, es honesto y muy profesional.",
    },
    {
      id: 3,
      name: "Jose Gabriel Lopez Ruiz",
      role: "External Party Risk Specialist",
      content: "Mi experiencia con Ricardo ha sido más que gratificante, siempre está para apoyarnos y disponible para cualquier consulta o asesoría. Además, me ha informado de otros beneficios por ser cliente GNP como boletos gratis o descuentos. El mejor asesor de seguros en todos los sentidos.",
    },
    {
      id: 4,
      name: "Laura Lavarrios",
      role: "",
      content: "Ricardo es una persona que transmite confianza y empatía, se preocupa porque estés informado y tranquilo, te acompaña en todo momento, con gran experiencia en la materia te asesora para que puedas tomar la mejor decisión con el fin de lograr tus objetivos y cumplir tus metas. Sin duda el dejarte guiar por él, te permitirá contar con la visión de alguien en constante actualización y con gran ética.",
    },
    {
      id: 5,
      name: "Daniela Tapia",
      role: "Project Manager",
      content: "Obtener mi PPR era algo que tenía en lista hace mucho tiempo. Ricardo me asesoró de manera clara y profesional, explicándome cada detalle para que tomara la mejor decisión. Su acompañamiento fue fundamental para concretar este objetivo.",
    },
  ],

  // ============================================
  // PREGUNTAS FRECUENTES
  // ============================================
  faqs: [
    {
      id: 1,
      question: "¿Qué costo tiene tu asesoría?",
      answer: "Mi asesoría es completamente gratuita. Mi compensación proviene de las aseguradoras con las que trabajo, no tiene ningún costo adicional para ti.",
    },
    {
      id: 2,
      question: "¿Cómo funciona la primera consulta?",
      answer: "La primera consulta es una conversación sin compromiso donde analizamos tu situación actual, tus necesidades y objetivos. A partir de ahí diseño una estrategia personalizada con total transparencia.",
    },
    {
      id: 3,
      question: "¿Qué es el deducible en un seguro de gastos médicos?",
      answer: "El deducible es el monto que pagas de tu bolsillo antes de que la aseguradora comience a cubrir tus gastos médicos. Se aplica por cada padecimiento y puedes elegir el monto que mejor se adapte a tu presupuesto.",
    },
    {
      id: 4,
      question: "¿Puedo cambiar o cancelar mi póliza después?",
      answer: "Sí, los seguros son flexibles. Puedes ajustar coberturas, modificar montos o cancelar según cambien tus necesidades. Te acompaño en cualquier ajuste que necesites hacer.",
    },
    {
      id: 5,
      question: "¿Qué pasa con las enfermedades preexistentes?",
      answer: "Las enfermedades preexistentes tienen periodos de espera o exclusiones según la aseguradora. En la consulta revisamos tu caso específico para encontrar la mejor opción con la mayor cobertura posible.",
    },
    {
      id: 6,
      question: "¿Los planes de ahorro para el retiro tienen beneficios fiscales?",
      answer: "Sí, los planes de ahorro para el retiro son deducibles de impuestos hasta cierto límite anual, lo que te permite recuperar parte de tu inversión en tu declaración anual.",
    },
    {
      id: 7,
      question: "¿Trabajas con alguna aseguradora específica?",
      answer: "Sí, trabajo con GNP Seguros, una de las aseguradoras más sólidas y confiables de México. Esto me permite conocer a fondo sus productos y ofrecerte las mejores soluciones adaptadas a tus necesidades.",
    },
    {
      id: 8,
      question: "¿Qué es MDRT y qué significa ser parte del 1%?",
      answer: "MDRT (Million Dollar Round Table) es la asociación mundial de profesionales de seguros y servicios financieros. Ser parte del 1% significa cumplir con los más altos estándares de ética, conocimiento y servicio al cliente, no solo por ventas.",
    },
  ],

  // ============================================
  // CAMPOS DEL FORMULARIO
  // ============================================
  formFields: {
    insuranceTypes: [
      "Gastos Médicos Mayores",
      "Ahorro para el Retiro",
      "Seguro Empresarial",
      "Ahorro para Educación",
      "Ahorro para Casa",
      "Protección para Mujer",
      "Protección en Vida",
      "Seguro de Auto",
      "Seguro de Hogar",
      "Seguro de Mascotas",
      "Otro",
    ],
    contactMethods: [
      { value: "whatsapp", label: "WhatsApp" },
      { value: "email", label: "Correo Electrónico" },
      { value: "phone", label: "Llamada Telefónica" },
    ],
    urgencyLevels: [
      "Lo antes posible",
      "Esta semana",
      "Este mes",
      "Solo estoy investigando",
    ],
  },
};
