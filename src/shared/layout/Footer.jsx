import { templateConfig as site } from "../../config/template.config";
import fullLogo from "../../assets/logo.png";

export function Footer() {
  return <footer>
    <div className="container footer-main">
      <div className="footer-brand">
        <img className="footer-logo" src={fullLogo} alt="Marco Advocacia" />
      </div>
      <div className="footer-links"><a href="#situacoes">Situação do imóvel</a><a href="#processo">Como funciona</a><a href="#escritorio">Escritório</a><a href="#duvidas">Dúvidas frequentes</a></div>
      <div className="footer-contact"><a href={site.contact.hasWhatsapp ? `https://wa.me/${site.contact.whatsapp}` : "#analise"} target={site.contact.hasWhatsapp ? "_blank" : undefined} rel={site.contact.hasWhatsapp ? "noreferrer" : undefined}>WhatsApp {site.contact.phoneLabel}</a><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><a href={site.contact.instagram} target="_blank" rel="noreferrer">{site.contact.instagramLabel}</a><span>{site.office.city}</span></div>
    </div>
    <div className="container footer-legal">
      <span>© {new Date().getFullYear()} Marco Advocacia.</span>
      <p>Conteúdo de caráter informativo. A análise jurídica depende das particularidades de cada caso. A possibilidade de reconhecimento de usucapião depende do preenchimento dos requisitos legais e da análise do caso concreto.</p>
    </div>
    <a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a>
  </footer>;
}
