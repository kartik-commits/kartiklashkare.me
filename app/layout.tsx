import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lashkare Kartik',
  description: '21-year-old Mechanical Engineering student at DIT, Pune, with a minor in AI/ML. Passionate about Android development, cloud computing & web dev, and mechanical design. Experienced in coding, PR, outreach, and digital content creation.',
  keywords: 'AOSP Developer, Cloud Computing, AI&ML, Programming, Github & DevOps, Web Development, Mechanical Design',
  authors: [{ name: 'Lashkare Kartik' }],
  creator: 'Lashkare Kartik',
  publisher: 'Lashkare Kartik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kartiklashkare.me',
    title: 'Lashkare Kartik',
    description: 'Passionate problem solver creating exceptional digital experiences',
    siteName: 'Lashkare Kartik Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lashkare Kartik',
    description: 'Passionate problem solver creating exceptional digital experiences',
    creator: '@kartik_ane_nenu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
