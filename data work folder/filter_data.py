# import packages to manipulate excel files
import pandas as pd
from pandas.core import indexing
from pandas.core.frame import DataFrame
from pandas.core.tools.datetimes import to_datetime
# set to max row view
pd.set_option('display.max_rows', None)
pd.set_option("display.max_columns",None)
# read data
data = pd.read_csv("updated_charn_list.csv")

# change the data to dataframe easy to manipulate
df = pd.DataFrame(data=data)

# set the INSTALLDATE to date time format
df['INSTALLDATE'] = pd.to_datetime(df['INSTALLDATE'])

# make the INSTALLDATE the index 
df.set_index("INSTALLDATE")

# sort data
df = df.sort_values(by="INSTALLDATE")

# 1) make the row an int
df['BILLCYCLE'] = df['BILLCYCLE'].astype(float)
df['Contacts'] = df['Contacts'].astype(int)

# 10 months from today = 14 July 2022
start_date = pd.to_datetime("2020/9/14", format="%Y/%m/%d")
end_date = pd.to_datetime("today", format="%Y/%m/%d")


# 2020/9/14
# get the data from that date going down
df = df.loc[df["INSTALLDATE"] < start_date]

# select the data that we are intrested with
df = df[['INSTALLDATE','SUBS','FIRSTNAME','Contacts']]

# call client who's names are nun customers else by name
# and make a content message 
# capitalize the first the letters of the name only
df.loc[pd.isna(df['FIRSTNAME']) , "Content"] = "Dear ".capitalize() + "Customer" + " We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"
df.loc[df['FIRSTNAME'].str.len() >= 1 , "Content"] = "Dear ".capitalize() + df['FIRSTNAME'].str.capitalize() + " We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"

# filter by 1000 chunks of file
print(len(df))

len_each_data = 1000

print(df[:5])#from 0 to ...
print("breack")
print(df[5:])# from ... to last index


print(len(df))


# df.tail(1000).to_csv("tail_1000.csv")

# print(len(df.tail(1000)))
# print(df.tail(1000))
# print(df.tail(1000).to_csv("tail_1000.csv"))










# veiw all colums name 
# column_names = list(df.columns.values)
# for column_name in column_names:
#     print(column_name) 

# print(df.tail(1000).to_csv("test.csv"))








#make a content column and and adding capitalizing to the names
# df['Content'] = "hello ".capitalize() + df['FIRSTNAME'].str.capitalize() + " we actualy miss you"
# Dear STEPHEN We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674
#data["Salary"].str.len()
# df['Content'] = "Daer ".capitalize() + df['FIRSTNAME'].str.capitalize() + " We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"

# df['Content'] = df['FIRSTNAME'].str.len()

# df.loc[df['First_name'] == 'Ria', 'Status'] = 'Found'  
# df.loc[df['First_name'] != 'Ria', 'Status'] = 'Not Found' 
# df.loc[df['INSTALLDATE'] > start_date, 'Status'] = 1
# print(df['INSTALLDATE'].head(5))
