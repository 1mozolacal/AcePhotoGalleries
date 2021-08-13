import json

with open('raw2') as file:
    lines = file.readlines()
    parts = []
    part= None#('',[])
    for line in lines:
        if "***" in line:
            if part is not None:
                parts.append(part)
            part = (line[3:-1],[])
        else:
            part[1].append(line)
    cleanData = {}
    cleanData2 = {}
    for ref,raw in parts:
        if len(raw)<5:
            continue
        cleanData[ref] = {}
        cleanData2[ref] = ''
        options = [x for x in raw if "option" in x]
        cleanData[ref]["prices"] = [ (x.split('$')[1]).split(" CAD")[0] for x in options]
        temp = raw[2].split("value=")[1]
        temp = temp.replace('"','')
        temp = temp.replace(">",'')
        temp = temp.replace('\n','')
        cleanData[ref]["paypalID"] = temp
    with open('out.txt','w') as out:
        json.dump(cleanData,out)
    with open('out2.txt','w') as out2:
        json.dump(cleanData2,out2)
    print(cleanData) 