import { getApplications } from '../../../services/applicationService'

export const callApplications = async (db, collectionPath, fetchLimit, readMoreCard) => {
  let loading = false
  let error = false
  let apps = []

  const applications = async () => {
    loading = true
    const applications = await getApplications(db, collectionPath, fetchLimit)

    if (!applications.error) {
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
