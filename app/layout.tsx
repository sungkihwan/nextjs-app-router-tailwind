import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import { ClientComponent } from "@/components/ClientComponent";

export const metadata: Metadata = {
  title: 'nextjs-playground',
  description: 'nextjs-playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ko" suppressHydrationWarning>
          <body>
              <ClientComponent>
                  {children}
              </ClientComponent>
          </body>
      </html>
  )
}
