import { useEffect, useState } from 'react'
import { siteConfig, isSet } from './siteConfig.js'
import logo720 from './assets/blendzwitdom-logo-720.webp'
import logo480 from './assets/blendzwitdom-logo-480.webp'
import logoJpg from './assets/blendzwitdom-logo-720.jpg'
import logoMark from './assets/blendzwitdom-mark-96.webp'
import './App.css'

const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'hours', label: 'Hours' },
  { id: 'contact', label: 'Contact' },
]

/** Link that opens externally when set, or renders as a disabled pill when still '#'. */
function SmartLink({ href, children, className = '', ...rest }) {
  if (!isSet(href)) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title="Coming soon">
        {children}
      </span>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        d="M6.6 3h3l1.5 4.5-2.1 1.4a12 12 0 0 0 6.1 6.1l1.4-2.1L21 14.4v3A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3Z"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9Z" fill="currentColor" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function RatingBadge({ className = '' }) {
  const { rating } = siteConfig
  return (
    <SmartLink href={rating.url} className={`rating-badge ${className}`}>
      <StarIcon />
      <strong>{rating.score}</strong>
      <span>
        ({rating.count} reviews on {rating.source})
      </span>
    </SmartLink>
  )
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8.1 8.1 20 20M8.1 15.9 20 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, id }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <span className="drip" aria-hidden="true" />
    </header>
  )
}

