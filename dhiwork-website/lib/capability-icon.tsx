import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import type { IconName } from '@/lib/icons'

/** Branded capability icon for technical capability grids */
export function capabilityIcon(name: IconName, label: string) {
  return <BrandIcon name={name} size="lg" label={label} />
}
