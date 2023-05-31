# api-authorization-notes

### HTTPie Operations

Register User

```
λ http -v post :8080/api/auth/sign-up username="cera" password="hellopw"
```

Sign In as User to get token

```
λ http -v post :8080/api/auth/sign-in username="cera" password="hellopw"
```

Add new entry for that user (req: authorization, title, notes, photoUrl)

```
http -v get :8080/api/entries Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiY2VyYSIsImlhdCI6MTY4NTU0OTc0N30.2_79-zg3BKEEVe8bc7uph9B7SEvB3oiLNE12obn7XxQ" title="cats" notes="I love cats" photoUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
```

Get entries for that User (req: authorization)

```
λ http -v get :8080/api/entries Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiY2VyYSIsImlhdCI6MTY4NTU0OTc0N30.2_79-zg3BKEEVe8bc7uph9B7SEvB3oiLNE12obn7XxQ"
```
