import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vinicius Romaguera Cardozo',
  description: 'Personal website of Vinicius Cardozo',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
