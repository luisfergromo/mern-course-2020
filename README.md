# Complete MERN Stack 2020

**[Source Code](https://github.com/jeanrauwers/mern-course-bootcamp)**
Made By:

- [jeanrauwers](https://github.com/jeanrauwers)
- [ShubhayanS](https://github.com/ShubhayanS)
- [asi309](https://github.com/asi309)

---

## REQUESTS

---

POST http://localhost:8000/user/register/

Body:`{ "email": "a@email.com", "password": "123456789", "firstName": "asd", "lastName": "sdasd" }`

Response: `{ "_id": "5f3dda19157b64649020c135", "firstName": "Donald", "lastName": "Macdonald", "password": "$2b$10$xzJS2lwMg272b.WbEd6iVODOOohAkb6T9s5gr0OyHdcwsGyZJ1E6e", "email": "donaldMacdonald@email.com", "__v": 0 }`

---

GET http://localhost:8000/user/5f3dda19157b64649020c135

---

POST http://localhost:8000/event

Header: user_id:5f3de6a72de5e289a30c5aff

Body: form-data

| KEY         | VALUE                  |
| ----------- | ---------------------- |
| title       | this is a tests        |
| description | do u like pina coladas |
| price       | 30,00                  |
| thumbnail   | file                   |

Response:
`{ "_id": "5f3ecb5150eb899a7c0d40dd", "title": "this is a tests", "description": "do u like pina coladas", "price": 30, "user": "5f3de6a72de5e289a30c5aff", "thumbnail": "screenshot-1591123384028-1597950801218.jpg", "__v": 0, "thumbnail_url": "http://localhost:8000/files/screenshot-1591123384028-1597950801218.jpg", "id": "5f3ecb5150eb899a7c0d40dd" }`

---

GET http://localhost:8000/event/5f3ecb5150eb899a7c0d40dd

Response: `{ "_id": "5f3ecb5150eb899a7c0d40dd", "title": "this is a tests", "description": "do u like pina coladas", "price": 30, "user": "5f3de6a72de5e289a30c5aff", "thumbnail": "screenshot-1591123384028-1597950801218.jpg", "__v": 0, "thumbnail_url": "http://localhost:8000/files/screenshot-1591123384028-1597950801218.jpg", "id": "5f3ecb5150eb899a7c0d40dd" }`
