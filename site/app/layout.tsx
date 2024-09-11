import type { Metadata } from "next"
import "./globals.css"
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Revenda Móveis",
  description: "Revenda de móveis em Pelotas",
  keywords: ['revenda', 'moveis']
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body> 
        <Header />
        {children}
      </body>
    </html>
  )
}
