import threading

lock = threading.Lock()
# 确保+=或者-=的时候的原子性

num = 0


def add():
    global num
    for i in range(1000000):
        lock.acquire()
        num += 1
        lock.release()


def sub():
    global num
    for i in range(1000000):
        lock.acquire()
        num -= 1
        lock.release()


t1 = threading.Thread(target=add)
t2 = threading.Thread(target=sub)
t1.start()
t2.start()

t1.join()
t2.join()

print('num=', num)
