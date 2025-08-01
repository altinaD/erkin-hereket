import type { ReactNode } from 'react';
import { GeistVariableVF } from "@/lib/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body  className={GeistVariableVF.className}>{children}</body>
    </html>
  );
}