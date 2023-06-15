import argon2 from 'argon2';

const providedPassword = process.argv[2];

const hashedPassword =
  '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA';

try {
  const isMatching = await argon2.verify(hashedPassword, providedPassword);
  console.log('Does your password match?', isMatching);
} catch (err) {
  console.error(err);
}

// In this code, it is important to know that `argon2.verify()` returns a promise because it allows you to handle the result of the password verification asynchronously, ensuring that the code waits for the verification process to complete before proceeding with further actions.
