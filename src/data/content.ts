import { LoteItem, FaqItem, DeliverableItem, PainCard, ExpertNicheExample } from '../types';

export const WHATSAPP_URL = 'https://wa.me/message/GQOKZB7YG3JIA1';
export const INSTAGRAM_URL = 'https://www.instagram.com/aironstudio.br/';
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CcQwzXL5qI7-EBM/review';

export const PRE_SALE_PRICE = 'R$ 297';
export const PRE_SALE_INSTALLMENT = '12x de R$ 29,70';

// Countdown configuration: 21 days from reference start
export const COUNTDOWN_DAYS = 21;

export const LOTES: LoteItem[] = [
  {
    id: 'lote-1',
    name: 'LOTE 01',
    badge: 'PRÉ-VENDA EXCLUSIVA',
    price: 'R$ 297',
    installment: '12x de R$ 29,70',
    period: 'Vagas de Pré-venda ativas agora',
    status: 'active',
    description: 'Condição especial de pré-abertura para quem entra no primeiro lote da fila de produção.',
  },
  {
    id: 'lote-2',
    name: 'LOTE 02',
    badge: 'VIRADA DE LOTE',
    price: 'R$ 397',
    installment: '12x de R$ 39,70',
    period: 'Liberado após o encerramento do Lote 01',
    status: 'upcoming',
    description: 'Próxima faixa comercial após o preenchimento das vagas de pré-venda.',
  },
  {
    id: 'lote-3',
    name: 'LOTE 03',
    badge: 'LANÇAMENTO OFICIAL',
    price: 'R$ 497',
    installment: '12x de R$ 49,70',
    period: 'Lote final da temporada',
    status: 'final',
    description: 'Valor definitivo de tabela com agenda em capacidade plena.',
  },
];

export const PAIN_CARDS: PainCard[] = [
  {
    quote: '"Me manda seu Instagram."',
    title: 'Fuga de Clientes e Pacientes Qualificados',
    description:
      'O Instagram é ótimo para conteúdo, mas é um ambiente cheio de distrações. Quando o lead clica para conhecer você, é bombardeado por notificações, reels e anúncios do concorrente. Ele se dispersa antes de agendar.',
    impactTag: 'Desvio de Foco do Lead',
  },
  {
    quote: '"Onde encontro mais informações?"',
    title: 'Objeção Silenciosa de Alto Preço',
    description:
      'Quando seu posicionamento fica fragmentado em links improvisados de bio e posts antigos, o cliente de alto tíquete não enxerga sofisticação. Ele compara você por preço e pede desconto.',
    impactTag: 'Desvalorização Perceptiva',
  },
  {
    quote: '"Você tem um site?"',
    title: 'Desgaste Imediato de Credibilidade',
    description:
      'Essa pergunta surge exatamente quando o cliente está pronto para passar o cartão ou fechar um procedimento de alto valor. Responder que não tem site gera insegurança inconsciente no fechamento.',
    impactTag: 'Fricção na Decisão de Compra',
  },
  {
    quote: '"Seu nome no Google."',
    title: 'Invisibilidade nas Buscas de Alta Intenção',
    description:
      'Quem pesquisa diretamente pelo seu nome ou especialidade no Google está na iminência de comprar. Sem um site profissional, você entrega essa busca para portais genéricos ou concorrentes diretos.',
    impactTag: 'Perda Direta de Faturamento',
  },
];

export const VIRADA_ITEMS = [
  'Quem você é e sua trajetória profissional',
  'O que você faz e seus diferenciais técnicos',
  'Seus serviços e procedimentos detalhados',
  'Sua experiência e formação especializada',
  'Seu posicionamento de alto valor',
  'Casos clínicos, fotos ou portfólio',
  'Seus canais oficiais de contato',
  'Botão de atendimento direto para WhatsApp',
  'Integração oficial com suas redes sociais',
  'Informações completas para quem está pronto para contratar',
];

export const DELIVERABLES: DeliverableItem[] = [
  { title: 'Site profissional completo e sob medida' },
  { title: 'Design responsivo (celular, tablet e computador)' },
  { title: 'Carregamento ultra veloz e fluido' },
  { title: 'Estrutura personalizada para sua especialidade' },
  { title: 'Apresentação visual elegante e premium' },
  { title: 'Seção biográfica sobre você e suas credenciais' },
  { title: 'Vitrine detalhada de serviços ou tratamentos' },
  { title: 'Botão de WhatsApp em destaque estratégico' },
  { title: 'Links integrados para redes sociais' },
  { title: 'Formulário de contato e captação' },
  { title: 'Estrutura preparada para mecanismos de busca (SEO)' },
  { title: 'Publicação completa do site no seu domínio' },
];

