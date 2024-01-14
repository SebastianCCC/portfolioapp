import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { errorParser } from '../utils/errorParser'

export function getApplications(db, collectionPath, fetchLimit) {
  const collectionRef = collection(db, collectionPath)
  const q = query(collectionRef, orderBy('id', 'desc'), limit(fetchLimit))

  return getDocs(q)
    .then((apps) => apps)
    .catch((error) => errorParser(error))
}
