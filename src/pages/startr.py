from math import ceil
for i in range(int(input())):
    num="1"
    n = int(input())
    start=ceil(int((num+(n-1)*"0"))/3)
    start_num=3*start
    found=False
    while not found:
        if start_num%2!=0 and start_num%3==0 and start_num%9 !=0:
            ans = start_num
            found=True 
        start_num+=3
    print(ans)