import requests
import json

url = "http://f5bd-34-132-132-248.ngrok-free.app/root"

payload = json.dumps({
  "dataset": "useEffect(() => { if (isLoading) setReportLoadingStatus(state => ({  ...state, isReportLandmarkReady: false })) else setReportLoadingStatus(state => ({...state,isReportLandmarkReady: true}))}, [isLoading]) could you refactor this code please give only refactored code",
  "history": [
    "",
    ""
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwidXNlcm5hbWUiOiJtYWhjYW4wMSIsIm5iZiI6MTY5OTQ2Njk2NywiZXhwIjoxNjk5NDcwNTY3LCJpYXQiOjE2OTk0NjY5Njd9.roKB9s1YBCnhdgiJAN2msJGeUYC-wk8sxGWhiFAH3UM',
  'Host':'http://localhost',
  'Referer' : 'http://localhost'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)