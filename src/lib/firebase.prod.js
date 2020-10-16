import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const {
  REACT_APP_API_KEY,
  REACT_APP_API_DOMAIN,
  REACT_APP_API_DB_URL,
  REACT_APP_API_PROJECT_ID,
  REACT_APP_API_STORAGE_BUCKET,
  REACT_APP_API_MSG_ID,
  REACT_APP_API_APP_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_API_DOMAIN,
  databaseURL: REACT_APP_API_DB_URL,
  projectId: REACT_APP_API_PROJECT_ID,
  storageBucket: REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_API_MSG_ID,
  appId: REACT_APP_API_APP_ID,
};

const firebase = Firebase.initializeApp(config);

export { firebase };
