import shutil
import os
arr = os.listdir()
#print(arr)
for a in arr:
  try:
    b = a.split('_', 1)[1]
    shutil.copy2(a, b)
    print(a)
  except:
    pass
