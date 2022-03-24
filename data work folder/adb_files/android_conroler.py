from ppadb.client import Client as AdbClient
import time

from ppadb.device import Device

def connect():

    client = AdbClient(host="127.0.0.1", port=5037)

    devices = client.devices()

    if len(devices) == 0:
        print("No devices")
        quit()

    device = devices[0]

    print(f"Connected to {devices}")


    return device,client

if __name__ == '__main__':
    device,client = connect()

    # start phone
    device.shell('input keyevent 26')

    # wait for 5 seconds
    time.sleep(1)

    #swipe to unlock
    device.shell('input swipe 570 1593 550 511')

    # wait for 5 seconds
    time.sleep(1)

    # get the phone ti initial state
    device.shell('input keyevent 3')

    # wait for 5 seconds
    time.sleep(1)

    #tap the phone 
    device.shell('input tap 295 1721')

    #tap the keypad tab
    device.shell('input tap 142 217')

    # clear the input field
    for i in range(10):
        device.shell('input tap 892 1809')
        time.sleep(.0)
        
    device.shell('input text *544#')
    time.sleep(.1)

    # press the call button
    device.shell('input tap 532 1811')



    print("phone opened.")