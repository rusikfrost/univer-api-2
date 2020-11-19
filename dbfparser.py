#! /usr/bin/env python
# -*- coding: utf-8 -*-
from sys import getdefaultencoding


# Python 3 ====================

getdefaultencoding()


with open("Расписание 2 неделя.DBF", encoding="cp866", newline='') as file:
    
    #f = open("demofile3.json", "w")
    
   
    for line in file:
        #print(str(line).encode('cp866').decode())
        print(str(line).split('  '))
        #f.write(str(line.encode("utf-8")))
    #f.close()


x = '╨Ш╤Б╤В╨╛╤А╨╕╤П   '

print(x.encode('cp866').decode())









#from dbfpy import dbf
# Открываем имеющийся файл.
#db = dbf.Dbf("Расписание 2 неделя.DBF")

""" # Обход всех записей.
for rec in db:
    print (rec)

# Извлечение записи по номеру.
rec = db[2]

# Значения полей извлекаются по их именам.
value = rec["GROUP"]
account = rec["DAY"]
date = rec["CAFEDRA"]
 """
""" 
from dbfread import DBF
import io
with io.open('Расписание 2 неделя.DBF', 'r') as f:
    text = f.read()
    print(text)
# process Unicode text
with io.open('test.DBF', 'w', encoding='utf8') as f:
    f.write(text)


 """
""" 


for record in DBF('test.DBF'):
    print(record)
 """
# Всегда закрывайте файл.
#table.close()