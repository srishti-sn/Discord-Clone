import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLvcqRi8K7_D5pM53_0ZQw0s7xZ-74wzI",
    authDomain: "discord-clone-yt-bda6f.firebaseapp.com",
    projectId: "discord-clone-yt-bda6f",
    storageBucket: "discord-clone-yt-bda6f.appspot.com",
    messagingSenderId: "52655342520",
    appId: "1:52655342520:web:d1eae9bfde47802f85054d",
    measurementId: "G-LV1Y4X707B"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;