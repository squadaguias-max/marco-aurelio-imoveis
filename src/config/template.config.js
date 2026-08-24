import { phoneLabel, projectData, projectWhatsappUrl, whatsappDigits } from "./project.data";

export const templateConfig = {
  brand: {
    name: projectData.professional.officeName,
    displayName: projectData.project.displayName,
    descriptor: projectData.professional.area,
    oab: projectData.professional.oab,
  },
  hero: projectData.hero,
  contact: {
    ...projectData.contact,
    phoneLabel,
    hasWhatsapp: /^\d{12,13}$/.test(whatsappDigits),
  },
  office: {
    ...projectData.location,
    description: projectData.professional.biography,
  },
  situations: [
    {
      value: "R$ 150 mil+",
      title: "Imóvel de R$ 150 mil ou mais",
      description: "Você possui ou ocupa um imóvel de valor relevante, mas a propriedade ainda não está devidamente regularizada.",
      cta: "Quero analisar meu imóvel",
    },
    {
      value: "R$ 300–500 mil+",
      title: "Imóvel de R$ 300 mil, R$ 500 mil ou mais",
      description: "Quanto maior o patrimônio envolvido, maior a importância de entender a situação jurídica e documental do imóvel.",
      cta: "Quero orientação",
    },
    {
      value: "R$ 1 milhão+",
      title: "Imóvel de R$ 1 milhão ou mais",
      description: "Um patrimônio de alto valor sem regularização pode exigir uma análise jurídica cuidadosa sobre a posse e a documentação existente.",
      cta: "Analisar meu caso",
    },
    {
      value: "Sem registro",
      title: "Não tenho escritura ou registro",
      description: "Você ocupa, utiliza ou recebeu o imóvel, mas não possui a documentação definitiva registrada em seu nome.",
      cta: "Entender minha situação",
    },
  ],
  assessment: [
    "Qual é o valor aproximado do imóvel?",
    "Há quanto tempo você exerce a posse?",
    "Você possui documentos relacionados ao imóvel?",
    "Como o imóvel foi adquirido ou ocupado?",
    "Existem outros envolvidos na situação?",
  ],
  process: [
    {
      title: "Você conta sobre o imóvel",
      description: "Informe o valor aproximado, o tempo de posse e a situação documental.",
    },
    {
      title: "O caso é analisado",
      description: "São avaliados os elementos jurídicos, os documentos disponíveis e as características da posse.",
    },
    {
      title: "Você recebe orientação",
      description: "Você entende quais possibilidades jurídicas podem ser avaliadas para a regularização.",
    },
  ],
  team: [
    {
      name: "Marco Aurelio Alves de Souza Aguiar",
      role: "Advogado",
      credential: "OAB/TO 3.020 · OAB/GO 40.813-A",
      initials: "MA",
    },
    {
      name: "Brenda Aurelia Silva Souza",
      role: "Advogada",
      credential: "OAB/GO 72.922",
      initials: "BS",
    },
    {
      name: "Marco Túlio Silva Souza",
      role: "Bacharel em Direito",
      credential: "Equipe jurídica",
      initials: "MT",
    },
    {
      name: "Giselle Silva Santos de Souza",
      role: "Bacharel em Direito",
      credential: "Equipe jurídica",
      initials: "GS",
    },
  ],
  faqs: [
    {
      question: "O que é usucapião?",
      answer: "É uma forma originária de aquisição da propriedade baseada em uma posse prolongada, contínua, pacífica e exercida com ânimo de dono. O reconhecimento depende dos requisitos legais e do caso concreto.",
    },
    {
      question: "De quanto tempo de posse eu preciso?",
      answer: "Depende da modalidade. Os prazos podem variar de 2 a 15 anos, considerando fatores como moradia habitual, área do imóvel, justo título, boa-fé, produtividade rural e situação familiar.",
    },
    {
      question: "Posso somar o tempo de quem possuía antes de mim?",
      answer: "Em algumas situações, sim. A soma das posses exige vínculo jurídico entre elas — como cessão, contrato ou sucessão — e continuidade de uma posse mansa e pacífica.",
    },
    {
      question: "Preciso de escritura ou contrato registrado?",
      answer: "Não necessariamente. Contratos particulares, recibos, contas de consumo, IPTU, fotografias e outros documentos podem ajudar a comprovar a posse. A documentação necessária varia conforme a modalidade.",
    },
    {
      question: "Terreno público pode ser usucapido?",
      answer: "Não. Bens públicos não são passíveis de usucapião. Por isso, a origem e a cadeia dominial do imóvel precisam ser verificadas antes do procedimento.",
    },
    {
      question: "O procedimento pode ser judicial ou em cartório?",
      answer: "Sim. A via extrajudicial ocorre no cartório e exige documentação técnica e jurídica específica. Havendo impugnação ou outras dificuldades, o caso pode precisar seguir pela via judicial.",
    },
    {
      question: "Quais documentos costumam ser analisados?",
      answer: "Matrícula ou certidão negativa, planta e memorial, comprovantes de posse ao longo do tempo, IPTU ou ITR, contas de consumo, recibos, contratos, fotos, certidões e testemunhas podem ser relevantes.",
    },
    {
      question: "Quanto tempo pode levar?",
      answer: "O prazo varia conforme a documentação, as notificações, eventuais impugnações e a via escolhida. A estimativa só pode ser feita após a análise individual do imóvel e da posse.",
    }
  ],
};

export function whatsappUrl(message = projectData.contact.whatsappMessage) {
  return projectWhatsappUrl(message);
}
