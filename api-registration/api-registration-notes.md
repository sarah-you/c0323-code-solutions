# api-registration-notes

## Notes

#### Passwords & hash functions (video)

plain text storage PW: most risky; you password will be leaked if hackers breach company's database

encryption: take user pw and before storing, encrypt them with encryption key; prevents hackers from obtaining real pws of users but still risky bc underneath encryption layer, is still a plain text pw; so if hacker steals encryption key, they can unlock all pws

- practical for sharing data in secure way, but not great for hacker breach

hash function: takes input (text, pw, file) -> turns it into a string of text that always has the same length

- hash functions are diff from encryption in that they only work in 1 way: you can calculate the hash of pw, but cannot hash and turn it back into original data
- by using hashes, companies can verify that you're logging in with correct pw, without having to store your actual pw
- hackers can still use brute-force to hack into hash
  - in case users have same pw, add "salt" (unique additional text); slows down hacking
- neutralize attacks: bcrypt, scrypt, argon2
