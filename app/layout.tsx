import './globals.css'
import { Titillium_Web as Font } from 'next/font/google'
import { Metadata } from 'next'
import '@/components/css/base.css'

const font = Font({ 
    weight: ['200', '300', '400', '600', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif']
 });

export const metadata: Metadata = {
  title: "Doner Robot",
  description: "Official Doner Robot Web Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className && "w-full h-full"}>
            {children}
        </body>
    </html>
  );
}