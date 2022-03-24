# import packages to manipulate excel files
import pandas as pd

# set to max row view
pd.set_option('display.max_rows', None)

# read data
data = pd.read_csv("updated_charn_list.csv")

# change the data to dataframe easy to manipulate
df = pd.DataFrame(data=data)

search = df.query('Contacts=="0721262713"')
print(search)
print(search[['SUBS','FIRSTNAME','LASTNAME','Contacts','OLD_PKG','PKG','BILLCYCLE']])

