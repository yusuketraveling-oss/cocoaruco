'use client'

import { useState } from 'react'
import Link from 'next/link'

type InquiryType =
  | 'service-consultation'
  | 'media-press'
  | 'business-partnership'
  | 'other'

const INQUIRY_TYPES: { value: InquiryType; label: string }[] = [
  { value: 'service-consultation', label: 'サービス利用のご相談' },
  { value: 'media-press', label: '取材・メディア対応' },
  { value: 'business-partnership', label: '業務提携のご相談' },
  { value: 'other', label: 'その他' },
]

type FormState = {
  name: string
  email: string
  inquiryType: InquiryType | ''
  message: string
  privacyAgreed: boolean
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  inquiryType: '',
  message: '',
  privacyAgreed: false,
}

const inputClasses =
  'w-full px-3.5 py-2.5 rounded-md border border-border-subtle bg-bg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors'

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    if (!form.name || !form.email || !form.inquiryType || !form.message || !form.privacyAgreed) {
      setStatus('error')
      setErrorMessage('すべての項目をご入力のうえ、プライバシーポリシーにご同意ください。')
      return
    }

    setSubmitting(true)
    setStatus('idle')

    try {
      // TODO: API Route / Supabase 実装後に差し替え
      console.log('Contact inquiry:', {
        name: form.name,
        email: form.email,
        inquiryType: form.inquiryType,
        message: form.message,
      })
      await new Promise((resolve) => setTimeout(resolve, 600))

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
      <div className="rounded-lg bg-surface border border-border-subtle p-8 text-center">
        <p className="text-base font-medium text-text-primary mb-3">
          お問い合わせを受け付けました
        </p>
        <p className="text-sm text-text-primary leading-relaxed mb-6">
          内容を確認のうえ、担当よりご連絡いたします。
          <br />
          通常、3営業日以内にご返信いたしますが、内容によってはお時間をいただくことがあります。
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-xs font-medium text-primary hover:text-primary-hover underline-offset-2 hover:underline"
        >
          別のお問い合わせをする
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* お名前 */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          お名前
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <input
          id="contact-name"
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
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          メールアドレス
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          placeholder="例：hanako@example.com"
          className={inputClasses}
        />
      </div>

      {/* ご用件 */}
      <div>
        <label
          htmlFor="contact-type"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          ご用件
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <select
          id="contact-type"
          value={form.inquiryType}
          onChange={(e) => setForm({ ...form, inquiryType: e.target.value as InquiryType })}
          required
          className={inputClasses}
        >
          <option value="">選択してください</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* ご質問・ご相談内容 */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          ご質問・ご相談内容
          <span className="text-xs text-text-secondary font-normal ml-1.5">必須</span>
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={6}
          placeholder="ご質問やご相談の内容を、お気軽にお書きください。"
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
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              プライバシーポリシー
            </Link>
            の内容に同意します。
          </span>
        </label>
      </div>

      {/* エラーメッセージ */}
      {status === 'error' && (
        <div className="rounded-md bg-danger-bg border border-danger/20 p-3.5">
          <p className="text-xs text-text-primary leading-relaxed">{errorMessage}</p>
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-3.5 rounded-md bg-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? '送信中...' : 'お問い合わせを送信する'}
      </button>

      <p className="text-[10px] text-text-muted leading-relaxed">
        いただいたご連絡内容は、ご返信目的のみに利用し、第三者への提供は行いません。
      </p>
    </form>
  )
}
