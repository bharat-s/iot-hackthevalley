import json

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
count = str(count)
var = json.dumps(count)
print(var)
