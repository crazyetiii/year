import aiohttp
import asyncio


async def main():
    async with aiohttp.ClientSession() as session:
        async with session.get('https://docs.aiohttp.org/en/stable/index.html',proxy='http://localhost:7890') as response:
            print(await response.text())


asyncio.run(main())
