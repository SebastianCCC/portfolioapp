import { Firestore as FirestoreDB } from 'firebase/firestore'
import { ReadMoreCardProps } from '../../../components/Work/readMoreCardData'
import { getApplications } from '../../../services/applicationService'
import { Firestore } from '../../../types/Firestore'

type Schemas = Firestore['schemas']

export const callApplications = async (
  db: FirestoreDB,
  collectionPath: string,
  fetchLimit: number,
  readMoreCard?: ReadMoreCardProps,
) => {
  let loading = false
  let error: boolean | string = false
  let apps: Schemas['Work'][] = []

  const applications = async () => {
    loading = true
    const applications = await getApplications(db, collectionPath, fetchLimit)

    if (!('error' in applications)) {
      readMoreCard ? apps.push(readMoreCard) : null
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
