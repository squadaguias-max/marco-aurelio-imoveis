import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoClaro from "../../assets/logo-claro.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const close = () => setOpen(false);

  return <header className={`site-header${scrolled ? " scrolled" : ""}`}>
    <div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="Marco Advocacia — início" onClick={close}>
        <img className="brand-logo" src={logoClaro} alt="Marco Advocacia" />
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
        <a href="#situacoes" onClick={close}>Seu imóvel</a>
        <a href="#processo" onClick={close}>Como funciona</a>
        <a href="#escritorio" onClick={close}>Escritório</a>
        <a href="#duvidas" onClick={close}>Dúvidas</a>
        <a className="nav-cta" href="#analise" onClick={close}>Analisar imóvel <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}
