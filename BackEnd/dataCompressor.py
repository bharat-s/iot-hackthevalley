import json
import requests

filename = 'outputfile.txt'
f = open(filename)
count = 0
lst = []
for i in f:
    for j in i:
        if '\n' not in j:
            lst += j
for item in lst[1:]:
    if item == '1':
        count += 1

print(count)

r = requests.post(
    url = 'http://localhost:3000/add',
    data = { 'count': count }
)
print(r.text)