export const NICHE_EXAMPLES: ExpertNicheExample[] = [
  {
    id: 'odonto',
    nicheLabel: 'Odontologia & Clínica',
    name: 'Dra. Giulia Alburquec',
    credential: 'CRO/SP 124.890',
    specialty: 'Odontologia Estética & Reabilitação Oral',
    domain: 'dragiauliaalburquec.com.br',
    tagline: 'Excelência em estética do sorriso, facetas e harmonização orofacial com precisão artística.',
    location: 'Consultório Jardins • São Paulo',
    services: [
      { name: 'Lentes e Facetas de Porcelana', tag: 'Estética' },
      { name: 'Harmonização Orofacial Avançada', tag: 'Rejuvenescimento' },
      { name: 'Reabilitação Oral & Implantes Guiados', tag: 'Precisão' },
      { name: 'Protocolo Clareamento Laser VIP', tag: 'Exclusivo' },
    ],
    stats: [
      { label: 'Anos de Clínica', value: '+10' },
      { label: 'Sorrisos Transformados', value: '+1.800' },
      { label: 'Pós-Graduação', value: 'USP • Harvard CPD' },
    ],
  },
  {
    id: 'direito',
    nicheLabel: 'Advocacia & Direito',
    name: 'Dr. Eduardo Vance',
    credential: 'OAB/SP 289.410',
    specialty: 'Direito Tributário & Planejamento Sucessório',
    domain: 'eduardovanceadvocacia.com.br',
    tagline: 'Proteção patrimonial, segurança tributária e estruturação societária para empresários e famílias.',
    location: 'Faria Lima • São Paulo',
    services: [
      { name: 'Blindagem e Holding Familiar', tag: 'Patrimonial' },
      { name: 'Defesa e Contencioso Tributário', tag: 'Empresarial' },
      { name: 'Planejamento Tributário Estratégico', tag: 'Redução Fiscal' },
      { name: 'Consultoria para Sócios & M&A', tag: 'Alta Complexidade' },
    ],
    stats: [
      { label: 'Anos de Atuação', value: '+14' },
      { label: 'Economia Gerada', value: '+R$ 48M' },
      { label: 'Formação', value: 'Largo São Francisco (USP)' },
    ],
  },
  {
    id: 'medicina',
    nicheLabel: 'Medicina & Dermatologia',
    name: 'Dra. Camila Siqueira',
    credential: 'CRM/SP 148.920 • RQE 72.104',
    specialty: 'Dermatologia Clínica & Estética Médica Avançada',
    domain: 'dracamilasiqueira.med.br',
    tagline: 'Tratamentos dermatológicos personalizados com foco em rejuvenescimento natural e saúde cutânea integral.',
    location: 'Itaim Bibi • São Paulo',
    services: [
      { name: 'Bioestimuladores de Colágeno', tag: 'Firmeza' },
      { name: 'Toxina Botulínica e Preenchimento MD Codes', tag: 'Harmonia' },
      { name: 'Tecnologias a Laser & Ultraformer', tag: 'Inovação' },
      { name: 'Tratamento de Melasma & Cicatrizes', tag: 'Saúde' },
    ],
    stats: [
      { label: 'Procedimentos', value: '+3.200' },
      { label: 'Especialista', value: 'SBD Titular' },
      { label: 'Satisfação', value: '99.4%' },
    ],
  },
  {
    id: 'consultoria',
    nicheLabel: 'Consultoria & Negócios',
    name: 'Marcelo Drummond',
    credential: 'Conselheiro & Especialista B2B',
    specialty: 'Gestão Estratégica & Governança de Médias Empresas',
    domain: 'drummondconsultoria.com.br',
    tagline: 'Estruturação de processos executivos, aumento de margem e alinhamento de lideranças para escala acelerada.',
    location: 'Alphaville & Remoto Global',
    services: [
      { name: 'Diagnóstico Operacional & Margem', tag: 'Financeiro' },
      { name: 'Estruturação de Equipes Comerciais', tag: 'Crescimento' },
      { name: 'Implantação de Governança B2B', tag: 'Escala' },
      { name: 'Mentoria Executiva Individual', tag: 'Diretoria' },
    ],
    stats: [
      { label: 'Empresas Atendidas', value: '+85' },
      { label: 'Aumento Médio de EBITDA', value: '+34%' },
      { label: 'Experiência Executiva', value: '18 Anos' },
    ],
  },
];

