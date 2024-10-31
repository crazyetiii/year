# requests 支持同步
# httpx 支持同步,异步
# aiohttp 支持异步

import requests, httpx, aiohttp, asyncio
import time


"""
requests 同步耗时:22.230244398117065
requests session同步耗时:10.032067060470581

httpx 同步耗时:25.819436073303223
httpx client同步耗时:11.568870306015015

httpx 异步耗时:2.6636085510253906
aiohttp 异步耗时:1.3722004890441895
"""


def run():
    start = time.time()
    client = httpx.Client()
    # session = requests.session()
    for i in range(100):
        r = client.get('https://cn.bing.com/')
        print(r.status_code)
    print(f'httpx client同步耗时:{time.time() - start}')


async def spider(num, client):
    r = await client.get(f'https://cn.bing.com/')
    print(f'启动{num},{r.status}')


async def sync_run():
    start = time.time()
    async with aiohttp.ClientSession() as client:
        lists = []
        for i in range(100):
            task = asyncio.create_task(spider(i, client))
            lists.append(task)
        await asyncio.gather(*lists)
    print(f'aiohttp 异步耗时:{time.time() - start}')


if __name__ == '__main__':
    asyncio.run(sync_run())
