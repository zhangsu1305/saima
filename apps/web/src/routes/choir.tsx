import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CalendarDays, CheckCircle2, HeartHandshake, MapPin, Music2, Sparkles, Users } from 'lucide-react'

import { useLanguage } from '../components/language-provider'
import { Button } from '../components/ui/button'
import { choirContent } from '../content/choir'
import { siteImages } from '../content/shared'

export const Route = createFileRoute('/choir')({ component: Choir })

function Choir() {
  const { language } = useLanguage()
  const content = choirContent[language]

  return (
    <main className="public-page">
      {/* Hero Section */}
      <section className="choir-hero">
        <img src={siteImages.choirHall} alt="" aria-hidden="true" />
        <div>
          <span className="eyebrow">{content.hero.eyebrow}</span>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.paragraphs[0]}</p>
          <div className="actions">
            <Button asChild>
              <a href="/choir-children">
                <Sparkles size={16} /> {content.programsOverview.childrensChoir.action}
              </a>
            </Button>
            <Button asChild variant="outline" className="choir-anchor-btn">
              <a href="#parent-child-choir">
                <Users size={16} /> {content.programsOverview.parentChild.title}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#join">
                {content.hero.action} <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Program Navigation */}
      <nav className="choir-subnav" aria-label={content.labels.jumpToSection}>
        <div className="choir-subnav-inner">
          <span className="eyebrow">{content.labels.jumpToSection}</span>
          <div className="choir-subnav-links">
            <a className="choir-subnav-pill" href="#programs-overview">
              <Music2 size={15} aria-hidden="true" />
              {content.programsOverview.title}
            </a>
            <a className="choir-subnav-pill" href="#parent-child-choir">
              <HeartHandshake size={15} aria-hidden="true" />
              {content.programsOverview.parentChild.title}
            </a>
            <a className="choir-subnav-pill highlight" href="/choir-children">
              <Sparkles size={15} aria-hidden="true" />
              {content.programsOverview.childrensChoir.title}
            </a>
          </div>
        </div>
      </nav>

      {/* Programs Overview: Clear Presentation of the Two Programs */}
      <section className="public-section choir-programs-overview-section" id="programs-overview">
        <div className="section-heading text-center">
          <span className="eyebrow">{content.hero.eyebrow}</span>
          <h2>{content.programsOverview.title}</h2>
          <p className="section-subtitle">{content.programsOverview.subtitle}</p>
        </div>

        <div className="choir-programs-grid">
          {/* Program 1: Parent-Child Choir */}
          <article className="choir-program-card parent-child-card">
            <div className="choir-program-card-badge">
              <HeartHandshake size={18} aria-hidden="true" />
              <span>{content.programsOverview.parentChild.eyebrow}</span>
            </div>
            <h3 className="choir-program-card-title">{content.programsOverview.parentChild.title}</h3>
            <p className="choir-program-card-summary">{content.programsOverview.parentChild.summary}</p>

            <ul className="choir-program-card-features">
              {content.programsOverview.parentChild.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="choir-program-card-actions">
              <Button asChild variant="outline">
                <a href={content.programsOverview.parentChild.actionHref}>
                  {content.programsOverview.parentChild.action} <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </article>

          {/* Program 2: SAIMA Children's Choir */}
          <article className="choir-program-card childrens-choir-card featured">
            <div className="choir-program-card-badge accent">
              <Sparkles size={18} aria-hidden="true" />
              <span>{content.programsOverview.childrensChoir.eyebrow}</span>
            </div>
            <h3 className="choir-program-card-title">{content.programsOverview.childrensChoir.title}</h3>
            <p className="choir-program-card-summary">{content.programsOverview.childrensChoir.summary}</p>

            <ul className="choir-program-card-features">
              {content.programsOverview.childrensChoir.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="choir-program-card-actions">
              <Button asChild>
                <a href={content.programsOverview.childrensChoir.actionHref}>
                  {content.programsOverview.childrensChoir.action} <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Program 1 Detail: Parent-Child Choir (Preserved existing information & registration details) */}
      <section className="public-section editorial-split" id="parent-child-choir">
        <div className="section-copy">
          <span className="eyebrow">{content.program.eyebrow}</span>
          <h2>{content.program.title}</h2>
          {content.program.paragraphs.slice(0, 3).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="check-list">
            {content.program.items.map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} aria-hidden="true" /> {item}
              </p>
            ))}
          </div>
          <div className="actions">
            <Button asChild variant="outline">
              <a href="/choir-details">
                {content.detailsAction} <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild>
              <a href="#join">
                {content.hero.action} <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
        <div className="program-note">
          <Music2 size={44} aria-hidden="true" />
          <h3>{content.participation.title}</h3>
          <p>{content.participation.text}</p>
        </div>
      </section>

      {/* Program 2 Teaser & Gateway to Dedicated Children's Choir Page */}
      <section className="public-section tone-band" id="childrens-choir">
        <div className="editorial-split">
          <div className="section-copy">
            <span className="eyebrow">{content.childrensChoir.eyebrow}</span>
            <h2>{content.childrensChoir.title}</h2>
            {content.childrensChoir.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="check-list">
              {content.childrensChoir.items.map((item) => (
                <p key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" /> {item}
                </p>
              ))}
            </div>
            <div className="actions" style={{ marginTop: '24px' }}>
              <Button asChild>
                <a href="/choir-children">
                  <Sparkles size={16} /> {content.programsOverview.childrensChoir.action} <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
          <div className="program-note">
            <Sparkles size={44} aria-hidden="true" />
            <span className="eyebrow">{content.childrensChoir.highlight.eyebrow}</span>
            <h3>{content.childrensChoir.highlight.title}</h3>
            <p>{content.childrensChoir.highlight.text}</p>
            <div style={{ marginTop: '16px' }}>
              <Button asChild variant="outline">
                <a href="/choir-children#performances">
                  {language === 'en' ? 'View Performances & Gallery' : '查看演出实况与图集'} <ArrowRight size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="choir-gallery-section">
          <div className="section-heading">
            <span className="eyebrow">{content.childrensChoir.eyebrow}</span>
            <h3>{content.childrensChoir.galleryTitle}</h3>
          </div>
          <div className="choir-photo-grid">
            {content.childrensChoir.gallery.map((photo) => (
              <figure className="choir-photo-card" key={photo.url}>
                <div className="choir-photo-frame">
                  <img src={photo.url} alt={photo.caption} loading="lazy" />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="public-section dark-feature">
        <div>
          <span className="eyebrow">{content.upcoming.eyebrow}</span>
          <h2>{content.upcoming.title}</h2>
          <p>{content.program.paragraphs[4]}</p>
        </div>
      </section>

      <section className="public-section event-preview">
        <div>
          <span className="eyebrow">{content.upcoming.eyebrow}</span>
          <h2>{content.upcoming.title}</h2>
        </div>
        <div className="plain-list">
          {content.upcoming.rows.map((row, index) => (
            <div className="list-row" key={row.label}>
              <strong>
                {index === 0 ? <CalendarDays size={18} aria-hidden="true" /> : <MapPin size={18} aria-hidden="true" />}
                {row.label}
              </strong>
              <span>{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Registration & Contact CTA */}
      <section className="public-section cta-panel" id="join">
        <div>
          <h2>{content.cta.title}</h2>
          <p>{content.cta.text}</p>
          <Button asChild>
            <a href="/contact">{content.cta.action}</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
