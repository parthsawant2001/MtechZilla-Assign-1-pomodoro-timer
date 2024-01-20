import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAULQT__GYJ5lT2XXfZWVz5jcfZ-T6NLR8',
  authDomain: 'pomodoro-timer-420dc.firebaseapp.com',
  projectId: 'pomodoro-timer-420dc',
  storageBucket: 'pomodoro-timer-420dc.appspot.com',
  messagingSenderId: 435385027907,
  appId: '1:435385027907:web:85a312f917a87f90ce33f6',
  measurementId: 'G-J5NVDXFZWB',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export { auth, provider };
