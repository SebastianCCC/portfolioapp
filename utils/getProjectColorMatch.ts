import { MutableRefObject } from 'react'
import tinycolor from 'tinycolor2'
import { LightenDarkenColor } from './changeColorTint'
import { getColorFromImage } from './getColorFromImage'
import { rgbToHex } from './rgbToHex'

export const getProjectColorMatch = (
  ref: MutableRefObject<HTMLImageElement | null>,
  brightness: number,
) => {
  const color = getColorFromImage(ref)
  const hexColor = rgbToHex(color?.[0], color?.[1], color?.[2])
  const tintetColor = LightenDarkenColor(
    hexColor,
    -tinycolor(hexColor).getBrightness() + brightness,
  )
  return tintetColor
}
