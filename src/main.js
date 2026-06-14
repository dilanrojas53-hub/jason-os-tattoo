import './style.css';

const ASSET = 'https://jasontattoo-epqigkb5.manus.space/images';
const WHATSAPP = 'https://wa.me/50660153126?text=Hola%20Jason,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20agendar%20una%20cita.';

const portfolio = [
  ['portfolio-new-1.jpg', 'Retrato egipcio en realismo', 'Realismo'],
  ['portfolio-new-2.jpg', 'Pierna geométrica completa', 'Geometría'],
  ['portfolio-new-3.jpg', 'Manga geométrica floral', 'Geometría'],
  ['portfolio-new-4.jpg', 'Buda en realismo', 'Realismo'],
  ['portfolio-new-5.jpg', 'León guerrero', 'Realismo'],
  ['portfolio-new-6.jpg', 'Retrato de Medusa', 'Realismo'],
  ['portfolio-new-7.jpg', 'León oriental detallado', 'Realismo'],
  ['portfolio-new-8.jpg', 'Ojo realista', 'Realismo'],
  ['portfolio-1.jpg', 'Ángel guerrero', 'Realismo']
];

const studio = [
  ['video', 'studio/video-1.mp4', 'studio/studio-1.jpg'],
  ['image', 'studio/studio-1.jpg'],
  ['video', 'studio/video-2.mp4', 'studio/studio-2.jpg'],
  ['image', 'studio/studio-2.jpg'],
  ['video', 'studio/video-3.mp4'],
  ['video', 'studio/video-4.mp4'],
  ['video', 'studio/video-5.mp4'],
  ['video', 'studio/video-6.mp4']
];

