import serial
arduinoSerialData = serial.Serial('COM5',9600)
output = open('outputfile.txt', 'w')

while (1==1):
    if (arduinoSerialData.inWaiting()>0):
        myData = arduinoSerialData.readline()
        decode = myData.decode('utf-8')
        print(decode)
        value = open('outputfile.txt', 'a')
        value.write(str(decode))
