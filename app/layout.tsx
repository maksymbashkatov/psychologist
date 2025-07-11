import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Диана Лонская - психоаналитический терапевт взрослых',
  description: 'Терапия очно и онлайн. Работа с бессознательным, внутренними конфликтами и травмами, поиск новых смыслов. 13 лет опыта, индивидуальный и доверительный подход.',
  alternates: {
    canonical: 'https://dianalonskaya.com',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang='ru'>
    <body>
      <Header/>
      {children}
      <Footer/>
    </body>
  </html>;
}