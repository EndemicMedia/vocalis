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
      investmentHeading: 'Why Vocalis is Investor-Ready',
      investmentIntro:
        'Our go-to-market, technology, and clinical plans form a disciplined path to scale with measurable milestones and diversified revenue.',
      investmentProof1Title: 'Validated unmet demand',
      investmentProof1Text:
        '500+ caregivers, SLPs, and ALS clinics joined our waitlist within six weeks seeking an expressive alternative to static speech boards.',
      investmentProof2Title: 'Differentiated AI stack',
      investmentProof2Text:
        'Our fragment-to-fluency engine blends on-device inference with secure cloud fine-tuning for tone, context, and emotion control.',
      investmentProof3Title: 'Engaged care ecosystem',
      investmentProof3Text:
        'Shared vocabularies, live collaboration, and caregiver dashboards create switching costs and expand seats per household.',
      investmentProof4Title: 'Scalable channel strategy',
      investmentProof4Text:
        'Strategic alliances with DME distributors and digital health platforms accelerate reimbursement-ready deployments.',
      clinicalHeading: 'Clinical and Regulatory Rigor',
      clinicalIntro:
        'We partner with leading ALS centers to ensure Vocalis aligns with evidence-based therapy and meets payer expectations from day one.',
      clinicalListItem1: 'IRB-approved pilot studies evaluating conversational efficacy and caregiver load.',
      clinicalListItem2: 'HIPAA-compliant architecture with SOC 2 roadmap and regionally isolated data stores.',
      clinicalListItem3: 'Reimbursement documentation pack aligning to CPT 92609 and emerging remote therapy codes.',
      technologyHeading: 'Technology Blueprint',
      technologyIntro:
        'Modular services let us personalize quickly while maintaining enterprise-grade uptime and privacy safeguards.',
      technologyListItem1: 'Edge speech sampling with adaptive noise handling ensures reliable input on consumer hardware.',
      technologyListItem2: 'Context engine scores intent, environment, and partner to recommend phrasing templates.',
      technologyListItem3: 'Secure voice synthesis API with audit trails and caregiver approval workflows.',
      tractionHeading: 'Traction and Upcoming Milestones',
      tractionIntro:
        'Early pilots already demonstrate commercial readiness while laying the groundwork for payer-backed expansion.',
      tractionMetric1Label: 'Signed pilot sites',
      tractionMetric1Value: '8 rehabilitation networks',
      tractionMetric2Label: 'Net promoter intent',
      tractionMetric2Value: '92% of caregivers',
      tractionMetric3Label: 'Time-to-voice reduction',
      tractionMetric3Value: '68% faster onboarding',
      gtmHeading: 'Go-To-Market Execution',
      gtmIntro:
        'We balance clinical credibility with consumer-grade usability to unlock rapid adoption across multiple buyer personas.',
      gtmListItem1:
        'Co-marketing with ALS associations delivers trusted endorsements and funnels members into guided onboarding cohorts.',
      gtmListItem2:
        'Clinic integrations sync progress notes with EMR systems, enabling bundled reimbursement and clinician insights.',
      gtmListItem3:
        'Direct-to-family channel pairs hardware kits with virtual training, backed by financing partners for affordability.',
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
      investmentHeading: 'Por que a Vocalis está pronta para investimento',
      investmentIntro:
        'Nossos planos de go-to-market, tecnologia e clínica formam um caminho disciplinado para escalar com marcos mensuráveis e receita diversificada.',
      investmentProof1Title: 'Demanda não atendida validada',
      investmentProof1Text:
        'Mais de 500 cuidadores, fonoaudiólogos e clínicas de ELA entraram na lista de espera em seis semanas buscando uma alternativa expressiva aos quadros estáticos.',
      investmentProof2Title: 'Stack de IA diferenciado',
      investmentProof2Text:
        'Nosso motor de fragmentos para fluência combina inferência no dispositivo com ajuste fino seguro na nuvem para controlar tom, contexto e emoção.',
      investmentProof3Title: 'Ecossistema de cuidado engajado',
      investmentProof3Text:
        'Vocabulários compartilhados, colaboração em tempo real e painéis para cuidadores criam custos de mudança e ampliam assentos por família.',
      investmentProof4Title: 'Estratégia de canais escalável',
      investmentProof4Text:
        'Alianças estratégicas com distribuidores de equipamentos médicos e plataformas de saúde digital aceleram implantações prontas para reembolso.',
      clinicalHeading: 'Rigor clínico e regulatório',
      clinicalIntro:
        'Parcerias com centros líderes de ELA garantem que a Vocalis siga terapias baseadas em evidências e atenda às expectativas dos pagadores desde o início.',
      clinicalListItem1: 'Estudos-piloto aprovados por comitê de ética avaliam eficácia conversacional e carga do cuidador.',
      clinicalListItem2: 'Arquitetura compatível com HIPAA, plano para SOC 2 e armazenamento de dados isolado por região.',
      clinicalListItem3: 'Pacote de documentação de reembolso alinhado ao CPT 92609 e a códigos emergentes de terapia remota.',
      technologyHeading: 'Blueprint tecnológico',
      technologyIntro:
        'Serviços modulares permitem personalização rápida mantendo disponibilidade corporativa e proteção de privacidade.',
      technologyListItem1: 'Amostragem de fala na borda com tratamento adaptativo de ruído garante entradas confiáveis em hardware de consumo.',
      technologyListItem2: 'Motor de contexto analisa intenção, ambiente e interlocutor para sugerir modelos de frases.',
      technologyListItem3: 'API de síntese de voz segura com trilhas de auditoria e fluxos de aprovação para cuidadores.',
      tractionHeading: 'Tração e próximos marcos',
      tractionIntro:
        'Pilotos iniciais já demonstram prontidão comercial enquanto preparam a expansão apoiada por pagadores.',
      tractionMetric1Label: 'Locais-piloto assinados',
      tractionMetric1Value: '8 redes de reabilitação',
      tractionMetric2Label: 'Intenção de recomendação (NPS)',
      tractionMetric2Value: '92% dos cuidadores',
      tractionMetric3Label: 'Redução no tempo até a fala',
      tractionMetric3Value: '68% mais rápido para começar',
      gtmHeading: 'Execução de go-to-market',
      gtmIntro:
        'Equilibramos credibilidade clínica com usabilidade de consumo para destravar adoção rápida em múltiplos perfis de compradores.',
      gtmListItem1:
        'Co-marketing com associações de ELA gera endossos confiáveis e direciona membros para jornadas guiadas de onboarding.',
      gtmListItem2:
        'Integrações com clínicas sincronizam relatórios de progresso com prontuários eletrônicos, viabilizando reembolso e insights do clínico.',
      gtmListItem3:
        'Canal direto para famílias oferece kits de hardware com treinamento virtual e financiamento parceiro para acessibilidade.',
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
      investmentHeading: 'Por qué Vocalis está lista para inversión',
      investmentIntro:
        'Nuestros planes comercial, tecnológicos y clínicos trazan una ruta disciplinada para escalar con hitos medibles e ingresos diversificados.',
      investmentProof1Title: 'Demanda insatisfecha validada',
      investmentProof1Text:
        'Más de 500 cuidadores, terapeutas del habla y clínicas de ELA se sumaron a la lista de espera en seis semanas buscando una alternativa expresiva a los tableros estáticos.',
      investmentProof2Title: 'Stack de IA diferenciado',
      investmentProof2Text:
        'Nuestro motor de fragmentos a fluidez combina inferencia en el dispositivo con ajuste seguro en la nube para controlar tono, contexto y emoción.',
      investmentProof3Title: 'Ecosistema de cuidado comprometido',
      investmentProof3Text:
        'Vocabularios compartidos, colaboración en vivo y paneles para cuidadores generan costos de cambio y amplían asientos por hogar.',
      investmentProof4Title: 'Estrategia de canales escalable',
      investmentProof4Text:
        'Alianzas estratégicas con distribuidores de equipos médicos y plataformas de salud digital aceleran implementaciones listas para reembolso.',
      clinicalHeading: 'Rigor clínico y regulatorio',
      clinicalIntro:
        'Colaboramos con los principales centros de ELA para asegurar que Vocalis siga terapias basadas en evidencia y cumpla las expectativas de los pagadores desde el primer día.',
      clinicalListItem1: 'Estudios piloto aprobados por comités de ética evalúan la eficacia conversacional y la carga del cuidador.',
      clinicalListItem2: 'Arquitectura compatible con HIPAA, plan hacia SOC 2 y almacenes de datos aislados por región.',
      clinicalListItem3: 'Paquete de documentación de reembolso alineado al CPT 92609 y a nuevos códigos de terapia remota.',
      technologyHeading: 'Plano tecnológico',
      technologyIntro:
        'Servicios modulares nos permiten personalizar con rapidez manteniendo disponibilidad empresarial y salvaguardas de privacidad.',
      technologyListItem1: 'Muestreo de voz en el borde con manejo adaptativo de ruido asegura entradas confiables en hardware de consumo.',
      technologyListItem2: 'Motor de contexto puntúa intención, entorno e interlocutor para recomendar plantillas de frases.',
      technologyListItem3: 'API de síntesis de voz segura con trazas de auditoría y flujos de aprobación para cuidadores.',
      tractionHeading: 'Tracción y próximos hitos',
      tractionIntro:
        'Los pilotos iniciales ya demuestran preparación comercial mientras sientan las bases para expansión respaldada por pagadores.',
      tractionMetric1Label: 'Sitios piloto firmados',
      tractionMetric1Value: '8 redes de rehabilitación',
      tractionMetric2Label: 'Intención neta de recomendación',
      tractionMetric2Value: '92% de los cuidadores',
      tractionMetric3Label: 'Reducción del tiempo hasta la voz',
      tractionMetric3Value: '68% de incorporación más rápida',
      gtmHeading: 'Ejecución go-to-market',
      gtmIntro:
        'Equilibramos credibilidad clínica con usabilidad de consumo para habilitar adopción rápida en múltiples perfiles compradores.',
      gtmListItem1:
        'El co-marketing con asociaciones de ELA aporta avales confiables y canaliza miembros hacia cohortes guiadas de onboarding.',
      gtmListItem2:
        'Las integraciones con clínicas sincronizan notas de progreso con los EMR, habilitando reembolso empaquetado e insights clínicos.',
      gtmListItem3:
        'El canal directo a familias combina kits de hardware con capacitación virtual y financiación asociada para asequibilidad.',
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
      investmentHeading: 'Warum Vocalis investitionsreif ist',
      investmentIntro:
        'Unsere Go-to-Market-, Technologie- und Klinikpläne bilden einen disziplinierten Pfad zur Skalierung mit messbaren Meilensteinen und diversifizierten Erlösen.',
      investmentProof1Title: 'Validierte ungedeckte Nachfrage',
      investmentProof1Text:
        'Über 500 Pflegekräfte, Logopäd:innen und ALS-Kliniken traten innerhalb von sechs Wochen unserer Warteliste bei, um eine ausdrucksstarke Alternative zu statischen Tafeln zu finden.',
      investmentProof2Title: 'Differenzierter KI-Stack',
      investmentProof2Text:
        'Unsere Fragment-zu-Flüssigkeit-Engine kombiniert On-Device-Inferenz mit sicherem Cloud-Finetuning für Ton, Kontext und Emotion.',
      investmentProof3Title: 'Engagiertes Versorgungsökosystem',
      investmentProof3Text:
        'Geteilte Wortschätze, Live-Zusammenarbeit und Betreuungs-Dashboards schaffen Wechselkosten und erhöhen die Plätze pro Haushalt.',
      investmentProof4Title: 'Skalierbare Kanalstrategie',
      investmentProof4Text:
        'Strategische Allianzen mit Hilfsmittelhändlern und Digital-Health-Plattformen beschleunigen erstattungsfähige Roll-outs.',
      clinicalHeading: 'Klinische und regulatorische Strenge',
      clinicalIntro:
        'Wir kooperieren mit führenden ALS-Zentren, damit Vocalis evidenzbasierte Therapien stützt und Kostenträgeranforderungen von Beginn an erfüllt.',
      clinicalListItem1: 'Ethikkommissionsgenehmigte Pilotstudien prüfen Gesprächswirkung und Betreuerbelastung.',
      clinicalListItem2: 'HIPAA-konforme Architektur mit SOC-2-Fahrplan und regional isolierten Datenspeichern.',
      clinicalListItem3: 'Erstattungspaket abgestimmt auf CPT 92609 und neue Codes für Teletherapie.',
      technologyHeading: 'Technologieplan',
      technologyIntro:
        'Modulare Services erlauben schnelle Personalisierung bei unternehmensweiter Verfügbarkeit und Datenschutz.',
      technologyListItem1: 'Edge-Spracherfassung mit adaptiver Geräuschunterdrückung sichert verlässliche Eingaben auf Consumer-Hardware.',
      technologyListItem2: 'Kontext-Engine bewertet Intention, Umgebung und Gegenüber, um Formulierungsvorlagen zu empfehlen.',
      technologyListItem3: 'Sichere Sprachsynthese-API mit Audit-Trails und Genehmigungs-Workflows für Betreuende.',
      tractionHeading: 'Traktion und nächste Meilensteine',
      tractionIntro:
        'Frühe Piloten zeigen bereits Marktreife und ebnen den Weg für kostenträgerfinanzierte Expansion.',
      tractionMetric1Label: 'Unterzeichnete Pilotstandorte',
      tractionMetric1Value: '8 Rehabilitationsnetzwerke',
      tractionMetric2Label: 'Weiterempfehlungsabsicht',
      tractionMetric2Value: '92% der Betreuungspersonen',
      tractionMetric3Label: 'Verkürzte Zeit bis zur Stimme',
      tractionMetric3Value: '68% schnelleres Onboarding',
      gtmHeading: 'Go-to-Market-Umsetzung',
      gtmIntro:
        'Wir verbinden klinische Glaubwürdigkeit mit Consumer-Bedienbarkeit und ermöglichen so schnelle Adoption bei mehreren Käufergruppen.',
      gtmListItem1:
        'Co-Marketing mit ALS-Verbänden liefert vertrauenswürdige Empfehlungen und führt Mitglieder in geführte Onboarding-Kohorten.',
      gtmListItem2:
        'Klinikanbindungen synchronisieren Fortschrittsnotizen mit KIS-Systemen und ermöglichen gebündelte Erstattung sowie Einblicke für Fachkräfte.',
      gtmListItem3:
        'Direktvertrieb an Familien kombiniert Hardware-Kits mit virtuellem Training und Finanzierungspartnern für bessere Leistbarkeit.',
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
      investmentHeading: 'Perché Vocalis è pronta per gli investitori',
      investmentIntro:
        'I nostri piani commerciali, tecnologici e clinici definiscono un percorso disciplinato di crescita con traguardi misurabili e ricavi diversificati.',
      investmentProof1Title: 'Domanda insoddisfatta validata',
      investmentProof1Text:
        'Oltre 500 caregiver, logopedisti e cliniche SLA si sono iscritti alla lista d’attesa in sei settimane alla ricerca di un’alternativa espressiva alle tavole statiche.',
      investmentProof2Title: 'Stack di IA differenziante',
      investmentProof2Text:
        'Il nostro motore da frammento a fluidità combina inferenza on-device con fine tuning cloud sicuro per controllare tono, contesto ed emozione.',
      investmentProof3Title: 'Ecosistema di cura coinvolto',
      investmentProof3Text:
        'Vocabolari condivisi, collaborazione live e dashboard per caregiver generano costi di cambio e aumentano le licenze per nucleo familiare.',
      investmentProof4Title: 'Strategia di canale scalabile',
      investmentProof4Text:
        'Alleanze strategiche con distributori di ausili e piattaforme di digital health accelerano implementazioni pronte al rimborso.',
      clinicalHeading: 'Rigore clinico e normativo',
      clinicalIntro:
        'Collaboriamo con i principali centri SLA per garantire che Vocalis segua terapie basate su evidenze e soddisfi le richieste dei payer fin dal primo giorno.',
      clinicalListItem1: 'Studi pilota approvati dai comitati etici valutano efficacia conversazionale e carico del caregiver.',
      clinicalListItem2: 'Architettura conforme HIPAA con piano per la certificazione SOC 2 e archivi dati isolati per regione.',
      clinicalListItem3: 'Pacchetto documentale per il rimborso allineato al CPT 92609 e ai nuovi codici di terapia remota.',
      technologyHeading: 'Blueprint tecnologico',
      technologyIntro:
        'Servizi modulari permettono di personalizzare rapidamente mantenendo uptime enterprise e salvaguardie della privacy.',
      technologyListItem1: 'Campionamento vocale edge con gestione adattiva del rumore garantisce input affidabili su hardware consumer.',
      technologyListItem2: 'Motore contestuale valuta intenzione, ambiente e interlocutore per suggerire modelli di frasi.',
      technologyListItem3: 'API di sintesi vocale sicura con audit trail e workflow di approvazione per caregiver.',
      tractionHeading: 'Traction e prossime tappe',
      tractionIntro:
        'I primi piloti mostrano già preparazione commerciale e costruiscono le basi per l’espansione sostenuta dai payer.',
      tractionMetric1Label: 'Siti pilota firmati',
      tractionMetric1Value: '8 reti di riabilitazione',
      tractionMetric2Label: 'Intento di raccomandazione',
      tractionMetric2Value: '92% dei caregiver',
      tractionMetric3Label: 'Riduzione del time-to-voice',
      tractionMetric3Value: 'Onboarding più rapido del 68%',
      gtmHeading: 'Esecuzione go-to-market',
      gtmIntro:
        'Bilanciamo credibilità clinica ed esperienza consumer per ottenere adozione rapida tra molteplici buyer persona.',
      gtmListItem1:
        'Co-marketing con le associazioni SLA offre endorsement affidabili e convoglia i membri in percorsi guidati di onboarding.',
      gtmListItem2:
        'Integrazioni con le cliniche sincronizzano i progressi con gli EMR, abilitando rimborsi bundle e insight per i clinici.',
      gtmListItem3:
        'Canale diretto alle famiglie che abbina kit hardware a formazione virtuale, con partner finanziari per migliorarne l’accessibilità.',
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
