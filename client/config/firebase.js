import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();
// export const postsRef = databaseRef.child('posts');