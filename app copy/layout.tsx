import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/website/theme-provider';
import Progressbar from '@/lib/progressbar';
import { siteConfig } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'framer-motion',
    'gsap',
    'lenis react',
    'reactscroll animation',
    'web animation',
    'design engineer',
    'image mousetrail',
    'spotlight',
    'tabs',
    'image reveal',
    'sparkles',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <Progressbar>
            <ThemeProvider attribute='class'>
              <div className='isolate min-h-screen' vaul-drawer-wrapper=''>
                {children}
              </div>
            </ThemeProvider>
          </Progressbar>
        </body>
      </html>
    </>
  );
}
