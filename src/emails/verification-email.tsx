import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";

interface EmailVerificationProps {
  userName: string;
  userEmail: string;
  verificationUrl: string;
}

const EmailVerification = (props: EmailVerificationProps) => {
  const {
    verificationUrl = "https://example.com/verify",
    userEmail = "clayton_hq@icloud.com",
    userName = "John Doe",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          Verify your email address to complete your account setup
        </Preview>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px]">
            {/* Company Logo */}
            <Section className="mb-[32px] text-center">
              <Img
                src="https://new.email/static/app/placeholder.png"
                alt="Company Logo"
                width="120"
                height="40"
                className="mx-auto h-auto w-full max-w-[120px] object-cover"
              />
            </Section>
            {/* Header */}
            <Section className="mb-[32px] text-center">
              <Heading className="m-0 mb-[8px] text-[28px] font-bold text-gray-900">
                Verify Your Email Address
              </Heading>
              {/* <Text className="m-0 text-[16px] text-gray-600">
                We need to verify your email address to complete your account
                setup
              </Text> */}
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                Hi {userName},
              </Text>
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                Thanks for signing up! To complete your account setup and start
                using our application, please verify your email address by
                clicking the button below.
              </Text>
              {/* <Text className="m-0 mb-[24px] text-[16px] text-gray-700">
                Email to verify: <strong>{userEmail}</strong>
              </Text> */}
            </Section>

            {/* Verification Button */}
            <Section className="mb-[32px] text-center">
              <Button
                href={verificationUrl}
                className="box-border rounded-[8px] bg-blue-600 px-[32px] py-[16px] text-[16px] font-semibold text-white no-underline hover:bg-blue-700"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="m-0 mb-[8px] text-[14px] text-gray-600">
                If the button doesn&apos;t work, you can copy and paste this
                link into your browser:
              </Text>
              <Text className="m-0 text-[14px] break-all text-blue-600">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="mb-[32px] rounded-[8px] bg-gray-50 p-[16px]">
              <Text className="m-0 mb-[8px] text-[14px] font-semibold text-gray-700">
                Security Notice:
              </Text>
              <Text className="m-0 text-[14px] text-gray-600">
                This verification link will expire in 24 hours. If you
                didn&apos;t create an account, please ignore this email or
                contact our support team.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="m-0 mb-[8px] text-center text-[12px] text-gray-500">
                This email was sent to {userEmail}
              </Text>
              {/* <Text className="m-0 mb-[8px] text-center text-[12px] text-gray-500">
                123 Business Street, London, UK SW1A 1AA
              </Text> */}
              <Text className="m-0 text-center text-[12px] text-gray-500">
                © 2026 claytonhq.co.uk. All rights reserved.
                {/* <a href="#" className="ml-[4px] text-gray-500 underline">
                  Unsubscribe
                </a> */}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailVerification.PreviewProps = {
  userName: "John",
  userEmail: "clayton_hq@icloud.com",
  verificationUrl: "https://example.com/verify?token=abc123xyz789",
};

export default EmailVerification;
