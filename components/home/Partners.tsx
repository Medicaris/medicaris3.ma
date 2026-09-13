'use client'

import { useT } from '@/lib/i18n/LocaleContext'
import { Reveal } from '@/components/motion/Reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup'
import { PARTNERS } from '@/lib/partners'

export function Partners() {
  const t = useT()

  return (
    <section id="partenaires" className="bg-paper-alt py-18">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
            {t('Partenaires industriels', 'Industrial partners')}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t('Une large gamme, en relation directe', 'A broad range, sourced directly')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t(
              "Medicaris travaille sans intermédiaire avec les fabricants de ses équipements. Cette relation directe conditionne le prix, les délais d'approvisionnement en consommables et la rapidité du support technique.",
              'Medicaris works directly with the manufacturers of its equipment. That direct relationship drives pricing, consumable lead times and the speed of technical support.'
            )}
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PARTNERS.map((partner) => (
            <StaggerItem
              key={partner.name}
              className="flex min-h-[104px] flex-col items-center justify-center rounded-2xl border border-line bg-paper px-4 py-6 text-center shadow-card transition-shadow hover:shadow-lift"
            >
              <span className="text-lg font-semibold tracking-tight text-navy">{partner.name}</span>
              {partner.noteFr && partner.noteEn && (
                <span className="mt-1.5 text-xs leading-snug text-muted">{t(partner.noteFr, partner.noteEn)}</span>
              )}
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-10 text-center text-sm text-muted">
          {t(
            'Gammes complètes, références et fiches techniques communiquées sur demande.',
            'Full product lines, references and technical datasheets provided on request.'
          )}
        </p>
        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-paper"
          >
            {t('Nous contacter pour en savoir plus', 'Contact us to learn more')}
          </a>
        </div>
      </div>
    </section>
  )
}
