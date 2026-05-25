import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email(),
  inquiryType: z.string().min(1),
  message: z.string().min(10),
  privacy: z.literal(true),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation failed', issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // ----------------------------------------------------------------
  // TODO: 실제 메일 발송 / DB 저장 로직을 여기에 연결하세요.
  //
  // 추천 통합: Resend (https://resend.com)
  //
  //   const { Resend } = require('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: '문의 <noreply@lawfirmyijun.com>',
  //     to: process.env.CONTACT_EMAIL!,
  //     subject: `[홈페이지] ${parsed.data.inquiryType} 상담 신청 - ${parsed.data.name}`,
  //     text: JSON.stringify(parsed.data, null, 2),
  //   });
  //
  // EmailJS, SendGrid, Nodemailer 등도 동일한 자리에서 호출하면 됩니다.
  // ----------------------------------------------------------------

  // 현재 placeholder: 콘솔로만 로깅하고 200 응답
  console.log('[contact] submission received', parsed.data);

  return NextResponse.json({ ok: true });
}
