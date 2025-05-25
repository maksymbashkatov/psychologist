import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, question } = await request.json();

  if (!name || !email || !question) {
    return NextResponse.json(
      { message: 'Все поля обязательны' },
      { status: 400 }
    );
  }

  // Чтение SMTP-конфига из .env
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `Новая заявка от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nВопрос: ${question}`,
    });
    return NextResponse.json({ message: 'Отправлено' });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json(
      { message: 'Ошибка при отправке' },
      { status: 500 }
    );
  }
}