import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyB_fxoXBGodHlnRfELYoqAx4kKdq9Z-jAk",
        authDomain: "crwn-clothing-38e1f.firebaseapp.com",
        databaseURL: "https://crwn-clothing-38e1f.firebaseio.com",
        projectId: "crwn-clothing-38e1f",
        storageBucket: "crwn-clothing-38e1f.appspot.com",
        messagingSenderId: "889990352497",
        appId: "1:889990352497:web:325fb26089c5a4844195d0",
        measurementId: "G-P0W1D1QXK0"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase