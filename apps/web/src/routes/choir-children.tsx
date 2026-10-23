import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Globe2,
  Mic2,
  Music2,
  Sparkles,
} from 'lucide-react'

import { useLanguage } from '../components/language-provider'
import { Button } from '../components/ui/button'
import { choirContent } from '../content/choir'

export const Route = createFileRoute('/choir-children')({ component: ChoirChildren })

const pillarIcons = {
  'musical-development': BookOpen,
  'vocal-training': Mic2,
  'performance-opportunities': Award,
  'cultural-diversity': Globe2,
} as const

function ChoirChildren() {
  const { language } = useLanguage()
  const content = choirContent[language]
  const page = content.childrensChoirPage

  return (
    <main className="public-page choir-children-page">
      {/* Top Breadcrumb / Back Button */}
      <section className="choir-nav-bar">
        <div className="choir-nav-bar-inner">
          <Button asChild variant="ghost" size="sm" className="choir-back-btn">
            <a href="/choir">
              <ArrowLeft size={16} /> {page.backAction}
            </a>
          </Button>
          <div className="choir-nav-quicklinks">
            <a href="#about" className="choir-quicklink-pill">
              {content.labels.aboutProgram}
            </a>
            <a href="#performances" className="choir-quicklink-pill">
              <Sparkles size={14} /> {page.performancesTitle}
            </a>
            <a href="#audition" className="choir-quicklink-pill highlight">
              {page.cta.action}
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="choir-children-hero">
        <div className="choir-children-hero-media">
          <img
            src="/images/saima/choir-performances/20261016-stage.jpg"
            alt={page.title}
            className="choir-children-hero-img"
          />
          <div className="choir-children-hero-overlay" />
        </div>
        <div className="choir-children-hero-content">
          <span className="eyebrow choir-eyebrow-badge">{page.eyebrow}</span>
          <h1 className="choir-children-title">{page.title}</h1>
          <p className="choir-children-subtitle">{page.subtitle}</p>
          <p className="choir-children-lead">{page.lead}</p>
          <div className="actions">
            <Button asChild>
              <a href="#performances">
                <Sparkles size={18} /> {page.performancesTitle}
              </a>
            </Button>
            <Button asChild variant="outline" className="choir-hero-secondary-btn">
              <a href="#audition">
                {page.cta.action} <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction & Vision */}
      <section className="public-section tone-band choir-intro-section" id="about">
        <div className="editorial-split">
          <div className="section-copy">
            <span className="eyebrow">{page.intro.eyebrow}</span>
            <h2>{page.intro.title}</h2>
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="program-note choir-highlight-card">
            <Music2 size={44} aria-hidden="true" />
            <span className="eyebrow">{content.hero.eyebrow}</span>
            <h3>{page.pillarsTitle}</h3>
            <p>
              {language === 'en'
                ? 'We provide age-appropriate training covering ear training, vocal health, multi-part harmony, and regular concert stage opportunities across Adelaide.'
                : '我们在阿德莱德提供覆盖视唱练耳、科学嗓音保护、多声部合唱与高规格常态化舞台实践的专业少儿合唱教育。'}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="public-section choir-pillars-section">
        <div className="section-heading text-center">
          <span className="eyebrow">{page.pillarsEyebrow}</span>
          <h2>{page.pillarsTitle}</h2>
        </div>
        <div className="choir-pillars-grid">
          {page.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.key as keyof typeof pillarIcons] || Sparkles
            return (
              <div className="choir-pillar-card" key={pillar.key}>
                <div className="choir-pillar-icon-box">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Integrated Actual Performances */}
      <section className="public-section tone-band choir-performances-section" id="performances">
        <div className="section-heading">
          <span className="eyebrow">{page.performancesEyebrow}</span>
          <h2>{page.performancesTitle}</h2>
          <p className="section-subtitle">{page.performancesSubtitle}</p>
        </div>

        <div className="performances-list">
          {page.performances.map((perf, index) => (
            <article className="performance-block-card" key={perf.id}>
              <div className="performance-block-header">
                <div className="performance-badge-row">
                  <span className="performance-number-badge">
                    {language === 'en' ? `Showcase 0${index + 1}` : `精彩演出 0${index + 1}`}
                  </span>
                  <span className="performance-category-tag">{perf.eyebrow}</span>
                </div>
                <h3 className="performance-block-title">{perf.title}</h3>

                <div className="performance-meta-grid">
                  <div className="performance-meta-item">
                    <CalendarDays size={18} aria-hidden="true" />
                    <div>
                      <strong>{content.labels.dateAndVenue}</strong>
                      <span>
                        {perf.date} · {perf.venue}
                      </span>
                    </div>
                  </div>
                  <div className="performance-meta-item">
                    <Building2 size={18} aria-hidden="true" />
                    <div>
                      <strong>{content.labels.host}</strong>
                      <span>{perf.host}</span>
                    </div>
                  </div>
                  {perf.repertoire ? (
                    <div className="performance-meta-item repertoire-item">
                      <Music2 size={18} aria-hidden="true" />
                      <div>
                        <strong>{content.labels.repertoire}</strong>
                        <span className="repertoire-tag">{perf.repertoire}</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="performance-block-body">
                <div className="performance-descriptions">
                  {perf.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="performance-gallery">
                  <h4 className="performance-gallery-heading">
                    <Sparkles size={16} aria-hidden="true" /> {content.labels.performanceMoments}
                  </h4>
                  <div className={`choir-photo-grid photo-count-${perf.photos.length}`}>
                    {perf.photos.map((photo) => (
                      <figure className="choir-photo-card" key={photo.url}>
                        <div className="choir-photo-frame">
                          <img src={photo.url} alt={photo.caption} loading="lazy" />
                        </div>
                        <figcaption>{photo.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Audition & Enrollment CTA */}
      <section className="public-section cta-panel choir-audition-cta" id="audition">
        <div>
          <span className="eyebrow">{page.cta.eyebrow}</span>
          <h2>{page.cta.title}</h2>
          <p>{page.cta.text}</p>
          <div className="actions">
            <Button asChild>
              <a href="/contact">
                {page.cta.action} <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/choir">
                <ArrowLeft size={16} /> {page.backAction}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
