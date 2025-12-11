(() => {
  const defaultLanguage = 'en';
  const supportedLanguages = ['en', 'pt-BR', 'es', 'de', 'it'];

  const translations = {
    en: {
      badge: 'AI AAC that sounds like you',
      heroDescription:
        'Vocalis turns shorthand speech, whispers, and gestures into full sentences so every conversation feels natural again.',
      formEmailLabel: 'Email address',
      emailPlaceholder: 'Email address',
      waitlistButton: 'Join the Waitlist',
      waitlistSuccess: "Thanks! We'll be in touch.",
      problemHeading: 'The communication gap',
      problemText:
        'Families still rely on letter boards, grid apps, or scripted voices that erase personality. Conversations slow down, emotions get lost, and users disengage.',
      solutionHeading: 'What Vocalis delivers',
      solutionText:
        'Vocalis listens to fragments, text, and pictograms, infers intent, and produces fluid speech that carries the user’s tone, pace, and preferred vocabulary.',
      whyMattersHeading: 'Why it matters',
      whyMattersText:
        'Expressive conversation builds autonomy. Vocalis restores everyday banter, serious discussions, and subtle cues that static tools can’t capture.',
      useCasesHeading: 'Moments Vocalis handles',
      useCaseRestaurantTitle: 'Ordering with ease',
      useCaseRestaurantText:
        '<em>Input:</em> “want… water”<br /><em>Output:</em> “Could I please have a glass of water?”',
      useCaseSocialTitle: 'Catching up with friends',
      useCaseSocialText:
        '<em>Input:</em> “saw… dog video… wild”<br /><em>Output:</em> “Did you see that dog video? Totally wild!”',
      useCaseMeetingTitle: 'Speaking up in sessions',
      useCaseMeetingText:
        '<em>Input:</em> “need… clarify plan”<br /><em>Output:</em> “I’d like to clarify the plan—here’s what I’m proposing.”',
      visualizingHeading: 'See Vocalis in daily life',
      visualizingImageAlt1: 'Illustration of a diner using Vocalis to order a meal',
      visualizingCaption1: 'Personalized phrasing for dining and errands.',
      visualizingImageAlt2: 'Illustration of friends chatting with an AAC tablet',
      visualizingCaption2: 'Keeping social energy high with expressive replies.',
      visualizingImageAlt3: 'Illustration of a student presenting with assistive tech',
      visualizingCaption3: 'Confident contributions in class and therapy.',
      coreFeaturesHeading: 'Core capabilities',
      featureFragmentTitle: 'Intent expansion',
      featureFragmentText:
        'Turns abbreviated speech or text into full statements that match context.',
      featureStyleTitle: 'Voice personalization',
      featureStyleText:
        'Learns preferred tone, pacing, and vocabulary to sound like the user.',
      featureMultimodalTitle: 'Flexible input',
      featureMultimodalText:
        'Accepts speech fragments, quick text, symbols, and eye-tracking selections.',
      featureContextTitle: 'Context detection',
      featureContextText:
        'Understands location, partner, and goal to suggest the right phrasing.',
      featureRealtimeTitle: 'Instant delivery',
      featureRealtimeText:
        'Produces polished text and speech output in under a second.',
      featureAddonsTitle: 'Expressive controls',
      featureAddonsText:
        'Quick toggles for humor, urgency, or emphasis keep conversations dynamic.',
      featureToneTitle: 'Tone awareness',
      featureToneText:
        'Color signals mirror conversation mood so neurodiverse users can adjust tone in real time.',
      featurePrivacyTitle: 'Protected learning',
      featurePrivacyText:
        'On-device modeling and encrypted sync safeguard personal voice data.',
      differentiatorsHeading: 'Why families choose Vocalis',
      differentiatorsText:
        'We blend AAC therapy best practices with adaptive AI, so every interaction feels human, trustworthy, and effortless.',
      assistiveHeading: 'Built with people who rely on AAC',
      assistiveParagraph1:
        'We co-designed Vocalis with ALS, cerebral palsy, stroke, and apraxia communities to remove daily friction.',
      assistiveParagraph2:
        'Caregivers, therapists, and users share shared vocabularies, session notes, and favorite phrases to stay aligned.',
      assistiveParagraph3:
        'Accessible pricing, hardware guidance, and live onboarding mean progress starts on day one.',
      intonationHeading: 'Conversation mood indicator',
      intonationIntro:
        'Live color cues translate tension, empathy, or playfulness so autistic and neurodivergent users can read the room and adjust tone before misunderstandings happen.',
      intonationBenefit1Title: 'Real-time safety net',
      intonationBenefit1Text:
        'Calming blues and greens confirm balanced tone; amber and red flag when phrasing feels sharp.',
      intonationBenefit2Title: 'Confidence in nuance',
      intonationBenefit2Text:
        'Color shifts pair with hints like “sounds direct” or “warm and light” to coach social cues.',
      intonationBenefit3Title: 'Ready for any surface',
      intonationBenefit3Text:
        'Mobile overlays now; future AR view keeps cues discreet for in-person conversations.',
      intonationImageAlt1: 'Phone interface showing conversation with calm blue mood ring',
      intonationCaption1: 'Gentle blue and green hues reassure the speaker when tone lands as supportive.',
      intonationImageAlt2: 'AR glasses overlay projecting purple alert for tense dialogue',
      intonationCaption2: 'A subtle AR glow pivots to amber and violet when dialogue risks feeling too sharp.',
      assistiveImageAlt: 'Community members using Vocalis across home, school, and clinics',
      marketHeading: 'How Vocalis works',
      marketParagraph1:
        'Signal capture cleans up speech, text, or symbol input while our intent engine predicts what the user wants to express.',
      marketParagraph2:
        'The response composer applies personal style, then streams text and natural voice to any speaker, tablet, or partner app.',
      marketImageAlt: 'Diagram showing the Vocalis pipeline from input to expressive output',
      businessHeading: 'Support wrapped around the user',
      businessParagraph1:
        'Care teams co-manage profiles, track goals, and schedule practice prompts from a shared dashboard.',
      businessParagraph2:
        'Integrations with EMRs, teletherapy tools, and classroom devices keep everyone aligned on progress.',
      businessImageAlt: 'Illustration of caregivers, clinicians, and educators connected through Vocalis',
      investmentHeading: 'Built for life-critical communication',
      investmentIntro:
        'Reliability, personalization, and safety are engineered into every layer so families can depend on Vocalis anytime.',
      investmentProof1Title: 'Always available',
      investmentProof1Text:
        'Offline-ready phrase banks and automatic failover keep voices flowing during travel or outages.',
      investmentProof2Title: 'Clinically informed AI',
      investmentProof2Text:
        'Speech-language pathologists audit training data and guardrails to maintain therapeutic integrity.',
      investmentProof3Title: 'Secure by design',
      investmentProof3Text:
        'End-to-end encryption, consent-driven sharing, and audit trails respect privacy and compliance.',
      investmentProof4Title: 'Measurable outcomes',
      investmentProof4Text:
        'Care analytics highlight time-to-voice gains, participation rates, and personalized goals.',
      clinicalHeading: 'Clinical partnership in practice',
      clinicalIntro:
        'Our advisory board of ALS clinics and neurorehabilitation experts keeps Vocalis evidence-based.',
      clinicalListItem1:
        'Session templates align with AAC therapy frameworks like SETT and Participation Model.',
      clinicalListItem2:
        'HIPAA-ready infrastructure with regional data residency and quarterly security reviews.',
      clinicalListItem3:
        'Documentation exports support insurance authorizations and progress reporting.',
      technologyHeading: 'Technology built for trust',
      technologyIntro:
        'A modular architecture balances fast iteration with enterprise-grade safeguards.',
      technologyListItem1: 'Edge processing smooths noisy input and protects raw recordings.',
      technologyListItem2:
        'Context graph blends schedule, environment, and custom vocabulary to predict intent.',
      technologyListItem3:
        'Voice synthesis pipeline checks clarity, pacing, and emotional intent before playback.',
      tractionHeading: 'What people are experiencing',
      tractionIntro:
        'Pilot families and clinicians are already seeing faster conversations and higher engagement.',
      tractionMetric1Label: 'Conversation speed',
      tractionMetric1Value: '3× faster replies',
      tractionMetric2Label: 'Caregiver confidence',
      tractionMetric2Value: '94% report less stress',
      tractionMetric3Label: 'Therapy carryover',
      tractionMetric3Value: 'Weekly goals met 2×',
      gtmHeading: 'Support at every step',
      gtmIntro:
        'From onboarding to daily use, we combine human expertise with guided workflows.',
      gtmListItem1:
        'Personalized setup sessions capture voice preferences and priority phrases.',
      gtmListItem2:
        'In-app coaching nudges users through practice scenarios families request.',
      gtmListItem3:
        'Community hub shares playbooks, troubleshooting, and live events for ongoing learning.',
      roadmapHeading: 'What’s next',
      roadmapParagraph1:
        'Upcoming releases add gesture capture, multilingual voices, caregiver broadcast mode, and offline co-pilot prompts.',
      roadmapImageAlt: 'Roadmap illustration showing upcoming Vocalis product releases',
      teamHeading: 'Team',
      teamParagraph1:
        'Speech-language pathologists, accessibility advocates, and AI researchers collaborate daily to keep the product human.',
      teamImageAlt: 'Team of clinicians and researchers collaborating',
      ctaEyebrow: 'Ready to amplify every voice?',
      ctaHeading:
        'Join the early access waitlist and help shape inclusive communication.',
      ctaParagraph:
        'Families, clinicians, and partners can co-design features, request pilots, and receive launch updates.',
      ctaJoinLink: 'Join the Waitlist',
      ctaPartnerLink: 'Talk with our team',
      footerRights: 'All rights reserved.',
      languageLabel: 'Language',
      heroImageAlt: 'Illustration of people using Vocalis across devices',
      themeToggleLight: 'Switch to Dark Mode',
      themeToggleDark: 'Switch to Light Mode'
    },
    'pt-BR': {
      badge: 'CAA com IA que soa como você',
      heroDescription:
        'O Vocalis transforma fala abreviada, sussurros e gestos em frases completas para que cada conversa volte a parecer natural.',
      formEmailLabel: 'Endereço de e-mail',
      emailPlaceholder: 'Endereço de e-mail',
      waitlistButton: 'Entrar na lista de espera',
      waitlistSuccess: 'Obrigado! Entraremos em contato em breve.',
      problemHeading: 'A lacuna de comunicação',
      problemText:
        'As famílias ainda dependem de pranchas, apps em grade ou vozes roteirizadas que apagam a personalidade. As conversas desaceleram, as emoções se perdem e os usuários se desengajam.',
      solutionHeading: 'O que o Vocalis entrega',
      solutionText:
        'O Vocalis escuta fragmentos, texto e pictogramas, infere a intenção e produz fala fluida que carrega o tom, o ritmo e o vocabulário preferido do usuário.',
      whyMattersHeading: 'Por que importa',
      whyMattersText:
        'Conversas expressivas constroem autonomia. O Vocalis traz de volta as brincadeiras, as conversas sérias e os sinais sutis que ferramentas estáticas não capturam.',
      useCasesHeading: 'Momentos que o Vocalis resolve',
      useCaseRestaurantTitle: 'Pedido com tranquilidade',
      useCaseRestaurantText:
        '<em>Entrada:</em> “querer… água”<br /><em>Saída:</em> “Poderia trazer um copo de água, por favor?”',
      useCaseSocialTitle: 'Reencontro com amigos',
      useCaseSocialText:
        '<em>Entrada:</em> “vi… vídeo cachorro… louco”<br /><em>Saída:</em> “Você viu aquele vídeo do cachorro? Uma loucura!”',
      useCaseMeetingTitle: 'Participação em sessões',
      useCaseMeetingText:
        '<em>Entrada:</em> “preciso… explicar plano”<br /><em>Saída:</em> “Quero esclarecer o plano — aqui está o que proponho.”',
      visualizingHeading: 'Veja o Vocalis no dia a dia',
      visualizingImageAlt1: 'Ilustração de uma pessoa usando o Vocalis para pedir uma refeição',
      visualizingCaption1: 'Frases personalizadas para refeições e tarefas.',
      visualizingImageAlt2: 'Ilustração de amigos conversando com um tablet CAA',
      visualizingCaption2: 'Mantém a energia social com respostas expressivas.',
      visualizingImageAlt3: 'Ilustração de estudante apresentando com tecnologia assistiva',
      visualizingCaption3: 'Contribuições confiantes em aulas e terapias.',
      coreFeaturesHeading: 'Capacidades essenciais',
      featureFragmentTitle: 'Expansão de intenção',
      featureFragmentText:
        'Transforma fala ou texto abreviados em declarações completas alinhadas ao contexto.',
      featureStyleTitle: 'Personalização de voz',
      featureStyleText:
        'Aprende tom, ritmo e vocabulário preferidos para soar como o usuário.',
      featureMultimodalTitle: 'Entrada flexível',
      featureMultimodalText:
        'Aceita fragmentos de fala, texto rápido, símbolos e seleções por rastreamento ocular.',
      featureContextTitle: 'Detecção de contexto',
      featureContextText:
        'Entende local, interlocutor e objetivo para sugerir a frase ideal.',
      featureRealtimeTitle: 'Entrega instantânea',
      featureRealtimeText:
        'Gera texto e voz polidos em menos de um segundo.',
      featureAddonsTitle: 'Controles expressivos',
      featureAddonsText:
        'Alternâncias rápidas para humor, urgência ou ênfase mantêm a conversa dinâmica.',
      featureToneTitle: 'Consciência de tom',
      featureToneText:
        'Sinais em cores refletem o clima da conversa para que pessoas neurodivergentes ajustem o tom em tempo real.',
      featurePrivacyTitle: 'Aprendizado protegido',
      featurePrivacyText:
        'Modelagem no dispositivo e sincronização criptografada protegem dados de voz pessoais.',
      differentiatorsHeading: 'Por que famílias escolhem o Vocalis',
      differentiatorsText:
        'Unimos boas práticas de terapia CAA com IA adaptativa para que cada interação pareça humana, confiável e sem esforço.',
      assistiveHeading: 'Construído com quem depende de CAA',
      assistiveParagraph1:
        'Cocriamos o Vocalis com comunidades de ELA, paralisia cerebral, AVC e apraxia para remover fricções diárias.',
      assistiveParagraph2:
        'Cuidadores, terapeutas e usuários compartilham vocabulários, notas de sessão e frases favoritas para manter o alinhamento.',
      assistiveParagraph3:
        'Preços acessíveis, orientação de hardware e onboarding ao vivo garantem progresso desde o primeiro dia.',
      intonationHeading: 'Indicador de humor da conversa',
      intonationIntro:
        'Códigos de cor ao vivo traduzem tensão, empatia ou leveza para que pessoas autistas e neurodivergentes entendam o ambiente e ajustem o tom antes de mal-entendidos.',
      intonationBenefit1Title: 'Rede de segurança em tempo real',
      intonationBenefit1Text:
        'Azuis e verdes suaves confirmam equilíbrio; âmbar e vermelho sinalizam quando a frase soa incisiva.',
      intonationBenefit2Title: 'Confiança na nuance',
      intonationBenefit2Text:
        'Mudanças de cor vêm com dicas como “soa direto” ou “leve e caloroso” para orientar pistas sociais.',
      intonationBenefit3Title: 'Pronto para qualquer superfície',
      intonationBenefit3Text:
        'Sobreposição móvel hoje; visão em AR no futuro mantém os sinais discretos em conversas presenciais.',
      intonationImageAlt1: 'Interface de celular mostrando conversa com anel azul de humor calmo',
      intonationCaption1: 'Tons de azul e verde tranquilizam o usuário quando o tom soa acolhedor.',
      intonationImageAlt2: 'Sobreposição de óculos AR projetando alerta roxo para diálogo tenso',
      intonationCaption2: 'Um brilho em AR muda para âmbar e violeta quando o diálogo fica mais rígido.',
      assistiveImageAlt: 'Comunidade usando o Vocalis em casa, na escola e em clínicas',
      marketHeading: 'Como o Vocalis funciona',
      marketParagraph1:
        'A captura de sinais limpa fala, texto ou símbolos enquanto nosso motor de intenção prevê o que o usuário deseja dizer.',
      marketParagraph2:
        'O compositor de respostas aplica o estilo pessoal e envia texto e voz natural para alto-falantes, tablets ou apps parceiros.',
      marketImageAlt: 'Diagrama mostrando o pipeline do Vocalis do input à fala expressiva',
      businessHeading: 'Suporte ao redor do usuário',
      businessParagraph1:
        'Equipes de cuidado gerenciam perfis, acompanham metas e agendam práticas em um painel compartilhado.',
      businessParagraph2:
        'Integrações com prontuários, teleterapia e dispositivos educacionais mantêm todos alinhados ao progresso.',
      businessImageAlt: 'Ilustração de cuidadores, clínicos e educadores conectados pelo Vocalis',
      investmentHeading: 'Feito para comunicação vital',
      investmentIntro:
        'Confiabilidade, personalização e segurança estão em cada camada para que as famílias dependam do Vocalis a qualquer momento.',
      investmentProof1Title: 'Sempre disponível',
      investmentProof1Text:
        'Bancos de frases offline e failover automático mantêm a voz ativa em viagens ou quedas.',
      investmentProof2Title: 'IA com respaldo clínico',
      investmentProof2Text:
        'Fonoaudiólogos auditam dados de treinamento e salvaguardas para preservar a integridade terapêutica.',
      investmentProof3Title: 'Seguro por design',
      investmentProof3Text:
        'Criptografia de ponta a ponta, compartilhamento com consentimento e trilhas de auditoria garantem privacidade e conformidade.',
      investmentProof4Title: 'Resultados mensuráveis',
      investmentProof4Text:
        'Analytics de cuidado mostram ganhos em tempo de resposta, participação e metas personalizadas.',
      clinicalHeading: 'Parceria clínica em prática',
      clinicalIntro:
        'Nosso conselho consultivo de clínicas de ELA e especialistas em neurorreabilitação mantém o Vocalis baseado em evidências.',
      clinicalListItem1:
        'Modelos de sessão alinhados a frameworks CAA como SETT e Participation Model.',
      clinicalListItem2:
        'Infraestrutura pronta para HIPAA com residência regional de dados e revisões de segurança trimestrais.',
      clinicalListItem3:
        'Exportação de documentação apoia autorizações de convênio e relatórios de progresso.',
      technologyHeading: 'Tecnologia criada para confiança',
      technologyIntro:
        'Arquitetura modular equilibra iteração rápida com salvaguardas de nível empresarial.',
      technologyListItem1: 'Processamento na borda suaviza ruídos e protege gravações brutas.',
      technologyListItem2:
        'Grafo de contexto combina agenda, ambiente e vocabulário personalizado para prever intenção.',
      technologyListItem3:
        'Pipeline de síntese de voz verifica clareza, ritmo e intenção emocional antes da reprodução.',
      tractionHeading: 'O que as pessoas estão vivenciando',
      tractionIntro:
        'Famílias piloto e clínicos já observam conversas mais rápidas e maior engajamento.',
      tractionMetric1Label: 'Velocidade de conversa',
      tractionMetric1Value: 'Respostas 3× mais rápidas',
      tractionMetric2Label: 'Confiança de cuidadores',
      tractionMetric2Value: '94% relatam menos estresse',
      tractionMetric3Label: 'Transferência terapêutica',
      tractionMetric3Value: 'Metas semanais dobradas',
      gtmHeading: 'Suporte em cada etapa',
      gtmIntro:
        'Do onboarding ao uso diário, combinamos especialistas humanos com fluxos guiados.',
      gtmListItem1:
        'Sessões personalizadas capturam preferências de voz e frases prioritárias.',
      gtmListItem2:
        'Coaching no app conduz usuários por cenários de prática solicitados pelas famílias.',
      gtmListItem3:
        'Comunidade compartilha playbooks, suporte e eventos ao vivo para aprendizado contínuo.',
      roadmapHeading: 'O que vem por aí',
      roadmapParagraph1:
        'Próximos lançamentos trazem captura de gestos, vozes multilíngues, modo de transmissão para cuidadores e copiloto offline.',
      roadmapImageAlt: 'Ilustração da roadmap mostrando novos lançamentos do Vocalis',
      teamHeading: 'Equipe',
      teamParagraph1:
        'Fonoaudiólogos, defensores de acessibilidade e pesquisadores de IA colaboram diariamente para manter o produto humano.',
      teamImageAlt: 'Equipe de clínicos e pesquisadores colaborando',
      ctaEyebrow: 'Pronto para amplificar cada voz?',
      ctaHeading:
        'Entre na lista de espera e ajude a moldar uma comunicação inclusiva.',
      ctaParagraph:
        'Famílias, clínicos e parceiros podem cocriar recursos, solicitar pilotos e receber novidades do lançamento.',
      ctaJoinLink: 'Entrar na lista de espera',
      ctaPartnerLink: 'Fale com nosso time',
      footerRights: 'Todos os direitos reservados.',
      languageLabel: 'Idioma',
      heroImageAlt: 'Ilustração de pessoas usando o Vocalis em vários dispositivos',
      themeToggleLight: 'Alternar para modo escuro',
      themeToggleDark: 'Alternar para modo claro'
    },
    es: {
      badge: 'CAA con IA que suena como tú',
      heroDescription:
        'Vocalis convierte habla abreviada, susurros y gestos en oraciones completas para que cada conversación vuelva a sentirse natural.',
      formEmailLabel: 'Correo electrónico',
      emailPlaceholder: 'Correo electrónico',
      waitlistButton: 'Únete a la lista de espera',
      waitlistSuccess: '¡Gracias! Nos pondremos en contacto pronto.',
      problemHeading: 'La brecha comunicativa',
      problemText:
        'Las familias aún dependen de tableros de letras, apps en cuadrícula o voces guionadas que borran la personalidad. Las conversaciones se vuelven lentas, las emociones se pierden y las personas usuarias se desconectan.',
      solutionHeading: 'Lo que entrega Vocalis',
      solutionText:
        'Vocalis escucha fragmentos, texto y pictogramas, infiere la intención y genera un discurso fluido que mantiene el tono, el ritmo y el vocabulario preferido.',
      whyMattersHeading: 'Por qué importa',
      whyMattersText:
        'Una conversación expresiva construye autonomía. Vocalis recupera las bromas cotidianas, los temas serios y las señales sutiles que las herramientas estáticas no capturan.',
      useCasesHeading: 'Momentos que Vocalis resuelve',
      useCaseRestaurantTitle: 'Pedir con confianza',
      useCaseRestaurantText:
        '<em>Entrada:</em> “querer… agua”<br /><em>Salida:</em> “¿Me podría traer un vaso de agua, por favor?”',
      useCaseSocialTitle: 'Ponerse al día con amistades',
      useCaseSocialText:
        '<em>Entrada:</em> “vi… video perro… loco”<br /><em>Salida:</em> “¿Viste ese video del perro? ¡Una locura!”',
      useCaseMeetingTitle: 'Participar en sesiones',
      useCaseMeetingText:
        '<em>Entrada:</em> “necesito… aclarar plan”<br /><em>Salida:</em> “Quisiera aclarar el plan; esto es lo que propongo.”',
      visualizingHeading: 'Vocalis en la vida diaria',
      visualizingImageAlt1: 'Ilustración de una persona usando Vocalis para pedir comida',
      visualizingCaption1: 'Frases personalizadas para comer y hacer recados.',
      visualizingImageAlt2: 'Ilustración de amistades charlando con una tablet CAA',
      visualizingCaption2: 'Respuestas expresivas que mantienen la energía social.',
      visualizingImageAlt3: 'Ilustración de estudiante presentando con tecnología asistiva',
      visualizingCaption3: 'Aportes seguros en clase y terapia.',
      coreFeaturesHeading: 'Capacidades clave',
      featureFragmentTitle: 'Expansión de intención',
      featureFragmentText:
        'Convierte habla o texto abreviados en enunciados completos según el contexto.',
      featureStyleTitle: 'Personalización de voz',
      featureStyleText:
        'Aprende el tono, ritmo y vocabulario preferidos para sonar como la persona usuaria.',
      featureMultimodalTitle: 'Entrada flexible',
      featureMultimodalText:
        'Acepta fragmentos de voz, texto rápido, símbolos y selecciones por seguimiento ocular.',
      featureContextTitle: 'Detección de contexto',
      featureContextText:
        'Comprende el lugar, la persona interlocutora y el objetivo para sugerir la frase adecuada.',
      featureRealtimeTitle: 'Entrega instantánea',
      featureRealtimeText:
        'Produce texto y voz pulidos en menos de un segundo.',
      featureAddonsTitle: 'Controles expresivos',
      featureAddonsText:
        'Conmutadores rápidos para humor, urgencia o énfasis mantienen viva la conversación.',
      featureToneTitle: 'Conciencia de tono',
      featureToneText:
        'Señales de color reflejan el estado de ánimo de la conversación para que personas neurodivergentes ajusten el tono en tiempo real.',
      featurePrivacyTitle: 'Aprendizaje protegido',
      featurePrivacyText:
        'Modelos en el dispositivo y sincronización cifrada resguardan los datos de voz personales.',
      differentiatorsHeading: 'Por qué las familias eligen Vocalis',
      differentiatorsText:
        'Combinamos las mejores prácticas de terapia CAA con IA adaptativa para que cada interacción sea humana, confiable y sin esfuerzo.',
      assistiveHeading: 'Creado con quienes dependen de CAA',
      assistiveParagraph1:
        'Cocreábamos Vocalis con comunidades de ELA, parálisis cerebral, ACV y apraxia para eliminar fricciones diarias.',
      assistiveParagraph2:
        'Cuidadores, terapeutas y personas usuarias comparten vocabularios, notas y frases favoritas para mantenerse alineados.',
      assistiveParagraph3:
        'Precios accesibles, guía de hardware y onboarding en vivo aseguran avances desde el primer día.',
      intonationHeading: 'Indicador de ánimo de la conversación',
      intonationIntro:
        'Indicadores de color en vivo traducen tensión, empatía o juego para que personas autistas y neurodivergentes lean el ambiente y ajusten el tono antes de malentendidos.',
      intonationBenefit1Title: 'Red de seguridad en tiempo real',
      intonationBenefit1Text:
        'Azules y verdes calman cuando el tono está equilibrado; ámbar y rojo alertan si suena brusco.',
      intonationBenefit2Title: 'Confianza en los matices',
      intonationBenefit2Text:
        'Los cambios de color se acompañan de pistas como “suena directo” o “cálido y ligero” para guiar las interacciones.',
      intonationBenefit3Title: 'Listo para cualquier superficie',
      intonationBenefit3Text:
        'Superposición móvil hoy; vista en AR después mantiene las señales discretas en persona.',
      intonationImageAlt1: 'Interfaz móvil mostrando conversación con anillo azul de ánimo calmado',
      intonationCaption1: 'Azules y verdes suaves tranquilizan al hablante cuando el tono llega como apoyo.',
      intonationImageAlt2: 'Superposición de gafas AR proyectando alerta púrpura para diálogo tenso',
      intonationCaption2: 'Un halo sutil cambia a ámbar y violeta cuando el diálogo puede sentirse demasiado incisivo.',
      assistiveImageAlt: 'Comunidad usando Vocalis en hogares, escuelas y clínicas',
      marketHeading: 'Cómo funciona Vocalis',
      marketParagraph1:
        'La captura de señal limpia voz, texto o símbolos mientras nuestro motor de intención predice lo que se quiere expresar.',
      marketParagraph2:
        'El compositor de respuestas aplica el estilo personal y transmite texto y voz natural a altavoces, tablets o apps asociadas.',
      marketImageAlt: 'Diagrama del flujo de Vocalis desde la entrada hasta la expresión',
      businessHeading: 'Soporte alrededor de la persona',
      businessParagraph1:
        'Los equipos de cuidado gestionan perfiles, siguen objetivos y programan prácticas desde un panel compartido.',
      businessParagraph2:
        'Integraciones con historiales clínicos, teleterapia y dispositivos educativos mantienen a todos alineados.',
      businessImageAlt: 'Ilustración de cuidadores, clínicos y docentes conectados mediante Vocalis',
      investmentHeading: 'Diseñado para comunicación vital',
      investmentIntro:
        'La confiabilidad, la personalización y la seguridad están presentes en cada capa para que las familias confíen en Vocalis siempre.',
      investmentProof1Title: 'Siempre disponible',
      investmentProof1Text:
        'Bancos de frases sin conexión y conmutación automática mantienen la voz activa en viajes o caídas de servicio.',
      investmentProof2Title: 'IA guiada por clínica',
      investmentProof2Text:
        'Fonoaudiólogos revisan datos de entrenamiento y salvaguardas para conservar la integridad terapéutica.',
      investmentProof3Title: 'Seguro por diseño',
      investmentProof3Text:
        'Cifrado de extremo a extremo, compartición con consentimiento y auditorías protegen la privacidad.',
      investmentProof4Title: 'Resultados medibles',
      investmentProof4Text:
        'Analíticas de cuidado muestran mejoras en tiempo de respuesta, participación y metas personalizadas.',
      clinicalHeading: 'Alianza clínica en acción',
      clinicalIntro:
        'Nuestro consejo asesor de clínicas de ELA y expertos en neurorrehabilitación mantiene a Vocalis basado en evidencia.',
      clinicalListItem1:
        'Plantillas de sesión alineadas con marcos CAA como SETT y Participation Model.',
      clinicalListItem2:
        'Infraestructura preparada para HIPAA con residencia regional de datos y revisiones de seguridad trimestrales.',
      clinicalListItem3:
        'Exportaciones de documentación respaldan autorizaciones de seguros y reportes de progreso.',
      technologyHeading: 'Tecnología creada para la confianza',
      technologyIntro:
        'Una arquitectura modular equilibra iteración rápida con salvaguardas de nivel empresarial.',
      technologyListItem1: 'Procesamiento en el borde suaviza el ruido y protege grabaciones sin procesar.',
      technologyListItem2:
        'El grafo de contexto combina agenda, entorno y vocabulario personalizado para prever la intención.',
      technologyListItem3:
        'La síntesis de voz valida claridad, ritmo e intención emocional antes de reproducir.',
      tractionHeading: 'Lo que la gente está viviendo',
      tractionIntro:
        'Familias piloto y clínicos ya observan conversaciones más rápidas y mayor participación.',
      tractionMetric1Label: 'Velocidad conversacional',
      tractionMetric1Value: 'Respuestas 3× más rápidas',
      tractionMetric2Label: 'Confianza de cuidadores',
      tractionMetric2Value: '94% reporta menos estrés',
      tractionMetric3Label: 'Transferencia terapéutica',
      tractionMetric3Value: 'Metas semanales duplicadas',
      gtmHeading: 'Acompañamiento en cada paso',
      gtmIntro:
        'Desde la incorporación hasta el uso diario, combinamos experiencia humana con flujos guiados.',
      gtmListItem1:
        'Sesiones personalizadas capturan preferencias de voz y frases prioritarias.',
      gtmListItem2:
        'Entrenamiento en la app guía escenarios de práctica que solicitan las familias.',
      gtmListItem3:
        'La comunidad comparte guías, soporte y eventos en vivo para aprender continuamente.',
      roadmapHeading: 'Lo que viene',
      roadmapParagraph1:
        'Próximos lanzamientos agregarán captura de gestos, voces multilingües, modo de difusión para cuidadores y copiloto sin conexión.',
      roadmapImageAlt: 'Ilustración de la hoja de ruta con próximos lanzamientos de Vocalis',
      teamHeading: 'Equipo',
      teamParagraph1:
        'Fonoaudiólogos, defensores de accesibilidad y especialistas en IA colaboran a diario para mantener el producto humano.',
      teamImageAlt: 'Equipo de clínicos y personas investigadoras colaborando',
      ctaEyebrow: '¿Listo para amplificar cada voz?',
      ctaHeading:
        'Únete a la lista de espera y ayuda a crear una comunicación inclusiva.',
      ctaParagraph:
        'Familias, clínicos y aliados pueden cocrear funciones, solicitar pilotos y recibir novedades del lanzamiento.',
      ctaJoinLink: 'Únete a la lista de espera',
      ctaPartnerLink: 'Habla con nuestro equipo',
      footerRights: 'Todos los derechos reservados.',
      languageLabel: 'Idioma',
      heroImageAlt: 'Ilustración de personas usando Vocalis en distintos dispositivos',
      themeToggleLight: 'Cambiar a modo oscuro',
      themeToggleDark: 'Cambiar a modo claro'
    },
    de: {
      badge: 'KI-gestützte UK, die wie du klingst',
      heroDescription:
        'Vocalis verwandelt abgekürzte Sprache, Flüstern und Gesten in vollständige Sätze, damit sich jedes Gespräch wieder natürlich anfühlt.',
      formEmailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'E-Mail-Adresse',
      waitlistButton: 'Auf die Warteliste',
      waitlistSuccess: 'Danke! Wir melden uns in Kürze.',
      problemHeading: 'Die Kommunikationslücke',
      problemText:
        'Familien sind weiterhin auf Buchstabentafeln, Raster-Apps oder geskriptete Stimmen angewiesen, die Persönlichkeit ausblenden. Gespräche verlangsamen sich, Emotionen gehen verloren und Nutzer:innen ziehen sich zurück.',
      solutionHeading: 'Was Vocalis liefert',
      solutionText:
        'Vocalis hört Fragmente, Text und Piktogramme, erkennt die Absicht und erzeugt flüssige Sprache, die Tonfall, Tempo und Lieblingswortschatz der Nutzer:innen trägt.',
      whyMattersHeading: 'Warum es wichtig ist',
      whyMattersText:
        'Ausdrucksstarke Gespräche schaffen Selbstbestimmung. Vocalis bringt Alltagswitz, ernsthafte Themen und subtile Signale zurück, die statische Tools nicht erfassen.',
      useCasesHeading: 'Momente, die Vocalis löst',
      useCaseRestaurantTitle: 'Entspannt bestellen',
      useCaseRestaurantText:
        '<em>Eingabe:</em> “will… wasser”<br /><em>Ausgabe:</em> “Könnte ich bitte ein Glas Wasser bekommen?”',
      useCaseSocialTitle: 'Mit Freund:innen plaudern',
      useCaseSocialText:
        '<em>Eingabe:</em> “gesehen… hundevideo… irre”<br /><em>Ausgabe:</em> “Habt ihr dieses Hundevideo gesehen? Total irre!”',
      useCaseMeetingTitle: 'In Runden mitreden',
      useCaseMeetingText:
        '<em>Eingabe:</em> “muss… plan erklären”<br /><em>Ausgabe:</em> “Ich möchte den Plan klarstellen – das schlage ich vor.”',
      visualizingHeading: 'Vocalis im Alltag',
      visualizingImageAlt1: 'Illustration einer Person, die mit Vocalis Essen bestellt',
      visualizingCaption1: 'Individuelle Formulierungen für Restaurant und Besorgungen.',
      visualizingImageAlt2: 'Illustration von Freund:innen, die mit einem UK-Tablet sprechen',
      visualizingCaption2: 'Lebendige Antworten halten das soziale Miteinander.',
      visualizingImageAlt3: 'Illustration einer lernenden Person mit Assistivtechnik beim Vortragen',
      visualizingCaption3: 'Sichere Beiträge in Unterricht und Therapie.',
      coreFeaturesHeading: 'Zentrale Fähigkeiten',
      featureFragmentTitle: 'Absichtserweiterung',
      featureFragmentText:
        'Verwandelt verkürzte Sprache oder Text in vollständige, kontextgerechte Aussagen.',
      featureStyleTitle: 'Stimm-Personalisierung',
      featureStyleText:
        'Lernt bevorzugten Ton, Rhythmus und Wortschatz, um wie die Nutzer:innen zu klingen.',
      featureMultimodalTitle: 'Flexible Eingabe',
      featureMultimodalText:
        'Verarbeitet Sprachfragmente, Kurztext, Symbole und Blicksteuerung.',
      featureContextTitle: 'Kontext-Erkennung',
      featureContextText:
        'Versteht Ort, Gesprächspartner:in und Ziel, um passende Formulierungen vorzuschlagen.',
      featureRealtimeTitle: 'Sofortige Ausgabe',
      featureRealtimeText:
        'Liefert polierten Text und Sprache in unter einer Sekunde.',
      featureAddonsTitle: 'Ausdrucksregler',
      featureAddonsText:
        'Schnellschalter für Humor, Dringlichkeit oder Betonung halten Gespräche lebendig.',
      featureToneTitle: 'Tonwahrnehmung',
      featureToneText:
        'Farbhinweise spiegeln die Stimmung des Gesprächs, damit neurodivergente Nutzer:innen den Ton in Echtzeit anpassen können.',
      featurePrivacyTitle: 'Geschütztes Lernen',
      featurePrivacyText:
        'On-Device-Modelle und verschlüsselte Synchronisation schützen persönliche Sprachdaten.',
      differentiatorsHeading: 'Darum entscheiden sich Familien für Vocalis',
      differentiatorsText:
        'Wir verbinden UK-Therapie-Best-Practices mit adaptiver KI, damit jede Interaktion menschlich, vertrauenswürdig und mühelos bleibt.',
      assistiveHeading: 'Mit Menschen entwickelt, die auf UK angewiesen sind',
      assistiveParagraph1:
        'Gemeinsam mit Communities rund um ALS, Zerebralparese, Schlaganfall und Apraxie haben wir Vocalis entwickelt, um tägliche Reibungen zu entfernen.',
      assistiveParagraph2:
        'Pflegende, Therapeut:innen und Nutzer:innen teilen Wortschätze, Sitzungsnotizen und Lieblingssätze, um abgestimmt zu bleiben.',
      assistiveParagraph3:
        'Faire Preise, Hardware-Beratung und Live-Onboarding sorgen für Fortschritt ab Tag eins.',
      intonationHeading: 'Stimmungsindikator für Gespräche',
      intonationIntro:
        'Live-Farbcodes übersetzen Spannung, Empathie oder Humor, damit autistische und neurodivergente Menschen die Situation einschätzen und den Ton anpassen, bevor Missverständnisse entstehen.',
      intonationBenefit1Title: 'Echtzeit-Sicherheitsnetz',
      intonationBenefit1Text:
        'Beruhigendes Blau und Grün bedeuten Balance; Amber und Rot warnen, wenn Formulierungen schroff wirken.',
      intonationBenefit2Title: 'Sicherheit bei Nuancen',
      intonationBenefit2Text:
        'Farbwechsel werden mit Hinweisen wie “klingt direkt” oder “warm und leicht” kombiniert, um soziale Signale zu üben.',
      intonationBenefit3Title: 'Bereit für jedes Display',
      intonationBenefit3Text:
        'Mobile Overlays heute; AR-Ansicht später hält Hinweise dezent im direkten Gespräch.',
      intonationImageAlt1: 'Smartphone-Oberfläche mit blauem Stimmungsring für ruhiges Gespräch',
      intonationCaption1: 'Sanfte Blau- und Grüntöne zeigen, wenn der Ton unterstützend ankommt.',
      intonationImageAlt2: 'AR-Brille mit violettem Hinweis für angespanntes Gespräch',
      intonationCaption2: 'Ein dezentes AR-Leuchten wechselt zu Bernstein und Violett, wenn der Dialog zu scharf wirkt.',
      assistiveImageAlt: 'Community, die Vocalis zu Hause, in der Schule und in Kliniken nutzt',
      marketHeading: 'So funktioniert Vocalis',
      marketParagraph1:
        'Die Signalerfassung bereinigt Sprache, Text oder Symbole, während unsere Intent-Engine vorhersagt, was gesagt werden soll.',
      marketParagraph2:
        'Der Antwortgenerator wendet den persönlichen Stil an und streamt Text sowie natürliche Stimme auf Lautsprecher, Tablets oder Partner-Apps.',
      marketImageAlt: 'Diagramm der Vocalis-Pipeline von der Eingabe bis zur ausdrucksstarken Ausgabe',
      businessHeading: 'Unterstützung rund um die Nutzer:innen',
      businessParagraph1:
        'Pflege-Teams verwalten Profile, verfolgen Ziele und planen Übungen über ein gemeinsames Dashboard.',
      businessParagraph2:
        'Integrationen mit EMR, Teletherapie und Geräten im Unterricht halten alle über Fortschritte informiert.',
      businessImageAlt: 'Illustration von Pflegenden, Kliniker:innen und Lehrkräften, die über Vocalis verbunden sind',
      investmentHeading: 'Für lebenswichtige Kommunikation gebaut',
      investmentIntro:
        'Zuverlässigkeit, Personalisierung und Sicherheit stecken in jeder Schicht, damit Familien jederzeit auf Vocalis zählen können.',
      investmentProof1Title: 'Immer verfügbar',
      investmentProof1Text:
        'Offline-Phrasenbanken und automatisches Failover halten Stimmen auf Reisen oder bei Ausfällen aktiv.',
      investmentProof2Title: 'Klinisch informierte KI',
      investmentProof2Text:
        'Logopäd:innen prüfen Trainingsdaten und Leitplanken, um therapeutische Integrität zu sichern.',
      investmentProof3Title: 'Sicher per Design',
      investmentProof3Text:
        'Ende-zu-Ende-Verschlüsselung, zustimmungsbasierte Freigaben und Audit-Trails schützen Privatsphäre und Compliance.',
      investmentProof4Title: 'Messbare Ergebnisse',
      investmentProof4Text:
        'Care-Analytics zeigen verkürzte Antwortzeiten, höhere Beteiligung und individuelle Zielerreichung.',
      clinicalHeading: 'Klinische Partnerschaft im Alltag',
      clinicalIntro:
        'Unser Beirat aus ALS-Kliniken und Neurorehabilitations-Expert:innen hält Vocalis evidenzbasiert.',
      clinicalListItem1:
        'Sitzungsvorlagen orientieren sich an UK-Frameworks wie SETT und Participation Model.',
      clinicalListItem2:
        'HIPAA-bereite Infrastruktur mit regionaler Datenspeicherung und vierteljährlichen Sicherheitsreviews.',
      clinicalListItem3:
        'Dokumentationsexporte unterstützen Kostenträger-Bewilligungen und Fortschrittsberichte.',
      technologyHeading: 'Technologie für Vertrauen',
      technologyIntro:
        'Modulare Architektur verbindet schnelle Iteration mit Schutz auf Enterprise-Niveau.',
      technologyListItem1: 'Edge-Verarbeitung glättet Störgeräusche und schützt Rohaufnahmen.',
      technologyListItem2:
        'Der Kontextgraph kombiniert Termine, Umgebung und individuellen Wortschatz zur Intent-Vorhersage.',
      technologyListItem3:
        'Die Sprachsynthese prüft Klarheit, Tempo und emotionale Intention vor der Ausgabe.',
      tractionHeading: 'Was Menschen bereits erleben',
      tractionIntro:
        'Pilotfamilien und Therapeut:innen berichten von schnelleren Gesprächen und mehr Engagement.',
      tractionMetric1Label: 'Gesprächstempo',
      tractionMetric1Value: '3× schnellere Antworten',
      tractionMetric2Label: 'Sicherheit der Pflegenden',
      tractionMetric2Value: '94 % fühlen sich weniger gestresst',
      tractionMetric3Label: 'Therapie-Transfer',
      tractionMetric3Value: 'Wöchentliche Ziele doppelt erreicht',
      gtmHeading: 'Begleitung in jedem Schritt',
      gtmIntro:
        'Vom Onboarding bis zum Alltag kombinieren wir menschliche Expertise mit geführten Workflows.',
      gtmListItem1:
        'Personalisierte Setups erfassen Stimmpräferenzen und Prioritätssätze.',
      gtmListItem2:
        'In-App-Coaching führt durch Übungsszenarien, die Familien anfragen.',
      gtmListItem3:
        'Die Community teilt Playbooks, Support und Live-Events für kontinuierliches Lernen.',
      roadmapHeading: 'Das steht an',
      roadmapParagraph1:
        'Nächste Releases bringen Gestenerfassung, mehrsprachige Stimmen, Pflege-Broadcast-Modus und Offline-Copilot-Eingaben.',
      roadmapImageAlt: 'Roadmap-Illustration mit kommenden Vocalis-Releases',
      teamHeading: 'Team',
      teamParagraph1:
        'Logopäd:innen, Barrierefreiheits-Verfechter:innen und KI-Forschende arbeiten täglich zusammen, damit das Produkt menschlich bleibt.',
      teamImageAlt: 'Team aus Kliniker:innen und Forschenden in Zusammenarbeit',
      ctaEyebrow: 'Bereit, jede Stimme zu verstärken?',
      ctaHeading:
        'Tritt der Warteliste bei und gestalte inklusive Kommunikation mit.',
      ctaParagraph:
        'Familien, Kliniker:innen und Partner teilen Feature-Wünsche, fordern Piloten an und erhalten Neuigkeiten zum Launch.',
      ctaJoinLink: 'Zur Warteliste',
      ctaPartnerLink: 'Sprich mit unserem Team',
      footerRights: 'Alle Rechte vorbehalten.',
      languageLabel: 'Sprache',
      heroImageAlt: 'Illustration von Menschen, die Vocalis auf verschiedenen Geräten nutzen',
      themeToggleLight: 'Zum Dark Mode wechseln',
      themeToggleDark: 'Zum Light Mode wechseln'
    },
    it: {
      badge: 'CAA con IA che suona come te',
      heroDescription:
        'Vocalis trasforma parlato abbreviato, sussurri e gesti in frasi complete così ogni conversazione torna naturale.',
      formEmailLabel: 'Indirizzo e-mail',
      emailPlaceholder: 'Indirizzo e-mail',
      waitlistButton: 'Iscriviti alla lista d’attesa',
      waitlistSuccess: 'Grazie! Ti contatteremo presto.',
      problemHeading: 'Il divario comunicativo',
      problemText:
        'Le famiglie usano ancora tavole alfabetiche, app a griglia o voci preimpostate che cancellano la personalità. Le conversazioni rallentano, le emozioni si perdono e le persone si disimpegnano.',
      solutionHeading: 'Cosa offre Vocalis',
      solutionText:
        'Vocalis ascolta frammenti, testo e pittogrammi, deduce l’intento e genera un linguaggio fluido che mantiene tono, ritmo e vocabolario preferito.',
      whyMattersHeading: 'Perché conta',
      whyMattersText:
        'Una conversazione espressiva sostiene l’autonomia. Vocalis riporta leggerezza quotidiana, dialoghi importanti e segnali sottili che gli strumenti statici non colgono.',
      useCasesHeading: 'Momenti gestiti da Vocalis',
      useCaseRestaurantTitle: 'Ordinare con serenità',
      useCaseRestaurantText:
        '<em>Input:</em> “voglio… acqua”<br /><em>Output:</em> “Potrei avere un bicchiere d’acqua, per favore?”',
      useCaseSocialTitle: 'Ritrovarsi con gli amici',
      useCaseSocialText:
        '<em>Input:</em> “visto… video cane… pazzo”<br /><em>Output:</em> “Hai visto quel video del cane? È pazzesco!”',
      useCaseMeetingTitle: 'Intervenire nelle sessioni',
      useCaseMeetingText:
        '<em>Input:</em> “devo… chiarire piano”<br /><em>Output:</em> “Vorrei chiarire il piano: ecco la mia proposta.”',
      visualizingHeading: 'Vocalis nella vita quotidiana',
      visualizingImageAlt1: 'Illustrazione di una persona che usa Vocalis per ordinare al ristorante',
      visualizingCaption1: 'Frasi personalizzate per pasti e commissioni.',
      visualizingImageAlt2: 'Illustrazione di amici che parlano con un tablet CAA',
      visualizingCaption2: 'Risposte espressive che mantengono l’energia sociale.',
      visualizingImageAlt3: 'Illustrazione di uno studente che presenta con tecnologia assistiva',
      visualizingCaption3: 'Contributi sicuri a scuola e in terapia.',
      coreFeaturesHeading: 'Funzionalità chiave',
      featureFragmentTitle: 'Espansione dell’intento',
      featureFragmentText:
        'Trasforma parlato o testo abbreviato in frasi complete adatte al contesto.',
      featureStyleTitle: 'Personalizzazione della voce',
      featureStyleText:
        'Apprende tono, ritmo e vocabolario preferiti per suonare come la persona.',
      featureMultimodalTitle: 'Input flessibile',
      featureMultimodalText:
        'Accetta frammenti vocali, testo rapido, simboli e selezioni con eye-tracking.',
      featureContextTitle: 'Riconoscimento del contesto',
      featureContextText:
        'Comprende luogo, interlocutore e obiettivo per suggerire la frase giusta.',
      featureRealtimeTitle: 'Output immediato',
      featureRealtimeText:
        'Genera testo e voce rifiniti in meno di un secondo.',
      featureAddonsTitle: 'Controlli espressivi',
      featureAddonsText:
        'Scorciatoie per ironia, urgenza o enfasi mantengono viva la conversazione.',
      featureToneTitle: 'Consapevolezza del tono',
      featureToneText:
        'Segnali a colori riflettono l’umore della conversazione così le persone neurodivergenti possono modulare la voce in tempo reale.',
      featurePrivacyTitle: 'Apprendimento protetto',
      featurePrivacyText:
        'Modelli locali e sincronizzazione crittografata tutelano i dati vocali personali.',
      differentiatorsHeading: 'Perché le famiglie scelgono Vocalis',
      differentiatorsText:
        'Uniamo le migliori pratiche AAC con IA adattiva per interazioni umane, affidabili e senza attrito.',
      assistiveHeading: 'Creato con chi usa la CAA ogni giorno',
      assistiveParagraph1:
        'Abbiamo co-progettato Vocalis con le comunità ALS, paralisi cerebrale, ictus e aprassia per eliminare le frizioni quotidiane.',
      assistiveParagraph2:
        'Caregiver, terapisti e utenti condividono vocabolari, note di sessione e frasi preferite per restare allineati.',
      assistiveParagraph3:
        'Prezzi accessibili, guida hardware e onboarding live permettono progressi dal primo giorno.',
      intonationHeading: 'Indicatore di umore della conversazione',
      intonationIntro:
        'Codici colore in tempo reale traducono tensione, empatia o ironia, aiutando persone autistiche e neurodivergenti a capire il contesto e adattare il tono prima che nascano incomprensioni.',
      intonationBenefit1Title: 'Rete di sicurezza immediata',
      intonationBenefit1Text:
        'Blu e verde rassicurano quando il tono è equilibrato; ambra e rosso avvisano se suona troppo brusco.',
      intonationBenefit2Title: 'Sicurezza nelle sfumature',
      intonationBenefit2Text:
        'I cambi di colore includono spunti come “suona diretto” o “caldo e leggero” per allenare le relazioni.',
      intonationBenefit3Title: 'Pronto su ogni superficie',
      intonationBenefit3Text:
        'Sovrapposizione mobile oggi; vista AR in futuro mantiene gli indici discreti nelle conversazioni dal vivo.',
      intonationImageAlt1: 'Interfaccia su smartphone con anello blu di umore tranquillo',
      intonationCaption1: 'Blu e verde morbidi mostrano quando il tono arriva come supportivo.',
      intonationImageAlt2: 'Overlay di occhiali AR che proietta avviso viola per dialogo teso',
      intonationCaption2: 'Un bagliore discreto passa ad ambra e viola quando il dialogo rischia di sembrare troppo tagliente.',
      assistiveImageAlt: 'Comunità che usa Vocalis a casa, a scuola e in clinica',
      marketHeading: 'Come funziona Vocalis',
      marketParagraph1:
        'La cattura del segnale pulisce voce, testo o simboli mentre il motore di intento prevede ciò che si vuole esprimere.',
      marketParagraph2:
        'Il compositore applica lo stile personale e invia testo e voce naturale a speaker, tablet o app partner.',
      marketImageAlt: 'Diagramma della pipeline Vocalis dall’input all’output espressivo',
      businessHeading: 'Supporto attorno alla persona',
      businessParagraph1:
        'I team di cura gestiscono profili, monitorano obiettivi e pianificano esercizi da un’unica dashboard.',
      businessParagraph2:
        'Integrazioni con cartelle cliniche, teleterapia e dispositivi scolastici tengono tutti aggiornati sui progressi.',
      businessImageAlt: 'Illustrazione di caregiver, clinici e insegnanti connessi tramite Vocalis',
      investmentHeading: 'Progettato per comunicazioni vitali',
      investmentIntro:
        'Affidabilità, personalizzazione e sicurezza sono presenti in ogni livello così le famiglie possono contare su Vocalis sempre.',
      investmentProof1Title: 'Sempre disponibile',
      investmentProof1Text:
        'Banche frasi offline e failover automatico mantengono la voce attiva in viaggio o durante i blackout.',
      investmentProof2Title: 'IA guidata da clinici',
      investmentProof2Text:
        'Logopedisti revisionano dati e guardrail per preservare l’integrità terapeutica.',
      investmentProof3Title: 'Sicuro by design',
      investmentProof3Text:
        'Cifratura end-to-end, condivisione basata sul consenso e audit trail rispettano privacy e normative.',
      investmentProof4Title: 'Risultati misurabili',
      investmentProof4Text:
        'Analytics di cura evidenziano tempi di risposta ridotti, maggiore partecipazione e obiettivi personalizzati raggiunti.',
      clinicalHeading: 'Partnership clinica concreta',
      clinicalIntro:
        'Il nostro advisory board di cliniche ALS e specialisti in neuroriabilitazione mantiene Vocalis basato sulle evidenze.',
      clinicalListItem1:
        'Template di sessione in linea con framework AAC come SETT e Participation Model.',
      clinicalListItem2:
        'Infrastruttura conforme HIPAA con residenza dati regionale e revisioni di sicurezza trimestrali.',
      clinicalListItem3:
        'Esportazioni documentali supportano autorizzazioni assicurative e report di avanzamento.',
      technologyHeading: 'Tecnologia costruita per la fiducia',
      technologyIntro:
        'Architettura modulare che bilancia iterazione rapida e protezioni di livello enterprise.',
      technologyListItem1: 'Elaborazione edge riduce il rumore e protegge le registrazioni grezze.',
      technologyListItem2:
        'Il grafo di contesto combina agenda, ambiente e vocabolario personalizzato per prevedere l’intento.',
      technologyListItem3:
        'La sintesi vocale controlla chiarezza, ritmo e intenzione emotiva prima della riproduzione.',
      tractionHeading: 'Cosa stanno sperimentando le persone',
      tractionIntro:
        'Le famiglie pilota e i clinici notano già conversazioni più rapide e maggiore coinvolgimento.',
      tractionMetric1Label: 'Velocità di conversazione',
      tractionMetric1Value: 'Risposte 3× più rapide',
      tractionMetric2Label: 'Fiducia dei caregiver',
      tractionMetric2Value: '94% riferisce meno stress',
      tractionMetric3Label: 'Trasferimento terapeutico',
      tractionMetric3Value: 'Obiettivi settimanali raddoppiati',
      gtmHeading: 'Supporto in ogni fase',
      gtmIntro:
        'Dall’onboarding all’uso quotidiano uniamo competenza umana e flussi guidati.',
      gtmListItem1:
        'Sessioni personalizzate raccolgono preferenze vocali e frasi prioritarie.',
      gtmListItem2:
        'Coaching in-app guida scenari di pratica richiesti dalle famiglie.',
      gtmListItem3:
        'L’hub community offre playbook, supporto e eventi live per apprendere continuamente.',
      roadmapHeading: 'Prossimi passi',
      roadmapParagraph1:
        'I prossimi rilasci includono acquisizione dei gesti, voci multilingue, modalità broadcast per caregiver e suggerimenti offline del copilota.',
      roadmapImageAlt: 'Illustrazione roadmap con le prossime release di Vocalis',
      teamHeading: 'Team',
      teamParagraph1:
        'Logopedisti, sostenitori dell’accessibilità e ricercatori IA collaborano ogni giorno per mantenere il prodotto umano.',
      teamImageAlt: 'Team di clinici e ricercatori che collaborano',
      ctaEyebrow: 'Pronto ad amplificare ogni voce?',
      ctaHeading:
        'Iscriviti alla lista d’attesa e contribuisci a un futuro di comunicazione inclusiva.',
      ctaParagraph:
        'Famiglie, clinici e partner possono co-progettare funzionalità, richiedere piloti e ricevere aggiornamenti sul lancio.',
      ctaJoinLink: 'Iscriviti alla lista d’attesa',
      ctaPartnerLink: 'Parla con il nostro team',
      footerRights: 'Tutti i diritti riservati.',
      languageLabel: 'Lingua',
      heroImageAlt: 'Illustrazione di persone che usano Vocalis su diversi dispositivi',
      themeToggleLight: 'Passa al tema scuro',
      themeToggleDark: 'Passa al tema chiaro'
    },
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
