import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCcLBEJtDx6IYRUou_1cGQz0YOb39U2ouA',
  authDomain: 'netflix-58986.firebaseapp.com',
  databaseURL: 'https://netflix-58986.firebaseio.com',
  projectId: 'netflix-58986',
  storageBucket: 'netflix-58986.appspot.com',
  messagingSenderId: '908889485052',
  appId: '1:908889485052:web:1819ca1fd5b348990af179',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
