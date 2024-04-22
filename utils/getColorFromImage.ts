//@ts-ignore
import ColorThief from 'colorthief/dist/color-thief.umd.js'
import { MutableRefObject } from 'react'

export const getColorFromImage = (ref: MutableRefObject<HTMLImageElement | null>) => {
  const colorThief = new ColorThief()

  if (ref.current?.complete) {
    return colorThief.getColor(ref.current)
  }
  return null
}
