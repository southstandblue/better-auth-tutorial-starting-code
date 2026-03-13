import EmailVerification from "@/emails/verification-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailValues {
  to: string;
  subject: string;
  text?: string;
  name?: string;
  url?: string;
}

export async function sendVerificationEmail({
  to,
  subject,
  name,
  url,
}: SendEmailValues) {
  await resend.emails.send({
    from: "noreply@contact.claytonhq.co.uk",
    to,
    subject,
    react: EmailVerification({
      userName: name || "New User",
      userEmail: to,
      verificationUrl: url || "No Link Available - resend the email",
    }),
  });
}

export async function sendEmail({ to, subject, name, url }: SendEmailValues) {
  await resend.emails.send({
    from: "noreply@contact.claytonhq.co.uk",
    to,
    subject,
    react: EmailVerification({
      userName: name || "New User",
      userEmail: to,
      verificationUrl: url || "No Link Available - resend the email",
    }),
  });
}
