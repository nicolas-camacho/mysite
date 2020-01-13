import firebase from 'firebase'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyAOuTIsa4bJyqfoC_kApGdz2gvZMupM4e4",
  authDomain: "blogmysite-b5fec.firebaseapp.com",
  databaseURL: "https://blogmysite-b5fec.firebaseio.com",
  projectId: "blogmysite-b5fec",
  storageBucket: "blogmysite-b5fec.appspot.com",
  messagingSenderId: "121422465069"
}

firebase.initializeApp(config)

const db = firebase.firestore()

const postsCollection = db.collection('posts')

export {
  db,
  postsCollection
}
