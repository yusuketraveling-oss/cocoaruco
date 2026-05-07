import MgrForm from '@/components/area/MgrForm'

export default function MgrPage() {
  return (
    <div className="bg-linen min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-32">
        <div className="flex flex-col gap-4 mb-10">
          <h1
            className="font-bold text-navy"
            style={{ fontSize: '36px', lineHeight: '1.3', letterSpacing: '0.05em' }}
          >
            Meet &amp; Greet のご予約
          </h1>
          <p className="text-base text-sitter-sub leading-relaxed">
            はじめてのご利用前に、担当スタッフとの事前面談をお願いしています。<br />
            こちらのフォームで会員登録・スケジュールのご登録を行います。
          </p>
        </div>
        <MgrForm />
      </div>
    </div>
  )
}