export const DENTIST_EXAMPLE = NICHE_EXAMPLES[0];

export const PRODUCTION_STEPS = [
  {
    step: '01',
    title: 'Garantia de Vaga no Lote 01',
    subtitle: 'Confirmação Imediata',
    description: 'Você assegura o valor promocional de R$ 297 na fila prioritária de desenvolvimento.',
  },
  {
    step: '02',
    title: 'Envio Descomplicado de Dados',
    subtitle: 'Formulário Guiado pelo WhatsApp',
    description: 'Você nos envia suas fotos, serviços e dados de contato sem reuniões longas ou termos técnicos.',
  },
  {
    step: '03',
    title: 'Construção da Arquitetura de Autoridade',
    subtitle: 'Design Premium & Código Otimizado',
    description: 'A equipe da airon studio® desenvolve o layout responsivo sob medida para o seu posicionamento.',
  },
  {
    step: '04',
    title: 'Aprovação & Lançamento Oficial',
    subtitle: 'Publicação no seu Domínio',
    description: 'Seu site entra no ar conectado ao seu WhatsApp oficial e pronto para converter clientes.',
  },
];

export const VALUE_ANCHORING = {
  agencyPrice: 'R$ 2.500 a R$ 5.000+',
  agencyTime: '30 a 60 dias de espera',
  agencyFriction: 'Reuniões demoradas, taxas mensais ocultas e código travado',
  preSalePrice: 'R$ 297 à vista',
  preSaleInstallment: '12x de R$ 29,70',
  preSaleTime: 'Entrega ágil e sem complicação',
  preSaleAdvantage: 'Mesma entrega profissional de alta autoridade por uma fração do investimento',
};

export const AUDIENCE_PROFILES = [
  'Cirurgiões-Dentistas & Clínicas',
  'Médicos & Especialistas em Saúde',
  'Consultores de Negócios & Finanças',
  'Mentores & Treinadores Executivos',
  'Advogados & Profissionais Liberais',
  'Nutricionistas & Fisioterapeutas',
  'Psicólogos & Terapeutas',
  'Arquitetos & Designers de Interiores',
  'Personal Trainers de Alta Performance',
  'Criadores de Conteúdo & Infoprodutores',
  'Especialistas que vendem conhecimento e serviços',
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'O que é a oferta de Pré-venda por Lotes?',
    answer:
      'Para organizar o fluxo de produção dos projetos com cuidado artesanal, separamos as vagas por Lotes. O Lote 01 é a Pré-venda exclusiva por R$ 297. Quem garante antes entra na frente na fila e paga menos. Ao esgotar o Lote 01, o Lote 02 abre por R$ 397.',
  },
  {
    question: 'O site muda conforme o lote?',
    answer:
      'Não. O site é exatamente o mesmo. A entrega é 100% idêntica em qualquer lote: design responsivo, estrutura de autoridade, botão de WhatsApp e publicação inclusa. O que muda é apenas o valor conforme o lote em que você decide entrar.',
  },
  {
    question: 'Como funciona a adaptação para celular e computador?',
    answer:
      'O site é totalmente responsivo, adaptado milimetricamente para funcionar com máxima velocidade e beleza tanto na tela de smartphones quanto em tablets e telas grandes de desktop.',
  },
  {
    question: 'Preciso entender de tecnologia ou programação?',
    answer:
      'Zero. Cuidamos de toda a estrutura para você não ter dor de cabeça técnica. Você apenas nos envia suas informações e fotos pelo WhatsApp.',
  },
  {
    question: 'Posso colocar botão de WhatsApp e links das minhas redes?',
    answer:
      'Sim! O site inclui botão de WhatsApp estratégico para o visitante iniciar uma conversa direta com você ou sua secretária em 1 clique.',
  },
  {
    question: 'O site aparece no Google quando alguém pesquisa meu nome?',
    answer:
      'Sim, a estrutura é construída seguindo as boas práticas fundamentais de SEO (otimização para motores de busca), facilitando que seu nome e clínica sejam encontrados de forma profissional.',
  },
];