const icon = (name) => {
  const icons = {
    menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.5 0 .7.6 1.1 1.5 2 2.6 2.6.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.3-.7 1.8-.6.6-1.4.8-2.2.6-1-.2-2.3-.7-4-2.2-1.2-1.1-2.1-2.4-2.6-3.5-.5-1.1-.5-1.9-.2-2.5Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5M11 8v6M8 11h6"/></svg>'
  };
  return icons[name] || '';
};

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="nav" id="nav">
    <a class="brand" href="#hero" aria-label="Ir al inicio">
      <img src="${ASSET}/logo-jason-os.jpg" alt="Logo Jason OS Tattoo" />
      <span>JASON OS <b>TATTOO</b></span>
    </a>
    <nav class="nav-links" aria-label="Navegación principal">
      <a href="#hero">Inicio</a><a href="#portfolio">Portafolio</a><a href="#styles">Estilos</a><a href="#booking">Citas</a><a href="#location">Ubicación</a><a href="#contact">Contacto</a>
      <a class="btn btn-outline small" href="${WHATSAPP}" target="_blank" rel="noreferrer">Cotizar</a>
    </nav>
    <button class="menu-btn" id="menuBtn" aria-label="Abrir menú">${icon('menu')}</button>
  </header>

  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-close" id="mobileClose" aria-label="Cerrar menú">${icon('close')}</button>
    <img src="${ASSET}/logo-jason-os.jpg" alt="Jason OS Tattoo" />
    <a href="#hero">Inicio</a><a href="#portfolio">Portafolio</a><a href="#styles">Estilos</a><a href="#booking">Citas</a><a href="#location">Ubicación</a><a href="#contact">Contacto</a>
    <a class="btn" href="${WHATSAPP}" target="_blank" rel="noreferrer">Agendar cita</a>
  </div>

  <main>
    <section class="hero" id="hero">
      <img class="hero-bg" src="${ASSET}/portfolio-1.jpg" alt="Tatuaje de ángel guerrero" />
      <div class="hero-shade"></div>
      <div class="hero-content reveal visible">
        <span class="gold-line"></span>
        <p class="eyebrow">Arte permanente · San José, Costa Rica</p>
        <h1>JASON OS <em>TATTOO</em></h1>
        <p class="hero-sub">REALISMO · LÍNEA FINA · GEOMETRÍA</p>
        <div class="hero-actions">
          <a class="btn" href="${WHATSAPP}" target="_blank" rel="noreferrer">Cotizar ahora</a>
          <a class="btn btn-ghost" href="#portfolio">Ver galería</a>
        </div>
      </div>
      <a class="scroll" href="#portfolio"><span></span>Scroll</a>
    </section>

    <section class="section" id="portfolio">
      <div class="heading reveal"><p class="eyebrow">Trabajos recientes</p><h2>PORTAFOLIO <em>SELECTO</em></h2><span class="gold-line"></span><p>Una colección curada de trabajos en realismo, línea fina y geometría.</p></div>
      <div class="portfolio-grid">
        ${portfolio.map(([file, alt, category], i) => `
          <button class="portfolio-card reveal" style="--delay:${i * 45}ms" data-image="${ASSET}/${file}" aria-label="Ampliar ${alt}">
            <img src="${ASSET}/${file}" alt="${alt}" loading="lazy" />
            <span class="card-overlay">${icon('zoom')}<b>${category}</b></span>
          </button>`).join('')}
      </div>
      <div class="center-cta reveal"><h3>¿Te gustó este estilo? Cotizá tu tatuaje.</h3><a class="btn whatsapp" href="${WHATSAPP}" target="_blank" rel="noreferrer">${icon('whatsapp')} Agendar por WhatsApp</a></div>
    </section>

    <section class="section alt" id="styles">
      <div class="heading reveal"><p class="eyebrow">Especialidades</p><h2>ESTILOS & <em>TÉCNICA</em></h2><span class="gold-line"></span></div>
      <div class="style-grid">
        <article class="style-card reveal"><span class="style-number">01</span><h3>Realismo</h3><p>Retratos, animales y composiciones con profundidad, contraste y un nivel de detalle fotográfico.</p><a href="https://wa.me/50660153126?text=Hola%20Jason,%20quiero%20cotizar%20un%20tatuaje%20estilo%20Realismo." target="_blank" rel="noreferrer">Cotizar realismo ${icon('arrow')}</a></article>
        <article class="style-card reveal"><span class="style-number">02</span><h3>Línea Fina</h3><p>Trazos sutiles, precisos y elegantes para diseños minimalistas que exigen técnica y pulso firme.</p><a href="https://wa.me/50660153126?text=Hola%20Jason,%20quiero%20cotizar%20un%20tatuaje%20estilo%20L%C3%ADnea%20Fina." target="_blank" rel="noreferrer">Cotizar línea fina ${icon('arrow')}</a></article>
        <article class="style-card reveal"><span class="style-number">03</span><h3>Geometría</h3><p>Patrones, mandalas y formas estructurales diseñadas para fluir con la anatomía del cuerpo.</p><a href="https://wa.me/50660153126?text=Hola%20Jason,%20quiero%20cotizar%20un%20tatuaje%20estilo%20Geometr%C3%ADa." target="_blank" rel="noreferrer">Cotizar geometría ${icon('arrow')}</a></article>
      </div>
    </section>

    <section class="section booking" id="booking">
      <div class="booking-copy reveal"><p class="eyebrow">Proceso sencillo</p><h2>AGENDA TU <em>SESIÓN</em></h2><p>Contame tu idea por WhatsApp. Con referencias, zona y tamaño aproximado puedo orientarte y preparar una cotización.</p><a class="btn whatsapp" href="${WHATSAPP}" target="_blank" rel="noreferrer">${icon('whatsapp')} Iniciar cotización</a></div>
      <ol class="steps">
        <li class="reveal"><b>01</b><div><h3>Idea o referencia</h3><p>Enviá imágenes de referencia y describí el concepto que tenés en mente.</p></div></li>
        <li class="reveal"><b>02</b><div><h3>Tamaño y zona</h3><p>Indicá dónde irá el tatuaje y el tamaño aproximado en centímetros.</p></div></li>
        <li class="reveal"><b>03</b><div><h3>Fecha y cotización</h3><p>Recibí la cotización y coordiná la fecha ideal para tu sesión.</p></div></li>
      </ol>
    </section>

    <section class="section alt" id="location">
      <div class="heading reveal"><p class="eyebrow">Visitanos</p><h2>UBICACIÓN & <em>ESTUDIO</em></h2><span class="gold-line"></span></div>
      <div class="location-grid reveal">
        <iframe title="Ubicación de House Tattoo CR" src="https://www.google.com/maps?q=House+Tattoo+CR,San+Pedro,Costa+Rica&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="location-info">${icon('pin')}<p class="eyebrow">House Tattoo CR</p><h3>San Pedro,<br />San José, Costa Rica</h3><a class="btn btn-outline" href="https://maps.app.goo.gl/EYQKyBqJjhS6hUX76?g_st=ic" target="_blank" rel="noreferrer">Abrir en Google Maps</a></div>
      </div>
      <div class="studio-head reveal"><h3>EL <em>ESTUDIO</em></h3><p>Un espacio profesional preparado para trabajar con comodidad, higiene y atención personalizada.</p></div>
      <div class="studio-row">
        ${studio.map(([type, file, poster], i) => type === 'video' ? `<video class="reveal" src="${ASSET}/${file}" ${poster ? `poster="${ASSET}/${poster}"` : ''} muted loop playsinline controls preload="metadata" aria-label="Video del estudio ${i + 1}"></video>` : `<img class="reveal" src="${ASSET}/${file}" alt="Interior del estudio" loading="lazy" />`).join('')}
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="footer-grid">
      <div class="footer-brand"><img src="${ASSET}/logo-jason-os.jpg" alt="Jason OS Tattoo" /><div><h3>JASON OS</h3><p>Tattoo Artist</p></div><span>Especialista en realismo, línea fina y geometría. Transformando ideas en arte permanente.</span></div>
      <div><p class="eyebrow">Ubicación & contacto</p><h4>San José, Costa Rica</h4><div class="socials"><a href="https://www.instagram.com/jason_os_tattoo?igsh=MWY2enFkd3drZDd4YQ==" target="_blank" rel="noreferrer" aria-label="Instagram">${icon('instagram')}</a><a href="https://www.facebook.com/share/171EXo9bFn/?mibextid=wwXlfr" target="_blank" rel="noreferrer" aria-label="Facebook">${icon('facebook')}</a></div></div>
      <div><p class="eyebrow">Horario</p><h4>Lunes a domingo</h4><p>10:00 a.m. – 7:00 p.m.</p><small>Atención únicamente con cita previa.</small></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Jason OS Tattoo. Todos los derechos reservados.</span><span>Powered by <b>Digital Atlas</b></span></div>
  </footer>

  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada"><button id="lightboxClose" aria-label="Cerrar imagen">${icon('close')}</button><img id="lightboxImage" alt="Tatuaje ampliado" /></div>
  <a class="floating-wa" href="${WHATSAPP}" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">${icon('whatsapp')}</a>
`;

const menu = document.querySelector('#mobileMenu');
document.querySelector('#menuBtn').addEventListener('click', () => menu.classList.add('open'));
document.querySelector('#mobileClose').addEventListener('click', () => menu.classList.remove('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

const nav = document.querySelector('#nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
document.querySelectorAll('.portfolio-card').forEach(card => card.addEventListener('click', () => {
  lightboxImage.src = card.dataset.image;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}));
const closeLightbox = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
document.querySelector('#lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
