import firebase from 'firebase/app';
require("firebase/database");

import { FirebaseConfig } from './keys.dev.js';
firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();