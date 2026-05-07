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
    <section id={id} className="scroll-mt-24 py-12 md:py-16 border-t border-sitter-main/10 first:border-t-0 first:pt-0">
      {/* 章ヘッダー */}
      <div className="mb-8 md:mb-10">
        <p className="text-xs tracking-widest text-sitter-accent font-bold mb-3">
          {number}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight tracking-wide">
          {title}
        </h2>
        {lead && (
          <p className="mt-4 text-sm md:text-base text-text-primary/70 leading-loose">
            {lead}
          </p>
        )}
      </div>

      {/* ミニ目次（3項目以上ある時のみ表示） */}
      {toc && toc.length >= 3 && (
        <nav aria-label={`${title}の目次`} className="mb-10 p-5 md:p-6 rounded-2xl bg-linen border border-sitter-main/10">
          <p className="text-[10px] tracking-widest text-sitter-accent font-bold mb-3 uppercase">
            この章の目次
          </p>
          <ul className="space-y-1.5">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-brand-navy hover:text-sitter-main transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-sitter-accent" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* 本文 */}
      <div className="space-y-6">{children}</div>
    </section>
  )
}
