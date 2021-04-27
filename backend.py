import mysql.connector

db = mysql.connector.connect(host='35.236.236.178', user='root', passwd='root', database='covidCases')
csr = db.cursor()

csr.execute("select * from CaseData")
res = csr.fetchall

cont = []

for i in csr:
    # i[0] = row number
    # i[1] = state number
    # i[2] = code
    # i[3] = boolean isCounty
    # i[4] = county/state name
    # i[5] = state abbreviations
    # i[6] = cases
    # i[7] = probable cases
    # i[8] = deaths
    # i[9] = probable deaths
    if i[5] == 'MD':
        cont.append(i)
        print(i)

# print(cont)


