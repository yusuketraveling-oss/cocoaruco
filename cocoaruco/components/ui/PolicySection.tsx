import type { ReactNode } from 'react'

type PolicySectionProps = {
  id?: string
  title: string
  children: ReactNode
}

export function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <div id={id} className="scroll-mt-20">
      <h3 className="text-base font-medium text-text-primary mb-3 leading-snug tracking-tight">
        {title}
      </h3>
      <div className="text-sm text-text-primary leading-relaxed space-y-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_strong]:text-text-primary [&_strong]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-hover [&_h4]:text-sm [&_h4]:font-medium [&_h4]:text-text-primary [&_h4]:mt-4 [&_h4]:mb-2">
        {children}
      </div>
    </div>
  )
}
