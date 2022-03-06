import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

const App = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassowrd] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassowrd] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          onChange={(e) => setRegisterEmail(e.target.value)}
          value={registerEmail}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setRegisterPassowrd(e.target.value)}
          value={registerPassword}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setLoginPassowrd(e.target.value)}
          value={loginPassword}
        />
        <button onClick={login}>Login</button>
      </div>

      <div>
        <h4>User Logged In:</h4>
        <p>{user?.email}</p>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default App;
