import serial
import time
timeout = time.time() + 60*0.25
arduinoSerialData = serial.Serial('COM7',9600)
output = open('outputfile.txt', 'w')

while True:
    test = 0     
    if (arduinoSerialData.inWaiting()>0):
        myData = arduinoSerialData.readline()
        decode = myData.decode('utf-8')
        print(decode)
        value = open('outputfile.txt', 'a')
        value.write(str(decode))
    if time.time() > timeout:
        break



