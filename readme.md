# 💩Scrapy💩

A small page scraper , still a WiP .
No dynamic scraping ...
This script uses axios and cheerio .

## How to use

- **Install and run**

```javascript
npm install
```

```javascript
npm run scrapy
```

- **Change the website and add yours**

```javascript
axios.get("https://chouftv.ma/press");
```

- **Change the elements by the ones you desire**

```javascript
$(".description").each((index, element) => {
  const title = $(element).children().first().text();
  const links = $(element).children("a").attr("href");
});
```

![Screenshot](scr/res.png)

```
It looks weird because i used it on a local news website.
```

- **Limitations**
  <details>
    
    <p>This is a shitty scrapper , i'm still learning.</p>
    <p>It doesn't scrap unloaded links. </p>

  ![Screenshot](scr/lm.png)

<p>In the screenshot above , the button litteraly translates to : LOAD MORE</p>
<p>Since i suck at this, i can't make it load more so i can grab the links</p>
<p>So it only grabs the latest news articles .</p>
<p>That's a blessing and a curse , beacause if clicked , it will load EVERY ARTICLE WRITTEN </p>
<p>since the deployement of the website... </p>
</details>

## Support

```
Any help improving this and adding more stuff is welcomed ! i'm still learning JS .
```

## Contact me

```
you can contact me at ZTF666@protonmail.ch or via my portfolio
```

- **💎** [Portfolio](https://ztfportfolio.web.app/) **💎**

```
Made with 💘 by a 👨‍💻 on a 💻 | 2020 | ZTF666
```
