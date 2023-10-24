import requests

url = 'https://example.com/api'
data = {'key': 'value'}

# Send POST request with FORM data using the data parameter
response = requests.post(url, data=data)

# Print the response
print(response.text)