import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === '' || trimmedPassword === '') {
      setError('⚠️ Please fill in both fields');
      return;
    }

    if (trimmedUsername.length < 3) {
      setError('⚠️ Username must be at least 3 characters');
      return;
    }

    if (trimmedPassword.length < 4) {
      setError('⚠️ Password must be at least 4 characters');
      return;
    }

    // تسجيل الدخول ناجح
    login();
    navigate('/Dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <span className="brand-icon">📝</span>
          <h1>TaskFlow</h1>
        </div>

        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">Sign in to continue managing your tasks</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={error && !username.trim() ? 'input-error' : ''}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error && !password.trim() ? 'input-error' : ''}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <p className="login-hint">✨ Hint: any non-empty username (≥3 chars) and password (≥4 chars) works</p>
      </div>
    </div>
  );
}