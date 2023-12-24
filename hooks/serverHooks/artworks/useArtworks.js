import { getShots } from '../../../services/dribbbleService'

export const callDribbbleShots = async () => {
  let loading = false
  let error = false
  let shots = []

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
