n, t, k = map(int, input().split())

if k // n == t or (k % n != 0 and k // n + 1 == t):
    print(1)
else:
    print(-1)
