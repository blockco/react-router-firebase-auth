import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDlntIfARaHOjLfnBZ9gYRpiQZI6Sf9p80",
  authDomain: "staging-f322b.firebaseapp.com",
  databaseURL: "https://staging-f322b.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
