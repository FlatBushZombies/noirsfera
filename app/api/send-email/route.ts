import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { from, name, subject, message } = await request.json()
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Update with your domain
      to: ['noirsfera@gmail.com'], // Update with your email
      subject: subject,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>From:</strong> ${name} (${from})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}