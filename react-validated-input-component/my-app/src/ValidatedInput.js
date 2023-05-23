import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  const minLength = 8;
  let text;
  let pwClassName;
  let insertSign;

  if (password.length === 0) {
    text = 'Please enter a password';
    pwClassName = 'pw-err';
    insertSign = '❌';
  } else if (password.length < minLength) {
    text = 'Password must be 8 characters long';
    pwClassName = 'pw-err';
    insertSign = '❌';
  } else {
    text = 'You may use this password';
    pwClassName = 'pw-success';
    insertSign = '\u2713';
  }

  return (
    <div className="pw-wrapper">
      <label className="password-label">
        Password
        <input
          className="pw-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="sign">{insertSign}</div>
      </label>
      <div className={pwClassName}>{text}</div>
    </div>
  );
}
