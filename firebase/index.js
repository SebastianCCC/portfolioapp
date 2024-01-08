import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN + '.firebaseapp.com',
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET + '.appspot.com',
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default getFirestore(app)
