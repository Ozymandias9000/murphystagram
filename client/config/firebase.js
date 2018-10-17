import firebase from 'firebase/app';
import ("firebase/database");

import { FirebaseConfig } from './keys.dev.js';
firebase.initializeApp(FirebaseConfig);

var database = firebase.database();