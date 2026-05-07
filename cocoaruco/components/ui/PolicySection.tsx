import type { ReactNode } from 'react'

type PolicySectionProps = {
  id?: string
  title: string
  children: ReactNode
}

export function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-base md:text-lg font-bold text-brand-navy mb-4 leading-snug tracking-wide">
        {title}
      </h3>
      <div className="text-sm md:text-base text-text-primary leading-loose space-y-4 [&_p]:leading-loose [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_strong]:text-brand-navy [&_strong]:font-bold [&_a]:text-sitter-main [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-sitter-earth">
        {children}
      </div>
    </div>
  )
}
