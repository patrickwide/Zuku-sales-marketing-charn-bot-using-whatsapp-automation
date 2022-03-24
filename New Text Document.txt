import pandas as pd
from ipaddress import IPv4Address  # for your IP address
from pyairmore.request import AirmoreSession  # to create an AirmoreSession
from pyairmore.request import AirmoreRequest  # to get the request method
from pyairmore.services.messaging import MessagingService  # to send messages
from pyairmore.services.device import DeviceService

ip = IPv4Address("192.168.43.1")  # whatever server's address is
session = AirmoreSession(ip,2333)  # port is default to 2333

from pyairmore.services.messaging import MessagingService
service = MessagingService(session)
csv_file = input("input the csv file: ")



#read our file
data = pd.read_csv(csv_file)
# change data to Dataframe
df = pd.DataFrame(data)
# print(df.head(4))

import time
counter = 0
for x in range(100):
    a = service.send_message(contact_or_phone=df['Contacts'][counter], content=df['Content'][counter])
  
    print(f"sent = {counter}")
    counter += 1

print(counter)

time.sleep(60)
counter = int(counter)
for a in range(100):
    a = service.send_message(contact_or_phone=df['Contacts'][counter], content=df['Content'][counter])
    print(f"sent = {counter}")
    counter += 1


time.sleep(60)
counter = counter
for a in range(100):
    a = service.send_message(contact_or_phone=df['Contacts'][counter], content=df['Content'][counter])
    print(f"sent = {counter}")
    counter += 1



#service.send_message(contact_or_phone="0781146100", content="patrickam done")

