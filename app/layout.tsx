import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lashkare Kartik - Android Developer, ML Engineer & Mechanical Engineer',
    template: '%s | Lashkare Kartik'
  },
  description: '21-year-old Mechanical Engineering student at DIT, Pune, with a minor in AI/ML. Passionate about Android development, cloud computing & web dev, and mechanical design. Experienced in coding, PR, outreach, and digital content creation.',
  keywords: ['AOSP Developer', 'Android Development', 'Cloud Computing', 'AI/ML Engineer', 'Machine Learning', 'Programming', 'Github', 'DevOps', 'Web Development', 'Mechanical Design', 'Next.js', 'React', 'TypeScript', 'Portfolio', 'Pune'],
  authors: [{ name: 'Lashkare Kartik', url: 'https://kartiklashkare.me' }],
  creator: 'Lashkare Kartik',
  publisher: 'Lashkare Kartik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kartiklashkare.me'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kartiklashkare.me',
    title: 'Lashkare Kartik - Android Developer, ML Engineer & Mechanical Engineer',
    description: 'Multidisciplinary engineer specializing in AOSP development, AI/ML, cloud computing, and mechanical design. Building innovative solutions with 500+ active users.',
    siteName: 'Lashkare Kartik Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lashkare Kartik Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lashkare Kartik - Android Developer, ML Engineer & Mechanical Engineer',
    description: 'Multidisciplinary engineer specializing in AOSP development, AI/ML, cloud computing, and mechanical design.',
    creator: '@kartik_ane_nenu',
    images: ['/og-image.png']
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kartiklashkare.me',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lashkare Kartik',
    url: 'https://kartiklashkare.me',
    image: 'https://kartiklashkare.me/profile.jpg',
    sameAs: [
      'https://github.com/kartik-commits',
      'https://www.linkedin.com/in/kartiklashkare',
      'https://x.com/kartik_ane_nenu'
    ],
    jobTitle: 'Android Developer & ML Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'DIT, Pune'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Dr. D. Y. Patil Institute of Technology, Pune'
    },
    knowsAbout: [
      'Android Development',
      'AOSP',
      'Machine Learning',
      'Cloud Computing',
      'Mechanical Engineering',
      'Web Development'
    ],
    description: '21-year-old Mechanical Engineering student at DIT, Pune, with a minor in AI/ML. Passionate about Android development, cloud computing & web dev, and mechanical design.'
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
