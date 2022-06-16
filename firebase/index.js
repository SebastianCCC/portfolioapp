import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN + '.firebaseapp.com',
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET + '.appspot.com',
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
}

const app = initializeApp(firebaseConfig)

export default getFirestore(app)
