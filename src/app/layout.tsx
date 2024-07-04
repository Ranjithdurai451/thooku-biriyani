import type { Metadata } from 'next';
import './globals.css';

import { Josefin_Sans } from 'next/font/google';
import DefaultLayout from './_components/DefaultLayout';
import InnitialLoader from './_components/InnitialLoader';
import { ThemeProvider } from 'next-themes';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Thooku Biryani',
  description: 'Best biryani in India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <InnitialLoader />
          <DefaultLayout> {children}</DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
