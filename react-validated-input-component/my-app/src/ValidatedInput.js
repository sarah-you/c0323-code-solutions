import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  const minLength = 8;
  let text;
  let pwClassName;

  if (password.length === 0) {
    text = 'Please enter a password';
    pwClassName = 'pw-err';
  } else if (password.length < minLength) {
    text = 'Password must be 8 characters long';
    pwClassName = 'pw-err';
  } else {
    text = '\u2713 You may use this password';
    pwClassName = 'pw-success';
  }

  return (
    <div className="pw-wrapper">
      <label className="password-label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={pwClassName}>{text}</div>
      </label>
    </div>
  );
}
