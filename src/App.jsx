import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
function App() {
  const [user, setUser] = useState(null)
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedUser = result.user
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleSignOutWithGoogle = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      <h1>Firebase + React</h1>
      <div className="card">
        {user ? <button onClick={handleSignOutWithGoogle}>Sign out</button> :
          <button onClick={handleSignInWithGoogle}>Sign In</button>}
        {user &&
          <div>
            <h1>user:{user.displayName}</h1>
          </div>
        }




      </div>
    </div>
  )
}

export default App
