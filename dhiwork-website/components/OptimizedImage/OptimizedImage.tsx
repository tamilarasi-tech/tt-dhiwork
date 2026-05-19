import Image from 'next/image'
import { ImageProps, RESPONSIVE_SIZES, IMAGE_QUALITY } from '@/lib/image-config'

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = IMAGE_QUALITY.high,
  sizes = RESPONSIVE_SIZES.desktop,
  className,
  objectFit = 'cover',
  objectPosition = 'center',
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 600}
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={className}
      style={{
        objectFit,
        objectPosition,
      }}
    />
  )
}
