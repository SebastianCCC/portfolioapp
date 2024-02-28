import { Dribbble } from '../../../types/Dribbble'
import { getShots } from '../../../services/dribbbleService'

type Schemas = Dribbble['schemas']
type Shots = Schemas['Shot'][]

export const callDribbbleShots = async () => {
  let loading = false
  let error: boolean | string = false
  let shots: Shots = []

  const dribbbleShots = async () => {
    loading = true
    const dribbbleShots = await getShots()

    if (!('error' in dribbbleShots)) {
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
