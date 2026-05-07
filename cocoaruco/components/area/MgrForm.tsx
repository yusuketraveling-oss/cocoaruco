'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  petType: string
  petName: string
  petAge: string
  preferredDate: string
  message: string
}

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  petType: '',
  petName: '',
  petAge: '',
  preferredDate: '',
  message: '',
}

const inputClasses = `
  w-full px-4 py-3
  bg-surface
  border-[1.5px] border-border
  rounded-md
  text-base text-text-primary
  placeholder:text-text-muted
  focus:outline-none focus:border-primary
  transition-colors duration-150
`

const textareaClasses = `
  w-full px-4 py-3
  bg-surface
  border-[1.5px] border-border
  rounded-md
  text-base text-text-primary
  placeholder:text-text-muted
  focus:outline-none focus:border-primary
  transition-colors duration-150
  resize-none
`

type FormFieldProps = {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
}

function FormField({ label, name, required, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-text-secondary mb-1.5 tracking-wide"
      >
        {label}
        {required && (
          <span className="ml-1 text-danger text-xs">*</span>
        )}
      </label>
      {children}
    </div>
  )
}

export function MgrForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Meet & Greet 申込:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-success-bg border border-success/30 p-6">
        <h3 className="text-base font-medium text-success mb-2">
          お申し込みを受け付けました
        </h3>
        <p className="text-sm text-text-primary leading-relaxed">
          担当よりご連絡いたしますので、しばらくお待ちください。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* お客様情報 */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-medium text-text-primary mb-2">
          お客様情報
        </legend>

        <FormField label="お名前" name="name" required>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </FormField>

        <FormField label="メールアドレス" name="email" required>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </FormField>

        <FormField label="電話番号" name="phone" required>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </FormField>

        <FormField label="郵便番号" name="zipCode" required>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="123-4567"
            maxLength={8}
            required
            className={inputClasses}
          />
        </FormField>

        <FormField label="ご住所" name="address" required>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </FormField>
      </fieldset>

      {/* ペット情報 */}
      <fieldset className="space-y-4 pt-4 border-t border-border-subtle">
        <legend className="text-sm font-medium text-text-primary mb-2">
          ペット情報
        </legend>

        <FormField label="ペットの種類" name="petType" required>
          <select
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">選択してください</option>
            <option value="dog">犬</option>
            <option value="cat">猫</option>
            <option value="small">小動物（うさぎ・ハムスター等）</option>
            <option value="bird">鳥類</option>
            <option value="fish">観賞魚</option>
            <option value="other">その他</option>
          </select>
        </FormField>

        <FormField label="ペットのお名前" name="petName" required>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </FormField>

        <FormField label="年齢" name="petAge">
          <input
            type="text"
            id="petAge"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            placeholder="例：3歳"
            className={inputClasses}
          />
        </FormField>
      </fieldset>

      {/* ご希望日時 */}
      <fieldset className="space-y-4 pt-4 border-t border-border-subtle">
        <legend className="text-sm font-medium text-text-primary mb-2">
          Meet &amp; Greet ご希望日時
        </legend>

        <FormField label="ご希望日（候補）" name="preferredDate">
          <input
            type="text"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            placeholder="例：5月10日（土）午前"
            className={inputClasses}
          />
        </FormField>

        <FormField label="その他、お気軽にご記入ください" name="message">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="ペットの性格、健康面で気になること、ご質問など"
            className={textareaClasses}
          />
        </FormField>
      </fieldset>

      {/* 送信ボタン */}
      <div className="pt-4">
        <button
          type="submit"
          className="
            w-full min-h-[52px] px-6
            inline-flex items-center justify-center
            bg-primary text-text-inverse
            rounded-md
            text-base font-medium tracking-wide
            transition-colors duration-150
            hover:bg-primary-hover
          "
        >
          お申し込み内容を確認する
        </button>
      </div>

      <p className="text-[10px] text-text-muted leading-relaxed">
        ※ Meet &amp; Greet（事前面談）は3,300円（税込）です。後日のサービス利用と同じ締め日にまとめて決済されます。
      </p>
    </form>
  )
}
