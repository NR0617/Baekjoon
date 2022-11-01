array = [i for i in range(1, 31)]

for _ in range(28):
    a = int(input())
    array.remove(a)
    
print(min(array))
print(max(array))