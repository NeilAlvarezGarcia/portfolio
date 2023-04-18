import nodemailer, { TransportOptions } from "nodemailer";

interface Options {
  subject: string;
  html: string;
}

export async function sendMail(options: Options) {
  let transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  } as TransportOptions);

  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL,
    ...options,
  });
}
