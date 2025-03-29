import type { Metadata } from "next";
import "./globals.css";
// import localFont from 'next/font/local'
import { DM_Sans as Font } from 'next/font/google'

// const font = localFont({
//   src: [
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueUltraLight.otf',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueThin.otf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueRoman.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueMedium.otf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueHeavy.otf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueBold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './fonts/helvetica-neue/HelveticaNeueBlack.otf',
//       weight: '800',
//       style: 'normal',
//     },
//   ],
// })

const font = Font({ 
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Al Habib Travels",
  description: "Al Habib Travels is a travel agency that provides Umrah, Visa, and Hotel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
