import React, { useState, useEffect } from 'react';
import { User, useStore } from './LocalStore';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const store = useStore();

  useEffect(() => {
    const users = store.users;
    localStorage.setItem('users', JSON.stringify(users));
  }, [store.users]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = { username, password };
    const foundUser = store.users.find(u => u.username === user.username && u.password === user.password);
    if (foundUser) {
      setMessage('Datele sunt corecte!');
    } else {
      setMessage('Datele sunt incorecte!');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="title">Welcome!</div>
        <form className="main" onSubmit={handleLogin}>
          <div className="input_cont">
            <input className="input" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
          </div>
          <div className="input_cont">
            <input className="input" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button className="button" type="submit">Login</button>
        </form>
        
        <p className="message">{message}</p>
      </div>
    </div>
  )
}

export default App;