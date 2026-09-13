'use client'

import { useT } from '@/lib/i18n/LocaleContext'
import { Reveal } from '@/components/motion/Reveal'
import { MAP, HEX_NEUTRAL, HEX_COVERED, HEX_SOON, PRESENCE_CITIES } from '@/lib/presence-map'

const COVERED = PRESENCE_CITIES.filter((c) => c.status === 'covered')
const SOON = PRESENCE_CITIES.filter((c) => c.status === 'soon')

function HexLayer({ points, fill, opacity }: { points: readonly (readonly [number, number])[]; fill: string; opacity?: number }) {
  const unique = Array.from(new Map(points.map((p) => [`${p[0]}-${p[1]}`, p])).values())

  return (
    <g fill={fill} opacity={opacity}>
      {unique.map(([x, y]) => (
        <use key={`${x}-${y}`} href="#med-hex" x={x} y={y} />
      ))}
    </g>
  )
}

export function Presence() {
  const t = useT()

  return (
    <section id="presence" className="bg-paper py-18">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
            {t('Zones couvertes', 'Coverage')}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t('Où intervenons-nous ?', 'Where do we operate?')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t(
              "Nos équipes installent, forment et assurent le suivi technique sur l'ensemble du territoire. Les villes ci-dessous sont celles où des établissements travaillent déjà avec nous.",
              'Our teams install, train and provide technical follow-up nationwide. The cities below are those where institutions already work with us.'
            )}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-2xl border border-line bg-paper-alt p-7">
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 shrink-0 rounded-sm" style={{ background: 'var(--color-rf)' }} />
                <span className="text-xs font-semibold uppercase tracking-widest text-rf-ink">
                  {t('Déjà présents', 'Already present')}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {COVERED.map((city) => (
                  <li
                    key={city.name}
                    className="rounded-full bg-rf-soft px-3.5 py-1.5 text-sm font-medium text-rf-ink"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2.5">
                <span className="h-3 w-3 shrink-0 rounded-sm" style={{ background: 'var(--color-laser)' }} />
                <span className="text-xs font-semibold uppercase tracking-widest text-laser-ink">
                  {t('Prochaines ouvertures', 'Opening next')}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SOON.map((city) => (
                  <li
                    key={city.name}
                    className="rounded-full bg-laser-soft px-3.5 py-1.5 text-sm font-medium text-laser-ink"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                {t(
                  'Votre ville ne figure pas sur la carte ? Nous livrons et intervenons partout au Maroc.',
                  'Your city is not on the map? We deliver and operate throughout Morocco.'
                )}
              </p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-navy hover:underline">
                {t('Nous écrire +', 'Get in touch +')}
              </a>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <svg
              viewBox={`0 0 ${MAP.width} ${MAP.height}`}
              role="img"
              aria-label={t(
                'Carte du Maroc : villes couvertes et prochaines ouvertures',
                'Map of Morocco: cities covered and upcoming openings'
              )}
              className="h-auto w-full"
            >
              <defs>
                <path id="med-hex" d={MAP.hexPath} />
              </defs>

              <path
                d={MAP.outline}
                fill="none"
                stroke="var(--color-navy)"
                strokeWidth={1.4}
                strokeLinejoin="round"
                opacity={0.4}
              />

              <HexLayer points={HEX_NEUTRAL} fill="var(--color-navy)" opacity={0.14} />
              <HexLayer points={HEX_COVERED} fill="var(--color-rf)" />
              <HexLayer points={HEX_SOON} fill="var(--color-laser)" opacity={0.8} />

              {PRESENCE_CITIES.map((city) => (
                <g key={city.name}>
                  <circle cx={city.x} cy={city.y} r={2.6} fill="var(--color-navy-deep)" />
                  {/* Sous 640 px les libellés deviendraient illisibles : la liste
                      de gauche prend le relais. */}
                  <text
                    className="hidden sm:block"
                    x={city.labelX}
                    y={city.labelY}
                    textAnchor={city.anchor}
                    fontSize={15}
                    fontWeight={600}
                    fill="var(--color-ink)"
                    paintOrder="stroke"
                    stroke="var(--color-paper)"
                    strokeWidth={4}
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
