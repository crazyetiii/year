import requests

# 1.session
s = requests.Session()
# 共有的东西，基于session的请求是独立的。
s.headers = {'common': 'xjb', "test": 'com_test'}

# 头部没有的项.会添加,有的会更新。
r = s.get('https://httpbin.org/headers', headers={"test": "test"})
print(r.text)

r1 = s.get('https://httpbin.org/headers')
print(r1.text)
print(r1.headers)
print(r1.request.headers)
# 2.证书验证
print(requests.get('https://kennethreitz.org', verify=False).text)
# 3.上传图片
url = 'https://httpbin.org/post'
multiple_files = [
    ('images', ('test.png', open('test.png', 'rb'), 'image/png'))]
r = requests.post(url, files=multiple_files)
print(r.text)

# 4.代理
proxies = {
    'http': 'http://127.0.0.1:7890',
    'https': 'http://127.0.0.1:7890',
}
get = requests.get('https://github.com', proxies=proxies)
print(get.text)
# requests.get('https://github.com', proxies=proxies)
