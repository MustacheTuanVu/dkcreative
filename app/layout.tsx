import type { Metadata } from 'next';
import '../category.css';
import '../styles/home.css';

export const metadata: Metadata = {
  title: 'Creative works exhibition — Khoa',
  description: "Khoa's graphic, motion, photoshoot, and brand identity portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
