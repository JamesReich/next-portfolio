import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Reich | Web Developer',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     <head />
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
