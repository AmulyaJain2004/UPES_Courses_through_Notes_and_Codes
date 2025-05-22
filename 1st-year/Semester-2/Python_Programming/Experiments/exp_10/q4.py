import pandas as pd

data = {'X':[78,85,96,80,86], 'Y':[84,94,89,83,86],'Z':[86,97,96,72,83]} 

df_from_dict = pd.DataFrame(data)
print(df_from_dict)