import random, requests, datetime

url = "http://localhost:8000/polls/"

for _ in range(5):
  email = ""
  l = random.randint(3, 15)
  for j in range(l):
    email += chr(random.randint(97, 113))

  password = ""
  l = random.randint(7, 15)
  for j in range(l):
    password += chr(random.randint(97, 113))

  nickname = ""
  l = random.randint(3, 15)
  for j in range(l):
    nickname += chr(random.randint(97, 113))

  name = ""
  l = random.randint(3, 15)
  for j in range(l):
    name += chr(random.randint(97, 113))

  date = "2018-07-18"
  now = datetime.datetime.now()
  nowDate = now.strftime('%Y-%m-%d')

  phone = "010"
  for j in range(8):
    phone += str(random.randint(0, 9))

  body={
    "User_id": email,
    "User_password": password,
    "User_name": name,
    "User_nickname": nickname,
    "User_birth": date,
    "User_phonenumber": phone,
    "User_joindate": nowDate,
  }
  #print(body)
  response = requests.post(url, json=body)
  print(response.text)
