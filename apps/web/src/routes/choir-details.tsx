import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

import { useLanguage } from '../components/language-provider'
import { Button } from '../components/ui/button'
import { choirContent } from '../content/choir'

export const Route = createFileRoute('/choir-details')({ component: ChoirDetails })

function ChoirDetails() {
  const { language } = useLanguage()
  const content = choirContent[language]

  return (
    <main className="public-page">
      <section className="choir-nav-bar">
        <div className="choir-nav-bar-inner">
          <Button asChild variant="ghost" size="sm" className="choir-back-btn">
            <a href="/choir">
              <ArrowLeft size={16} /> {content.childrensChoirPage.backAction}
            </a>
          </Button>
        </div>
      </section>

      <section className="public-title">
        <span className="eyebrow">{content.hero.eyebrow}</span>
        <h1>{content.hero.title}</h1>
        {content.hero.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="public-section">
        <div className="section-heading">
          <span className="eyebrow">{content.program.eyebrow}</span>
          <h2>{content.program.title}</h2>
        </div>
        <div className="section-copy text-column">
          {content.program.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="plain-list">
            {content.program.items.map((item) => (
              <div className="list-row" key={item}>
                <strong>{content.participation.title}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section tone-band">
        <div className="section-heading">
          <span className="eyebrow">{content.childrensChoir.eyebrow}</span>
          <h2>{content.childrensChoir.title}</h2>
        </div>
        <div className="section-copy text-column">
          {content.childrensChoir.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="plain-list">
            {content.childrensChoir.items.map((item) => (
              <div className="list-row" key={item}>
                <strong>{content.childrensChoir.title}</strong>
                <span>{item}</span>
              </div>
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
        <div className="choir-gallery-section">
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
    </main>
  )
}
