import ColorThief from 'colorthief/dist/color-thief.umd.js'

export const getColorFromImage = (ref) => {
  const colorThief = new ColorThief()

  if (ref.current?.complete) {
    return colorThief.getColor(ref.current)
  }
  return null
}
