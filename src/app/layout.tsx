import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://personiks.com'),
  title: 'Personiks - Best Cosmetic Surgery & Skin Treatments in Hyderabad',
  description:
    'Personiks offers advanced cosmetic procedures including Hymenoplasty, Liposuction, Breast Implants, Rhinoplasty, Otoplasty, Hair Fall treatments and skin care solutions in Hyderabad.',
  keywords:
    'Hymenoplasty, Urinary Incontinence, Otoplasty, Rhinoplasty, Liposuction, High-definition liposuction, Breast reduction, Breast implants, Breast enhancement, Hair fall treatments, Skin treatments, cosmetic surgery Hyderabad',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://personiks.com',
    siteName: 'Personiks',
    title: 'Personiks - Cosmetic & Medical Clinic Hyderabad',
    description: 'Advanced cosmetic and medical treatments at Personiks Clinic',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Personiks Clinic',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000]`}
      >
        {children}
      </body>
    </html>
  );
}
