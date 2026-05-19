import { OG_IMAGE } from '@/lib/seo'

/** Relative og/twitter image tags (Next.js Metadata API always absolutizes images). */
export function SocialShareMeta() {
  return (
    <>
      <meta property="og:image" content={OG_IMAGE.path} />
      <meta property="og:image:type" content={OG_IMAGE.type} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={OG_IMAGE.alt} />
      <meta name="twitter:image" content={OG_IMAGE.path} />
    </>
  )
}
