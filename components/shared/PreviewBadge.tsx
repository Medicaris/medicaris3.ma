'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { useT } from '@/lib/i18n/LocaleContext'
import { IS_PREVIEW } from '@/lib/preview'

export function PreviewBadge() {
  const t = useT()
  const [hidden, setHidden] = useState(false)

  if (!IS_PREVIEW || hidden) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 flex max-w-[calc(100vw-6rem)] items-center gap-2.5 rounded-full border border-line bg-paper/95 py-2 pl-4 pr-2 shadow-lift backdrop-blur">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--color-rf)' }} />
      <span className="text-xs font-semibold text-ink">
        {t('Préversion — pas le site en ligne', 'Preview — not the live site')}
      </span>
      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label={t('Masquer', 'Hide')}
        className="rounded-full p-1 text-muted transition-colors hover:bg-paper-alt hover:text-ink"
      >
        <X size={14} />
      </button>
    </div>
  )
}