function BookButton({ className = '' }) {
  const { booking } = siteConfig
  return (
    <SmartLink href={booking.url} className={`btn btn-primary ${className}`}>
      {booking.label}
    </SmartLink>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" width="40" height="40" className="brand-mark" />
          <span className="brand-name">{siteConfig.brand.name}</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <BookButton className="btn-sm" />
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const { brand, contact } = siteConfig
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="smoke" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{brand.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {brand.name}
            <span className="crown" aria-hidden="true">♛</span>
          </h1>
          <p className="hero-tagline">{brand.tagline}</p>
          <p className="hero-intro">{brand.intro}</p>
          <div className="hero-actions">
            <BookButton />
            <a href="#services" className="btn btn-ghost">
              View services
            </a>
          </div>
          <div className="hero-meta">
            <RatingBadge />
            <SmartLink href={contact.instagram.url} className="hero-social">
              <InstagramIcon /> {contact.instagram.handle}
            </SmartLink>
          </div>
        </div>
        <div className="hero-art">
          <div className="logo-ring">
            <picture>
              <source type="image/webp" srcSet={`${logo480} 480w, ${logo720} 720w`} sizes="(max-width: 860px) 78vw, 440px" />
              <img
                src={logoJpg}
                alt="Blendzwitdom logo: a barber giving a client a fresh cut, with the Blendzwitdom crown script"
                width="720"
                height="720"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" aria-labelledby="services-title" id="services">
      <div className="container">
        <SectionHeading eyebrow="The menu" title="Services & Prices" id="services-title" />
        <ul className="services-grid">
          {siteConfig.services.map((s, i) => (
            <li className="service-card" key={i}>
              <div className="service-top">
                <h3>{s.name}</h3>
                <span className="price">{s.price}</span>
              </div>
              {s.description && <p className="service-desc">{s.description}</p>}
              {s.note && <p className="service-note">{s.note}</p>}
              <p className="service-meta">
                <ScissorsIcon /> {s.duration}
              </p>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <BookButton />
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const { gallery, galleryMoreUrl } = siteConfig
  return (
    <section className="section section-alt" aria-labelledby="gallery-title" id="gallery">
      <div className="container">
        <SectionHeading eyebrow="Fresh off the chair" title="Gallery" id="gallery-title" />
        <ul className="gallery-grid">
          {gallery.map((g) => (
            <li key={g.caption} className="gallery-tile">
              <figure>
                <picture>
                  {g.webp && <source type="image/webp" srcSet={g.webp} />}
                  <img src={g.image} alt={g.alt} width="750" height="1000" loading="lazy" decoding="async" />
                </picture>
                <figcaption className="gallery-caption">{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <SmartLink href={galleryMoreUrl} className="btn btn-ghost">
            <InstagramIcon /> See more on Instagram
          </SmartLink>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { barber } = siteConfig
  return (
    <section className="section" aria-labelledby="about-title" id="about">
      <div className="container about-grid">
        <div className="about-badge" aria-hidden="true">
          <img src={logo480} alt="" width="480" height="480" loading="lazy" />
        </div>
        <div>
          <SectionHeading eyebrow="Meet the barber" title={barber.name} id="about-title" />
          <p className="about-title">{barber.title}</p>
          {barber.bio.map((p, i) => (
            <p className="about-bio" key={i}>
              {p}
            </p>
          ))}
          <dl className="facts">
            {barber.facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const { reviews, rating } = siteConfig
  if (!reviews.length) return null
  return (
    <section className="section section-alt" aria-labelledby="reviews-title" id="reviews">
      <div className="container">
        <div className="reviews-head">
          <SectionHeading eyebrow="What clients say" title="Reviews" id="reviews-title" />
          <RatingBadge className="rating-badge-lg" />
        </div>
        <ul className="reviews-grid">
          {reviews.map((r) => (
            <li key={r.name}>
              <figure className="review-card">
                <div className="review-stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption>
                  {r.name} <span>via {rating.source}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Hours() {
  const { hours, location } = siteConfig
  return (
    <section className="section" aria-labelledby="hours-title" id="hours">
      <div className="container">
        <SectionHeading eyebrow="Pull up" title="Hours & Location" id="hours-title" />
        <div className="hours-grid">
          <div className="panel">
            <h3 className="panel-title">Hours</h3>
            <dl className="hours-list">
              {hours.map((h) => (
                <div className="hours-row" key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="panel panel-location">
            <h3 className="panel-title">Location</h3>
            <address>
              <PinIcon />
              <span>
                <strong>{location.shopName}</strong>
                <br />
                {location.address}
                <br />
                {location.city}
              </span>
            </address>
            <SmartLink href={location.mapUrl} className="btn btn-ghost">
              Get directions
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { contact, booking } = siteConfig
  const cards = [
    { label: booking.platform, value: contact.booksy.display, href: contact.booksy.url, Icon: CalendarIcon, hint: 'Book online' },
    { label: 'Instagram', value: contact.instagram.handle, href: contact.instagram.url, Icon: InstagramIcon, hint: 'Send a DM' },
    { label: 'Phone', value: contact.phone.display, href: contact.phone.url, Icon: PhoneIcon, hint: 'Call or text' },
    { label: 'Email', value: contact.email.display, href: contact.email.url, Icon: MailIcon, hint: 'Send a message' },
  ]
  return (
    <section className="section contact" aria-labelledby="contact-title" id="contact">
      <div className="container">
        <SectionHeading eyebrow="Lock in your spot" title="Book a Cut" id="contact-title" />
        <p className="contact-note">{booking.note}</p>
        <ul className="contact-grid">
          {cards.filter((c) => isSet(c.href)).map(({ label, value, href, Icon, hint }) => (
            <li key={label}>
              <SmartLink href={href} className="contact-card">
                <Icon />
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
                <span className="contact-hint">{hint}</span>
              </SmartLink>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <BookButton />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { brand, contact } = siteConfig
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="brand">
          <img src={logoMark} alt="" width="36" height="36" className="brand-mark" loading="lazy" />
          <span className="brand-name">{brand.name}</span>
        </a>
        <p className="footer-tag">{brand.tagline}</p>
        <SmartLink href={contact.instagram.url} className="footer-social" aria-label={`Instagram ${contact.instagram.handle}`}>
          <InstagramIcon /> {contact.instagram.handle}
        </SmartLink>
        <p className="footer-copy">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
