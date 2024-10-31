import httpx

# 1.支持http2
# client = httpx.Client(http2=True)
# r = client.get('https://www.python-httpx.org/')
# print(r.text)

# 2.异步爬虫
import asyncio
import httpx


async def spider(num):
    print('num:', num)
    async with httpx.AsyncClient(http2=True) as client:
        response = await client.get('https://www.python-httpx.org/')
        print(response.status_code)


async def main():
    await asyncio.gather(*[spider(1), spider(2), spider(3)])


asyncio.run(main())
