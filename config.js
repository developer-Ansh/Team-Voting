import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAIwzlrgAMQJJf6tHT_yZFk81r6sjrF1Q4",
  authDomain: "pro-67-57702.firebaseapp.com",
  projectId: "pro-67-57702",
  storageBucket: "pro-67-57702.appspot.com",
  messagingSenderId: "438520655549",
  appId: "1:438520655549:web:e4704fbb6f5be327fb91d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();