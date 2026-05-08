'use client'

import { useState } from 'react'
import Link from 'next/link'

type JobPosition = 'leader' | 'sitter' | 'driver'

const JOB_POSITIONS: { value: JobPosition; label: string }[] = [
  { value: 'leader', label: 'リーダー候補（正社員）' },
  { value: 'sitter', label: 'ペットシッター（業務委託）' },
  { value: 'driver', label: 'ペット送迎ドライバー（アルバイト・正社員）' },
]

type FormState = {
  name: string
  email: string
  phone: string
  positions: JobPosition[]
  background: string
  questions: string
  privacyAgreed: boolean
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  positions: [],
  background: '',
  questions: '',
  privacyAgreed: false,
}

const inputClasses =
  'w-full px-3.5 py-2.5 rounded-md border border-recruit bg-recruit-base text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-[var(--color-recruit-accent)] transition-colors'

export function RecruitForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const togglePosition = (position: JobPosition) => {
    setForm((prev) => ({
      ...prev,
      positions: prev.positions.includes(position)
        ? prev.positions.filter((p) => p !== position)
        : [...prev.positions, position],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    if (!form.name || !form.email || !form.phone || form.positions.length === 0 || !form.background || !form.privacyAgreed) {
      setStatus('error')
      setErrorMessage('必須項目をご入力のうえ、プライバシーポリシーにご同意ください。')
      return
    }

    setSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/recruit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          positions: form.positions,
          background: form.background,
          questions: form.questions,
        }),
      })

      if (!response.ok) throw new Error('送信に失敗しました')

      setStatus('success')
      setForm(INITIAL_STATE)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('送信中にエラーが発生しました。しばらく経ってから、再度お試しください。')
    } finally {
      setSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-recruit-base border border-recruit p-8 text-center">
        <p className="text-base font-medium text-text-primary mb-3">
          ご応募ありがとうございました
        </p>
        <p className="text-sm text-text-primary leading-relaxed mb-6">
          内容を確認のうえ、採用担当よりご連絡いたします。
          <br />
          通常、1週間以内にご返信いたしますが、選考状況によってはお時間をいただくことがあります。
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-xs font-medium text-recruit-accent hover:opacity-70 underline-offset-2 hover:underline"
        >
          別の応募をする
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* お名前 */}
      <div>
        <label htmlFor="recruit-name" className="block text-sm font-medium text-text-primary mb-1.5">
          お名前
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <input
          id="recruit-name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          placeholder="例：山田 花子"
          className={inputClasses}
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="recruit-email" className="block text-sm font-medium text-text-primary mb-1.5">
          メールアドレス
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <input
          id="recruit-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          placeholder="例：hanako@example.com"
          className={inputClasses}
        />
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="recruit-phone" className="block text-sm font-medium text-text-primary mb-1.5">
          電話番号
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <input
          id="recruit-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          placeholder="例：090-1234-5678"
          className={inputClasses}
        />
      </div>

      {/* ご希望職種 */}
      <div>
        <p className="block text-sm font-medium text-text-primary mb-2">
          ご希望職種
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須・複数選択可</span>
        </p>
        <div className="space-y-2.5">
          {JOB_POSITIONS.map((pos) => (
            <label
              key={pos.value}
              className="flex items-start gap-2.5 cursor-pointer p-3 rounded-md border border-recruit bg-recruit-base hover:bg-recruit-surface transition-colors"
            >
              <input
                type="checkbox"
                checked={form.positions.includes(pos.value)}
                onChange={() => togglePosition(pos.value)}
                className="mt-0.5 shrink-0"
              />
              <span className="text-sm text-text-primary leading-relaxed">{pos.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 経歴・自己紹介 */}
      <div>
        <label htmlFor="recruit-background" className="block text-sm font-medium text-text-primary mb-1.5">
          経歴・自己紹介
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <textarea
          id="recruit-background"
          value={form.background}
          onChange={(e) => setForm({ ...form, background: e.target.value })}
          required
          rows={6}
          placeholder="これまでのお仕事のご経験や、ペットとの関わり、自己PRなどをお聞かせください。"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* ご質問・ご要望 */}
      <div>
        <label htmlFor="recruit-questions" className="block text-sm font-medium text-text-primary mb-1.5">
          ご質問・ご要望
          <span className="text-xs text-text-secondary font-normal ml-1.5">任意</span>
        </label>
        <textarea
          id="recruit-questions"
          value={form.questions}
          onChange={(e) => setForm({ ...form, questions: e.target.value })}
          rows={4}
          placeholder="ご質問やご要望があれば、お気軽にお書きください。"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* プライバシーポリシー同意 */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.privacyAgreed}
            onChange={(e) => setForm({ ...form, privacyAgreed: e.target.checked })}
            required
            className="mt-0.5 shrink-0"
          />
          <span className="text-xs text-text-primary leading-relaxed">
            <Link
              href="/policy/privacy"
              target="_blank"
              className="text-recruit-accent underline underline-offset-2 hover:opacity-70"
            >
              プライバシーポリシー
            </Link>
            の内容に同意します。
          </span>
        </label>
      </div>

      {/* エラーメッセージ */}
      {status === 'error' && (
        <div className="rounded-md bg-recruit-surface border border-recruit p-3.5">
          <p className="text-xs text-text-primary leading-relaxed">{errorMessage}</p>
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-3.5 rounded-md text-sm font-medium tracking-wide text-white transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--color-recruit-accent)' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-recruit-accent-hover)' }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-recruit-accent)' }}
      >
        {submitting ? '送信中...' : '応募を送信する'}
      </button>
    </form>
  )
}
