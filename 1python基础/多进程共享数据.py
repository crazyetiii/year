
import multiprocessing

def push(li):
    while 1:
        print('正在添加数据')
        li.append('xjb')

def pop(li):
    while 1:
        print('正在获取数据',li.pop())


if __name__ == '__main__':
    manager__list = multiprocessing.Manager().list()
    t1 = multiprocessing.Process(target=push, args=(manager__list,))
    t2 = multiprocessing.Process(target=pop, args=(manager__list,))
    t1.start()
    t2.start()
    t1.join()
    t2.join()

