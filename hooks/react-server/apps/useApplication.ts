import { Firestore as FirestoreDB } from 'firebase/firestore'
import { getApplications } from '../../../services/applicationService'
import { Firestore } from '../../../types/Firestore'

type Schemas = Firestore['schemas']
type Work = Schemas['Work'][]

export const callApplications = async (
  db: FirestoreDB,
  collectionPath: string,
  fetchLimit: number,
): Promise<{ error: boolean | string; loading: boolean; apps: Work }> => {
  let loading = false
  let error: boolean | string = false
  let apps: Work = []

  const applications = async () => {
    loading = true
    const applications = await getApplications(db, collectionPath, fetchLimit)

    if (!('error' in applications)) {
      applications.forEach((doc) => {
        apps.push({ dId: doc.id, ...doc.data() })
      })
      loading = false
    } else {
      error = applications.message
      loading = false
    }
  }

  await applications()
  return { error, loading, apps: JSON.parse(JSON.stringify(apps)) }
}
