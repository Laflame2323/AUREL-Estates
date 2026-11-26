import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, MapPin, MoveUpRight, Sparkles } from "lucide-react";


type Property = {
  id: number;
  name: string;
  place: string;
  type: "Villas" | "Penthouses" | "Residences";
  price: string;
  beds: string;
  area: string;
  code: string;
  description: string;
};

const properties: Property[] = [
  { id: 1, name: "The Solenne House", place: "Ibiza, Spain", type: "Villas", price: "€4.8M", beds: "5 bedrooms", area: "640 m²", code: "AE / 001", description: "A sculptural coastal residence where limestone, glass and quiet courtyards frame the Mediterranean horizon." },
  { id: 2, name: "Maison Élan", place: "Côte d’Azur, France", type: "Penthouses", price: "€3.2M", beds: "4 bedrooms", area: "310 m²", code: "AE / 014", description: "A private rooftop sanctuary with panoramic sea views, considered materials and a seamless indoor-outdoor plan." },
  { id: 3, name: "Casa Altura", place: "Comporta, Portugal", type: "Residences", price: "€2.6M", beds: "3 bedrooms", area: "285 m²", code: "AE / 027", description: "A low-slung retreat set within pine and dune landscapes, designed around light, texture and stillness." },
];

function AurelHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Property | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const visibleProperties = useMemo(() => filter === "All" ? properties : properties.filter((item) => item.type === filter), [filter]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-seen");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="aurel-site">
      <header className="aurel-nav">
        <a href="#top" className="aurel-brand" aria-label="Aurel Estates home"><span className="brand-mark">A.</span><span>AUREL <i>ESTATES</i></span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#philosophy" onClick={closeMenu}>Our philosophy</a><a href="#collection" onClick={closeMenu}>The collection</a><a href="#approach" onClick={closeMenu}>Our approach</a>
          <a className="nav-mobile-cta" href="#enquire" onClick={closeMenu}>Private enquiries <ArrowUpRight size={15}/></a>
        </nav>
        <a className="nav-cta" href="#enquire">Private enquiries <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-topline"><span>INDEPENDENT PROPERTY ADVISORY</span><span>EST. MMXXIV&nbsp;&nbsp; / &nbsp;&nbsp;GLOBAL</span></div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> A MORE CONSIDERED WAY TO LIVE</p>
          <h1><span className="title-line">The art of</span><span className="title-line title-indent"> <em>arrival.</em></span></h1>
          <div className="hero-bottom-copy"><p>Exceptional homes. Distinctive places.<br/>A life shaped around what matters.</p><a href="#collection" className="round-link" aria-label="Explore residences"><ArrowDown size={20}/></a></div>
        </div>
        <div className="hero-photo-credit">AUREL ESTATES · ARCHITECTURE & LIVING</div>
        <div className="hero-side-note">A PRIVATE WORLD, BEAUTIFULLY FOUND <span>↘</span></div>
        <div className="hero-index"><span>01</span><span className="index-rule"/><span>06</span></div>
      </section>

      <section className="intro-section" id="philosophy">
        <div className="section-kicker" data-reveal><span>01</span><span>THE AUREL POINT OF VIEW</span></div>
        <div className="intro-grid">
          <h2 data-reveal>Not simply a place.<br/><em>A point of view.</em></h2>
          <div className="intro-text" data-reveal><p className="large-copy">We believe the right home does more than occupy a beautiful address. It changes the way a day unfolds, the way a place feels, the way a life is lived.</p><p>Our world is a considered collection of architecture-led residences, selected for their character, setting and enduring sense of place.</p><a className="text-link" href="#approach">Discover our philosophy <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="intro-foot"><span>CURATED WITH INTENTION</span><span>LESS, BUT EXCEPTIONAL</span></div>
      </section>

      <section className="collection-section" id="collection">
        <div className="collection-heading" data-reveal><div><p className="eyebrow">02 / THE COLLECTION</p><h2>Places with<br/><em>a presence.</em></h2></div><p className="collection-note">A small selection of residences<br/>with a story worth discovering.</p></div>
        <div className="filter-row" aria-label="Filter residences">{["All", "Villas", "Penthouses", "Residences"].map((item) => <button key={item} className={filter === item ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? "03" : String(properties.filter((p) => p.type === item).length).padStart(2,"0")}</span></button>)}</div>
        <div className="property-grid">
          {visibleProperties.map((property, index) => <article className={`property-card property-card-${property.id}`} key={property.id} data-reveal>
            <button className="property-visual" onClick={() => setSelected(property)} aria-label={`View ${property.name}`}>
              <div className={`property-art property-art-${property.id}`} role="img" aria-label={`Architectural photograph for ${property.name}`} />
              <span className="property-code">{property.code}</span><span className="property-open"><ArrowUpRight size={18}/></span>
            </button>
            <div className="property-meta"><div><span className="property-place"><MapPin size={12}/>{property.place}</span><h3>{property.name}</h3></div><span className="property-price">{property.price}</span></div>
            <div className="property-specs"><span>{property.type}</span><span>{property.beds}</span><span>{property.area}</span></div>
          </article>)}
        </div>
        <div className="collection-footer"><span>SHOWING {String(visibleProperties.length).padStart(2,"0")} OF 03 CONCEPT RESIDENCES</span><span>ALL LISTINGS ARE ILLUSTRATIVE CONCEPTS</span></div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-art" data-reveal><div className="approach-arch" role="img" aria-label="Contemporary residence framed by landscape and water"/><span className="approach-stamp">AUREL<br/>FIELD NOTES<br/>№ 001</span></div>
        <div className="approach-copy" data-reveal><p className="eyebrow">03 / THE AUREL APPROACH</p><h2>Good taste<br/>is knowing<br/><em>what feels right.</em></h2><p>We look beyond the listing. We pay attention to proportion, natural light, material honesty and the quiet details that make a residence feel unmistakably its own.</p><a className="text-link" href="#enquire">Begin a conversation <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="enquire-section" id="enquire">
        <div className="enquire-top"><p className="eyebrow">04 / PRIVATE ENQUIRIES</p><span>THE FIRST STEP IS A CONVERSATION.</span></div>
        <div className="enquire-grid"><h2 data-reveal>Find your<br/><em>somewhere.</em></h2><div className="enquire-form-wrap" data-reveal>
          {submitted ? <div className="form-success"><Sparkles size={24}/><h3>A thoughtful first step.</h3><p>Your concept enquiry has been recorded in this preview. Connect a real inbox or CRM before accepting client enquiries.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={16}/></button></div> : <form className="enquire-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <label>Your name<input name="name" required placeholder="Full name" autoComplete="name"/></label>
            <label>Email address<input name="email" type="email" required placeholder="you@example.com" autoComplete="email"/></label>
            <label>What are you looking for?<select name="interest" defaultValue=""><option value="" disabled>Select an interest</option><option>Buying a residence</option><option>Property advisory</option><option>Something else</option></select></label>
            <button className="submit-cta" type="submit"><span>Send an enquiry</span><span className="submit-arrow"><ArrowUpRight size={18}/></span></button>
            <p className="form-note">Your details are treated with discretion. This concept form does not transmit data.</p>
          </form>}
        </div></div>
      </section>

      <footer className="aurel-footer"><a href="#top" className="footer-brand">AUREL <i>ESTATES</i><span>®</span></a><p>Exceptional places.<br/>A more considered life.</p><div className="footer-bottom"><span>© 2026 AUREL ESTATES · CONCEPT BRAND</span><a href="#top">BACK TO THE TOP ↑</a><span>DESIGNED WITH INTENTION</span></div></footer>

      {selected && <div className="property-modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="property-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details"><X/></button><p className="eyebrow">{selected.code} / CONCEPT RESIDENCE</p><h2 id="modal-title">{selected.name}</h2><p className="modal-place"><MapPin size={14}/>{selected.place}</p><p>{selected.description}</p><div className="modal-facts"><span>{selected.price}</span><span>{selected.beds}</span><span>{selected.area}</span></div><a className="submit-cta modal-cta" href="#enquire" onClick={() => setSelected(null)}><span>Enquire about this residence</span><span className="submit-arrow"><MoveUpRight size={18}/></span></a><small>Illustrative portfolio concept. Not an active property listing.</small></section></div>}
    </main>
  );
}

export default AurelHome;
