import requests
import time
import random
import uuid

sensor1Id = uuid.uuid4()
sensor2Id = uuid.uuid4()
sensor3Id = uuid.uuid4()
location1= "1st location"
location2= "2nd location"
location3= "3rd location"
t = 2
url = 'https://example.com/data'


# Send POST request with FORM data using the data parameter

while True:
  value1 = random.randint(10, 15)
  data = {"Id": str(sensor1Id),
          "Location" : location1,
          "Value": value1}
  response = requests.post(url, data=data)
  print(response.text)
  time.sleep(t)

  value2 = random.randint(10, 15)
  data = {"Id": str(sensor2Id),
          "Location" : location2,
          "Value": value2}
  response = requests.post(url, data=data)
  print(response.text)
  time.sleep(t)

  value3 = random.randint(10, 15)
  data = {"Id": str(sensor3Id),
          "Location" : location3,
          "Value": value3}
  response = requests.post(url, data=data)
  print(response.text)
  time.sleep(t)
# Print the response

