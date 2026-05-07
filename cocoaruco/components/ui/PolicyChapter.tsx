import type { ReactNode } from 'react'

type ChapterTocItem = {
  id: string
  label: string
}

type PolicyChapterProps = {
  number: string
  id: string
  title: string
  lead?: string
  toc?: ChapterTocItem[]
  children: ReactNode
}

export function PolicyChapter({
  number,
  id,
  title,
  lead,
  toc,
  children,
}: PolicyChapterProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 py-10 border-t border-border-subtle first:border-t-0 first:pt-0"
    >
      <div className="mb-6">
        <p className="text-xs font-medium text-text-secondary tracking-wider mb-2">
          {number}
        </p>
        <h2 className="text-lg font-medium text-text-primary leading-tight tracking-tight">
          {title}
        </h2>
        {lead && (
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            {lead}
          </p>
        )}
      </div>

      {toc && toc.length >= 3 && (
        <nav
          aria-label={`${title}の目次`}
          className="mb-8 p-4 rounded-lg bg-surface border border-border-subtle"
        >
          <p className="text-[10px] font-medium tracking-wider text-text-muted uppercase mb-2">
            この章の目次
          </p>
          <ul className="space-y-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-text-primary hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-sm bg-primary/60" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="space-y-5">{children}</div>
    </section>
  )
}
