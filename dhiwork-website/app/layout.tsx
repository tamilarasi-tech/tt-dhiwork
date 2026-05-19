import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import { DesktopHeader } from '@/components/Header/DesktopHeader'
import { MobileHeader } from '@/components/Header/MobileHeader'
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop'
import { JsonLd } from '@/components/JsonLd'
import { SocialShareMeta } from '@/components/SocialShareMeta'
import { generateOrganizationSchema } from '@/lib/schema'
import { rootMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = rootMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <SocialShareMeta />
      </head>
      <body className={inter.className}>
        <JsonLd schema={generateOrganizationSchema()} />
        <ScrollToTop />
        <DesktopHeader />
        <MobileHeader />
        {children}
      </body>
    </html>
  )
}
