'use client'

import Link from 'next/link'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'cocoaruco', href: '/' },
  { label: 'ペットシッター', href: '/petsitter' },
  { label: '会社概要', href: '/company' },
  { label: '採用情報', href: '/recruit' },
  { label: 'お問い合わせ', href: '/contact' },
]

export function BrandHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-corporate-navy font-medium text-base tracking-wide"
          >
            cocoaruco
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
            className="w-11 h-11 flex items-center justify-center text-text-primary"
          >
            {isMenuOpen ? (
              <X size={22} weight="regular" />
            ) : (
              <List size={22} weight="regular" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-14 bg-bg z-40">
          <nav className="max-w-[430px] mx-auto px-4 py-6">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-text-primary text-base hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
