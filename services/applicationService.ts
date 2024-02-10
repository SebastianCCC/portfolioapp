import {
  CollectionReference,
  Firestore as FirebaseDB,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore'
import { Firestore } from '../types/Firestore'
import { errorParser } from '../utils/errorParser'

type Schemas = Firestore['schemas']
type application = Omit<Schemas['Work'], 'dId'>

export function getApplications(db: FirebaseDB, collectionPath: string, fetchLimit: number) {
  const collectionRef = collection(db, collectionPath) as CollectionReference<application>
  const q = query(collectionRef, orderBy('id', 'desc'), limit(fetchLimit))

  return getDocs(q)
    .then((apps) => apps)
    .catch((error) => errorParser(error))
}
