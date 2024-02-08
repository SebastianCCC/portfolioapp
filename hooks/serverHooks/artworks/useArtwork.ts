import { Dribbble } from '../../../types/Dribbble'
import { getShots } from '../../../services/dribbbleService'

type Schemas = Dribbble['schemas']

export const callDribbbleShots = async () => {
  let loading = false
  let error: boolean | string = false
  let shots: Schemas['Shot'][] = []

  const dribbbleShots = async () => {
    loading = true
    const dribbbleShots = await getShots()

    if (!dribbbleShots.error) {
      shots = dribbbleShots
      loading = false
    } else {
      error = dribbbleShots.message
      loading = false
    }
  }

  await dribbbleShots()
  return { error, loading, shots }
}
