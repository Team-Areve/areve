import requests
from bs4 import BeautifulSoup


url = "https://www.spacecloud.kr/space/38000?type=recommend"
response = requests.get(url)

print(response.status_code)

soup = BeautifulSoup(response.text, "html.parser")
title = soup.find("h2")
print(title.get_text())

text = soup.select_one("#s_intro > p")
print(text.get_text())