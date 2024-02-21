import CustomConfetti from 'react-confetti'
import getWindowSize from '../../utils/getWindowSize'

export default function Confetti() {
  const { width, height } = getWindowSize()

  return <CustomConfetti numberOfPieces={50} width={width} height={height} />
}
