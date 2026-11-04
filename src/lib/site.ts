export const site = {
  name: "Funerária São Luiz",
  shortName: "São Luiz",
  brandLine: "São Luiz Funerária",
  legalName: "TUC Comércio de Urnas Funérarias Ltda",
  cnpj: "03.236.823/0001-09",
  tagline: "Todos os momentos. Cuidado e respeito quando sua família mais precisa.",
  heroLead:
    "Na Funerária São Luiz cuidamos de cada detalhe para homenagear quem você ama. Atendimento humanizado, planos Prev e Plus, cremação e cremação pet.",
  description:
    "Funerária São Luiz em Passo Fundo/RS. Aberta 24 horas. Planos São Luiz Prev e Plus, cremação imediata e cremação pet. Rua Teixeira Soares, 1118 — Centro.",
  url: "https://www.lucianocogo.com.br",
  foundedYear: 1999,
  email: "falecom@lucianocogo.com.br",
  phone: {
    display: "(54) 3312-2688",
    href: "tel:+555433122688",
    e164: "+555433122688",
  },
  whatsapp: {
    display: "WhatsApp",
    href: "https://wa.me/555433122688?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Funer%C3%A1ria%20S%C3%A3o%20Luiz.",
  },
  address: {
    street: "R. Teixeira Soares, 1118",
    neighborhood: "Centro",
    city: "Passo Fundo",
    state: "RS",
    postalCode: "99010-080",
    full: "R. Teixeira Soares, 1118 — Centro, Passo Fundo/RS — CEP 99010-080",
  },
  geo: {
    lat: -28.262377,
    lng: -52.412284,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Teixeira+Soares,+1118+-+Centro,+Passo+Fundo+-+RS,+99010-080",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+Teixeira+Soares,+1118+-+Centro,+Passo+Fundo+-+RS,+99010-080&output=embed",
  social: {
    facebook: "https://www.facebook.com/425079920923796",
  },
  hoursLabel: "Aberto 24 horas",
} as const;

export const services = [
  {
    title: "Planos funerários",
    text: "São Luiz Prev e São Luiz Plus com parcelas acessíveis e cobertura completa para todos os momentos.",
  },
  {
    title: "Cremação imediata",
    text: "Opções à vista e parceladas, com transparência de valores e apoio à família em Passo Fundo.",
  },
  {
    title: "Cremação pet",
    text: "Despedida digna para o seu animal de estimação, com opções individual e coletiva.",
  },
  {
    title: "Organização do funeral",
    text: "Urna, ornamentação, higienização, cortejo, translado, anúncio e capela — tudo conduzido com respeito.",
  },
  {
    title: "Translado",
    text: "Transporte funerário com cobertura conforme o plano: até 50 km no Prev e até 100 km no Plus.",
  },
  {
    title: "Atendimento 24h",
    text: "Equipe disponível a qualquer hora no Centro de Passo Fundo. Ligue (54) 3312-2688.",
  },
] as const;

export const funeralPlans = [
  {
    id: "prev",
    name: "São Luiz Prev",
    slogan: "Todos os momentos",
    highlight: false,
    benefits: [
      "Urna com visor",
      "Manto de flor artificial",
      "Coroa de flor artificial",
      "Véu rendado",
      "Higienização e preparo",
      "Cortejo fúnebre",
      "Translado até 50 km",
      "Anúncio na rádio/web",
      "Capela municipal",
    ],
    installments: [
      { times: 12, value: "R$ 365,00" },
      { times: 24, value: "R$ 195,00" },
      { times: 36, value: "R$ 155,00" },
      { times: 48, value: "R$ 125,00" },
      { times: 60, value: "R$ 105,00" },
    ],
  },
  {
    id: "plus",
    name: "São Luiz Plus",
    slogan: "Todos os momentos",
    highlight: true,
    benefits: [
      "Urna semi-luxo",
      "Manto de flor natural",
      "Coroa de flor natural",
      "Véu de rendas de luxo",
      "Higienização e preparo",
      "Cortejo fúnebre",
      "Translado até 100 km",
      "Anúncio na rádio/web",
      "Capela municipal",
      "Kit café e alimentação",
    ],
    installments: [
      { times: 12, value: "R$ 730,00" },
      { times: 24, value: "R$ 390,00" },
      { times: 36, value: "R$ 310,00" },
      { times: 48, value: "R$ 250,00" },
      { times: 60, value: "R$ 210,00" },
    ],
  },
] as const;

export const cremation = {
  title: "Cremação imediata",
  cash: "R$ 3.300,00",
  installmentTotal: "R$ 3.600,00",
  entry: "R$ 1.200,00 de entrada + 2x R$ 1.200,00",
  installments: [
    { times: 12, value: "R$ 335,00" },
    { times: 24, value: "R$ 170,00" },
    { times: 36, value: "R$ 130,00" },
  ],
  extras: [
    { name: "Restos mortais", price: "R$ 950,00" },
    {
      name: "Ossada extra",
      price: "R$ 350,00",
      note: "10 dias para entrega",
    },
  ],
} as const;

export const petCremation = {
  title: "Cremação Pet",
  deliveryNote: "10 dias para entrega",
  options: [
    { name: "Pet até 30 kg", price: "R$ 780,00", note: null },
    { name: "Pet acima de 30 kg", price: "R$ 900,00", note: null },
    {
      name: "Coletiva até 15 kg",
      price: "R$ 400,00",
      note: "Sem retorno · acima de 15 kg: + R$ 20,00 por kg",
    },
  ],
} as const;

export const differentials = [
  {
    title: "Aberto 24 horas",
    text: "Atendimento contínuo no Centro de Passo Fundo, todos os dias da semana.",
  },
  {
    title: "Planos claros e acessíveis",
    text: "Prev e Plus com valores parcelados transparentes — sem surpresas no momento difícil.",
  },
  {
    title: "Cremação humana e pet",
    text: "Soluções completas para famílias e para quem deseja uma despedida digna ao pet.",
  },
  {
    title: "Localização central",
    text: "R. Teixeira Soares, 1118 — Centro, Passo Fundo/RS, CEP 99010-080.",
  },
] as const;

export const faqs = [
  {
    question: "A Funerária São Luiz fica aberta 24 horas?",
    answer:
      "Sim. Estamos abertos 24 horas na R. Teixeira Soares, 1118 — Centro, Passo Fundo/RS. Em emergência, ligue (54) 3312-2688.",
  },
  {
    question: "Qual a diferença entre São Luiz Prev e São Luiz Plus?",
    answer:
      "O Prev inclui urna com visor, flores artificiais, translado até 50 km e capela municipal. O Plus eleva o padrão com urna semi-luxo, flores naturais, véu de luxo, translado até 100 km e kit café/alimentação.",
  },
  {
    question: "Quanto custa a cremação imediata?",
    answer:
      "A cremação imediata custa R$ 3.300,00 à vista ou R$ 3.600,00 parcelado (entrada de R$ 1.200,00 + 2x R$ 1.200,00). Também há opções em 12, 24 ou 36 vezes.",
  },
  {
    question: "Vocês fazem cremação pet?",
    answer:
      "Sim. Pet até 30 kg por R$ 780,00; acima de 30 kg por R$ 900,00; coletiva até 15 kg por R$ 400,00 (sem retorno). Prazo de entrega: 10 dias.",
  },
  {
    question: "Como contratar um plano funerário?",
    answer:
      "Ligue para (54) 3312-2688 ou fale no WhatsApp. Nossa equipe explica coberturas, parcelas e a melhor opção para sua família.",
  },
  {
    question: "Onde fica a Funerária São Luiz?",
    answer:
      "R. Teixeira Soares, 1118 — Centro, Passo Fundo/RS — CEP 99010-080.",
  },
] as const;
