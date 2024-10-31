import asyncio


async def run(name):
    print(f'{name} start')
    await asyncio.sleep(2)
    print(f'{name} end')


# async def main():
#     await run(1) # 会一直阻塞到结果返回,此时还是同步,变成异步,需要创建任务
#     await run(2)

async def main():
    # t = asyncio.create_task(run(1)), asyncio.create_task(run(2)), asyncio.create_task(run(3))
    # await asyncio.wait(t) # create_task和wait配合

    await asyncio.gather(run(1), run(2), run(3))  # gather 直接把任务放进来就好


if __name__ == '__main__':
    asyncio.run(main())
