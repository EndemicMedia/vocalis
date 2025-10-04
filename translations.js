(() => {
  const defaultLanguage = 'en';
  const supportedLanguages = ['en', 'pt-BR', 'es', 'de', 'it'];

  const translations = {
    en: {
      badge: 'AI-powered AAC for expressive speech',
      heroDescription:
        'AI-powered communication that turns fragments into fluent, personal expression.',
      formEmailLabel: 'Email address',
      emailPlaceholder: 'Email address',
      waitlistButton: 'Join the Waitlist',
      waitlistSuccess: "Thanks! We'll be in touch.",
      problemHeading: 'The Problem',
      problemText:
        'Millions of people with verbal disabilities—from cerebral palsy to ALS—face tools that reduce them to rigid boards or robotic phrases. Communication becomes functional, but never truly human.',
      solutionHeading: 'The Solution',
      solutionText:
        "Vocalis transforms partial speech, text, or sketches into natural sentences in real time, preserving the user's tone, style, and personality.",
      whyMattersHeading: 'Why it matters',
      whyMattersText:
        'People deserve more than basic speech output. Vocalis delivers identity, nuance, and connection from the first conversation.',
      useCasesHeading: 'Example Use Cases',
      useCaseRestaurantTitle: 'At a restaurant',
      useCaseRestaurantText:
        '<em>Input:</em> "want… water"<br /><em>Output:</em> "Could I have a glass of water, please?"',
      useCaseSocialTitle: 'In a social setting',
      useCaseSocialText:
        '<em>Input:</em> "funny… dog vid… haha"<br /><em>Output:</em> "That dog video cracked me up. Absolute chaos."',
      useCaseMeetingTitle: 'In class or a meeting',
      useCaseMeetingText:
        '<em>Input:</em> "don’t… agree… point"<br /><em>Output:</em> "I don’t agree with that point. Here’s another perspective…"',
      visualizingHeading: 'Visualizing Possibilities',
      visualizingImageAlt1: 'Assistive communication illustration showing a restaurant scene',
      visualizingCaption1: 'Ordering with confidence in a restaurant.',
      visualizingImageAlt2: 'Assistive communication illustration showing friends laughing together',
      visualizingCaption2: 'Sharing laughs with friends.',
      visualizingImageAlt3: 'Assistive communication illustration showing a student presenting',
      visualizingCaption3: 'Expressing ideas in class.',
      coreFeaturesHeading: 'Core Features',
      featureFragmentTitle: 'Fragment Expansion',
      featureFragmentText:
        'Convert incomplete speech or text into fluent, context-aware sentences.',
      featureStyleTitle: 'Style Personalization',
      featureStyleText:
        'Choose tones like casual, formal, or witty and Vocalis adapts to your personality.',
      featureMultimodalTitle: 'Multi-Modal Input',
      featureMultimodalText:
        'Voice, text shorthand, sketches, or pictograms—all become expressive sentences.',
      featureContextTitle: 'Context Awareness',
      featureContextText:
        'Understands settings—from restaurants to meetings—to tailor communication automatically.',
      featureRealtimeTitle: 'Real-Time Output',
      featureRealtimeText:
        'Generates polished text and synthetic voice instantly with quick-swipe alternatives.',
      featureAddonsTitle: 'Expressive Add-ons',
      featureAddonsText:
        'Quick Wit mode, emotion markers, and urgent mode let you fine-tune your voice.',
      featurePrivacyTitle: 'Privacy First',
      featurePrivacyText:
        'On-device learning keeps your data secure while personalizing your experience.',
      differentiatorsHeading: 'Differentiators',
      differentiatorsText:
        'Where others offer mere functionality, Vocalis delivers identity and dignity. It turns fragments into expressive speech—not just clarity, but character.',
      assistiveHeading: 'Assistive Communication for Everyone',
      assistiveParagraph1:
        'Vocalis is an AI-powered augmentative and alternative communication (AAC) app for speech disabilities including ALS, cerebral palsy, stroke, and apraxia.',
      assistiveParagraph2:
        'This speech disability communication app turns fragments into fluent speech, giving caregivers and therapists a modern AAC tool.',
      assistiveParagraph3:
        'The ALS community and others benefit from a flexible AAC app that respects personal style.',
      assistiveImageAlt: 'People using AI communication in daily life',
      marketHeading: 'Market Opportunity',
      marketParagraph1:
        'Over 40 million people worldwide rely on AAC tools, a market projected to surpass $5 billion by 2030.',
      marketParagraph2:
        'Vocalis targets this gap with an AI-first approach, unlocking new demand across clinical, education, and consumer channels.',
      marketImageAlt: 'Chart showing growth of assistive communication market',
      businessHeading: 'Business Model',
      businessParagraph1:
        'Freemium access lowers barriers while tiered subscriptions offer advanced voices, analytics, and caregiver collaboration.',
      businessParagraph2:
        'Licensing partnerships with clinics and device makers compound recurring revenue streams.',
      businessImageAlt: 'Diagram of subscription tiers and partnerships',
      roadmapHeading: 'Roadmap',
      roadmapParagraph1:
        'Beta launches with core text-to-speech in Q1 2025, followed by gesture input, multilingual voices, and offline support.',
      roadmapImageAlt: 'Timeline of AI communication app milestones',
      teamHeading: 'Team',
      teamParagraph1:
        'Built by speech-language pathologists and AI researchers, the team blends clinical insight with scalable engineering.',
      teamImageAlt: 'Team of clinicians and researchers collaborating',
      ctaEyebrow: 'Ready to amplify every voice?',
      ctaHeading:
        'Join the early access waitlist and partner with us on inclusive communication.',
      ctaParagraph:
        'Investors, clinicians, and caregivers can shape the launch roadmap while securing priority updates on trials, integrations, and accessibility partnerships.',
      ctaJoinLink: 'Join the Waitlist',
      ctaPartnerLink: 'Start a Partnership Conversation',
      footerRights: 'All rights reserved.',
      languageLabel: 'Language',
      heroImageAlt: 'Illustration of AI-powered communication',
      themeToggleLight: 'Switch to Dark Mode',
      themeToggleDark: 'Switch to Light Mode'
    },
    'pt-BR': {
      badge: 'CAA com IA para fala expressiva',
      heroDescription:
        'Comunicação com IA que transforma fragmentos em expressão fluente e pessoal.',
      formEmailLabel: 'Endereço de e-mail',
      emailPlaceholder: 'Endereço de e-mail',
      waitlistButton: 'Entre na lista de espera',
      waitlistSuccess: 'Obrigado! Entraremos em contato em breve.',
      problemHeading: 'O Problema',
      problemText:
        'Milhões de pessoas com deficiências verbais — de paralisia cerebral a ELA — lidam com ferramentas que as reduzem a quadros rígidos ou frases robóticas. A comunicação torna-se funcional, mas nunca verdadeiramente humana.',
      solutionHeading: 'A Solução',
      solutionText:
        'O Vocalis transforma fala parcial, texto ou rabiscos em frases naturais em tempo real, preservando o tom, o estilo e a personalidade do usuário.',
      whyMattersHeading: 'Por que importa',
      whyMattersText:
        'As pessoas merecem mais do que uma fala básica. O Vocalis entrega identidade, nuance e conexão desde a primeira conversa.',
      useCasesHeading: 'Exemplos de uso',
      useCaseRestaurantTitle: 'No restaurante',
      useCaseRestaurantText:
        '<em>Entrada:</em> "querer… água"<br /><em>Saída:</em> "Poderia me trazer um copo de água, por favor?"',
      useCaseSocialTitle: 'Em um encontro social',
      useCaseSocialText:
        '<em>Entrada:</em> "engraçado… vídeo cão… haha"<br /><em>Saída:</em> "Aquele vídeo do cachorro me fez rir demais. Caos total."',
      useCaseMeetingTitle: 'Na aula ou reunião',
      useCaseMeetingText:
        '<em>Entrada:</em> "não… concordo… ponto"<br /><em>Saída:</em> "Não concordo com esse ponto. Aqui vai outra perspectiva…"',
      visualizingHeading: 'Visualizando possibilidades',
      visualizingImageAlt1: 'Ilustração de comunicação assistiva em um restaurante',
      visualizingCaption1: 'Fazendo o pedido com confiança em um restaurante.',
      visualizingImageAlt2: 'Ilustração de comunicação assistiva entre amigos rindo',
      visualizingCaption2: 'Compartilhando risadas com amigos.',
      visualizingImageAlt3: 'Ilustração de comunicação assistiva de estudante apresentando',
      visualizingCaption3: 'Expressando ideias em sala de aula.',
      coreFeaturesHeading: 'Recursos principais',
      featureFragmentTitle: 'Expansão de fragmentos',
      featureFragmentText:
        'Transforma fala ou texto incompletos em frases fluentes e sensíveis ao contexto.',
      featureStyleTitle: 'Personalização de estilo',
      featureStyleText:
        'Escolha tons como casual, formal ou espirituoso e o Vocalis adapta-se à sua personalidade.',
      featureMultimodalTitle: 'Entrada multimodal',
      featureMultimodalText:
        'Voz, taquigrafia, esboços ou pictogramas — tudo vira frases expressivas.',
      featureContextTitle: 'Consciência de contexto',
      featureContextText:
        'Entende ambientes — de restaurantes a reuniões — e ajusta a comunicação automaticamente.',
      featureRealtimeTitle: 'Saída em tempo real',
      featureRealtimeText:
        'Gera texto polido e voz sintética instantaneamente com alternativas rápidas.',
      featureAddonsTitle: 'Complementos expressivos',
      featureAddonsText:
        'Modo Humor Rápido, marcadores de emoção e modo urgente para ajustar a voz.',
      featurePrivacyTitle: 'Privacidade em primeiro lugar',
      featurePrivacyText:
        'Aprendizado no dispositivo mantém seus dados seguros enquanto personaliza a experiência.',
      differentiatorsHeading: 'Diferenciais',
      differentiatorsText:
        'Enquanto outros oferecem apenas funcionalidade, o Vocalis entrega identidade e dignidade. Transforma fragmentos em fala expressiva — não só clareza, mas caráter.',
      assistiveHeading: 'Comunicação assistiva para todos',
      assistiveParagraph1:
        'O Vocalis é um aplicativo CAA com IA para deficiências de fala como ELA, paralisia cerebral, AVC e apraxia.',
      assistiveParagraph2:
        'Este app moderno transforma fragmentos em fala fluente, dando a cuidadores e terapeutas uma ferramenta atual.',
      assistiveParagraph3:
        'A comunidade com ELA e outras condições ganha um app flexível que respeita o estilo pessoal.',
      assistiveImageAlt: 'Pessoas usando comunicação com IA no dia a dia',
      marketHeading: 'Oportunidade de mercado',
      marketParagraph1:
        'Mais de 40 milhões de pessoas dependem de ferramentas CAA, um mercado que deve ultrapassar US$ 5 bilhões até 2030.',
      marketParagraph2:
        'O Vocalis mira essa lacuna com uma abordagem centrada em IA, destravando nova demanda em clínicas, educação e consumo.',
      marketImageAlt: 'Gráfico de crescimento do mercado de comunicação assistiva',
      businessHeading: 'Modelo de negócios',
      businessParagraph1:
        'Acesso freemium reduz barreiras enquanto assinaturas oferecem vozes avançadas, analytics e colaboração com cuidadores.',
      businessParagraph2:
        'Parcerias de licenciamento com clínicas e fabricantes ampliam receitas recorrentes.',
      businessImageAlt: 'Diagrama de assinaturas e parcerias de acessibilidade',
      roadmapHeading: 'Roteiro',
      roadmapParagraph1:
        'Beta com texto para fala no 1º trimestre de 2025, seguido de entrada por gestos, vozes multilíngues e suporte offline.',
      roadmapImageAlt: 'Linha do tempo com marcos do app de comunicação',
      teamHeading: 'Equipe',
      teamParagraph1:
        'Criado por fonoaudiólogos e pesquisadores de IA, combinando visão clínica com engenharia escalável.',
      teamImageAlt: 'Equipe de clínicos e pesquisadores colaborando',
      ctaEyebrow: 'Pronto para amplificar cada voz?',
      ctaHeading:
        'Entre na lista de acesso antecipado e construa conosco uma comunicação inclusiva.',
      ctaParagraph:
        'Investidores, clínicos e cuidadores podem moldar o lançamento enquanto recebem atualizações prioritárias sobre testes, integrações e parcerias de acessibilidade.',
      ctaJoinLink: 'Entre na lista de espera',
      ctaPartnerLink: 'Comece uma conversa de parceria',
      footerRights: 'Todos os direitos reservados.',
      languageLabel: 'Idioma',
      heroImageAlt: 'Ilustração de comunicação com IA',
      themeToggleLight: 'Ativar modo escuro',
      themeToggleDark: 'Ativar modo claro'
    },
    es: {
      badge: 'CAA con IA para un habla expresiva',
      heroDescription:
        'Comunicación con IA que convierte fragmentos en expresión fluida y personal.',
      formEmailLabel: 'Correo electrónico',
      emailPlaceholder: 'Correo electrónico',
      waitlistButton: 'Únete a la lista de espera',
      waitlistSuccess: '¡Gracias! Nos pondremos en contacto pronto.',
      problemHeading: 'El problema',
      problemText:
        'Millones de personas con discapacidades verbales —desde parálisis cerebral hasta ELA— usan herramientas que las reducen a tableros rígidos o frases robóticas. La comunicación se vuelve funcional, pero nunca realmente humana.',
      solutionHeading: 'La solución',
      solutionText:
        'Vocalis transforma habla parcial, texto o bocetos en oraciones naturales en tiempo real, preservando el tono, el estilo y la personalidad de la persona usuaria.',
      whyMattersHeading: 'Por qué importa',
      whyMattersText:
        'Las personas merecen más que una salida de voz básica. Vocalis aporta identidad, matices y conexión desde la primera conversación.',
      useCasesHeading: 'Casos de uso',
      useCaseRestaurantTitle: 'En un restaurante',
      useCaseRestaurantText:
        '<em>Entrada:</em> "quiero… agua"<br /><em>Salida:</em> "¿Podría tener un vaso de agua, por favor?"',
      useCaseSocialTitle: 'En un encuentro social',
      useCaseSocialText:
        '<em>Entrada:</em> "gracioso… video perro… haha"<br /><em>Salida:</em> "Ese video del perro me hizo reír muchísimo. Un caos total."',
      useCaseMeetingTitle: 'En clase o en una reunión',
      useCaseMeetingText:
        '<em>Entrada:</em> "no… acuerdo… punto"<br /><em>Salida:</em> "No estoy de acuerdo con ese punto. Aquí va otra perspectiva…"',
      visualizingHeading: 'Visualizando posibilidades',
      visualizingImageAlt1: 'Ilustración de comunicación asistida en un restaurante',
      visualizingCaption1: 'Pedir con confianza en un restaurante.',
      visualizingImageAlt2: 'Ilustración de comunicación asistida entre amistades riendo',
      visualizingCaption2: 'Compartir risas con amistades.',
      visualizingImageAlt3: 'Ilustración de comunicación asistida con estudiante exponiendo',
      visualizingCaption3: 'Expresar ideas en clase.',
      coreFeaturesHeading: 'Funciones clave',
      featureFragmentTitle: 'Expansión de fragmentos',
      featureFragmentText:
        'Convierte habla o texto incompletos en oraciones fluidas y contextuales.',
      featureStyleTitle: 'Personalización de estilo',
      featureStyleText:
        'Elige tonos como casual, formal o ingenioso y Vocalis se adapta a tu personalidad.',
      featureMultimodalTitle: 'Entrada multimodal',
      featureMultimodalText:
        'Voz, abreviaturas, bocetos o pictogramas: todo se convierte en oraciones expresivas.',
      featureContextTitle: 'Conciencia del contexto',
      featureContextText:
        'Comprende entornos —de restaurantes a reuniones— y ajusta la comunicación automáticamente.',
      featureRealtimeTitle: 'Salida en tiempo real',
      featureRealtimeText:
        'Genera texto pulido y voz sintética al instante con alternativas rápidas.',
      featureAddonsTitle: 'Complementos expresivos',
      featureAddonsText:
        'Modo Ingenio Rápido, marcadores de emoción y modo urgente para afinar tu voz.',
      featurePrivacyTitle: 'Privacidad primero',
      featurePrivacyText:
        'El aprendizaje en el dispositivo mantiene tus datos seguros mientras personaliza la experiencia.',
      differentiatorsHeading: 'Diferenciadores',
      differentiatorsText:
        'Mientras otras opciones ofrecen solo funcionalidad, Vocalis aporta identidad y dignidad. Convierte fragmentos en habla expresiva: no solo claridad, sino carácter.',
      assistiveHeading: 'Comunicación asistiva para todas las personas',
      assistiveParagraph1:
        'Vocalis es una app CAA con IA para discapacidades del habla como ELA, parálisis cerebral, accidente cerebrovascular y apraxia.',
      assistiveParagraph2:
        'Esta app moderna transforma fragmentos en habla fluida, brindando a cuidadores y terapeutas una herramienta actual.',
      assistiveParagraph3:
        'La comunidad con ELA y otras condiciones se beneficia de una app flexible que respeta el estilo personal.',
      assistiveImageAlt: 'Personas usando comunicación con IA en la vida diaria',
      marketHeading: 'Oportunidad de mercado',
      marketParagraph1:
        'Más de 40 millones de personas dependen de herramientas CAA, un mercado que superará los 5 mil millones de dólares para 2030.',
      marketParagraph2:
        'Vocalis aborda esta brecha con un enfoque primero en IA, liberando nueva demanda en clínicas, educación y consumo.',
      marketImageAlt: 'Gráfico del crecimiento del mercado de comunicación asistiva',
      businessHeading: 'Modelo de negocio',
      businessParagraph1:
        'El acceso freemium reduce barreras mientras las suscripciones ofrecen voces avanzadas, analítica y colaboración con cuidadores.',
      businessParagraph2:
        'Las alianzas de licenciamiento con clínicas y fabricantes refuerzan ingresos recurrentes.',
      businessImageAlt: 'Diagrama de niveles de suscripción y alianzas',
      roadmapHeading: 'Hoja de ruta',
      roadmapParagraph1:
        'Beta con texto a voz en el primer trimestre de 2025, seguido de entrada por gestos, voces multilingües y soporte sin conexión.',
      roadmapImageAlt: 'Cronograma de hitos del app de comunicación con IA',
      teamHeading: 'Equipo',
      teamParagraph1:
        'Creado por logopedas y personas investigadoras en IA, combinando visión clínica con ingeniería escalable.',
      teamImageAlt: 'Equipo de clínicos e investigadores colaborando',
      ctaEyebrow: '¿Listo para amplificar cada voz?',
      ctaHeading:
        'Únete a la lista de acceso anticipado y colabora con nosotros en comunicación inclusiva.',
      ctaParagraph:
        'Inversionistas, clínicos y cuidadores pueden influir en el lanzamiento mientras reciben actualizaciones prioritarias sobre pruebas, integraciones y alianzas de accesibilidad.',
      ctaJoinLink: 'Únete a la lista de espera',
      ctaPartnerLink: 'Inicia una conversación de colaboración',
      footerRights: 'Todos los derechos reservados.',
      languageLabel: 'Idioma',
      heroImageAlt: 'Ilustración de comunicación con IA',
      themeToggleLight: 'Activar modo oscuro',
      themeToggleDark: 'Activar modo claro'
    },
    de: {
      badge: 'KI-gestützte UK für ausdrucksstarke Sprache',
      heroDescription:
        'KI-gestützte Kommunikation verwandelt Fragmente in fließende, persönliche Ausdrucksweise.',
      formEmailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'E-Mail-Adresse',
      waitlistButton: 'Zur Warteliste anmelden',
      waitlistSuccess: 'Danke! Wir melden uns bald.',
      problemHeading: 'Das Problem',
      problemText:
        'Millionen von Menschen mit Sprachbehinderungen – von Zerebralparese bis ALS – arbeiten mit Hilfsmitteln, die sie auf starre Tafeln oder roboterhafte Sätze reduzieren. Kommunikation wird funktional, aber nie wirklich menschlich.',
      solutionHeading: 'Die Lösung',
      solutionText:
        'Vocalis verwandelt unvollständige Sprache, Text oder Skizzen in Echtzeit in natürliche Sätze und bewahrt dabei Ton, Stil und Persönlichkeit.',
      whyMattersHeading: 'Warum es zählt',
      whyMattersText:
        'Menschen verdienen mehr als einfache Sprachausgabe. Vocalis liefert Identität, Nuancen und Verbindung ab dem ersten Gespräch.',
      useCasesHeading: 'Anwendungsbeispiele',
      useCaseRestaurantTitle: 'Im Restaurant',
      useCaseRestaurantText:
        '<em>Eingabe:</em> "möchte… wasser"<br /><em>Ausgabe:</em> "Könnte ich bitte ein Glas Wasser bekommen?"',
      useCaseSocialTitle: 'In Gesellschaft',
      useCaseSocialText:
        '<em>Eingabe:</em> "lustiges… hundevideo… haha"<br /><em>Ausgabe:</em> "Dieses Hundevideo hat mich umgehauen. Totales Chaos."',
      useCaseMeetingTitle: 'Im Unterricht oder Meeting',
      useCaseMeetingText:
        '<em>Eingabe:</em> "stimme… nicht… zu"<br /><em>Ausgabe:</em> "Ich stimme diesem Punkt nicht zu. Hier ist eine andere Sicht…"',
      visualizingHeading: 'Möglichkeiten visualisieren',
      visualizingImageAlt1: 'Illustration unterstützter Kommunikation in einem Restaurant',
      visualizingCaption1: 'Mit Selbstvertrauen im Restaurant bestellen.',
      visualizingImageAlt2: 'Illustration unterstützter Kommunikation unter lachenden Freunden',
      visualizingCaption2: 'Gemeinsam lachen mit Freundinnen und Freunden.',
      visualizingImageAlt3: 'Illustration unterstützter Kommunikation einer präsentierenden Schülerin',
      visualizingCaption3: 'Ideen im Unterricht ausdrücken.',
      coreFeaturesHeading: 'Kernfunktionen',
      featureFragmentTitle: 'Fragment-Erweiterung',
      featureFragmentText:
        'Verwandelt unvollständige Sprache oder Text in fließende, kontextbewusste Sätze.',
      featureStyleTitle: 'Stil-Personalisierung',
      featureStyleText:
        'Wähle Töne wie locker, formell oder witzig und Vocalis passt sich deiner Persönlichkeit an.',
      featureMultimodalTitle: 'Multimodale Eingabe',
      featureMultimodalText:
        'Stimme, Kurzschrift, Skizzen oder Piktogramme – alles wird zu ausdrucksstarken Sätzen.',
      featureContextTitle: 'Kontextbewusstsein',
      featureContextText:
        'Versteht Situationen – vom Restaurant bis zum Meeting – und passt die Kommunikation automatisch an.',
      featureRealtimeTitle: 'Ausgabe in Echtzeit',
      featureRealtimeText:
        'Erzeugt sofort polierten Text und synthetische Stimme mit schnellen Alternativen.',
      featureAddonsTitle: 'Ausdrucksstarke Extras',
      featureAddonsText:
        'Schnellwitz-Modus, Emotionsmarker und Notfallmodus geben dir Feintuning für deine Stimme.',
      featurePrivacyTitle: 'Datenschutz zuerst',
      featurePrivacyText:
        'On-Device-Lernen schützt deine Daten und personalisiert gleichzeitig das Erlebnis.',
      differentiatorsHeading: 'Alleinstellungsmerkmale',
      differentiatorsText:
        'Während andere nur Funktionalität liefern, bietet Vocalis Identität und Würde. Fragmente werden zu ausdrucksstarker Sprache – nicht nur Klarheit, sondern Charakter.',
      assistiveHeading: 'Unterstützte Kommunikation für alle',
      assistiveParagraph1:
        'Vocalis ist eine KI-gestützte UK-App für Sprachbehinderungen wie ALS, Zerebralparese, Schlaganfall und Apraxie.',
      assistiveParagraph2:
        'Diese moderne App verwandelt Fragmente in fließende Sprache und bietet Betreuungspersonen sowie Therapeutinnen ein zeitgemäßes Werkzeug.',
      assistiveParagraph3:
        'Die ALS-Community und andere profitieren von einer flexiblen App, die persönlichen Stil respektiert.',
      assistiveImageAlt: 'Menschen nutzen KI-Kommunikation im Alltag',
      marketHeading: 'Marktchance',
      marketParagraph1:
        'Über 40 Millionen Menschen weltweit nutzen UK-Lösungen – ein Markt, der bis 2030 mehr als 5 Milliarden US-Dollar erreichen wird.',
      marketParagraph2:
        'Vocalis schließt diese Lücke mit einem KI-first-Ansatz und erschließt neue Nachfrage in Kliniken, Bildung und Konsum.',
      marketImageAlt: 'Diagramm zum Wachstum des Marktes für unterstützte Kommunikation',
      businessHeading: 'Geschäftsmodell',
      businessParagraph1:
        'Freemium senkt Hürden, während Abonnements erweiterte Stimmen, Analysen und Zusammenarbeit mit Betreuungspersonen bieten.',
      businessParagraph2:
        'Lizenzpartnerschaften mit Kliniken und Geräteherstellern stärken wiederkehrende Umsätze.',
      businessImageAlt: 'Diagramm von Abostufen und Partnerschaften',
      roadmapHeading: 'Fahrplan',
      roadmapParagraph1:
        'Beta mit Text-zu-Sprache im ersten Quartal 2025, gefolgt von Gesteneingabe, mehrsprachigen Stimmen und Offline-Unterstützung.',
      roadmapImageAlt: 'Zeitachse mit Meilensteinen der Kommunikations-App',
      teamHeading: 'Team',
      teamParagraph1:
        'Entwickelt von Logopädinnen und KI-Forschenden – klinisches Know-how trifft skalierbare Technik.',
      teamImageAlt: 'Team aus Klinikerinnen und Forschenden in Zusammenarbeit',
      ctaEyebrow: 'Bereit, jede Stimme zu verstärken?',
      ctaHeading:
        'Melde dich für den Early-Access an und gestalte inklusive Kommunikation mit uns.',
      ctaParagraph:
        'Investorinnen, Kliniker und Betreuungspersonen können die Roadmap prägen und erhalten bevorzugte Updates zu Tests, Integrationen und Partnerschaften.',
      ctaJoinLink: 'Zur Warteliste anmelden',
      ctaPartnerLink: 'Starte ein Partnerschaftsgespräch',
      footerRights: 'Alle Rechte vorbehalten.',
      languageLabel: 'Sprache',
      heroImageAlt: 'Illustration KI-gestützter Kommunikation',
      themeToggleLight: 'In den Dunkelmodus wechseln',
      themeToggleDark: 'In den Lichtmodus wechseln'
    },
    it: {
      badge: 'CAA con IA per un linguaggio espressivo',
      heroDescription:
        'La comunicazione con IA trasforma i frammenti in espressioni fluenti e personali.',
      formEmailLabel: 'Indirizzo e-mail',
      emailPlaceholder: 'Indirizzo e-mail',
      waitlistButton: 'Iscriviti alla lista d’attesa',
      waitlistSuccess: 'Grazie! Ti contatteremo presto.',
      problemHeading: 'Il problema',
      problemText:
        'Milioni di persone con disabilità verbali — dalla paralisi cerebrale alla SLA — usano strumenti che le riducono a tabelle rigide o frasi robotiche. La comunicazione diventa funzionale ma non davvero umana.',
      solutionHeading: 'La soluzione',
      solutionText:
        'Vocalis trasforma discorsi parziali, testi o schizzi in frasi naturali in tempo reale, preservando tono, stile e personalità.',
      whyMattersHeading: 'Perché conta',
      whyMattersText:
        'Le persone meritano più di una voce di base. Vocalis offre identità, sfumature e connessione fin dalla prima conversazione.',
      useCasesHeading: 'Casi d’uso',
      useCaseRestaurantTitle: 'Al ristorante',
      useCaseRestaurantText:
        '<em>Input:</em> "voglio… acqua"<br /><em>Output:</em> "Potrei avere un bicchiere d’acqua, per favore?"',
      useCaseSocialTitle: 'In un contesto sociale',
      useCaseSocialText:
        '<em>Input:</em> "divertente… video cane… haha"<br /><em>Output:</em> "Quel video del cane mi ha fatto ridere. Un caos totale."',
      useCaseMeetingTitle: 'In classe o in riunione',
      useCaseMeetingText:
        '<em>Input:</em> "non… d’accordo… punto"<br /><em>Output:</em> "Non sono d’accordo con quel punto. Ecco un’altra prospettiva…"',
      visualizingHeading: 'Visualizzare le possibilità',
      visualizingImageAlt1: 'Illustrazione di comunicazione assistita in un ristorante',
      visualizingCaption1: 'Ordinare con sicurezza al ristorante.',
      visualizingImageAlt2: 'Illustrazione di comunicazione assistita tra amici che ridono',
      visualizingCaption2: 'Condividere risate con gli amici.',
      visualizingImageAlt3: 'Illustrazione di comunicazione assistita di uno studente che presenta',
      visualizingCaption3: 'Esprimere idee in classe.',
      coreFeaturesHeading: 'Funzionalità principali',
      featureFragmentTitle: 'Espansione dei frammenti',
      featureFragmentText:
        'Converte parole o testi incompleti in frasi fluide e sensibili al contesto.',
      featureStyleTitle: 'Personalizzazione dello stile',
      featureStyleText:
        'Scegli toni come informale, formale o brillante e Vocalis si adatta alla tua personalità.',
      featureMultimodalTitle: 'Input multimodale',
      featureMultimodalText:
        'Voce, abbreviazioni, schizzi o pittogrammi diventano frasi espressive.',
      featureContextTitle: 'Consapevolezza del contesto',
      featureContextText:
        'Comprende situazioni — dal ristorante alla riunione — e modula automaticamente la comunicazione.',
      featureRealtimeTitle: 'Output in tempo reale',
      featureRealtimeText:
        'Genera subito testo curato e voce sintetica con alternative rapide.',
      featureAddonsTitle: 'Componenti espressive',
      featureAddonsText:
        'Modalità Spiritosa, indicatori di emozione e modalità urgente per perfezionare la tua voce.',
      featurePrivacyTitle: 'Privacy al primo posto',
      featurePrivacyText:
        'L’apprendimento sul dispositivo mantiene i dati al sicuro personalizzando al contempo l’esperienza.',
      differentiatorsHeading: 'Fattori distintivi',
      differentiatorsText:
        'Mentre altri offrono solo funzionalità, Vocalis garantisce identità e dignità. Trasforma frammenti in linguaggio espressivo: non solo chiarezza, ma carattere.',
      assistiveHeading: 'Comunicazione assistiva per tutti',
      assistiveParagraph1:
        'Vocalis è un’app CAA con IA per disabilità del linguaggio tra cui SLA, paralisi cerebrale, ictus e aprassia.',
      assistiveParagraph2:
        'Questa app moderna trasforma frammenti in linguaggio fluente, offrendo a caregiver e terapisti uno strumento contemporaneo.',
      assistiveParagraph3:
        'La comunità SLA e altri gruppi beneficiano di un’app flessibile che rispetta lo stile personale.',
      assistiveImageAlt: 'Persone che usano la comunicazione con IA nella vita quotidiana',
      marketHeading: 'Opportunità di mercato',
      marketParagraph1:
        'Oltre 40 milioni di persone fanno affidamento su strumenti CAA, un mercato che supererà i 5 miliardi di dollari entro il 2030.',
      marketParagraph2:
        'Vocalis colma questa lacuna con un approccio incentrato sull’IA, generando nuova domanda in cliniche, istruzione e canali consumer.',
      marketImageAlt: 'Grafico della crescita del mercato della comunicazione assistiva',
      businessHeading: 'Modello di business',
      businessParagraph1:
        'L’accesso freemium abbassa le barriere mentre gli abbonamenti offrono voci avanzate, analisi e collaborazione con i caregiver.',
      businessParagraph2:
        'Accordi di licenza con cliniche e produttori di dispositivi rafforzano i ricavi ricorrenti.',
      businessImageAlt: 'Schema di livelli di abbonamento e partnership',
      roadmapHeading: 'Roadmap',
      roadmapParagraph1:
        'Beta con sintesi vocale nel primo trimestre 2025, seguita da input gestuale, voci multilingue e supporto offline.',
      roadmapImageAlt: 'Cronologia dei traguardi dell’app di comunicazione AI',
      teamHeading: 'Team',
      teamParagraph1:
        'Creato da logopedisti e ricercatori di IA, unendo competenza clinica e ingegneria scalabile.',
      teamImageAlt: 'Team di clinici e ricercatori che collaborano',
      ctaEyebrow: 'Pronto ad amplificare ogni voce?',
      ctaHeading:
        'Iscriviti all’accesso anticipato e collabora con noi per una comunicazione inclusiva.',
      ctaParagraph:
        'Investitori, clinici e caregiver possono plasmare il lancio ricevendo aggiornamenti prioritari su test, integrazioni e partnership di accessibilità.',
      ctaJoinLink: 'Iscriviti alla lista d’attesa',
      ctaPartnerLink: 'Avvia una conversazione di partnership',
      footerRights: 'Tutti i diritti riservati.',
      languageLabel: 'Lingua',
      heroImageAlt: 'Illustrazione di comunicazione con IA',
      themeToggleLight: 'Attiva modalità scura',
      themeToggleDark: 'Attiva modalità chiara'
    }
  };

  function normalizeLanguageCode(code) {
    return typeof code === 'string' ? code.trim().toLowerCase() : '';
  }

  function detectBrowserLanguage(
    supported = supportedLanguages,
    fallback = defaultLanguage
  ) {
    if (typeof navigator === 'undefined') {
      return fallback;
    }

    const supportedLower = supported.map(code => code.toLowerCase());
    const preferences = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];

    for (const preference of preferences) {
      const normalized = normalizeLanguageCode(preference);
      if (!normalized) continue;

      const exactIndex = supportedLower.indexOf(normalized);
      if (exactIndex !== -1) {
        return supported[exactIndex];
      }

      const base = normalized.split('-')[0];
      const partialIndex = supportedLower.findIndex(code => code.split('-')[0] === base);
      if (partialIndex !== -1) {
        return supported[partialIndex];
      }
    }

    return fallback;
  }
  globalThis.vocalisTranslations = {
    defaultLanguage,
    supportedLanguages,
    translations,
    detectBrowserLanguage
  };
})();
