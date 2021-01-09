# webscrapper
_Webscrapper that uses puppeteer to get all pages and all posts from ragezone forum topic and store it in JSON. render in index.html_


**Just run index.html some data is already preloaded.**

How does it work ?

1. Run scrapers.js
2. it will get all data from ragezone forum on topic kalonline server 2006
3. aprox 27 pages with 15 comments on each page will be stored in array of arrays type  pages[posts['post']...]
4. result is written to JSONforum_pages.txt local file
5. copy that string into index.html <script></script> ****replace const data = value...*****
6. refresh and comments will be re-rendered on your localmachine

