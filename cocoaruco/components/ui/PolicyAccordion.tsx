'use client'

import { useState } from 'react'
import { Plus, Minus, CaretDown, CaretUp } from '@phosphor-icons/react'

type PolicyAccordionProps = {
  number: string
  title: string
  description: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export default function PolicyAccordion({
  number,
  title,
  description,
  defaultOpen = false,
  children,
}: PolicyAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={`rounded-2xl border border-sitter-main/10 transition-colors duration-200 ${
        isOpen ? 'bg-sitter-main/[0.03]' : 'bg-white'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 rounded-2xl transition-colors duration-200 ${
          isOpen ? '' : 'hover:bg-sitter-main/[0.03]'
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-xs tracking-widest text-sitter-accent font-bold">{number}</span>
          <span className="text-base md:text-lg font-bold text-brand-navy">{title}</span>
          <span className="text-sm text-text-primary/60 leading-relaxed">{description}</span>
        </div>
        <div className="shrink-0 mt-1 text-sitter-main">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="pt-5 border-t border-sitter-main/10 text-sm text-text-primary leading-loose">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── サブアコーディオン（ネスト用） ───────────────────────────

type PolicySubAccordionProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export function PolicySubAccordion({
  title,
  defaultOpen = false,
  children,
}: PolicySubAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-l-2 border-sitter-accent/40 pl-4 my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between gap-4 py-2"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-bold text-brand-navy">{title}</span>
        <div className="shrink-0 text-sitter-main">
          {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </div>
      </button>

      {isOpen && (
        <div className="py-3 text-sm text-text-primary leading-loose">
          {children}
        </div>
      )}
    </div>
  )
}
