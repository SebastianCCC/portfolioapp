import Confetti from 'react-confetti'
import getWindowSize from '../../utils/getWindowSize'

export default function SCConfetti() {
  const window = getWindowSize()

  return <Confetti numberOfPieces={50} width={window.width} height={window.height} />
}
