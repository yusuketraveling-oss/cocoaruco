import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, positions, background, questions } = body

    if (!name || !email || !phone || !positions || positions.length === 0 || !background) {
      return NextResponse.json(
        { error: '必要な項目が不足しています' },
        { status: 400 },
      )
    }

    // TODO: Supabase 実装後に差し替え
    // const { error } = await supabase
    //   .from('recruit_applications')
    //   .insert([{ name, email, phone, positions, background, questions: questions || null }])
    // if (error) throw error

    // TODO: メール通知実装後に差し替え
    // await sendNotificationEmail({ name, email, positions, background })
    // await sendAutoReplyEmail({ name, email })

    console.log('Recruit application:', { name, email, phone, positions, background, questions })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Recruit form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 },
    )
  }
}
