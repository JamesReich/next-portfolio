import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'James Reich | Web Developer',
    description: 'Thanks for checking out my portfolio. I am excited to share with you some of the projects I have worked on and the skills I have developed...',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jreich.dev/" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.jreich.dev/" />
            <meta property="twitter:title" content={metadata.title} />
            <meta property="twitter:description" content={metadata.description} />
            <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
        </Head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
