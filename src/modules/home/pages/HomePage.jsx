import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Clock3,
  FileCheck2,
  Home,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";
import fullLogo from "../../../assets/logo.png";

const fieldLabels = {
  nome: "Nome",
  contato: "Telefone/WhatsApp",
  valor: "Valor aproximado",
  tipo: "Tipo do imóvel",
  posse: "Tempo de posse",
  documentos: "Documentos disponíveis",
  origem: "Como adquiriu ou ocupou",
  envolvidos: "Outros envolvidos",
  detalhes: "Detalhes adicionais",
};

function handleAnalysisSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const details = [...data.entries()]
    .filter(([, value]) => String(value).trim())
    .map(([key, value]) => `${fieldLabels[key] || key}: ${value}`)
    .join("\n");
  const message = `Olá! Vim pelo site da Marco Advocacia e gostaria de analisar meu imóvel.\n\n${details}`;

  if (site.contact.hasWhatsapp) {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    return;
  }

  const subject = encodeURIComponent("Solicitação de análise de imóvel");
  window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
}

export function HomePage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.office.mapsQuery)}`;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.office.mapsQuery)}&output=embed`;

  return <>
    <section className="hero" id="inicio">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className="container hero-content">
        <span className="eyebrow light">Usucapião · Imóveis urbanos e rurais</span>
        <h1>Você tem um imóvel <em>a partir de R$ 150 mil</em> sem regularização?</h1>
        <p>{site.hero.description}</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#analise">{site.hero.cta}<ArrowRight /></a>
          <a className="text-link light-link" href="#situacoes">Entender minha situação <ArrowDown /></a>
        </div>
        <div className="hero-values" aria-label="Perfil de atendimento">
          <span>A partir de R$ 150 mil</span><i /><span>Imóveis urbanos e rurais</span><i /><span>Atendimento em Goiás</span>
        </div>
      </div>
      <div className="hero-side-note"><ShieldCheck /><span>Análise jurídica<br />individualizada</span></div>
    </section>

    <section className="situations section-pad" id="situacoes">
      <div className="container">
        <div className="section-heading split-heading">
          <div><span className="eyebrow">Diagnóstico inicial</span><h2>Qual é a situação<br />do seu imóvel?</h2></div>
          <p>Se você ocupa um imóvel há anos e precisa entender como regularizar essa situação, o primeiro passo é analisar o histórico da posse, os documentos disponíveis e as características do bem.</p>
        </div>
        <div className="situation-grid">
          {site.situations.map((item, index) => <article className="situation-card" key={item.title}>
            <div className="card-top"><span className="card-index">0{index + 1}</span><span className="value-tag">{item.value}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#analise">{item.cta}<ArrowRight /></a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="patrimony" id="avaliacao">
      <div className="container patrimony-grid">
        <div className="patrimony-copy">
          <span className="eyebrow light">Patrimônio e segurança jurídica</span>
          <h2>Você pode estar deixando um patrimônio importante <em>sem regularização.</em></h2>
          <p>A falta de documentação pode gerar insegurança na hora de vender, transferir, organizar o patrimônio ou comprovar formalmente a propriedade.</p>
          <p>Se você ocupa o imóvel há anos, é importante entender se existem elementos que permitam avaliar a regularização por usucapião.</p>
          <a className="button button-gold" href="#analise">Quero analisar meu imóvel<ArrowRight /></a>
        </div>
        <div className="assessment-card">
          <div className="assessment-icon"><FileCheck2 /></div>
          <span className="eyebrow">O que precisamos entender</span>
          <div className="assessment-list">{site.assessment.map((item) => <div key={item}><span><Check /></span>{item}</div>)}</div>
          <small>Essas informações ajudam a direcionar a avaliação inicial. Outros documentos ou esclarecimentos podem ser solicitados conforme o caso.</small>
        </div>
      </div>
    </section>

    <section className="process section-pad" id="processo">
      <div className="container">
        <div className="section-heading centered-heading"><span className="eyebrow">Passo a passo</span><h2>Como funciona a análise</h2><p>Um processo claro para você compreender a situação do imóvel e os caminhos que podem ser avaliados.</p></div>
        <div className="process-grid">{site.process.map((item, index) => <article key={item.title}>
          <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="step-icon">{index === 0 ? <Home /> : index === 1 ? <ScrollText /> : <ShieldCheck />}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>)}</div>
        <div className="center-action"><a className="button button-navy" href="#analise">Solicitar análise<ArrowRight /></a></div>
      </div>
    </section>

    <section className="office" id="escritorio">
      <div className="container office-grid">
        <div className="office-panel">
          <img className="office-logo" src={fullLogo} alt="Marco Advocacia" />
          <small>Goiânia · Goiás</small>
          <div className="office-lines"><i /><i /><i /></div>
          <p>Imóveis urbanos<br /><em>e rurais</em></p>
        </div>
        <div className="office-copy">
          <span className="eyebrow">Sobre o escritório</span>
          <h2>Atuação jurídica em questões <em>imobiliárias e patrimoniais.</em></h2>
          <p>Atuação voltada à análise de situações envolvendo posse, documentação e regularização de imóveis.</p>
          <p>Nos casos de usucapião, o atendimento considera o histórico da posse, o valor e as características do imóvel, os documentos disponíveis e as particularidades de cada situação.</p>
          <p>O objetivo é oferecer orientação jurídica clara sobre os requisitos e os caminhos que podem ser avaliados para a regularização do patrimônio.</p>
          <div className="office-badges"><span><Building2 /> Presencial em Goiânia</span><span><MessageCircle /> Atendimento on-line</span></div>
        </div>
      </div>
      <div className="container team-wrap">
        <div className="team-heading"><span className="eyebrow">Equipe</span><h3>Profissionais que estarão ao seu lado.</h3></div>
        <div className="team-grid">{site.team.map((person) => <article key={person.name}>
          <span className="person-initials">{person.initials}</span>
          <div><h4>{person.name}</h4><p>{person.role}</p><small>{person.credential}</small></div>
        </article>)}</div>
      </div>
    </section>

    <section className="analysis" id="analise">
      <div className="container analysis-grid">
        <div className="analysis-copy">
          <span className="eyebrow light">Análise individualizada</span>
          <h2>Seu imóvel vale a partir de R$ 150 mil?</h2>
          <p>Não deixe um patrimônio de valor relevante permanecer sem entender sua situação jurídica e documental.</p>
          <p>Conte o valor aproximado do imóvel e as características da sua posse para uma análise inicial.</p>
          <div className="privacy-note"><ShieldCheck /><span><strong>Contato confidencial</strong><small>As informações são usadas apenas para o atendimento solicitado.</small></span></div>
        </div>
        <form className="analysis-form" onSubmit={handleAnalysisSubmit}>
          <div className="form-intro"><span>Comece por aqui</span><h3>Conte sobre o seu imóvel</h3><p>Leva aproximadamente 2 minutos.</p></div>
          <div className="form-grid">
            <label>Seu nome<input name="nome" type="text" autoComplete="name" required placeholder="Nome completo" /></label>
            <label>Telefone/WhatsApp<input name="contato" type="tel" autoComplete="tel" required placeholder="(00) 00000-0000" /></label>
            <label>Valor aproximado<select name="valor" required defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>R$ 150 mil a R$ 300 mil</option><option>R$ 300 mil a R$ 500 mil</option><option>R$ 500 mil a R$ 1 milhão</option><option>Acima de R$ 1 milhão</option></select></label>
            <label>Tipo do imóvel<select name="tipo" required defaultValue=""><option value="" disabled>Selecione</option><option>Urbano</option><option>Rural</option><option>Não sei informar</option></select></label>
            <label>Tempo de posse<input name="posse" type="text" required placeholder="Ex.: 12 anos" /></label>
            <label>Tem documentos?<select name="documentos" required defaultValue=""><option value="" disabled>Selecione</option><option>Sim</option><option>Tenho alguns</option><option>Não tenho</option><option>Não sei</option></select></label>
            <label className="full">Como o imóvel foi adquirido ou ocupado?<input name="origem" type="text" placeholder="Ex.: contrato de gaveta, herança, cessão..." /></label>
            <label className="full">Existem outros envolvidos?<input name="envolvidos" type="text" placeholder="Ex.: herdeiros, antigo proprietário, confrontantes..." /></label>
            <label className="full">Detalhes adicionais<textarea name="detalhes" rows="3" placeholder="Conte o que considera importante sobre o imóvel e a posse." /></label>
          </div>
          <button className="button button-gold full-button" type="submit">Quero analisar meu imóvel<ArrowRight /></button>
          <small className="form-legal">{site.contact.hasWhatsapp ? "Ao enviar, uma conversa será aberta no WhatsApp para você revisar a mensagem." : "Ao enviar, seu aplicativo de e-mail será aberto com as informações preenchidas para você revisar antes do envio."}</small>
        </form>
      </div>
    </section>

    <section className="faq section-pad" id="duvidas">
      <div className="container faq-grid">
        <div className="faq-heading"><span className="eyebrow">Dúvidas frequentes</span><h2>Informação clara antes de cada decisão.</h2><p>As respostas são gerais e não substituem a análise das particularidades do imóvel e da posse.</p><a className="text-link" href="#analise">Analisar minha situação<ArrowRight /></a></div>
        <div className="faq-list">{site.faqs.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i>+</i></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>

    <section className="location" id="contato">
      <div className="container location-grid">
        <div className="location-copy">
          <span className="eyebrow light">Informações finais</span>
          <h2>Atendimento presencial e on-line.</h2>
          <p>Fale com a equipe ou visite o escritório em Goiânia, mediante agendamento.</p>
          <div className="contact-list">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small>{site.contact.phoneLabel}</span></a>
            <a href={`mailto:${site.contact.email}`}><Mail /><span><small>E-mail</small>{site.contact.email}</span></a>
            <a href={site.contact.instagram} target="_blank" rel="noreferrer"><Instagram /><span><small>Instagram</small>{site.contact.instagramLabel}</span></a>
            <span><Clock3 /><span><small>Horário</small>{site.office.hours}</span></span>
            <span><MapPin /><span><small>Endereço</small>{site.office.address}</span></span>
          </div>
          <a className="button button-outline" href={mapsUrl} target="_blank" rel="noreferrer">Abrir rota no Google Maps<ArrowRight /></a>
        </div>
        <div className="map-frame"><iframe title="Localização da Marco Advocacia" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>

    <a
      className="whatsapp-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conversar no WhatsApp: ${site.contact.phoneLabel}`}
      title="Conversar no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  </>;
}
