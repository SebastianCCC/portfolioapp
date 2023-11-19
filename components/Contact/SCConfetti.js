import Confetti from 'react-confetti'
import useWindowSize from '../../hooks/useWindowSize'

export default function SCConfetti() {
  const window = useWindowSize()

  return <Confetti numberOfPieces={50} width={window.width} height={window.height} />
}
