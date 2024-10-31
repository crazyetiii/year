import multiprocessing
from time import sleep


def run(name):
    print(f'process {name} start\n')
    print(f'id={multiprocessing.current_process()}\n')
    sleep(1)
    print(f'process {name} end\n')


if __name__ == '__main__':
    pool = multiprocessing.Pool(3)
    for i in range(10):
        pool.apply_async(run, args=(i,))  # 异步

    pool.close()
    pool.join()
    print('main end!')

    # ps = []
    # for i in range(5):
    #     p = multiprocessing.Process(target=run, args=(i,))
    #     ps.append(p)
    #     p.start()
    #
    # for p in ps:
    #     p.join()

